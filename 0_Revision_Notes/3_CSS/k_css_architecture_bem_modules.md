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

### 1. How do you prevent global CSS from breaking unrelated screens?

Use clear ownership boundaries: component-scoped styles, CSS Modules, BEM, or a controlled utility system. Avoid broad selectors like `.content button`, keep selectors shallow, and define where global reset, tokens, typography, and layout rules are allowed.

### 2. How would you compare BEM, CSS Modules, and utility classes in an interview?

BEM gives readable global class names but relies on discipline. CSS Modules give local scoping at build time. Utility classes create consistency through constrained primitives but can make markup dense if the team has no extraction strategy.

### 3. What does a good class name communicate?

It communicates component ownership and purpose, not the current visual implementation. `.product-card__price` is more maintainable than `.large-blue-text` because the design can change while the role stays stable.

### 4. How would you structure CSS for a large app with a design system?

Keep global files limited to reset, tokens, base typography, and app shell rules. Put component styles near components, expose documented variants through props/classes, and centralize shared patterns in design-system components instead of copying CSS between features.

### 5. What CSS architecture smells do you look for in a pull request?

Deep selectors, repeated magic values, `!important`, global overrides for one screen, class names tied to color or position, and copied component styles. I also check that new variants do not bypass tokens, accessibility states, or existing component APIs.

---

# Quick Practice

1. Explain one realistic production use case for CSS Architecture, BEM, and CSS Modules in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
