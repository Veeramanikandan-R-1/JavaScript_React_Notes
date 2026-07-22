# Revision Notes: Caching, Offline Basics, and Service Workers

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

### 1. What makes a good cache key?

A good cache key includes the data identity and any inputs that change the response, such as user, locale, filters, pagination, auth scope, and version. Missing inputs create wrong-data bugs.

### 2. What is the difference between cache-first and network-first strategies?

Cache-first prioritizes speed/offline support and falls back to the network when missing. Network-first prioritizes freshness and falls back to cache on failure. The right strategy depends on whether stale data is acceptable.

### 3. What can go wrong with service worker updates?

Users can keep running an old service worker, cached assets can mismatch the new app shell, and update prompts can be disruptive. Versioning, cache cleanup, and a deliberate activation strategy matter.

### 4. How would you debug a user seeing an old version of the app?

Check DevTools Application for service workers and Cache Storage, inspect response headers, confirm asset hashes, unregister the service worker to isolate the issue, and verify CDN/browser cache behavior.

### 5. What caching issues do you look for in review?

Wrong cache keys, no invalidation path, caching user-specific data too broadly, storing sensitive responses, no offline fallback state, and service worker changes without an update/rollback plan.

---

# Quick Practice

1. Explain one realistic production use case for Caching, Offline Basics, and Service Workers in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
