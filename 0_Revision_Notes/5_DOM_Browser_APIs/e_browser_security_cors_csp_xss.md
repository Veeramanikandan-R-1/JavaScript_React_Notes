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

# Interview Questions & Answers

### 1. How would you explain Browser Security, CORS, CSP, and XSS in a real project?

It is about using the web platform directly: DOM, events, forms, storage, security boundaries, and browser rendering.

### 2. What happens internally when Browser Security, CORS, CSP, and XSS is involved?

Browser APIs are live and stateful, so code must clean up listeners, avoid layout thrashing, preserve accessibility, and respect security limits.

### 3. How do you debug issues related to Browser Security, CORS, CSP, and XSS?

I inspect DOM state, event propagation, network/security errors, storage values, accessibility names, and performance traces.

### 4. What is the biggest production risk with Browser Security, CORS, CSP, and XSS?

The biggest risk is building something that works for the demo state but fails with real content, slow networks, accessibility needs, errors, or future changes.

### 5. What should a senior engineer look for in code review?

They should check the mental model, edge cases, accessibility, performance cost, naming, state ownership, test coverage, and whether the simpler native/platform option was considered.

---

# Quick Practice

1. Explain Browser Security, CORS, CSP, and XSS in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
