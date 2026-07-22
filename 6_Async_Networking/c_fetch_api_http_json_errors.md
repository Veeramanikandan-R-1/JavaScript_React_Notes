# Fetch API, HTTP, JSON, and Errors (Senior Frontend Engineer Perspective)

Before going deeper into frameworks or libraries, understand this topic as part of real frontend engineering: making reliable network calls from the browser.

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
async function postJson(url, body) {
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  const data = await response.json().catch(() => null);
  if (!response.ok) {
    throw new Error(data?.message ?? `HTTP ${response.status}`);
  }
  return data;
}
```

---

# 7. Real-world Scenarios

* Cancelling old search requests as the user types.
* Showing a retry button after a network failure.
* Updating a realtime notification count without refreshing the page.

---

# 7.1 API vs REST API

An API is any contract that lets one piece of software talk to another. In frontend work, people often use "API" to mean a backend endpoint the UI calls.

REST is one common style of web API. REST APIs usually expose resources through URLs and use HTTP methods to express actions.

```http
GET /users/1
POST /users
PUT /users/1
PATCH /users/1
DELETE /users/1
```

Practical REST principles:

* use nouns for resource URLs, such as `/users` and `/orders`
* use HTTP methods for actions
* return meaningful status codes
* keep requests stateless
* send predictable JSON response shapes

Not every API is REST. Other API styles include GraphQL, SOAP, RPC, and WebSocket protocols.

HTTP method interview notes:

| Method | Use | Should request body change data? |
| ------ | --- | -------------------------------- |
| `GET` | Read data | No |
| `POST` | Create or trigger a non-idempotent action | Yes |
| `PUT` | Replace a resource | Yes |
| `PATCH` | Partially update a resource | Yes |
| `DELETE` | Delete a resource | Yes |

Do not use `POST` just because a request has many filters. If the operation is a read, prefer `GET` with query params when practical, because it works better with caching, links, browser history, and observability.

Avoid putting business data in headers. Headers are for metadata such as auth, content type, trace IDs, language, and idempotency keys. Put request data in the URL query for reads or the JSON body for writes.

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

* Fetch API, HTTP, JSON, and Errors matters because it affects real users, future maintainers, and production behavior.
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

# Hands-on Exercises

## Exercise 1

Implement an async flow related to Fetch API, HTTP, JSON, and Errors.

### Solution

Represent loading, success, empty, error, cancelled, and stale states explicitly.

## Exercise 2

Test with slow network and out-of-order responses.

### Solution

Use request IDs or cancellation so old responses cannot overwrite newer UI.

---

# Senior Frontend Engineer Takeaway

For senior-level work, Fetch API, HTTP, JSON, and Errors is not only a syntax topic. You should be able to explain the mental model, choose the right pattern for a product requirement, identify common failure modes, and verify behavior through tooling, tests, and browser inspection.
