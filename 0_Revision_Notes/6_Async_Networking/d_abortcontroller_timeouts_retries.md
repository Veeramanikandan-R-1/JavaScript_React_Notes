# Revision Notes: AbortController, Timeouts, and Retries

* Asynchronous code lets applications wait for timers, network, files, and user events without blocking the main thread.
* Promise-based flows should model success, failure, cancellation, and stale responses.
* Reliable networking code handles loading, empty, error, retry, and timeout states.
* Best practice: Represent loading, success, empty, and error states explicitly.
* Best practice: Cancel stale requests when the UI changes.
* Best practice: Use backoff and idempotency for retries.
* Best practice: Surface useful errors to users and diagnostics to developers.
* Avoid: Forgetting `await` inside `try/catch`.
* Avoid: Letting stale requests overwrite newer results.
* Avoid: Treating every fetch resolution as successful HTTP status.
* Avoid: Retrying non-idempotent operations blindly.

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

# Quick Practice

1. Explain one realistic production use case for AbortController, Timeouts, and Retries in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
