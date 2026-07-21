# Revision Notes: CSS Architecture, BEM, and CSS Modules

* CSS architecture prevents style leaks, specificity wars, and accidental regressions.
* The best architecture depends on team size, framework, design system, and release cadence.
* BEM, CSS Modules, utility CSS, and CSS-in-JS all solve scoping and consistency differently.
* Best practice: Pick one primary strategy and document it.
* Best practice: Keep component styles close to components.
* Best practice: Use tokens for design consistency.
* Best practice: Prefer explicit variants over selector gymnastics.
* Avoid: Mixing naming systems without rules.
* Avoid: Styling child internals from distant parents.
* Avoid: Letting one component depend on another component's private class names.
* Avoid: Adding global overrides for one-off fixes.

---

# Cheat Sheet

| Concept | Practical meaning |
| ------- | ----------------- |
| BEM | Block, element, modifier naming convention. |
| CSS Modules | Build-time local class name scoping. |
| Utility class | Small single-purpose class. |
| Design system | Reusable components and tokens. |
| Style boundary | A rule that defines ownership and prevents leaks. |

---

# Interview Questions & Answers

### 1. How would you explain CSS Architecture, BEM, and CSS Modules in a real project?

I start from the layout requirement, decide whether normal flow, flexbox, grid, or positioning fits, then use the cascade deliberately.

### 2. What happens internally when CSS Architecture, BEM, and CSS Modules is involved?

The browser resolves cascade and computed styles, calculates boxes, lays them out, paints, and composites. A CSS bug usually lives in one of those steps.

### 3. How do you debug issues related to CSS Architecture, BEM, and CSS Modules?

I inspect the element, check computed styles, box model, active media/container queries, overwritten rules, overflow, and stacking contexts.

### 4. What is the biggest production risk with CSS Architecture, BEM, and CSS Modules?

The biggest risk is building something that works for the demo state but fails with real content, slow networks, accessibility needs, errors, or future changes.

### 5. What should a senior engineer look for in code review?

They should check the mental model, edge cases, accessibility, performance cost, naming, state ownership, test coverage, and whether the simpler native/platform option was considered.

---

# Quick Practice

1. Explain CSS Architecture, BEM, and CSS Modules in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
