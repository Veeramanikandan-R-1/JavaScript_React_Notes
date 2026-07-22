# Revision Notes: Positioning, Stacking, and z-index

* Positioning moves elements out of normal flow or anchors them relative to containing blocks.
* Stacking controls what appears in front when boxes overlap.
* `z-index` only makes sense within stacking context rules.
* Best practice: Use positioning for overlays, badges, popovers, and sticky UI, not general layout.
* Best practice: Create intentional stacking tokens.
* Best practice: Inspect stacking contexts when z-index appears ignored.
* Best practice: Use logical inset properties for international layouts.
* Avoid: Setting huge z-index values without understanding stacking contexts.
* Avoid: Using absolute positioning for normal page layout.
* Avoid: Breaking sticky elements by adding overflow to an ancestor.
* Avoid: Covering content with fixed headers without offset spacing.

---

# Cheat Sheet

| Concept | Practical meaning |
| ------- | ----------------- |
| Static | Default position in normal flow. |
| Relative | Keeps space but offsets visually. |
| Absolute | Positioned relative to nearest positioned ancestor. |
| Fixed | Positioned relative to viewport. |
| Sticky | Switches between relative and fixed within a scroll container. |
| Stacking context | An isolated z-order group. |

---

# Interview Questions with Answers

### 1. Why does Static matter in Positioning, Stacking, and z-index?

Static means Default position in normal flow. Use Positioning, Stacking, and z-index to solve the specific problem described in this note.

### 2. How does Relative affect the implementation?

Relative means Keeps space but offsets visually. Understand the browser, runtime, or React behavior behind Positioning, Stacking, and z-index before choosing an implementation.

### 3. What mistake should you avoid around skipping real edge cases?

Avoid skipping real edge cases. Prefer the simplest reliable approach and verify it with a small example.

### 4. How would you debug a production issue related to Positioning, Stacking, and z-index?

Reproduce the issue, inspect the relevant state or DOM, and reduce it to a small failing case. Check edge cases, browser behavior, and tests before changing the implementation.

### 5. What would you check in code review for Positioning, Stacking, and z-index?

Check correctness, edge cases, readability, accessibility, performance, and test coverage. Confirm the chosen approach matches the problem and does not add unnecessary complexity.

---

# Quick Practice

1. Explain one realistic production use case for Positioning, Stacking, and z-index in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
