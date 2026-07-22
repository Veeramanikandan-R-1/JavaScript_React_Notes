# Revision Notes: Pseudo-classes, Pseudo-elements, and UI States

* CSS turns structured content into usable visual interfaces.
* Correct CSS depends on the cascade, box model, layout algorithms, responsive constraints, and browser rendering.
* Production CSS must handle real content, interaction states, accessibility, browser support, and maintainability.
* Best practice: Choose the layout model before writing declarations.
* Best practice: Keep selectors shallow and styles close to ownership boundaries.
* Best practice: Use tokens for repeated design decisions.
* Best practice: Inspect computed styles, box model, queries, and stacking contexts in DevTools.
* Best practice: Respect responsive content and accessibility states.
* Avoid: Using fixed dimensions that break with real content.
* Avoid: Fighting specificity with deeper selectors.
* Avoid: Using positioning for layout that should be flexbox or grid.
* Avoid: Ignoring focus, disabled, validation, reduced-motion, and responsive states.

---

# Cheat Sheet

| Concept | Practical meaning |
| ------- | ----------------- |
| Selector | Targets elements for styling. |
| Cascade | Chooses winning declarations. |
| Box | The rendered space an element occupies. |
| Layout algorithm | Normal flow, flexbox, grid, or positioning rules that arrange boxes. |
| State selector | A selector that responds to interaction, validation, structure, or component state. |

---

# Interview Questions with Answers

### 1. What is the difference between `:hover`, `:focus`, `:focus-visible`, and `:active`?

`:hover` is pointer proximity, `:focus` is keyboard/programmatic focus, `:focus-visible` is focus that should show a visible ring, and `:active` is the pressed state during activation. A solid component handles all of them intentionally.

### 2. Why is relying only on hover a problem?

Touch users, keyboard users, and assistive technology users may never trigger hover. Critical information and controls must also be available through focus, click/tap, semantic markup, and visible text where needed.

### 3. How would you style invalid form controls without making the UX noisy?

Use native validation states like `:invalid` carefully, usually after interaction or submit. Pair color with text or icons, preserve accessible error messages, and avoid showing errors before the user has had a chance to type.

### 4. What are good uses of `::before` and `::after`, and what is the accessibility caveat?

They are useful for decorative marks, counters, separators, overlays, and small visual affordances. Do not put essential content only in pseudo-elements because it may not be exposed consistently to assistive technology or translation workflows.

### 5. What states should a reusable button or input component support?

Default, hover, active, focus-visible, disabled, loading, error, and high-contrast states. I also check keyboard behavior, hit target size, reduced motion, and whether disabled styling matches actual disabled semantics.

---

# Quick Practice

1. Explain one realistic production use case for Pseudo-classes, Pseudo-elements, and UI States in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
