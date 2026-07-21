# Large Enterprise Frontend Codebase Study Map

These notes summarize what to learn from a large real-world frontend codebase without copying project-specific internals.

---

# 1. First Pass: Find the System Shape

When you open a large UI repo, do not start by reading random components. First find the system boundaries.

Read in this order:

1. Root README or agent notes.
2. Root `package.json`.
3. Workspace config such as `pnpm-workspace.yaml`, `turbo.json`, or `lerna.json`.
4. Main app entry file.
5. Router or route config.
6. API client layer.
7. Auth/session layer.
8. State management setup.
9. Test setup.
10. CI/build/deploy scripts.

This gives you the map before the details.

---

# 2. Typical Enterprise Frontend Layers

| Layer | What it owns |
| ----- | ------------ |
| App shell | Bootstraps the app, layout, plugins, global providers, routes, and proxies. |
| Feature packages | Business screens such as dashboards, reports, logs, settings, or admin flows. |
| Shared services | Navigation, session cleanup, telemetry, page utilities, feature flags. |
| HTTP client | Base URLs, headers, CSRF/XSRF tokens, response normalization, session timeout handling. |
| State layer | Redux/RTK, async reducers, global app state, cross-MFE state. |
| Design system | Web components, React wrappers, icons, tokens, static assets. |
| Config layer | Routes, feature gates, time filters, table columns, API payload defaults. |
| Tests | Unit tests, component tests, Cypress/Playwright flows, API intercept tests. |
| Observability | RUM, logs, error metadata, user/session context cleanup. |

---

# 3. App Shell Pattern

An app shell is the host that loads the rest of the UI.

It usually handles:

* top-level layout
* global navigation
* login/session routes
* dev proxy setup
* plugin or MFE runtime initialization
* shared services exposed to feature packages
* environment-specific behavior

Practical app shell checklist:

```text
Does it initialize providers?
Does it register remote modules?
Does it expose navigation/session services?
Does it configure API proxies?
Does it apply CSP/security headers?
Does it load design-system assets?
Does it fail gracefully if a remote module is missing?
```

---

# 4. Config-Driven UI

Enterprise apps often avoid scattering product rules across many components. Instead, they keep structured config.

Examples:

* route config: path, label, component, sidebar visibility, admin-only flag
* feature config: available features, enabled features, beta flags
* table config: columns, search keys, sort defaults, custom cell renderers
* time filter config: label, value, tooltip, feature dependency
* API config: endpoint path, method, alias for tests

Small example:

```js
const routes = {
  dashboard: {
    path: "/dashboard",
    label: "Dashboard",
    component: DashboardPage,
    access: { auth: true, sidebar: true },
    features: ["dashboard"]
  },
  reports: {
    path: "/reports",
    label: "Reports",
    component: ReportsPage,
    access: { auth: true, admin: true, sidebar: true },
    features: ["reports"]
  }
};
```

Why this helps:

* navigation can be generated from the same config
* protected routes can reuse the same metadata
* tests can target known route behavior
* feature rollout becomes easier
* translations can be centralized

---

# 5. Shared HTTP Client Pattern

A shared HTTP client prevents every feature from manually adding headers and session handling.

Common responsibilities:

* choose API base path
* add CSRF/XSRF token headers
* add tenant/overlay/account headers
* detect logged-out responses
* normalize errors
* redirect to login on session timeout
* support different backend domains in local development

Sanitized example:

```js
const httpClient = axios.create();

httpClient.interceptors.request.use((request) => {
  if (request.url?.startsWith("/api")) {
    request.headers["X-CSRFToken"] = readCookie("csrf");
    request.headers["X-Tenant"] = getCurrentTenant();
  }

  return request;
});

httpClient.interceptors.response.use(
  (response) => {
    if (response.data?.loginState === false) {
      clearSessionAndRedirect();
    }

    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      clearSessionAndRedirect();
    }

    return Promise.reject(error);
  }
);
```

Important: client-side session handling improves UX, but backend authorization must still enforce security.

---

# 6. Shared Service Factory Pattern

In app-shell or MFE systems, a feature may run in two modes:

* inside the full product shell
* standalone during local development

A service factory can use the external shell service when available and fallback when not.

```js
function createNavigationService({ windowPath }) {
  const externalService = readFromWindow(windowPath);

  if (externalService?.navigateTo) {
    return {
      ...externalService,
      isExternalAvailable: () => true
    };
  }

  return {
    navigateTo({ path, params }) {
      const url = new URL(path, window.location.origin);
      Object.entries(params || {}).forEach(([key, value]) => {
        url.searchParams.set(key, String(value));
      });
      window.location.assign(url.toString());
    },
    isExternalAvailable: () => false
  };
}
```

Why this is useful:

* features remain testable outside the host shell
* local development is easier
* product integration can happen through a stable contract
* the feature does not crash if the shell service is missing

---

# 7. Table and Filter Config Pattern

Large data screens need more than a basic table.

Practical concerns:

* default sort
* column-level search
* feature-gated columns
* clear filter behavior
* custom cell templates
* overflow tooltip for long values
* monospaced values for IDs/IPs/hashes
* server query updates when search changes
* page reset after filters change

Example idea:

```js
const baseSearchKeys = ["createdAt", "site", "device", "status"];
const advancedSearchKeys = ["policy", "action", "confidence"];

function getSearchKeys(isAdvancedEnabled) {
  return isAdvancedEnabled
    ? [...baseSearchKeys, ...advancedSearchKeys]
    : baseSearchKeys;
}
```

Senior detail: when a feature flag disables columns, also remove their active search filters from the query. Hidden filters are painful production bugs.

---

# 8. Long-Running Request Pattern

Some enterprise screens start backend jobs and poll for completion.

Good pattern:

```text
start request
-> show processing state
-> poll while status is PROCESSING
-> stop polling when user leaves the detail view
-> ignore stale responses for older request IDs
-> show success/error/cancel states clearly
```

Implementation checklist:

* store a polling token or request ID
* clear old timeouts before starting new polling
* guard async callbacks against stale state
* cancel polling on navigation or unmount
* use server `retry-after` when available
* keep user-visible loading and failure states

This is much safer than blindly running `setInterval` forever.

---

# 9. What to Add to Your Own Projects

For portfolio or work projects, borrow the patterns, not the complexity:

* centralized API client
* route config with access metadata
* feature flag helper
* reusable protected route component
* Cypress API intercept helpers
* clean session cleanup utility
* one table config example with search/sort/filter
* one polling example with cancellation
* one service fallback for standalone mode

---

# Interview Questions

### How do you understand a large frontend codebase quickly?

I first identify the app shell, package manager, workspace boundaries, route config, API client, auth/session layer, state setup, and test strategy. After that I read feature components with the system map in mind.

### Why do enterprise apps centralize route configuration?

Because routing, navigation, authorization, feature flags, breadcrumbs, and tests often need the same metadata. A central config reduces duplication and inconsistent behavior.

### What is the biggest risk in shared services?

Hidden coupling. Shared services should expose small stable APIs and support safe fallbacks, especially when features can run standalone or inside a host shell.

---

# Senior Takeaway

Enterprise frontend skill is not just writing components. It is understanding boundaries: shell vs feature, shared vs local, config vs code, client UX checks vs backend security, and synchronous UI vs long-running backend workflows.

