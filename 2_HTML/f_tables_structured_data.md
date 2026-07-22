# Tables and Structured Data (Senior Frontend Engineer Perspective)

Before going deeper into frameworks or libraries, understand this topic as part of real frontend engineering: using tables for tabular information without damaging accessibility.

---

# 1. Fundamentals

* Tables are for tabular data, not page layout.
* A good table communicates relationships between headers and cells.
* Complex tables need extra care because they are harder on small screens and assistive technologies.

---

# 2. Core Concepts

| Concept | Practical meaning |
| ------- | ----------------- |
| `table` | Container for tabular data. |
| `caption` | Accessible table title or summary. |
| `thead`, `tbody`, `tfoot` | Logical row grouping. |
| `th` | Header cell. |
| `scope` | Declares whether a header applies to a row or column. |
| Responsive table | A strategy for preserving meaning on small screens. |

---

# 3. Internal Working

* Screen readers can associate `th` cells with `td` cells when structure and `scope` are correct.
* Table layout algorithms consider cell content, column widths, and available space.
* Using tables for layout creates confusing reading order and rigid responsive behavior.

---

# 4. Common Mistakes

* Using tables for cards, grids, or general page layout.
* Omitting captions or headers for data-heavy tables.
* Breaking table semantics with invalid nested elements.
* Making wide tables overflow without a planned mobile experience.

---

# 5. Best Practices

* Use tables for comparison, financial data, reports, schedules, and records.
* Include a concise `caption` when the table needs context.
* Use `scope="col"` and `scope="row"` for simple tables.
* Use horizontal scrolling or transformed card layouts thoughtfully on small screens.

---

# 6. Code Example

```html
<table>
  <caption>Monthly subscription usage</caption>
  <thead>
    <tr>
      <th scope="col">Plan</th>
      <th scope="col">Users</th>
      <th scope="col">Storage</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Team</th>
      <td>12</td>
      <td>80 GB</td>
    </tr>
  </tbody>
</table>
```

---

# 7. Real-world Scenarios

* A finance report needs real table semantics for accurate screen reader navigation.
* A pricing comparison works better as a table than disconnected cards.
* A mobile dashboard needs horizontal scroll with sticky first column.

---

# 8. Senior Deep Dive

## When to Use

* Use semantic elements whenever the element's built-in meaning matches the job.
* Use ARIA only to fill semantic gaps, not to overwrite good native HTML.
* Use progressive enhancement for flows that should remain usable under partial loading or JavaScript failure.

## Debug Checklist

* Inspect the DOM tree, not only the visual page.
* Check the accessibility tree, labels, alt text, landmark names, and heading order.
* Submit forms manually and confirm `name` values, methods, validation, and server payloads.

## Code Review Checklist

* Are links and buttons used according to purpose?
* Can a keyboard user complete the flow?
* Does the document have useful title, language, metadata, headings, and landmarks?


---

# Revision Notes

* Tables and Structured Data matters because it affects real users, future maintainers, and production behavior.
* Learn the mental model before memorizing syntax.
* Use browser DevTools, tests, and small examples to verify behavior.
* Tables are for tabular data, not page layout.
* A good table communicates relationships between headers and cells.
* Complex tables need extra care because they are harder on small screens and assistive technologies.

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

# Hands-on Exercises

## Exercise 1

Create a course schedule table with day, topic, duration, and status.

### Solution

Use `caption`, `thead`, `tbody`, column headers, and row data cells.

---

# Senior Frontend Engineer Takeaway

For senior-level work, Tables and Structured Data is not only a syntax topic. You should be able to explain the mental model, choose the right pattern for a product requirement, identify common failure modes, and verify behavior through tooling, tests, and browser inspection.
