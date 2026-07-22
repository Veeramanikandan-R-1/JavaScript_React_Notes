# Revision Notes: Modern CSS Features

* Modern CSS reduces JavaScript and fragile hacks.
* Use newer features when browser support matches project requirements.
* Progressive enhancement lets advanced CSS improve capable browsers while preserving baseline behavior.
* Best practice: Use modern CSS to simplify, not impress.
* Best practice: Prefer logical properties for reusable components.
* Best practice: Use layers to organize reset, base, components, and utilities.
* Best practice: Document browser support assumptions.
* Avoid: Using new CSS without checking target browser support.
* Avoid: Replacing readable CSS with clever selectors.
* Avoid: Using nesting to create overly deep selectors.
* Avoid: Forgetting fallback behavior.

---

# Cheat Sheet

| Concept | Practical meaning |
| ------- | ----------------- |
| Logical properties | Use writing-mode-aware properties like `margin-inline`. |
| `:is()` | Groups selector alternatives. |
| `:where()` | Groups selectors with zero specificity. |
| Cascade layers | Control broad style ordering. |
| Nesting | Write related selectors together where supported by tooling/runtime. |
| Color functions | Create adaptable color systems. |

---

# Interview Questions with Answers

### 1. When would you use `:is()`, `:where()`, and `:has()`?

Use `:is()` to group selector alternatives without repeating long selectors. Use `:where()` for grouping when you want zero specificity, often in resets or design-system base styles. Use `:has()` when a parent needs styling based on its children or state.

### 2. What is a practical use case for `:has()` in component styling?

You can style a form row when it contains an invalid input, a card when it contains a selected checkbox, or a navigation item when it contains the active link. It can remove small JavaScript state plumbing, but you should still check browser support and selector cost.

### 3. Why do logical properties matter in modern frontend work?

Logical properties like `margin-inline`, `padding-block`, and `inset-inline-start` adapt to writing mode and direction. They make components easier to internationalize for RTL languages and vertical writing modes.

### 4. How do container queries change responsive component design?

Media queries react to viewport size; container queries react to the component's available space. They are useful when the same component appears in a sidebar, grid, modal, and full-width page with different layouts.

### 5. How do you decide whether a modern CSS feature is safe to ship?

Check the product's browser support matrix, analytics, graceful fallback path, and test coverage. I also look for whether the feature simplifies the implementation enough to justify using it.

---

# Quick Practice

1. Explain one realistic production use case for Modern CSS Features in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
