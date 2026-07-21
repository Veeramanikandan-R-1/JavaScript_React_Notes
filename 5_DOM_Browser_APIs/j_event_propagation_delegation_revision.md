# Event Propagation and Event Delegation Revision

This file incorporates unique DOM event notes from the pasted `JS revision.md`.

---

# 1. Event Propagation Phases

When a click happens on a child element inside a parent, the event moves through phases.

```text
Capturing phase: window -> document -> html -> body -> parent -> child
Target phase: event reaches actual target
Bubbling phase: child -> parent -> body -> html -> document -> window
```

| Phase | Direction | Default? | Use case |
| ----- | --------- | -------- | -------- |
| Capturing | Top to down | No, use `{ capture: true }` | Parent handles before child |
| Target | Actual element | Yes | The clicked/input element |
| Bubbling | Bottom to up | Yes | Most normal event handling |

---

# 2. Bubbling Example

```html
<div id="parent">
  <button id="child">Click Me</button>
</div>

<script>
  document.getElementById("parent").addEventListener("click", () => {
    console.log("Parent clicked");
  });

  document.getElementById("child").addEventListener("click", () => {
    console.log("Child clicked");
  });
</script>
```

Output:

```text
Child clicked
Parent clicked
```

---

# 3. Capturing Example

```js
document.getElementById("parent").addEventListener(
  "click",
  () => {
    console.log("Parent clicked during capture");
  },
  { capture: true }
);
```

The parent listener runs before the child listener.

---

# 4. Stop Propagation

```js
document.getElementById("child").addEventListener("click", (event) => {
  console.log("Child clicked");
  event.stopPropagation();
});
```

Use `stopPropagation()` only when parent handlers should not run.

---

# 5. Event Delegation

Event delegation means adding one listener to a parent and using bubbling to handle child events.

Bad for many items:

```js
document.querySelectorAll("li").forEach((item) => {
  item.addEventListener("click", () => {
    console.log(item.textContent);
  });
});
```

Better:

```js
const list = document.getElementById("fruits");

list.addEventListener("click", (event) => {
  const item = event.target.closest("li");
  if (!item || !list.contains(item)) return;

  console.log(item.textContent);
});
```

Benefits:

* fewer event listeners
* works for dynamically added elements
* cleaner list/table/menu handling

Limitations:

* depends on bubbling
* does not work the same for non-bubbling events like `focus` and `blur`
* must check `event.target` carefully

---

# 6. Dynamic Elements

```js
document.getElementById("add").addEventListener("click", () => {
  const item = document.createElement("li");
  item.textContent = "New Item";
  document.getElementById("fruits").append(item);
});
```

If the listener is on the parent `<ul>`, clicks on new `<li>` items still work.

---

# 7. React Note

React uses a delegated event system internally. Most React events bubble by default.

```jsx
function App() {
  return (
    <div onClick={() => console.log("Parent clicked")}>
      <button
        onClick={(event) => {
          event.stopPropagation();
          console.log("Child clicked");
        }}
      >
        Click Me
      </button>
    </div>
  );
}
```

---

# Interview Notes

### Event bubbling vs capturing?

Capturing goes from parent/root down to target. Bubbling goes from target back up to ancestors. Bubbling is the default for normal event listeners.

### What is event delegation?

Attaching one listener to a parent and using `event.target` or `closest()` to identify which child triggered the event.

### Why use event delegation?

It reduces listeners, handles dynamic children, and is useful for lists, tables, menus, and forms.

