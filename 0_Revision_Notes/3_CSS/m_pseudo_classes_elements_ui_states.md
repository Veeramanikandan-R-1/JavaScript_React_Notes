# Revision Notes: Pseudo-classes, Pseudo-elements, and UI States

* CSS turns structured content into usable visual interfaces.
* Correct CSS depends on the cascade, box model, layout algorithms, responsive constraints, and browser rendering.
* Production CSS must handle real content, interaction states, accessibility, browser support, and maintainability.
* Best practice: Choose the layout model before writing declarations.
* Best practice: Keep selectors shallow and styles close to ownership boundaries.
* Best practice: Use tokens for repeated design decisions.
* Best practice: Inspect computed styles, box model, queries, and stacking contexts in DevTools.
* Best practice: Respect responsive content and accessibility states.
* Avoid: Using fixed dimensions that break with real content.
* Avoid: Fighting specificity with deeper selectors.
* Avoid: Using positioning for layout that should be flexbox or grid.
* Avoid: Ignoring focus, disabled, validation, reduced-motion, and responsive states.

---

# Cheat Sheet

| Concept | Practical meaning |
| ------- | ----------------- |
| Selector | Targets elements for styling. |
| Cascade | Chooses winning declarations. |
| Box | The rendered space an element occupies. |
| Layout algorithm | Normal flow, flexbox, grid, or positioning rules that arrange boxes. |
| State selector | A selector that responds to interaction, validation, structure, or component state. |

---

# Interview Questions with Answers

### 1. Why does Persistent connection matter in Pseudo-classes, Pseudo-elements, and UI States?

Persistent connection means A long-lived channel for receiving updates. In interviews, connect it to Pseudo-classes, Pseudo-elements, and UI States by explaining the concrete UI behavior, failure state, and tradeoff.

### 2. How does Reconnection affect the implementation?

Reconnection means Recovery logic after network loss. Implementation depends on ownership, lifecycle, and edge cases, not only naming the API.

### 3. What mistake should you avoid around skipping real edge cases?

Avoid skipping real edge cases. Prefer the simplest reliable approach and verify it with a small example.

### 4. How would you debug a production issue related to Pseudo-classes, Pseudo-elements, and UI States?

Reproduce the issue, inspect the relevant state or DOM, and reduce it to a small failing case. Check edge cases, browser behavior, and tests before changing the implementation.

### 5. What would you check in code review for Pseudo-classes, Pseudo-elements, and UI States?

Check correctness, edge cases, readability, accessibility, performance, and test coverage. Confirm the chosen approach matches the problem and does not add unnecessary complexity.

---

# Quick Practice

1. Explain one realistic production use case for Pseudo-classes, Pseudo-elements, and UI States in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
