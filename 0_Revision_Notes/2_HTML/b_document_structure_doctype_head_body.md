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

### 1. What problem does `<!doctype html>` solve?

It tells the browser to use standards mode instead of quirks mode. Without it, browsers may emulate older layout behavior, which can create strange CSS sizing and alignment bugs. In interviews I usually connect this to production debugging: a missing doctype can make correct CSS behave incorrectly.

### 2. Why should every page set `<html lang="en">` or the correct language?

The `lang` attribute helps screen readers choose pronunciation, helps browsers and translation tools understand the page, and gives search engines useful context. It is a small line with real accessibility impact.

### 3. Why is the viewport meta tag important on mobile?

Without it, mobile browsers may use a wide layout viewport and scale the page down, making text and controls tiny. With `width=device-width, initial-scale=1`, responsive CSS behaves against the actual device width.

### 4. Where should scripts go, and when would you use `defer` or `type="module"`?

Critical metadata belongs in `head`; visible content belongs in `body`. For normal scripts, `defer` downloads in parallel and runs after parsing. ES modules already defer by default, so `<script type="module" src="/main.js"></script>` is the normal modern choice.

### 5. A page has visible text inside `head`. What happens?

That is invalid document structure. Browsers may move or ignore nodes while repairing the DOM, and the result can differ from what the developer intended. I would fix the structure instead of relying on browser recovery.

---

# Quick Practice

1. Explain one realistic production use case for Document Structure, Doctype, Head, and Body in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
