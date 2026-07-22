# Revision Notes: Virtualization and Large Lists

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

### 1. When should you use list virtualization?

Use virtualization when rendering many rows/cards creates slow initial render, scrolling jank, or high memory use. It renders only the visible window plus overscan instead of the entire list.

### 2. What are the tradeoffs of virtualization?

It adds complexity around dynamic row heights, keyboard navigation, screen readers, find-in-page, sticky headers, scroll restoration, and measuring. It should be used when the performance gain justifies those costs.

### 3. Why are stable item keys still important in virtualized lists?

Rows are reused as the user scrolls. Stable keys and item identities prevent wrong row state, focus jumps, incorrect selection, and stale rendered content.

### 4. How do you handle variable-height rows?

Use a virtualization library that supports measurement, cache row heights carefully, update measurements when content changes, and test images, expanded rows, wrapping text, and responsive widths.

### 5. What large-list issues do you flag in review?

Rendering thousands of nodes, filtering/sorting every render, index keys, no empty/loading states, inaccessible virtualized content, broken scroll restoration, and virtualization added before measuring the real bottleneck.

---

# Quick Practice

1. Explain one realistic production use case for Virtualization and Large Lists in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
