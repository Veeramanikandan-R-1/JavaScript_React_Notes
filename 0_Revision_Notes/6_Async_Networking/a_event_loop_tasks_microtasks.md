# Revision Notes: Event Loop, Tasks, and Microtasks

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
* JS is single-threaded at the call-stack level.
* Microtasks such as promise callbacks run before later macrotasks such as `setTimeout`.
* React state updates are scheduled/batched; immediate logs can show old render values.
* `useEffect` runs after commit/paint; `useLayoutEffect` runs before paint and can block it.
* Long synchronous work freezes rendering and input.

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

# React Event Loop Notes

```text
setState now       -> schedules update
console.log(state) -> old value from current render
next render        -> new value appears
```

Use cleanup flags or `AbortController` so async effects do not update stale/unmounted UI.

---

# Interview Questions with Answers

### 1. What is the output order of synchronous code, a resolved promise, and `setTimeout`?

Synchronous code runs first, promise callbacks run next as microtasks, and `setTimeout` callbacks run later as tasks. A senior answer should also mention that microtasks are drained before the browser moves to the next task/render opportunity.

### 2. Why can too many microtasks make the UI feel stuck?

The browser drains the microtask queue before handling the next task. If code keeps scheduling microtasks, it can delay rendering and user input even though the code is “async.”

### 3. What is the difference between a task and a microtask in UI behavior?

A task can come from timers, user events, network callbacks, or script loading. A microtask usually comes from promise continuation work. This matters when reasoning about when state updates, DOM changes, and rendering can happen.

### 4. How would you debug an event-loop issue that blocks clicks?

Record a Performance trace, look for long tasks, inspect promise chains/timers, and find synchronous work inside handlers or microtasks. Then split work, defer noncritical processing, or move heavy computation to a worker.

### 5. What event-loop misconceptions do you watch for in interviews?

Thinking promises run on another thread, assuming `setTimeout(..., 0)` runs immediately, forgetting that microtasks run before timers, and using async code while still doing heavy synchronous work.

---

# Quick Practice

1. Explain one realistic production use case for Event Loop, Tasks, and Microtasks in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
