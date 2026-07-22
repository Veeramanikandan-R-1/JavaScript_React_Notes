# Revision Notes: CSS Introduction

* CSS controls presentation: layout, spacing, color, typography, animation, and responsive behavior.
* CSS is declarative; you describe desired styles and the browser resolves conflicts through cascade rules.
* Good CSS is predictable under changing content, screen size, language, and component composition.
* Best practice: Use a reset or normalize strategy intentionally.
* Best practice: Build from content and constraints, then add decoration.
* Best practice: Use reusable spacing, color, and typography tokens.
* Best practice: Test narrow screens and long text early.
* Avoid: Writing styles that only work for the sample content.
* Avoid: Using fixed pixel widths everywhere.
* Avoid: Fighting the cascade with repeated `!important`.
* Avoid: Ignoring browser defaults.

---

# Cheat Sheet

| Concept | Practical meaning |
| ------- | ----------------- |
| Rule | A selector plus declarations. |
| Declaration | A property-value pair. |
| Cascade | The algorithm that chooses winning declarations. |
| Box model | The space every element occupies. |
| Layout | How boxes are arranged by normal flow, flexbox, grid, and positioning. |

---

# Interview Questions with Answers

### 1. A component looks correct in isolation but breaks inside another page. What CSS causes do you check?

I check inherited styles, global resets, selector specificity, parent layout constraints, width/min-width, overflow, and whether the component assumes a fixed container. Senior CSS debugging starts from the computed styles and box model, not from guessing which class "should" win.

### 2. What does it mean that CSS is declarative?

You describe the desired presentation, and the browser resolves the final result through cascade, inheritance, layout, paint, and compositing. That means multiple rules can target the same element, and the answer is determined by CSS rules, not execution order like JavaScript.

### 3. How do you decide between normal flow, flex, grid, and positioning?

Normal flow is best for document content. Flexbox is for one-axis alignment and distribution. Grid is for two-dimensional layout. Positioning is for intentional offsets and overlays. A strong answer also mentions long text, zoom, localization, and responsive behavior.

### 4. Why do developers use a reset or normalize stylesheet?

Browsers have useful but inconsistent default styles. A reset/normalize strategy creates a predictable baseline, but it should be intentional. I do not blindly remove all native behavior because defaults like focus outlines, form behavior, and semantic spacing can be valuable.

### 5. What is your CSS review checklist for a reusable component?

I check real content, narrow and wide containers, long words, keyboard focus, hover/active/disabled states, color contrast, reduced motion, selector ownership, and whether the component leaks styles outside itself. I also check that the CSS is simpler than the problem.

---

# Quick Practice

1. Explain one realistic production use case for CSS Introduction in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
