# Revision Notes: URL Params and Search Params

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

### 1. What belongs in path params versus search params?

Path params identify required resources, such as `/products/:id`. Search params represent optional view state such as filters, sort, search text, tab, and pagination.

### 2. Why store filters in the URL?

URL filters make the state shareable, bookmarkable, restorable on reload, and compatible with browser history. The tradeoff is that parsing, defaults, validation, and URL update frequency must be designed.

### 3. How do you handle invalid URL params?

Parse them explicitly, validate the shape, fall back to defaults or show a not-found/error state, and avoid trusting params as typed values. Route params and query params arrive as strings.

### 4. What bug happens when state and search params are duplicated?

They can drift: the UI shows one filter while the URL says another. Prefer deriving view state from the URL or using a single well-defined synchronization path.

### 5. What URL-state issues do you flag in review?

Unvalidated params, update loops, noisy history entries on every keystroke, missing defaults, losing params during navigation, and query keys that do not include URL-driven inputs.

---

# Quick Practice

1. Explain one realistic production use case for URL Params and Search Params in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
