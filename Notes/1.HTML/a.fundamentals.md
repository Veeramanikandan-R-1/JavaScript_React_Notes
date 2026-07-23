# 1. HTML Document Structure

## What is HTML?

HTML (HyperText Markup Language) defines the **structure of a webpage**.

Think of HTML as the **skeleton** of a website.

CSS = Styling

JavaScript = Behavior

HTML = Structure

---

## Basic HTML Structure

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React App</title>
</head>

<body>

    <h1>Hello World</h1>

    <script src="main.js"></script>

</body>
</html>
```

---

## Structure Explained

### `<!DOCTYPE html>`

Tells browser this document is HTML5.

---

### `<html>`

Root element.

Everything lives inside this tag.

```html
<html lang="en">
```

`lang="en"` helps:

* Screen readers
* SEO
* Translation tools

---

### `<head>`

Contains metadata.

Not shown on webpage.

Contains:

* title
* meta tags
* favicon
* CSS links
* preload
* fonts

Example

```html
<head>
    <title>Dashboard</title>
</head>
```

---

### `<body>`

Contains everything visible.

```html
<body>

<h1>Dashboard</h1>

<button>Save</button>

</body>
```

---

## Why React Developers Should Care

React eventually renders HTML.

```jsx
return (
    <button>Save</button>
)
```

React converts JSX into

```html
<button>Save</button>
```

Understanding HTML helps write better JSX.

---

# 2. DOCTYPE

## What is DOCTYPE?

DOCTYPE tells browser

> "Render this page using HTML5 standards."

Example

```html
<!DOCTYPE html>
```

---

## Why Needed?

Without it,

Browser enters **Quirks Mode**

Which behaves like old browsers.

Possible issues:

* incorrect box model
* layout problems
* inconsistent CSS behavior

Modern applications always use

```html
<!DOCTYPE html>
```

---

## HTML5 DOCTYPE

Old HTML versions

```html
<!DOCTYPE HTML PUBLIC "...">
```

HTML5 simplified it to

```html
<!DOCTYPE html>
```

---

## Interview Question

Does DOCTYPE create an HTML element?

No.

It is an instruction for browser.

---

# 3. Semantic HTML

One of the most asked interview topics.

---

## What is Semantic HTML?

Semantic tags describe the meaning of content.

Instead of

```html
<div>
```

Use

```html
<header>
```

Browser immediately understands

"This is page header."

---

## Benefits

### Better Readability

Instead of

```html
<div>
<div>
<div>
```

Use

```html
<header>
<nav>
<main>
<footer>
```

Much easier.

---

### Better SEO

Search engines understand page better.

Google knows

* article
* navigation
* footer
* section

---

### Better Accessibility

Screen readers announce

"Navigation"

instead of

"Div"

Huge benefit.

---

### Easier Maintenance

Developers immediately understand layout.

---

# Common Semantic Tags

## header

Top section

```html
<header>

Logo

Menu

</header>
```

---

## nav

Navigation links

```html
<nav>

<a href="/">Home</a>

</nav>
```

---

## main

Main page content.

Only **one main element** per page.

```html
<main>

Dashboard

</main>
```

---

## section

Groups related content.

```html
<section>

Products

</section>
```

---

## article

Independent content.

Examples

* Blog
* News
* Review
* Forum post

```html
<article>

React Tutorial

</article>
```

---

## aside

Sidebar

Advertisements

Related links

```html
<aside>

Recent Posts

</aside>
```

---

## footer

Bottom area

```html
<footer>

Copyright

</footer>
```

---

## figure

Images with captions.

```html
<figure>

<img src="dog.png">

<figcaption>Dog</figcaption>

</figure>
```

---

## time

Represents date/time.

```html
<time datetime="2026-07-23">
July 23
</time>
```

---

## address

Contact information.

---

## details

Expandable section.

```html
<details>

<summary>Read More</summary>

Content

</details>
```

---

## Non-semantic Elements

```html
<div>

<span>
```

These don't describe meaning.

Use them only when no semantic tag fits.

---

## When NOT to Replace div

Layout wrapper

Flex container

Grid container

Animation wrapper

React component wrapper

Using `div` is perfectly fine there.

---

# Semantic vs Non Semantic

Semantic

```html
<header>
<nav>
<footer>
```

Non Semantic

```html
<div>
<span>
```

---

# 4. Block vs Inline Elements

Very common interview question.

---

## Block Elements

Take full available width.

Always start on new line.

Example

```html
<div>One</div>

<div>Two</div>
```

Output

```
One

Two
```

---

Common Block Elements

```
div

p

section

article

header

footer

nav

main

form

ul

ol

li

table

h1-h6
```

---

## Inline Elements

Take only required width.

Stay on same line.

Example

```html
Hello

<span>React</span>

World
```

Output

```
Hello React World
```

---

Common Inline Elements

```
span

a

strong

em

label

img

input

button

small

code
```

---

## Visual Difference

Block

```
██████████████
```

Inline

```
Text Text Text
```

---

## Why It Matters in React

Suppose

```jsx
<span>
<button>
<div>
```

Choosing wrong element may affect

* Layout
* Accessibility
* CSS

---

# 5. Empty Elements

Also called

Void Elements.

---

## What are Empty Elements?

They cannot have children.

Example

```html
<br>
```

Cannot do

```html
<br>

Hello

</br>
```

Invalid.

---

## Common Empty Elements

```
img

br

hr

input

meta

link

source

track

embed

area

base

col

wbr
```

---

## Example

```html
<img src="logo.png">

<input type="text">

<hr>

<br>
```

---

## JSX Difference

HTML

```html
<img>
```

React JSX

```jsx
<img />
```

React requires self-closing syntax for elements without children.

---

# 6. Global Attributes

Global attributes work on **almost every HTML element**.

---

## id

Unique identifier.

```html
<div id="header">
```

Useful for

* CSS
* JavaScript
* Anchor links

---

## class

Grouping elements.

```html
<div class="card">
```

React uses

```jsx
className
```

instead of

```html
class
```

---

## style

Inline styles.

```html
<div style="color:red">
```

React

```jsx
<div style={{ color: "red" }}>
```

---

## title

Tooltip.

```html
<button title="Delete">
```

---

## hidden

Hide element.

```html
<div hidden>
```

---

## tabindex

Controls keyboard focus order.

```html
<div tabindex="0">
```

Common values:

`0` → Focusable in normal tab order.

`-1` → Programmatically focusable only (not reachable by Tab).

Avoid positive values (`1`, `2`, etc.) because they create confusing navigation order.

---

## contenteditable

Makes content editable.

```html
<div contenteditable="true">
```

---

## draggable

```html
<div draggable="true">
```

---

## spellcheck

```html
<textarea spellcheck="true">
```

---

## lang

Language.

```html
<html lang="en">
```

---

## dir

Text direction.

```html
<div dir="rtl">
```

Useful for Arabic/Hebrew.

---

## data-* Attributes

Custom attributes.

Example

```html
<button data-id="101">
```

Read in JS

```javascript
element.dataset.id
```

Used heavily in

* Testing
* Analytics
* Custom metadata

Example

```jsx
<button data-testid="save-btn">
```

---

## aria-* Attributes

Improve accessibility.

Example

```html
<button aria-label="Close">
```

Screen readers announce

"Close"

instead of

"Button"

Very common in React projects.

---

# Best Practices

* Always use semantic HTML whenever possible.
* Use `div` only when no semantic element fits.
* Use one `<main>` per page.
* Always include `<!DOCTYPE html>`.
* Set `<html lang="en">` (or the appropriate language).
* Prefer `data-*` for custom data instead of inventing attributes.
* Add `aria-*` only when native HTML semantics are not sufficient.
* Use `tabindex` sparingly and avoid positive values.
* Remember JSX differences (`className`, `htmlFor`, self-closing tags).

---

# Common Mistakes

❌ Using only `<div>` everywhere.

❌ Multiple `<main>` elements on a page.

❌ Missing `lang` attribute.

❌ Using `class` instead of `className` in React.

❌ Forgetting to self-close empty elements in JSX (`<img />`, `<input />`).

❌ Using positive `tabindex` values.

❌ Replacing semantic elements with `div` unnecessarily.

---

# Revision Notes

### HTML Structure

```
DOCTYPE
    ↓
html
 ├── head
 └── body
```

---

### Semantic Tags

```
header
nav
main
section
article
aside
footer
figure
figcaption
details
summary
time
address
```

---

### Non-Semantic

```
div
span
```

---

### Block Elements

```
div
p
section
article
header
footer
nav
main
form
ul
ol
li
table
h1-h6
```

Start on a new line and occupy full width by default.

---

### Inline Elements

```
span
a
strong
em
img
input
button
label
small
code
```

Stay on the same line and take only the space they need.

---

### Empty (Void) Elements

```
img
input
br
hr
meta
link
source
track
embed
area
base
col
wbr
```

No closing tag and no child content.

---

### Global Attributes Cheat Sheet

| Attribute                      | Purpose           |
| ------------------------------ | ----------------- |
| `id`                           | Unique identifier |
| `class` (`className` in React) | CSS grouping      |
| `style`                        | Inline styles     |
| `title`                        | Tooltip           |
| `hidden`                       | Hide element      |
| `tabindex`                     | Keyboard focus    |
| `contenteditable`              | Editable content  |
| `draggable`                    | Drag support      |
| `spellcheck`                   | Spell checking    |
| `lang`                         | Language          |
| `dir`                          | Text direction    |
| `data-*`                       | Custom data       |
| `aria-*`                       | Accessibility     |

---

# Frequently Asked Interview Questions

### 1. What is the purpose of `<!DOCTYPE html>`?

It tells the browser to render the page in HTML5 standards mode and avoids Quirks Mode.

---

### 2. What is Semantic HTML?

HTML elements that describe the meaning of their content (e.g., `header`, `nav`, `main`, `article`), improving accessibility, SEO, and maintainability.

---

### 3. Why is Semantic HTML important in React?

Because React renders HTML. Using semantic elements improves accessibility, SEO, and code readability without affecting React itself.

---

### 4. What is the difference between `div` and `section`?

* `div`: Generic container with no meaning.
* `section`: Groups related content and has semantic meaning.

---

### 5. Difference between Block and Inline elements?

* **Block:** Starts on a new line and occupies full width by default.
* **Inline:** Flows within a line and takes only the required width.

---

### 6. What are Void (Empty) elements?

Elements that cannot contain children and do not have closing tags, such as `img`, `input`, `br`, and `hr`.

---

### 7. What are Global Attributes?

Attributes that can be applied to almost every HTML element, such as `id`, `class`, `style`, `title`, `tabindex`, `data-*`, and `aria-*`.

---

### 8. Why do we use `data-*` attributes?

To store custom, non-visible metadata on elements. Common uses include testing (`data-testid`), analytics, and JavaScript integrations.

---

### 9. What are ARIA attributes?

Attributes like `aria-label` and `aria-expanded` that provide additional accessibility information to assistive technologies when native HTML semantics are insufficient.

---

### 10. Why does React use `className` instead of `class`?

Because `class` is a reserved keyword in JavaScript, JSX uses `className` to map to the HTML `class` attribute.

---

### 11. What is the purpose of the `lang` attribute?

It tells browsers, search engines, and screen readers the language of the document, improving accessibility and SEO.

---

### 12. Can you have multiple `<main>` elements on a page?

No. A page should generally contain only one `<main>` element representing its primary content.
