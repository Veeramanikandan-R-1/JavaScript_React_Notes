# Revision Notes: State, useState, and Events

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

### 1. Why should React state be treated as immutable?

React uses reference changes to know when state changed and to support predictable rendering. Mutating the existing object or array can cause skipped renders, stale UI, and bugs that are hard to trace.

### 2. When should you use the functional form of `setState`?

Use it when the next state depends on the previous state, especially with repeated clicks, timers, async callbacks, or batched updates: `setCount((count) => count + 1)`.

### 3. Why might `console.log(state)` after `setState` show the old value?

State updates are scheduled; they do not synchronously replace the variable in the current render. The logged value belongs to the current closure. Inspect the next render or use an effect when you need to observe committed state.

### 4. How do you decide whether something should be state or a derived value?

If it can be calculated from props or existing state during render, derive it instead of storing another copy. Extra state creates synchronization bugs, especially with filters, totals, selected labels, and validation summaries.

### 5. What state/event bugs do you look for in review?

Direct mutation, duplicated derived state, stale closures in handlers, state owned too high or too low, event handlers doing too much work, and updates after async ownership has changed.

---

# Quick Practice

1. Explain one realistic production use case for State, useState, and Events in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.

---

# Added from `react_1.docx`

* Use functional state updates when next state depends on previous state: `setCount((count) => count + 1)`.
* Functional updaters avoid stale values during batched updates.
* Lift state to the closest common parent when sibling components share changing data.
* Do not lift state higher than needed.
* Class component methods need `this` binding unless using arrow class fields.
