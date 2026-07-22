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

### 1. Why does Grid container matter in CSS Grid Layout?

Grid container means Parent with `display: grid`. Use CSS Grid Layout to solve the specific problem described in this note.

### 2. How does Track affect the implementation?

Track means A row or column. Understand the browser, runtime, or React behavior behind CSS Grid Layout before choosing an implementation.

### 3. What mistake should you avoid around skipping real edge cases?

Avoid skipping real edge cases. Prefer the simplest reliable approach and verify it with a small example.

### 4. How would you debug a production issue related to CSS Grid Layout?

Reproduce the issue, inspect the relevant state or DOM, and reduce it to a small failing case. Check edge cases, browser behavior, and tests before changing the implementation.

### 5. What would you check in code review for CSS Grid Layout?

Check correctness, edge cases, readability, accessibility, performance, and test coverage. Confirm the chosen approach matches the problem and does not add unnecessary complexity.

---

# Quick Practice

1. Explain one realistic production use case for CSS Grid Layout in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
