# Revision Notes: React Forms, Controlled and Uncontrolled Inputs

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

### 1. What is the difference between controlled and uncontrolled inputs in React?

A controlled input gets its value from React state and updates through React handlers. An uncontrolled input keeps its current value in the DOM and is read with a ref or form submission. Controlled inputs give more control; uncontrolled inputs can be simpler and faster for some forms.

### 2. When would you avoid making every field controlled?

Very large forms, file inputs, third-party widgets, or simple submit-only forms may not need every keystroke in React state. The choice should balance validation, conditional UI, performance, and simplicity.

### 3. Why do controlled inputs sometimes feel laggy?

Every keystroke schedules React work. Lag can come from expensive parent renders, validation on every input, formatting logic, large lists, or uncontrolled re-renders. Isolate field state, defer expensive work, or validate on blur/change with care.

### 4. How do you make form errors accessible in React?

Connect error text to fields with `aria-describedby`, use clear messages, preserve labels, avoid color-only errors, and focus the first invalid field on submit only when it helps the user recover.

### 5. What form issues do you look for in review?

Missing labels, controlled/uncontrolled warnings, validation that fights user typing, disabled submit with no explanation, client-only validation, poor autofill support, and no loading/error state during submit.

---

# Quick Practice

1. Explain one realistic production use case for React Forms, Controlled and Uncontrolled Inputs in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.

---

# Added from `react_1.docx`

* Controlled input source of truth is React state.
* Uncontrolled input source of truth is the DOM; read it with refs or `FormData`.
* Controlled forms are best for validation and instant UI feedback.
* Uncontrolled forms can be fine for simple forms and file inputs.
* Refs should not replace normal UI state.
* `onCopy`/`onPaste` can block copy/paste as UX behavior, but it is not real security and can hurt accessibility.
