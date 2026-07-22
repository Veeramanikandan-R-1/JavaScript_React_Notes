# Server State with React Query or SWR (Senior Frontend Engineer Perspective)

Before going deeper into frameworks or libraries, understand this topic as part of real frontend engineering: caching remote data separately from UI state.

---

# 1. Fundamentals

* React helps build interactive interfaces from reusable components.
* Modern React is centered on function components, props, state, effects, hooks, and predictable rendering.
* Good React code separates UI state, server state, derived values, effects, and reusable logic.

---

# 2. Core Concepts

| Concept | Practical meaning |
| ------- | ----------------- |
| Component | A reusable piece of UI. |
| Props | Inputs passed from parent to child. |
| State | Data that changes over time and triggers rendering. |
| Effect | Synchronization with systems outside React rendering. |
| Render | Calling components to describe UI. |
| Commit | Applying changes to the host environment such as the DOM. |

---

# 3. Internal Working

* React render should stay pure: same inputs should describe the same UI.
* State updates schedule a re-render; React compares the new element tree with the previous tree and commits necessary DOM changes.
* Effects run after commit and should synchronize with external systems such as subscriptions, timers, network, or imperative widgets.

---

# 4. Common Mistakes

* Mutating state directly.
* Putting derived state in state unnecessarily.
* Using effects for calculations that belong in render.
* Using array index keys for reorderable lists.
* Optimizing with memoization before measuring.

---

# 5. Best Practices

* Keep render pure.
* Lift state only when multiple components need it.
* Prefer composition over prop tunnels.
* Use effects only for synchronization.
* Measure before memoizing.

---

# 6. Code Example

```jsx
import { useQuery } from "@tanstack/react-query";

function OrdersPage() {
  const ordersQuery = useQuery({
    queryKey: ["orders"],
    queryFn: () => fetchJson("/api/orders"),
  });

  if (ordersQuery.isLoading) return <p>Loading orders...</p>;
  if (ordersQuery.isError) return <p role="alert">Could not load orders.</p>;
  if (ordersQuery.data.length === 0) return <p>No orders found.</p>;

  return ordersQuery.data.map((order) => <article key={order.id}>{order.name}</article>);
}
```

---

# 7. Real-world Scenarios

* A component re-renders because parent state changed.
* A list has wrong input values because keys are unstable.
* An effect keeps refetching because dependencies are unstable.

---

# 8. Senior Deep Dive

## When to Use

* Use local state for local UI, context for scoped shared values, server-state tools for remote cache, and global stores for truly cross-cutting client state.
* Use effects for synchronization with external systems, not for derived render calculations.
* Use composition before adding global state.

## Debug Checklist

* Use React DevTools to inspect props, state, owners, and render causes.
* Check keys, effect dependencies, stale closures, and state mutation.
* Profile before adding memoization.

## Code Review Checklist

* Is state owned by the smallest sensible component?
* Are effects necessary and cleaned up?
* Are data fetching states and accessibility states complete?


---

# Revision Notes

* Server State with React Query or SWR matters because it affects real users, future maintainers, and production behavior.
* Learn the mental model before memorizing syntax.
* Use browser DevTools, tests, and small examples to verify behavior.
* React helps build interactive interfaces from reusable components.
* Modern React is centered on function components, props, state, effects, hooks, and predictable rendering.
* Good React code separates UI state, server state, derived values, effects, and reusable logic.

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

# Hands-on Exercises

## Exercise 1

Create a React component that demonstrates Server State with React Query or SWR.

### Solution

Include props, state or effects only when needed, stable keys for lists, and visible loading/error/empty states where relevant.

## Exercise 2

Review the component with React DevTools.

### Solution

Inspect props, state ownership, render behavior, effect dependencies, and accessibility names.

---

# Senior Frontend Engineer Takeaway

For senior-level work, Server State with React Query or SWR is not only a syntax topic. You should be able to explain the mental model, choose the right pattern for a product requirement, identify common failure modes, and verify behavior through tooling, tests, and browser inspection.
