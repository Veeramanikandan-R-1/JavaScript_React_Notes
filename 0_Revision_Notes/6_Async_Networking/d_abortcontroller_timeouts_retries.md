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

# Interview Questions & Answers

### 1. How would you explain AbortController, Timeouts, and Retries in a real project?

I model async work as explicit states: idle, loading, success, empty, error, cancelled, and stale.

### 2. What happens internally when AbortController, Timeouts, and Retries is involved?

Promises schedule continuations as microtasks, while timers and user events are tasks. HTTP failures need explicit status handling because fetch does not reject on 4xx/5xx.

### 3. How do you debug issues related to AbortController, Timeouts, and Retries?

I check request order, cancellation, stale updates, retry rules, idempotency, and how the UI behaves when the network is slow or offline.

### 4. What is the biggest production risk with AbortController, Timeouts, and Retries?

The biggest risk is building something that works for the demo state but fails with real content, slow networks, accessibility needs, errors, or future changes.

### 5. What should a senior engineer look for in code review?

They should check the mental model, edge cases, accessibility, performance cost, naming, state ownership, test coverage, and whether the simpler native/platform option was considered.

---

# Quick Practice

1. Explain AbortController, Timeouts, and Retries in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
