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

# Interview Questions with Answers

### 1. Why does `<!doctype html>` matter in Document Structure, Doctype, Head, and Body?

`<!doctype html>` means Enables standards mode so the browser uses modern layout behavior. Use Document Structure, Doctype, Head, and Body to solve the specific problem described in this note.

### 2. How does `html lang` affect the implementation?

`html lang` means Declares document language for screen readers, translation, and search engines. Understand the browser, runtime, or React behavior behind Document Structure, Doctype, Head, and Body before choosing an implementation.

### 3. What mistake should you avoid around skipping real edge cases?

Avoid skipping real edge cases. Prefer the simplest reliable approach and verify it with a small example.

### 4. How would you debug a production issue related to Document Structure, Doctype, Head, and Body?

Reproduce the issue, inspect the relevant state or DOM, and reduce it to a small failing case. Check edge cases, browser behavior, and tests before changing the implementation.

### 5. What would you check in code review for Document Structure, Doctype, Head, and Body?

Check correctness, edge cases, readability, accessibility, performance, and test coverage. Confirm the chosen approach matches the problem and does not add unnecessary complexity.

---

# Quick Practice

1. Explain one realistic production use case for Document Structure, Doctype, Head, and Body in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
