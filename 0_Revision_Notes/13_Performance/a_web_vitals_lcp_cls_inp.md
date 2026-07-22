# Revision Notes: Web Vitals, LCP, CLS, and INP

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

### 1. What do LCP, CLS, and INP measure?

LCP measures when the main content appears, CLS measures unexpected layout movement, and INP measures interaction responsiveness. Together they connect performance work to user-visible loading, stability, and input delay.

### 2. How would you improve a poor LCP score?

Identify the LCP element, then improve server response, resource priority, image sizing/format, CSS delivery, font loading, and JavaScript blocking. Do not guess; inspect field data and a trace.

### 3. What causes CLS in real apps?

Images without dimensions, late-loading ads/banners, web fonts swapping, injected content above existing content, skeletons with different final sizes, and route transitions that do not reserve space.

### 4. How do you debug poor INP?

Use field data to find affected interactions, then capture a Performance trace. Look for long tasks, expensive event handlers, heavy React renders, layout thrashing, and synchronous work blocking the next paint.

### 5. What performance checks do you do in review?

Image dimensions and priority, font strategy, bundle impact, route-level lazy loading, third-party scripts, loading states that reserve space, and whether the change has before/after measurement when performance risk is real.

---

# Quick Practice

1. Explain one realistic production use case for Web Vitals, LCP, CLS, and INP in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
