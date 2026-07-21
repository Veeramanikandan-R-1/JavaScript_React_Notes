# Enterprise Auth, Feature Flags, and Session Notes

These notes upgrade protected-route thinking from simple login checks to real product behavior.

---

# 1. Auth Is More Than Logged In

In production, route access often depends on several dimensions.

| Dimension | Example question |
| --------- | ---------------- |
| Authentication | Is the user logged in? |
| Authorization | Does the user have the required role? |
| Admin access | Is this route admin-only? |
| Feature availability | Does this tenant/product have the feature? |
| Feature enabled | Is the feature currently enabled for this account? |
| Provisioning | Has the selected account/overlay/fabric been provisioned? |
| Loading state | Are roles/features still loading? |
| Error state | Did the auth or feature API fail? |
| Layout state | Should sidebar/nav/header appear on this route? |

Senior lesson: a protected route is usually a small policy engine.

---

# 2. Route Metadata Pattern

Keep access rules beside route config.

```js
const routes = {
  overview: {
    path: "/overview",
    component: OverviewPage,
    access: { authorization: true, admin: false, sidebar: true },
    features: []
  },
  reports: {
    path: "/reports",
    component: ReportsPage,
    access: { authorization: true, admin: true, sidebar: true },
    features: ["reports"]
  },
  login: {
    path: "/login",
    component: LoginPage,
    access: { authorization: false, sidebar: false },
    features: []
  }
};
```

This config can power:

* React Router routes
* sidebar menu
* tabs
* breadcrumbs
* protected route decisions
* tests

---

# 3. Protected Route Decision Object

Instead of mixing many `if` statements in JSX, calculate a decision object.

```js
function getRouteDecision({ route, user, features, provisioning }) {
  if (user.loading || features.loading) {
    return { state: "loading" };
  }

  if (user.error || features.error) {
    return { state: "error" };
  }

  if (route.access.authorization && !user.isLoggedIn) {
    return { state: "redirect", to: "/login" };
  }

  if (route.access.admin && !user.roles.includes("admin")) {
    return { state: "unauthorized" };
  }

  const missingFeature = route.features.some(
    (feature) => !features.enabled.includes(feature)
  );

  if (missingFeature) {
    return { state: "feature-disabled" };
  }

  if (!provisioning.ready) {
    return { state: "not-provisioned" };
  }

  return { state: "allowed", showSidebar: route.access.sidebar };
}
```

Then rendering becomes straightforward:

```jsx
if (decision.state === "loading") return <Spinner />;
if (decision.state === "error") return <ErrorState />;
if (decision.state === "redirect") return <Navigate to={decision.to} replace />;
if (decision.state === "unauthorized") return <Unauthorized />;
if (decision.state === "feature-disabled") return <FeatureDisabled />;
if (decision.state === "not-provisioned") return <NotProvisioned />;

return <RouteLayout showSidebar={decision.showSidebar}>{children}</RouteLayout>;
```

---

# 4. Feature Flags: Available vs Enabled

Some enterprise APIs distinguish:

| Term | Meaning |
| ---- | ------- |
| `available` | The product/license can support this feature. |
| `enabled` | This account/tenant currently has it turned on. |

Practical example:

```js
function getVisibleTimeFilters(config, features) {
  return Object.values(config)
    .filter((item) => !item.feature || features.available.includes(item.feature))
    .map((item) => ({
      ...item,
      disabled: item.feature && !features.enabled.includes(item.feature)
    }));
}
```

This supports a good UX:

* hide options that are impossible for the product
* show disabled options when the product supports them but the account cannot use them
* optionally add a lock icon or tooltip explaining why

---

# 5. Session Cleanup

Session timeout must clear more than one variable.

Typical cleanup:

* auth cookies
* CSRF/XSRF cookies
* tenant/account/overlay cookies
* localStorage user state
* sessionStorage temporary UI state
* cached MFE config
* telemetry user context
* redirect target

Example:

```js
function clearSessionData() {
  deleteCookie("csrf");
  deleteCookie("session");
  localStorage.removeItem("currentTenant");
  localStorage.removeItem("roles");
  localStorage.removeItem("featureFlags");
  sessionStorage.removeItem("breadcrumbs");
  telemetry.removeUser?.();
}

function clearSessionAndRedirect() {
  clearSessionData();
  window.location.assign("/login");
}
```

Senior caution: client cleanup is for privacy and UX. It does not replace backend session invalidation.

---

# 6. HTTP Client Session Detection

Some legacy systems do not always return clean `401` responses. A robust client may need to detect multiple timeout shapes.

Examples:

* `401 Unauthorized`
* `200` response with `loginState: false`
* HTML login page returned instead of JSON
* special backend message such as "logged out"

```js
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

---

# 7. Global State for Cross-Feature Context

In shell/MFE systems, multiple features need the same context:

* selected tenant/account/overlay
* selected site
* selected time range
* available/enabled features
* shared table/cache data
* current timestamp

Good practice:

```text
initialize global state before remotes load
-> dispatch initial values to runtime/global store
-> remotes subscribe to stable command/event IDs
-> update shared state when user changes global filters
```

Avoid every MFE reading a different localStorage key and interpreting it separately.

---

# 8. Common Bugs

| Bug | Cause | Fix |
| --- | ----- | --- |
| User sees page then gets kicked out | Auth loading state treated as unauthorized. | Model `loading`, `anonymous`, and `authenticated` separately. |
| Hidden feature still affects API query | Feature-gated filters not removed. | Clear disabled feature filters from query state. |
| Admin route visible to normal user | Sidebar ignores route access metadata. | Generate nav from the same route config. |
| User remains tracked after logout | Telemetry user not cleared. | Clear analytics/RUM user during session cleanup. |
| MFE uses stale tenant | Remote reads localStorage once and never updates. | Use shared state/events for cross-feature context. |

---

# Interview Questions

### How do you design protected routes in a large React app?

I centralize route metadata, calculate a route decision from auth, roles, feature flags, provisioning, loading, and error states, then render the correct allowed, redirect, unauthorized, disabled, loading, or error UI.

### Why should frontend feature flags not be treated as security?

Because frontend code can be inspected and modified. Feature flags improve UX and rollout control, but backend APIs must still enforce authorization.

### What should happen on session timeout?

The app should clear cookies, localStorage, sessionStorage, cached runtime config, telemetry user context, and redirect to the correct login route.

---

# Senior Takeaway

Enterprise auth is a state machine. The best code makes every state explicit: loading, allowed, redirected, unauthorized, feature disabled, not provisioned, and error.

