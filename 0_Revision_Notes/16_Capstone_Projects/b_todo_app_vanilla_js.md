# Revision Notes: Capstone: Todo App with Vanilla JavaScript

* Capstone projects prove that concepts can be integrated into real workflows.
* A strong project includes real states: loading, empty, error, success, validation, and responsive behavior.
* Quality matters more than feature count.
* Best practice: Write requirements before coding.
* Best practice: Design the data model and component tree.
* Best practice: Implement core flows first.
* Best practice: Add tests for critical behavior.
* Best practice: Polish accessibility, responsiveness, and performance before calling it done.
* Avoid: Building only the happy path.
* Avoid: Ignoring responsive layout.
* Avoid: Skipping empty and error states.
* Avoid: Using fake complexity instead of polished fundamentals.

---

# Cheat Sheet

| Concept | Practical meaning |
| ------- | ----------------- |
| Requirements | What the app must do. |
| Architecture | How files, data, UI, and state are organized. |
| States | Loading, empty, error, success, validation, and disabled states. |
| Quality bar | Accessibility, responsiveness, tests, and performance. |
| Review checklist | What makes the project portfolio-ready. |

---

# Interview Questions with Answers

### 1. What would you ask a candidate to implement in a vanilla JS todo app?

Add, edit, delete, complete, filter, persist, restore, and clear completed todos. I would also ask for keyboard support, empty state, validation, and clean separation between state, rendering, and event handling.

### 2. How should state and DOM rendering be organized without a framework?

Keep state updates explicit, render from state, use event delegation where useful, avoid scattering DOM mutation across unrelated handlers, and persist through a small storage layer.

### 3. What edge cases matter in a todo app interview?

Empty titles, trimming whitespace, duplicate-looking items, editing cancelled with Escape, persistence failure, deleting focused items, filtering while editing, and restoring state after reload.

### 4. How would you make the todo app accessible?

Use real buttons, labels for inputs, keyboard-operable editing, visible focus, status text for counts/errors, and avoid custom checkbox behavior unless it preserves native semantics.

### 5. What would you look for in code review?

Clear state ownership, no unsafe `innerHTML` with user text, delegated listeners cleaned up if needed, predictable rendering, storage error handling, and tests for edit/filter/persist flows.

---

# Quick Practice

1. Explain one realistic production use case for Capstone: Todo App with Vanilla JavaScript in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
