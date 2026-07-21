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

# Interview Questions & Answers

### 1. How would you explain Units, Colors, and Typography in a real project?

I start from the layout requirement, decide whether normal flow, flexbox, grid, or positioning fits, then use the cascade deliberately.

### 2. What happens internally when Units, Colors, and Typography is involved?

The browser resolves cascade and computed styles, calculates boxes, lays them out, paints, and composites. A CSS bug usually lives in one of those steps.

### 3. How do you debug issues related to Units, Colors, and Typography?

I inspect the element, check computed styles, box model, active media/container queries, overwritten rules, overflow, and stacking contexts.

### 4. What is the biggest production risk with Units, Colors, and Typography?

The biggest risk is building something that works for the demo state but fails with real content, slow networks, accessibility needs, errors, or future changes.

### 5. What should a senior engineer look for in code review?

They should check the mental model, edge cases, accessibility, performance cost, naming, state ownership, test coverage, and whether the simpler native/platform option was considered.

---

# Quick Practice

1. Explain Units, Colors, and Typography in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
