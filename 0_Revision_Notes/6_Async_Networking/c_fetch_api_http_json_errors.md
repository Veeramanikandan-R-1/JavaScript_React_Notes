# Revision Notes: Fetch API, HTTP, JSON, and Errors

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
* API is a broad contract for software communication.
* REST is a common API style based on resources, URLs, HTTP methods, status codes, and stateless requests.
* Not every API is REST; GraphQL, SOAP, RPC, and WebSockets are different styles.

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

# REST Quick Map

| Method | Typical meaning |
| ------ | --------------- |
| `GET` | Read |
| `POST` | Create or trigger |
| `PUT` | Replace |
| `PATCH` | Partial update |
| `DELETE` | Remove |

---

# Interview Questions with Answers

### 1. Why does HTTP status matter in Fetch API, HTTP, JSON, and Errors?

HTTP status means The protocol result that tells whether the request succeeded semantically. In interviews, connect it to Fetch API, HTTP, JSON, and Errors by explaining the concrete UI behavior, failure state, and tradeoff.

### 2. How does response.ok affect the implementation?

response.ok means The browser flag for 2xx HTTP responses. Implementation depends on ownership, lifecycle, and edge cases, not only naming the API.

### 3. What mistake should you avoid around skipping real edge cases?

Avoid skipping real edge cases. Prefer the simplest reliable approach and verify it with a small example.

### 4. How would you debug a production issue related to Fetch API, HTTP, JSON, and Errors?

Reproduce the issue, inspect the relevant state or DOM, and reduce it to a small failing case. Check edge cases, browser behavior, and tests before changing the implementation.

### 5. What would you check in code review for Fetch API, HTTP, JSON, and Errors?

Check correctness, edge cases, readability, accessibility, performance, and test coverage. Confirm the chosen approach matches the problem and does not add unnecessary complexity.

---

# Quick Practice

1. Explain one realistic production use case for Fetch API, HTTP, JSON, and Errors in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
