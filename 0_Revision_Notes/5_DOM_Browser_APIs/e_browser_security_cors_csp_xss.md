# Revision Notes: Browser Security, CORS, CSP, and XSS

* Browser APIs connect JavaScript to documents, events, storage, networking, and security boundaries.
* DOM code should preserve semantics, accessibility, and performance.
* The browser is a shared runtime: user input, rendering, scripts, network, and storage interact.
* Best practice: Use the simplest reliable approach.
* Avoid: Memorizing syntax without understanding behavior.

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

# Quick Practice

1. Explain one realistic production use case for Browser Security, CORS, CSP, and XSS in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
