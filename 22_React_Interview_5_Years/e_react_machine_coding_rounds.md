# React Machine Coding Rounds for 5-Year Interviews

This note lists high-value React machine-coding tasks and the senior details interviewers expect.

---

# 1. How to Approach Any Machine Coding Round

Use this sequence:

1. Clarify requirements and edge cases.
2. Define data shape.
3. Build small components.
4. Keep state ownership clear.
5. Add loading/error/empty states where needed.
6. Make keyboard/accessibility reasonable.
7. Handle cleanup for timers, listeners, and requests.
8. Explain tradeoffs while coding.

Interview line:

> I first make the happy path work, then harden the states users actually hit: empty, error, loading, disabled, stale, and repeated actions.

---

# 2. Autocomplete with Debounce and Abort

## Requirements

* user types query
* debounce API call
* abort stale request
* show loading, empty, error
* keyboard select with arrow keys and Enter

## Core Hook

```jsx
function useAutocomplete(query) {
  const [state, setState] = useState({
    status: "idle",
    items: [],
    error: null
  });

  useEffect(() => {
    if (!query.trim()) {
      setState({ status: "idle", items: [], error: null });
      return;
    }

    const controller = new AbortController();
    const timeoutId = setTimeout(async () => {
      setState((prev) => ({ ...prev, status: "loading" }));

      try {
        const response = await fetch(`/api/search?q=${encodeURIComponent(query)}`, {
          signal: controller.signal
        });

        if (!response.ok) throw new Error("Search failed");

        const items = await response.json();
        setState({ status: items.length ? "success" : "empty", items, error: null });
      } catch (error) {
        if (error.name !== "AbortError") {
          setState({ status: "error", items: [], error });
        }
      }
    }, 300);

    return () => {
      controller.abort();
      clearTimeout(timeoutId);
    };
  }, [query]);

  return state;
}
```

Expected senior points:

* debounce reduces calls
* abort prevents stale responses
* arrow-key support matters
* selection should update input and close list
* loading should not flicker aggressively

---

# 3. Reusable Modal with Focus Handling

## Requirements

* open/close
* close on Escape
* close on backdrop click
* focus modal on open
* restore focus on close
* render with portal

```jsx
function Modal({ open, title, children, onClose }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    if (!open) return;

    const previous = document.activeElement;
    dialogRef.current?.focus();

    function onKeyDown(event) {
      if (event.key === "Escape") onClose();
    }

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      previous?.focus?.();
    };
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <div className="backdrop" onMouseDown={onClose}>
      <section
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label={title}
        tabIndex={-1}
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button onClick={onClose} aria-label="Close">x</button>
        {children}
      </section>
    </div>,
    document.body
  );
}
```

Upgrade if time:

* trap focus
* lock body scroll
* animate with reduced-motion support
* use native `<dialog>` when appropriate

---

# 4. Toast Manager

## Requirements

* add toast
* auto-dismiss
* manual close
* multiple toasts
* different variants

State shape:

```js
const toast = {
  id: "1",
  type: "success",
  message: "Saved",
  duration: 3000
};
```

Reducer:

```jsx
function toastReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [...state, action.toast];
    case "REMOVE":
      return state.filter((toast) => toast.id !== action.id);
    default:
      return state;
  }
}
```

Senior points:

* remove timers on unmount
* use ARIA live region for announcements
* avoid blocking user interaction
* keep API simple: `toast.success("Saved")`

---

# 5. Data Table with Sort, Filter, Pagination

## Requirements

* server pagination
* sorting
* search
* column filters
* loading/error/empty
* row action

State:

```js
const tableState = {
  page: 1,
  pageSize: 25,
  sortBy: "createdAt",
  sortDirection: "desc",
  query: "",
  filters: { status: "active" }
};
```

Query key:

```js
["users", tableState]
```

Senior points:

* store shareable table state in URL when useful
* reset page to 1 when filters change
* debounce search
* keep selected row IDs separate from row objects
* memoize columns if table library depends on reference stability
* virtualize if rows are large

---

# 6. Custom `useFetch` with Cancellation

```jsx
function useFetch(url) {
  const [state, setState] = useState({
    status: "idle",
    data: null,
    error: null
  });

  useEffect(() => {
    if (!url) return;

    const controller = new AbortController();

    async function load() {
      setState({ status: "loading", data: null, error: null });

      try {
        const response = await fetch(url, { signal: controller.signal });
        if (!response.ok) throw new Error("Request failed");
        const data = await response.json();
        setState({ status: "success", data, error: null });
      } catch (error) {
        if (error.name !== "AbortError") {
          setState({ status: "error", data: null, error });
        }
      }
    }

    load();

    return () => controller.abort();
  }, [url]);

  return state;
}
```

Senior answer:

> In production I would usually use React Query, SWR, or RTK Query. I write `useFetch` in interviews to show the underlying loading/error/cancellation model.

---

# 7. Nested Comments

## Requirements

* render nested tree
* reply to comment
* collapse/expand
* optimistic add

Data:

```js
const comment = {
  id: "1",
  text: "First comment",
  children: []
};
```

Recursive render:

```jsx
function CommentNode({ comment }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <li>
      <article>
        <p>{comment.text}</p>
        <button onClick={() => setCollapsed((value) => !value)}>
          {collapsed ? "Expand" : "Collapse"}
        </button>
      </article>

      {!collapsed && comment.children.length > 0 && (
        <ul>
          {comment.children.map((child) => (
            <CommentNode key={child.id} comment={child} />
          ))}
        </ul>
      )}
    </li>
  );
}
```

Senior points:

* stable IDs are critical
* deeply nested trees may need virtualization or pagination
* optimistic reply needs temp ID and failure handling

---

# 8. Cart with Optimistic Update

## Requirements

* add/remove item
* quantity update
* total price
* optimistic UI
* rollback on failure

Senior approach:

* derive totals from cart items
* disable repeated destructive actions while pending if needed
* use optimistic update only when rollback is clear
* reconcile server response
* avoid floating-point currency bugs by using cents

```js
function getCartTotal(items) {
  return items.reduce((total, item) => {
    return total + item.priceCents * item.quantity;
  }, 0);
}
```

---

# 9. Dynamic Form Builder

## Requirements

* render fields from schema
* validate required fields
* show errors
* support select, checkbox, text
* submit valid data

Schema:

```js
const fields = [
  { name: "name", label: "Name", type: "text", required: true },
  { name: "role", label: "Role", type: "select", options: ["Admin", "User"] },
  { name: "active", label: "Active", type: "checkbox" }
];
```

Senior points:

* labels and errors must be accessible
* validation belongs in schema/helper, not scattered JSX
* use React Hook Form for production scale
* server must revalidate submitted data

---

# 10. Final Machine Coding Checklist

Before you say "done":

* Can empty data render?
* Can errors render?
* Are buttons disabled while pending?
* Is state owned by the right component?
* Are keys stable?
* Are timers/listeners/requests cleaned up?
* Does keyboard navigation basically work?
* Are inputs labelled?
* Are derived values calculated instead of duplicated?
* Can you explain one improvement if you had more time?

