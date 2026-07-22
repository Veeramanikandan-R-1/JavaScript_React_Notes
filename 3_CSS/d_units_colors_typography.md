# Units, Colors, and Typography (Senior Frontend Engineer Perspective)

Before going deeper into frameworks or libraries, understand this topic as part of real frontend engineering: building readable, scalable, responsive visual language.

---

# 1. Fundamentals

* Typography affects readability, hierarchy, trust, and density.
* Units should reflect intent: fixed, relative, viewport, or container-based.
* Color choices must satisfy contrast and state communication needs.

---

# 2. Core Concepts

| Concept | Practical meaning |
| ------- | ----------------- |
| `rem` | Relative to root font size; useful for spacing and typography. |
| `em` | Relative to current font size; useful for local proportional scaling. |
| Viewport units | Relative to viewport dimensions. |
| Line height | Vertical rhythm and readability. |
| Contrast | Difference between foreground and background. |
| System fonts | Fast and native-looking fallback stack. |

---

# 3. Internal Working

* Fonts load asynchronously and can cause text swapping or invisible text depending on `font-display`.
* Relative units respond to user font-size preferences better than fixed pixel-heavy systems.

---

# 4. Common Mistakes

* Scaling text with viewport width.
* Using low-contrast gray text for body copy.
* Setting body text too small.
* Using too many unrelated type sizes and colors.

---

# 5. Best Practices

* Use a small type scale.
* Set comfortable line height for prose.
* Respect user zoom and browser font settings.
* Use color for emphasis but not as the only signal.

---

# 6. Code Example

```css
body {
  font-family: Inter, ui-sans-serif, system-ui, sans-serif;
  font-size: 1rem;
  line-height: 1.6;
  color: #17202a;
}

.eyebrow {
  font-size: 0.8125rem;
  font-weight: 700;
  text-transform: uppercase;
}
```

---

# 7. Real-world Scenarios

* Using Units, Colors, and Typography while building a real frontend feature.
* Debugging a production issue where Units, Colors, and Typography was misunderstood.
* Explaining Units, Colors, and Typography clearly during a frontend interview.

---

# 7.1 `em` vs `rem`

| Unit | Based on | Practical use |
| ---- | -------- | ------------- |
| `em` | Current element font size | component-local spacing that scales with the component |
| `rem` | Root font size | predictable typography and spacing across the app |

```css
html {
  font-size: 16px;
}

.card {
  font-size: 1rem;
  padding: 1rem;
}

.button {
  font-size: 0.875rem;
  padding: 0.75em 1em;
}
```

Use `rem` when you want consistent sizing across the page. Use `em` when spacing should scale with the element's own font size, such as button padding.

---

# 8. Senior Deep Dive

## When to Use

* Use normal flow for documents, flexbox for one axis, grid for two axes, and positioning for intentional overlays or offsets.
* Use custom properties and tokens when values express product design decisions.
* Use modern CSS when support is acceptable and it removes complexity.

## Debug Checklist

* Check whether the element participates in block, inline, flex, grid, or positioned layout.
* Inspect computed styles, overwritten declarations, box model, min/max constraints, overflow, and active media/container queries.
* For overlap issues, inspect containing blocks and stacking contexts before increasing `z-index`.

## Code Review Checklist

* Does the layout survive long words, translated text, zoom, and narrow screens?
* Are focus, hover, disabled, validation, and reduced-motion states handled?
* Are selectors shallow and ownership boundaries clear?


---

# Revision Notes

* Units, Colors, and Typography matters because it affects real users, future maintainers, and production behavior.
* Learn the mental model before memorizing syntax.
* Use browser DevTools, tests, and small examples to verify behavior.
* Typography affects readability, hierarchy, trust, and density.
* Units should reflect intent: fixed, relative, viewport, or container-based.
* Color choices must satisfy contrast and state communication needs.

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

# Hands-on Exercises

## Exercise 1

Build a small responsive layout that demonstrates Units, Colors, and Typography.

### Solution

Test at narrow, medium, and wide widths; include long text; inspect computed styles and box model in DevTools.

## Exercise 2

Create one intentional broken version and debug it.

### Solution

Identify whether the issue came from cascade, box model, layout model, overflow, media query, or stacking context.

---

# Senior Frontend Engineer Takeaway

For senior-level work, Units, Colors, and Typography is not only a syntax topic. You should be able to explain the mental model, choose the right pattern for a product requirement, identify common failure modes, and verify behavior through tooling, tests, and browser inspection.
