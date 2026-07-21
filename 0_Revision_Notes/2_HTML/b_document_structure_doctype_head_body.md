# Revision Notes: Document Structure, Doctype, Head, and Body

* Every HTML page should declare the document type, language, metadata, title, and body content.
* `head` contains metadata and resources for the browser; `body` contains content users interact with.
* The viewport meta tag is required for responsive behavior on mobile devices.
* Best practice: Use UTF-8 and set language explicitly.
* Best practice: Keep titles short, specific, and unique.
* Best practice: Load CSS in `head` and application scripts as modules or with `defer`.
* Best practice: Include useful metadata for description, icons, and sharing only when needed.
* Avoid: Forgetting `<meta name="viewport" content="width=device-width, initial-scale=1">`.
* Avoid: Using duplicate titles across many pages.
* Avoid: Putting visible page content in the `head`.
* Avoid: Loading non-critical scripts before the document can render useful content.

---

# Cheat Sheet

| Concept | Practical meaning |
| ------- | ----------------- |
| `<!doctype html>` | Enables standards mode so the browser uses modern layout behavior. |
| `html lang` | Declares document language for screen readers, translation, and search engines. |
| `meta charset` | Defines character encoding, usually UTF-8. |
| `title` | Shown in browser tabs, bookmarks, search results, and assistive tech context. |
| Viewport | Controls how CSS pixels map to mobile device screens. |

---

# Interview Questions & Answers

### 1. How would you explain Document Structure, Doctype, Head, and Body in a real project?

It means choosing markup that describes meaning first: headings for hierarchy, landmarks for page regions, labels for controls, and native elements for behavior.

### 2. What happens internally when Document Structure, Doctype, Head, and Body is involved?

The browser parses markup into the DOM and accessibility tree, so incorrect HTML can create bugs even when the screen looks visually correct.

### 3. How do you debug issues related to Document Structure, Doctype, Head, and Body?

I check DOM order, headings, labels, alt text, link/button purpose, form submission, keyboard navigation, and whether the page still works with limited JavaScript.

### 4. What is the biggest production risk with Document Structure, Doctype, Head, and Body?

The biggest risk is building something that works for the demo state but fails with real content, slow networks, accessibility needs, errors, or future changes.

### 5. What should a senior engineer look for in code review?

They should check the mental model, edge cases, accessibility, performance cost, naming, state ownership, test coverage, and whether the simpler native/platform option was considered.

---

# Quick Practice

1. Explain Document Structure, Doctype, Head, and Body in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
