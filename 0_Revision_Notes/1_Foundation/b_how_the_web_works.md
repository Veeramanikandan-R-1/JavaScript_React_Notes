# Revision Notes: How the Web Works

* The web is built on clients, servers, URLs, HTTP, HTML documents, assets, and browser rendering.
* A browser is not just a viewer; it is a runtime with networking, parsing, rendering, storage, security, and JavaScript execution.
* Frontend decisions affect network cost, rendering speed, caching, accessibility, and security.
* Best practice: Use `defer` or module scripts for most application JavaScript.
* Best practice: Inspect the Network panel for request waterfalls, cache behavior, payload sizes, and failed requests.
* Best practice: Return correct HTTP status codes and meaningful error bodies from APIs.
* Best practice: Prioritize critical CSS, optimized assets, and useful first content.
* Avoid: Loading large scripts in the document head without understanding render blocking.
* Avoid: Treating all status codes as success or failure without nuance.
* Avoid: Forgetting that network latency matters even when local development feels instant.
* Avoid: Shipping pages that rely on JavaScript before meaningful HTML appears.

---

# Cheat Sheet

| Concept | Practical meaning |
| ------- | ----------------- |
| URL | Identifies a resource and includes protocol, host, path, query string, and fragment. |
| DNS | Resolves a domain name to an IP address. |
| HTTP | Defines request methods, response status codes, headers, caching, cookies, and content negotiation. |
| HTML response | The initial document that references CSS, JavaScript, images, fonts, and other assets. |
| Rendering pipeline | The browser parses, styles, lays out, paints, and composites the page. |

---

# Interview Questions & Answers

### 1. How would you explain How the Web Works in a real project?

I explain the value model, execution order, scope, references, and failure cases before reaching for syntax.

### 2. What happens internally when How the Web Works is involved?

JavaScript runs synchronously until the stack clears; async work resumes later through host scheduling, so timing and shared state matter.

### 3. How do you debug issues related to How the Web Works?

I reproduce the input, add a breakpoint, inspect scope and call stack, verify object identity, and test the edge case that failed.

### 4. What is the biggest production risk with How the Web Works?

The biggest risk is building something that works for the demo state but fails with real content, slow networks, accessibility needs, errors, or future changes.

### 5. What should a senior engineer look for in code review?

They should check the mental model, edge cases, accessibility, performance cost, naming, state ownership, test coverage, and whether the simpler native/platform option was considered.

---

# Quick Practice

1. Explain How the Web Works in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
