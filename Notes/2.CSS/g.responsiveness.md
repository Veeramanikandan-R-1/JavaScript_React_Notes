# CSS Responsive Design — Interview Notes

**Responsive Design** means building UI that adapts to different **screen sizes, devices, and layouts**.

---

## 1. Media Queries

Media queries apply CSS based on conditions such as **viewport width, height, orientation, or user preferences**.

```css
.card {
  width: 100%;
}

@media (min-width: 768px) {
  .card {
    width: 50%;
  }
}
```

Here:

* Mobile → `width: 100%`
* `≥ 768px` → `width: 50%`

### Common conditions

```css
@media (max-width: 767px) { }

@media (min-width: 768px) { }

@media (orientation: landscape) { }

@media (prefers-color-scheme: dark) { }

@media (prefers-reduced-motion: reduce) { }
```

### Combining conditions

```css
@media (min-width: 768px) and (max-width: 1199px) {
  /* Tablet */
}
```

---

# 2. Mobile First ⭐

**Mobile-first** means designing the base styles for **small screens first**, then adding styles for larger screens using `min-width`.

```css
/* Mobile */
.container {
  display: block;
}

/* Tablet and above */
@media (min-width: 768px) {
  .container {
    display: flex;
  }
}

/* Desktop and above */
@media (min-width: 1024px) {
  .container {
    display: grid;
  }
}
```

### Why mobile-first?

* Mobile has limited screen space.
* Encourages simpler layouts.
* Progressive enhancement.
* Usually results in less unnecessary CSS overriding.

### Remember

```text
Mobile First → min-width
Desktop First → max-width
```

---

# 3. Breakpoints

**Breakpoints** are viewport widths where your layout changes.

Example:

```css
/* Base: mobile */
.card {
  width: 100%;
}

/* Tablet */
@media (min-width: 768px) {
  .card {
    width: 50%;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .card {
    width: 33.33%;
  }
}
```

### Important interview point ⭐

Don't choose breakpoints only based on specific devices like:

```text
iPhone = 375px
iPad = 768px
Laptop = 1366px
```

Instead:

> **Choose breakpoints based on when your content/layout needs to change.**

Common project breakpoints might be:

```text
~480px  → small mobile
~768px  → tablet
~1024px → desktop
~1280px → large desktop
```

These are **examples, not mandatory standards**.

---

# 4. Viewport Units

Viewport units are relative to the browser viewport.

### `vw`

`1vw` = **1% of viewport width**

```css
.container {
  width: 50vw;
}
```

If viewport width = `1000px`:

```text
50vw = 500px
```

---

### `vh`

`1vh` = **1% of viewport height**

```css
.hero {
  height: 100vh;
}
```

Useful for full-screen sections.

---

### `vmin`

1% of the **smaller** viewport dimension.

```css
.box {
  width: 50vmin;
}
```

---

### `vmax`

1% of the **larger** viewport dimension.

```css
.box {
  width: 50vmax;
}
```

---

### Modern viewport units ⭐

Mobile browsers have dynamic browser UI, so modern CSS also provides:

```text
svh → Small Viewport Height
lvh → Large Viewport Height
dvh → Dynamic Viewport Height
```

Example:

```css
.hero {
  min-height: 100dvh;
}
```

`dvh` is particularly useful for mobile layouts where the visible viewport changes as browser UI expands/collapses.

---

# 5. Container Queries — Basics ⭐

Traditional media queries respond to the **viewport**.

Container queries allow a component to respond to the **size of its parent/container**.

### Step 1 — Define a query container

```css
.card-container {
  container-type: inline-size;
}
```

### Step 2 — Query the container

```css
@container (min-width: 500px) {
  .card {
    display: flex;
  }
}
```

Now `.card` changes based on the **container's width**, not the browser's viewport width.

### Why useful?

Consider a reusable React component:

```jsx
<Card />
```

The card might appear:

```text
┌──────────────────────────────┐
│ Dashboard                    │
│  ┌───────┐  ┌──────────────┐ │
│  │ Card  │  │    Card      │ │
│  └───────┘  └──────────────┘ │
└──────────────────────────────┘
```

The same `<Card>` could be placed inside:

* Sidebar → narrow
* Main content → wide
* Modal → medium

With **container queries**, the component adapts to the space actually available to it.

### Container query units

You can also use:

```text
cqw → 1% of container width
cqh → 1% of container height
```

---

# ⭐ Media Query vs Container Query

|                     | Media Query        | Container Query        |
| ------------------- | ------------------ | ---------------------- |
| Based on            | Viewport           | Container              |
| Best for            | Page-level layout  | Component-level layout |
| Reusable components | Less flexible      | Very useful            |
| Example             | Desktop navigation | Responsive card        |

### 🎯 Interview one-liner

> **Media queries make the layout responsive to the viewport, while container queries make components responsive to the size of their containing element.**

---

# Quick Revision

```text
Responsive Design
│
├── Media Queries
│   └── Apply CSS based on conditions
│
├── Mobile First
│   └── Base styles → mobile
│       min-width → larger screens
│
├── Breakpoints
│   └── Widths where layout changes
│
├── Viewport Units
│   ├── vw → viewport width
│   ├── vh → viewport height
│   ├── vmin → smaller dimension
│   ├── vmax → larger dimension
│   └── dvh/svh/lvh → modern viewport height units
│
└── Container Queries
    └── Component responds to container size
```

### ⭐ Senior React interview takeaway

For modern React applications, think:

> **Use responsive CSS rather than detecting screen size in JavaScript whenever possible. Use media queries for page/viewport-level changes and container queries for reusable component-level responsiveness.**
