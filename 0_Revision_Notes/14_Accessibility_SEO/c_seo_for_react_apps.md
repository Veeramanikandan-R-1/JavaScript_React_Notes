# Revision Notes: SEO for React Apps

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

# Interview Questions & Answers

### 1. How would you explain SEO for React Apps in a real project?

Accessibility means the feature works with keyboard, screen readers, zoom, reduced motion, color contrast needs, and different input devices.

### 2. What happens internally when SEO for React Apps is involved?

Browsers expose semantics through the accessibility tree. Bad markup, missing labels, broken focus, and incorrect ARIA create real blockers.

### 3. How do you debug issues related to SEO for React Apps?

I test keyboard flow, focus order, accessible names, labels, announcements, color contrast, motion preferences, and error recovery.

### 4. What is the biggest production risk with SEO for React Apps?

The biggest risk is building something that works for the demo state but fails with real content, slow networks, accessibility needs, errors, or future changes.

### 5. What should a senior engineer look for in code review?

They should check the mental model, edge cases, accessibility, performance cost, naming, state ownership, test coverage, and whether the simpler native/platform option was considered.

---

# Quick Practice

1. Explain SEO for React Apps in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
