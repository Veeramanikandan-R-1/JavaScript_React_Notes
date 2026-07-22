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

### 1. Does `fetch` reject on HTTP 404 or 500?

No. `fetch` rejects for network-level failures, not HTTP error statuses. You must check `response.ok` or the status code and decide how the UI should handle 400, 401, 403, 404, 409, 422, and 500-class responses.

### 2. How do you design a fetch wrapper for a frontend app?

Keep it small and explicit: base URL, headers, credentials if needed, JSON parsing, `response.ok` handling, typed/structured errors, abort support, and auth/session handling hooks. Avoid hiding product-specific behavior in a generic helper.

### 3. How do you handle an API that returns an empty body?

Do not blindly call `response.json()` for every response. Check status codes like `204`, content length, or content type, and handle empty successful responses separately.

### 4. How would you debug “Unexpected token < in JSON”?

The response is probably HTML, often an error page, auth redirect, CDN fallback, or wrong route. Inspect the Network tab status, response body, content type, request URL, auth headers, and server logs.

### 5. What network states should a UI represent?

Initial loading, background refetching, success, empty, validation error, auth error, server error, offline/network error, timeout, retrying, and cancelled or stale request states where relevant.

---

# Quick Practice

1. Explain one realistic production use case for Fetch API, HTTP, JSON, and Errors in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
