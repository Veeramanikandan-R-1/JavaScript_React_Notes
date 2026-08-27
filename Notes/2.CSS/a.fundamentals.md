# CSS Fundamentals — Interview Notes

For a 5-year React developer, these 4 concepts are **core CSS fundamentals** and are frequently asked together.

---

## 1. Selectors

Selectors determine **which HTML elements a CSS rule applies to**.

### Common selectors

```css
/* Element */
p {
  color: red;
}

/* Class */
.card {
  padding: 20px;
}

/* ID */
#header {
  height: 60px;
}

/* Attribute */
input[type="text"] {
  border: 1px solid gray;
}

/* Descendant */
.card p {
  color: blue;
}

/* Child - direct child only */
.card > p {
  color: green;
}

/* Multiple selectors */
h1, h2, h3 {
  font-weight: bold;
}
```

### Important combinators

```css
/* Descendant */
.parent .child { }

/* Direct child */
.parent > .child { }

/* Adjacent sibling */
h2 + p { }

/* General sibling */
h2 ~ p { }
```

Sure — these are **CSS combinators** that define the relationship between elements.

### 1. Descendant — space ` `

```css
.parent .child {
  color: red;
}
```

Selects `.child` **anywhere inside** `.parent`, even deeply nested.

```html
<div class="parent">
  <div>
    <p class="child">Hello</p> <!-- ✅ -->
  </div>
</div>
```

---

### 2. Direct Child — `>`

```css
.parent > .child {
  color: red;
}
```

Selects `.child` only if it is a **direct child** of `.parent`.

```html
<div class="parent">
  <p class="child">Hello</p> <!-- ✅ -->
  
  <div>
    <p class="child">World</p> <!-- ❌ -->
  </div>
</div>
```

**Difference:**

```text
.parent .child  → anywhere inside
.parent > .child → direct child only
```

---

### 3. Adjacent Sibling — `+`

```css
h2 + p {
  color: red;
}
```

Selects the **immediately next sibling** `<p>` after an `<h2>`.

```html
<h2>Title</h2>
<p>Hello</p>       <!-- ✅ -->
<p>World</p>       <!-- ❌ -->
```

---

### 4. General Sibling — `~`

```css
h2 ~ p {
  color: red;
}
```

Selects **all `<p>` siblings that come after** the `<h2>`.

```html
<h2>Title</h2>
<p>One</p>         <!-- ✅ -->
<div>Something</div>
<p>Two</p>         <!-- ✅ -->
<p>Three</p>       <!-- ✅ -->
```

### ⭐ Quick Revision

| Combinator | Meaning                |
| ---------- | ---------------------- |
| `A B`      | B anywhere inside A    |
| `A > B`    | B direct child of A    |
| `A + B`    | B immediately after A  |
| `A ~ B`    | All B siblings after A |

**Easy memory:** `>` = direct, `+` = next one, `~` = all following siblings.

---

### Pseudo-class vs pseudo-element

**Pseudo-class** → selects an element based on a **state/condition**.

```css
button:hover {
  background: black;
}

input:focus {
  border-color: blue;
}
```

**Pseudo-element** → styles a **part of an element**.

```css
p::first-letter {
  font-size: 30px;
}

.card::before {
  content: "★";
}
```

---

# 2. Specificity

Specificity determines **which CSS selector wins when multiple rules target the same element**.

Think of specificity roughly as:

```text
Inline styles > ID > Class/Attribute/Pseudo-class > Element/Pseudo-element
```

Example:

```html
<p id="title" class="text">Hello</p>
```

```css
p {
  color: blue;
}

.text {
  color: green;
}

#title {
  color: red;
}
```

Result:

```text
red
```

because `#title` has higher specificity.

### Specificity score

A useful interview model:

```text
Inline       → (1,0,0,0)
ID           → (0,1,0,0)
Class        → (0,0,1,0)
Attribute    → (0,0,1,0)
Pseudo-class → (0,0,1,0)
Element      → (0,0,0,1)
```

Example:

```css
#app .card p { }
```

Specificity:

```text
ID        = 1
Class     = 1
Element   = 1

→ (0,1,1,1)
```

### Important

Specificity is **not simply "count everything and pick the biggest number."**

For example:

```css
#app p {
  color: red;
}

.card .text .title .name p {
  color: blue;
}
```

The first selector wins because **one ID outweighs any number of classes** in the specificity comparison hierarchy.

---

# 3. Cascade

The **cascade** is the process the browser uses to determine the final CSS value when multiple declarations apply.

A simplified decision order is:

```text
1. Origin & importance
2. Cascade layers
3. Specificity
4. Scoping proximity
5. Source order
```

For everyday CSS, remember:

> **If declarations have the same cascade precedence, higher specificity wins. If specificity is also equal, the later rule wins.**

Example:

```css
.button {
  color: blue;
}

.button {
  color: red;
}
```

Result:

```text
red
```

Same selector → same specificity → later declaration wins.

### `!important`

```css
.button {
  color: red !important;
}
```

`!important` changes the declaration's cascade priority and should generally be **avoided unless there is a genuine need**.

---

# 4. Inheritance

Inheritance means some CSS properties automatically get their value from the **parent element**.

```html
<div class="parent">
  <p>Hello</p>
</div>
```

```css
.parent {
  color: red;
}
```

The `<p>` inherits:

```text
color: red
```

### Common inherited properties

```text
color
font-family
font-size
font-weight
line-height
text-align
visibility
```

### Common non-inherited properties

```text
margin
padding
border
width
height
background
display
position
```

Example:

```css
.parent {
  padding: 20px;
}
```

The child **doesn't automatically get `padding: 20px`**.

---

## Useful inheritance keywords

```css
.child {
  color: inherit;
}
```

Explicitly inherit from parent.

```css
.child {
  color: initial;
}
```

Reset to the property's initial value.

```css
.child {
  color: unset;
}
```

Acts as `inherit` for inherited properties and `initial` for non-inherited properties.

---

# ⭐ Specificity vs Cascade vs Inheritance

This distinction is **very important for interviews**:

| Concept         | Meaning                                                                                   |
| --------------- | ----------------------------------------------------------------------------------------- |
| **Selector**    | Determines which elements are targeted                                                    |
| **Specificity** | Determines which competing selector is stronger                                           |
| **Cascade**     | Determines the final winning declaration considering precedence, specificity, order, etc. |
| **Inheritance** | Allows certain properties to flow from parent → child                                     |

### Simple mental model

```text
CSS Rules
   ↓
Which rules target the element?
   ↓
Cascade / precedence
   ↓
Specificity
   ↓
Source order if still tied
   ↓
If no declaration determines the value
   ↓
Inheritance may provide the value
```

### 🎯 Interview one-liner

> **Selectors choose the elements, the cascade determines which declarations compete and win, specificity resolves selector strength within the cascade, and inheritance allows certain properties to be passed from parent to child.**
