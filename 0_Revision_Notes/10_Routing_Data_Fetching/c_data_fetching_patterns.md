# Revision Notes: Data Fetching Patterns

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

### 1. What states should a data-fetching component represent?

Initial loading, success, empty, error, background refetching, retrying, unauthorized, and stale/cancelled states where relevant. A blank screen is usually a missing state, not a design choice.

### 2. How do you prevent race conditions in data fetching?

Abort stale requests or track request identity so only the latest response updates state. This matters for search, filters, route changes, dependent dropdowns, and fast navigation.

### 3. When should data be fetched at route level instead of component level?

Route-level fetching is useful when data is required for the page, should block or coordinate navigation, or needs route-level error/loading boundaries. Component-level fetching is fine for optional panels or independently loaded widgets.

### 4. How do you avoid duplicate requests?

Centralize server-state ownership, use stable cache/query keys, avoid fetching the same data in parent and child, and watch effect dependencies that refetch because object/function identities change.

### 5. What data-fetching issues do you flag in review?

No error/empty state, ignoring HTTP statuses, no cancellation/stale-response handling, duplicated cache state, infinite refetch loops, and optimistic updates without rollback.

---

# Quick Practice

1. Explain one realistic production use case for Data Fetching Patterns in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
