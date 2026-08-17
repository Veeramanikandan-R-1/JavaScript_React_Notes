# 1. Fundamentals

## What is Accessibility (a11y)?

Accessibility means designing web applications so that **everyone**, including people with disabilities, can use them.

This includes users with:

* Visual impairments
* Hearing impairments
* Motor disabilities
* Cognitive disabilities

Accessibility is supported by:

* Semantic HTML
* Keyboard support
* Screen readers
* ARIA attributes
* Proper focus management

---

## Why is Accessibility Important?

* Better user experience
* Legal compliance (WCAG, ADA)
* Better SEO (semantic HTML helps search engines)
* Required in many enterprise applications

> **React Interview Tip:** Accessibility is **not React-specific**. React helps build UIs, but developers must use HTML and ARIA correctly.

---

What is WCAG?

### WCAG — Web Content Accessibility Guidelines

**WCAG** is a set of guidelines for making websites and web applications **accessible to people with disabilities**.

It is maintained by the **W3C**.

### 4 main principles — POUR ⭐

Remember **POUR**:

| Principle              | Meaning                                     | Example                        |
| ---------------------- | ------------------------------------------- | ------------------------------ |
| **P — Perceivable**    | Users should be able to perceive content    | Alt text for images            |
| **O — Operable**       | UI should be usable                         | Keyboard navigation            |
| **U — Understandable** | Content/UI should be understandable         | Clear labels and errors        |
| **R — Robust**         | Works with different assistive technologies | Semantic HTML + screen readers |

### Common WCAG examples

```jsx
// Good
<button>Submit</button>

// Avoid
<div onClick={submit}>Submit</div>
```

Other important practices:

* Provide `alt` text for meaningful images
* Ensure sufficient **color contrast**
* Support **keyboard navigation**
* Use proper headings (`h1`, `h2`, etc.)
* Associate labels with form inputs
* Provide accessible error messages
* Don't rely only on color to communicate information
* Use ARIA when semantic HTML isn't sufficient

### WCAG levels

```text
A   → Minimum
AA  → Common target / industry standard ⭐
AAA → Highest level
```

### Interview answer 🎯

> **"WCAG stands for Web Content Accessibility Guidelines. It provides standards for making web applications accessible to people with disabilities. The four principles are Perceivable, Operable, Understandable, and Robust, commonly remembered as POUR. In React, this means using semantic HTML, keyboard accessibility, proper labels, alt text, sufficient contrast, and ARIA where necessary."**


---

# 2. ARIA (Accessible Rich Internet Applications)

## What is ARIA?

ARIA is a set of HTML attributes that provide additional accessibility information to assistive technologies like screen readers.

Example:

```html
<button aria-label="Close">
    ✕
</button>
```

Without ARIA:

```
Screen reader:
"button"
```

With ARIA:

```
Screen reader:
"Close button"
```

---

## When should you use ARIA?

Only when semantic HTML is not enough.

Good:

```html
<button>Save</button>
```

No ARIA needed.

Instead of:

```html
<div role="button">
```

Use the semantic element:

```html
<button>
```

---

## Best Practice

> **Use native HTML first. Add ARIA only when necessary.**

---

# 3. role

## What is role?

`role` tells assistive technologies what an element represents.

Example

```html
<div role="button">
```

Screen reader treats it like a button.

---

## Common Roles

| Role       | Purpose           |
| ---------- | ----------------- |
| button     | Button            |
| dialog     | Modal             |
| navigation | Navigation menu   |
| main       | Main content      |
| banner     | Header            |
| search     | Search area       |
| alert      | Important message |
| checkbox   | Checkbox          |

---

## React Example

```jsx
<div
    role="button"
    tabIndex="0"
>
    Submit
</div>
```

> If you use `role="button"` on a non-button element, you must also implement keyboard support (`Enter`/`Space`) yourself.

---

# 4. aria-label

## What is it?

Provides an accessible name when no visible text exists.

Example

```html
<button aria-label="Close">
    ✕
</button>
```

Visible

```
✕
```

Screen reader

```
Close button
```

---

## Use Cases

* Icon buttons
* SVG buttons
* Image-only controls

---

# 5. aria-labelledby

## What is it?

Uses another element's text as the accessible name.

Example

```html
<h2 id="title">
    User Settings
</h2>

<button aria-labelledby="title">
</button>
```

Screen reader

```
User Settings button
```

---

## Difference

`aria-label`

```
Text written directly
```

`aria-labelledby`

```
Uses existing visible text
```

---

# 6. aria-describedby

## What is it?

Associates descriptive text with an element.

Example

```html
<input
id="email"
aria-describedby="emailHelp">

<p id="emailHelp">
We'll never share your email.
</p>
```

Screen reader

```
Email input

We'll never share your email.
```

---

## Difference

| Attribute        | Purpose                          |
| ---------------- | -------------------------------- |
| aria-label       | Gives the element a name         |
| aria-labelledby  | Uses another element as its name |
| aria-describedby | Adds extra description           |

---

# 7. tabindex

## What is tabindex?

Controls keyboard focus order.

Example

```html
<button tabindex="0">
```

---

## Values

### tabindex="0"

Included in normal Tab order.

Recommended.

---

### tabindex="-1"

Cannot be reached using Tab.

Can receive focus programmatically.

Example

```javascript
element.focus();
```

Useful for:

* Modal dialogs
* Error messages
* Focus restoration

---

### tabindex="1+"

Creates a custom focus order.

Not recommended because it becomes difficult to maintain.

---

## Best Practice

Use:

```
0
```

or

```
-1
```

Avoid positive values.

---

# 8. Keyboard Navigation

## Why?

Many users cannot use a mouse.

They navigate using:

* Tab
* Shift + Tab
* Enter
* Space
* Arrow keys
* Escape

---

## Good React Components Must Support

Buttons

```
Enter

Space
```

Menus

```
Arrow keys
```

Modal

```
Escape
```

Links

```
Enter
```

---

## React Example

```jsx
<button
onKeyDown={handleKeyDown}>
```

---

## Interview Point

Never create clickable `<div>` elements without keyboard support.

---

# 9. Screen Readers

## What are they?

Software that reads webpage content aloud.

Examples

* NVDA (Windows)
* JAWS
* VoiceOver (macOS/iOS)
* TalkBack (Android)

---

## How they work

They read

* headings
* buttons
* labels
* links
* landmarks
* form controls

using the DOM, semantic HTML, and ARIA.

---

## Good HTML

```html
<button>
Save
</button>
```

Screen reader

```
Save button
```

---

## Bad HTML

```html
<div>
Save
</div>
```

Screen reader

```
Save
```

No indication it's interactive.

---

# 10. Focus Management

## What is Focus?

The currently active element receiving keyboard input.

Example

```
Tab

↓

Input

↓

Button

↓

Link
```

---

## Why Important?

When opening a modal

Focus should move

```
Button

↓

Modal
```

When closing modal

Focus should return

```
Modal

↓

Original button
```

---

## React Example

```jsx
const inputRef = useRef();

useEffect(() => {
    inputRef.current.focus();
}, []);
```

---

## Common Use Cases

* Modal dialogs
* Search boxes
* Error messages
* Forms after validation
* Route/page changes (focus the main content or heading)

---

# 11. Alt Text

## What is Alt Text?

Alternative text describing an image.

```html
<img
src="cat.jpg"
alt="Black cat sleeping on a sofa">
```

---

## Why?

If image doesn't load

or

Screen reader is used

Text is read.

---

## Decorative Images

```html
<img
src="line.png"
alt="">
```

Empty alt tells screen readers to ignore it.

---

## Bad Example

```html
alt="image"
```

Too generic.

---

## Good Example

```html
alt="Company logo"
```

---

# React Best Practices

* Use semantic HTML (`button`, `nav`, `main`, `header`) before adding ARIA.
* Never replace semantic elements with generic `div`s unless necessary.
* Every form control should have a `<label>` or accessible name.
* Every interactive element should be keyboard accessible.
* Use meaningful `alt` text.
* Manage focus for dialogs, navigation changes, and forms.
* Test with keyboard only (no mouse).
* Use browser accessibility tools and screen readers during testing.

---

# Common Mistakes

❌ Using clickable `<div>` instead of `<button>`

❌ Missing `alt` on images

❌ Missing form labels

❌ Positive `tabindex` values

❌ Keyboard trap (user cannot leave a modal)

❌ Using ARIA to replace semantic HTML

❌ Icon buttons without an accessible name

---

# Real-world Example

```html
<label for="search">Search</label>

<input
id="search"
type="text"
aria-describedby="searchHelp">

<p id="searchHelp">
Enter a product name.
</p>

<button aria-label="Search">
🔍
</button>

<img
src="logo.png"
alt="Company logo">
```

---

# Revision Notes

## Accessibility Cheat Sheet

| Concept             | Purpose                             | Example                          |
| ------------------- | ----------------------------------- | -------------------------------- |
| ARIA                | Adds accessibility info             | `aria-label`, `aria-describedby` |
| role                | Defines element purpose             | `role="dialog"`                  |
| aria-label          | Gives accessible name               | Icon button                      |
| aria-labelledby     | Uses another element's text as name | Heading → Button                 |
| aria-describedby    | Adds extra description              | Help/error text                  |
| tabindex="0"        | Normal keyboard navigation          | Focusable element                |
| tabindex="-1"       | Programmatic focus only             | Modal, errors                    |
| Keyboard Navigation | Supports keyboard users             | Tab, Enter, Space, Esc           |
| Screen Reader       | Reads page content                  | NVDA, JAWS, VoiceOver            |
| Focus Management    | Moves/restores focus                | Modals, forms                    |
| alt                 | Describes image                     | `"Company logo"`                 |

---

## Remember

```
Semantic HTML
        ↓
Use ARIA only if needed
        ↓
Keyboard Accessible
        ↓
Screen Reader Friendly
        ↓
Proper Focus Management
        ↓
Accessible React App
```

---

# Common Interview Questions (6 Years React)

### 1. What is ARIA and when should you use it?

ARIA provides accessibility information for assistive technologies. Use it only when semantic HTML cannot provide the required behavior or information.

---

### 2. What is the difference between `aria-label`, `aria-labelledby`, and `aria-describedby`?

* **`aria-label`** → Provides an accessible name directly.
* **`aria-labelledby`** → Uses another element's visible text as the accessible name.
* **`aria-describedby`** → Adds supplementary descriptive information.

---

### 3. What does `role` do?

It tells assistive technologies what an element represents (e.g., `button`, `dialog`, `navigation`). Prefer native HTML elements over adding roles to generic elements.

---

### 4. What is the difference between `tabindex="0"` and `tabindex="-1"`?

* `0` → Included in normal Tab order.
* `-1` → Removed from Tab order but can receive focus programmatically.

---

### 5. Why are positive `tabindex` values discouraged?

They create a custom focus order that's difficult to maintain and can confuse keyboard users. Let the DOM order determine navigation whenever possible.

---

### 6. Why is keyboard navigation important?

Many users cannot use a mouse. Every interactive element must be operable using the keyboard.

---

### 7. What is focus management in React?

It is the process of moving and restoring keyboard focus appropriately, such as focusing a modal when it opens and returning focus to the triggering button when it closes.

---

### 8. What is the purpose of the `alt` attribute?

It provides an accessible text alternative for images. Decorative images should use `alt=""`.

---

### 9. What are screen readers?

Assistive technologies that read webpage content aloud using semantic HTML, ARIA attributes, and the accessibility tree.

---

### 10. How do you make a custom React component accessible?

* Use semantic HTML where possible.
* Provide an accessible name (`label` or ARIA).
* Support keyboard interactions.
* Manage focus correctly.
* Test with keyboard and screen readers.
