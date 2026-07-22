# Callbacks, Promises, and async-await (Senior Frontend Engineer Perspective)

Before going deeper into frameworks or libraries, understand this topic as part of real frontend engineering: writing readable asynchronous flows.

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
  try {
    const response = await fetch("/api/dashboard");
    if (!response.ok) throw new Error("Request failed");
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}
```

---

# 7. Real-world Scenarios

* Cancelling old search requests as the user types.
* Showing a retry button after a network failure.
* Updating a realtime notification count without refreshing the page.

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

* Callbacks, Promises, and async-await matters because it affects real users, future maintainers, and production behavior.
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

### 1. What problem did promises solve compared with nested callbacks?

Promises make async results composable: you can return values, chain steps, handle errors in one path, and combine work with APIs like `Promise.all`. They do not remove the need to model loading, cancellation, or stale responses.

### 2. What does `async` do to a function's return value?

An `async` function always returns a promise. Returning a value resolves the promise with that value, and throwing an error rejects it. This matters when callers forget to `await` or attach error handling.

### 3. Why does `try/catch` sometimes fail to catch an async error?

If you start a promise inside `try` but do not `await` it or return it, the rejection happens after the `try/catch` has finished. Use `await`, return the promise chain, or attach a `.catch` where ownership is clear.

### 4. What is the difference between sequential and parallel awaits?

Sequential awaits wait for one request before starting the next. Parallel awaits start independent work first, then await together with `Promise.all` or a similar helper. The right choice depends on dependencies and failure behavior.

### 5. What async code issues do you flag in review?

Floating promises, missing error paths, serial requests that could be parallel, parallel requests that should be ordered, stale UI updates after unmount/navigation, and loading states that never settle.

---

# Hands-on Exercises

## Exercise 1

Implement an async flow related to Callbacks, Promises, and async-await.

### Solution

Represent loading, success, empty, error, cancelled, and stale states explicitly.

## Exercise 2

Test with slow network and out-of-order responses.

### Solution

Use request IDs or cancellation so old responses cannot overwrite newer UI.

---

# Senior Frontend Engineer Takeaway

For senior-level work, Callbacks, Promises, and async-await is not only a syntax topic. You should be able to explain the mental model, choose the right pattern for a product requirement, identify common failure modes, and verify behavior through tooling, tests, and browser inspection.
