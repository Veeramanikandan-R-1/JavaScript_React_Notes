# Revision Notes: Custom Hooks and Reusable Logic

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

### 1. When should you extract a custom hook?

Extract a custom hook when stateful logic is reused, when a component is becoming hard to read, or when an external system needs a clean React API. Do not extract only to make a file look smaller if the abstraction has no clear purpose.

### 2. What makes a custom hook API good?

It has clear inputs and outputs, owns cleanup, documents async/error states, avoids surprising side effects, and keeps stable references where consumers reasonably depend on them.

### 3. How do you test a custom hook?

Test through a small component or hook-testing utility, depending on the stack. Cover initial state, updates, cleanup, async success/failure, stale responses, and dependency changes.

### 4. What can go wrong when a hook hides too much?

Consumers may not understand when network calls happen, how errors are handled, what triggers rerenders, or how cleanup works. A reusable hook should reduce complexity, not move it into a black box.

### 5. What custom-hook issues do you flag in review?

Missing dependency handling, no cleanup, returning unstable objects/functions unnecessarily, mixing unrelated responsibilities, hiding product decisions, and hooks that are reusable in name only.

---

# Quick Practice

1. Explain one realistic production use case for Custom Hooks and Reusable Logic in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.

---

# Added from `react_1.docx`

* Custom hooks start with `use` and can call other hooks.
* Use custom hooks to share stateful logic, not markup.
* Examples: `useLocalStorage`, `useCounter`, `useDocumentTitle`, `useDebouncedValue`, `useAuthUser`, `useWindowSize`.
* Custom hooks often replace HOC/render-prop nesting in modern React.
