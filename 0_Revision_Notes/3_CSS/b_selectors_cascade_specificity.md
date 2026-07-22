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

### 1. A class style is not applying even though the selector matches. How do you debug it?

I inspect computed styles and find which declaration is winning. Then I check cascade origin, `!important`, cascade layers, specificity, media/container conditions, and source order. I do not add a stronger selector until I understand why the current one lost.

### 2. Explain specificity with a real example.

`.card .title` beats `.title` because it is more specific. `#app .title` beats both because an ID has higher specificity. Inline styles beat author stylesheet rules unless `!important` changes priority. In production, the better fix is often reducing selector depth, not escalating the fight.

### 3. When is `!important` acceptable?

Rarely: utility overrides, third-party integration boundaries, user-agent accessibility fixes, or emergency containment where the reason is documented. If `!important` becomes normal application styling, it usually means the cascade architecture is weak.

### 4. What is inheritance in CSS, and which properties commonly inherit?

Inheritance means some computed values flow from parent to child, commonly text-related properties like `color`, `font-family`, `font-size`, and `line-height`. Layout properties like `margin`, `padding`, and `display` usually do not inherit. I verify in computed styles rather than relying on memory.

### 5. How do cascade layers help in a large app?

Layers let teams define ordering between groups of styles, such as reset, base, components, utilities, and overrides. They reduce accidental wins from source order alone. I still keep selectors shallow because layers do not replace good ownership.

---

# Quick Practice

1. Explain one realistic production use case for Selectors, Cascade, Specificity, and Inheritance in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
