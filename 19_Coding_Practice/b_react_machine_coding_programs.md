# React Machine Coding Programs

This note incorporates unique React practice programs from `react programs.docx`.

Use these for senior frontend machine-coding practice. For each problem, explain state ownership, data flow, edge cases, accessibility, and performance before writing code.

---

# 1. Task Manager / Kanban Board

Requirements:

* add, update, delete tasks
* move tasks between `To Do`, `In Progress`, and `Done`
* persist data using Redux or Context + `localStorage`
* filter/search tasks
* modal for task details
* dark mode toggle

Concepts covered:

* `useState`, `useEffect`, `useContext`
* Redux Toolkit with `createSlice` / `createAsyncThunk`
* drag-and-drop library such as React DnD or a sortable library
* conditional rendering
* memoization with `React.memo`, `useMemo`, and `useCallback`

Bonus:

* mock login and role-based access control

Reference solution from notes:

https://github.com/Veeramanikandan-R-1/practice-app/tree/task_manager

Interview build plan:

1. Model task shape: `id`, `title`, `description`, `status`, `priority`, `assignee`, `createdAt`.
2. Keep task state in Redux/Context.
3. Persist to `localStorage` in one effect or middleware.
4. Render columns from status config.
5. Add drag/drop only after basic move buttons work.
6. Add modal, search, filters, and dark mode.

---

# 2. Drag-and-Drop UI Builder

Problem: create a left panel of draggable component labels and a right canvas where dropped items become real elements at the drop position.

```jsx
import React, { useRef, useState } from "react";

const COMPONENTS = [
  { type: "input", label: "Input Box" },
  { type: "button", label: "Button" },
  { type: "text", label: "Text" },
];

function LeftComponentPanel({ components, onDragStart }) {
  return (
    <aside className="builder-panel">
      <h2>Components</h2>
      {components.map((component) => (
        <button
          key={component.type}
          type="button"
          draggable
          onDragStart={() => onDragStart(component)}
          className="builder-item"
        >
          {component.label}
        </button>
      ))}
    </aside>
  );
}

function Canvas({ canvasRef, items, onDrop, onDragOver }) {
  return (
    <main
      ref={canvasRef}
      onDrop={onDrop}
      onDragOver={onDragOver}
      className="builder-canvas"
    >
      {items.map((item) => (
        <div
          key={item.id}
          className="canvas-item"
          style={{ left: item.x, top: item.y }}
        >
          {item.type === "input" && <input placeholder="Type here..." />}
          {item.type === "button" && <button type="button">Click Me</button>}
          {item.type === "text" && <span>Sample Text</span>}
        </div>
      ))}
    </main>
  );
}

export default function DragDropCanvas() {
  const [canvasItems, setCanvasItems] = useState([]);
  const [draggingItem, setDraggingItem] = useState(null);
  const canvasRef = useRef(null);

  function handleDrop(event) {
    event.preventDefault();
    if (!draggingItem || !canvasRef.current) return;

    const rect = canvasRef.current.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    setCanvasItems((items) => [
      ...items,
      {
        id: crypto.randomUUID(),
        type: draggingItem.type,
        x,
        y,
      },
    ]);
    setDraggingItem(null);
  }

  return (
    <div className="builder">
      <LeftComponentPanel components={COMPONENTS} onDragStart={setDraggingItem} />
      <Canvas
        canvasRef={canvasRef}
        items={canvasItems}
        onDrop={handleDrop}
        onDragOver={(event) => event.preventDefault()}
      />
    </div>
  );
}
```

CSS:

```css
.builder {
  display: flex;
  min-height: 100vh;
  background: #fafafa;
}

.builder-panel {
  width: 14rem;
  padding: 1rem;
  border-right: 1px solid #d0d7de;
  background: #f6f8fa;
}

.builder-item {
  display: block;
  width: 100%;
  margin-block: 0.5rem;
  padding: 0.625rem;
  cursor: grab;
}

.builder-canvas {
  position: relative;
  flex: 1;
  margin: 1rem;
  border: 2px dashed #d0d7de;
  background: white;
}

.canvas-item {
  position: absolute;
  transform: translate(-50%, -50%);
}
```

Bonus: allow dropped elements to be dragged inside the canvas to reposition.

---

# 3. Counter Incrementing Every 3 Seconds

Problem: create a counter that increments every 3 seconds and resets when the button is clicked.

```jsx
import React, { useEffect, useRef, useState } from "react";

export default function AutoCounter() {
  const [count, setCount] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = window.setInterval(() => {
      setCount((value) => value + 1);
    }, 3000);

    return () => window.clearInterval(timerRef.current);
  }, []);

  function resetCounter() {
    setCount(0);
  }

  return (
    <section>
      <p>Count: {count}</p>
      <button type="button" onClick={resetCounter}>
        Reset
      </button>
    </section>
  );
}
```

If the requirement says reset and stop, also call `clearInterval(timerRef.current)` inside `resetCounter`.

---

# 4. Render Recursive Menu

Problem: render nested menu items using recursion.

```jsx
const menu = [
  {
    label: "Products",
    children: [
      { label: "Phones" },
      { label: "Laptops" },
    ],
  },
  {
    label: "Settings",
    children: [
      { label: "Profile" },
      { label: "Security" },
    ],
  },
];

function MenuList({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.label}>
          <span>{item.label}</span>
          {item.children?.length > 0 && <MenuList items={item.children} />}
        </li>
      ))}
    </ul>
  );
}
```

Interview point: recursion is a natural fit when the data shape is recursively nested.

---

# 5. Native Multi-Select

```jsx
import { useState } from "react";

export default function NativeMultiSelect() {
  const [selected, setSelected] = useState([]);

  function handleChange(event) {
    const values = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
    setSelected(values);
  }

  return (
    <div>
      <label htmlFor="skills">Choose your skills</label>
      <select id="skills" multiple value={selected} onChange={handleChange}>
        <option value="react">React</option>
        <option value="redux">Redux</option>
        <option value="javascript">JavaScript</option>
        <option value="typescript">TypeScript</option>
      </select>
      <p>Selected: {selected.join(", ")}</p>
    </div>
  );
}
```

Use this when native behavior is enough. It is accessible and simple.

---

# 6. Custom Multi-Select with Deselect

```jsx
import { useState } from "react";

const OPTIONS = ["React", "Redux", "JavaScript", "TypeScript", "Node.js"];

export default function MultiSelect() {
  const [selected, setSelected] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  function handleSelect(option) {
    setSelected((current) =>
      current.includes(option)
        ? current.filter((item) => item !== option)
        : [...current, option]
    );
  }

  return (
    <div className="multi-select">
      <button
        type="button"
        className="dropdown-header"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
      >
        <span>{selected.length > 0 ? selected.join(", ") : "Select options"}</span>
        <span aria-hidden="true">{isOpen ? "up" : "down"}</span>
      </button>

      {isOpen && (
        <div className="dropdown-list">
          {OPTIONS.map((option) => (
            <label key={option} className="dropdown-option">
              <input
                type="checkbox"
                checked={selected.includes(option)}
                onChange={() => handleSelect(option)}
              />
              {option}
            </label>
          ))}

          {selected.length > 0 && (
            <button type="button" className="clear-btn" onClick={() => setSelected([])}>
              Clear All
            </button>
          )}
        </div>
      )}
    </div>
  );
}
```

CSS:

```css
.multi-select {
  position: relative;
  width: 16rem;
  font-family: system-ui, sans-serif;
}

.dropdown-header {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  border: 1px solid #d0d7de;
  background: white;
}

.dropdown-list {
  position: absolute;
  z-index: 10;
  inset-inline: 0;
  top: 100%;
  max-height: 12rem;
  overflow-y: auto;
  border: 1px solid #d0d7de;
  background: white;
}

.dropdown-option {
  display: flex;
  gap: 0.5rem;
  padding: 0.5rem;
}

.clear-btn {
  width: 100%;
  padding: 0.5rem;
}
```

Senior note: a custom multi-select needs keyboard support, focus management, click-outside handling, and ARIA if it behaves like a combobox/listbox.

---

# 7. Paginated Search with Debounce and Favorites

Requirements:

* search input
* fetch users
* show loading and error states
* debounce input by 500ms
* paginate 5 users per page
* favorite toggle persists across pagination

```jsx
import React, { useEffect, useMemo, useState } from "react";

const PAGE_SIZE = 5;

function useDebouncedValue(value, delay) {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => setDebounced(value), delay);
    return () => window.clearTimeout(timeoutId);
  }, [value, delay]);

  return debounced;
}

export default function SearchUsers() {
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState([]);
  const [favorites, setFavorites] = useState(() => new Set());
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const debouncedQuery = useDebouncedValue(query.trim().toLowerCase(), 500);

  useEffect(() => {
    async function fetchUsers() {
      try {
        setStatus("loading");
        setError("");

        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) throw new Error(`HTTP ${response.status}`);

        const data = await response.json();
        setUsers(data);
        setStatus("success");
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch users");
        setStatus("error");
      }
    }

    fetchUsers();
  }, []);

  const filteredUsers = useMemo(() => {
    if (!debouncedQuery) return users;

    return users.filter((user) =>
      user.name.toLowerCase().includes(debouncedQuery)
    );
  }, [users, debouncedQuery]);

  const pageCount = Math.max(1, Math.ceil(filteredUsers.length / PAGE_SIZE));

  const visibleUsers = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return filteredUsers.slice(start, start + PAGE_SIZE);
  }, [filteredUsers, page]);

  useEffect(() => {
    setPage(1);
  }, [debouncedQuery]);

  function toggleFavorite(userId) {
    setFavorites((current) => {
      const next = new Set(current);
      if (next.has(userId)) next.delete(userId);
      else next.add(userId);
      return next;
    });
  }

  return (
    <section>
      <label htmlFor="user-search">Search users</label>
      <input
        id="user-search"
        type="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />

      {status === "loading" && <p>Loading users...</p>}
      {status === "error" && <p role="alert">{error}</p>}

      {status === "success" && (
        <>
          <ul>
            {visibleUsers.map((user) => (
              <li key={user.id}>
                <span>{user.name}</span>
                <button type="button" onClick={() => toggleFavorite(user.id)}>
                  {favorites.has(user.id) ? "Unfavorite" : "Favorite"}
                </button>
              </li>
            ))}
          </ul>

          <nav aria-label="Pagination">
            {Array.from({ length: pageCount }, (_, index) => (
              <button
                key={index + 1}
                type="button"
                disabled={page === index + 1}
                onClick={() => setPage(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </nav>
        </>
      )}
    </section>
  );
}
```

Common bugs from scratch attempts:

* initializing `users` as a string but using it as an array
* missing debounce delay
* using `Math.floor` instead of `Math.ceil` for page count
* missing `key` while rendering lists
* storing favorites only inside paginated list state, then losing them across pages

Interview upgrade:

* use `AbortController` for cancellation
* extract `useDebouncedValue`
* use `Set` for favorite IDs
* use `useMemo` for filtered/paginated users
* reset page when search query changes

---

# 8. Prevent Child Rerender and Build Custom Memo

Source interview: HCL/Cisco notes from `questions (2).docx`.

Requirement: changing `count` in the parent should not rerender the input child unnecessarily.

```jsx
import React, { memo, useCallback, useState } from "react";

const InputComponent = memo(function InputComponent({ name, value, onChange }) {
  console.log("input rendered");
  return <input name={name} value={value} onChange={onChange} />;
});

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [count, setCount] = useState(0);

  const inputChangeHandler = useCallback((event) => {
    setInputValue(event.target.value);
  }, []);

  return (
    <div>
      <InputComponent
        name="input1"
        value={inputValue}
        onChange={inputChangeHandler}
      />

      <p>Input value: {inputValue}</p>
      <p>Count value: {count}</p>

      <button type="button" onClick={() => setCount((value) => value + 1)}>
        Increment
      </button>
    </div>
  );
}
```

Important correction from the source attempt: do not put `inputValue` in the callback dependency array if the callback only uses `setInputValue`. That would create a new function whenever the input changes.

Custom memo learning version:

```jsx
import React, { useRef } from "react";

function shallowEqual(previousProps, nextProps) {
  if (previousProps === nextProps) return true;
  if (!previousProps || !nextProps) return false;

  const previousKeys = Object.keys(previousProps);
  const nextKeys = Object.keys(nextProps);

  if (previousKeys.length !== nextKeys.length) return false;

  return previousKeys.every(
    (key) => Object.is(previousProps[key], nextProps[key])
  );
}

function myMemo(Component) {
  return function MemoizedComponent(props) {
    const previousPropsRef = useRef(null);
    const previousElementRef = useRef(null);

    if (!shallowEqual(previousPropsRef.current, props)) {
      previousPropsRef.current = props;
      previousElementRef.current = <Component {...props} />;
    }

    return previousElementRef.current;
  };
}
```

Senior note: this is useful for understanding, but in production use `React.memo`. React's real memoization is integrated with the renderer and has more nuance than this simplified wrapper.

---

# 9. Sorted Boxes with Recursive Nested Boxes

Source interview: `Hcl interview prep1. .docx`.

Requirements:

* input `3` creates a box labeled `3`
* input `1` creates a box labeled `1` and list displays `[1][3]`
* input `-3` removes the box `3`
* input `1,1` creates nested boxes `1 -> 1`
* input `2,3` creates nested boxes `2 -> 3`
* nesting can go any depth

```jsx
import { useMemo, useState } from "react";

function parseEntry(rawValue) {
  const value = rawValue.trim();
  if (!value) return null;

  if (value.includes(",")) {
    const numbers = value.split(",").map((item) => Number(item.trim()));
    if (numbers.some((number) => Number.isNaN(number))) return null;
    return { type: "nested", values: numbers };
  }

  const number = Number(value);
  if (Number.isNaN(number)) return null;

  return number < 0
    ? { type: "remove", value: Math.abs(number) }
    : { type: "single", value: number };
}

function NestedBox({ values, depth = 0 }) {
  const [current, ...rest] = values;

  return (
    <div className="nested-box" style={{ margin: 12, padding: 12 }}>
      <strong>{current}</strong>
      {rest.length > 0 && <NestedBox values={rest} depth={depth + 1} />}
    </div>
  );
}

export default function SortedBoxes() {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);

  const sortedItems = useMemo(() => {
    return [...items].sort((a, b) => {
      const aValue = a.type === "single" ? a.value : a.values[0];
      const bValue = b.type === "single" ? b.value : b.values[0];
      return aValue - bValue;
    });
  }, [items]);

  function handleSubmit(event) {
    event.preventDefault();

    const parsed = parseEntry(input);
    if (!parsed) return;

    setItems((currentItems) => {
      if (parsed.type === "remove") {
        return currentItems.filter((item) => {
          const firstValue = item.type === "single" ? item.value : item.values[0];
          return firstValue !== parsed.value;
        });
      }

      return [...currentItems, parsed];
    });

    setInput("");
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <label htmlFor="box-input">Number or nested sequence</label>
        <input
          id="box-input"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder="3, -3, or 1,2,3"
        />
        <button type="submit">Apply</button>
      </form>

      <div className="box-list">
        {sortedItems.map((item, index) =>
          item.type === "single" ? (
            <div className="box" key={`${item.value}-${index}`}>
              {item.value}
            </div>
          ) : (
            <NestedBox key={`${item.values.join("-")}-${index}`} values={item.values} />
          )
        )}
      </div>
    </section>
  );
}
```

CSS:

```css
.box-list {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-top: 16px;
}

.box,
.nested-box {
  min-width: 56px;
  min-height: 56px;
  display: grid;
  place-items: center;
  border: 1px solid #8a8f98;
  background: #f6f8fa;
}
```

Interview upgrades:

* model nested and single boxes explicitly
* validate input before state update
* use recursion only for rendering nested boxes
* sort derived UI with `useMemo`
* avoid `Number(value) == NaN`; use `Number.isNaN`

---

# 10. Drag-and-Drop Form Builder

Source interview: Sol-X notes from `questions (2).docx`.

Requirement: left panel has items such as label, text input, and button. Drag an item to the right panel and render it as an actual HTML element.

```jsx
import { useState } from "react";

const PALETTE = [
  { type: "label", label: "Label" },
  { type: "input", label: "Text Input" },
  { type: "button", label: "Button" },
];

function renderField(field) {
  if (field.type === "label") {
    return <label>Generated Label</label>;
  }

  if (field.type === "input") {
    return <input placeholder="Generated input" />;
  }

  if (field.type === "button") {
    return <button type="button">Generated Button</button>;
  }

  return null;
}

export default function FormBuilder() {
  const [fields, setFields] = useState([]);

  function handleDragStart(event, item) {
    event.dataTransfer.setData("application/json", JSON.stringify(item));
  }

  function handleDrop(event) {
    event.preventDefault();
    const item = JSON.parse(event.dataTransfer.getData("application/json"));

    setFields((currentFields) => [
      ...currentFields,
      { ...item, id: crypto.randomUUID() },
    ]);
  }

  return (
    <main className="builder">
      <aside>
        {PALETTE.map((item) => (
          <button
            key={item.type}
            draggable
            type="button"
            onDragStart={(event) => handleDragStart(event, item)}
          >
            {item.label}
          </button>
        ))}
      </aside>

      <section
        className="drop-zone"
        onDragOver={(event) => event.preventDefault()}
        onDrop={handleDrop}
      >
        {fields.map((field) => (
          <div key={field.id} className="field-preview">
            {renderField(field)}
          </div>
        ))}
      </section>
    </main>
  );
}
```

Production upgrades:

* keyboard-accessible add/remove controls
* reorder support
* field labels and validation rules
* persisted JSON schema
* undo/redo
* selected-field properties panel
* screen-reader-friendly drop feedback
