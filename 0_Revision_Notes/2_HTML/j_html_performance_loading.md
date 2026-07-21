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

# Interview Questions & Answers

### 1. How would you explain HTML Performance and Resource Loading in a real project?

It means choosing markup that describes meaning first: headings for hierarchy, landmarks for page regions, labels for controls, and native elements for behavior.

### 2. What happens internally when HTML Performance and Resource Loading is involved?

The browser parses markup into the DOM and accessibility tree, so incorrect HTML can create bugs even when the screen looks visually correct.

### 3. How do you debug issues related to HTML Performance and Resource Loading?

I check DOM order, headings, labels, alt text, link/button purpose, form submission, keyboard navigation, and whether the page still works with limited JavaScript.

### 4. What is the biggest production risk with HTML Performance and Resource Loading?

The biggest risk is building something that works for the demo state but fails with real content, slow networks, accessibility needs, errors, or future changes.

### 5. What should a senior engineer look for in code review?

They should check the mental model, edge cases, accessibility, performance cost, naming, state ownership, test coverage, and whether the simpler native/platform option was considered.

---

# Quick Practice

1. Explain HTML Performance and Resource Loading in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
