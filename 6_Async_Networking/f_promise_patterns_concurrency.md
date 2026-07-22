# Promise Patterns and Concurrency (Senior Frontend Engineer Perspective)

Before going deeper into frameworks or libraries, understand this topic as part of real frontend engineering: Promise.all, allSettled, race, any, fan-out, fan-in, and controlled parallelism.

---

# 1. Fundamentals

* Asynchronous code lets applications wait for timers, network, files, and user events without blocking the main thread.
* Promise-based flows should model success, failure, cancellation, and stale responses.
* Reliable networking code handles loading, empty, error, retry, and timeout states.

---

# 2. Core Concepts

| Concept | Practical meaning |
| ------- | ----------------- |
| Task | Macrotask such as timer, user event, or network continuation. |
| Microtask | Promise continuation that runs before the next render opportunity. |
| Promise | Represents eventual success or failure. |
| Cancellation | Stopping work that is no longer needed. |
| Race condition | A bug where timing changes the result. |

---

# 3. Internal Working

* Synchronous code runs to completion before microtasks and later tasks execute.
* Promise callbacks run as microtasks, which can starve rendering if chained heavily.
* Fetch starts browser-managed network work and resolves when response headers are available.

---

# 4. Common Mistakes

* Forgetting `await` inside `try/catch`.
* Letting stale requests overwrite newer results.
* Treating every fetch resolution as successful HTTP status.
* Retrying non-idempotent operations blindly.

---

# 5. Best Practices

* Represent loading, success, empty, and error states explicitly.
* Cancel stale requests when the UI changes.
* Use backoff and idempotency for retries.
* Surface useful errors to users and diagnostics to developers.

---

# 6. Code Example

```js
async function loadDashboard() {
  const [summary, ordersResult, alertsResult] = await Promise.all([
    fetchJson("/api/summary"),
    fetchJson("/api/orders").then(
      (data) => ({ status: "fulfilled", data }),
      (error) => ({ status: "rejected", error })
    ),
    fetchJson("/api/alerts").then(
      (data) => ({ status: "fulfilled", data }),
      (error) => ({ status: "rejected", error })
    ),
  ]);

  return {
    summary,
    orders: ordersResult.status === "fulfilled" ? ordersResult.data : [],
    alerts: alertsResult.status === "fulfilled" ? alertsResult.data : [],
  };
}
```

---

# 7. Real-world Scenarios

* Cancelling old search requests as the user types.
* Showing a retry button after a network failure.
* Updating a realtime notification count without refreshing the page.

---

# 7.1 Promise Methods

| Method | Resolves when | Rejects when | Common use |
| ------ | ------------- | ------------ | ---------- |
| `Promise.all` | Every promise resolves | First promise rejects | Load required data in parallel |
| `Promise.allSettled` | Every promise finishes | Never rejects for individual failures | Show partial results |
| `Promise.race` | First promise settles | First promise rejects if it settles first | Timeout or first response wins |
| `Promise.any` | First promise resolves | All promises reject | Use first successful fallback |

```js
const [profile, permissions] = await Promise.all([
  fetchJson("/api/profile"),
  fetchJson("/api/permissions"),
]);
```

```js
const results = await Promise.allSettled([
  fetchJson("/api/orders"),
  fetchJson("/api/alerts"),
]);

const successful = results
  .filter((result) => result.status === "fulfilled")
  .map((result) => result.value);
```

Practical rule: use `Promise.all` when all data is required. Use `Promise.allSettled` when partial UI is acceptable.

# 8. Senior Deep Dive

## When to Use

* Use sequential awaits when order matters and parallel promises when work is independent.
* Use cancellation for typeahead, route changes, and stale requests.
* Use retries only when the operation is safe and the retry improves user experience.

## Debug Checklist

* Log request IDs or timestamps to detect stale responses.
* Check whether `response.ok` is handled separately from network failure.
* Throttle the network and test cancellation, retry, timeout, and offline behavior.

## Code Review Checklist

* Are loading, error, empty, cancelled, and stale states explicit?
* Are retries bounded and idempotency considered?
* Can old responses overwrite newer UI state?


---

# Revision Notes

* Promise Patterns and Concurrency matters because it affects real users, future maintainers, and production behavior.
* Learn the mental model before memorizing syntax.
* Use browser DevTools, tests, and small examples to verify behavior.
* Asynchronous code lets applications wait for timers, network, files, and user events without blocking the main thread.
* Promise-based flows should model success, failure, cancellation, and stale responses.
* Reliable networking code handles loading, empty, error, retry, and timeout states.

---

# Cheat Sheet

| Concept | Practical meaning |
| ------- | ----------------- |
| Task | Macrotask such as timer, user event, or network continuation. |
| Microtask | Promise continuation that runs before the next render opportunity. |
| Promise | Represents eventual success or failure. |
| Cancellation | Stopping work that is no longer needed. |
| Race condition | A bug where timing changes the result. |

---

# Interview Questions with Answers

### 1. What is the difference between `Promise.all`, `allSettled`, `race`, and `any`?

`Promise.all` succeeds only if all succeed and rejects on the first failure. `allSettled` waits for every result. `race` settles with the first settled promise. `any` fulfills with the first successful promise and rejects only if all fail.

### 2. When is `Promise.all` the wrong choice?

It is wrong when partial results are useful, when one failure should not hide other results, or when starting all work at once can overload the browser, network, or backend. Use `allSettled`, batching, or a concurrency limit instead.

### 3. How would you process 500 images with only five uploads running at once?

Use a concurrency-limited queue/pool. Start five uploads, begin the next one when one finishes, collect successes and failures, and make cancellation/retry behavior explicit.

### 4. What is a floating promise?

A floating promise is created but not awaited, returned, or caught. It can cause unhandled rejections, hidden failures, and work that continues after the caller thinks the flow is complete.

### 5. What concurrency bugs do you look for in review?

Accidental sequential awaits, unbounded parallel requests, missing cancellation, partial-failure handling that loses useful data, and promises that update state after ownership has changed.

---

# Hands-on Exercises

## Exercise 1

Implement an async flow related to Promise Patterns and Concurrency.

### Solution

Represent loading, success, empty, error, cancelled, and stale states explicitly.

## Exercise 2

Test with slow network and out-of-order responses.

### Solution

Use request IDs or cancellation so old responses cannot overwrite newer UI.

---

# Senior Frontend Engineer Takeaway

For senior-level work, Promise Patterns and Concurrency is not only a syntax topic. You should be able to explain the mental model, choose the right pattern for a product requirement, identify common failure modes, and verify behavior through tooling, tests, and browser inspection.
