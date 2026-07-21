# Revision Notes: React Re-render Optimization

## Re-render Causes

* state change
* props change
* parent re-render
* consumed context value changes

---

# Tools

* `React.memo`
* `useMemo`
* `useCallback`
* component splitting
* stable keys
* virtualization
* React DevTools Profiler

---

# Rule

Measure before optimizing.

---

# Added from `react_1.docx`

* Bundler: code splitting, chunking, tree shaking.
* CDN/network: cache static assets close to users.
* Server: faster APIs, SSR/streaming where useful.
* Assets: compressed images, responsive images, lazy loading.
* UI rendering: memoization, virtualization, smaller DOM, fewer unnecessary updates.
* Cleanup: clear timers, remove listeners, avoid long synchronous work.
* Skeleton/shimmer UI can improve perceived loading, but real loading/error states still matter.
