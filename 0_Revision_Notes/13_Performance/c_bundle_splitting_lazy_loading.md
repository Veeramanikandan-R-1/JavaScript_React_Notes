# Revision Notes: Bundle Splitting and Lazy Loading

* Frontend performance is user experience.
* Measure before optimizing, then fix the bottleneck closest to user pain.
* Performance includes network, JavaScript, rendering, images, fonts, server timing, and interaction responsiveness.
* Best practice: Measure with DevTools, Lighthouse, React Profiler, and real-user metrics.
* Best practice: Set budgets for images, fonts, and JavaScript.
* Best practice: Defer non-critical work.
* Best practice: Optimize the biggest bottleneck first.
* Avoid: Optimizing random code without profiling.
* Avoid: Shipping huge bundles for rarely used routes.
* Avoid: Animating layout-heavy properties.
* Avoid: Ignoring low-end devices and slow networks.

---

# Cheat Sheet

| Concept | Practical meaning |
| ------- | ----------------- |
| LCP | Largest Contentful Paint. |
| CLS | Cumulative Layout Shift. |
| INP | Interaction to Next Paint. |
| Long task | Main-thread work that blocks responsiveness. |
| Code splitting | Loading code only when needed. |

---

# Interview Questions with Answers

### 1. When does code splitting improve performance?

It helps when noncritical route, feature, or heavy-library code can be loaded later, reducing initial JavaScript parse/execute cost. It does not help if it delays code needed for the first meaningful screen.

### 2. What can go wrong with lazy loading?

Users may see late spinners, layout shifts, route delays, failed chunk loads, or waterfalls where lazy chunks load too late. Good lazy loading includes meaningful fallbacks and preloading when intent is clear.

### 3. How do you decide what belongs in the initial bundle?

Keep code needed for the initial route, above-the-fold interaction, and app shell. Move rare flows, admin-only tools, large charts, editors, maps, and payment/vendor integrations into later chunks when product flow allows it.

### 4. How do you investigate a bundle-size regression?

Compare bundle analyzer output before and after, inspect new dependencies, duplicate packages, import paths, tree-shaking, dynamic imports, and whether a small import pulled in a large library.

### 5. What lazy-loading issues do you flag in review?

Lazy loading without fallback UI, splitting tiny components with no benefit, chunk waterfalls, not handling chunk-load failure, and imports that prevent tree shaking.

---

# Quick Practice

1. Explain one realistic production use case for Bundle Splitting and Lazy Loading in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
