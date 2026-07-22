# Revision Notes: Error Boundaries and Suspense

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

### 1. What do React error boundaries catch?

They catch errors during rendering, lifecycle methods, and constructors below the boundary. They do not catch errors in event handlers, async callbacks, server code, or errors thrown inside the boundary itself.

### 2. Where should error boundaries be placed?

Place them around areas that can fail independently, such as routes, panels, widgets, or data-heavy feature boundaries. One app-level boundary prevents a blank screen, but smaller boundaries improve recovery.

### 3. What makes a good fallback UI?

It explains what failed, preserves surrounding context, offers a retry or recovery action when possible, and reports useful diagnostics. A fallback should not create a confusing layout shift or trap keyboard users.

### 4. How is Suspense different from an error boundary?

Suspense handles waiting/loading for supported async rendering patterns and shows a loading fallback. Error boundaries handle rendering failures and show an error fallback. Production screens often need both.

### 5. What error-boundary/Suspense issues do you flag in review?

A single vague fallback for every failure, no retry path, swallowed errors, loading spinners with no layout stability, boundaries placed too high, and no logging tied to the failing route/component.

---

# Quick Practice

1. Explain one realistic production use case for Error Boundaries and Suspense in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.

---

# Added from `react_1.docx`

* Error boundaries catch render, lifecycle, and child constructor errors.
* They do not catch event handler, async, SSR, or boundary-self errors.
* Use small boundaries around fragile UI and log to monitoring.
* Native React error boundaries are class components; function-component apps often use a wrapper or `react-error-boundary`.
* `React.lazy` expects a default export.
* For named exports, map the import promise to `{ default: module.NamedExport }`.
