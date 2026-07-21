# SSR Hydration RSC Revision

## Must Know

* Hydration attaches client behavior to server-rendered HTML.
* Hydration mismatch happens when server HTML and first client render differ.
* Server Components cannot use state, effects, event handlers, or browser APIs.
* Client Components use `"use client"` and own interactivity.
* `"use server"` marks Server Functions, not Server Components.
* Streaming sends HTML in chunks around Suspense boundaries.

## Common Fixes

* Move browser-only logic to `useEffect`.
* Keep first render deterministic.
* Use valid HTML nesting.
* Avoid marking every component `"use client"`.
* Validate and authorize inside server functions.

