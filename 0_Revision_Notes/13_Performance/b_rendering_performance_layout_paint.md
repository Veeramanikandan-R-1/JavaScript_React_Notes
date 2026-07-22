# Revision Notes: Rendering Performance, Layout, and Paint

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

### 1. What is the difference between layout and paint?

Layout calculates geometry: where elements are and how big they are. Paint draws pixels for text, images, shadows, borders, and backgrounds. Some changes trigger both; some composited changes can avoid layout and paint.

### 2. What is forced synchronous layout?

It happens when JavaScript writes to the DOM and then immediately reads layout values, forcing the browser to calculate layout early. In loops or frequent events, this becomes layout thrashing.

### 3. Which CSS/DOM changes are usually cheaper to animate?

`transform` and `opacity` are usually cheaper because they can often be composited. Animating dimensions, position, filters, or large shadows can trigger layout/paint and should be measured.

### 4. How do you debug a slow scroll interaction?

Record a trace, inspect long tasks, paint time, forced reflow warnings, and event handlers. Then reduce main-thread work, batch layout reads/writes, use passive listeners where appropriate, and simplify expensive visual effects.

### 5. What rendering issues do you flag in review?

Layout reads inside loops, scroll handlers doing heavy work, unnecessary DOM churn, expensive animations, huge box shadows/filters, and code that measures layout without accounting for fonts, images, and responsive changes.

---

# Quick Practice

1. Explain one realistic production use case for Rendering Performance, Layout, and Paint in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
