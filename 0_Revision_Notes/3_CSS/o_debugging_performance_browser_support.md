# Revision Notes: CSS Debugging, Performance, and Browser Support

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

### 1. A style works locally but not in production. How do you debug it?

First compare the computed styles in DevTools, not just the source CSS. Then check CSS order, hashed class names, missing build output, PurgeCSS/tree-shaking, minification, prefixes, environment-specific feature flags, and whether a later rule overrides the expected one.

### 2. How would you debug layout shift caused by CSS?

Use the Performance panel or layout shift tooling to identify the moving element. Common causes are images without dimensions, late-loading fonts, injected banners, async content, changing scrollbar presence, and components that render skeletons with different final dimensions.

### 3. What CSS patterns can hurt rendering performance?

Animating layout properties, using expensive filters or shadows on large areas, triggering frequent style recalculation with broad selectors, and forcing large repaints. The answer should include measurement because CSS performance problems are often browser- and page-specific.

### 4. What is your browser support workflow before using a newer CSS feature?

Check the product support matrix, usage analytics, MDN or Can I Use, and whether the feature has a graceful fallback. For critical layout behavior, I test in the oldest supported browsers and add a fallback or progressive enhancement path.

### 5. How do source maps help with CSS debugging?

They map bundled or minified CSS back to the original source, which helps find the real file and rule during production debugging. They should be configured intentionally so the team gets useful diagnostics without exposing anything the product should keep private.

---

# Quick Practice

1. Explain one realistic production use case for CSS Debugging, Performance, and Browser Support in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
