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

# Interview Questions & Answers

### 1. How would you explain Positioning, Stacking, and z-index in a real project?

I start from the layout requirement, decide whether normal flow, flexbox, grid, or positioning fits, then use the cascade deliberately.

### 2. What happens internally when Positioning, Stacking, and z-index is involved?

The browser resolves cascade and computed styles, calculates boxes, lays them out, paints, and composites. A CSS bug usually lives in one of those steps.

### 3. How do you debug issues related to Positioning, Stacking, and z-index?

I inspect the element, check computed styles, box model, active media/container queries, overwritten rules, overflow, and stacking contexts.

### 4. What is the biggest production risk with Positioning, Stacking, and z-index?

The biggest risk is building something that works for the demo state but fails with real content, slow networks, accessibility needs, errors, or future changes.

### 5. What should a senior engineer look for in code review?

They should check the mental model, edge cases, accessibility, performance cost, naming, state ownership, test coverage, and whether the simpler native/platform option was considered.

---

# Quick Practice

1. Explain Positioning, Stacking, and z-index in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
