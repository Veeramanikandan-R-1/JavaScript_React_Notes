# CSS Typography — Interview Notes

Typography controls **how text looks and how readable it is**.

---

## 1. `font-family`

Defines the **font used to render text**.

```css
body {
  font-family: Arial, sans-serif;
}
```

### Font fallback

```css
body {
  font-family: "Roboto", Arial, sans-serif;
}
```

Browser tries:

```text
Roboto → Arial → sans-serif
```

If the first font isn't available, it uses the next one.

### Generic families

```text
serif
sans-serif
monospace
cursive
fantasy
system-ui
```

**Best practice:** Always provide a fallback font.

---

## 2. `font-weight`

Controls the **thickness/boldness** of text.

```css
.title {
  font-weight: 700;
}
```

Common values:

```text
100 → Thin
200 → Extra Light
300 → Light
400 → Normal
500 → Medium
600 → Semi Bold
700 → Bold
800 → Extra Bold
900 → Black
```

Also:

```css
font-weight: normal; /* 400 */
font-weight: bold;   /* 700 */
```

### Important

The requested weight must actually be available in the chosen font. If it isn't, the browser may use a different available weight.

---

# 3. `line-height`

Controls the **height of each line of text**, which affects vertical spacing and readability.

```css
p {
  line-height: 1.5;
}
```

### Unitless value ⭐

```css
body {
  line-height: 1.5;
}
```

If font size is `16px`:

```text
16 × 1.5 = 24px line height
```

Unitless values are generally preferred because the value scales naturally with the element's font size.

Can also use:

```css
line-height: 24px;
line-height: 150%;
```

### Common usage

```css
body {
  font-size: 16px;
  line-height: 1.5;
}
```

---

# 4. `letter-spacing`

Controls the **space between characters**.

```css
.heading {
  letter-spacing: 2px;
}
```

Positive value:

```css
letter-spacing: 2px;
```

→ More space between characters.

Negative value:

```css
letter-spacing: -0.5px;
```

→ Characters become closer.

Example:

```css
.heading {
  letter-spacing: 1px;
}
```

Useful for:

* Headings
* All-caps text
* Branding/design systems

### ⚠️ Accessibility/readability

Avoid excessive letter spacing or negative spacing because it can make text difficult to read.

---

# ⭐ Practical Example

```css
.title {
  font-family: "Roboto", Arial, sans-serif;
  font-size: 32px;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.5px;
}

.description {
  font-family: "Roboto", Arial, sans-serif;
  font-size: 16px;
  line-height: 1.5;
}
```

---

# 🎯 Quick Revision

| Property         | Purpose                             |
| ---------------- | ----------------------------------- |
| `font-family`    | Type/font used                      |
| `font-weight`    | Thickness/boldness                  |
| `line-height`    | Vertical space between lines        |
| `letter-spacing` | Horizontal space between characters |

### Interview Must Remember

> **`font-family` controls the typeface, `font-weight` controls thickness, `line-height` controls line spacing, and `letter-spacing` controls spacing between characters.**

### Senior-level tip

For a React design system, typography is usually standardized through reusable CSS classes/tokens:

```css
:root {
  --font-body: 16px;
  --line-body: 1.5;
  --font-heading-weight: 700;
}
```

This keeps typography **consistent across the application**.
