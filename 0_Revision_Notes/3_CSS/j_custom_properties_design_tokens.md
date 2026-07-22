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

### 1. Why does Custom property matter in Custom Properties and Design Tokens?

Custom property means A CSS variable such as `--color-bg`. Use Custom Properties and Design Tokens to solve the specific problem described in this note.

### 2. How does Token affect the implementation?

Token means A named design decision for color, spacing, typography, radius, or shadow. Understand the browser, runtime, or React behavior behind Custom Properties and Design Tokens before choosing an implementation.

### 3. What mistake should you avoid around skipping real edge cases?

Avoid skipping real edge cases. Prefer the simplest reliable approach and verify it with a small example.

### 4. How would you debug a production issue related to Custom Properties and Design Tokens?

Reproduce the issue, inspect the relevant state or DOM, and reduce it to a small failing case. Check edge cases, browser behavior, and tests before changing the implementation.

### 5. What would you check in code review for Custom Properties and Design Tokens?

Check correctness, edge cases, readability, accessibility, performance, and test coverage. Confirm the chosen approach matches the problem and does not add unnecessary complexity.

---

# Quick Practice

1. Explain one realistic production use case for Custom Properties and Design Tokens in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
