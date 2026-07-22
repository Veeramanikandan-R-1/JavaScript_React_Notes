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

# Interview Questions with Answers

### 1. Why does increasing `z-index` sometimes not bring an element to the front?

Because the element may be inside a different stacking context. `z-index` is only compared within the same stacking context. Properties like `position` with `z-index`, `opacity < 1`, `transform`, `filter`, and `isolation` can create new contexts.

### 2. What is the difference between `relative`, `absolute`, `fixed`, and `sticky`?

`relative` keeps its normal space and offsets visually. `absolute` is removed from normal flow and positioned against its containing block. `fixed` is positioned against the viewport. `sticky` behaves like relative until a scroll threshold, then sticks within its scroll container.

### 3. Why does `position: sticky` fail?

Common causes are a parent with an unexpected overflow value, no scrollable space, missing `top`/`bottom` offset, or the sticky element being inside the wrong scroll container. I inspect ancestors and scroll containers before changing random values.

### 4. When should positioning not be used?

Do not use positioning as the main page layout tool. Normal flow, flexbox, and grid are more resilient. Positioning is for overlays, badges, popovers, sticky headers, anchored controls, and deliberate visual offsets.

### 5. How do you manage z-index in a design system?

I prefer named layering tokens like dropdown, sticky header, modal, toast, and tooltip instead of arbitrary huge numbers. I also check stacking context creation so a token can actually work where it is used.

---

# Quick Practice

1. Explain one realistic production use case for Positioning, Stacking, and z-index in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
