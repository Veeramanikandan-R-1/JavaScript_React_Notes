# Revision Notes: Rendering, Reconciliation, and Keys

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

### 1. Why does Reconciliation matter in Rendering, Reconciliation, and Keys?

Reconciliation means React comparing the previous and next element trees. In interviews, connect it to Rendering, Reconciliation, and Keys by explaining the concrete UI behavior, failure state, and tradeoff.

### 2. How does Stable key affect the implementation?

Stable key means A persistent identity that lets React preserve the right list item state. Implementation depends on ownership, lifecycle, and edge cases, not only naming the API.

### 3. What mistake should you avoid around skipping real edge cases?

Avoid skipping real edge cases. Prefer the simplest reliable approach and verify it with a small example.

### 4. How would you debug a production issue related to Rendering, Reconciliation, and Keys?

Reproduce the issue, inspect the relevant state or DOM, and reduce it to a small failing case. Check edge cases, browser behavior, and tests before changing the implementation.

### 5. What would you check in code review for Rendering, Reconciliation, and Keys?

Check correctness, edge cases, readability, accessibility, performance, and test coverage. Confirm the chosen approach matches the problem and does not add unnecessary complexity.

---

# Quick Practice

1. Explain one realistic production use case for Rendering, Reconciliation, and Keys in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.

---

# Added from `react_1.docx`

* Flow: JSX -> React elements -> render work -> reconciliation -> commit DOM changes -> browser paint.
* Re-render means React calls components again; DOM update means the browser DOM actually changes.
* If root element type changes, React tears down the old subtree.
* If element type is the same, React updates changed attributes where possible.
* Virtual DOM is a React/library concept; Shadow DOM is a browser encapsulation feature.
* Fiber lets React split, pause, resume, and prioritize render work.
