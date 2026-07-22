# Revision Notes: State Management Decision Tree

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

### 1. How do you decide where state should live in a React app?

Start local. Lift state when siblings need it, use context for scoped shared values, use server-state tools for remote data, and use a global store for cross-cutting client state that many unrelated areas need.

### 2. What is the difference between client state and server state?

Client state is owned by browser interaction, such as open panels or unsaved form input. Server state is remote data that needs fetching, caching, invalidation, refetching, and stale-data handling.

### 3. When is global state a bad choice?

It is bad when the state is local, temporary, or only shared by nearby components. Global state makes ownership less obvious and can create unnecessary rerenders, stale data, and harder tests.

### 4. What is duplicated derived state, and why is it risky?

It stores a value that can be calculated from other state, such as totals, filtered lists, or selected labels. The copies can drift, leading to effects that only exist to synchronize state that should have been derived.

### 5. What state-management issues do you flag in review?

State owned too high, global stores for local UI, duplicated server data, effects used for synchronization, unclear update ownership, and selectors that subscribe components to more state than they need.

---

# Quick Practice

1. Explain one realistic production use case for State Management Decision Tree in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
