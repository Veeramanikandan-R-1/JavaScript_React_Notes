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

### 1. When do you use `px`, `rem`, `em`, `%`, and viewport units?

Use `px` for precise borders or assets, `rem` for scalable spacing/type tied to root font size, `em` for local proportional sizing, `%` for parent-relative sizing, and viewport units for viewport-relative areas. I avoid using viewport width to scale normal body text because it can become unreadable.

### 2. How do you choose a line-height?

For body text I usually use a unitless line-height around `1.4` to `1.6`, depending on font and density. Unitless values inherit better because children multiply by their own font size. Tight UI labels can be smaller, but long prose needs breathing room.

### 3. How do you check color accessibility?

I check contrast for normal text, large text, disabled states, focus indicators, and important icons. Color should not be the only way to communicate status; errors need text or icons, and charts need distinguishable patterns or labels.

### 4. What causes layout shift when web fonts load?

A fallback font and web font often have different metrics, so text can reflow when the web font loads. I check `font-display`, fallback font choice, font file size, preloading critical fonts, and whether the design can tolerate a system font stack.

### 5. How do you make typography robust for localization?

I avoid fixed-height text containers, test long words and longer translated strings, allow wrapping, avoid negative letter spacing in dense UI, and keep line-height readable. I also check that buttons and tabs can grow without breaking layout.

---

# Quick Practice

1. Explain one realistic production use case for Units, Colors, and Typography in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
