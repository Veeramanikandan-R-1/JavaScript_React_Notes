# Accessibility, WCAG, Keyboard, and Screen Readers (Senior Frontend Engineer Perspective)

Before going deeper into frameworks or libraries, understand this topic as part of real frontend engineering: inclusive frontend quality across interaction modes.

---

# 1. Fundamentals

* Accessibility means people can use the product across abilities, devices, preferences, and assistive technologies.
* Accessible interfaces are usually more robust for everyone.
* SEO and accessibility both benefit from meaningful structure, fast pages, and clear content.

---

# 2. Core Concepts

| Concept | Practical meaning |
| ------- | ----------------- |
| Semantic HTML | Native meaning and behavior. |
| Focus | Current keyboard interaction target. |
| Accessible name | Text announced for a control. |
| Metadata | Machine-readable page description. |
| Server rendering | HTML available before client JavaScript executes. |

---

# 3. Internal Working

* Browsers derive the accessibility tree from DOM, roles, labels, states, and relationships.
* Crawlers and social bots read HTML, links, metadata, and rendered content with varying JavaScript support.
* Focus management is runtime state and must be handled when UI appears, disappears, or traps interaction.

---

# 4. Common Mistakes

* Removing focus outlines.
* Using ARIA instead of native elements.
* Relying on color alone.
* Shipping client-only pages that have empty metadata.

---

# 5. Best Practices

* Use semantic elements.
* Test keyboard flows.
* Provide accessible names and error messages.
* Make metadata unique and server-visible where SEO matters.

---

# 6. Code Example

```html
<main>
  <h1>Account settings</h1>
  <button type="button" aria-expanded="false" aria-controls="security-menu">
    Security options
  </button>
  <div id="security-menu" hidden>
    <a href="/settings/password">Change password</a>
  </div>
</main>
```

---

# 7. Real-world Scenarios

* A modal traps focus correctly.
* A React product page exposes metadata for sharing.
* A keyboard user completes a form without a mouse.

---

# 7.1 React Accessibility Practical Checklist

Start with semantic HTML:

* use `header`, `nav`, `main`, `section`, and `footer` for structure
* use `button` for actions
* use `a`/`Link` for navigation
* use `label` with form controls

Use ARIA only when native HTML is not enough:

```jsx
<p role="alert">Form submission failed.</p>

<div aria-live="polite">
  {items.length} items in cart.
</div>
```

Focus management:

```jsx
function StartPanel() {
  const buttonRef = React.useRef(null);

  React.useEffect(() => {
    buttonRef.current?.focus();
  }, []);

  return <button ref={buttonRef}>Start</button>;
}
```

Testing tools:

* keyboard-only navigation
* browser Accessibility panel
* Lighthouse
* axe DevTools
* `eslint-plugin-jsx-a11y`
* screen readers such as NVDA, VoiceOver, and JAWS

Senior rule: accessibility is not only ARIA. It is semantics, labels, focus, keyboard, announcements, contrast, motion, and testing.

# 8. Senior Deep Dive

## When to Use

* Use accessibility checks during implementation, not as a final cleanup pass.
* Use semantic HTML and native controls before ARIA-heavy custom widgets.
* Use server-visible content and metadata where SEO matters.

## Debug Checklist

* Navigate using only the keyboard.
* Inspect accessible names, roles, states, and relationships.
* Test zoom, reduced motion, color contrast, and form error announcements.

## Code Review Checklist

* Can users identify, reach, operate, and understand every control?
* Does focus move predictably when UI opens or closes?
* Is important content available to crawlers and assistive technology?


---

# Revision Notes

* Accessibility, WCAG, Keyboard, and Screen Readers matters because it affects real users, future maintainers, and production behavior.
* Learn the mental model before memorizing syntax.
* Use browser DevTools, tests, and small examples to verify behavior.
* Accessibility means people can use the product across abilities, devices, preferences, and assistive technologies.
* Accessible interfaces are usually more robust for everyone.
* SEO and accessibility both benefit from meaningful structure, fast pages, and clear content.

---

# Cheat Sheet

| Concept | Practical meaning |
| ------- | ----------------- |
| Semantic HTML | Native meaning and behavior. |
| Focus | Current keyboard interaction target. |
| Accessible name | Text announced for a control. |
| Metadata | Machine-readable page description. |
| Server rendering | HTML available before client JavaScript executes. |

---

# Interview Questions with Answers

### 1. How do you audit a page for keyboard accessibility?

Use only the keyboard to reach every interactive control, operate it, see focus clearly, move in a logical order, escape overlays, and avoid traps. Then confirm behavior with screen-reader and automated checks where appropriate.

### 2. What is an accessible name?

It is the text assistive technology uses to identify a control. It can come from a visible label, button text, `aria-label`, `aria-labelledby`, image alt text, or related semantics.

### 3. When is ARIA useful, and when is it risky?

ARIA is useful when native HTML cannot express a needed role, state, or relationship. It is risky when used to fake semantics without implementing keyboard behavior or when it overrides useful native semantics.

### 4. How do you test color contrast and non-color cues?

Check contrast ratios for text and UI states, but also ensure errors, selection, required state, and status are not communicated by color alone. Use text, icons, borders, patterns, or announcements where needed.

### 5. What accessibility issues do you flag in review?

Non-semantic clickable elements, missing labels, hidden focus, keyboard traps, color-only feedback, inaccessible custom controls, poor heading structure, and dynamic updates that are not announced.

---

# Hands-on Exercises

## Exercise 1

Audit a UI flow related to Accessibility, WCAG, Keyboard, and Screen Readers.

### Solution

Check keyboard access, focus order, labels, roles, announcements, color contrast, zoom, and reduced motion.

## Exercise 2

Fix one issue without changing visual design.

### Solution

Prefer semantic HTML, labels, focus management, and accessible text before ARIA-heavy changes.

---

# Senior Frontend Engineer Takeaway

For senior-level work, Accessibility, WCAG, Keyboard, and Screen Readers is not only a syntax topic. You should be able to explain the mental model, choose the right pattern for a product requirement, identify common failure modes, and verify behavior through tooling, tests, and browser inspection.
