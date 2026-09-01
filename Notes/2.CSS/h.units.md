# CSS Units — Interview Notes

CSS units define **sizes, spacing, dimensions, and positioning**.

They are broadly:

```text
Absolute → px
Relative → rem, em, vh, vw, %, ch
```

---

## 1. `px` — Pixel

A CSS pixel is an **absolute-length unit** for practical layout purposes.

```css
.card {
  width: 300px;
  padding: 20px;
  border-radius: 8px;
}
```

### Use for

* Borders
* Small fixed dimensions
* Precise UI details

```css
border: 1px solid;
```

**Interview:** `px` doesn't scale based on the parent element like `em` or `%`.

---

# 2. `rem` — Root `em`

`1rem` is relative to the **root (`html`) font size**.

Typically browsers have:

```css
html {
  font-size: 16px;
}
```

Therefore:

```text
1rem  = 16px
2rem  = 32px
0.5rem = 8px
```

Example:

```css
.heading {
  font-size: 2rem;
  margin-bottom: 1rem;
}
```

### Why `rem` is popular ⭐

It provides **consistent sizing across the application** and works well with user/browser font-size preferences.

---

# 3. `em`

`em` is relative to the **font size of the relevant element**.

```css
.parent {
  font-size: 20px;
}

.child {
  font-size: 2em;
}
```

Result:

```text
child font-size = 40px
```

### Important ⚠️

For properties other than `font-size`, `em` is generally relative to the **element's own computed font size**.

```css
.button {
  font-size: 16px;
  padding: 1em;
}
```

Here:

```text
1em padding = 16px
```

### `em` vs `rem`

```text
em  → relative to element/context font size
rem → relative to root font size
```

For application-wide spacing/typography, `rem` is often easier to reason about.

---

# 4. `vh` — Viewport Height

`1vh` = **1% of the viewport height**.

```css
.hero {
  height: 100vh;
}
```

If viewport height = `800px`:

```text
100vh = 800px
```

Useful for full-screen sections.

### Mobile note

Modern CSS also has:

```css
.hero {
  min-height: 100dvh;
}
```

`dvh` is useful when mobile browser UI changes the dynamically visible viewport.

DVH = Dynamic Viewport Height

---

# 5. `vw` — Viewport Width

`1vw` = **1% of viewport width**.

```css
.container {
  width: 80vw;
}
```

If viewport width = `1200px`:

```text
80vw = 960px
```

Useful for fluid layouts.

---

# 6. `%` — Percentage

Usually relative to a **containing/reference dimension**, depending on the property.

```css
.parent {
  width: 500px;
}

.child {
  width: 50%;
}
```

Result:

```text
child width = 250px
```

### Important

The reference for `%` depends on the property.

For example:

```css
.child {
  width: 50%;
}
```

Width percentage is based on the containing block's width.

Don't assume every percentage is always relative to the parent's width.

---

# 7. `ch`

`ch` is based on the width of the **`0` (zero) glyph** of the element's font.

```css
.text {
  max-width: 60ch;
}
```

Very useful for **controlling readable text line length**.

Example:

```css
.article {
  max-width: 65ch;
}
```

This helps prevent paragraphs from becoming excessively wide.

### Important

`ch` is **not exactly "character width"**. It is based on the font's `0` glyph, so `60ch` does not guarantee exactly 60 characters on every line.

---

# ⭐ Quick Comparison

| Unit  | Relative to                  | Common Use                |
| ----- | ---------------------------- | ------------------------- |
| `px`  | CSS pixel                    | Borders, fixed details    |
| `rem` | Root font size               | Typography, spacing       |
| `em`  | Element/context font size    | Component-relative sizing |
| `vh`  | Viewport height              | Full-height layouts       |
| `vw`  | Viewport width               | Fluid sizing              |
| `%`   | Property-dependent reference | Responsive dimensions     |
| `ch`  | Width of `0` glyph           | Text line length          |

---

# 🎯 `rem` vs `em` — Important Interview Question

```css
html {
  font-size: 16px;
}

.parent {
  font-size: 20px;
}

.child {
  font-size: 2em;
  margin: 1rem;
}
```

Result:

```text
child font-size → 40px   (2 × parent's 20px)
margin          → 16px   (1 × root's 16px)
```

So:

> **`rem` is root-relative, while `em` is based on the element's font-size context.**

### Senior-level practical rule

A common approach is:

```text
rem → global typography + spacing
em  → component-relative sizing when useful
%   → fluid dimensions
vw/vh/dvh → viewport-based sizing
ch  → readable text width
px  → borders/fine fixed details
```

Also, **don't use one unit everywhere**. Choose the unit based on what should control the size.
