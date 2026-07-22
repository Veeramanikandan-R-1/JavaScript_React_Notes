# Revision Notes: Flexbox Layout

* Flexbox is for one-dimensional layout: a row or a column.
* It excels at distributing space, aligning items, and letting components adapt to available width.
* Understanding main axis and cross axis removes most flexbox confusion.
* Best practice: Use `gap` for spacing.
* Best practice: Set `min-width: 0` on flexible text containers.
* Best practice: Use `align-items` for cross-axis alignment.
* Best practice: Use grid when rows and columns both matter.
* Avoid: Using flexbox for complex two-dimensional page grids.
* Avoid: Forgetting `flex-wrap` when items should wrap.
* Avoid: Using margins for gaps.
* Avoid: Expecting `justify-content` to align on the cross axis.

---

# Cheat Sheet

| Concept | Practical meaning |
| ------- | ----------------- |
| Flex container | Parent with `display: flex`. |
| Main axis | Direction controlled by `flex-direction`. |
| Cross axis | Axis perpendicular to the main axis. |
| `flex` shorthand | Controls grow, shrink, and basis. |
| Gap | Space between flex items without margin hacks. |

---

# Interview Questions with Answers

### 1. When is Flexbox the right layout choice?

Flexbox is right when the layout is mostly one-dimensional: a row or a column. Toolbars, nav groups, media objects, button rows, and cards with flexible content are good examples. If both rows and columns need coordinated control, I reach for Grid instead.

### 2. Why does `justify-content` sometimes feel like it is working on the wrong axis?

Because `justify-content` works on the main axis, and the main axis changes with `flex-direction`. In a row it controls horizontal distribution; in a column it controls vertical distribution. `align-items` controls the cross axis.

### 3. A flex item with long text refuses to shrink. What do you check?

I check the child’s `min-width`. Flex items default to `min-width: auto`, which can make long content overflow. Setting `min-width: 0` on the flexible child often allows ellipsis, wrapping, or shrinking to work correctly.

### 4. Why is `gap` usually better than margins between flex items?

`gap` expresses spacing between items without first/last-child cleanup, margin-collapsing surprises, or direction-specific hacks. It also works cleanly when the layout wraps.

### 5. What do you check before approving a flex layout?

I test long text, wrapping, narrow widths, zoom, RTL if relevant, and whether `flex-basis`, `grow`, and `shrink` match the intent. I also check that flex is not being used as a poor substitute for grid.

---

# Quick Practice

1. Explain one realistic production use case for Flexbox Layout in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
