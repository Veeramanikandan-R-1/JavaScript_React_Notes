# Revision Notes: React Architecture Patterns

* React helps build interactive interfaces from reusable components.
* Modern React is centered on function components, props, state, effects, hooks, and predictable rendering.
* Good React code separates UI state, server state, derived values, effects, and reusable logic.
* Best practice: Keep render pure.
* Best practice: Lift state only when multiple components need it.
* Best practice: Prefer composition over prop tunnels.
* Best practice: Use effects only for synchronization.
* Best practice: Measure before memoizing.
* Avoid: Mutating state directly.
* Avoid: Putting derived state in state unnecessarily.
* Avoid: Using effects for calculations that belong in render.
* Avoid: Using array index keys for reorderable lists.

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

# Quick Practice

1. Explain one realistic production use case for React Architecture Patterns in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
