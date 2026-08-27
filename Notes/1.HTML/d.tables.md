## Tables — React/HTML Interview Notes

Tables are used to represent **tabular data** in rows and columns. In React, you use the same semantic HTML table elements.

### 1. `<table>`

Container for the entire table.

```jsx
<table>
  <thead>...</thead>
  <tbody>...</tbody>
</table>
```

**Interview:** Use `<table>` for actual tabular data, not for page layout.

---

### 2. `<thead>`

Contains the **header rows/cells** of the table.

```jsx
<thead>
  <tr>
    <th>Name</th>
    <th>Age</th>
    <th>Role</th>
  </tr>
</thead>
```

* `<tr>` → table row
* `<th>` → header cell
* `<th>` is semantically different from `<td>` and improves accessibility.

---

### 3. `<tbody>`

Contains the **main/data rows**.

```jsx
<tbody>
  <tr>
    <td>John</td>
    <td>30</td>
    <td>Developer</td>
  </tr>
</tbody>
```

In React, usually generated using `.map()`:

```jsx
<tbody>
  {users.map(user => (
    <tr key={user.id}>
      <td>{user.name}</td>
      <td>{user.age}</td>
      <td>{user.role}</td>
    </tr>
  ))}
</tbody>
```

**Important:** Always provide a stable `key` when rendering rows dynamically.

---

### 4. `<tfoot>`

Contains **summary/footer information**, such as totals.

```jsx
<tfoot>
  <tr>
    <td colSpan="2">Total</td>
    <td>$5000</td>
  </tr>
</tfoot>
```

Typical use cases:

* Total/summary
* Aggregated values
* Table-level actions

---

### 5. `rowspan`

Makes a cell span **multiple rows vertically**.

```jsx
<table>
  <tbody>
    <tr>
      <td rowSpan="2">India</td>
      <td>Chennai</td>
    </tr>
    <tr>
      <td>Bangalore</td>
    </tr>
  </tbody>
</table>
```

Here, `India` occupies **2 rows**.

```text
+-------+----------+
| India | Chennai  |
|       +----------+
|       | Bangalore|
+-------+----------+
```

**Syntax:**

```jsx
<td rowSpan={2}>India</td>
```

---

### 6. `colspan`

Makes a cell span **multiple columns horizontally**.

```jsx
<tr>
  <td colSpan="2">Total Users</td>
  <td>100</td>
</tr>
```

Here, `Total Users` occupies **2 columns**.

```text
+----------------+------+
|   Total Users  | 100  |
|   (2 columns)  |      |
+----------------+------+
```

In JSX, use camelCase:

```jsx
colSpan={2}     // ✅
rowSpan={2}     // ✅
```

Not:

```jsx
colspan="2"     // ❌ JSX
rowspan="2"     // ❌ JSX
```

---

## Complete React Example

```jsx
function UserTable() {
  const users = [
    { id: 1, name: "John", age: 30, role: "Developer" },
    { id: 2, name: "Jane", age: 28, role: "Designer" }
  ];

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Role</th>
        </tr>
      </thead>

      <tbody>
        {users.map(user => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.age}</td>
            <td>{user.role}</td>
          </tr>
        ))}
      </tbody>

      <tfoot>
        <tr>
          <td colSpan={2}>Total Users</td>
          <td>{users.length}</td>
        </tr>
      </tfoot>
    </table>
  );
}
```

### ⭐ Interview Must-Know

* `<table>` → complete table
* `<thead>` → header section
* `<tbody>` → main data
* `<tfoot>` → summary/footer
* `<tr>` → row
* `<th>` → header cell
* `<td>` → data cell
* `rowSpan` → merge/span **rows**
* `colSpan` → merge/span **columns**
* React JSX uses **`rowSpan` / `colSpan`**, not HTML's lowercase `rowspan` / `colspan`
* Use semantic tables for accessibility; don't use tables for layout.
