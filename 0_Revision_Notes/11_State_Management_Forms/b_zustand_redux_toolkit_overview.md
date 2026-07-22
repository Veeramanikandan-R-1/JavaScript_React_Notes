# Revision Notes: Zustand and Redux Toolkit Overview

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

### 1. When would you choose Redux Toolkit over Zustand?

Redux Toolkit fits teams that need strict conventions, serializable actions, strong DevTools workflows, middleware, and predictable patterns at scale. Zustand is lighter and ergonomic for smaller or more localized global-client-state needs.

### 2. Why are selectors important in global state?

Selectors let components subscribe to only the data they need, which reduces rerenders and keeps components decoupled from full store shape. Poor selectors can make the whole screen rerender on unrelated changes.

### 3. What state should not go into Redux or Zustand?

Most server state, route state, one-off local input, ephemeral hover/open state, and derived values usually do not belong there. A store should solve sharing and coordination, not become a dumping ground.

### 4. How do you debug a store update that causes too many rerenders?

Use React Profiler and store DevTools/logging, inspect selectors, check object identity, and verify whether updates are too broad. Split slices/selectors or normalize state if needed.

### 5. What store-related issues do you flag in review?

Unclear ownership, non-serializable Redux state where tooling expects serializable data, store writes from random components, selectors returning new objects every time, and server data copied into global client state.

---

# Quick Practice

1. Explain one realistic production use case for Zustand and Redux Toolkit Overview in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
