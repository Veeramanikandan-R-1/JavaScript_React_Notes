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
