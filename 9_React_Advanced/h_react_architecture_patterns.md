# React Architecture Patterns (Senior Frontend Engineer Perspective)

Before going deeper into frameworks or libraries, understand this topic as part of real frontend engineering: component boundaries, feature folders, data ownership, composition, and scalable frontend structure.

---

# 1. Fundamentals

* React helps build interactive interfaces from reusable components.
* Modern React is centered on function components, props, state, effects, hooks, and predictable rendering.
* Good React code separates UI state, server state, derived values, effects, and reusable logic.

---

# 2. Core Concepts

| Concept | Practical meaning |
| ------- | ----------------- |
| Component | A reusable piece of UI. |
| Props | Inputs passed from parent to child. |
| State | Data that changes over time and triggers rendering. |
| Effect | Synchronization with systems outside React rendering. |
| Render | Calling components to describe UI. |
| Commit | Applying changes to the host environment such as the DOM. |

---

# 3. Internal Working

* React render should stay pure: same inputs should describe the same UI.
* State updates schedule a re-render; React compares the new element tree with the previous tree and commits necessary DOM changes.
* Effects run after commit and should synchronize with external systems such as subscriptions, timers, network, or imperative widgets.

---

# 4. Common Mistakes

* Mutating state directly.
* Putting derived state in state unnecessarily.
* Using effects for calculations that belong in render.
* Using array index keys for reorderable lists.
* Optimizing with memoization before measuring.

---

# 5. Best Practices

* Keep render pure.
* Lift state only when multiple components need it.
* Prefer composition over prop tunnels.
* Use effects only for synchronization.
* Measure before memoizing.

---

# 6. Code Example

```text
src/
  app/
    router.jsx
    providers.jsx
  features/
    orders/
      api.js
      components/
      hooks/
      routes/
  shared/
    ui/
    lib/

Rule of thumb:
Feature code owns product behavior.
Shared code owns reusable primitives.
App code wires providers, routes, and shell layout.
```

---

# 7. Real-world Scenarios

* A component re-renders because parent state changed.
* A list has wrong input values because keys are unstable.
* An effect keeps refetching because dependencies are unstable.

---

# 8. Senior Deep Dive

## When to Use

* Use local state for local UI, context for scoped shared values, server-state tools for remote cache, and global stores for truly cross-cutting client state.
* Use effects for synchronization with external systems, not for derived render calculations.
* Use composition before adding global state.

## Debug Checklist

* Use React DevTools to inspect props, state, owners, and render causes.
* Check keys, effect dependencies, stale closures, and state mutation.
* Profile before adding memoization.

## Code Review Checklist

* Is state owned by the smallest sensible component?
* Are effects necessary and cleaned up?
* Are data fetching states and accessibility states complete?


---

# Revision Notes

* React Architecture Patterns matters because it affects real users, future maintainers, and production behavior.
* Learn the mental model before memorizing syntax.
* Use browser DevTools, tests, and small examples to verify behavior.
* React helps build interactive interfaces from reusable components.
* Modern React is centered on function components, props, state, effects, hooks, and predictable rendering.
* Good React code separates UI state, server state, derived values, effects, and reusable logic.

---

# Cheat Sheet

| Concept | Practical meaning |
| ------- | ----------------- |
| Component | A reusable piece of UI. |
| Props | Inputs passed from parent to child. |
| State | Data that changes over time and triggers rendering. |
| Effect | Synchronization with systems outside React rendering. |
| Render | Calling components to describe UI. |
| Commit | Applying changes to the host environment such as the DOM. |

---

# Interview Questions with Answers

### 1. How do you decide component boundaries in a large React feature?

Boundaries should follow product responsibilities, state ownership, reuse needs, and testing seams. A good component has a clear purpose and API; it is not split only because the file got long.

### 2. What is the difference between UI state, server state, and derived state?

UI state is owned by the client interaction, server state comes from remote data and needs caching/invalidation, and derived state can be calculated from existing values. Mixing them creates unnecessary effects and synchronization bugs.

### 3. When would you introduce a shared design-system component?

Introduce one when the pattern is reused, needs consistent accessibility/visual behavior, or carries product-wide interaction rules. Avoid premature shared components that freeze a pattern before the use cases are understood.

### 4. What architecture signs tell you state is in the wrong place?

Many props passed through uninterested components, duplicated state that drifts, effects that sync siblings, global stores for local behavior, and components that cannot be tested without booting a large part of the app.

### 5. What React architecture issues do you flag in review?

Unclear ownership, over-generalized components, mixed server/client state, unnecessary global state, effects used as data plumbing, inaccessible shared components, and feature code reaching into another feature's internals.

---

# Hands-on Exercises

## Exercise 1

Create a React component that demonstrates React Architecture Patterns.

### Solution

Include props, state or effects only when needed, stable keys for lists, and visible loading/error/empty states where relevant.

## Exercise 2

Review the component with React DevTools.

### Solution

Inspect props, state ownership, render behavior, effect dependencies, and accessibility names.

---

# Senior Frontend Engineer Takeaway

For senior-level work, React Architecture Patterns is not only a syntax topic. You should be able to explain the mental model, choose the right pattern for a product requirement, identify common failure modes, and verify behavior through tooling, tests, and browser inspection.
