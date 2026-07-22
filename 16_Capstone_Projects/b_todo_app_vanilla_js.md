# Capstone: Todo App with Vanilla JavaScript (Senior Frontend Engineer Perspective)

Before going deeper into frameworks or libraries, understand this topic as part of real frontend engineering: state, DOM events, persistence, and filtering without a framework.

---

# 1. Fundamentals

* Capstone projects prove that concepts can be integrated into real workflows.
* A strong project includes real states: loading, empty, error, success, validation, and responsive behavior.
* Quality matters more than feature count.

---

# 2. Core Concepts

| Concept | Practical meaning |
| ------- | ----------------- |
| Requirements | What the app must do. |
| Architecture | How files, data, UI, and state are organized. |
| States | Loading, empty, error, success, validation, and disabled states. |
| Quality bar | Accessibility, responsiveness, tests, and performance. |
| Review checklist | What makes the project portfolio-ready. |

---

# 3. Internal Working

* Capstone quality comes from integrating many small decisions: semantic markup, resilient layout, predictable state, error handling, tests, and performance budgets.
* A portfolio-grade project should be easy to run, easy to review, and honest about tradeoffs.

---

# 4. Common Mistakes

* Building only the happy path.
* Ignoring responsive layout.
* Skipping empty and error states.
* Using fake complexity instead of polished fundamentals.

---

# 5. Best Practices

* Write requirements before coding.
* Design the data model and component tree.
* Implement core flows first.
* Add tests for critical behavior.
* Polish accessibility, responsiveness, and performance before calling it done.

---

# 6. Code Example

```text
Project checklist:

1. Define user journeys.
2. Build semantic HTML and resilient layout.
3. Add state and data flow.
4. Handle loading, empty, error, and success states.
5. Test critical paths.
6. Audit accessibility and performance.
```

---

# 7. Real-world Scenarios

* Using the project in a portfolio interview.
* Demonstrating responsive layout and accessible form behavior.
* Explaining architecture and tradeoffs in a README.

---

# 8. Senior Deep Dive

## When to Use

* Use capstones to prove integrated skill, not to collect random features.
* Choose a small realistic domain and finish it deeply.
* Document tradeoffs and quality decisions in the project README.

## Debug Checklist

* Test the full happy path, then every major failure path.
* Use browser DevTools, React DevTools, accessibility checks, and performance traces.
* Ask whether a reviewer can understand and run the project without private context.

## Code Review Checklist

* Are all user journeys complete?
* Are states, accessibility, responsiveness, and tests present?
* Is the code organized like a maintainable product instead of a demo dump?


---

# Revision Notes

* Capstone: Todo App with Vanilla JavaScript matters because it affects real users, future maintainers, and production behavior.
* Learn the mental model before memorizing syntax.
* Use browser DevTools, tests, and small examples to verify behavior.
* Capstone projects prove that concepts can be integrated into real workflows.
* A strong project includes real states: loading, empty, error, success, validation, and responsive behavior.
* Quality matters more than feature count.

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

# Hands-on Exercises

## Exercise 1

Write requirements for Capstone: Todo App with Vanilla JavaScript.

### Solution

Include user journeys, screens, data model, API assumptions, loading/error/empty states, accessibility requirements, and test plan.

## Exercise 2

Create a review checklist for the finished project.

### Solution

Include run instructions, responsive screenshots, keyboard audit, form errors, critical tests, bundle/performance check, and known tradeoffs.

---

# Senior Frontend Engineer Takeaway

For senior-level work, Capstone: Todo App with Vanilla JavaScript is not only a syntax topic. You should be able to explain the mental model, choose the right pattern for a product requirement, identify common failure modes, and verify behavior through tooling, tests, and browser inspection.
