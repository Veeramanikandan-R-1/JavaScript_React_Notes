# CSS Box Model — Interview Notes

The **CSS Box Model** defines how the browser calculates the size and spacing of every element.

Every element is conceptually:

```text
┌───────────────────────────────┐
│            Margin             │
│  ┌─────────────────────────┐  │
│  │         Border          │  │
│  │  ┌───────────────────┐  │  │
│  │  │      Padding      │  │  │
│  │  │  ┌─────────────┐  │  │  │
│  │  │  │   Content   │  │  │  │
│  │  │  └─────────────┘  │  │  │
│  │  └───────────────────┘  │  │
│  └─────────────────────────┘  │
└───────────────────────────────┘
```

Order:

> **Content → Padding → Border → Margin**

---

## 1. Content

The actual content of the element:

* Text
* Image
* Child elements, etc.

```css
.box {
  width: 200px;
  height: 100px;
}
```

With the default box model (`content-box`), `width: 200px` means the **content width is 200px**.

---

## 2. Padding

Space **inside the element**, between content and border.

```css
.box {
  padding: 20px;
}
```

```text
Border
  ↓
┌─────────────────────┐
│      Padding         │
│   ┌─────────────┐   │
│   │   Content   │   │
│   └─────────────┘   │
└─────────────────────┘
```

Padding increases the element's size with `content-box`.

Can specify individually:

```css
.box {
  padding-top: 10px;
  padding-right: 20px;
  padding-bottom: 10px;
  padding-left: 20px;
}
```

---

## 3. Border

A line surrounding the padding/content.

```css
.box {
  border: 2px solid black;
}
```

Can control:

```css
border-width
border-style
border-color
```

Example:

```css
.box {
  border: 1px solid #ccc;
  border-radius: 8px;
}
```

---

## 4. Margin

Space **outside the element**, separating it from other elements.

```css
.box {
  margin: 20px;
}
```

Unlike padding, margin is outside the border.

```text
     Margin
       ↓
  ┌───────────────┐
  │    Border     │
  │ ┌───────────┐ │
  │ │  Content  │ │
  │ └───────────┘ │
  └───────────────┘
```

### Important: Margin collapsing

Vertical margins between normal block elements can **collapse**.

```css
.first {
  margin-bottom: 20px;
}

.second {
  margin-top: 30px;
}
```

The resulting gap can be **30px, not 50px**, due to margin collapsing.

---

# 5. `box-sizing`

Controls how the browser calculates an element's declared `width` and `height`.

There are two important values:

### `content-box` — default

```css
.box {
  box-sizing: content-box;
  width: 200px;
  padding: 20px;
  border: 5px solid;
}
```

Actual width:

```text
Content  = 200px
Padding  = 20 + 20
Border   = 5 + 5

Total = 250px
```

Formula:

```text
Total width =
width + left/right padding + left/right border
```

---

### `border-box`

```css
.box {
  box-sizing: border-box;
  width: 200px;
  padding: 20px;
  border: 5px solid;
}
```

Now:

```text
Total width = 200px
```

The `200px` includes:

```text
Content + Padding + Border
```

The content area becomes:

```text
200 - 40 - 10 = 150px
```

---

# ⭐ Common Best Practice

Many projects use:

```css
*,
*::before,
*::after {
  box-sizing: border-box;
}
```

This makes sizing more predictable because declared width/height includes padding and border.

---

Reset CSS

Why use it?
Consistent starting point across browsers
Avoid unexpected default margins/paddings
Makes layout styling more predictable
Helps establish your application's own design system
Reset vs Normalize

Reset CSS → removes many browser defaults.

Normalize CSS → keeps useful browser defaults while making behavior more consistent across browsers.

Interview one-liner:

CSS Reset removes browser default styling so developers have a consistent and predictable baseline for styling.

Yes. A **basic CSS reset using the universal selector** can be:

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

### What each does

```css
* {
  margin: 0;              /* Remove default margins */
  padding: 0;             /* Remove default padding */
  box-sizing: border-box; /* Width includes padding + border */
}
```

`*` is the **universal selector**, so it applies to **all elements**.

### Better version

Include pseudo-elements too:

```css
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

**Interview:** This is a common minimal reset, but a production reset may include additional element-specific rules for things like headings, lists, buttons, images, and forms.


---

# Quick Interview Revision

| Property       | Meaning                           | Location                 |
| -------------- | --------------------------------- | ------------------------ |
| **Content**    | Actual element content            | Inside                   |
| **Padding**    | Space around content              | Inside border            |
| **Border**     | Boundary around element           | Between padding & margin |
| **Margin**     | Space between elements            | Outside border           |
| **box-sizing** | Controls width/height calculation | Sizing behavior          |

### 🎯 Most important interview question

**`content-box` vs `border-box`?**

> `content-box` means the declared `width`/`height` applies only to the content. `border-box` means the declared `width`/`height` includes the content, padding, and border. **`content-box` is the default.**
