# Browser DevTools and Debugging

This note is a practical guide for finding frontend bugs using browser DevTools.

---

# 1. Open DevTools

Common shortcuts:

```text
Chrome / Edge on Windows: F12 or Ctrl + Shift + I
Inspect element: Right click -> Inspect
Console shortcut: Ctrl + Shift + J
```

Most-used panels:

| Panel | Use it for |
| ----- | ---------- |
| Elements | HTML, CSS, layout, accessibility attributes |
| Console | JavaScript errors and quick testing |
| Network | API calls, files, status codes, payloads |
| Sources | Breakpoints and step-by-step JavaScript debugging |
| Application | localStorage, sessionStorage, cookies |
| Performance | Slow rendering, long tasks, layout shifts |
| Lighthouse | Quick audits for performance, SEO, accessibility |

---

# 2. Debug HTML and CSS

Use the **Elements** panel.

Check:

```text
Is the element present?
Is the class name correct?
Is the CSS rule crossed out?
Which rule is winning?
What is the computed width/height?
Is there overflow?
Is z-index working?
```

Practical CSS bug checklist:

```text
1. Select element
2. Check Styles tab
3. Check Computed tab
4. Check box model
5. Toggle CSS rules on/off
6. Test mobile width
7. Check if parent has overflow hidden
```

---

# 3. Debug JavaScript Errors

Use the **Console** panel.

Common errors:

| Error | Meaning |
| ----- | ------- |
| `ReferenceError` | Variable/function does not exist |
| `TypeError` | Wrong type, often reading property of `undefined` |
| `SyntaxError` | Invalid JavaScript syntax |
| `Failed to fetch` | Network, CORS, or server issue |

Example:

```js
console.log(user.name);
```

If `user` is `undefined`, this throws:

```text
TypeError: Cannot read properties of undefined
```

Fix:

```js
if (user) {
  console.log(user.name);
}
```

---

# 4. Use Breakpoints

Use the **Sources** panel or add `debugger`.

```js
function handleSubmit(event) {
  event.preventDefault();
  debugger;

  const form = new FormData(event.currentTarget);
  console.log(Object.fromEntries(form));
}
```

When code pauses, check:

```text
Variables
Function arguments
Call stack
Current line
Next line to execute
```

---

# 5. Debug API Calls

Use the **Network** panel.

Click a request and check:

```text
Headers
Payload
Preview
Response
Status code
Timing
```

Common API debugging questions:

```text
Is the URL correct?
Is the method GET/POST/etc correct?
Did request body go correctly?
Is status 200, 400, 401, 403, 404, or 500?
Is response JSON valid?
Is there a CORS error?
```

Example fetch check:

```js
const response = await fetch("/api/products");

if (!response.ok) {
  console.error("API failed", response.status);
}
```

---

# 6. Debug localStorage and Cookies

Use the **Application** panel.

Check:

```text
Local Storage
Session Storage
Cookies
IndexedDB
Cache Storage
```

Example:

```js
localStorage.setItem("theme", "dark");
console.log(localStorage.getItem("theme"));
```

Use this when login state, theme, cart, or saved filters behave incorrectly.

---

# 7. Debug Mobile Layout

Use device toolbar:

```text
DevTools -> Toggle device toolbar
Shortcut: Ctrl + Shift + M
```

Check:

```text
Does text overflow?
Do buttons fit?
Can form fields be used?
Is horizontal scroll appearing?
Is navbar usable?
```

Common fix:

```css
* {
  box-sizing: border-box;
}

img {
  max-width: 100%;
  height: auto;
}
```

---

# 8. Debug Performance

Use **Performance** panel when:

* Page feels slow.
* Typing lags.
* Scrolling is choppy.
* Animation is not smooth.
* React screen re-renders too much.

Simple checks:

```text
Record performance
Repeat slow action
Stop recording
Look for long tasks
Check scripting, rendering, painting time
```

Do not optimize randomly. Measure first.

---

# 9. Debugging Routine

Use this every time:

```text
1. Reproduce the bug
2. Identify the layer: HTML, CSS, JS, API, React, performance
3. Inspect with the correct DevTools panel
4. Make one small change
5. Test again
6. Write down the root cause
```

---

# 10. Quick Exercises

## Exercise 1

Create a broken CSS rule and use DevTools to find why it does not apply.

## Exercise 2

Create a button click handler with `debugger` and step through it.

## Exercise 3

Call an API or fake URL and inspect the failed request in Network tab.

## Exercise 4

Save a value in `localStorage` and inspect it in Application tab.

---

# 11. Interview Notes

### How do you debug a frontend issue?

First reproduce it, then identify whether it is HTML, CSS, JavaScript, network, state, or performance. Then inspect with DevTools and fix the root cause.

### How do you debug CSS?

Inspect the element, check matched styles, computed styles, box model, layout, media queries, overflow, and stacking context.

### How do you debug API issues?

Use Network tab to check URL, method, status code, request payload, response body, headers, and CORS errors.

### Why use breakpoints instead of only `console.log`?

Breakpoints let you pause execution, inspect variables, follow the call stack, and step through code line by line.
