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

# Interview Questions with Answers

### 1. Why does Content box matter in Box Model, Display, and Overflow?

Content box means The area where content is drawn. Use Box Model, Display, and Overflow to solve the specific problem described in this note.

### 2. How does Padding affect the implementation?

Padding means Space inside the border. Understand the browser, runtime, or React behavior behind Box Model, Display, and Overflow before choosing an implementation.

### 3. What mistake should you avoid around skipping real edge cases?

Avoid skipping real edge cases. Prefer the simplest reliable approach and verify it with a small example.

### 4. How would you debug a production issue related to Box Model, Display, and Overflow?

Reproduce the issue, inspect the relevant state or DOM, and reduce it to a small failing case. Check edge cases, browser behavior, and tests before changing the implementation.

### 5. What would you check in code review for Box Model, Display, and Overflow?

Check correctness, edge cases, readability, accessibility, performance, and test coverage. Confirm the chosen approach matches the problem and does not add unnecessary complexity.

---

# Quick Practice

1. Explain one realistic production use case for Box Model, Display, and Overflow in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
