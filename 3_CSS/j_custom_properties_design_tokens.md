# Custom Properties and Design Tokens (Senior Frontend Engineer Perspective)

Before going deeper into frameworks or libraries, understand this topic as part of real frontend engineering: using CSS variables to build maintainable themes and component APIs.

---

# 1. Fundamentals

* CSS custom properties store reusable values directly in CSS.
* They cascade, inherit, and can change at runtime.
* Design tokens connect product design decisions to implementation.

---

# 2. Core Concepts

| Concept | Practical meaning |
| ------- | ----------------- |
| Custom property | A CSS variable such as `--color-bg`. |
| Token | A named design decision for color, spacing, typography, radius, or shadow. |
| Fallback | A default value in `var(--name, fallback)`. |
| Theme | A group of token values. |
| Component API | Custom properties exposed for controlled component styling. |

---

# 3. Internal Working

* Custom properties are resolved at computed-value time, after cascade and inheritance.
* They can hold many token types, not only colors.

---

# 4. Common Mistakes

* Naming variables after current colors instead of purpose.
* Creating hundreds of tokens with no usage rules.
* Using custom properties where static local values are clearer.
* Forgetting fallbacks for reusable components.

---

# 5. Best Practices

* Use semantic names like `--color-danger` instead of `--red-500` for usage tokens.
* Separate primitive tokens from semantic tokens in larger systems.
* Override tokens at theme or component boundaries.
* Document token intent.

---

# 6. Code Example

```css
:root {
  --color-surface: #ffffff;
  --color-text: #17202a;
  --space-field: 0.75rem;
}

[data-theme="dark"] {
  --color-surface: #111827;
  --color-text: #f9fafb;
}

.input {
  background: var(--input-bg, var(--color-surface));
  color: var(--color-text);
  padding: var(--space-field);
}
```

---

# 7. Real-world Scenarios

* Using Custom Properties and Design Tokens while building a real frontend feature.
* Debugging a production issue where Custom Properties and Design Tokens was misunderstood.
* Explaining Custom Properties and Design Tokens clearly during a frontend interview.

---

# 8. Senior Deep Dive

## When to Use

* Use normal flow for documents, flexbox for one axis, grid for two axes, and positioning for intentional overlays or offsets.
* Use custom properties and tokens when values express product design decisions.
* Use modern CSS when support is acceptable and it removes complexity.

## Debug Checklist

* Check whether the element participates in block, inline, flex, grid, or positioned layout.
* Inspect computed styles, overwritten declarations, box model, min/max constraints, overflow, and active media/container queries.
* For overlap issues, inspect containing blocks and stacking contexts before increasing `z-index`.

## Code Review Checklist

* Does the layout survive long words, translated text, zoom, and narrow screens?
* Are focus, hover, disabled, validation, and reduced-motion states handled?
* Are selectors shallow and ownership boundaries clear?


---

# Revision Notes

* Custom Properties and Design Tokens matters because it affects real users, future maintainers, and production behavior.
* Learn the mental model before memorizing syntax.
* Use browser DevTools, tests, and small examples to verify behavior.
* CSS custom properties store reusable values directly in CSS.
* They cascade, inherit, and can change at runtime.
* Design tokens connect product design decisions to implementation.

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

# Hands-on Exercises

## Exercise 1

Build a small responsive layout that demonstrates Custom Properties and Design Tokens.

### Solution

Test at narrow, medium, and wide widths; include long text; inspect computed styles and box model in DevTools.

## Exercise 2

Create one intentional broken version and debug it.

### Solution

Identify whether the issue came from cascade, box model, layout model, overflow, media query, or stacking context.

---

# Senior Frontend Engineer Takeaway

For senior-level work, Custom Properties and Design Tokens is not only a syntax topic. You should be able to explain the mental model, choose the right pattern for a product requirement, identify common failure modes, and verify behavior through tooling, tests, and browser inspection.
