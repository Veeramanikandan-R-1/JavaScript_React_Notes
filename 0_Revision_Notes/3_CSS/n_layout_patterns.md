# Revision Notes: CSS Layout Patterns

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

### 1. How would you build an app layout with a sticky header, sidebar, and scrollable content?

Use a top-level grid or flex layout with explicit regions. Keep the page height constrained with `min-height: 100dvh`, make only the content region scroll when needed, and test mobile where the sidebar may become a drawer or bottom navigation.

### 2. What are a few reliable ways to center content, and when would you choose each?

Use flex or grid centering for one item inside a container. Use auto margins for fixed-width blocks in normal flow. For absolute overlays, combine positioning with transforms carefully, but avoid absolute positioning when normal layout can solve it.

### 3. How would you build a responsive card grid without hardcoded breakpoints everywhere?

Use CSS Grid with `repeat(auto-fit, minmax(...))`, sensible gaps, and content-driven min/max constraints. Test long titles, missing images, zoom, and narrow containers before adding breakpoints.

### 4. How do you design layouts that handle unknown content height?

Avoid fixed heights unless the design truly requires clipping. Use min/max sizes, flexible tracks, overflow rules, and content wrapping. For equal-height visual groups, let grid or flex align items instead of forcing every card to a fixed size.

### 5. What layout choices usually signal future maintenance problems?

Nested layout wrappers with unclear purpose, absolute positioning for normal content, fixed heights on text-heavy areas, breakpoints that target one device, and duplicated layout rules across screens.

---

# Quick Practice

1. Explain one realistic production use case for CSS Layout Patterns in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
