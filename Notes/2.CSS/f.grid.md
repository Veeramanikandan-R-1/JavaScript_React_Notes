# CSS Grid

CSS Grid is a **two-dimensional layout system**, meaning it controls both **rows and columns** simultaneously.

> **Flexbox = One-dimensional (row OR column)**
>
> **Grid = Two-dimensional (rows AND columns)**

Grid is best when designing page layouts, dashboards, galleries, cards, admin panels, and complex responsive UIs.

---

# 1. Grid Basics

A Grid has:

* **Grid Container** → parent (`display: grid`)
* **Grid Items** → direct children

```html
<div class="container">
    <div>A</div>
    <div>B</div>
    <div>C</div>
</div>
```

```css
.container{
    display:grid;
}
```

Only the direct children become grid items.

---

# 2. Rows

Rows define the **horizontal tracks**.

Created using

```css
grid-template-rows
```

Example

```css
.container{
    display:grid;
    grid-template-rows:100px 200px;
}
```

Result

```
-------------
100px
-------------

-------------
200px
-------------
```

---

### Multiple rows

```css
grid-template-rows:100px 150px auto;
```

Meaning

```
Row1 →100px
Row2 →150px
Row3 →remaining space
```

---

### Repeat Function

Instead of

```css
100px 100px 100px
```

Use

```css
grid-template-rows:repeat(3,100px);
```

Cleaner and easier to maintain.

---

### Fraction Unit (fr)

Grid introduces **fr (fraction)**.

```css
grid-template-rows:1fr 2fr;
```

Available height divided into 3 parts

```
Row1 = 1 part

Row2 = 2 parts
```

---

# 3. Columns

Columns define the **vertical tracks**.

Created using

```css
grid-template-columns
```

Example

```css
.container{
    display:grid;
    grid-template-columns:200px 200px 200px;
}
```

Result

```
|200|200|200|
```

---

### Repeat

```css
grid-template-columns:repeat(3,200px);
```

---

### Fraction Unit

```css
grid-template-columns:1fr 2fr 1fr;
```

Space divided into

```
25%
50%
25%
```

(Conceptually, not exact percentages if gaps/padding exist.)

---

### Mixed Values

```css
grid-template-columns:200px 1fr 2fr;
```

Meaning

```
Column1 = fixed

Remaining space divided

Column2 = 1 part

Column3 = 2 parts
```

This pattern is very common.

Example

```
Sidebar  Content  Ads
```

---

# 4. Grid Area

`grid-area` allows a grid item to occupy specific rows and columns.

### Syntax

```css
grid-area:
row-start /
column-start /
row-end /
column-end;
```

Example

```css
.item{
    grid-area:1 / 1 / 3 / 3;
}
```

Meaning

```
Starts Row 1

Starts Column 1

Ends Row 3

Ends Column 3
```

The item spans **2 rows** and **2 columns**.

---

### Example

```css
.container{
    display:grid;
    grid-template-columns:repeat(3,1fr);
    grid-template-rows:100px 100px;
}

.box{
    grid-area:1 / 1 / 2 / 3;
}
```

Layout

```
+---------+---------+
|   BOX   |   BOX   |
+---------+---------+
|    C    |    D    |
+---------+---------+
```

---

### Named Grid Areas (Common in Production)

```css
.container{
    display:grid;

    grid-template-columns:200px 1fr;

    grid-template-areas:
        "sidebar header"
        "sidebar main";
}
```

Assign names

```css
.sidebar{
    grid-area:sidebar;
}

.header{
    grid-area:header;
}

.main{
    grid-area:main;
}
```

Layout becomes very readable.

---

# 5. auto-fit

Used with

```css
repeat()
```

Purpose

Automatically creates responsive columns by **expanding existing columns** to fill available space.

Example

```css
.container{
    display:grid;

    grid-template-columns:
    repeat(auto-fit,minmax(200px,1fr));
}
```

Meaning

```
Minimum width

200px

Maximum

1fr
```

If more space exists

Instead of leaving empty columns

Existing columns expand.

Example

Large Screen

```
| Card | Card | Card |
```

Small Screen

```
| Card | Card |

| Card |
```

No empty column remains.

---

### Best use cases

* Product cards
* Dashboard widgets
* Responsive galleries
* Responsive React components

---

# 6. auto-fill

Looks almost identical

```css
repeat(auto-fill,minmax(200px,1fr));
```

Difference

It **creates as many columns as possible**, including empty ones if space allows.

Large screen

```
| Card | Card | Card | Empty |
```

The empty track still exists.

---

# auto-fit vs auto-fill

Suppose screen width can fit **4 columns**, but only **3 cards** exist.

### auto-fill

```
|Card|Card|Card|Empty|
```

Keeps the empty column.

---

### auto-fit

```
| Card | Card | Card |
```

Cards stretch and occupy the entire width.

---

### Interview Answer

**auto-fit**

* Collapses empty columns
* Existing items stretch
* Better for responsive layouts
* Most commonly used

**auto-fill**

* Preserves empty columns
* Useful when fixed grid tracks are desired
* Less commonly used

---

# Real-world React Examples

## Dashboard

```css
grid-template-columns:
repeat(auto-fit,minmax(300px,1fr));
```

Each card automatically wraps.

---

## Product Listing

```
Laptop

Phone

Watch

Camera
```

Responsive without media queries.

---

## Analytics Cards

```
Revenue

Orders

Traffic

Sales
```

Automatically become

Desktop

```
4 columns
```

Tablet

```
2 columns
```

Mobile

```
1 column
```

---

# Common Mistakes

### 1. Forgetting `display:grid`

```css
.container{
    grid-template-columns:1fr 1fr;
}
```

Nothing happens.

Need

```css
display:grid;
```

---

### 2. Confusing Flexbox and Grid

Use **Grid** when arranging items in **both rows and columns**.

Use **Flexbox** when arranging items in **one direction**.

---

### 3. Using Fixed Width Everywhere

Bad

```css
200px 200px 200px
```

Better

```css
repeat(auto-fit,minmax(200px,1fr));
```

More responsive.

---

### 4. Overusing grid-area

Use it only when elements need custom placement. For simple layouts, let Grid auto-place items.

---

# Best Practices

* Use **Grid** for page layouts and card layouts.
* Use **Flexbox** inside each grid item for internal alignment.
* Prefer `repeat()` over repeating values manually.
* Use `fr` instead of hardcoded percentages where possible.
* Use `minmax()` with `auto-fit` for responsive grids.
* Keep named grid areas meaningful (`header`, `sidebar`, `main`, `footer`).

---

# Revision Notes

## CSS Grid Cheat Sheet

| Property                | Purpose                                                       |
| ----------------------- | ------------------------------------------------------------- |
| `display:grid`          | Creates grid container                                        |
| `grid-template-rows`    | Defines row sizes                                             |
| `grid-template-columns` | Defines column sizes                                          |
| `repeat()`              | Repeats rows/columns                                          |
| `fr`                    | Fraction of available space                                   |
| `grid-area`             | Places an item in specific row/column or assigns a named area |
| `grid-template-areas`   | Defines named layout regions                                  |
| `auto-fit`              | Collapses empty columns and stretches existing items          |
| `auto-fill`             | Keeps empty columns if space is available                     |
| `minmax(min,max)`       | Sets minimum and maximum track size                           |

### Common Patterns

```css
/* Equal columns */
grid-template-columns: repeat(3, 1fr);

/* Sidebar + content */
grid-template-columns: 250px 1fr;

/* Responsive cards */
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

/* Responsive cards with fixed tracks */
grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));

/* Equal rows */
grid-template-rows: repeat(3, 100px);
```

---

# Frequently Asked Interview Questions (6 Years React)

### 1. What is the difference between Flexbox and Grid?

**Answer:** Flexbox is one-dimensional (row or column), while Grid is two-dimensional (rows and columns). Use Grid for page layouts and Flexbox for component-level alignment.

---

### 2. What is `fr` in CSS Grid?

**Answer:** `fr` (fraction) distributes the available free space proportionally among grid tracks.

---

### 3. What is the difference between `auto-fit` and `auto-fill`?

**Answer:**

* `auto-fit` collapses empty columns and stretches existing items.
* `auto-fill` preserves empty columns even if they contain no items.

---

### 4. Why is `minmax()` commonly used with Grid?

**Answer:** It allows grid items to have a minimum size while expanding up to a maximum size, making layouts responsive without relying heavily on media queries.

---

### 5. When would you use `grid-area`?

**Answer:** To position items precisely within the grid or to assign them to named layout areas for readable page layouts.

---

### 6. Can Flexbox and Grid be used together?

**Answer:** Yes. A common production pattern is to use **Grid** for the overall page or card layout and **Flexbox** inside each grid item to align its internal content.

---

### 7. Why is `repeat(auto-fit, minmax(...))` considered a best practice?

**Answer:** It creates responsive layouts that automatically adjust the number of columns based on available space, reducing the need for multiple media queries.
