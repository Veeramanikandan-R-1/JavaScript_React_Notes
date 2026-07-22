# Revision Notes: Debounce, Throttle, Rate Limiting, and Queues

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

### 1. What is the difference between debounce and throttle?

Debounce waits until events stop for a period before running work. Throttle runs at most once per interval while events continue. Search input usually wants debounce; scroll progress or resize tracking often wants throttle.

### 2. What are leading and trailing debounce calls?

A leading call runs immediately at the start of the burst. A trailing call runs after the quiet period with the latest value. Autocomplete often uses trailing behavior; instant UI feedback may use leading plus trailing.

### 3. How do debounce and cancellation work together in search?

Debounce reduces how many searches start. Cancellation or request ids prevent older searches from updating the UI after a newer query has started. You usually need both for a polished search experience.

### 4. When do you need a queue instead of simple throttling?

Use a queue when every job must eventually run but concurrency must be controlled, such as uploads or background sync. Throttling is better when repeated events can be sampled or skipped.

### 5. What debounce/throttle bugs do you look for in review?

Timers not cleared, handlers recreated so debouncing does not work, stale closures, lost final updates, no cancellation for in-flight work, and no tests with rapid repeated events.

---

# Quick Practice

1. Explain one realistic production use case for Debounce, Throttle, Rate Limiting, and Queues in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
