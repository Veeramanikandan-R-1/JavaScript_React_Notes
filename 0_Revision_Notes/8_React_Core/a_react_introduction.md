# Revision Notes: React Introduction

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

### 1. What problem does React solve in a frontend application?

React helps describe UI as a function of state and props, split the interface into reusable components, and update the DOM predictably when data changes. The main value is not JSX; it is the rendering model and component composition.

### 2. What does “render should be pure” mean in React?

A component should calculate UI from props, state, and context without causing side effects during render. Network calls, subscriptions, DOM mutation, timers, and logging that affects behavior belong outside render, usually in effects or event handlers.

### 3. How do you decide where state should live?

Put state in the smallest component that owns the interaction. Lift it when siblings need coordination, use context for scoped shared values, use server-state tools for remote cache, and use global client state only when many unrelated areas truly need it.

### 4. What is the difference between React state and server state?

React state is client-owned UI/application state. Server state is remote data with loading, caching, refetching, invalidation, and stale-data concerns. Treating server data as simple local state often creates duplicated fetches and inconsistent screens.

### 5. What do you inspect first when reviewing a React component?

State ownership, render purity, prop contract, accessibility, effect necessity/cleanup, error/loading/empty states, and whether the component follows existing patterns before adding new abstraction.

---

# Quick Practice

1. Explain one realistic production use case for React Introduction in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
