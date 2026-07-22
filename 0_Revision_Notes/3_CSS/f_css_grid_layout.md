# Revision Notes: CSS Grid Layout

* CSS Grid is for two-dimensional layout.
* Grid is ideal when rows and columns both matter.
* Grid can define explicit tracks and place items precisely without extra wrapper markup.
* Best practice: Use `repeat(auto-fit, minmax())` for responsive card grids.
* Best practice: Use named areas for page shells.
* Best practice: Prefer grid for dashboard layouts and comparison panels.
* Best practice: Avoid fixed viewport-based heights unless the layout truly needs them.
* Avoid: Using grid when simple inline alignment needs flexbox.
* Avoid: Creating fixed columns that overflow on mobile.
* Avoid: Overusing named areas for tiny components.
* Avoid: Forgetting gap is part of layout math.

---

# Cheat Sheet

| Concept | Practical meaning |
| ------- | ----------------- |
| Grid container | Parent with `display: grid`. |
| Track | A row or column. |
| Grid line | Boundary used for placement. |
| `fr` | Fraction of available space. |
| `minmax()` | Responsive min and max track sizes. |
| Named areas | Readable placement system for page regions. |

---

# Interview Questions with Answers

### 1. When would you choose CSS Grid over Flexbox?

I choose Grid when rows and columns both matter: dashboards, galleries, page shells, comparison layouts, and forms with aligned labels/fields. Flexbox is better for one-dimensional alignment. The interview answer should be about layout shape, not personal preference.

### 2. How does `minmax()` help responsive layouts?

`minmax()` lets a track have a minimum usable size and a flexible maximum. A common pattern is `repeat(auto-fit, minmax(16rem, 1fr))`, which creates responsive card grids without hard-coded breakpoints.

### 3. What is the difference between explicit and implicit grid tracks?

Explicit tracks are defined by `grid-template-columns` or `grid-template-rows`. Implicit tracks are created when items are placed outside the defined grid. I check implicit tracks when items appear in unexpected rows or columns.

### 4. How do named grid areas help maintainability?

Named areas make page-region placement readable, especially for responsive layouts that rearrange header, sidebar, content, and footer. They are less useful for highly dynamic lists where line or auto-placement is clearer.

### 5. What grid bugs do you look for on real content?

I check overflow from long content, too-small `minmax()` values, implicit tracks, keyboard/focus order versus visual order, and whether CSS rearrangement changes the reading order in a confusing way.

---

# Quick Practice

1. Explain one realistic production use case for CSS Grid Layout in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
