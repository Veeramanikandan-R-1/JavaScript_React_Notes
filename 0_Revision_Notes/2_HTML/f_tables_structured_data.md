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

# Interview Questions & Answers

### 1. How would you explain Tables and Structured Data in a real project?

It means choosing markup that describes meaning first: headings for hierarchy, landmarks for page regions, labels for controls, and native elements for behavior.

### 2. What happens internally when Tables and Structured Data is involved?

The browser parses markup into the DOM and accessibility tree, so incorrect HTML can create bugs even when the screen looks visually correct.

### 3. How do you debug issues related to Tables and Structured Data?

I check DOM order, headings, labels, alt text, link/button purpose, form submission, keyboard navigation, and whether the page still works with limited JavaScript.

### 4. What is the biggest production risk with Tables and Structured Data?

The biggest risk is building something that works for the demo state but fails with real content, slow networks, accessibility needs, errors, or future changes.

### 5. What should a senior engineer look for in code review?

They should check the mental model, edge cases, accessibility, performance cost, naming, state ownership, test coverage, and whether the simpler native/platform option was considered.

---

# Quick Practice

1. Explain Tables and Structured Data in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
