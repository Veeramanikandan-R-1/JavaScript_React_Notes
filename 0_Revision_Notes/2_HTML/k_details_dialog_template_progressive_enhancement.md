# Revision Notes: details, dialog, template, and Progressive Enhancement

* HTML provides the semantic foundation for web pages and application screens.
* Correct HTML improves accessibility, SEO, browser behavior, forms, navigation, and resilience when JavaScript fails.
* Modern HTML includes useful built-in elements that can replace fragile custom JavaScript when used correctly.
* Best practice: Use native elements before custom widgets.
* Best practice: Keep heading and landmark structure meaningful.
* Best practice: Make controls work with keyboard and forms by default.
* Best practice: Use metadata and loading attributes intentionally.
* Best practice: Test the page with JavaScript disabled when progressive enhancement matters.
* Avoid: Replacing native elements with generic `div`s.
* Avoid: Adding JavaScript for behavior the browser already provides.
* Avoid: Forgetting labels, keyboard behavior, and useful text alternatives.
* Avoid: Testing only the visual result instead of DOM meaning and accessibility.

---

# Cheat Sheet

| Concept | Practical meaning |
| ------- | ----------------- |
| Semantic element | An element chosen for meaning, not visual appearance. |
| Native behavior | Built-in browser interaction such as form submission, disclosure, or dialog behavior. |
| Progressive enhancement | A baseline experience that works before optional JavaScript upgrades it. |
| Accessible name | The name assistive technologies announce for a control. |
| Metadata | Document information used by browsers, crawlers, and sharing tools. |

---

# Interview Questions & Answers

### 1. How would you explain details, dialog, template, and Progressive Enhancement in a real project?

It means choosing markup that describes meaning first: headings for hierarchy, landmarks for page regions, labels for controls, and native elements for behavior.

### 2. What happens internally when details, dialog, template, and Progressive Enhancement is involved?

The browser parses markup into the DOM and accessibility tree, so incorrect HTML can create bugs even when the screen looks visually correct.

### 3. How do you debug issues related to details, dialog, template, and Progressive Enhancement?

I check DOM order, headings, labels, alt text, link/button purpose, form submission, keyboard navigation, and whether the page still works with limited JavaScript.

### 4. What is the biggest production risk with details, dialog, template, and Progressive Enhancement?

The biggest risk is building something that works for the demo state but fails with real content, slow networks, accessibility needs, errors, or future changes.

### 5. What should a senior engineer look for in code review?

They should check the mental model, edge cases, accessibility, performance cost, naming, state ownership, test coverage, and whether the simpler native/platform option was considered.

---

# Quick Practice

1. Explain details, dialog, template, and Progressive Enhancement in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
