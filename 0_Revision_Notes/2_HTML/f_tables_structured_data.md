# Revision Notes: Tables and Structured Data

* Tables are for tabular data, not page layout.
* A good table communicates relationships between headers and cells.
* Complex tables need extra care because they are harder on small screens and assistive technologies.
* Best practice: Use tables for comparison, financial data, reports, schedules, and records.
* Best practice: Include a concise `caption` when the table needs context.
* Best practice: Use `scope="col"` and `scope="row"` for simple tables.
* Best practice: Use horizontal scrolling or transformed card layouts thoughtfully on small screens.
* Avoid: Using tables for cards, grids, or general page layout.
* Avoid: Omitting captions or headers for data-heavy tables.
* Avoid: Breaking table semantics with invalid nested elements.
* Avoid: Making wide tables overflow without a planned mobile experience.

---

# Cheat Sheet

| Concept | Practical meaning |
| ------- | ----------------- |
| `table` | Container for tabular data. |
| `caption` | Accessible table title or summary. |
| `thead`, `tbody`, `tfoot` | Logical row grouping. |
| `th` | Header cell. |
| `scope` | Declares whether a header applies to a row or column. |
| Responsive table | A strategy for preserving meaning on small screens. |

---

# Interview Questions with Answers

### 1. Why does `table` matter in Tables and Structured Data?

`table` means Container for tabular data. Use Tables and Structured Data to solve the specific problem described in this note.

### 2. How does `caption` affect the implementation?

`caption` means Accessible table title or summary. Understand the browser, runtime, or React behavior behind Tables and Structured Data before choosing an implementation.

### 3. What mistake should you avoid around skipping real edge cases?

Avoid skipping real edge cases. Prefer the simplest reliable approach and verify it with a small example.

### 4. How would you debug a production issue related to Tables and Structured Data?

Reproduce the issue, inspect the relevant state or DOM, and reduce it to a small failing case. Check edge cases, browser behavior, and tests before changing the implementation.

### 5. What would you check in code review for Tables and Structured Data?

Check correctness, edge cases, readability, accessibility, performance, and test coverage. Confirm the chosen approach matches the problem and does not add unnecessary complexity.

---

# Quick Practice

1. Explain one realistic production use case for Tables and Structured Data in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
