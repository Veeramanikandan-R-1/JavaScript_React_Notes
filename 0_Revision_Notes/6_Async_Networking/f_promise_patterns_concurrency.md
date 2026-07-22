# Revision Notes: Promise Patterns and Concurrency

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
* `Promise.all`: resolves when all resolve; rejects on first rejection.
* `Promise.allSettled`: waits for all and reports each status.
* `Promise.race`: first settled promise wins.
* `Promise.any`: first fulfilled promise wins; rejects only if all reject.

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

# Promise Method Choice

| Need | Use |
| ---- | --- |
| All required data | `Promise.all` |
| Partial results allowed | `Promise.allSettled` |
| Timeout or first settled result | `Promise.race` |
| First successful fallback | `Promise.any` |

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

# Quick Practice

1. Explain one realistic production use case for Promise Patterns and Concurrency in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
