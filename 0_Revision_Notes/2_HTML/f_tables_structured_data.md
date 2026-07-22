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

### 1. When is a real HTML table better than CSS grid or divs?

Use a table when the data is truly row-and-column data and cells need relationships with headers. CSS grid is for layout; tables are for data. Screen readers can navigate real table headers and cells much better than a div-based imitation.

### 2. What do `th`, `scope`, `caption`, `thead`, and `tbody` add?

They describe structure. `th` identifies header cells, `scope` clarifies row or column relationships, `caption` names the table, and `thead`/`tbody` group sections. This makes large tables easier to understand and maintain.

### 3. How do you make a wide table usable on mobile?

I first ask whether all columns are needed on mobile. Options include horizontal scroll with a visible affordance, priority columns, row expansion, card transformation with labels, or server-side export. I avoid destroying the header-cell relationship without providing an accessible alternative.

### 4. How would you handle sortable table headers accessibly?

Use a button inside the header cell for the sort action, keep focus behavior normal, and expose sort state with `aria-sort` on the relevant `th`. The visual arrow alone is not enough.

### 5. When does structured data matter for frontend work?

Structured data matters when pages need better search understanding, rich results, product/event/article metadata, or machine-readable content. I validate it with tooling and keep it consistent with visible content so SEO metadata does not lie.

---

# Quick Practice

1. Explain one realistic production use case for Tables and Structured Data in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
