# 1. Fundamentals

## What is Flexbox?

Flexbox (Flexible Box Layout) is a **one-dimensional layout system** used to arrange child elements in:

* Row (horizontal)
* Column (vertical)

Unlike Grid, Flexbox works in **one direction at a time**.

---

## Why do we use Flexbox?

Before Flexbox:

* Float
* Inline-block
* Table layouts

These were difficult for alignment and responsive layouts.

Flexbox solves:

* Centering
* Equal spacing
* Vertical alignment
* Responsive layouts
* Dynamic sizing

---

## Enable Flexbox

```css
.container {
    display: flex;
}
```

Now all direct children become **flex items**.

```html
<div class="container">
    <div>A</div>
    <div>B</div>
    <div>C</div>
</div>
```

Output

```
A   B   C
```

---

# Understanding Main Axis & Cross Axis

Everything in Flexbox revolves around **two axes**.

### Default (`flex-direction: row`)

```
Main Axis  →
+-------------------------+
| A   B   C               |
|                         |
|                         |
+-------------------------+
        ↓
    Cross Axis
```

---

### Column Direction

```
Cross Axis →

+----------+
| A        |
| B        |
| C        |
+----------+

Main Axis ↓
```

> **Remember:** `justify-content` always works on the **main axis**, while `align-items` works on the **cross axis**.

---

# 2. flex-direction

Controls the direction of flex items.

Default:

```css
.container {
    flex-direction: row;
}
```

Output

```
A   B   C
```

---

### row

Left → Right

```css
flex-direction: row;
```

---

### row-reverse

```
C   B   A
```

---

### column

```
A
B
C
```

---

### column-reverse

```
C
B
A
```

---

## Use Cases

* Row → Navbar
* Column → Forms
* Column → Cards
* Row → Toolbar

---

# 3. justify-content

Controls alignment along the **main axis**.

```css
.container{
    display:flex;
    justify-content:center;
}
```

---

### flex-start (Default)

```
A B C
```

---

### center

```
      A B C
```

---

### flex-end

```
            A B C
```

---

### space-between

```
A      B      C
```

---

### space-around

```
 A    B    C
```

(equal space around each item)

---

### space-evenly

```
 A    B    C
```

(equal spacing everywhere)

---

## Interview Tip

If direction changes:

```css
flex-direction: column;
```

then **justify-content becomes vertical alignment**.

---

# 4. align-items

Aligns items on the **cross axis**.

```css
align-items:center;
```

---

### flex-start

```
A
B
C
```

Top

---

### center

Items vertically centered.

---

### flex-end

Items aligned to bottom.

---

### stretch (Default)

Items stretch to fill cross axis (if no fixed size is set).

---

### baseline

Aligns text baselines.

Useful when font sizes differ.

---

## Example

```css
.container{
 display:flex;
 align-items:center;
}
```

---

# justify-content vs align-items

Assume:

```css
flex-direction: row;
```

| Property        | Controls   |
| --------------- | ---------- |
| justify-content | Horizontal |
| align-items     | Vertical   |

If

```css
flex-direction: column;
```

They swap:

| Property        | Controls   |
| --------------- | ---------- |
| justify-content | Vertical   |
| align-items     | Horizontal |

---

# 5. align-self

Overrides `align-items` for **one flex item**.

Container

```css
.container{
    align-items:center;
}
```

Child

```css
.item{
    align-self:flex-end;
}
```

Only that item moves.

---

## Use Case

Notification badge

Special button

Highlighted card

---

# 6. flex-wrap

Controls whether items wrap onto multiple lines.

Default

```css
flex-wrap: nowrap;
```

---

### nowrap

```
A B C D E F G
```

Everything stays on one line.

May overflow.

---

### wrap

```
A B C

D E F
```

Moves to next line.

---

### wrap-reverse

Wraps in reverse direction.

---

## Common React Use

Card Grid

```css
display:flex;
flex-wrap:wrap;
gap:16px;
```

---

# 7. flex-grow

Controls how much an item grows when extra space is available.

Default

```css
flex-grow:0;
```

No growing.

---

Example

```css
.item1{
 flex-grow:1;
}

.item2{
 flex-grow:2;
}
```

Remaining space divided

```
Item1 → 1 part

Item2 → 2 parts
```

Item2 becomes twice as large.

---

## Example

Container width

```
900px
```

Children

```
1

2

1
```

Available space

```
900

↓

225

450

225
```

---

# 8. flex-shrink

Controls how much an item shrinks when there isn't enough space.

Default

```css
flex-shrink:1;
```

Items shrink automatically.

---

Prevent shrinking

```css
flex-shrink:0;
```

Useful for:

Logo

Buttons

Profile image

---

# 9. flex-basis

Defines the initial size of a flex item **before** remaining space is distributed.

```css
.item{
 flex-basis:200px;
}
```

Initial width becomes

```
200px
```

before `flex-grow` or `flex-shrink` is applied.

---

## Difference

```css
width:200px;
```

Sets width.

---

```css
flex-basis:200px;
```

Preferred starting size within the flex layout.

`flex-basis` participates in the flex sizing algorithm, whereas `width` is a general sizing property.

---

# flex Shorthand

Instead of

```css
.item{
 flex-grow:1;
 flex-shrink:1;
 flex-basis:200px;
}
```

Use

```css
.item{
 flex:1 1 200px;
}
```

Format

```
flex:

grow

shrink

basis
```

---

# Real-world React Example

```jsx
<div className="toolbar">
    <Logo />
    <Search />
    <Profile />
</div>
```

```css
.toolbar{
 display:flex;
 align-items:center;
 justify-content:space-between;
}
```

---

Responsive Card Grid

```css
.cards{
 display:flex;
 flex-wrap:wrap;
 gap:16px;
}

.card{
 flex:1 1 300px;
}
```

Cards grow, shrink, and wrap automatically.

---

# Best Practices

* Use Flexbox for one-dimensional layouts.
* Use Grid for two-dimensional layouts.
* Prefer `gap` over margins for spacing between flex items.
* Use `flex: 1` for equal-width items.
* Use `flex-wrap: wrap` for responsive card layouts.
* Prevent shrinking (`flex-shrink: 0`) for logos and icons that must retain their size.

---

# Common Mistakes

❌ Confusing `justify-content` and `align-items`.

Remember:

* **Main axis → justify-content**
* **Cross axis → align-items**

---

❌ Forgetting the axis changes with `flex-direction`.

If direction changes to `column`, the main axis becomes vertical.

---

❌ Using `width` instead of `flex-basis`.

`flex-basis` works better with Flexbox because it's part of the flex sizing algorithm.

---

❌ Forgetting `flex-wrap`.

Items overflow on smaller screens.

---

# Revision Notes

## Flexbox Cheat Sheet

| Property          | Purpose                         |
| ----------------- | ------------------------------- |
| `display: flex`   | Enable Flexbox                  |
| `flex-direction`  | Row / Column direction          |
| `justify-content` | Align on main axis              |
| `align-items`     | Align on cross axis             |
| `align-self`      | Override alignment for one item |
| `flex-wrap`       | Allow wrapping                  |
| `flex-grow`       | Grow into extra space           |
| `flex-shrink`     | Shrink when space is limited    |
| `flex-basis`      | Initial size before grow/shrink |
| `flex`            | Shorthand (`grow shrink basis`) |

---

## Axis Rule

### `flex-direction: row`

```
Main Axis  →  justify-content

Cross Axis ↓  align-items
```

### `flex-direction: column`

```
Main Axis  ↓  justify-content

Cross Axis →  align-items
```

---

## flex-grow

```
1 2 1

↓

25% 50% 25%
```

---

## flex Shorthand

```css
flex: 1 1 300px;

/* grow shrink basis */
```

---

## Remember

```
display:flex
      ↓
Choose Direction
      ↓
justify-content
(Main Axis)
      ↓
align-items
(Cross Axis)
      ↓
Wrapping
      ↓
Grow
Shrink
Basis
```

---

# Common Interview Questions (6 Years React)

### 1. What is Flexbox?

Flexbox is a **one-dimensional CSS layout system** used to arrange items in a row or a column with flexible alignment and spacing.

---

### 2. What is the difference between `justify-content` and `align-items`?

* `justify-content` aligns items along the **main axis**.
* `align-items` aligns items along the **cross axis**.

---

### 3. What happens to the axes when `flex-direction: column` is used?

The **main axis becomes vertical**, and the **cross axis becomes horizontal**. `justify-content` now controls vertical alignment, while `align-items` controls horizontal alignment.

---

### 4. What is the difference between `align-items` and `align-self`?

* `align-items` applies to **all flex items** in the container.
* `align-self` overrides the alignment for **one specific flex item**.

---

### 5. What is the default value of `flex-wrap`?

```css
flex-wrap: nowrap;
```

All items stay on one line and may overflow if there isn't enough space.

---

### 6. What is the purpose of `flex-grow`?

It specifies how much a flex item should grow relative to other items when there is extra available space.

---

### 7. What is `flex-shrink`?

It determines how much a flex item should shrink when there isn't enough space. Setting `flex-shrink: 0` prevents the item from shrinking.

---

### 8. What is `flex-basis`?

It defines the initial size of a flex item before the browser distributes remaining space using `flex-grow` and `flex-shrink`.

---

### 9. What does `flex: 1` mean?

`flex: 1` is shorthand for:

```css
flex: 1 1 0%;
```

It allows the item to grow and shrink while starting from a zero flex basis, making sibling items with the same value share available space equally.

---

### 10. When should you use Flexbox instead of Grid?

Use **Flexbox** for one-dimensional component layouts (navbars, forms, toolbars, cards).

Use **Grid** for two-dimensional page layouts (dashboards, galleries, complex row-and-column structures).
