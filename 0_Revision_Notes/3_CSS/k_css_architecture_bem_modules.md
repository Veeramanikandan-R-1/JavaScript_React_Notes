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

# CSS Modules Quick Notes

* File name: `Component.module.css`
* Import: `import styles from "./Component.module.css"`
* Usage: `className={styles.button}`
* Classes are locally scoped.
* Helps avoid global class collisions.
* Good for React component-level styling.

---

# Interview Questions with Answers

### 1. Why does BEM matter in CSS Architecture, BEM, and CSS Modules?

BEM means Block, element, modifier naming convention. Use CSS Architecture, BEM, and CSS Modules to solve the specific problem described in this note.

### 2. How does CSS Modules affect the implementation?

CSS Modules means Build-time local class name scoping. Understand the browser, runtime, or React behavior behind CSS Architecture, BEM, and CSS Modules before choosing an implementation.

### 3. What mistake should you avoid around skipping real edge cases?

Avoid skipping real edge cases. Prefer the simplest reliable approach and verify it with a small example.

### 4. How would you debug a production issue related to CSS Architecture, BEM, and CSS Modules?

Reproduce the issue, inspect the relevant state or DOM, and reduce it to a small failing case. Check edge cases, browser behavior, and tests before changing the implementation.

### 5. What would you check in code review for CSS Architecture, BEM, and CSS Modules?

Check correctness, edge cases, readability, accessibility, performance, and test coverage. Confirm the chosen approach matches the problem and does not add unnecessary complexity.

---

# Quick Practice

1. Explain one realistic production use case for CSS Architecture, BEM, and CSS Modules in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
