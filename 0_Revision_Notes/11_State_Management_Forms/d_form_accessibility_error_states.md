# Revision Notes: Form Accessibility and Error States

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

### 1. What makes a form field accessible?

It has a programmatic label, clear instructions, valid input semantics, keyboard support, visible focus, and any help/error text connected to the field with accessible relationships.

### 2. How should errors be announced after submit?

Show a summary when useful, connect each field error to its input, and move focus to the first invalid field or summary depending on form complexity. The user should understand what failed and how to fix it.

### 3. Why is disabling the submit button often not enough?

A disabled button may not explain what is wrong and may be skipped by assistive technology. If submit is disabled, the UI should still communicate requirements and errors clearly.

### 4. How do you handle async validation accessibly?

Show pending state near the field, avoid stealing focus, cancel stale checks, and announce final errors clearly. Username/email availability checks are a common example.

### 5. What form-accessibility issues do you flag in review?

Missing labels, placeholder-only fields, color-only errors, errors not associated with inputs, focus lost after submit, inaccessible custom controls, and validation that changes layout unpredictably.

---

# Quick Practice

1. Explain one realistic production use case for Form Accessibility and Error States in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
