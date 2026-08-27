# CSS Grid — Interview Notes

**CSS Grid** is a **two-dimensional layout system** that lets you control both **rows and columns**.

```css
.container {
  display: grid;
}
```

### Basic terminology

```text
Grid Container
┌────────┬────────┬────────┐
│ Item 1 │ Item 2 │ Item 3 │ ← Row
├────────┼────────┼────────┤
│ Item 4 │ Item 5 │ Item 6 │ ← Row
└────────┴────────┴────────┘
    ↑        ↑        ↑
  Column   Column   Column
```

---

# 1. Rows

`grid-template-rows` defines the **size of grid rows**.

```css
.container {
  display: grid;
  grid-template-rows: 100px 200px;
}
```

Creates:

```text
Row 1 → 100px
Row 2 → 200px
```

### Using `fr`

```css
.container {
  grid-template-rows: 1fr 2fr;
}
```

Available space is divided into **1:2 ratio**.

### `repeat()`

```css
.container {
  grid-template-rows: repeat(3, 100px);
}
```

Equivalent to:

```css
grid-template-rows: 100px 100px 100px;
```

---

# 2. Columns

`grid-template-columns` defines the **size of grid columns**.

```css
.container {
  display: grid;
  grid-template-columns: 200px 200px 200px;
}
```

Creates 3 columns.

### Using `fr`

```css
.container {
  grid-template-columns: 1fr 2fr 1fr;
}
```

Available space is distributed in a **1:2:1 ratio**.

### Common responsive pattern

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
```

```text
┌───────┬───────┬───────┐
│   1   │   2   │   3   │
├───────┼───────┼───────┤
│   4   │   5   │   6   │
└───────┴───────┴───────┘
```

---

# 3. `grid-area`

`grid-area` can be used to **place an item in specific grid lines** or assign an item to a **named grid area**.

### A. Using grid lines

```css
.item {
  grid-area: 1 / 1 / 3 / 3;
}
```

Order:

```text
row-start / column-start / row-end / column-end
```

So:

```text
grid-area: 1 / 1 / 3 / 3;

row starts    → 1
column starts → 1
row ends      → 3
column ends   → 3
```

The item spans **2 rows × 2 columns**.

---

### B. Named grid areas ⭐

Very useful for page layouts.

```css
.container {
  display: grid;

  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";

  grid-template-columns: 200px 1fr;
  grid-template-rows: auto 1fr auto;
}

.header {
  grid-area: header;
}

.sidebar {
  grid-area: sidebar;
}

.main {
  grid-area: main;
}

.footer {
  grid-area: footer;
}
```

Visual structure:

```text
┌───────────────────────┐
│        Header         │
├────────┬──────────────┤
│ Sidebar│     Main     │
├────────┴──────────────┤
│        Footer         │
└───────────────────────┘
```

**Interview:** Named `grid-template-areas` + `grid-area` makes complex layouts easier to understand.

---

# 4. `auto-fit`

Used with `repeat()` to create **responsive grids**.

```css
.container {
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(200px, 1fr)
  );
  gap: 20px;
}
```

`auto-fit`:

> Creates as many columns as fit and **collapses empty tracks**, allowing existing items to expand.

Example:

```text
Wide screen:
┌────┬────┬────┬────┐
│ 1  │ 2  │ 3  │ 4  │
└────┴────┴────┴────┘

Smaller screen:
┌────┬────┐
│ 1  │ 2  │
├────┼────┤
│ 3  │ 4  │
└────┴────┘
```

Very useful for:

* Product cards
* Image galleries
* Dashboard cards
* Responsive layouts

---

# 5. `auto-fill`

Also creates as many columns as can fit.

```css
.container {
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(200px, 1fr)
  );
}
```

But unlike `auto-fit`, `auto-fill` **keeps empty tracks when there is extra space**.

### `auto-fit` vs `auto-fill`

This is a common interview question.

```text
auto-fit
→ Fit items into available space
→ Empty tracks collapse
→ Existing items can expand

auto-fill
→ Create as many tracks as can fit
→ Empty tracks remain
```

Example with only 2 items but space for 4 columns:

```text
auto-fit:

┌──────────┬──────────┐
│    1     │    2     │
└──────────┴──────────┘

auto-fill:

┌────┬────┬────┬────┐
│ 1  │ 2  │    │    │
└────┴────┴────┴────┘
```

---

# ⭐ Most Common Responsive Grid Pattern

Memorize this:

```css
.grid {
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(250px, 1fr)
  );
  gap: 20px;
}
```

It means:

> "Create as many columns as possible, each at least `250px`, and distribute available space among them."

### React example

```jsx
function ProductGrid({ products }) {
  return (
    <div className="grid">
      {products.map(product => (
        <div key={product.id} className="card">
          {product.name}
        </div>
      ))}
    </div>
  );
}
```

```css
.grid {
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(250px, 1fr)
  );
  gap: 16px;
}
```

No media queries are required for this basic responsive behavior.

---

# 🎯 Quick Interview Revision

| Concept                 | Purpose                                       |
| ----------------------- | --------------------------------------------- |
| `grid-template-rows`    | Define row sizes                              |
| `grid-template-columns` | Define column sizes                           |
| `grid-area`             | Position/assign grid items                    |
| `auto-fit`              | Fit items and collapse empty tracks           |
| `auto-fill`             | Fill available tracks, including empty tracks |

### Remember

```text
Grid
├── Rows       → grid-template-rows
├── Columns    → grid-template-columns
├── Placement  → grid-area
├── Responsive → auto-fit / auto-fill
└── fr         → Share available space
```

**Most important interview difference:**

> `auto-fit` collapses empty tracks so existing items can expand, while `auto-fill` keeps the generated tracks even when some are empty.
