# Micro Frontend Manifest Runtime Revision

## Core Flow

```text
fetch manifest
-> validate config
-> cache safely
-> initialize runtime
-> import remote modules
-> render with loading/error fallback
-> cleanup on unmount
```

## Must Remember

* Manifest contains app paths, versions, exposed modules, and route/nav contributions.
* LocalStorage cache needs `try/catch` parse recovery.
* React wrappers should wait for runtime readiness.
* Imperative remote views need `ref`, `onRender`, and `dispose`.
* Shared services on `window` must have small stable contracts and safe fallbacks.
* Keep version and feature gating centralized.

## Interview Line

Micro frontends are about contracts more than components: manifest shape, runtime initialization, service boundaries, fallback behavior, versioning, and cleanup.

