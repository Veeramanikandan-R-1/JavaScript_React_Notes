# Accessibility (A11y) — React Interview Notes

**Accessibility (A11y)** means making applications usable by people with disabilities, including users who rely on **keyboard navigation, screen readers, or other assistive technologies**.

For a 5-year React developer, remember this principle:

> **Use semantic HTML first → add ARIA only when necessary.**

---

## 1. ARIA

**ARIA = Accessible Rich Internet Applications.**

ARIA provides additional information to assistive technologies when native HTML semantics aren't enough.

Example:

```jsx
<button aria-label="Close dialog">
  ✕
</button>
```

ARIA can communicate:

* What an element is (`role`)
* What it is called (`aria-label`)
* What it is related to (`aria-labelledby`)
* Additional description (`aria-describedby`)
* State (`aria-expanded`, `aria-checked`, etc.)

### ⚠️ Important

Don't use ARIA to replace semantic HTML unnecessarily.

```jsx
// ❌
<div role="button" onClick={handleClick}>
  Save
</div>

// ✅
<button onClick={handleClick}>
  Save
</button>
```

Native `<button>` already provides keyboard behavior, focus, and button semantics.

---

# 2. `role`

Defines the **semantic role** of an element for assistive technologies.

```jsx
<div role="alert">
  Payment failed
</div>
```

Common roles:

```text
button
dialog
alert
navigation
tab
tabpanel
checkbox
radio
progressbar
```

Example:

```jsx
<div role="dialog" aria-labelledby="dialog-title">
  <h2 id="dialog-title">Delete User</h2>
</div>
```

### Interview point

`role="button"` **does not automatically make a `<div>` behave like a real button**. You would also need keyboard handling, focus behavior, etc. Prefer `<button>`.

---

# 3. `aria-label`

Provides an **accessible name directly**.

Useful when an element has no visible text.

```jsx
<button aria-label="Close">
  ✕
</button>
```

A screen reader can announce something like:

> "Close, button"

### Good use cases

* Icon-only buttons
* Search buttons
* Close buttons

```jsx
<button aria-label="Search">
  🔍
</button>
```

---

# 4. `aria-labelledby`

Uses the text of **another element** as the accessible name.

```jsx
<h2 id="dialog-title">Delete Account</h2>

<div
  role="dialog"
  aria-labelledby="dialog-title"
>
  Are you sure?
</div>
```

Here, the dialog's accessible name comes from the `<h2>`.

### `aria-label` vs `aria-labelledby`

```text
aria-label
    → label is provided directly

aria-labelledby
    → label comes from another element
```

Prefer `aria-labelledby` when a visible heading already exists.

---

# 5. `aria-describedby`

Associates an element with **additional descriptive information**.

```jsx
<label htmlFor="email">Email</label>

<input
  id="email"
  aria-describedby="email-help"
/>

<p id="email-help">
  We'll never share your email.
</p>
```

A screen reader can understand:

> "Email, edit text. We'll never share your email."

### Difference

```text
aria-labelledby  → What is this?
aria-describedby → Additional information about it
```

---

# 6. `tabindex`

Controls whether an element can receive **keyboard focus**.

### `tabIndex={0}`

Adds the element to the normal keyboard tab order.

```jsx
<div tabIndex={0}>
  Focusable content
</div>
```

### `tabIndex={-1}`

Element can receive focus programmatically but is **not reachable using Tab**.

```jsx
<div ref={elementRef} tabIndex={-1} />
```

Then:

```js
elementRef.current.focus();
```

Very useful for **focus management**.

### ⚠️ Avoid positive values

```jsx
tabIndex={1} // ❌
tabIndex={2} // ❌
```

Positive tabindex creates a custom focus order and can make keyboard navigation confusing.

**Preferred:**

```text
tabIndex={0}   → normal tab order
tabIndex={-1}  → programmatic focus only
```

---

# 7. Keyboard Navigation

Everything interactive should be usable **without a mouse**.

Common keys:

```text
Tab       → Move forward
Shift+Tab → Move backward
Enter     → Activate buttons/links
Space     → Activate buttons/checkboxes
Esc       → Close dialogs/menus
Arrow keys → Navigate certain widgets
```

### Native HTML gives keyboard support automatically

```jsx
<button onClick={save}>
  Save
</button>
```

Much better than:

```jsx
<div onClick={save}>
  Save
</div>
```

If you absolutely must create a custom interactive component, you need to handle keyboard behavior yourself.

---

# 8. Screen Readers

Screen readers convert UI content into **spoken output or Braille**.

Examples:

* NVDA
* JAWS
* VoiceOver
* TalkBack

For React applications, ensure:

* Semantic HTML
* Meaningful accessible names
* Proper form labels
* Correct heading hierarchy
* Useful alt text
* Keyboard accessibility
* Proper focus management
* Appropriate ARIA where required

Example:

```jsx
<label htmlFor="username">
  Username
</label>

<input id="username" />
```

A screen reader can associate the label with the input.

---

# 9. Focus Management

Focus management means **deliberately controlling where keyboard focus goes**, especially after UI changes.

### Common cases

* Opening a modal → move focus inside modal
* Closing modal → return focus to trigger button
* Navigating to a new page → move focus appropriately
* Showing an error → make important information available to the user

### React example

```jsx
const inputRef = useRef(null);

useEffect(() => {
  if (isOpen) {
    inputRef.current?.focus();
  }
}, [isOpen]);

return (
  <input
    ref={inputRef}
    aria-label="User name"
  />
);
```

### Modal example — conceptually

```text
Click "Delete"
      ↓
Open modal
      ↓
Move focus → modal heading/input
      ↓
User interacts with modal
      ↓
Close modal
      ↓
Return focus → "Delete" button
```

**Interview:** Good modal accessibility also requires appropriate dialog semantics and typically **focus trapping/containment** while the modal is open.

---

# 10. `alt` Text

Provides a text alternative for images.

```jsx
<img
  src="/profile.jpg"
  alt="John Smith"
/>
```

### Informative image

```jsx
<img
  src="/sales-chart.png"
  alt="Sales increased by 20% in 2026"
/>
```

### Decorative image

Use empty alt:

```jsx
<img
  src="/decoration.png"
  alt=""
/>
```

This tells screen readers to ignore the decorative image.

### ❌ Avoid

```jsx
<img src="/profile.jpg" alt="image" />
```

`alt` should communicate the **purpose/content**, not simply say "image."

---

# ⭐ Important Interview Concepts

### Semantic HTML first

```jsx
// ✅
<button>Submit</button>

// ❌
<div role="button">Submit</div>
```

Native elements provide built-in accessibility behavior.

### Form accessibility

```jsx
<label htmlFor="email">Email</label>

<input id="email" type="email" />
```

Don't rely only on placeholder text as the label.

### Dynamic content

For important dynamically displayed messages:

```jsx
<div role="alert">
  Payment failed.
</div>
```

For less urgent status updates, appropriate live-region semantics such as `role="status"` can be used.

---

# Quick Revision

| Concept                 | Purpose                                                   |
| ----------------------- | --------------------------------------------------------- |
| **ARIA**                | Add accessibility semantics when native HTML isn't enough |
| **role**                | Defines what an element represents                        |
| **aria-label**          | Directly provides accessible name                         |
| **aria-labelledby**     | Gets accessible name from another element                 |
| **aria-describedby**    | Provides additional description                           |
| **tabIndex={0}**        | Normal keyboard tab order                                 |
| **tabIndex={-1}**       | Programmatic focus, not Tab                               |
| **Keyboard navigation** | UI usable without mouse                                   |
| **Screen reader**       | Reads/interprets accessible UI                            |
| **Focus management**    | Controls focus during UI changes                          |
| **alt**                 | Text alternative for images                               |

### 🎯 5-year React interview answer

If asked **"How do you make a React application accessible?"**, cover:

> **Semantic HTML → keyboard accessibility → proper labels → ARIA when needed → meaningful alt text → focus management → screen-reader testing → sufficient color contrast → accessible forms and error messages.**

And remember the golden rule:

> **Don't add ARIA just because you can. Correct semantic HTML is usually the best accessibility solution.**
