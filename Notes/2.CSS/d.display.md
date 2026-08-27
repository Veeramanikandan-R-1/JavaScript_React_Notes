# CSS Display — Interview Notes

`display` controls **how an element participates in layout** and how its children are laid out.

---

## 1. `block`

Takes the **full available width** and starts on a new line.

```css
.box {
  display: block;
}
```

Examples:

* `<div>`
* `<p>`
* `<h1>`

```html
<div>Box 1</div>
<div>Box 2</div>
```

```text
Box 1  ─────────────
Box 2  ─────────────
```

### Key points

* Starts on a new line.
* `width`, `height`, `margin`, `padding` work normally.
* `width: auto` typically fills available space.

---

# 2. `inline`

Element stays **within the same line** as surrounding content.

```css
.text {
  display: inline;
}
```

Examples:

* `<span>`
* `<a>`
* `<strong>`

```html
<span>Hello</span>
<span>World</span>
```

```text
Hello World
```

### Important

For a normal inline element:

* `width` / `height` generally **don't apply**.
* Horizontal margin/padding work.
* Vertical margin doesn't affect layout in the same way as block elements.

---

# 3. `inline-block`

Combines characteristics of **inline + block**.

```css
.box {
  display: inline-block;
  width: 100px;
  height: 50px;
}
```

* Stays on the same line like `inline`.
* Allows `width` and `height` like a block-level box.

```html
<span class="box">One</span>
<span class="box">Two</span>
```

```text
[ One ] [ Two ]
```

### Common use

Useful when you need elements **side-by-side while still controlling their dimensions**.

---

# 4. `flex`

Creates a **flex container** and lays out its direct children using the Flexbox model.

```css
.container {
  display: flex;
}
```

Example:

```css
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
```

```html
<div class="container">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
</div>
```

### Important concepts

```text
Main axis   → justify-content
Cross axis  → align-items
```

Common properties:

```css
justify-content
align-items
flex-direction
flex-wrap
gap
flex
```

**Use Flexbox:** Primarily for **one-dimensional layouts** (row OR column).

---

# 5. `grid`

Creates a **CSS Grid container**.

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}
```

```html
<div class="container">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
</div>
```

Result:

```text
┌─────┬─────┬─────┐
│  1  │  2  │  3  │
├─────┼─────┼─────┤
│  4  │  5  │  6  │
└─────┴─────┴─────┘
```

### Important concepts

* Rows
* Columns
* `grid-template-columns`
* `grid-template-rows`
* `gap`
* `grid-column`
* `grid-row`

**Use Grid:** Primarily for **two-dimensional layouts** (rows + columns).

---

# 6. `none`

Removes the element from the layout.

```css
.box {
  display: none;
}
```

```text
Element
   ↓
Removed from layout
```

Unlike:

```css
visibility: hidden;
```

`visibility: hidden` hides the element but **its layout space is generally preserved**.

### React example

```jsx
{isOpen && <Modal />}
```

This is often preferable when you don't need the component rendered at all.

---

# ⭐ Quick Comparison

| Display        | New line?        | Width/Height | Typical Use                     |
| -------------- | ---------------- | ------------ | ------------------------------- |
| `block`        | ✅                | ✅            | Sections/content                |
| `inline`       | ❌                | ❌*           | Text-level content              |
| `inline-block` | ❌                | ✅            | Inline elements with dimensions |
| `flex`         | Container layout | —            | 1D layout                       |
| `grid`         | Container layout | —            | 2D layout                       |
| `none`         | —                | —            | Remove from layout              |

* Normal inline boxes don't accept `width`/`height` in the usual way.

### 🎯 Interview Must Remember

```text
block        → Full-width/new line
inline       → Same line, no normal width/height
inline-block → Same line + width/height
flex         → 1D layout (row/column)
grid         → 2D layout (rows/columns)
none         → Removed from layout
```

**Most important comparison:**

> **Flexbox is generally best for one-dimensional layouts, while Grid is designed for two-dimensional layouts.**
