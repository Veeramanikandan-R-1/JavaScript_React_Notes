# CSS Units

CSS units define the **size of elements, text, spacing, and layouts**.

There are two types:

* **Absolute units** → Fixed size (`px`)
* **Relative units** → Size depends on another value (`rem`, `em`, `%`, `vw`, `vh`, `ch`)

---

# 1. px (Pixels)

`px` is an **absolute unit**.

```css
.box{
    width:200px;
}
```

Always remains **200 pixels** regardless of screen size.

### When to use

* Borders
* Icons
* Small fixed spacing
* Shadows

### Avoid

Using `px` for font sizes and layouts because it doesn't scale well.

---

# 2. rem (Root EM)

`rem` is relative to the **root (`html`) font size**.

Default browser font size:

```text
html = 16px
```

Example

```css
font-size:2rem;
```

Calculation

```text
2 × 16 = 32px
```

If

```css
html{
    font-size:20px;
}
```

Then

```css
2rem = 40px
```

### Why use rem?

Entire application scales consistently.

Very useful for

* Font sizes
* Padding
* Margin
* Gap

### Production Best Practice

Use **rem** for almost all spacing and typography.

---

# 3. em

`em` is relative to the **parent element's font size**.

Example

```css
.parent{
    font-size:20px;
}

.child{
    font-size:2em;
}
```

Result

```text
40px
```

Unlike `rem`, `em` changes based on its parent.

### Nested Example

```text
Parent = 20px

Child = 2em

Result = 40px
```

If another child uses

```css
font-size:2em;
```

Now

```text
2 × 40 = 80px
```

This compounding effect can become difficult to manage.

### When to use

Useful when child elements should scale relative to their parent.

### Best Practice

* Prefer **rem** for page-level sizing.
* Use **em** only when relative scaling is required.

---

# rem vs em

| rem                       | em                                  |
| ------------------------- | ----------------------------------- |
| Relative to root (`html`) | Relative to parent                  |
| Consistent across app     | Depends on parent                   |
| Easier to maintain        | Can compound in nested elements     |
| Preferred for typography  | Good for component-specific scaling |

---

# 4. vh (Viewport Height)

`1vh` = **1% of viewport height**

```css
height:100vh;
```

Means

```text
Entire browser height
```

Common use

```css
.hero{
    min-height:100vh;
}
```

---

# 5. vw (Viewport Width)

`1vw`

=

1% of browser width

Example

```css
width:50vw;
```

If browser width

```text
1000px
```

Element width

```text
500px
```

Used for

* Responsive widths
* Hero sections
* Full-width layouts

---

# 6. %

Percentage is relative to the **parent element**.

Example

```css
.parent{
    width:600px;
}

.child{
    width:50%;
}
```

Result

```text
300px
```

Common uses

* Width
* Height (if parent has height)
* Flex/Grid layouts

---

# 7. ch

`ch` represents the width of the **"0" (zero)** character in the current font.

Example

```css
width:30ch;
```

Means

Approximately enough width for **30 characters**.

Useful for

* Input fields
* Text blocks
* Reading width

Example

```css
input{
    width:20ch;
}
```

---

# Which Unit Should You Use?

| Unit | Best Use                        |
| ---- | ------------------------------- |
| px   | Borders, icons, shadows         |
| rem  | Font size, spacing (Preferred)  |
| em   | Component-relative scaling      |
| %    | Responsive sizing inside parent |
| vw   | Responsive width                |
| vh   | Full-height sections            |
| ch   | Text/input widths               |

---

# CSS Colors

CSS provides multiple ways to define colors.

---

# 1. rgb()

RGB stands for

```text
Red
Green
Blue
```

Each value

```text
0–255
```

Example

```css
color:rgb(255,0,0);
```

Result

Red

---

Another example

```css
rgb(0,0,255)
```

Blue

---

# 2. rgba()

Same as RGB but with **Alpha (Transparency)**.

Syntax

```css
rgba(red,green,blue,alpha)
```

Alpha

```text
0 → Invisible

1 → Fully Visible
```

Example

```css
background:
rgba(0,0,0,0.5);
```

Result

50% transparent black.

Commonly used for

* Overlays
* Modals
* Tooltips
* Shadows

---

# 3. hsl()

HSL stands for

```text
Hue

Saturation

Lightness
```

Example

```css
color:hsl(120,100%,50%);
```

Meaning

* Hue = Green
* Saturation = Fully saturated
* Lightness = Normal brightness

### Why HSL?

Changing brightness is easier.

Example

```css
hsl(220,80%,30%)
```

Dark Blue

```css
hsl(220,80%,70%)
```

Light Blue

---

# rgb vs hsl

RGB

Good when matching exact colors.

HSL

Better when creating themes because you can adjust brightness and saturation easily.

---

# 4. opacity

Controls transparency of the **entire element**, including its children.

```css
opacity:0.5;
```

Values

```text
0 = Invisible

1 = Fully visible
```

Example

```css
.card{
    opacity:.5;
}
```

Everything inside becomes semi-transparent.

### Difference from rgba()

`opacity`

Affects the entire element.

`rgba()`

Affects only that specific color property.

---

# opacity vs rgba

```css
opacity:.5;
```

Entire card becomes transparent.

```css
background:
rgba(0,0,0,.5);
```

Only background becomes transparent.

Text remains fully visible.

---

# Typography

Typography controls how text looks.

Good typography improves readability and accessibility.

---

# 1. font-family

Specifies which font to use.

Example

```css
font-family:
Arial,sans-serif;
```

Always include a fallback.

Example

```css
font-family:
"Roboto",Arial,sans-serif;
```

Production apps usually load fonts from Google Fonts or self-host them.

---

# 2. font-weight

Controls thickness.

Common values

```text
100 Thin

300 Light

400 Normal

500 Medium

600 Semi Bold

700 Bold

800 Extra Bold

900 Black
```

Example

```css
font-weight:700;
```

---

# 3. line-height

Controls vertical spacing between lines.

Example

```css
line-height:1.5;
```

Meaning

Each line is

1.5×

font size.

Better readability.

### Best Practice

Paragraphs

```css
line-height:1.5;
```

or

```css
1.6
```

---

# 4. letter-spacing

Controls spacing between letters.

Example

```css
letter-spacing:2px;
```

Useful for

* Buttons
* Headings
* Logos

Avoid large values for body text.

---

# Real-world React Examples

### Button

```css
.button{
    font-size:1rem;
    font-weight:600;
    letter-spacing:.5px;
}
```

---

### Heading

```css
h1{
    font-size:2.5rem;
    line-height:1.2;
}
```

---

### Paragraph

```css
p{
    font-size:1rem;
    line-height:1.6;
}
```

---

### Input Width

```css
input{
    width:30ch;
}
```

---

# Common Mistakes

### 1. Using px Everywhere

Prefer `rem` for scalable typography and spacing.

---

### 2. Using opacity Instead of rgba

If only the background should be transparent, use `rgba()` instead of `opacity`.

---

### 3. Using em Everywhere

Nested `em` values can multiply unexpectedly.

Prefer `rem` for consistency.

---

### 4. Missing Font Fallback

Bad

```css
font-family:"Roboto";
```

Good

```css
font-family:"Roboto",Arial,sans-serif;
```

---

### 5. Small Line Height

```css
line-height:1;
```

Hard to read.

Use around **1.4–1.6** for paragraphs.

---

# Best Practices

* Use **rem** for fonts and spacing.
* Use **px** for borders, icons, and thin elements.
* Use **%**, **vw**, and **vh** for responsive layouts.
* Use **rgba()** when only the background should be transparent.
* Use **HSL** for theme customization.
* Always define fallback fonts.
* Keep `line-height` around **1.5** for readability.
* Use subtle `letter-spacing`; avoid excessive spacing in body text.

---

# Revision Notes

## Units Cheat Sheet

| Unit  | Relative To             | Best Use                    |
| ----- | ----------------------- | --------------------------- |
| `px`  | Fixed                   | Borders, icons              |
| `rem` | Root (`html`) font size | Fonts, spacing (Preferred)  |
| `em`  | Parent font size        | Component-relative scaling  |
| `%`   | Parent size             | Responsive layouts          |
| `vw`  | Viewport width          | Responsive width            |
| `vh`  | Viewport height         | Full-height sections        |
| `ch`  | Width of "0" character  | Inputs, readable text width |

---

## Colors Cheat Sheet

| Property  | Purpose                            |
| --------- | ---------------------------------- |
| `rgb()`   | RGB color values                   |
| `rgba()`  | RGB with transparency              |
| `hsl()`   | Hue, Saturation, Lightness         |
| `opacity` | Transparency for the whole element |

---

## Typography Cheat Sheet

| Property         | Purpose                             |
| ---------------- | ----------------------------------- |
| `font-family`    | Selects font and fallbacks          |
| `font-weight`    | Controls font thickness             |
| `line-height`    | Controls spacing between text lines |
| `letter-spacing` | Controls spacing between characters |

---

# Frequently Asked Interview Questions (6 Years React)

### 1. What is the difference between `rem` and `em`?

**Answer:**

* `rem` is relative to the root (`html`) font size and remains consistent across the app.
* `em` is relative to the parent element's font size and can compound in nested elements.

---

### 2. When should you use `px` instead of `rem`?

**Answer:** Use `px` for fixed-size elements like borders, icons, and shadows. Use `rem` for fonts, spacing, and layouts that should scale consistently.

---

### 3. What is the difference between `%` and `vw`?

**Answer:**

* `%` is relative to the **parent element**.
* `vw` is relative to the **viewport (browser) width**.

---

### 4. What is the difference between `rgba()` and `opacity`?

**Answer:**

* `rgba()` makes only the specified color transparent (e.g., background).
* `opacity` makes the entire element, including its children, transparent.

---

### 5. Why is HSL useful?

**Answer:** HSL makes it easier to create themes because you can adjust **lightness** and **saturation** without changing the base hue.

---

### 6. Why should you always specify a fallback in `font-family`?

**Answer:** If the primary font fails to load, the browser uses the fallback, ensuring the text remains readable.

---

### 7. What is the recommended `line-height` for body text?

**Answer:** Around **1.4–1.6**, as it improves readability across different screen sizes.

---

### 8. What is the `ch` unit used for?

**Answer:** `ch` is based on the width of the "0" character and is useful for sizing text containers and input fields where character count matters.
