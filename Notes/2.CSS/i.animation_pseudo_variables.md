# CSS Animations

Animations make UI elements move or change over time.

There are **two ways** to animate in CSS:

1. **Transition** → For simple state changes (hover, focus, active)
2. **Animation + Keyframes** → For continuous or complex animations

---

# 1. transition

A **transition** smoothly changes a property's value from one state to another.

Without transition:

```text
Small  → Large (Instant)
```

With transition:

```text
Small → Medium → Large (Smooth)
```

Example

```css
.button{
    background:blue;
    transition:background .3s ease;
}

.button:hover{
    background:red;
}
```

When hovered, the color changes smoothly instead of instantly.

---

## Transition Syntax

```css
transition:
property duration timing-function delay;
```

Example

```css
transition:all .3s ease;
```

Meaning

| Part  | Meaning                        |
| ----- | ------------------------------ |
| all   | Animate every changed property |
| .3s   | Duration                       |
| ease  | Speed curve                    |
| delay | Optional waiting time          |

---

## Common Timing Functions

```css
ease
linear
ease-in
ease-out
ease-in-out
```

Example

```css
transition:transform .3s ease-in-out;
```

---

## Multiple Properties

```css
transition:
background .3s,
transform .2s;
```

---

## Best Use Cases

* Hover effects
* Buttons
* Links
* Cards
* Menus

---

# 2. transform

`transform` changes the appearance or position of an element **without affecting the document layout**.

Common transforms

* translate()
* scale()
* rotate()
* skew()

---

## translate()

Moves an element.

```css
transform:translateX(20px);
```

Moves right.

```css
transform:translateY(-10px);
```

Moves up.

---

## scale()

Changes size.

```css
transform:scale(1.2);
```

20% larger.

---

## rotate()

```css
transform:rotate(45deg);
```

Rotates clockwise.

---

## skew()

```css
transform:skew(20deg);
```

Tilts the element.

---

## Combining Transforms

```css
transform:
translateY(-5px)
scale(1.05);
```

Very common for card hover animations.

---

## Why transform?

Instead of changing

```css
width
height
top
left
```

Use transforms because they are **GPU accelerated** and provide smoother performance.

---

# 3. @keyframes

Defines **animation steps**.

Syntax

```css
@keyframes animationName{

}
```

Example

```css
@keyframes fadeIn{

    from{
        opacity:0;
    }

    to{
        opacity:1;
    }

}
```

or

```css
@keyframes fadeIn{

0%{}

50%{}

100%{}

}
```

---

# 4. animation

Applies a keyframe animation.

Example

```css
.box{

animation:
fadeIn
1s
ease
1;

}
```

Meaning

| Value  | Meaning        |
| ------ | -------------- |
| fadeIn | Animation name |
| 1s     | Duration       |
| ease   | Timing         |
| 1      | Run once       |

---

## Infinite Animation

```css
animation:
spin
2s
linear
infinite;
```

---

## Example

```css
@keyframes spin{

from{
transform:rotate(0deg);
}

to{
transform:rotate(360deg);
}

}
```

Perfect for loading icons.

---

## Useful Animation Properties

```css
animation-duration

animation-delay

animation-iteration-count

animation-direction

animation-fill-mode

animation-play-state
```

---

## Transition vs Animation

| Transition                | Animation                      |
| ------------------------- | ------------------------------ |
| Triggered by state change | Can run automatically          |
| Simpler                   | More powerful                  |
| Hover, focus              | Loading, fade, bounce, spinner |

---

# Pseudo Classes & Pseudo Elements

Pseudo selectors let us style elements **without adding extra HTML**.

Two types:

* Pseudo Classes (`:`)
* Pseudo Elements (`::`)

---

# 1. :hover

Applied when mouse is over an element.

```css
button:hover{

background:blue;

}
```

Most common pseudo class.

---

# 2. :active

Applied while clicking.

```css
button:active{

transform:scale(.95);

}
```

Creates button press effect.

---

# 3. :focus

Applied when an element receives keyboard focus.

```css
input:focus{

border-color:blue;

}
```

Very important for accessibility.

---

## Why Important?

Keyboard users navigate using

```text
Tab
```

Always provide a visible focus state.

Avoid

```css
outline:none;
```

Unless replacing it with a custom focus style.

---

# 4. :nth-child()

Targets elements based on position.

Example

```css
li:nth-child(2){

color:red;

}
```

Second item.

---

Odd rows

```css
li:nth-child(odd)
```

Even rows

```css
li:nth-child(even)
```

Useful for

* Tables
* Lists
* Zebra striping

---

# 5. ::before

Creates content **before** an element.

Example

```css
.title::before{

content:"★ ";

}
```

Result

```text
★ React
```

No extra HTML needed.

---

# 6. ::after

Creates content after an element.

```css
.title::after{

content:" ✔";

}
```

Result

```text
React ✔
```

---

## Important

`::before` and `::after` require

```css
content:"";
```

Without `content`, they won't render.

---

## Common Uses

* Icons
* Decorative lines
* Tooltips
* Badges
* Underline effects

---

# CSS Variables (Custom Properties)

CSS Variables store reusable values.

Instead of repeating colors everywhere.

Without variables

```css
background:#1976d2;

border:#1976d2;

color:#1976d2;
```

With variables

```css
:root{

--primary:#1976d2;

}
```

Use

```css
color:
var(--primary);
```

---

## Declaring Variables

```css
:root{

--primary:#1976d2;

--spacing:16px;

}
```

---

## Using Variables

```css
button{

background:
var(--primary);

padding:
var(--spacing);

}
```

---

## Component-level Variables

Variables can also be scoped.

```css
.card{

--card-color:red;

color:
var(--card-color);

}
```

Only available inside `.card`.

---

## Fallback Value

```css
color:
var(--text-color,black);
```

If variable doesn't exist

Uses

```text
black
```

---

## Why CSS Variables?

* Centralized theme
* Easy maintenance
* Dark mode
* Reusable design tokens
* Runtime updates with JavaScript

---

## Example Theme

```css
:root{

--primary:#2563eb;

--background:white;

}

.dark{

--primary:#60a5fa;

--background:#121212;

}
```

Just changing the class switches the theme.

---

# Real-world React Examples

## Button Hover

```css
.button{

transition:
background .3s;

}

.button:hover{

background:#2563eb;

}
```

---

## Card Hover

```css
.card{

transition:
transform .3s;

}

.card:hover{

transform:
translateY(-5px);

}
```

---

## Loading Spinner

```css
.spinner{

animation:
spin
1s
linear
infinite;

}
```

---

## Table Striping

```css
tr:nth-child(even){

background:#f5f5f5;

}
```

---

## Theme

```css
color:
var(--primary);
```

---

# Common Mistakes

### 1. Animating Layout Properties

Avoid

```css
width
height
top
left
```

Prefer

```css
transform
opacity
```

for smoother performance.

---

### 2. Using `transition: all`

Although convenient, it may animate properties unintentionally. Prefer specifying only the properties you need.

```css
transition: transform .3s ease;
```

---

### 3. Forgetting `content` in `::before` and `::after`

Wrong

```css
::before{

color:red;

}
```

Correct

```css
::before{

content:"";

}
```

---

### 4. Removing Focus Styles

Never remove focus outlines without providing an accessible alternative.

---

### 5. Hardcoding Colors

Avoid repeating color values throughout the stylesheet.

Use CSS Variables.

---

# Best Practices

* Use **transition** for simple interactions.
* Use **keyframes** only for complex or repeated animations.
* Animate **transform** and **opacity** for better performance.
* Keep animation durations between **200–400ms** for UI interactions.
* Always maintain visible **focus** styles for accessibility.
* Use `::before` and `::after` for decorative content instead of extra HTML.
* Store colors, spacing, and fonts in CSS Variables.

---

# Revision Notes

## Animation Cheat Sheet

| Property     | Purpose                   |
| ------------ | ------------------------- |
| `transition` | Smooth state change       |
| `transform`  | Move, rotate, scale, skew |
| `@keyframes` | Defines animation steps   |
| `animation`  | Runs keyframe animation   |

### Common Transforms

```css
translateX(20px)
translateY(-10px)
scale(1.1)
rotate(45deg)
skew(10deg)
```

---

## Pseudo Cheat Sheet

| Selector       | Purpose               |
| -------------- | --------------------- |
| `:hover`       | Mouse over            |
| `:active`      | While clicking        |
| `:focus`       | Keyboard/input focus  |
| `:nth-child()` | Select by position    |
| `::before`     | Insert content before |
| `::after`      | Insert content after  |

---

## CSS Variables Cheat Sheet

```css
:root{
  --primary:#2563eb;
  --spacing:16px;
}

.button{
  background:var(--primary);
  padding:var(--spacing);
}

color:var(--text-color, black);
```

---

# Frequently Asked Interview Questions (6 Years React)

### 1. What is the difference between `transition` and `animation`?

**Answer:**

* **Transition** animates a property when its value changes (e.g., hover or focus).
* **Animation** uses `@keyframes` to create multi-step or continuous animations and can run automatically.

---

### 2. Why is `transform` preferred over changing `top` or `left`?

**Answer:** `transform` doesn't trigger layout recalculation and is GPU-accelerated, making animations smoother and more performant.

---

### 3. What is the purpose of `@keyframes`?

**Answer:** `@keyframes` defines the intermediate steps of an animation, while the `animation` property applies and controls it.

---

### 4. What is the difference between `::before` and `:before`?

**Answer:** `::before` is the modern CSS3 syntax for pseudo-elements, while `:before` is the older syntax. Modern projects should use `::before` and `::after`.

---

### 5. Why is `:focus` important?

**Answer:** It provides visual feedback when elements receive keyboard focus, improving accessibility for keyboard and assistive technology users.

---

### 6. What is the difference between `:hover` and `:active`?

**Answer:**

* `:hover` applies when the mouse pointer is over an element.
* `:active` applies while the element is being clicked or pressed.

---

### 7. Why are CSS Variables useful?

**Answer:** They centralize reusable values like colors and spacing, simplify theming (including dark mode), reduce duplication, and allow runtime updates.

---

### 8. Can CSS Variables be overridden?

**Answer:** Yes. Variables follow normal CSS cascading rules, so values declared on a child element override those inherited from `:root` within that scope.

---

### 9. Which CSS properties are best to animate?

**Answer:** `transform` and `opacity`, because they are highly optimized by browsers and generally provide the smoothest animations with minimal performance impact.
