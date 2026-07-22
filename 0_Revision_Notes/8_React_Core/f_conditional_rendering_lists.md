# Revision Notes: Conditional Rendering and Lists

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

### 1. What UI states should a data-driven list usually render?

Loading, success with items, empty, error, background refetching, permission/auth blocked, and sometimes partial data. Senior candidates should mention that each state needs accessible text and stable layout.

### 2. Why should conditional rendering avoid hiding important state transitions?

If loading, empty, and error states collapse into `null`, users get blank screens and debugging becomes harder. Clear conditional branches make behavior testable and easier to review.

### 3. How do keys affect list item state?

Keys tell React which item identity should be preserved across renders. Bad keys cause item-local state, focus, animations, and input values to attach to the wrong item after changes.

### 4. How do you render a large list without freezing the page?

Start with pagination or server-side filtering if product flow allows it. For large client-side lists, use virtualization, memoized row data where useful, stable keys, and measured render performance.

### 5. What list rendering issues do you flag in review?

Index keys, missing empty/error states, nested ternaries that hide behavior, expensive filtering/sorting on every render, inaccessible loading text, and item actions that lose focus or state after reorder.

---

# Quick Practice

1. Explain one realistic production use case for Conditional Rendering and Lists in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
