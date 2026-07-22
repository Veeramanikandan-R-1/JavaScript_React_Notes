# Browser Security, CORS, CSP, and XSS (Senior Frontend Engineer Perspective)

Before going deeper into frameworks or libraries, understand this topic as part of real frontend engineering: security boundaries frontend developers must respect.

---

# 1. Fundamentals

* Browser APIs connect JavaScript to documents, events, storage, networking, and security boundaries.
* DOM code should preserve semantics, accessibility, and performance.
* The browser is a shared runtime: user input, rendering, scripts, network, and storage interact.

---

# 2. Core Concepts

| Concept | Practical meaning |
| ------- | ----------------- |
| Same-origin policy | Restricts how documents and scripts interact across origins. |
| CORS | Server-controlled permission for cross-origin reads. |
| XSS | Script injection through untrusted content. |
| CSP | Policy that limits what scripts and resources can run. |
| Cookie flags | Security settings such as HttpOnly, Secure, and SameSite. |

---

# 3. Internal Working

* DOM reads and writes can trigger style and layout work when mixed carelessly.
* Browser security policies isolate origins and require explicit server permission for cross-origin reads.
* Native elements expose behavior and accessibility that custom JavaScript must otherwise recreate.

---

# 4. Common Mistakes

* Memorizing syntax without understanding behavior.

---

# 5. Best Practices

* Use the simplest reliable approach.

---

# 6. Code Example

```js
// Prefer textContent for untrusted text.
message.textContent = userProvidedMessage;

// Avoid this with untrusted input:
// message.innerHTML = userProvidedMessage;
```

---

# 7. Real-world Scenarios

* Applying the concept in a real frontend feature.

---

# 7.1 Frontend Security Checklist

XSS prevention:

* render untrusted text as text, not HTML
* sanitize rich text before using `innerHTML` or `dangerouslySetInnerHTML`
* validate URLs before using them in links or redirects
* avoid `javascript:` URLs
* use CSP to reduce damage if injection happens

CSRF prevention:

* use `SameSite` cookies where possible
* use CSRF tokens for cookie-authenticated unsafe requests
* avoid state-changing `GET` endpoints
* validate `Origin`/`Referer` on the server for sensitive flows

Clickjacking prevention:

```http
Content-Security-Policy: frame-ancestors 'self'
X-Frame-Options: DENY
```

External link safety:

```html
<a href="https://example.com" target="_blank" rel="noopener noreferrer">
  External report
</a>
```

Cookie flags:

```http
Set-Cookie: session=abc; HttpOnly; Secure; SameSite=Lax
```

Frontend code can reduce risk, but security-sensitive checks must be enforced by the backend.

---

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

* Browser Security, CORS, CSP, and XSS matters because it affects real users, future maintainers, and production behavior.
* Learn the mental model before memorizing syntax.
* Use browser DevTools, tests, and small examples to verify behavior.
* Browser APIs connect JavaScript to documents, events, storage, networking, and security boundaries.
* DOM code should preserve semantics, accessibility, and performance.
* The browser is a shared runtime: user input, rendering, scripts, network, and storage interact.

---

# Cheat Sheet

| Concept | Practical meaning |
| ------- | ----------------- |
| Same-origin policy | Restricts how documents and scripts interact across origins. |
| CORS | Server-controlled permission for cross-origin reads. |
| XSS | Script injection through untrusted content. |
| CSP | Policy that limits what scripts and resources can run. |
| Cookie flags | Security settings such as HttpOnly, Secure, and SameSite. |

---

# Interview Questions with Answers

### 1. What problem does CORS solve, and what does it not solve?

CORS lets a server decide which browser origins are allowed to read its cross-origin responses. It is not authentication, authorization, or backend security; non-browser clients can still call the server unless the server protects the resource.

### 2. Why is XSS dangerous in a frontend app?

Injected script can act as the user, read accessible tokens/data, change the page, submit requests, and steal sensitive information. Prevent it by escaping output, avoiding unsafe HTML insertion, sanitizing trusted rich text, and using CSP as defense in depth.

### 3. What does CSP protect against?

CSP limits where scripts, styles, images, frames, and other resources can load from and can block inline script execution. It reduces the impact of injection bugs, but it does not replace correct escaping and safe rendering.

### 4. How do you debug a CORS failure?

Read the browser console and Network tab, inspect preflight `OPTIONS`, `Access-Control-Allow-Origin`, allowed methods/headers, credentials mode, and whether the API is returning the headers on both success and error responses.

### 5. What frontend security issues do you look for in review?

Unsafe `innerHTML`, rendering untrusted markdown without sanitization, secrets in client code, relaxed CSP, storing auth tokens in risky places, missing `rel="noopener"` on external links, and trusting client-side checks for authorization.

---

# Hands-on Exercises

## Exercise 1

Build a tiny DOM interaction for Browser Security, CORS, CSP, and XSS.

### Solution

Use semantic HTML, add one event listener, preserve keyboard behavior, and clean up any timer/listener/observer if needed.

## Exercise 2

Inspect the result in DevTools.

### Solution

Check DOM structure, events, computed styles, accessibility name, storage/network/security state if relevant.

---

# Senior Frontend Engineer Takeaway

For senior-level work, Browser Security, CORS, CSP, and XSS is not only a syntax topic. You should be able to explain the mental model, choose the right pattern for a product requirement, identify common failure modes, and verify behavior through tooling, tests, and browser inspection.
