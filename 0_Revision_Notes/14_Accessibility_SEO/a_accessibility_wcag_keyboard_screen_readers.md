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

### 1. Why does Semantic HTML matter in Accessibility, WCAG, Keyboard, and Screen Readers?

Semantic HTML means Native meaning and behavior. Use Accessibility, WCAG, Keyboard, and Screen Readers to solve the specific problem described in this note.

### 2. How does Focus affect the implementation?

Focus means Current keyboard interaction target. Understand the browser, runtime, or React behavior behind Accessibility, WCAG, Keyboard, and Screen Readers before choosing an implementation.

### 3. What mistake should you avoid around skipping real edge cases?

Avoid skipping real edge cases. Prefer the simplest reliable approach and verify it with a small example.

### 4. How would you debug a production issue related to Accessibility, WCAG, Keyboard, and Screen Readers?

Reproduce the issue, inspect the relevant state or DOM, and reduce it to a small failing case. Check edge cases, browser behavior, and tests before changing the implementation.

### 5. What would you check in code review for Accessibility, WCAG, Keyboard, and Screen Readers?

Check correctness, edge cases, readability, accessibility, performance, and test coverage. Confirm the chosen approach matches the problem and does not add unnecessary complexity.

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
