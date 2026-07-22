# Revision Notes: Schema Validation with Zod or Yup

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

### 1. What problem does schema validation solve in frontend forms?

It centralizes expected shape, constraints, transformations, and error generation for form/API data. It is especially useful at runtime boundaries where TypeScript alone cannot verify incoming values.

### 2. How is schema validation different from TypeScript types?

TypeScript checks code at compile time. Schemas validate actual runtime data, such as form input, API responses, local storage, and URL params. Many teams infer TypeScript types from schemas to avoid duplication.

### 3. Where should server validation errors appear in the UI?

Field-specific errors should attach to the relevant field. Form-level errors should appear in a summary or alert area. The UI should preserve user input and make recovery clear.

### 4. What can go wrong with schema transforms?

Transforms can change types or values in ways the UI does not expect, especially with empty strings, numbers, dates, and optional fields. Keep raw input and submitted payload expectations clear.

### 5. What schema-validation issues do you flag in review?

Duplicated client/server rules, vague error messages, schemas that reject valid partial input too early, unchecked API responses, and form code that ignores resolver output or server errors.

---

# Quick Practice

1. Explain one realistic production use case for Schema Validation with Zod or Yup in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
