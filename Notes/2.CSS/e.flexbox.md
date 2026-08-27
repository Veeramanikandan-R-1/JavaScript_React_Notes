# CSS Flexbox — Complete Interview Notes

**Flexbox** is a **one-dimensional layout system** used to arrange elements in a **row or column** and control their alignment, spacing, and sizing.

```css
.container {
  display: flex;
}
```

### Core terminology

```text
Container (flex parent)
       ↓
┌─────────────────────────────┐
│  Item 1   Item 2   Item 3  │
└─────────────────────────────┘
       ↑          ↑
    Flex items
```

* **Main axis** → controlled by `flex-direction`
* **Cross axis** → perpendicular to main axis
* `justify-content` → alignment on **main axis**
* `align-items` → alignment on **cross axis**

---

# 1. `flex-direction`

Defines the **main axis** and direction of flex items.

```css
.container {
  display: flex;
  flex-direction: row;
}
```

Values:

```text
row            → → →  (default)
row-reverse    ← ← ←
column         ↓ ↓ ↓
column-reverse ↑ ↑ ↑
```

Example:

```css
.container {
  display: flex;
  flex-direction: column;
}
```

Now items are arranged vertically.

### ⭐ Important

Changing `flex-direction` changes the meaning of the axes:

```text
row:
main axis  → horizontal
cross axis → vertical

column:
main axis  → vertical
cross axis → horizontal
```

---

# 2. `justify-content`

Controls alignment/space distribution **along the main axis**.

```css
.container {
  display: flex;
  justify-content: center;
}
```

Common values:

```text
flex-start
center
flex-end
space-between
space-around
space-evenly
```

Example:

```css
.container {
  display: flex;
  justify-content: space-between;
}
```

```text
| Item 1          Item 2          Item 3 |
```

### Remember

> `justify-content` → **main axis**

---

# 3. `align-items`

Controls alignment of flex items **along the cross axis**.

```css
.container {
  display: flex;
  align-items: center;
}
```

Common values:

```text
stretch        → default
flex-start
center
flex-end
baseline
```

Example:

```css
.container {
  height: 200px;
  display: flex;
  align-items: center;
}
```

Items become vertically centered when `flex-direction: row`.

### Remember

> `align-items` → **cross axis**

---

# 4. `align-self`

Overrides the parent's `align-items` **for an individual flex item**.

```css
.container {
  display: flex;
  align-items: center;
}

.item2 {
  align-self: flex-end;
}
```

So:

```text
Item 1 → center
Item 2 → flex-end
Item 3 → center
```

Common values:

```text
auto
flex-start
center
flex-end
stretch
baseline
```

### Difference

```text
align-items → all flex items
align-self  → one specific flex item
```

---

# 5. `flex-wrap`

Controls whether flex items should **wrap onto multiple lines** when there isn't enough space.

Default:

```css
.container {
  flex-wrap: nowrap;
}
```

### `nowrap`

```text
[1] [2] [3] [4] [5] [6]
------------------------>
```

Items stay on one line and may shrink/overflow depending on sizing.

### `wrap`

```css
.container {
  flex-wrap: wrap;
}
```

```text
[1] [2] [3]
[4] [5] [6]
```

### `wrap-reverse`

Wraps onto the opposite cross-axis direction.

---

# 6. `flex-grow`

Controls how much a flex item can **grow when extra space is available**.

```css
.item {
  flex-grow: 1;
}
```

Example:

```css
.item1 {
  flex-grow: 1;
}

.item2 {
  flex-grow: 2;
}
```

If there is extra space, it is distributed according to the grow factors:

```text
Item 1 → 1 part
Item 2 → 2 parts
```

So item 2 gets roughly **twice the extra space** allocated to item 1.

### Default

```css
flex-grow: 0;
```

Items don't grow by default.

---

# 7. `flex-shrink`

Controls how much a flex item can **shrink when there isn't enough space**.

Default:

```css
flex-shrink: 1;
```

Example:

```css
.item1 {
  flex-shrink: 1;
}

.item2 {
  flex-shrink: 0;
}
```

`item2` won't shrink due to flex shrinking, while `item1` can shrink.

### Common issue

A flex item may unexpectedly overflow because it has:

```css
flex-shrink: 0;
```

or because its minimum size prevents shrinking.

A common fix for overflowing flex children is sometimes:

```css
.child {
  min-width: 0;
}
```

This is particularly useful when a flex child contains long text or other content that needs to shrink.

---

# 8. `flex-basis`

Defines the **initial size of a flex item along the main axis** before remaining space is distributed.

```css
.item {
  flex-basis: 200px;
}
```

If:

```css
.container {
  flex-direction: row;
}
```

then `flex-basis: 200px` is an initial **width-like** size.

If:

```css
.container {
  flex-direction: column;
}
```

it is an initial **height-like** size.

### `flex-basis: auto`

Uses the item's main-size property (`width`/`height`) if specified; otherwise its content-based size.

### `flex-basis: 0`

Treats the initial main size as zero, so available space is distributed based more directly on `flex-grow`.

---

# ⭐ `flex-grow`, `flex-shrink`, `flex-basis` Together

These are combined by the `flex` shorthand:

```css
.item {
  flex: 1 1 0;
}
```

Meaning:

```text
grow   = 1
shrink = 1
basis  = 0
```

Very common:

```css
.item {
  flex: 1;
}
```

This is effectively:

```css
flex: 1 1 0%;
```

for the shorthand's omitted components.

Example:

```css
.container {
  display: flex;
}

.item {
  flex: 1;
}
```

Multiple items with `flex: 1` will generally share the available space equally.

---

# 🎯 Practical Example

```jsx
function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Logo</div>

      <div className="links">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </div>

      <button>Login</button>
    </nav>
  );
}
```

```css
.navbar {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}

.links {
  display: flex;
  gap: 16px;
}
```

---

# ⭐ Quick Interview Revision

| Property          | Controls                         |
| ----------------- | -------------------------------- |
| `flex-direction`  | Main axis/direction              |
| `justify-content` | Main-axis alignment              |
| `align-items`     | Cross-axis alignment             |
| `align-self`      | Cross-axis alignment of one item |
| `flex-wrap`       | Whether items wrap               |
| `flex-grow`       | How much item grows              |
| `flex-shrink`     | How much item shrinks            |
| `flex-basis`      | Initial main-axis size           |

### Most important mental model

```text
              flex-direction
                    ↓
              Defines main axis
                    ↓
       ┌────────────────────────┐
       │ justify-content        │ → Main axis
       │                        │
       │ align-items            │ → Cross axis
       └────────────────────────┘
```

### 🎯 Interview one-liners

> **`justify-content` works on the main axis, while `align-items` works on the cross axis.**

> **`align-self` overrides `align-items` for an individual flex item.**

> **`flex-grow` controls expansion, `flex-shrink` controls shrinking, and `flex-basis` defines the initial main-axis size.**

> **Flexbox is primarily a one-dimensional layout system; CSS Grid is generally preferred when you need simultaneous row-and-column control.**
