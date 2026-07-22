# Revision Notes: HTML Performance and Resource Loading

* HTML controls which resources the browser discovers early.
* Critical resources should load early; non-critical resources should not block first render.
* Good loading strategy reduces blank screens, layout shift, and wasted bandwidth.
* Best practice: Use `type="module"` for modern application entry points.
* Best practice: Set image dimensions or CSS aspect ratios.
* Best practice: Use `loading="lazy"` only for non-critical images and iframes.
* Best practice: Preload only truly critical assets, such as a hero image or primary font.
* Avoid: Preloading too many resources and hurting prioritization.
* Avoid: Lazy-loading the hero image that should load immediately.
* Avoid: Blocking the parser with scripts that are not needed for initial content.
* Avoid: Ignoring font loading behavior and layout shift.

---

# Cheat Sheet

| Concept | Practical meaning |
| ------- | ----------------- |
| Critical CSS | Styles needed for above-the-fold content. |
| `defer` | Loads script during parsing and executes after document parsing. |
| `async` | Loads script independently and executes as soon as available. |
| Module script | Deferred by default and supports ES modules. |
| Preload | Hints that a resource is important for the current page. |
| Lazy loading | Defers below-the-fold images and iframes. |

---

# Interview Questions with Answers

### 1. Why does Critical CSS matter in HTML Performance and Resource Loading?

Critical CSS means Styles needed for above-the-fold content. Use HTML Performance and Resource Loading to solve the specific problem described in this note.

### 2. How does `defer` affect the implementation?

`defer` means Loads script during parsing and executes after document parsing. Understand the browser, runtime, or React behavior behind HTML Performance and Resource Loading before choosing an implementation.

### 3. What mistake should you avoid around skipping real edge cases?

Avoid skipping real edge cases. Prefer the simplest reliable approach and verify it with a small example.

### 4. How would you debug a production issue related to HTML Performance and Resource Loading?

Reproduce the issue, inspect the relevant state or DOM, and reduce it to a small failing case. Check edge cases, browser behavior, and tests before changing the implementation.

### 5. What would you check in code review for HTML Performance and Resource Loading?

Check correctness, edge cases, readability, accessibility, performance, and test coverage. Confirm the chosen approach matches the problem and does not add unnecessary complexity.

---

# Quick Practice

1. Explain one realistic production use case for HTML Performance and Resource Loading in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
