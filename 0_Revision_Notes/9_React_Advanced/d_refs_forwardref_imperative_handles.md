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

### 1. When should you use a ref in React?

Use refs for DOM access, focus management, measuring, integrating imperative libraries, storing mutable values that should not trigger render, and keeping ids/timers. Do not use refs to bypass normal state flow for rendered data.

### 2. What is the difference between state and ref?

State changes trigger rendering and represent UI data. Ref changes do not trigger rendering and are best for imperative handles or mutable values that React does not need to display.

### 3. When would you expose an imperative handle?

Expose a small imperative API when a parent must call actions like `focus`, `scrollToItem`, `open`, or `reset` on a reusable component. Keep the handle narrow so parent components do not take over child internals.

### 4. What can go wrong with measuring DOM in React?

Measurements can be stale if layout changes after render, fonts/images load later, or CSS changes at breakpoints. Use the right timing, such as layout effects where needed, and consider `ResizeObserver` for ongoing size changes.

### 5. What ref issues do you flag in review?

Refs used as hidden state, imperative APIs that expose too much, missing cleanup for third-party widgets, unsafe focus changes, and measuring code that can cause layout thrashing.

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
