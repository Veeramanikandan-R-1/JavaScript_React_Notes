# Revision Notes: Units, Colors, and Typography

* Typography affects readability, hierarchy, trust, and density.
* Units should reflect intent: fixed, relative, viewport, or container-based.
* Color choices must satisfy contrast and state communication needs.
* Best practice: Use a small type scale.
* Best practice: Set comfortable line height for prose.
* Best practice: Respect user zoom and browser font settings.
* Best practice: Use color for emphasis but not as the only signal.
* Avoid: Scaling text with viewport width.
* Avoid: Using low-contrast gray text for body copy.
* Avoid: Setting body text too small.
* Avoid: Using too many unrelated type sizes and colors.

---

# Cheat Sheet

| Concept | Practical meaning |
| ------- | ----------------- |
| `rem` | Relative to root font size; useful for spacing and typography. |
| `em` | Relative to current font size; useful for local proportional scaling. |
| Viewport units | Relative to viewport dimensions. |
| Line height | Vertical rhythm and readability. |
| Contrast | Difference between foreground and background. |
| System fonts | Fast and native-looking fallback stack. |

---

# Interview Questions with Answers

### 1. Why does `rem` matter in Units, Colors, and Typography?

`rem` means Relative to root font size; useful for spacing and typography. Use Units, Colors, and Typography to solve the specific problem described in this note.

### 2. How does `em` affect the implementation?

`em` means Relative to current font size; useful for local proportional scaling. Understand the browser, runtime, or React behavior behind Units, Colors, and Typography before choosing an implementation.

### 3. What mistake should you avoid around skipping real edge cases?

Avoid skipping real edge cases. Prefer the simplest reliable approach and verify it with a small example.

### 4. How would you debug a production issue related to Units, Colors, and Typography?

Reproduce the issue, inspect the relevant state or DOM, and reduce it to a small failing case. Check edge cases, browser behavior, and tests before changing the implementation.

### 5. What would you check in code review for Units, Colors, and Typography?

Check correctness, edge cases, readability, accessibility, performance, and test coverage. Confirm the chosen approach matches the problem and does not add unnecessary complexity.

---

# Quick Practice

1. Explain one realistic production use case for Units, Colors, and Typography in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
