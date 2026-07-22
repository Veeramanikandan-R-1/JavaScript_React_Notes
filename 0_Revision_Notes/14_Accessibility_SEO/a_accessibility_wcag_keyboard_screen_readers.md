# Revision Notes: Accessibility, WCAG, Keyboard, and Screen Readers

* Accessibility means people can use the product across abilities, devices, preferences, and assistive technologies.
* Accessible interfaces are usually more robust for everyone.
* SEO and accessibility both benefit from meaningful structure, fast pages, and clear content.
* Best practice: Use semantic elements.
* Best practice: Test keyboard flows.
* Best practice: Provide accessible names and error messages.
* Best practice: Make metadata unique and server-visible where SEO matters.
* Avoid: Removing focus outlines.
* Avoid: Using ARIA instead of native elements.
* Avoid: Relying on color alone.
* Avoid: Shipping client-only pages that have empty metadata.

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

# Quick Practice

1. Explain one realistic production use case for Accessibility, WCAG, Keyboard, and Screen Readers in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.

---

# Added from `react_1.docx`

* Start with semantic HTML before ARIA.
* Use `aria-live` or `role="alert"` for important dynamic updates.
* Manage focus when modals, panels, or routes change.
* Test with keyboard, Lighthouse, axe, JSX a11y linting, and screen readers such as NVDA, VoiceOver, and JAWS.
