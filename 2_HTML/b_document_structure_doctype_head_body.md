# Document Structure, Doctype, Head, and Body (Senior Frontend Engineer Perspective)

Before going deeper into frameworks or libraries, understand this topic as part of real frontend engineering: the minimal correct HTML document and why each part exists.

---

# 1. Fundamentals

* Every HTML page should declare the document type, language, metadata, title, and body content.
* `head` contains metadata and resources for the browser; `body` contains content users interact with.
* The viewport meta tag is required for responsive behavior on mobile devices.

---

# 2. Core Concepts

| Concept | Practical meaning |
| ------- | ----------------- |
| `<!doctype html>` | Enables standards mode so the browser uses modern layout behavior. |
| `html lang` | Declares document language for screen readers, translation, and search engines. |
| `meta charset` | Defines character encoding, usually UTF-8. |
| `title` | Shown in browser tabs, bookmarks, search results, and assistive tech context. |
| Viewport | Controls how CSS pixels map to mobile device screens. |

---

# 3. Internal Working

* Without a doctype, browsers may enter quirks mode and emulate older layout bugs.
* The parser may infer missing `html`, `head`, and `body` elements, but relying on that weakens maintainability.
* The browser can start fetching linked CSS, fonts, and scripts while parsing the document.

---

# 4. Common Mistakes

* Forgetting `<meta name="viewport" content="width=device-width, initial-scale=1">`.
* Using duplicate titles across many pages.
* Putting visible page content in the `head`.
* Loading non-critical scripts before the document can render useful content.

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

This tells the browser **how to display the webpage on mobile devices**.

### Breakdown

* **`width=device-width`**

  * Sets the webpage width to match the device's screen width.
  * Example: On a phone with a 390px-wide screen, the viewport becomes **390px**.

* **`initial-scale=1`**

  * Sets the initial zoom level to **100% (1:1)** when the page first loads.

### Why is it needed?

Without this tag, mobile browsers may assume a much wider viewport (e.g., around 980px) and shrink the page to fit, making text and buttons appear tiny.

With this tag:

* ✅ Responsive CSS (`@media` queries, Flexbox, Grid) works correctly.
* ✅ The page fits the device width.
* ✅ Users see the page at a readable size without automatic zooming.

**In one line:**
The viewport meta tag makes a webpage **responsive by matching the viewport to the device width and loading it at normal zoom (100%)**.

---

# 5. Best Practices

* Use UTF-8 and set language explicitly.
* Keep titles short, specific, and unique.
* Load CSS in `head` and application scripts as modules or with `defer`.
* Include useful metadata for description, icons, and sharing only when needed.

---

# 6. Code Example

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Frontend notes for HTML, CSS, JavaScript, and React.">
    <title>Frontend Notes</title>
    <link rel="stylesheet" href="/styles.css">
    <script type="module" src="/main.js"></script>
  </head>
  <body>
    <main>
      <h1>Frontend Notes</h1>
    </main>
  </body>
</html>
```
```html
<script type="module" src="/main.js"></script>
```

### Why `type="module"`?

It tells the browser that this JavaScript file is an **ES Module**.

Benefits:

* ✅ Can use `import` and `export`.
* ✅ Each file has its own scope (variables don't pollute the global scope).
* ✅ Modules are loaded only once.
* ✅ They are **automatically deferred** (executed after the HTML is parsed).

Example:

```js
// main.js
import { sum } from "./math.js";
```

---

### Why `defer`?

```html
<script defer src="main.js"></script>
```

Without `defer`:

* Browser stops parsing HTML.
* Downloads and executes the script immediately.
* Page rendering is delayed.

With `defer`:

* Browser continues parsing HTML.
* Downloads the script in parallel.
* Executes it **after the HTML is fully parsed**.

This improves page loading and ensures DOM elements exist before the script runs.

---

### `module` vs `defer`

| `type="module"`                         | `defer`                          |
| --------------------------------------- | -------------------------------- |
| Supports `import`/`export`              | Doesn't support modules          |
| Automatically behaves like `defer`      | Only delays execution            |
| Used for modern JavaScript applications | Used for normal JavaScript files |

**Rule of thumb:**

* Use **`type="module"`** for modern applications (React, Vue, Vite, etc.).
* Use **`defer`** for traditional JavaScript files that don't use modules.

is it possible to use both defer and module in same script?
Yes, it is possible, but **it's unnecessary**.

```html
<script type="module" defer src="main.js"></script>
```

This is valid HTML, but `defer` has **no effect** because:

* `type="module"` **already behaves as if `defer` is present**.
* The browser downloads the module in parallel and executes it after the HTML has been parsed.

So these two are effectively equivalent:

```html
<script type="module" src="main.js"></script>
```

```html
<script type="module" defer src="main.js"></script>
```

**Recommendation:** Use just:

```html
<script type="module" src="main.js"></script>
```

It's cleaner and is the standard practice.


---

# 7. Real-world Scenarios

* A mobile layout appears zoomed out because viewport metadata is missing.
* A screen reader pronounces content incorrectly because `lang` is missing.
* A legacy page behaves strangely because it renders in quirks mode.

---

# 7.1 Global Attributes to Remember

| Attribute | Practical use |
| --------- | ------------- |
| `id` | Unique identifier for labels, fragments, and scripting. |
| `class` | CSS hook. In React JSX, write `className`. |
| `lang` | Language for pronunciation, translation, and search. |
| `dir` | Text direction such as `ltr`, `rtl`, or `auto`. |
| `hidden` | Hide content from display and accessibility tree until needed. |
| `tabindex` | Manage keyboard focus only when native order is insufficient. |
| `contenteditable` | Make content editable; requires careful keyboard/a11y handling. |
| `draggable` | Enable drag behavior; still needs accessible alternatives. |
| `data-*` | Store small custom metadata for scripts/tests. |

React JSX reminders:

```jsx
<label htmlFor="email" className="field-label">
  Email
</label>
<input id="email" data-testid="email-input" />
```

Use `tabindex="0"` rarely to include custom interactive elements in focus order. Avoid positive tabindex values because they create confusing keyboard order.

---
tab index

`tabindex` controls **whether an element can receive keyboard focus and in what order when the user presses the `Tab` key**.

### Syntax

```html
<button tabindex="0">Save</button>
```

### Common values

| Value              | Meaning                                                                            |
| ------------------ | ---------------------------------------------------------------------------------- |
| `0`                | Focusable in the natural tab order (recommended).                                  |
| `-1`               | Not reachable with `Tab`, but can be focused using JavaScript (`element.focus()`). |
| `1`, `2`, `3`, ... | Custom tab order (avoid using).                                                    |

### Examples

**1. Natural tab order (Recommended)**

```html
<input type="text">
<button tabindex="0">Submit</button>
```

The browser follows the normal document order.

---

**2. Programmatic focus**

```html
<div tabindex="-1" id="error">
  Invalid input
</div>
```

```js
document.getElementById("error").focus();
```

Useful for moving focus to:

* Error messages
* Dialogs/Modals
* Notifications

---

**3. Custom tab order (Avoid)**

```html
<input tabindex="2">
<button tabindex="1">Save</button>
```

Pressing `Tab`:

```
Save → Input
```

This can confuse users and becomes hard to maintain.

### Best Practices

* ✅ Use **`tabindex="0"`** to make custom interactive elements keyboard accessible.
* ✅ Use **`tabindex="-1"`** for elements that should receive focus only via JavaScript.
* ❌ Avoid positive values (`1`, `2`, `3`, ...). Let the browser handle the natural order.

### When to add `tabindex`

Add it only when an element is **not naturally focusable** but should be.

Example:

```html
<div tabindex="0" role="button">Click Me</div>
```

Without `tabindex`, a `<div>` cannot receive keyboard focus. With `tabindex="0"`, users can tab to it.

> **Note:** If an element is already interactive (e.g., `<button>`, `<input>`, `<a href="">`, `<select>`, `<textarea>`), **do not add `tabindex`** unless you have a specific accessibility reason.

---

# 8. Senior Deep Dive

## When to Use

* Use semantic elements whenever the element's built-in meaning matches the job.
* Use ARIA only to fill semantic gaps, not to overwrite good native HTML.
* Use progressive enhancement for flows that should remain usable under partial loading or JavaScript failure.

## Debug Checklist

* Inspect the DOM tree, not only the visual page.
* Check the accessibility tree, labels, alt text, landmark names, and heading order.
* Submit forms manually and confirm `name` values, methods, validation, and server payloads.

## Code Review Checklist

* Are links and buttons used according to purpose?
* Can a keyboard user complete the flow?
* Does the document have useful title, language, metadata, headings, and landmarks?


---

# Revision Notes

* Document Structure, Doctype, Head, and Body matters because it affects real users, future maintainers, and production behavior.
* Learn the mental model before memorizing syntax.
* Use browser DevTools, tests, and small examples to verify behavior.
* Every HTML page should declare the document type, language, metadata, title, and body content.
* `head` contains metadata and resources for the browser; `body` contains content users interact with.
* The viewport meta tag is required for responsive behavior on mobile devices.

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

# Hands-on Exercises

## Exercise 1

Write a complete HTML document skeleton for a product page.

### Solution

Include doctype, `html lang`, charset, viewport, description, title, linked CSS, and semantic body content.

---

# Senior Frontend Engineer Takeaway

For senior-level work, Document Structure, Doctype, Head, and Body is not only a syntax topic. You should be able to explain the mental model, choose the right pattern for a product requirement, identify common failure modes, and verify behavior through tooling, tests, and browser inspection.
