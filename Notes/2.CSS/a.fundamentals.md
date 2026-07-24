# 1. Fundamentals

## What is CSS?

CSS (Cascading Style Sheets) is used to style HTML elements.

It controls:

* Colors
* Fonts
* Layout
* Spacing
* Animations
* Responsive Design

Example:

```css
h1 {
    color: blue;
}
```

```html
<h1>Hello</h1>
```

Output:

```
Hello (Blue)
```

---

# How CSS Applies Styles

Whenever the browser renders a page, it follows this order:

```
1. Find matching selectors
        ↓
2. Compare specificity
        ↓
3. Apply cascade rules
        ↓
4. Inherit properties (if applicable)
        ↓
Final computed style
```

This entire topic revolves around these four steps.

---

# 2. Selectors

## What are Selectors?

Selectors tell CSS **which HTML elements to style**.

---

## Universal Selector

Selects every element.

```css
* {
    margin: 0;
}
```

---

## Element Selector

```css
p {
    color: red;
}
```

Matches

```html
<p>Hello</p>
```

---

## Class Selector

```css
.card {
    border: 1px solid;
}
```

```html
<div class="card"></div>
```

Most commonly used in React.

---

## ID Selector

```css
#header {
    background: black;
}
```

```html
<div id="header"></div>
```

IDs should generally be unique.

---

## Attribute Selector

```css
input[type="text"] {
    border: 1px solid blue;
}
```

---

## Group Selector

```css
h1,
h2,
h3 {
    color: navy;
}
```

---

## Descendant Selector

Space means **inside**.

```css
.card p {
    color: red;
}
```

Matches

```html
<div class="card">
    <p>Hello</p>
</div>
```

---

## Child Selector

`>` means direct child.

```css
.card > p {
    color: blue;
}
```

Matches

```html
<div class="card">
    <p>Direct child</p>
</div>
```

Does **not** match

```html
<div class="card">
    <div>
        <p>Nested</p>
    </div>
</div>
```

---

## Adjacent Sibling

`+`

Next immediate sibling.

```css
h1 + p {
    color: red;
}
```

---

## General Sibling

`~`

All following siblings.

```css
h1 ~ p {
    color: blue;
}
```

---

## Pseudo-class

Represents an element state.

```css
button:hover {
    background: green;
}

input:focus {
    border-color: blue;
}

li:first-child {
    color: red;
}
```

Common pseudo-classes:

* `:hover`
* `:focus`
* `:active`
* `:visited`
* `:checked`
* `:disabled`
* `:first-child`
* `:last-child`
* `:nth-child()`
* `:not()`

---

## Pseudo-element

Represents part of an element.

```css
p::before {
    content: "★ ";
}

p::after {
    content: " ✓";
}
```

Common pseudo-elements:

* `::before`
* `::after`
* `::first-letter`
* `::first-line`
* `::selection`
* `::placeholder`

---

# 3. Specificity

## What is Specificity?

Specificity decides **which CSS rule wins when multiple rules match the same element**.

Every selector has a weight.

Higher weight wins.

---

## Specificity Order

```
Inline Style
      ↓
ID
      ↓
Class / Attribute / Pseudo-class
      ↓
Element / Pseudo-element
```

---

## Weight Table

| Selector       | Weight |
| -------------- | ------ |
| Inline style   | 1000   |
| ID             | 100    |
| Class          | 10     |
| Attribute      | 10     |
| Pseudo-class   | 10     |
| Element        | 1      |
| Pseudo-element | 1      |
| Universal `*`  | 0      |

---

## Example 1

```css
p {
    color: blue;
}

.text {
    color: red;
}
```

```html
<p class="text">
```

Winner

```
.text
```

because

```
10 > 1
```

---

## Example 2

```css
.text {
    color: blue;
}

#title {
    color: red;
}
```

```html
<p id="title" class="text">
```

Winner

```
#title
```

because

```
100 > 10
```

---

## Example 3

```html
<p
style="color:green;"
class="text">
```

Inline style wins.

---

## `!important`

Overrides normal specificity.

```css
p {
    color: red !important;
}
```

Avoid unless absolutely necessary because it makes CSS difficult to maintain.

---

# 4. Cascade

## What is Cascade?

Cascade decides which style wins when:

* Same specificity
* Multiple styles exist

The browser considers:

1. Importance (`!important`)
2. Specificity
3. Source order

---

## Example

```css
p {
    color: blue;
}

p {
    color: red;
}
```

Result

```
Red
```

The second rule wins because it appears later.

---

## Another Example

```css
.card {
    color: blue;
}

.card {
    color: green;
}
```

Result

```
Green
```

---

## Cascade Order

```
!important
      ↓
Higher Specificity
      ↓
Later Rule
```

---

# 5. Inheritance

## What is Inheritance?

Some CSS properties automatically pass from parent to child.

Example

```html
<div>
    <p>Hello</p>
</div>
```

```css
div {
    color: blue;
}
```

`<p>` becomes blue.

---

## Common Inherited Properties

* color
* font-family
* font-size
* font-weight
* line-height
* visibility
* text-align

---

## Non-Inherited Properties

These do **not** inherit automatically.

* margin
* padding
* border
* width
* height
* background
* display
* position

Example

```css
div {
    background: red;
}
```

Child does **not** inherit the red background.

---

## Force Inheritance

```css
color: inherit;
```

Example

```css
button {
    color: inherit;
}
```

Useful for reusable components.

---

# Real-world React Example

```jsx
<Card className="primary">
    <Button />
</Card>
```

```css
.primary {
    color: blue;
}

button {
    color: inherit;
}
```

Button automatically uses blue text.

---

# Best Practices

* Prefer **class selectors** over IDs.
* Keep specificity low to make styles easier to override.
* Avoid `!important` unless unavoidable.
* Use semantic class names (`.card`, `.button`, `.header`).
* Rely on inheritance for typography (`color`, `font`) instead of repeating styles.
* Write predictable CSS with a consistent order.

---

# Common Mistakes

❌ Overusing ID selectors

Hard to override.

---

❌ Excessive selector nesting

```css
.app .container .content .card .title
```

Creates high specificity and maintenance issues.

---

❌ Using `!important` everywhere

Makes debugging difficult.

---

❌ Assuming all CSS properties inherit

Only certain properties do.

---

# Real-world Example

```html
<div class="card">
    <h2 id="title">React</h2>
    <p>Interview Notes</p>
</div>
```

```css
.card {
    color: blue;
}

#title {
    color: red;
}

p {
    font-size: 16px;
}
```

Result:

* `<h2>` → Red (ID specificity)
* `<p>` → Blue text (inherited from `.card`)
* `<p>` → 16px font size (direct rule)

---

### CSS Reset (Short Interview Note)

**What is CSS Reset?**

A **CSS Reset** removes the browser's default styles (margin, padding, list styles, etc.) so all browsers start with a consistent base.

Example:

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```
```css
*,
*::before,
*::after {
    box-sizing: border-box;
}
```

### Why do we need it?

Different browsers apply different default styles.

Without a reset:

* Chrome and Firefox may render elements differently.
* Layouts can become inconsistent.

With a reset:

* All browsers start from the same baseline.
* Your custom CSS behaves more predictably.

### CSS Reset vs Normalize.css

* **CSS Reset:** Removes almost all default browser styles.
* **Normalize.css:** Keeps useful default styles while making them consistent across browsers.

### Interview Answer (30 seconds)

> "CSS Reset removes browser default styles like margins and paddings to provide a consistent starting point across different browsers. A common reset is `margin: 0`, `padding: 0`, and `box-sizing: border-box`. Unlike Reset, Normalize.css preserves useful default styles while fixing browser inconsistencies."


---

# Revision Notes

## CSS Fundamentals Cheat Sheet

| Concept     | Purpose                                 | Example                 |
| ----------- | --------------------------------------- | ----------------------- |
| Selector    | Chooses elements                        | `.card`, `#header`, `p` |
| Specificity | Decides which rule wins                 | ID > Class > Element    |
| Cascade     | Later rule wins if specificity is equal | Last declaration wins   |
| Inheritance | Child inherits certain properties       | `color`, `font-family`  |

---

## Common Selectors

| Selector        | Meaning          |
| --------------- | ---------------- |
| `*`             | Universal        |
| `p`             | Element          |
| `.card`         | Class            |
| `#id`           | ID               |
| `[type="text"]` | Attribute        |
| `.card p`       | Descendant       |
| `.card > p`     | Direct child     |
| `h1 + p`        | Adjacent sibling |
| `h1 ~ p`        | General sibling  |
| `:hover`        | Pseudo-class     |
| `::before`      | Pseudo-element   |

---

## Specificity Cheat Sheet

| Selector                         | Weight |
| -------------------------------- | ------ |
| Inline style                     | 1000   |
| ID                               | 100    |
| Class / Attribute / Pseudo-class | 10     |
| Element / Pseudo-element         | 1      |
| Universal (`*`)                  | 0      |

**Winning Order**

```
!important
      ↓
Inline Style
      ↓
ID
      ↓
Class
      ↓
Element
```

---

## Cascade Rule

```
1. !important
       ↓
2. Higher Specificity
       ↓
3. Later Rule
```

---

## Common Inherited Properties

```
color
font-family
font-size
font-weight
line-height
text-align
visibility
```

---

## Common Non-Inherited Properties

```
margin
padding
border
background
width
height
display
position
```

---

# Common Interview Questions (6 Years React)

### 1. What is CSS specificity?

Specificity is the algorithm browsers use to determine which CSS rule applies when multiple selectors target the same element.

---

### 2. Which has higher specificity: ID or Class?

**ID selector**.

```
#id (100)
>

.class (10)
```

---

### 3. What is the difference between specificity and cascade?

* **Specificity** compares selector weights.
* **Cascade** decides the winner using importance, specificity, and finally source order.

---

### 4. Does the last CSS rule always win?

No. The last rule wins **only if specificity is the same**.

---

### 5. Which CSS properties are inherited?

Typography-related properties like:

* `color`
* `font-family`
* `font-size`
* `line-height`

---

### 6. What is the difference between `:hover` and `::before`?

* `:hover` is a **pseudo-class** (element state).
* `::before` is a **pseudo-element** (virtual element inserted before content).

---

### 7. Why should you avoid `!important`?

It bypasses the normal cascade and specificity rules, making CSS harder to override, debug, and maintain.

---

### 8. Why are class selectors preferred in React?

They are reusable, have moderate specificity, work well with CSS Modules and CSS-in-JS solutions, and are easier to maintain than ID selectors.

---

### 9. Explain the browser's CSS decision process.

```
Find matching selectors
        ↓
Compare specificity
        ↓
Apply cascade rules
        ↓
Apply inheritance (where applicable)
        ↓
Generate final computed style
```

---

### 10. In large React applications, how do you avoid CSS conflicts?

* Keep specificity low.
* Use meaningful class names.
* Prefer CSS Modules, CSS-in-JS, or utility-first approaches where appropriate.
* Avoid deep selector nesting and excessive `!important` usage.
* Organize styles consistently to keep them predictable.
