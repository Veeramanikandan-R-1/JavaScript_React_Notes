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

# Interview Questions & Answers

### 1. How would you explain Selectors, Cascade, Specificity, and Inheritance in a real project?

I start from the layout requirement, decide whether normal flow, flexbox, grid, or positioning fits, then use the cascade deliberately.

### 2. What happens internally when Selectors, Cascade, Specificity, and Inheritance is involved?

The browser resolves cascade and computed styles, calculates boxes, lays them out, paints, and composites. A CSS bug usually lives in one of those steps.

### 3. How do you debug issues related to Selectors, Cascade, Specificity, and Inheritance?

I inspect the element, check computed styles, box model, active media/container queries, overwritten rules, overflow, and stacking contexts.

### 4. What is the biggest production risk with Selectors, Cascade, Specificity, and Inheritance?

The biggest risk is building something that works for the demo state but fails with real content, slow networks, accessibility needs, errors, or future changes.

### 5. What should a senior engineer look for in code review?

They should check the mental model, edge cases, accessibility, performance cost, naming, state ownership, test coverage, and whether the simpler native/platform option was considered.

---

# Quick Practice

1. Explain Selectors, Cascade, Specificity, and Inheritance in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
