# 1. Fundamentals

## What is CSS Positioning?

The `position` property determines **how an element is placed in the document**.

There are 5 values:

* `static`
* `relative`
* `absolute`
* `fixed`
* `sticky`

Positioned elements can be moved using:

* `top`
* `right`
* `bottom`
* `left`

Example:

```css
.box {
    position: relative;
    top: 20px;
    left: 10px;
}
```

---

# Positioning Overview

| Position | Moves from                  | Stays in Normal Flow? |
| -------- | --------------------------- | --------------------- |
| static   | Default position            | ✅ Yes                 |
| relative | Original position           | ✅ Yes                 |
| absolute | Nearest positioned ancestor | ❌ No                  |
| fixed    | Browser viewport            | ❌ No                  |
| sticky   | Normal flow → Viewport      | ✅ Initially           |

---

# 2. static

## What is it?

`static` is the **default position** for every HTML element.

```css
.box {
    position: static;
}
```

---

## Characteristics

* Default value.
* Follows normal document flow.
* Ignores `top`, `left`, `right`, `bottom`.

Example

```css
.box {
    position: static;
    top: 100px;
}
```

`top` has **no effect**.

---

## Use Case

Most elements don't need an explicit `position` because they are already `static`.

---

# 3. relative

## What is it?

`relative` positions an element **relative to its original position**.

```css
.box {
    position: relative;
    top: 20px;
    left: 10px;
}
```

---

## Characteristics

* Remains in normal document flow.
* Original space is preserved.
* Can be moved using `top`, `left`, etc.
* Often used as the parent for absolutely positioned children.

---

## Example

Before

```text
Box A
Box B
```

After

```css
.boxA {
    position: relative;
    top: 20px;
}
```

Visually

```text
(Box A moved down)

Box B stays in its original place.
```

Notice:

The original space for Box A still exists.

---

## Common Use

```css
.parent {
    position: relative;
}
```

Allows child elements with `position: absolute` to position themselves relative to this parent.

---

# 4. absolute

## What is it?

An absolutely positioned element is removed from the normal document flow and positioned relative to its **nearest positioned ancestor**.

```css
.child {
    position: absolute;
    top: 0;
    right: 0;
}
```

---

## Positioning Rule

Browser searches upward:

```text
Child
   ↑
Parent (position: relative) ✅
```

If found:

Position relative to that parent.

Otherwise:

Position relative to the initial containing block (effectively the page/viewport).

---

## Example

```html
<div class="card">
    <span class="badge">New</span>
</div>
```

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

Result

```text
+------------------+
|              New |
|                  |
|     Card         |
+------------------+
```

---

## Characteristics

* Removed from normal flow.
* Other elements ignore it.
* Positioned using `top`, `left`, `right`, `bottom`.

---

## Common React Use Cases

* Notification badge
* Dropdown menu
* Tooltip
* Popover
* Close icon
* Loading spinner overlay

---

# 5. fixed

## What is it?

A fixed element is positioned relative to the **browser viewport**.

```css
.button {
    position: fixed;
    bottom: 20px;
    right: 20px;
}
```

---

## Characteristics

* Removed from normal flow.
* Stays in the same position while scrolling.
* Always positioned relative to the viewport.

---

## Example

Floating button

```text
Page Content

↓

Scroll

↓

Button stays here
```

---

## Common Use Cases

* Chat widget
* Floating Action Button (FAB)
* Back-to-top button
* Cookie banner
* Fixed navbar

---

# 6. sticky

## What is it?

A sticky element behaves like **relative** until a scroll threshold is reached, then behaves like **fixed** within its scroll container.

```css
.header {
    position: sticky;
    top: 0;
}
```

---

## Behavior

Before scrolling

```text
Acts like relative
```

After reaching

```text
top: 0
```

It sticks.

---

## Example

```text
Scroll

↓

Header reaches top

↓

Header remains visible
```

---

## Requirements

Sticky only works when:

* `top`, `left`, `right`, or `bottom` is specified.
* The parent doesn't prevent sticky behavior (for example, certain overflow settings can interfere).

---

## Common React Use Cases

* Sticky navbar
* Table header
* Sidebar
* Filter panel

---

# Position Comparison

| Feature           | Relative          | Absolute                    | Fixed    | Sticky          |
| ----------------- | ----------------- | --------------------------- | -------- | --------------- |
| Normal Flow       | ✅                 | ❌                           | ❌        | ✅ Initially     |
| Moves Relative To | Original position | Nearest positioned ancestor | Viewport | Scroll position |
| Scrolls With Page | ✅                 | ✅                           | ❌        | Partially       |

---

# Position + z-index

## What is z-index?

Controls stacking order.

```css
.modal {
    position: fixed;
    z-index: 1000;
}
```

Higher value appears above lower values.

Example

```text
Modal

↓

Header

↓

Content
```

**Interview Note:** `z-index` works on positioned elements (or other elements that create stacking contexts, such as flex/grid items with `z-index`).

---

# Real-world React Example

```jsx
<div className="card">
    <span className="badge">NEW</span>
</div>
```

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

The badge stays in the card's top-right corner.

---

# Best Practices

* Use `relative` as the reference parent for `absolute` children.
* Use `absolute` for overlays, badges, and tooltips.
* Use `fixed` only for UI that should always remain visible.
* Use `sticky` for headers and navigation.
* Avoid unnecessary positioning when normal document flow is sufficient.

---

# Common Mistakes

❌ Forgetting `position: relative` on the parent.

Result:

`absolute` positions relative to the page instead of the intended container.

---

❌ Expecting `top` to work with `position: static`.

It won't.

---

❌ Using `fixed` instead of `sticky`.

`fixed` stays visible all the time.

`sticky` sticks only after scrolling to the threshold.

---

❌ Forgetting `top` with `sticky`.

Without `top`, sticky doesn't activate.

---

# Revision Notes

## Position Cheat Sheet

| Position   | Reference                   | Normal Flow | Common Use                     |
| ---------- | --------------------------- | ----------- | ------------------------------ |
| `static`   | Default                     | ✅           | Normal layout                  |
| `relative` | Original position           | ✅           | Parent for absolute children   |
| `absolute` | Nearest positioned ancestor | ❌           | Badges, tooltips, dropdowns    |
| `fixed`    | Viewport                    | ❌           | Floating buttons, chat widgets |
| `sticky`   | Scroll container            | ✅ Initially | Sticky headers                 |

---

## Remember

```text
static
↓

Default

relative
↓

Move from original position

absolute
↓

Move from nearest positioned parent

fixed
↓

Move relative to viewport

sticky
↓

Relative → Fixed while scrolling
```

---

# Common Interview Questions (6 Years React)

### 1. What is the default value of the `position` property?

```css
position: static;
```

---

### 2. What is the difference between `relative` and `absolute`?

* `relative` stays in the normal document flow and moves from its original position.
* `absolute` is removed from the normal flow and is positioned relative to its nearest positioned ancestor.

---

### 3. Why do we use `position: relative` on a parent?

To create a positioning context so that absolutely positioned child elements are placed relative to the parent instead of the page.

---

### 4. What is the difference between `fixed` and `sticky`?

* `fixed` is always attached to the viewport.
* `sticky` behaves like a normal element until a scroll threshold is reached, then sticks within its scroll container.

---

### 5. When would you use `position: absolute` in React?

For:

* Notification badges
* Tooltips
* Dropdown menus
* Popovers
* Overlay icons
* Loading overlays

---

### 6. Why doesn't `top` work on a static element?

Because `top`, `left`, `right`, and `bottom` only affect positioned elements (`relative`, `absolute`, `fixed`, or `sticky`).

---

### 7. What is the positioning reference for an absolutely positioned element?

Its nearest ancestor with a `position` value other than `static`. If none exists, it's positioned relative to the initial containing block (effectively the page/viewport).

---

### 8. What is `z-index`?

`z-index` controls the stacking order of overlapping elements. Higher values appear on top within the same stacking context.

---

### 9. Why might `position: sticky` not work?

Common reasons:

* Missing `top` (or another offset).
* An ancestor has overflow properties that prevent sticky behavior.
* The element has no room to stick within its container.

---

### 10. Which positioning values remove an element from the normal document flow?

* `absolute`
* `fixed`

`relative` and `sticky` remain in the normal flow initially.
