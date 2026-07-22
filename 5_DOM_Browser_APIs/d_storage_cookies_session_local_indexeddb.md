# Storage, Cookies, localStorage, sessionStorage, and IndexedDB (Senior Frontend Engineer Perspective)

Before going deeper into frameworks or libraries, understand this topic as part of real frontend engineering: client-side persistence and its tradeoffs.

---

# 1. Fundamentals

* Browser APIs connect JavaScript to documents, events, storage, networking, and security boundaries.
* DOM code should preserve semantics, accessibility, and performance.
* The browser is a shared runtime: user input, rendering, scripts, network, and storage interact.

---

# 2. Core Concepts

| Concept | Practical meaning |
| ------- | ----------------- |
| DOM | Live tree representation of the document. |
| Node | A unit in the DOM tree. |
| Event | A notification from user input, browser lifecycle, network, or code. |
| Mutation | A change to DOM structure, text, attributes, or state. |
| Accessibility tree | Browser-derived structure consumed by assistive technologies. |

---

# 3. Internal Working

* DOM reads and writes can trigger style and layout work when mixed carelessly.
* Browser security policies isolate origins and require explicit server permission for cross-origin reads.
* Native elements expose behavior and accessibility that custom JavaScript must otherwise recreate.

---

# 4. Common Mistakes

* Building inaccessible custom controls.
* Adding event listeners repeatedly without cleanup.
* Reading and writing layout in tight loops.
* Trusting unsanitized user input.

---

# 5. Best Practices

* Use semantic HTML first.
* Delegate events for dynamic lists.
* Batch DOM reads and writes.
* Clean up listeners, observers, timers, and subscriptions.

---

# 6. Code Example

```js
const key = "theme";
localStorage.setItem(key, "dark");

const theme = localStorage.getItem(key) ?? "light";
document.documentElement.dataset.theme = theme;
```

---

# 7. Real-world Scenarios

* Adding accessible keyboard behavior to a dynamic list.
* Persisting user preferences in local storage.
* Preventing injected user content from becoming executable markup.

---

# 7.1 `localStorage` vs `sessionStorage`

| Feature | `localStorage` | `sessionStorage` |
| ------- | -------------- | ---------------- |
| Lifetime | Persists until cleared | Cleared when the tab/session ends |
| Scope | Same origin across tabs/windows | Same origin, usually limited to the current tab |
| Capacity | Browser-dependent, often around 5-10 MB | Browser-dependent, often similar to `localStorage` |
| API | Synchronous key-value strings | Synchronous key-value strings |
| Good for | Non-sensitive preferences | Temporary per-tab UI state |

```js
localStorage.setItem("theme", "dark");
sessionStorage.setItem("checkoutStep", "payment");

const theme = localStorage.getItem("theme") ?? "light";
const step = sessionStorage.getItem("checkoutStep") ?? "cart";
```

Important:

* Store only strings; use `JSON.stringify` and `JSON.parse` for objects.
* Do not store tokens, passwords, or sensitive user data in web storage.
* Storage APIs are synchronous, so avoid large repeated reads/writes during render or scroll.

# 8. Senior Deep Dive

## When to Use

* Use DOM APIs for light interaction, progressive enhancement, and framework-free pages.
* Use observers for visibility, size, or mutation tracking instead of polling.
* Use storage only for data that is safe and appropriate to keep on the client.

## Debug Checklist

* Inspect event target/currentTarget and propagation phase.
* Check layout reads and writes when interaction feels slow.
* Review security errors, CORS headers, CSP violations, and unsafe HTML insertion.

## Code Review Checklist

* Are listeners, timers, observers, and subscriptions cleaned up?
* Is untrusted content inserted safely?
* Does JavaScript preserve native semantics and focus behavior?


---

# Revision Notes

* Storage, Cookies, localStorage, sessionStorage, and IndexedDB matters because it affects real users, future maintainers, and production behavior.
* Learn the mental model before memorizing syntax.
* Use browser DevTools, tests, and small examples to verify behavior.
* Browser APIs connect JavaScript to documents, events, storage, networking, and security boundaries.
* DOM code should preserve semantics, accessibility, and performance.
* The browser is a shared runtime: user input, rendering, scripts, network, and storage interact.

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

# Hands-on Exercises

## Exercise 1

Build a tiny DOM interaction for Storage, Cookies, localStorage, sessionStorage, and IndexedDB.

### Solution

Use semantic HTML, add one event listener, preserve keyboard behavior, and clean up any timer/listener/observer if needed.

## Exercise 2

Inspect the result in DevTools.

### Solution

Check DOM structure, events, computed styles, accessibility name, storage/network/security state if relevant.

---

# Senior Frontend Engineer Takeaway

For senior-level work, Storage, Cookies, localStorage, sessionStorage, and IndexedDB is not only a syntax topic. You should be able to explain the mental model, choose the right pattern for a product requirement, identify common failure modes, and verify behavior through tooling, tests, and browser inspection.
