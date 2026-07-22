# Revision Notes: Server State with React Query or SWR

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

### 1. What makes a good React Query or SWR key?

A good key includes every input that changes the returned data: resource id, filters, pagination, locale, user scope, and feature mode. Missing inputs create wrong-cache bugs.

### 2. What is the difference between stale data and cached data?

Cached data is stored for reuse. Stale data is cached data that the library considers old enough to refetch. Stale does not always mean unusable; it depends on product freshness requirements.

### 3. How do you update cached data after a mutation?

Invalidate affected queries, refetch, or update the cache directly when the new value is known. For optimistic updates, snapshot previous data and roll back on failure.

### 4. When should you not use a server-state library?

For simple static data, one-off local interactions, or state that is purely client-owned. Server-state libraries shine when caching, invalidation, retries, background refetching, and deduplication matter.

### 5. What server-state issues do you flag in review?

Weak query keys, duplicated local copies of cached data, missing invalidation, unsafe optimistic updates, aggressive stale times, and UI that treats background refetch as full-page loading.

---

# Quick Practice

1. Explain one realistic production use case for Server State with React Query or SWR in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
