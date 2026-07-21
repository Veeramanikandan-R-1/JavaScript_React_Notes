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

# Interview Questions & Answers

### 1. How would you explain CSS Grid Layout in a real project?

I start from the layout requirement, decide whether normal flow, flexbox, grid, or positioning fits, then use the cascade deliberately.

### 2. What happens internally when CSS Grid Layout is involved?

The browser resolves cascade and computed styles, calculates boxes, lays them out, paints, and composites. A CSS bug usually lives in one of those steps.

### 3. How do you debug issues related to CSS Grid Layout?

I inspect the element, check computed styles, box model, active media/container queries, overwritten rules, overflow, and stacking contexts.

### 4. What is the biggest production risk with CSS Grid Layout?

The biggest risk is building something that works for the demo state but fails with real content, slow networks, accessibility needs, errors, or future changes.

### 5. What should a senior engineer look for in code review?

They should check the mental model, edge cases, accessibility, performance cost, naming, state ownership, test coverage, and whether the simpler native/platform option was considered.

---

# Quick Practice

1. Explain CSS Grid Layout in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
