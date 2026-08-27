# HTML Fundamentals — Interview Notes

For a **5-year React developer**, you should know these fundamentals well because React ultimately renders HTML elements to the DOM.

---

## 1. HTML Document Structure ⭐

A standard HTML document:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My App</title>
  </head>

  <body>
    <header>Header</header>

    <main>
      <h1>Hello React</h1>
      <p>Welcome</p>
    </main>

    <footer>Footer</footer>
  </body>
</html>
```

### Important parts

* `<!DOCTYPE html>` → tells browser to use modern HTML standards.
* `<html>` → root element.
* `<head>` → metadata, title, CSS links, etc.
* `<body>` → visible page content.
* `<meta charset="UTF-8">` → character encoding.
* `<meta name="viewport">` → important for responsive/mobile rendering.
* `<title>` → browser tab title.

---

# 2. DOCTYPE ⭐

```html
<!DOCTYPE html>
```

It tells the browser that the document should be interpreted using **modern HTML standards mode**.

### Important

It is **not an HTML element**.

It helps prevent the browser from entering **quirks mode**, which can cause legacy rendering behavior.

**Interview answer:**

> `DOCTYPE` tells the browser which document mode to use. In HTML5, `<!DOCTYPE html>` enables standards mode.

---

# 3. Semantic HTML ⭐⭐⭐

Semantic elements clearly describe their **meaning/purpose**.

### Common semantic elements

```html
<header>
<nav>
<main>
<section>
<article>
<aside>
<footer>
```

Example:

```html
<header>
  <h1>My Blog</h1>
</header>

<nav>
  <a href="/home">Home</a>
  <a href="/about">About</a>
</nav>

<main>
  <article>
    <h2>React Performance</h2>
    <p>Article content...</p>
  </article>

  <aside>
    Related articles
  </aside>
</main>

<footer>
  Copyright 2026
</footer>
```

### Why semantic HTML?

1. **Accessibility** — screen readers understand page structure better.
2. **SEO** — search engines can better understand content.
3. **Maintainability** — code communicates its purpose clearly.
4. **Better structure** — avoids excessive generic `<div>` usage.

### Semantic vs non-semantic

```html
<!-- Non-semantic -->
<div class="header"></div>

<!-- Semantic -->
<header></header>
```

A `<div>` doesn't describe what the content means.

---

# 4. Block vs Inline Elements ⭐

### Block elements

Normally start on a **new line** and take the available width.

Examples:

```html
<div>
<p>
<h1>
<section>
<article>
<header>
<footer>
<ul>
```

Example:

```html
<div>First</div>
<div>Second</div>
```

Conceptually:

```text
First
Second
```

### Inline elements

Normally remain within the same line and take only the space they need.

Examples:

```html
<span>
<a>
<strong>
<em>
<img>
<button>
```

Example:

```html
<span>Hello</span>
<span>World</span>
```

Conceptually:

```text
Hello World
```

### Important interview point

Don't think of block vs inline purely as an unchangeable property.

CSS can change the layout behavior:

```css
span {
  display: block;
}
```

So **`display` controls the layout behavior**, while HTML elements have default display behavior.

---

# 5. Empty Elements ⭐

Empty elements are elements that **cannot have child content**.

Also commonly called **void elements**.

Examples:

```html
<img src="photo.jpg" alt="Profile" />
<br />
<hr />
<input type="text" />
<meta charset="UTF-8" />
<link rel="stylesheet" href="style.css" />
```

They don't have closing tags:

```html
<!-- Correct -->
<img src="photo.jpg" alt="Photo" />

<!-- Not valid HTML -->
<img src="photo.jpg"></img>
```

### Common void elements

`area`, `base`, `br`, `col`, `embed`, `hr`, `img`, `input`, `link`, `meta`, `param`, `source`, `track`, `wbr`

### React note

JSX requires JSX syntax conventions:

```jsx
<img src="/logo.png" alt="Logo" />
<input type="text" />
<br />
```

The `/` is required in JSX for these self-closing elements.

---

# 6. Global Attributes ⭐⭐

Global attributes can generally be used on **most HTML elements**.

### `id`

Unique identifier:

```html
<div id="user-profile">
  John
</div>
```

```js
document.getElementById("user-profile");
```

In React:

```jsx
<div id="user-profile">John</div>
```

---

### `class`

Specifies CSS class:

```html
<div class="card">Product</div>
```

In JSX:

```jsx
<div className="card">Product</div>
```

**Important React difference:** HTML uses `class`; JSX uses `className`.

---

### `style`

Inline CSS:

```html
<div style="color: red;">Hello</div>
```

React:

```jsx
<div style={{ color: "red" }}>Hello</div>
```

---

### `title`

Provides additional information, often shown as a tooltip:

```html
<button title="Delete this item">
  Delete
</button>
```

---

### `hidden`

Hides the element:

```html
<div hidden>Secret content</div>
```

---

### `tabindex`

Controls keyboard focus behavior:

```html
<button tabindex="0">Submit</button>
```

In React:

```jsx
<button tabIndex={0}>Submit</button>
```

**Accessibility note:** Don't use positive `tabIndex` values unnecessarily because they can create a confusing keyboard navigation order.

---

### `data-*`

Stores custom data on an element:

```html
<button data-user-id="123">
  Edit
</button>
```

JavaScript:

```js
button.dataset.userId; // "123"
```

React:

```jsx
<button data-user-id={user.id}>
  Edit
</button>
```

---

### `aria-*`

Used for **accessibility information**:

```html
<button aria-label="Close">
  X
</button>
```

In React:

```jsx
<button aria-label="Close">
  X
</button>
```

Prefer native semantic HTML first; use ARIA when native HTML doesn't provide the required semantics.

---

# 🔥 Interview Quick Revision

| Topic             | Key Point                       |
| ----------------- | ------------------------------- |
| `DOCTYPE`         | Enables standards mode          |
| `<html>`          | Root element                    |
| `<head>`          | Metadata/resources              |
| `<body>`          | Visible content                 |
| Semantic HTML     | Describes meaning/purpose       |
| Block             | Normally starts on new line     |
| Inline            | Normally flows within same line |
| Empty/Void        | Cannot contain children         |
| `id`              | Identifier, generally unique    |
| `class`           | CSS class                       |
| `data-*`          | Custom data                     |
| `aria-*`          | Accessibility                   |
| `hidden`          | Hides element                   |
| `tabindex`        | Keyboard focus order            |
| React `className` | JSX equivalent of HTML `class`  |

### ⭐ Most important for React interviews

**Semantic HTML + Accessibility + Block/Inline + Global attributes + DOCTYPE + HTML structure** are the areas I'd prioritize.
