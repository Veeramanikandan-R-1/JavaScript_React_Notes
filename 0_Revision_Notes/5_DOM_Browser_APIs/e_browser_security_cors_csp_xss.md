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

### 1. Why does Same-origin policy matter in Browser Security, CORS, CSP, and XSS?

Same-origin policy means Restricts how documents and scripts interact across origins. Use Browser Security, CORS, CSP, and XSS to solve the specific problem described in this note.

### 2. How does CORS affect the implementation?

CORS means Server-controlled permission for cross-origin reads. Understand the browser, runtime, or React behavior behind Browser Security, CORS, CSP, and XSS before choosing an implementation.

### 3. What mistake should you avoid around skipping real edge cases?

Avoid skipping real edge cases. Prefer the simplest reliable approach and verify it with a small example.

### 4. How would you debug a production issue related to Browser Security, CORS, CSP, and XSS?

Reproduce the issue, inspect the relevant state or DOM, and reduce it to a small failing case. Check edge cases, browser behavior, and tests before changing the implementation.

### 5. What would you check in code review for Browser Security, CORS, CSP, and XSS?

Check correctness, edge cases, readability, accessibility, performance, and test coverage. Confirm the chosen approach matches the problem and does not add unnecessary complexity.

---

# Quick Practice

1. Explain one realistic production use case for Browser Security, CORS, CSP, and XSS in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
