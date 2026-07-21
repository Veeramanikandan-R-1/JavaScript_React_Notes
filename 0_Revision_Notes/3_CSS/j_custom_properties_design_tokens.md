# Revision Notes: Custom Properties and Design Tokens

* CSS custom properties store reusable values directly in CSS.
* They cascade, inherit, and can change at runtime.
* Design tokens connect product design decisions to implementation.
* Best practice: Use semantic names like `--color-danger` instead of `--red-500` for usage tokens.
* Best practice: Separate primitive tokens from semantic tokens in larger systems.
* Best practice: Override tokens at theme or component boundaries.
* Best practice: Document token intent.
* Avoid: Naming variables after current colors instead of purpose.
* Avoid: Creating hundreds of tokens with no usage rules.
* Avoid: Using custom properties where static local values are clearer.
* Avoid: Forgetting fallbacks for reusable components.

---

# Cheat Sheet

| Concept | Practical meaning |
| ------- | ----------------- |
| Custom property | A CSS variable such as `--color-bg`. |
| Token | A named design decision for color, spacing, typography, radius, or shadow. |
| Fallback | A default value in `var(--name, fallback)`. |
| Theme | A group of token values. |
| Component API | Custom properties exposed for controlled component styling. |

---

# Interview Questions & Answers

### 1. How would you explain Custom Properties and Design Tokens in a real project?

I start from the layout requirement, decide whether normal flow, flexbox, grid, or positioning fits, then use the cascade deliberately.

### 2. What happens internally when Custom Properties and Design Tokens is involved?

The browser resolves cascade and computed styles, calculates boxes, lays them out, paints, and composites. A CSS bug usually lives in one of those steps.

### 3. How do you debug issues related to Custom Properties and Design Tokens?

I inspect the element, check computed styles, box model, active media/container queries, overwritten rules, overflow, and stacking contexts.

### 4. What is the biggest production risk with Custom Properties and Design Tokens?

The biggest risk is building something that works for the demo state but fails with real content, slow networks, accessibility needs, errors, or future changes.

### 5. What should a senior engineer look for in code review?

They should check the mental model, edge cases, accessibility, performance cost, naming, state ownership, test coverage, and whether the simpler native/platform option was considered.

---

# Quick Practice

1. Explain Custom Properties and Design Tokens in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
