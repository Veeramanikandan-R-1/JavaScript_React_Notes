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

# Interview Questions with Answers

### 1. Why does Flex container matter in Flexbox Layout?

Flex container means Parent with `display: flex`. Use Flexbox Layout to solve the specific problem described in this note.

### 2. How does Main axis affect the implementation?

Main axis means Direction controlled by `flex-direction`. Understand the browser, runtime, or React behavior behind Flexbox Layout before choosing an implementation.

### 3. What mistake should you avoid around skipping real edge cases?

Avoid skipping real edge cases. Prefer the simplest reliable approach and verify it with a small example.

### 4. How would you debug a production issue related to Flexbox Layout?

Reproduce the issue, inspect the relevant state or DOM, and reduce it to a small failing case. Check edge cases, browser behavior, and tests before changing the implementation.

### 5. What would you check in code review for Flexbox Layout?

Check correctness, edge cases, readability, accessibility, performance, and test coverage. Confirm the chosen approach matches the problem and does not add unnecessary complexity.

---

# Quick Practice

1. Explain one realistic production use case for Flexbox Layout in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
