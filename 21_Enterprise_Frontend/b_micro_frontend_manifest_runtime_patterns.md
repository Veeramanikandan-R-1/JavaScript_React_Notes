# Micro Frontend Manifest and Runtime Patterns

These notes explain practical micro frontend patterns observed in a real product-style setup and rewritten as reusable learning material.

---

# 1. What a Manifest Does

A micro frontend manifest is a JSON contract that tells the shell:

* which remote apps exist
* where their assets are hosted
* which version to load
* which modules/components are exposed
* where each module contributes navigation or routes

Example shape:

```json
{
  "projectVersion": "latest",
  "environment": "dev",
  "baseUrl": "https://cdn.example.com/mfe/",
  "apps": {
    "reports": {
      "path": "reports",
      "versions": {
        "cloud": "1.0.0",
        "onprem": "1.0.0"
      }
    }
  }
}
```

Do not hard-code real environment URLs in reusable notes or examples. Keep them in deployment config or environment variables.

---

# 2. Package Manifest Contribution

Each feature package can expose public modules and navigation contributions.

```js
export default {
  outDir: "dist",
  manifest: ({ assetRef }) => ({
    "company.product.feature.reports": {
      public: {
        ReportsPage: assetRef("./src/ReportsPage.jsx")
      },
      contributions: {
        "company.product.shell/nav": [
          {
            id: "reports",
            target: "root",
            routeSegment: "reports",
            label: "Reports",
            title: "Reports",
            module: assetRef("./src/ReportsPage.jsx")
          }
        ]
      }
    }
  })
};
```

Meaning:

| Property | Purpose |
| -------- | ------- |
| `public` | Modules other packages or the shell can import. |
| `contributions` | Where this feature plugs into the shell. |
| `routeSegment` | Route piece owned by the feature. |
| `module` | Component or view loaded for that route. |

---

# 3. Manifest Loading Flow

Typical shell flow:

```text
read environment/version
-> build manifest URL
-> fetch manifest JSON
-> fetch additional config if needed
-> replace deploy-time placeholders
-> cache validated manifest
-> initialize runtime
-> notify React wrappers that runtime is ready
```

Good implementation habits:

* fetch independent configs with `Promise.all`
* throw on non-OK HTTP responses
* validate shape before storing
* parse localStorage with try/catch
* remove corrupted cache entries
* include loading and error states
* avoid exposing sensitive values through global config

---

# 4. Local Cache with Parse Recovery

Bad localStorage data should not break the app forever.

```js
function readCachedManifest() {
  try {
    const raw = localStorage.getItem("mfe_config");
    return raw ? JSON.parse(raw) : null;
  } catch {
    localStorage.removeItem("mfe_config");
    return null;
  }
}
```

Senior point: localStorage is a cache, not a source of truth. Treat it as untrusted input.

---

# 5. Runtime Initialization Event

React components may render before the MFE runtime is ready. A simple event can bridge that timing.

```js
window.dispatchEvent(new CustomEvent("shell:mfe-runtime-ready"));
```

The wrapper can wait:

```jsx
useEffect(() => {
  if (runtime.isReady()) {
    loadRemote();
    return;
  }

  window.addEventListener("shell:mfe-runtime-ready", loadRemote);

  return () => {
    window.removeEventListener("shell:mfe-runtime-ready", loadRemote);
  };
}, [loadRemote]);
```

This is cleaner than retrying forever with timers.

---

# 6. React Wrapper for Imperative Remote Views

Remote modules sometimes return an imperative view object instead of a React component. Bridge it with `ref` and cleanup.

```jsx
function RemoteWidget({ runtime, componentId }) {
  const containerRef = useRef(null);
  const remoteViewRef = useRef(null);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    let disposed = false;

    async function load() {
      try {
        setStatus("loading");
        const remoteView = await runtime.import(componentId);

        if (disposed || !containerRef.current) return;

        remoteViewRef.current = remoteView;
        containerRef.current.replaceChildren(remoteView.getDOMNode());
        remoteView.onRender?.();
        setStatus("ready");
      } catch {
        if (!disposed) setStatus("error");
      }
    }

    load();

    return () => {
      disposed = true;
      remoteViewRef.current?.dispose?.();
      remoteViewRef.current = null;
      containerRef.current?.replaceChildren();
    };
  }, [runtime, componentId]);

  if (status === "loading") return <Spinner />;
  if (status === "error") return <ErrorState />;

  return <div ref={containerRef} />;
}
```

Key ideas:

* use a ref for DOM ownership
* clear old DOM before appending new DOM
* call remote lifecycle hooks if provided
* dispose on cleanup
* protect against stale async resolution
* provide loading and error states

---

# 7. Shared Service Bridge

Some shells expose services for remote features:

```js
window["product-services"] = {
  navigation,
  telemetry,
  session,
  router
};
```

This can work, but keep the API small and stable.

Good service contracts:

```js
navigation.navigateTo({ path: "/reports", params: { tab: "scheduled" } });
telemetry.addAction("report.generated");
session.clearAndRedirect();
```

Risks:

* global names can collide
* services may be unavailable in local development
* breaking a service contract can break many remotes
* sensitive data should not be placed on `window`

Use a fallback service for standalone mode.

---

# 8. Version and Feature Gating

A shell may choose different MFE versions based on deployment mode, tenant, product version, or feature support.

Keep this logic centralized:

```js
function resolveMfeVersion(appConfig, runtimeContext) {
  if (runtimeContext.isOnPrem) return appConfig.versions.onprem;
  if (runtimeContext.isCloud) return appConfig.versions.cloud;
  return appConfig.versions.default;
}
```

Avoid scattering version decisions inside individual feature components.

---

# 9. Security and Reliability Checklist

* Validate manifest schema before loading.
* Use HTTPS/CDN URLs from environment config.
* Avoid `unsafe-inline` CSP in production where possible.
* Use subresource integrity or signed manifests when required.
* Handle manifest fetch failure with a clear fallback.
* Do not trust role/feature data stored in localStorage.
* Remove corrupted cached manifest data.
* Keep remote module IDs stable.
* Clean up DOM and event listeners on unmount.

---

# Interview Questions

### What is a micro frontend manifest?

It is a runtime contract that tells the shell which remote apps exist, where assets are hosted, what versions to load, and how each remote contributes routes or UI modules.

### How do you safely load a remote component in React?

Use a wrapper component with loading/error state, wait for runtime readiness, import the remote module, attach it through a ref if it is imperative, and dispose it during cleanup.

### What is a common MFE production bug?

Stale or invalid runtime config. The app should validate manifest shape, handle failed fetches, recover from corrupted localStorage cache, and provide useful error states.

---

# Senior Takeaway

Micro frontends are about contracts more than components. The important pieces are manifest shape, runtime initialization, service boundaries, versioning, fallback behavior, and cleanup.

