# Revision Notes: Browser DevTools and Debugging

## Main Panels

| Panel | Use |
| ----- | --- |
| Elements | HTML, CSS, layout |
| Console | JavaScript errors |
| Network | API calls and files |
| Sources | Breakpoints |
| Application | localStorage, cookies |
| Performance | Slow UI |
| Lighthouse | Audits |

---

# Debug CSS

```text
1. Inspect element
2. Check Styles tab
3. Check Computed tab
4. Check box model
5. Toggle CSS rules
6. Test mobile width
```

---

# Debug JavaScript

Use Console for errors.

Common errors:

| Error | Meaning |
| ----- | ------- |
| `ReferenceError` | Missing variable |
| `TypeError` | Wrong value type or undefined |
| `SyntaxError` | Invalid syntax |
| `Failed to fetch` | Network/CORS/server issue |

Use `debugger`:

```js
function handleClick() {
  debugger;
  console.log("clicked");
}
```

---

# Debug API Calls

Open Network tab and check:

* URL
* Method
* Status code
* Payload
* Response
* Headers
* CORS error

---

# Debug Mobile

Use:

```text
Ctrl + Shift + M
```

Check:

* Text overflow
* Button size
* Horizontal scroll
* Form usability
* Navbar behavior

---

# Debugging Routine

```text
1. Reproduce bug
2. Identify layer: HTML, CSS, JS, API, React, performance
3. Use correct DevTools panel
4. Make one small change
5. Test again
6. Note root cause
```

---

# Interview Quick Answers

### How do you debug frontend issues?

Reproduce the issue, identify the failing layer, inspect with DevTools, fix the root cause, and test again.

### How do you debug CSS?

Inspect the element, check matched styles, computed styles, box model, media queries, overflow, and stacking.

### How do you debug API issues?

Use Network tab to check URL, method, status, payload, response, headers, and CORS.
