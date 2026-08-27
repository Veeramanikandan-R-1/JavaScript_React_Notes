# CSS Architecture — Interview Notes

**CSS Architecture** is about organizing and managing CSS so it remains **maintainable, scalable, reusable, and predictable**, especially in large React applications.

---

# 1. BEM ⭐

**BEM = Block Element Modifier**

A naming convention for creating predictable CSS class names.

### Structure

```text
Block__Element--Modifier
```

### Example

```html
<div class="card">
  <h2 class="card__title">Product</h2>
  <button class="card__button card__button--primary">
    Buy
  </button>
</div>
```

```css
.card {
  padding: 20px;
}

.card__title {
  font-size: 20px;
}

.card__button {
  padding: 10px;
}

.card__button--primary {
  background: blue;
}
```

### Meaning

```text
card                    → Block
card__title             → Element
card__button--primary   → Modifier
```

**Benefits:**

* Clear naming
* Avoids naming conflicts
* Easy to understand component relationships

**Interview:** BEM is a **naming convention**, not a CSS framework.

---

# 2. CSS Modules ⭐

CSS Modules provide **locally scoped CSS classes**, commonly used with React.

### `Button.module.css`

```css
.button {
  background: blue;
  color: white;
}
```

### React

```jsx
import styles from "./Button.module.css";

function Button() {
  return <button className={styles.button}>Save</button>;
}
```

The build system generates a unique class name, conceptually like:

```text
Button_button__abc123
```

So styles don't accidentally conflict with another `.button`.

### Benefits

* Local scoping
* Prevents class-name collisions
* Good for component-based React applications
* Still uses normal CSS syntax

### Interview

> CSS Modules provide **build-time locally scoped class names**.

---

# 3. SCSS Basics

**SCSS** is a CSS preprocessor syntax that extends CSS with features such as:

* Variables
* Nesting
* Mixins
* Functions
* `@extend`
* Partials/modules

### Variables

```scss
$primary: #2563eb;
$spacing: 16px;

.button {
  background: $primary;
  padding: $spacing;
}
```

### Nesting

```scss
.card {
  padding: 20px;

  .title {
    font-size: 20px;
  }

  &:hover {
    transform: scale(1.02);
  }
}
```

Compiles conceptually to:

```css
.card {
  padding: 20px;
}

.card .title {
  font-size: 20px;
}

.card:hover {
  transform: scale(1.02);
}
```

### Mixin

Reusable group of styles:

```scss
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  @include flex-center;
}
```

### Important

SCSS is **compiled to CSS** before the browser uses it.

**SCSS variables** (`$color`) are compile-time values, whereas **CSS custom properties** (`--color`) remain available at runtime.

Yes. In SCSS, the modern approach is to use **`@use`** to share variables and mixins between files.

### 1. `_variables.scss`

```scss
$primary-color: #2563eb;
$spacing: 16px;
```

### 2. `_mixins.scss`

```scss
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

### 3. `button.scss`

Use them with `@use`:

```scss
@use "./variables" as vars;
@use "./mixins" as mix;

.button {
  color: vars.$primary-color;
  padding: vars.$spacing;

  @include mix.flex-center;
}
```

### Why `_`?

```text
_variables.scss
_mixins.scss
```

The `_` indicates a **partial**. These files are intended to be imported into other SCSS files rather than compiled as standalone CSS.

### ⭐ `@use` vs `@import`

Prefer:

```scss
@use "./variables" as vars;
```

instead of the older:

```scss
@import "./variables";
```

`@import` is **deprecated in modern Sass**.

### Interview one-liner

> **Use `@use` to consume variables, mixins, and other Sass members from another SCSS file; members are namespaced by default, which helps avoid naming conflicts.**

---

# 4. Styled Components Basics

**Styled Components** is a CSS-in-JS library commonly used with React.

Instead of separate CSS files, styles are attached to components.

```jsx
import styled from "styled-components";

const Button = styled.button`
  background: blue;
  color: white;
  padding: 10px 20px;
`;

function App() {
  return <Button>Save</Button>;
}
```

### Dynamic styling

```jsx
const Button = styled.button`
  background: ${(props) =>
    props.primary ? "blue" : "gray"};
`;
```

```jsx
<Button primary>Save</Button>
```

### Benefits

* Component-scoped styles
* Dynamic styling using props
* No need to manually manage class names
* Supports theming

### Trade-offs

* Runtime/library overhead depending on setup
* Different debugging/build characteristics than plain CSS
* Adds a styling dependency

**Interview:**

> Styled Components uses JavaScript to define component-scoped CSS and allows styles to react to component props/state.

---

# 5. Tailwind CSS Basics ⭐

**Tailwind CSS** is a **utility-first CSS framework**.

Instead of writing custom CSS classes for every component, you compose predefined utility classes.

```jsx
<button
  className="
    bg-blue-500
    text-white
    px-4
    py-2
    rounded
    hover:bg-blue-600
  "
>
  Save
</button>
```

Each class represents a specific CSS rule:

```text
bg-blue-500 → background
text-white  → text color
px-4        → horizontal padding
py-2        → vertical padding
rounded     → border radius
```

### Responsive styling

```jsx
<div className="w-full md:w-1/2 lg:w-1/3">
  Content
</div>
```

Meaning:

```text
Mobile → 100%
md     → 50%
lg     → 33.33%
```

### State variants

```jsx
<button className="bg-blue-500 hover:bg-blue-700">
  Save
</button>
```

Common variants:

```text
hover:
focus:
active:
disabled:
dark:
sm:
md:
lg:
xl:
```

### Benefits

* Fast development
* Consistent design system
* Responsive utilities
* Less custom CSS
* Good for component-based development

### Trade-off

HTML/JSX can become difficult to read when many utility classes are combined.

---

# ⭐ Comparison

| Approach              | Main Idea          | Scoping          | React Usage |
| --------------------- | ------------------ | ---------------- | ----------- |
| **BEM**               | Naming convention  | Manual/global    | Good        |
| **CSS Modules**       | Locally scoped CSS | Local            | ⭐ Excellent |
| **SCSS**              | CSS preprocessor   | Depends on usage | Excellent   |
| **Styled Components** | CSS-in-JS          | Component        | Excellent   |
| **Tailwind**          | Utility-first CSS  | Utility classes  | ⭐ Excellent |

---

# 🎯 When to Use What?

### BEM

Good when:

```text
Large traditional CSS codebase
+
Need consistent naming convention
```

### CSS Modules

Good when:

```text
React component
+
Want normal CSS
+
Want automatic local scoping
```

### SCSS

Good when:

```text
Need CSS preprocessing
+
Variables/mixins/nesting
+
Existing SCSS codebase
```

### Styled Components

Good when:

```text
React
+
Component-level styling
+
Dynamic props/theming
```

### Tailwind

Good when:

```text
Rapid UI development
+
Utility-first approach
+
Design system
+
Responsive layouts
```

---

# ⭐ Interview Must Remember

```text
BEM
→ Naming convention

CSS Modules
→ Locally scoped CSS

SCSS
→ CSS preprocessor

Styled Components
→ CSS-in-JS

Tailwind
→ Utility-first CSS framework
```

### Senior React perspective

For a large React application, the important thing isn't just **which styling technology you choose**. You should establish:

* Consistent naming/design tokens
* Component boundaries
* Reusable styles
* Responsive strategy
* Theme support
* Avoidance of excessive specificity
* Accessibility states (`:focus-visible`, etc.)
* A clear convention that the whole team follows

> **CSS architecture is primarily about keeping styling predictable and maintainable as the application and team grow.**
