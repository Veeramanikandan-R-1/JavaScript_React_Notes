# 1. `<table>`

## What is a Table?

A table is used to display **structured/tabular data** in rows and columns.

Examples:

* Employee List
* Orders
* Reports
* Financial Data
* Analytics Dashboard

> **Important:** Tables should only be used for **tabular data**, **not for page layout**.

---

## Basic Structure

```html
<table>
    <tr>
        <th>Name</th>
        <th>Age</th>
    </tr>

    <tr>
        <td>John</td>
        <td>25</td>
    </tr>
</table>
```

Output

| Name | Age |
| ---- | --- |
| John | 25  |

---

## Table Elements

```text
table
 ├── thead
 ├── tbody
 └── tfoot
        ↓
       tr
      ↓ ↓ ↓
     th td td
```

---

## React Example

```jsx
<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Age</th>
        </tr>
    </thead>

    <tbody>
        {users.map(user => (
            <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.age}</td>
            </tr>
        ))}
    </tbody>
</table>
```

---

## Why React Developers Should Care

Many enterprise applications contain tables:

* Admin dashboards
* CRM systems
* Banking portals
* ERP systems
* Analytics applications

React frequently renders tables dynamically from API data.

---

# 2. `<thead>`

Represents the **header section** of a table.

Example

```html
<thead>

<tr>

<th>Name</th>

<th>Email</th>

</tr>

</thead>
```

Output

| Name | Email |

---

## Purpose

* Groups header rows
* Improves readability
* Better accessibility
* Helpful for printing
* Useful for sticky headers

---

## Best Practice

Keep column titles inside

```html
<thead>
```

instead of mixing them into

```html
<tbody>
```

---

# 3. `<tbody>`

Contains the actual table data.

Example

```html
<tbody>

<tr>

<td>John</td>

<td>john@gmail.com</td>

</tr>

</tbody>
```

---

Example

| Name  | Email                                     |
| ----- | ----------------------------------------- |
| John  | [john@gmail.com](mailto:john@gmail.com)   |
| David | [david@gmail.com](mailto:david@gmail.com) |

---

## React Usage

Most common interview example.

```jsx
<tbody>

{employees.map(emp => (

<tr key={emp.id}>

<td>{emp.name}</td>

<td>{emp.salary}</td>

</tr>

))}

</tbody>
```

---

# 4. `<tfoot>`

Footer section.

Usually contains

* Totals
* Summary
* Grand Total
* Average
* Pagination summary

Example

```html
<tfoot>

<tr>

<td>Total</td>

<td>₹5000</td>

</tr>

</tfoot>
```

---

Output

| Product   |    Price |
| --------- | -------: |
| Mouse     |      500 |
| Keyboard  |     1500 |
| **Total** | **2000** |

---

## Why Useful?

Financial applications

Analytics reports

Invoices

Payroll systems

---

# 5. `rowspan`

Merge rows vertically.

---

Without rowspan

| Name | Subject |
| ---- | ------- |
| John | Math    |
| John | Science |

---

Using rowspan

```html
<tr>

<td rowspan="2">

John

</td>

<td>Math</td>

</tr>

<tr>

<td>Science</td>

</tr>
```

Output

| Name | Subject |
| ---- | ------- |
| John | Math    |
|      | Science |

---

## Syntax

```html
<td rowspan="2">
```

Means

Occupy

```text
2 rows
```

---

## Common Uses

Employee hierarchy

Invoice grouping

Reports

Schedules

---

# 6. `colspan`

Merge columns horizontally.

---

Example

```html
<tr>

<th colspan="2">

Employee Details

</th>

</tr>
```

Output

| Employee Details |     |
| ---------------- | --- |
| Name             | Age |

---

## Another Example

```html
<tr>

<td colspan="3">

No Records Found

</td>

</tr>
```

Output

| Name                 | Age | Salary |
| -------------------- | --- | ------ |
| **No Records Found** |     |        |

---

Very common in React.

---

# Complete Example

```html
<table border="1">

<thead>

<tr>

<th>Name</th>

<th>Department</th>

<th>Salary</th>

</tr>

</thead>

<tbody>

<tr>

<td rowspan="2">John</td>

<td>IT</td>

<td>5000</td>

</tr>

<tr>

<td>HR</td>

<td>6000</td>

</tr>

<tr>

<td colspan="3">

Employee Summary

</td>

</tr>

</tbody>

<tfoot>

<tr>

<td colspan="2">

Total Salary

</td>

<td>11000</td>

</tr>

</tfoot>

</table>
```

---

# Other Important Table Elements (Interview Bonus)

Although not in your list, these are frequently asked.

## `<tr>`

Table row.

```html
<tr>

...

</tr>
```

---

## `<td>`

Table data.

```html
<td>

John

</td>
```

---

## `<th>`

Header cell.

```html
<th>

Name

</th>
```

By default

* Bold
* Center aligned
* Semantic header

---

## `scope`

Improves accessibility.

```html
<th scope="col">

Name

</th>
```

Values

```text
col

row
```

---

## `<caption>`

Table title.

```html
<table>

<caption>

Employee Report

</caption>

</table>
```

Useful for screen readers.

---

# Accessibility Best Practices

✔ Use

```html
<thead>

<tbody>

<tfoot>
```

---

✔ Use

```html
<th>
```

instead of bold `<td>`.

---

✔ Use

```html
scope
```

for headers.

---

✔ Add

```html
<caption>
```

for complex tables.

---

✔ Keep logical reading order.

---

# React Best Practices

## Dynamic Rendering

```jsx
<tbody>

{users.map(user => (

<tr key={user.id}>

<td>{user.name}</td>

</tr>

))}

</tbody>
```

Always provide

```jsx
key
```

---

## Empty State

```jsx
<tbody>

{users.length === 0 ? (

<tr>

<td colSpan="3">

No Records

</td>

</tr>

) : (...)}

</tbody>
```

Very common interview question.

---

## Large Tables

For thousands of rows,

Don't render everything.

Use

* react-window
* react-virtualized

Virtualization improves performance.

---

# Performance Considerations

For small tables:

```text
<100 rows
```

Normal rendering is fine.

---

For large datasets:

```text
10,000+ rows
```

Use

* Pagination
* Infinite Scroll
* Virtualization

---

# Common Mistakes

❌ Using tables for page layout.

❌ Forgetting `key` when rendering rows.

❌ Using `<td>` instead of `<th>` for headers.

❌ Not using `<thead>` and `<tbody>`.

❌ Incorrect `rowspan` or `colspan` values causing broken layouts.

❌ Using index as React key when stable IDs are available.

---

# Best Practices

* Use tables only for tabular data.
* Always use semantic table sections (`thead`, `tbody`, `tfoot`).
* Use `<th>` for headers.
* Add `scope` to header cells.
* Use `caption` when the table needs a title.
* Always provide unique React keys.
* Use `colSpan` for empty/loading states.
* Virtualize very large tables.

---

# HTML vs React Attribute

HTML

```html
<td colspan="3">
```

React JSX

```jsx
<td colSpan={3}>
```

---

HTML

```html
<td rowspan="2">
```

React JSX

```jsx
<td rowSpan={2}>
```

Notice the camelCase names in JSX.

---

# Revision Notes

## Table Structure

```text
table
 ├── thead
 │     └── tr
 │           └── th
 │
 ├── tbody
 │     └── tr
 │           └── td
 │
 └── tfoot
       └── tr
             └── td
```

---

## Table Elements Cheat Sheet

| Element   | Purpose        |
| --------- | -------------- |
| `table`   | Creates table  |
| `thead`   | Header section |
| `tbody`   | Data rows      |
| `tfoot`   | Footer/summary |
| `tr`      | Table row      |
| `th`      | Header cell    |
| `td`      | Data cell      |
| `caption` | Table title    |

---

## Rowspan vs Colspan

| Attribute                    | Direction  | Example                |
| ---------------------------- | ---------- | ---------------------- |
| `rowspan` (`rowSpan` in JSX) | Vertical   | Merge multiple rows    |
| `colspan` (`colSpan` in JSX) | Horizontal | Merge multiple columns |

---

## JSX Attribute Cheat Sheet

| HTML      | React JSX   |
| --------- | ----------- |
| `rowspan` | `rowSpan`   |
| `colspan` | `colSpan`   |
| `class`   | `className` |
| `for`     | `htmlFor`   |

---

## Performance Cheat Sheet

| Rows     | Recommendation                                       |
| -------- | ---------------------------------------------------- |
| <100     | Normal rendering                                     |
| 100–1000 | Pagination if needed                                 |
| 1000+    | Pagination or Infinite Scroll                        |
| 10,000+  | Virtualization (`react-window`, `react-virtualized`) |

---

# Commonly Asked React Interview Questions (6 Years Experience)

### 1. What is the purpose of `<thead>`, `<tbody>`, and `<tfoot>`?

They semantically separate the table into header, body, and footer sections, improving readability, accessibility, and browser rendering.

---

### 2. What is the difference between `<th>` and `<td>`?

* **`<th>`**: Header cell with semantic meaning, typically bold and centered by default.
* **`<td>`**: Regular data cell.

---

### 3. What is the difference between `rowspan` and `colspan`?

* **`rowspan` (`rowSpan` in JSX):** Merges cells vertically across multiple rows.
* **`colspan` (`colSpan` in JSX):** Merges cells horizontally across multiple columns.

---

### 4. Why is `colSpan` commonly used in React tables?

To display messages like "No Records Found", loading rows, or summary rows spanning all columns.

Example:

```jsx
<tr>
    <td colSpan={4}>No Records Found</td>
</tr>
```

---

### 5. Why should tables not be used for page layout?

Tables are intended for tabular data. Using them for layout harms accessibility, responsiveness, and maintainability. CSS Flexbox and Grid should be used for layouts.

---

### 6. How do you render table rows dynamically in React?

```jsx
<tbody>
    {users.map(user => (
        <tr key={user.id}>
            <td>{user.name}</td>
        </tr>
    ))}
</tbody>
```

---

### 7. Why is the `key` prop important when rendering table rows?

It helps React efficiently identify changed, added, or removed rows during reconciliation, improving rendering performance and preventing UI bugs.

---

### 8. How would you optimize a table with 50,000 rows?

Avoid rendering all rows at once. Use:

* Pagination
* Infinite scrolling
* Virtualization libraries such as `react-window` or `react-virtualized`

---

### 9. Why should you use `<caption>` and `scope`?

They improve accessibility by helping screen readers understand the table's purpose and the relationship between headers and data cells.

---

### 10. What is the difference between HTML and React for `rowspan` and `colspan`?

React uses camelCase property names:

* HTML: `rowspan`, `colspan`
* JSX: `rowSpan`, `colSpan`

---

### 11. Can a table have multiple `<tbody>` elements?

Yes. A table can contain multiple `<tbody>` sections to logically group related rows. This is valid HTML and can improve readability and organization.

---

### 12. What would you use instead of a basic HTML table for enterprise data grids?

For advanced features like sorting, filtering, column resizing, virtualization, row selection, and server-side pagination, use libraries such as **AG Grid**, **TanStack Table (React Table)**, or **MUI Data Grid**, depending on project requirements.
