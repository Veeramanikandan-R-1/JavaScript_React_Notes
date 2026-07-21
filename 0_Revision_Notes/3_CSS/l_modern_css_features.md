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

# Interview Questions & Answers

### 1. How would you explain Modern CSS Features in a real project?

I start from the layout requirement, decide whether normal flow, flexbox, grid, or positioning fits, then use the cascade deliberately.

### 2. What happens internally when Modern CSS Features is involved?

The browser resolves cascade and computed styles, calculates boxes, lays them out, paints, and composites. A CSS bug usually lives in one of those steps.

### 3. How do you debug issues related to Modern CSS Features?

I inspect the element, check computed styles, box model, active media/container queries, overwritten rules, overflow, and stacking contexts.

### 4. What is the biggest production risk with Modern CSS Features?

The biggest risk is building something that works for the demo state but fails with real content, slow networks, accessibility needs, errors, or future changes.

### 5. What should a senior engineer look for in code review?

They should check the mental model, edge cases, accessibility, performance cost, naming, state ownership, test coverage, and whether the simpler native/platform option was considered.

---

# Quick Practice

1. Explain Modern CSS Features in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
