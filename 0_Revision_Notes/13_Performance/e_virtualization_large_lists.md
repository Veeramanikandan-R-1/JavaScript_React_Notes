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

# Interview Questions & Answers

### 1. How would you explain Virtualization and Large Lists in a real project?

Performance work starts with measurement: Web Vitals, DevTools traces, bundle analysis, React Profiler, and real-user metrics.

### 2. What happens internally when Virtualization and Large Lists is involved?

The bottleneck might be network, parsing, JavaScript execution, rendering, images, fonts, server latency, or too many React renders.

### 3. How do you debug issues related to Virtualization and Large Lists?

I optimize the biggest measured issue first and protect it with a budget, test, or monitoring signal.

### 4. What is the biggest production risk with Virtualization and Large Lists?

The biggest risk is building something that works for the demo state but fails with real content, slow networks, accessibility needs, errors, or future changes.

### 5. What should a senior engineer look for in code review?

They should check the mental model, edge cases, accessibility, performance cost, naming, state ownership, test coverage, and whether the simpler native/platform option was considered.

---

# Quick Practice

1. Explain Virtualization and Large Lists in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
