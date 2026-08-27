# CSS Animations — Interview Notes

CSS animations are used to create **smooth visual changes and movement** without JavaScript.

---

## 1. `transition`

`transition` creates a **smooth change between two states**.

Commonly used with `:hover`, `:focus`, class changes, etc.

```css
.button {
  background: blue;
  transition: background 0.3s ease;
}

.button:hover {
  background: red;
}
```

Without `transition` → color changes immediately.
With `transition` → color changes smoothly over `0.3s`.

### Syntax

```css
transition: property duration timing-function delay;
```

```css
transition: transform 0.3s ease-in-out;
```

Common timing functions:

```text
linear
ease
ease-in
ease-out
ease-in-out
```

### Multiple properties

```css
.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
```

### ⭐ Performance tip

Prefer animating:

```text
transform
opacity
```

They are generally more animation-friendly than frequently changing layout properties such as `width`, `height`, `top`, or `left`.

---

# 2. `transform`

`transform` **changes the visual position, size, rotation, or shape** of an element without changing normal document flow.

### Translate

```css
.box {
  transform: translateX(20px);
}
```

Move horizontally.

```css
transform: translate(20px, 10px);
```

Move X and Y.

### Scale

```css
.box {
  transform: scale(1.2);
}
```

Makes the element 20% larger visually.

### Rotate

```css
.box {
  transform: rotate(45deg);
}
```

### Common functions

```text
translate()
translateX()
translateY()
scale()
rotate()
skew()
```

### Common combination

```css
.card:hover {
  transform: translateY(-5px) scale(1.02);
}
```

---

# 3. `@keyframes`

`@keyframes` defines the **steps/stages of a CSS animation**.

```css
@keyframes slide {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(100px);
  }
}
```

Think:

```text
Start ───────────────→ End
  0%                    100%
```

You can define multiple stages:

```css
@keyframes bounce {
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-30px);
  }

  100% {
    transform: translateY(0);
  }
}
```

---

# 4. `animation`

`animation` applies a `@keyframes` animation to an element.

```css
.box {
  animation: slide 1s ease-in-out;
}
```

### Syntax

```css
animation:
  name
  duration
  timing-function
  delay
  iteration-count
  direction
  fill-mode
  play-state;
```

Example:

```css
.box {
  animation: bounce 1s ease-in-out 0s infinite alternate;
}
```

Meaning:

```text
bounce      → animation name
1s          → duration
ease-in-out → timing
0s          → delay
infinite    → repeat forever
alternate   → forward, then backward
```

### Useful properties

```css
animation-iteration-count: infinite;
animation-direction: alternate;
animation-fill-mode: forwards;
animation-play-state: paused;
```

---

# ⭐ Transition vs Animation

This is a common interview question.

| `transition`                    | `animation`                           |
| ------------------------------- | ------------------------------------- |
| Usually between two states      | Can have multiple stages              |
| Often triggered by state change | Can start automatically               |
| Uses `transition`               | Uses `@keyframes` + `animation`       |
| No keyframes                    | Supports keyframes                    |
| Great for hover/focus           | Great for complex/repeated animations |

### Transition example

```css
button {
  transition: transform 0.2s;
}

button:hover {
  transform: scale(1.05);
}
```

### Animation example

```css
.loader {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
```

---

# ⭐ React Example

```jsx
function Button() {
  return <button className="button">Save</button>;
}
```

```css
.button {
  transition: transform 0.2s ease;
}

.button:hover {
  transform: scale(1.05);
}
```

For loading:

```jsx
function Loader() {
  return <div className="loader" />;
}
```

```css
.loader {
  width: 30px;
  height: 30px;
  border: 4px solid #ddd;
  border-top-color: #333;
  border-radius: 50%;

  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
```

---

# ♿ Accessibility — Important

Respect users who prefer reduced motion:

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms;
    animation-iteration-count: 1;
    transition-duration: 0.01ms;
  }
}
```

This is especially important for users who may experience discomfort from excessive motion.

---

# 🎯 Quick Revision

```text
transition
→ Smooth change between states

transform
→ Move / scale / rotate / skew an element

@keyframes
→ Define animation stages

animation
→ Apply and control keyframe animation
```

### Interview Must Remember

> **`transition` is ideal for smooth state changes, while `animation` with `@keyframes` is better for multi-step, repeating, or automatically triggered animations.**

> **For performant animations, prefer `transform` and `opacity` where possible, and consider `prefers-reduced-motion` for accessibility.**
