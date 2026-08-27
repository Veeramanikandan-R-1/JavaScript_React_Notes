# CSS Positioning — Interview Notes

`position` controls **how an element is positioned in the document** and how `top`, `right`, `bottom`, and `left` affect it.

---

## 1. `static`

**Default value** for every element.

```css
.box {
  position: static;
}
```

* Element follows the **normal document flow**.
* `top`, `right`, `bottom`, `left`, and `z-index` don't affect a normal static element.

```text
Normal flow
A
B  ← static
C
```

**Interview:** `position: static` is the default.

---

## 2. `relative`

Element **remains in the normal flow**, but can be visually moved relative to its **normal position**.

```css
.box {
  position: relative;
  top: 20px;
  left: 10px;
}
```

The original space is still preserved.

```text
Original position
     ↓
   [Box] → moved visually
```

### Important use

A very common use is creating a positioning context for an absolutely positioned child:

```css
.card {
  position: relative;
}

.badge {
  position: absolute;
  top: 10px;
  right: 10px;
}
```

---

# 3. `absolute`

Element is **removed from normal document flow**.

```css
.box {
  position: absolute;
  top: 0;
  right: 0;
}
```

It is positioned relative to its **containing block**, commonly the nearest ancestor that establishes a positioning context (often an ancestor with `position: relative/absolute/fixed/sticky`).

```css
.card {
  position: relative;
}

.badge {
  position: absolute;
  top: 10px;
  right: 10px;
}
```

Here `.badge` is positioned relative to `.card`.

### Common use cases

* Badges
* Dropdowns
* Tooltips
* Icons inside inputs
* Overlays

**Key point:**

```text
relative → stays in flow
absolute → removed from flow
```

---

# 4. `fixed`

Positioned relative to the **viewport** in the typical case.

```css
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}
```

It remains in the same viewport position while scrolling.

### Common use cases

* Fixed navbar
* Floating action button
* Chat button
* Cookie banner

```text
┌─────────────────────┐
│ Fixed Header        │ ← stays here
├─────────────────────┤
│                     │
│     Page content    │
│       ↓↓↓↓↓         │
│                     │
└─────────────────────┘
```

**Important:** A transformed ancestor (`transform`, for example) can affect the containing block for a fixed-position descendant, so "always relative to viewport" has exceptions.

---

# 5. `sticky`

Acts like **relative** until a scroll threshold is reached, then behaves like a **stuck/fixed-like element within its scrolling container**.

```css
.header {
  position: sticky;
  top: 0;
}
```

Example:

```html
<div class="container">
  <h2 class="header">Products</h2>

  <!-- lots of content -->
</div>
```

```text
Before threshold:
Header scrolls normally
        ↓
After reaching top: 0
Header sticks to top
```

### Common use cases

* Sticky table headers
* Section headings
* Sidebar navigation

### Important

`sticky` requires a threshold such as:

```css
top: 0;
```

Also, its behavior depends on the **scrolling/containing ancestor** and can be affected by ancestor overflow/layout constraints.

---

# ⭐ Quick Comparison

| Position   | Normal Flow? | Positioned Relative To            | Scroll Behavior        |
| ---------- | ------------ | --------------------------------- | ---------------------- |
| `static`   | ✅            | Normal flow                       | Normal                 |
| `relative` | ✅            | Its normal position               | Normal                 |
| `absolute` | ❌            | Containing block                  | Scrolls with document  |
| `fixed`    | ❌            | Viewport usually                  | Stays fixed            |
| `sticky`   | ✅            | Scroll container/containing block | Sticks after threshold |

### 🎯 Interview Must Remember

```text
static   → Default
relative → Move from original position / positioning context
absolute → Removed from flow
fixed    → Fixed to viewport (typically)
sticky   → Relative → sticks when scrolling
```

**Most common React UI pattern:**

```css
.card {
  position: relative;
}

.badge {
  position: absolute;
  top: 8px;
  right: 8px;
}
```

> `position: relative` on the parent + `position: absolute` on the child is one of the most commonly used positioning patterns in frontend development.
