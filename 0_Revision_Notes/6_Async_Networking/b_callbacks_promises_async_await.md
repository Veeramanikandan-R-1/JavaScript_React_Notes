# Revision Notes: Callbacks, Promises, and async-await

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

# Quick Practice

1. Explain one realistic production use case for Callbacks, Promises, and async-await in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
