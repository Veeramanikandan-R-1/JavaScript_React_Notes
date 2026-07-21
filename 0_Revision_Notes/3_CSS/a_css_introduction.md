# Revision Notes: CSS Introduction

* CSS controls presentation: layout, spacing, color, typography, animation, and responsive behavior.
* CSS is declarative; you describe desired styles and the browser resolves conflicts through cascade rules.
* Good CSS is predictable under changing content, screen size, language, and component composition.
* Best practice: Use a reset or normalize strategy intentionally.
* Best practice: Build from content and constraints, then add decoration.
* Best practice: Use reusable spacing, color, and typography tokens.
* Best practice: Test narrow screens and long text early.
* Avoid: Writing styles that only work for the sample content.
* Avoid: Using fixed pixel widths everywhere.
* Avoid: Fighting the cascade with repeated `!important`.
* Avoid: Ignoring browser defaults.

---

# Cheat Sheet

| Concept | Practical meaning |
| ------- | ----------------- |
| Rule | A selector plus declarations. |
| Declaration | A property-value pair. |
| Cascade | The algorithm that chooses winning declarations. |
| Box model | The space every element occupies. |
| Layout | How boxes are arranged by normal flow, flexbox, grid, and positioning. |

---

# Interview Questions & Answers

### 1. How would you explain CSS Introduction in a real project?

I start from the layout requirement, decide whether normal flow, flexbox, grid, or positioning fits, then use the cascade deliberately.

### 2. What happens internally when CSS Introduction is involved?

The browser resolves cascade and computed styles, calculates boxes, lays them out, paints, and composites. A CSS bug usually lives in one of those steps.

### 3. How do you debug issues related to CSS Introduction?

I inspect the element, check computed styles, box model, active media/container queries, overwritten rules, overflow, and stacking contexts.

### 4. What is the biggest production risk with CSS Introduction?

The biggest risk is building something that works for the demo state but fails with real content, slow networks, accessibility needs, errors, or future changes.

### 5. What should a senior engineer look for in code review?

They should check the mental model, edge cases, accessibility, performance cost, naming, state ownership, test coverage, and whether the simpler native/platform option was considered.

---

# Quick Practice

1. Explain CSS Introduction in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
