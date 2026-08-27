# CSS Variables & Modern CSS — Interview Notes

## 1. CSS Custom Properties ⭐

CSS Custom Properties are **CSS variables** that allow you to store reusable values.

They start with `--` and are accessed using `var()`.

```css
:root {
  --primary-color: #2563eb;
  --spacing: 16px;
  --border-radius: 8px;
}

.button {
  background: var(--primary-color);
  padding: var(--spacing);
  border-radius: var(--border-radius);
}
```

### Why use them?

* Avoid duplicate values
* Easy theming
* Runtime modification using JavaScript
* Inherit through the DOM

### Scoped variables

Variables don't have to be global:

```css
.card {
  --card-padding: 20px;

  padding: var(--card-padding);
}
```

### Fallback value

```css
color: var(--text-color, black);
```

If `--text-color` doesn't exist → `black` is used.

### React example

```jsx
<div
  className="card"
  style={{ "--card-color": "tomato" }}
>
  Product
</div>
```

```css
.card {
  border-color: var(--card-color);
}
```

### 🎯 Interview

> CSS custom properties are runtime-resolvable values that can be inherited, scoped, and dynamically changed.

---

# Modern CSS Functions

These functions are extremely useful for **responsive layouts**.

---

# 2. `clamp()`

`clamp()` sets a value between a **minimum, preferred, and maximum** value.

```css
font-size: clamp(1rem, 2vw, 2rem);
```

Syntax:

```text
clamp(min, preferred, max)
```

Meaning:

```text
Minimum  → 1rem
Preferred → 2vw
Maximum  → 2rem
```

The value grows/shrinks responsively but stays within the min/max limits.

### Example ⭐

```css
.heading {
  font-size: clamp(24px, 5vw, 48px);
}
```

Useful for:

* Responsive typography
* Responsive spacing
* Fluid widths

### Interview one-liner

> `clamp()` provides a responsive value with minimum and maximum boundaries.

---

# 3. `min()`

Returns the **smaller** of the provided values.

```css
.container {
  width: min(90%, 1200px);
}
```

Meaning:

```text
90% of available width
        VS
1200px

→ whichever is smaller
```

This is a common responsive container pattern.

### Example

```css
.container {
  width: min(90%, 1200px);
  margin-inline: auto;
}
```

On a large screen → max width becomes `1200px`.

On a small screen → width can be `90%`.

---

# 4. `max()`

Returns the **larger** of the provided values.

```css
.container {
  padding: max(16px, 2vw);
}
```

The browser uses whichever value is larger.

### Example

```css
.card {
  padding: max(16px, 3vw);
}
```

This ensures padding **never goes below `16px`**, while allowing it to grow with viewport width.

---

# 5. `calc()`

Performs calculations using CSS values.

```css
.container {
  width: calc(100% - 40px);
}
```

Useful when you need to **combine different units**.

```css
width: calc(100% - 2rem);
height: calc(100vh - 80px);
```

### Operators

Supports:

```text
+
-
*
/
```

For `+` and `-`, whitespace around the operator is important:

```css
width: calc(100% - 20px);
```

### Example

```css
.main {
  height: calc(100vh - 64px);
}
```

Useful when:

```text
Viewport height
      -
Header height
      =
Available content height
```

---

# ⭐ `clamp()` vs `min()` vs `max()` vs `calc()`

| Function  | Purpose               | Example                  |
| --------- | --------------------- | ------------------------ |
| `clamp()` | Min + preferred + max | `clamp(16px, 2vw, 32px)` |
| `min()`   | Choose smallest       | `min(90%, 1200px)`       |
| `max()`   | Choose largest        | `max(16px, 2vw)`         |
| `calc()`  | Perform calculation   | `calc(100% - 20px)`      |

---

# ⭐ Practical Responsive Example

```css
:root {
  --max-width: 1200px;
  --space: 16px;
}

.container {
  width: min(90%, var(--max-width));
  margin-inline: auto;
  padding: var(--space);
}

.heading {
  font-size: clamp(24px, 5vw, 48px);
}

.content {
  padding-inline: max(16px, 3vw);
}

.main {
  min-height: calc(100vh - 64px);
}
```

This combines **CSS variables + modern CSS functions** to create responsive CSS with fewer media queries.

### 🎯 Senior Interview Takeaway

> **Custom properties provide reusable/scoped values, `clamp()` creates bounded fluid values, `min()` selects the smaller value, `max()` selects the larger value, and `calc()` performs CSS calculations.**
