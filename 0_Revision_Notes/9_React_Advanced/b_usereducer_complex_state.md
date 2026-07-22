# Revision Notes: useReducer and Complex State

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

### 1. When would you choose `useReducer` over multiple `useState` calls?

Use `useReducer` when state transitions are related, complex, or easier to understand as named events. It works well for wizards, forms, async state machines, undo/redo, and flows with several coordinated fields.

### 2. What makes a reducer good?

A good reducer is pure, returns new state without mutation, uses meaningful action names, handles unknown actions deliberately, and keeps side effects outside the reducer.

### 3. Why should actions describe events instead of setters?

An action like `shippingAddressUpdated` explains what happened and lets the reducer own the transition. Setter-style actions can scatter business rules across event handlers and make complex flows harder to audit.

### 4. How do you test reducer logic?

Test the reducer as a pure function with current state, action, and expected next state. Include invalid actions, edge cases, reset behavior, and transitions that must preserve parts of state.

### 5. What reducer issues do you look for in review?

Mutation, side effects inside reducers, action names that hide intent, duplicated derived state, too many unrelated concerns in one reducer, and missing tests for important transitions.

---

# Quick Practice

1. Explain one realistic production use case for useReducer and Complex State in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
