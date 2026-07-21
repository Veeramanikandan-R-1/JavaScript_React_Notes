# Revision Notes: Flexbox Layout

* Flexbox is for one-dimensional layout: a row or a column.
* It excels at distributing space, aligning items, and letting components adapt to available width.
* Understanding main axis and cross axis removes most flexbox confusion.
* Best practice: Use `gap` for spacing.
* Best practice: Set `min-width: 0` on flexible text containers.
* Best practice: Use `align-items` for cross-axis alignment.
* Best practice: Use grid when rows and columns both matter.
* Avoid: Using flexbox for complex two-dimensional page grids.
* Avoid: Forgetting `flex-wrap` when items should wrap.
* Avoid: Using margins for gaps.
* Avoid: Expecting `justify-content` to align on the cross axis.

---

# Cheat Sheet

| Concept | Practical meaning |
| ------- | ----------------- |
| Flex container | Parent with `display: flex`. |
| Main axis | Direction controlled by `flex-direction`. |
| Cross axis | Axis perpendicular to the main axis. |
| `flex` shorthand | Controls grow, shrink, and basis. |
| Gap | Space between flex items without margin hacks. |

---

# Interview Questions & Answers

### 1. How would you explain Flexbox Layout in a real project?

I start from the layout requirement, decide whether normal flow, flexbox, grid, or positioning fits, then use the cascade deliberately.

### 2. What happens internally when Flexbox Layout is involved?

The browser resolves cascade and computed styles, calculates boxes, lays them out, paints, and composites. A CSS bug usually lives in one of those steps.

### 3. How do you debug issues related to Flexbox Layout?

I inspect the element, check computed styles, box model, active media/container queries, overwritten rules, overflow, and stacking contexts.

### 4. What is the biggest production risk with Flexbox Layout?

The biggest risk is building something that works for the demo state but fails with real content, slow networks, accessibility needs, errors, or future changes.

### 5. What should a senior engineer look for in code review?

They should check the mental model, edge cases, accessibility, performance cost, naming, state ownership, test coverage, and whether the simpler native/platform option was considered.

---

# Quick Practice

1. Explain Flexbox Layout in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
