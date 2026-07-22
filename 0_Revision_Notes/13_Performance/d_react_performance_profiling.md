# Revision Notes: React Performance and Profiling

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

### 1. How do you know a React performance problem is actually a React problem?

Profile first. The bottleneck may be React rendering, JavaScript outside React, layout/paint, network, images, or third-party scripts. Use React Profiler and browser Performance traces together.

### 2. What does the React Profiler tell you?

It shows which components rendered, how long they took, and why commits happened. It helps identify expensive renders, unnecessary parent updates, and props/state changes that cascade through the tree.

### 3. What are common causes of unnecessary React renders?

State owned too high, context values changing identity, unstable object/function props, selectors returning new references, key changes, and effects that set derived state.

### 4. When is `useMemo` not the right fix?

When the calculation is cheap, dependencies change every render, the bottleneck is elsewhere, or the complexity outweighs the gain. Often the better fix is moving state down, splitting components, or reducing work.

### 5. What React performance issues do you flag in review?

Premature memoization, expensive work in render, large context providers, avoidable list rerenders, effects that trigger render loops, and no measurement for risky performance changes.

---

# Quick Practice

1. Explain one realistic production use case for React Performance and Profiling in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
