# HTML Accessibility Basics (Senior Frontend Engineer Perspective)

Before going deeper into frameworks or libraries, understand this topic as part of real frontend engineering: the accessibility wins that come from correct HTML.

---

# 1. Fundamentals

* Accessibility starts with semantic HTML.
* Most accessible UI is built by choosing the right native elements, labels, text alternatives, heading order, and focus behavior.
* ARIA can help when semantics are missing, but it cannot fix poor interaction design by itself.

---

# 2. Core Concepts

| Concept | Practical meaning |
| ------- | ----------------- |
| Accessible name | The label or text assistive tech announces for a control. |
| Focus order | The sequence keyboard users move through interactive elements. |
| Alt text | Text alternative for meaningful images. |
| Landmark | A major page region such as navigation or main content. |
| ARIA | Attributes that add semantics when native HTML is not enough. |

---

# 3. Internal Working

* Browsers build an accessibility tree from DOM semantics, labels, roles, states, and relationships.
* A button's accessible name can come from text content, `aria-label`, or associated labeling patterns.
* Elements hidden with `display: none` are removed from the accessibility tree.

---

# 4. Common Mistakes

* Adding ARIA roles that conflict with native semantics.
* Removing focus outlines without a visible replacement.
* Using icons as buttons without accessible names.
* Creating custom controls that do not support keyboard interaction.

---

# 5. Best Practices

* Use semantic HTML before ARIA.
* Test with only the keyboard.
* Ensure every interactive control has a visible label or accessible name.
* Use headings and landmarks to make the page navigable.
* Keep visual order and DOM order aligned.

---

# 6. Code Example

```html
<button type="button" aria-label="Close dialog">
  <span aria-hidden="true">x</span>
</button>

<label for="search">Search products</label>
<input id="search" name="search" type="search">
```

---

# 7. Real-world Scenarios

* An icon-only close button needs `aria-label` because there is no visible text.
* A modal must move focus inside the dialog and return it when closed.
* A skip link helps keyboard users bypass repeated navigation.

---

# 8. Senior Deep Dive

## When to Use

* Use semantic elements whenever the element's built-in meaning matches the job.
* Use ARIA only to fill semantic gaps, not to overwrite good native HTML.
* Use progressive enhancement for flows that should remain usable under partial loading or JavaScript failure.

## Debug Checklist

* Inspect the DOM tree, not only the visual page.
* Check the accessibility tree, labels, alt text, landmark names, and heading order.
* Submit forms manually and confirm `name` values, methods, validation, and server payloads.

## Code Review Checklist

* Are links and buttons used according to purpose?
* Can a keyboard user complete the flow?
* Does the document have useful title, language, metadata, headings, and landmarks?


---

# Revision Notes

* HTML Accessibility Basics matters because it affects real users, future maintainers, and production behavior.
* Learn the mental model before memorizing syntax.
* Use browser DevTools, tests, and small examples to verify behavior.
* Accessibility starts with semantic HTML.
* Most accessible UI is built by choosing the right native elements, labels, text alternatives, heading order, and focus behavior.
* ARIA can help when semantics are missing, but it cannot fix poor interaction design by itself.

---

# Cheat Sheet

| Concept | Practical meaning |
| ------- | ----------------- |
| Accessible name | The label or text assistive tech announces for a control. |
| Focus order | The sequence keyboard users move through interactive elements. |
| Alt text | Text alternative for meaningful images. |
| Landmark | A major page region such as navigation or main content. |
| ARIA | Attributes that add semantics when native HTML is not enough. |

---

# Interview Questions with Answers

### 1. What is an accessible name, and how do you debug it?

An accessible name is the text assistive tech uses to identify a control. It can come from a label, text content, `alt`, `aria-label`, or `aria-labelledby` depending on the element. I debug it with the browser accessibility tree and by checking the computed name, not only the visible UI.

### 2. When should you use ARIA?

Use ARIA when native HTML cannot express the needed semantics. Do not use ARIA to cover up poor element choice. A real `button` is better than `div role="button"` because native behavior comes with semantics, keyboard support, and browser expectations.

### 3. What is wrong with positive `tabindex` values?

Positive `tabindex` creates a custom focus order that quickly becomes confusing and hard to maintain. I prefer natural DOM order, use `tabindex="0"` sparingly for custom focusable elements, and `tabindex="-1"` for programmatic focus targets like modal containers or error summaries.

### 4. A toast appears after save. Should it use `aria-live`?

If it communicates important status, yes, usually with a polite live region. If it is an urgent error, `role="alert"` may be appropriate. I avoid overusing live regions because too many announcements can make the experience noisy.

### 5. What is your minimum accessibility checklist for a feature?

Keyboard completion, visible focus, meaningful labels, correct link/button usage, heading order, error association, color contrast, reduced-motion behavior where relevant, and screen-reader names for icon-only controls. I also test the main workflow without a mouse.

---

# Hands-on Exercises

## Exercise 1

Audit a small page for labels, headings, alt text, landmarks, and keyboard access.

### Solution

Fix missing labels, unclear links, skipped headings, unlabeled buttons, and inaccessible custom controls.

---

# Senior Frontend Engineer Takeaway

For senior-level work, HTML Accessibility Basics is not only a syntax topic. You should be able to explain the mental model, choose the right pattern for a product requirement, identify common failure modes, and verify behavior through tooling, tests, and browser inspection.
