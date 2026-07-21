# Revision Notes: Box Model, Display, and Overflow

* Every element creates one or more boxes.
* The box model consists of content, padding, border, and margin.
* Display type determines how an element participates in layout.
* Best practice: Use `min-height` instead of fixed `height` for content sections.
* Best practice: Set `min-width: 0` on flex/grid children that need to shrink.
* Best practice: Reserve overflow clipping for deliberate visual behavior.
* Best practice: Inspect layout boxes in DevTools.
* Avoid: Forgetting `box-sizing: border-box`.
* Avoid: Hiding overflow to mask layout bugs.
* Avoid: Using fixed heights for content that may wrap.
* Avoid: Confusing margin with padding.

---

# Cheat Sheet

| Concept | Practical meaning |
| ------- | ----------------- |
| Content box | The area where content is drawn. |
| Padding | Space inside the border. |
| Border | Line around padding and content. |
| Margin | Space outside the border. |
| Overflow | What happens when content does not fit. |
| `box-sizing` | Controls how width and height are calculated. |

---

# Interview Questions & Answers

### 1. How would you explain Box Model, Display, and Overflow in a real project?

I start from the layout requirement, decide whether normal flow, flexbox, grid, or positioning fits, then use the cascade deliberately.

### 2. What happens internally when Box Model, Display, and Overflow is involved?

The browser resolves cascade and computed styles, calculates boxes, lays them out, paints, and composites. A CSS bug usually lives in one of those steps.

### 3. How do you debug issues related to Box Model, Display, and Overflow?

I inspect the element, check computed styles, box model, active media/container queries, overwritten rules, overflow, and stacking contexts.

### 4. What is the biggest production risk with Box Model, Display, and Overflow?

The biggest risk is building something that works for the demo state but fails with real content, slow networks, accessibility needs, errors, or future changes.

### 5. What should a senior engineer look for in code review?

They should check the mental model, edge cases, accessibility, performance cost, naming, state ownership, test coverage, and whether the simpler native/platform option was considered.

---

# Quick Practice

1. Explain Box Model, Display, and Overflow in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
