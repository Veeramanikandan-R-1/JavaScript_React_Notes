# AbortController, Timeouts, and Retries (Senior Frontend Engineer Perspective)

Before going deeper into frameworks or libraries, understand this topic as part of real frontend engineering: cancelling stale work and designing resilient requests.

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
const controller = new AbortController();
const timeoutId = setTimeout(() => controller.abort(), 5000);

try {
  const response = await fetch("/api/search?q=react", {
    signal: controller.signal,
  });
  console.log(await response.json());
} finally {
  clearTimeout(timeoutId);
}
```

---

# 7. Real-world Scenarios

* Cancelling old search requests as the user types.
* Showing a retry button after a network failure.
* Updating a realtime notification count without refreshing the page.

---

# 7.1 Idempotency and Duplicate Request Prevention

Retries are safe only when the backend can handle repeated attempts correctly. For payment, order creation, and booking flows, use an idempotency key so the server can treat repeated requests as the same operation.

```js
async function createPaymentIntent(amount) {
  const idempotencyKey = crypto.randomUUID();

  const response = await fetch("/api/payments", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Idempotency-Key": idempotencyKey,
    },
    body: JSON.stringify({ amount }),
  });

  if (!response.ok) throw new Error("Payment request failed");
  return response.json();
}
```

Frontend duplicate prevention:

* disable submit buttons while a mutation is in progress
* debounce search input
* cancel stale requests on route/query change
* ignore out-of-order responses with request IDs
* use backend idempotency for important writes

Do not rely only on disabling a button. Users can double-click, refresh, retry, or send duplicate requests from another tab.

---

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

* AbortController, Timeouts, and Retries matters because it affects real users, future maintainers, and production behavior.
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

### 1. What does `AbortController` actually cancel?

It signals cancellation to APIs that support `AbortSignal`, such as `fetch`. It does not magically stop every promise or undo already completed work; your code must pass the signal and handle the abort error intentionally.

### 2. How would you implement a request timeout with `fetch`?

Create an `AbortController`, start a timer that calls `abort()`, pass `signal` to `fetch`, and clear the timer in `finally`. The UI should distinguish timeout from validation, auth, server, and offline errors when that helps recovery.

### 3. When should a frontend retry a request?

Retry transient failures, usually with backoff and a limit. Be careful with non-idempotent actions such as payments, orders, or form submissions unless the backend supports idempotency keys.

### 4. How do you avoid stale responses overwriting newer UI state?

Abort old requests when possible, or track a request id/version and ignore responses that are no longer current. This is common in search, filters, route changes, and dependent dropdowns.

### 5. What retry/cancellation bugs do you look for in review?

Infinite retries, retrying user mistakes, duplicate writes, not clearing timeout timers, treating abort as a user-facing error, and state updates after the screen no longer owns the request.

---

# Hands-on Exercises

## Exercise 1

Implement an async flow related to AbortController, Timeouts, and Retries.

### Solution

Represent loading, success, empty, error, cancelled, and stale states explicitly.

## Exercise 2

Test with slow network and out-of-order responses.

### Solution

Use request IDs or cancellation so old responses cannot overwrite newer UI.

---

# Senior Frontend Engineer Takeaway

For senior-level work, AbortController, Timeouts, and Retries is not only a syntax topic. You should be able to explain the mental model, choose the right pattern for a product requirement, identify common failure modes, and verify behavior through tooling, tests, and browser inspection.
