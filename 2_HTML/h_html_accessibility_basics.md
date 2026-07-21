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

### 1. How would you explain HTML Accessibility Basics in a real project?

It means choosing markup that describes meaning first: headings for hierarchy, landmarks for page regions, labels for controls, and native elements for behavior.

### 2. What happens internally when HTML Accessibility Basics is involved?

The browser parses markup into the DOM and accessibility tree, so incorrect HTML can create bugs even when the screen looks visually correct.

### 3. How do you debug issues related to HTML Accessibility Basics?

I check DOM order, headings, labels, alt text, link/button purpose, form submission, keyboard navigation, and whether the page still works with limited JavaScript.

### 4. What is the biggest production risk with HTML Accessibility Basics?

The biggest risk is building something that works for the demo state but fails with real content, slow networks, accessibility needs, errors, or future changes.

### 5. What should a senior engineer look for in code review?

They should check the mental model, edge cases, accessibility, performance cost, naming, state ownership, test coverage, and whether the simpler native/platform option was considered.

---

# Hands-on Exercises

## Exercise 1

Audit a small page for labels, headings, alt text, landmarks, and keyboard access.

### Solution

Fix missing labels, unclear links, skipped headings, unlabeled buttons, and inaccessible custom controls.

---

# Senior Frontend Engineer Takeaway

For senior-level work, HTML Accessibility Basics is not only a syntax topic. You should be able to explain the mental model, choose the right pattern for a product requirement, identify common failure modes, and verify behavior through tooling, tests, and browser inspection.
