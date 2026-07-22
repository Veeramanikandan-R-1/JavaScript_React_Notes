# Revision Notes: Capstone: React Dashboard

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

### 1. What are the core states a React dashboard must handle?

Initial loading, partial loading, success, empty, error, stale/background refetch, permission denied, and offline/network failure. Dashboards often fail when they only handle the ideal data-loaded state.

### 2. How would you structure data fetching for dashboard widgets?

Use stable query keys per widget/data scope, avoid duplicate requests, let widgets fail independently when product allows it, and separate server state from local UI state like selected filters or expanded panels.

### 3. What performance risks do dashboards have?

Large chart libraries, frequent polling, heavy data transforms, unnecessary rerenders, layout shift in metric cards, and too much JavaScript in the first route. Measure with React Profiler and browser traces.

### 4. How do filters belong in dashboard state?

Shareable filters often belong in the URL. Purely local display choices may stay in component state. Query keys must include filter inputs so cached data matches the visible view.

### 5. What would you check in a dashboard code review?

Widget boundaries, loading/error/empty states, accessible charts/tables, responsive layout, query-key correctness, memoization only where measured, and tests for filtering and failure cases.

---

# Quick Practice

1. Explain one realistic production use case for Capstone: React Dashboard in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
