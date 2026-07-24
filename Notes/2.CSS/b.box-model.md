# 1. Fundamentals

## What is the CSS Box Model?

Every HTML element is treated as a **rectangular box** by the browser.

Each box consists of four layers:

```text
+---------------------------+
|          Margin           |
|  +---------------------+  |
|  |       Border        |  |
|  |  +---------------+  |  |
|  |  |    Padding    |  |  |
|  |  | +-----------+ |  |  |
|  |  | | Content   | |  |  |
|  |  | +-----------+ |  |  |
|  |  +---------------+  |  |
|  +---------------------+  |
+---------------------------+
```

From inside to outside:

```
Content
   ↓
Padding
   ↓
Border
   ↓
Margin
```

---

# 2. Content

## What is Content?

The actual area where text, images, or child elements are displayed.

```css
.box {
    width: 200px;
    height: 100px;
}
```

```text
Content Area = 200 × 100
```

---

## Used for

* Text
* Images
* Buttons
* Child elements

---

# 3. Padding

## What is Padding?

Padding is the **space inside the element**, between the content and the border.

```css
.box {
    padding: 20px;
}
```

```text
Border
+----------------------+
|      Padding         |
|   +--------------+   |
|   |   Content    |   |
|   +--------------+   |
+----------------------+
```

---

## Characteristics

* Increases the element's size (default box model).
* Background color extends into the padding.
* Padding cannot be negative.

---

## Example

```css
.box {
    padding: 10px 20px;
}
```

Means:

```
Top & Bottom = 10px
Left & Right = 20px
```

---

# 4. Border

## What is Border?

Border surrounds the padding and content.

```css
.box {
    border: 2px solid black;
}
```

---

## Border Properties

```css
border-width: 2px;
border-style: solid;
border-color: red;
```

or shorthand

```css
border: 2px solid red;
```

---

## Common Border Styles

* solid
* dashed
* dotted
* double
* none

---

# 5. Margin

## What is Margin?

Margin is the **space outside the element**.

It creates distance between neighboring elements.

```css
.box {
    margin: 20px;
}
```

```text
Margin

↓

Element

↓

Margin
```

---

## Characteristics

* Transparent (background doesn't extend into it).
* Can be negative.
* Does not increase the element's own size.
* Creates spacing between elements.

---

## Margin Collapse

Vertical margins of adjacent block elements can collapse into a single margin.

Example

```css
.box1 {
    margin-bottom: 20px;
}

.box2 {
    margin-top: 30px;
}
```

Actual gap:

```
30px
```

Not:

```
50px
```

---

# 6. box-sizing

## What is box-sizing?

Determines **how width and height are calculated**.

Two values:

* `content-box` (default)
* `border-box`

---

## content-box (Default)

```css
.box {
    width: 200px;
    padding: 20px;
    border: 10px solid;
}
```

Actual width

```
200
+40 (padding)
+20 (border)

=260px
```

Width applies only to the content.

---

## border-box

```css
.box {
    width: 200px;
    padding: 20px;
    border: 10px solid;
    box-sizing: border-box;
}
```

Actual width

```
200px
```

Padding and border are included inside the specified width.

---

## Why use border-box?

Layouts become predictable.

Example

Without

```text
width = 200

↓

Actual = 260
```

With

```text
width = 200

↓

Actual = 200
```

---

## Best Practice

Most projects use:

```css
*,
*::before,
*::after {
    box-sizing: border-box;
}
```

This avoids unexpected layout issues.

---

# Width Calculation

## content-box

```css
width: 300px;
padding: 20px;
border: 10px;
```

```
300
+40
+20

=360px
```

---

## border-box

Same CSS

```
Total width

=300px
```

---

# Real-world React Example

```jsx
<div className="card">
    Product
</div>
```

```css
.card {
    width: 300px;
    padding: 20px;
    border: 2px solid gray;
    box-sizing: border-box;
}
```

No unexpected overflow.

---

# Best Practices

* Use `box-sizing: border-box` globally.
* Use padding for internal spacing.
* Use margin for spacing between elements.
* Avoid fixed widths where responsive layouts are needed.
* Prefer shorthand properties for cleaner CSS.

---

# Common Mistakes

❌ Confusing margin and padding.

```text
Margin → Outside

Padding → Inside
```

---

❌ Forgetting `border-box`.

Can cause layout overflow.

---

❌ Using padding instead of margin for spacing between components.

Creates incorrect clickable/background areas.

---

❌ Ignoring margin collapse.

Can lead to unexpected vertical spacing.

---

# Real-world Example

```css
.card {
    width: 250px;
    padding: 20px;
    border: 1px solid #ddd;
    margin: 16px;
    box-sizing: border-box;
}
```

Result:

* Content fits within 250px.
* Internal spacing = 20px.
* Border surrounds content.
* Margin separates the card from other cards.

---

# Revision Notes

## Box Model Cheat Sheet

| Layer   | Purpose                   | Affects Size?                               |
| ------- | ------------------------- | ------------------------------------------- |
| Content | Actual text/image         | ✅                                           |
| Padding | Space inside border       | ✅                                           |
| Border  | Surrounds padding/content | ✅                                           |
| Margin  | Space outside element     | ❌ (doesn't increase the element's own size) |

---

## box-sizing Cheat Sheet

| Value         | Width Includes             |
| ------------- | -------------------------- |
| `content-box` | Content only               |
| `border-box`  | Content + Padding + Border |

---

## Remember

```text
Margin
   ↓
Border
   ↓
Padding
   ↓
Content
```

---

## Width Calculation

### content-box

```text
Width
+ Padding
+ Border
= Actual Width
```

### border-box

```text
Width
(includes padding & border)
= Actual Width
```

---

# Common Interview Questions (6 Years React)

### 1. What is the CSS Box Model?

The CSS Box Model describes how every HTML element is rendered using four layers: **content, padding, border, and margin**.

---

### 2. What is the difference between margin and padding?

| Margin                            | Padding                                  |
| --------------------------------- | ---------------------------------------- |
| Outside the element               | Inside the element                       |
| Creates space between elements    | Creates space between content and border |
| Background doesn't extend into it | Background extends into it               |
| Can be negative                   | Cannot be negative                       |

---

### 3. What is the default value of `box-sizing`?

```css
content-box
```

---

### 4. Why is `box-sizing: border-box` recommended?

It includes padding and border inside the specified width and height, making layouts easier to predict and preventing overflow issues.

---

### 5. What is margin collapse?

When two adjacent **vertical margins** touch, the browser uses only the larger margin instead of adding them together.

---

### 6. Does padding increase an element's size?

* **`content-box`** → Yes.
* **`border-box`** → No, because padding is included in the declared width/height.

---

### 7. Does margin affect an element's width?

No. Margin doesn't change the element's own width or height, but it increases the total space the element occupies in the layout.

---

### 8. Which properties are included in `border-box`?

* Content
* Padding
* Border

Margin is **not** included.

---

### 9. Which should you use for spacing between React components?

Use **margin** for spacing between components and **padding** for spacing inside a component.

---

### 10. What is the global CSS rule most projects use?

```css
*,
*::before,
*::after {
    box-sizing: border-box;
}
```

It ensures consistent sizing for all elements and pseudo-elements.
