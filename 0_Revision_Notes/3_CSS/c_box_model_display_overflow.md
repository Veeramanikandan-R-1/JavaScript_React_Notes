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

### 1. Why do many teams set `box-sizing: border-box` globally?

With `border-box`, the declared width includes content, padding, and border, which makes component sizing easier to reason about. Without it, adding padding can make an element wider than expected and cause overflow.

### 2. A flex child with long text overflows its container. What is the common fix?

Inspect the flex item and try `min-width: 0` on the flexible child. Flex items default to `min-width: auto`, which can prevent shrinking below content size. Then apply appropriate text wrapping, ellipsis, or overflow behavior based on the UI requirement.

### 3. What is the difference between `display: none`, `visibility: hidden`, and `opacity: 0`?

`display: none` removes the element from layout and the accessibility tree. `visibility: hidden` keeps layout space but hides the element. `opacity: 0` makes it transparent but it can still take space and may still receive events unless controlled. These differences matter for animations and accessibility.

### 4. When would you use `overflow: auto` instead of hiding overflow?

Use `overflow: auto` when the content may legitimately exceed the available space and users still need access to it. Hiding overflow is appropriate for clipping effects, masks, and intentional truncation, but it can hide real content and focus outlines if used casually.

### 5. Why is fixed `height` risky for content cards?

Real content changes with translations, user settings, dynamic data, and validation messages. Fixed height often causes clipping or overlap. I prefer `min-height`, flexible layout, and explicit overflow behavior only when the design truly needs it.

---

# Quick Practice

1. Explain one realistic production use case for Box Model, Display, and Overflow in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
