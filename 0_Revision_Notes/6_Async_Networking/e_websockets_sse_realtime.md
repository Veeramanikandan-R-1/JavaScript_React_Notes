# Revision Notes: WebSockets, SSE, and Realtime UI

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

# Quick Practice

1. Explain one realistic production use case for WebSockets, SSE, and Realtime UI in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
