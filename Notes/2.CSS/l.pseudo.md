# CSS Pseudo — Interview Notes

CSS pseudo selectors let you **style elements based on their state, position, or generated content**.

There are two categories:

```text
Pseudo-class  → :hover, :active, :focus, :nth-child()
Pseudo-element → ::before, ::after
```

---

# 1. `::before`

Creates a **pseudo-element before the element's actual content**.

```css
.title::before {
  content: "★ ";
}
```

```html
<h2 class="title">React</h2>
```

Result:

```text
★ React
```

### Important ⭐

`content` is required for `::before` to appear in most cases.

Common uses:

* Icons
* Decorative elements
* Labels
* Overlays

---

# 2. `::after`

Creates a **pseudo-element after the element's content**.

```css
.title::after {
  content: " ✓";
}
```

Result:

```text
React ✓
```

### Common UI pattern

```css
.button {
  position: relative;
}

.button::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: currentColor;
  transition: width 0.3s;
}

.button:hover::after {
  width: 100%;
}
```

Used for decorative effects without adding extra HTML elements.

### ⚠️ Accessibility

Don't put **meaningful content** such as important text or information only in `::before`/`::after`. Prefer real HTML content.

---

# 3. `:hover`

Applied when the user's pointer is **over an element**.

```css
button:hover {
  background: black;
  color: white;
}
```

Common for:

* Buttons
* Links
* Cards
* Tooltips

### ⚠️ Important

Don't make essential functionality available **only through hover** because touch devices and keyboard users may not have the same hover behavior.

---

# 4. `:active`

Applied while an element is **being activated**, such as while a mouse button is pressed.

```css
button:active {
  transform: scale(0.98);
}
```

Useful for giving buttons a **pressed/clicking effect**.

### Don't confuse

```text
:active → while activation is happening
.active  → normal class named "active"
```

---

# 5. `:focus`

Applied when an element **has keyboard/input focus**.

```css
input:focus {
  outline: 2px solid blue;
}
```

Example:

```html
<input type="text" />
```

When the user tabs into the input, `:focus` styles can apply.

### Accessibility ⭐

Don't blindly remove focus indication:

```css
/* Avoid */
*:focus {
  outline: none;
}
```

Instead provide a clear focus style.

### Better

```css
button:focus-visible {
  outline: 2px solid blue;
  outline-offset: 2px;
}
```

` :focus-visible` is often preferred when you specifically want a visible indicator when focus should be visually indicated, especially for keyboard interaction.

---

# 6. `:nth-child()`

Selects an element based on its **position among its siblings**.

```css
li:nth-child(2) {
  color: red;
}
```

Selects the **second child**.

### Common examples

```css
li:nth-child(1) {
  /* First */
}

li:nth-child(2) {
  /* Second */
}

li:nth-child(odd) {
  /* 1, 3, 5, ... */
}

li:nth-child(even) {
  /* 2, 4, 6, ... */
}
```

### Every third element

```css
li:nth-child(3n) {
  background: #eee;
}
```

Matches:

```text
3, 6, 9, 12...
```

### `2n + 1`

```css
li:nth-child(2n + 1) {
  /* 1, 3, 5, 7... */
}
```

---

# ⚠️ `nth-child` vs `nth-of-type`

Very common interview question.

```html
<div>
  <p>One</p>
  <span>Two</span>
  <p>Three</p>
</div>
```

```css
p:nth-child(2) {
  /* ❌ Doesn't match One or Three */
}
```

Because the second child is `<span>`.

Whereas:

```css
p:nth-of-type(2) {
  /* ✅ Matches "Three" */
}
```

`nth-child()` considers **all sibling elements**, while `nth-of-type()` considers only siblings of the **same element type**.

---

# ⭐ Quick Revision

| Selector       | Purpose                                  |
| -------------- | ---------------------------------------- |
| `::before`     | Generated content before element content |
| `::after`      | Generated content after element content  |
| `:hover`       | Pointer is over element                  |
| `:active`      | Element is being activated               |
| `:focus`       | Element has focus                        |
| `:nth-child()` | Select based on sibling position         |

### 🎯 Interview Must Remember

```text
::before / ::after → Pseudo-elements
:hover / :active / :focus → Pseudo-classes
:nth-child() → Position-based pseudo-class
```

### Common React use

You generally **don't need extra `<span>` elements** just for decorative CSS:

```jsx
<button className="button">
  Save
</button>
```

```css
.button::after {
  content: "✓";
  margin-left: 5px;
}
```

But for **meaningful/accessibility-critical content**, use actual HTML instead of generated pseudo-element content.
