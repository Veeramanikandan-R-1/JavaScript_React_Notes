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

### 1. Why does Promise.all matter in Promise Patterns and Concurrency?

Promise.all means Running independent async work together and failing if one rejects. In interviews, connect it to Promise Patterns and Concurrency by explaining the concrete UI behavior, failure state, and tradeoff.

### 2. How does Concurrency limit affect the implementation?

Concurrency limit means A cap that prevents too many async jobs from running at once. Implementation depends on ownership, lifecycle, and edge cases, not only naming the API.

### 3. What mistake should you avoid around skipping real edge cases?

Avoid skipping real edge cases. Prefer the simplest reliable approach and verify it with a small example.

### 4. How would you debug a production issue related to Promise Patterns and Concurrency?

Reproduce the issue, inspect the relevant state or DOM, and reduce it to a small failing case. Check edge cases, browser behavior, and tests before changing the implementation.

### 5. What would you check in code review for Promise Patterns and Concurrency?

Check correctness, edge cases, readability, accessibility, performance, and test coverage. Confirm the chosen approach matches the problem and does not add unnecessary complexity.

---

# Quick Practice

1. Explain one realistic production use case for Promise Patterns and Concurrency in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
