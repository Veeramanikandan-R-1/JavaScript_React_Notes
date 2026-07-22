# Revision Notes: Selectors, Cascade, Specificity, and Inheritance

* The cascade decides which declaration applies when multiple CSS rules target the same element.
* Specificity, source order, importance, cascade layers, inheritance, and origin all matter.
* Senior frontend developers reduce specificity battles by designing style boundaries.
* Best practice: Keep selectors shallow.
* Best practice: Use classes for component styling.
* Best practice: Use `:where()` to intentionally keep specificity low.
* Best practice: Reserve `!important` for utility overrides or third-party escape hatches.
* Avoid: Solving every conflict with more specific selectors.
* Avoid: Writing selectors tied to deep DOM structure.
* Avoid: Assuming a rule lost because it loaded late when specificity was the real reason.

---

# Cheat Sheet

| Concept | Practical meaning |
| ------- | ----------------- |
| Specificity | Selector weight used when declarations compete. |
| Inheritance | Some properties flow from parent to child. |
| Source order | Later rules win when priority is otherwise equal. |
| Cascade layer | A named ordering system for groups of styles. |
| `!important` | An override that should be rare and deliberate. |

---

# Interview Questions with Answers

### 1. Why does Source map matter in Selectors, Cascade, Specificity, and Inheritance?

Source map means A mapping from bundled code back to original source files. In interviews, connect it to Selectors, Cascade, Specificity, and Inheritance by explaining the concrete UI behavior, failure state, and tradeoff.

### 2. How does Minified stack trace affect the implementation?

Minified stack trace means A production error trace that needs mapping to be readable. Implementation depends on ownership, lifecycle, and edge cases, not only naming the API.

### 3. What mistake should you avoid around skipping real edge cases?

Avoid skipping real edge cases. Prefer the simplest reliable approach and verify it with a small example.

### 4. How would you debug a production issue related to Selectors, Cascade, Specificity, and Inheritance?

Reproduce the issue, inspect the relevant state or DOM, and reduce it to a small failing case. Check edge cases, browser behavior, and tests before changing the implementation.

### 5. What would you check in code review for Selectors, Cascade, Specificity, and Inheritance?

Check correctness, edge cases, readability, accessibility, performance, and test coverage. Confirm the chosen approach matches the problem and does not add unnecessary complexity.

---

# Quick Practice

1. Explain one realistic production use case for Selectors, Cascade, Specificity, and Inheritance in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
