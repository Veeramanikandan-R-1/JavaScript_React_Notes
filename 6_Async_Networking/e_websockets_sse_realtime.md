# WebSockets, SSE, and Realtime UI (Senior Frontend Engineer Perspective)

Before going deeper into frameworks or libraries, understand this topic as part of real frontend engineering: realtime browser communication patterns.

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
const socket = new WebSocket("wss://example.com/events");

socket.addEventListener("message", (event) => {
  const update = JSON.parse(event.data);
  renderUpdate(update);
});
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

* WebSockets, SSE, and Realtime UI matters because it affects real users, future maintainers, and production behavior.
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

### 1. When would you choose WebSockets over Server-Sent Events?

Use WebSockets when the client and server both need to send frequent messages, such as collaboration, chat, or multiplayer-style interaction. Use SSE when the server mainly pushes updates to the browser over a simpler one-way stream.

### 2. What should a realtime UI show when the connection drops?

Show connection state, preserve usable existing data, retry with backoff, and reconcile missed updates after reconnect. Avoid silently pretending the UI is live when it is not.

### 3. How do you avoid duplicate realtime messages?

Use stable message ids, sequence numbers, timestamps, or server versions. The client should make message handling idempotent because reconnects and retries can deliver repeated data.

### 4. What problems happen when realtime state and fetched state disagree?

The UI can flicker, show stale counts, duplicate items, or overwrite optimistic updates. Decide which source is authoritative and define a reconciliation strategy for initial load, updates, reconnect, and refetch.

### 5. What realtime code review issues do you look for?

Missing cleanup, no heartbeat or reconnect policy, unbounded message queues, duplicate subscriptions, no backoff, no auth-refresh handling, and UI states that do not explain disconnected or syncing behavior.

---

# Hands-on Exercises

## Exercise 1

Implement an async flow related to WebSockets, SSE, and Realtime UI.

### Solution

Represent loading, success, empty, error, cancelled, and stale states explicitly.

## Exercise 2

Test with slow network and out-of-order responses.

### Solution

Use request IDs or cancellation so old responses cannot overwrite newer UI.

---

# Senior Frontend Engineer Takeaway

For senior-level work, WebSockets, SSE, and Realtime UI is not only a syntax topic. You should be able to explain the mental model, choose the right pattern for a product requirement, identify common failure modes, and verify behavior through tooling, tests, and browser inspection.

Related practical note: [Realtime Data Patterns in React](./l_realtime_data_patterns_react.md).
