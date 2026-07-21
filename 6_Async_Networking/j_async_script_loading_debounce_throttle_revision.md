# Async Script Loading, Debounce, and Throttle Revision

This file incorporates async timing notes from the pasted `JS revision.md`.

---

# 1. Event Loop Quick Revision

JavaScript is single-threaded, but async work is handled through the browser or Node runtime.

Flow:

```text
Call stack
  -> microtask queue
  -> task / macrotask queue
```

Microtasks run before macrotasks.

```js
console.log("Start");

setTimeout(() => console.log("setTimeout"), 0);

Promise.resolve().then(() => console.log("Promise"));

console.log("End");
```

Output:

```text
Start
End
Promise
setTimeout
```

| Queue | Examples | Priority |
| ----- | -------- | -------- |
| Microtask | `Promise.then`, `queueMicrotask`, `MutationObserver` | Higher |
| Macrotask / task | `setTimeout`, `setInterval`, DOM events | Lower |

Node.js event loop also has phases such as timers, pending callbacks, poll, check, and close callbacks.

---

# 2. `async` vs `defer`

| Script loading | Downloads | Executes | Order |
| -------------- | --------- | -------- | ----- |
| Normal script | During parsing | Immediately when reached | Blocks parsing |
| `async` | Parallel | As soon as downloaded | Not guaranteed |
| `defer` | Parallel | After HTML parsing | Preserves order |
| `type="module"` | Parallel | Deferred by default | Module dependency order |

Practical rule:

```html
<script defer src="main.js"></script>
```

Use `defer` when the script needs DOM elements to exist.

Use `async` for independent scripts such as analytics where execution order does not matter.

Modern app entry:

```html
<script type="module" src="/src/main.js"></script>
```

---

# 3. Debounce

Debounce waits until activity pauses.

Use for:

* search input
* resize event
* validation after typing
* autosave after user stops typing

```js
function debounce(callback, delay) {
  let timeoutId;

  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback(...args), delay);
  };
}

const search = debounce((term) => {
  console.log("Searching", term);
}, 300);
```

---

# 4. Throttle

Throttle limits how often a function can run.

Use for:

* scroll event
* mousemove
* resize updates
* live position tracking

```js
function throttle(callback, limit) {
  let waiting = false;

  return (...args) => {
    if (waiting) return;

    callback(...args);
    waiting = true;

    setTimeout(() => {
      waiting = false;
    }, limit);
  };
}
```

---

# 5. Debounce vs Throttle

| Concept | Meaning | Example |
| ------- | ------- | ------- |
| Debounce | Run after user stops triggering | search box |
| Throttle | Run at most once per interval | scroll tracker |

Simple memory:

```text
Debounce = wait for pause
Throttle = control speed
```

---

# 6. React Debounce Hook

```jsx
import { useEffect, useState } from "react";

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [value, delay]);

  return debouncedValue;
}
```

Usage:

```jsx
function SearchBox() {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 300);

  useEffect(() => {
    if (debouncedQuery) {
      console.log("Fetch results", debouncedQuery);
    }
  }, [debouncedQuery]);
}
```

---

# 7. React Throttle Cleanup

```jsx
useEffect(() => {
  const handleScroll = throttle(() => {
    console.log(window.scrollY);
  }, 300);

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);
```

Important:

* keep function references stable when removing listeners
* clear timers in cleanup when needed
* lodash `debounce` and `throttle` can be useful in production

---

# Interview Notes

### Why does Promise run before setTimeout?

Promise callbacks go to the microtask queue. `setTimeout` callbacks go to the task queue. Microtasks run first after the current stack finishes.

### When use debounce?

When you want to wait until repeated actions pause, like search input.

### When use throttle?

When you want to limit a frequently firing event, like scroll or resize.

