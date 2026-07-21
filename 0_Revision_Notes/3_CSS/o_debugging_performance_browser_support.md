# Revision Notes: CSS Debugging, Performance, and Browser Support

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

# Interview Questions & Answers

### 1. How would you explain CSS Debugging, Performance, and Browser Support in a real project?

I start from the layout requirement, decide whether normal flow, flexbox, grid, or positioning fits, then use the cascade deliberately.

### 2. What happens internally when CSS Debugging, Performance, and Browser Support is involved?

The browser resolves cascade and computed styles, calculates boxes, lays them out, paints, and composites. A CSS bug usually lives in one of those steps.

### 3. How do you debug issues related to CSS Debugging, Performance, and Browser Support?

I inspect the element, check computed styles, box model, active media/container queries, overwritten rules, overflow, and stacking contexts.

### 4. What is the biggest production risk with CSS Debugging, Performance, and Browser Support?

The biggest risk is building something that works for the demo state but fails with real content, slow networks, accessibility needs, errors, or future changes.

### 5. What should a senior engineer look for in code review?

They should check the mental model, edge cases, accessibility, performance cost, naming, state ownership, test coverage, and whether the simpler native/platform option was considered.

---

# Quick Practice

1. Explain CSS Debugging, Performance, and Browser Support in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
