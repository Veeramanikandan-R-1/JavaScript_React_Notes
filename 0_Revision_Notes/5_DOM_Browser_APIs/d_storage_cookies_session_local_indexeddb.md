# Revision Notes: Storage, Cookies, localStorage, sessionStorage, and IndexedDB

* Browser APIs connect JavaScript to documents, events, storage, networking, and security boundaries.
* DOM code should preserve semantics, accessibility, and performance.
* The browser is a shared runtime: user input, rendering, scripts, network, and storage interact.
* Best practice: Use semantic HTML first.
* Best practice: Delegate events for dynamic lists.
* Best practice: Batch DOM reads and writes.
* Best practice: Clean up listeners, observers, timers, and subscriptions.
* Avoid: Building inaccessible custom controls.
* Avoid: Adding event listeners repeatedly without cleanup.
* Avoid: Reading and writing layout in tight loops.
* Avoid: Trusting unsanitized user input.
* `localStorage` persists until cleared.
* `sessionStorage` is temporary for the current tab/session.
* Both store strings and have browser-dependent limits, commonly around 5-10 MB.
* Do not store passwords, tokens, or sensitive user data in web storage.
* Use `JSON.stringify`/`JSON.parse` for object values.

---

# Cheat Sheet

| Concept | Practical meaning |
| ------- | ----------------- |
| DOM | Live tree representation of the document. |
| Node | A unit in the DOM tree. |
| Event | A notification from user input, browser lifecycle, network, or code. |
| Mutation | A change to DOM structure, text, attributes, or state. |
| Accessibility tree | Browser-derived structure consumed by assistive technologies. |

---

# Interview Questions with Answers

### 1. When would you use cookies, `localStorage`, `sessionStorage`, or IndexedDB?

Use cookies when the server must receive a small value on requests, usually auth/session related. Use `localStorage` for small persistent client preferences, `sessionStorage` for tab-scoped temporary data, and IndexedDB for larger structured offline data.

### 2. Why should sensitive tokens usually not be stored in `localStorage`?

Any successful XSS can read `localStorage`. For many auth flows, an HttpOnly, Secure, SameSite cookie reduces token exposure to JavaScript, though the full design still needs CSRF and session handling.

### 3. What are the limitations of `localStorage`?

It is synchronous, string-only, relatively small, and can be unavailable or cleared depending on browser settings. It can block the main thread if used heavily and should not be treated as a reliable database.

### 4. How would you debug a cookie not being sent to an API?

Check domain, path, `Secure`, `SameSite`, expiry, whether the request is cross-site, credentials mode in fetch, HTTPS, and the response `Set-Cookie` header. DevTools Application and Network tabs usually reveal the issue.

### 5. What storage issues do you flag in review?

Sensitive data in web storage, missing migration/versioning for persisted shapes, large synchronous reads during startup, no quota/error handling, and stale cached data with no invalidation strategy.

---

# Quick Practice

1. Explain one realistic production use case for Storage, Cookies, localStorage, sessionStorage, and IndexedDB in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
