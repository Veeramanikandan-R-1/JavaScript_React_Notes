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

# Interview Questions with Answers

### 1. How are CSS custom properties different from Sass variables?

Sass variables are resolved at build time. CSS custom properties exist in the browser, participate in cascade and inheritance, and can change at runtime, which makes them useful for themes, component APIs, and user preferences.

### 2. How would you name design tokens for a real product?

Use raw scale tokens for primitives, such as `--color-blue-600`, and semantic tokens for usage, such as `--color-action-primary-bg` or `--color-text-danger`. Components should depend mostly on semantic tokens so themes can change without rewriting component CSS.

### 3. How would you implement light and dark theme support with custom properties?

Define default tokens on `:root`, override semantic tokens under a theme selector such as `[data-theme="dark"]`, and update the attribute from app state or system preference. Test contrast, focus states, charts, disabled states, and third-party embedded surfaces in both themes.

### 4. What can go wrong with runtime theming?

Variables may inherit from an unexpected ancestor, fallback values may hide missing tokens, theme changes can flash during app startup, and color combinations can fail contrast. Inspect computed values in DevTools rather than only reading the source CSS.

### 5. How do design tokens help a frontend team beyond reusing colors?

They create a shared contract for spacing, typography, radius, elevation, motion, density, and states. Good tokens reduce visual drift, make redesigns cheaper, and give design, engineering, and QA the same language for reviewing UI.

---

# Quick Practice

1. Explain one realistic production use case for Custom Properties and Design Tokens in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
