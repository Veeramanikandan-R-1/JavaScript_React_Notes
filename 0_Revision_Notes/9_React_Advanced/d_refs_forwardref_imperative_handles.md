# Revision Notes: Refs, forwardRef, and Imperative Handles

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

### 1. Why does Ref matter in Refs, forwardRef, and Imperative Handles?

Ref means A stable object for DOM nodes or mutable values without triggering render. In interviews, connect it to Refs, forwardRef, and Imperative Handles by explaining the concrete UI behavior, failure state, and tradeoff.

### 2. How does forwardRef affect the implementation?

forwardRef means A way for a component to expose a child ref to its parent. Implementation depends on ownership, lifecycle, and edge cases, not only naming the API.

### 3. What mistake should you avoid around skipping real edge cases?

Avoid skipping real edge cases. Prefer the simplest reliable approach and verify it with a small example.

### 4. How would you debug a production issue related to Refs, forwardRef, and Imperative Handles?

Reproduce the issue, inspect the relevant state or DOM, and reduce it to a small failing case. Check edge cases, browser behavior, and tests before changing the implementation.

### 5. What would you check in code review for Refs, forwardRef, and Imperative Handles?

Check correctness, edge cases, readability, accessibility, performance, and test coverage. Confirm the chosen approach matches the problem and does not add unnecessary complexity.

---

# Quick Practice

1. Explain one realistic production use case for Refs, forwardRef, and Imperative Handles in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.

---

# Added from `react_1.docx`

* `useRef` persists a mutable value across renders without triggering re-render.
* Good uses: DOM focus, uncontrolled values, timer IDs, previous values, render counters, third-party DOM APIs.
* If a value should update the visible UI, use state instead of ref.
* Focus pattern: `inputRef.current?.focus()`.
* Uncontrolled submit pattern: call `event.preventDefault()`, then read `inputRef.current.value`.
