# DOM Basics, Selectors, and Nodes (Senior Frontend Engineer Perspective)

Before going deeper into frameworks or libraries, understand this topic as part of real frontend engineering: reading and changing the document through browser APIs.

---

# 1. Fundamentals

* Browser APIs connect JavaScript to documents, events, storage, networking, and security boundaries.
* DOM code should preserve semantics, accessibility, and performance.
* The browser is a shared runtime: user input, rendering, scripts, network, and storage interact.

---

# 2. Core Concepts

| Concept | Practical meaning |
| ------- | ----------------- |
| DOM | Live tree representation of the document. |
| Node | A unit in the DOM tree. |
| Event | A notification from user input, browser lifecycle, network, or code. |
| Mutation | A change to DOM structure, text, attributes, or state. |
| Accessibility tree | Browser-derived structure consumed by assistive technologies. |

---

# 3. Internal Working

* DOM reads and writes can trigger style and layout work when mixed carelessly.
* Browser security policies isolate origins and require explicit server permission for cross-origin reads.
* Native elements expose behavior and accessibility that custom JavaScript must otherwise recreate.

---

# 4. Common Mistakes

* Building inaccessible custom controls.
* Adding event listeners repeatedly without cleanup.
* Reading and writing layout in tight loops.
* Trusting unsanitized user input.

---

# 5. Best Practices

* Use semantic HTML first.
* Delegate events for dynamic lists.
* Batch DOM reads and writes.
* Clean up listeners, observers, timers, and subscriptions.

---

# 6. Code Example

```js
const list = document.querySelector("[data-orders]");

const item = document.createElement("li");
item.textContent = "Order #123";
list.append(item);
```

---

# 7. Real-world Scenarios

* Adding accessible keyboard behavior to a dynamic list.
* Persisting user preferences in local storage.
* Preventing injected user content from becoming executable markup.

---

# 7.1 DOM vs BOM

| Topic | DOM | BOM |
| ----- | --- | --- |
| Full form | Document Object Model | Browser Object Model |
| Root object | `document` | `window` |
| Represents | HTML/XML page content | Browser environment |
| Common APIs | `querySelector`, `createElement`, `append`, `classList` | `location`, `history`, `navigator`, `screen`, dialogs |
| React usage | React renders UI changes into the real DOM | Routers, viewport hooks, navigation, storage, and browser capabilities |

DOM example:

```js
const title = document.getElementById("main-title");
title.textContent = "Welcome";

document.querySelector(".save").addEventListener("click", () => {
  console.log("saved");
});
```

BOM example:

```js
console.log(window.innerWidth);
console.log(navigator.userAgent);
history.back();
location.href = "/dashboard";
```

React note: prefer React state and props for UI updates. Use refs only when you need direct DOM access, such as focusing an input or integrating with a non-React library.

```jsx
function SearchBox() {
  const inputRef = React.useRef(null);

  React.useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return <input ref={inputRef} />;
}
```

# 8. Senior Deep Dive

## When to Use

* Use DOM APIs for light interaction, progressive enhancement, and framework-free pages.
* Use observers for visibility, size, or mutation tracking instead of polling.
* Use storage only for data that is safe and appropriate to keep on the client.

## Debug Checklist

* Inspect event target/currentTarget and propagation phase.
* Check layout reads and writes when interaction feels slow.
* Review security errors, CORS headers, CSP violations, and unsafe HTML insertion.

## Code Review Checklist

* Are listeners, timers, observers, and subscriptions cleaned up?
* Is untrusted content inserted safely?
* Does JavaScript preserve native semantics and focus behavior?


---

# Revision Notes

* DOM Basics, Selectors, and Nodes matters because it affects real users, future maintainers, and production behavior.
* Learn the mental model before memorizing syntax.
* Use browser DevTools, tests, and small examples to verify behavior.
* Browser APIs connect JavaScript to documents, events, storage, networking, and security boundaries.
* DOM code should preserve semantics, accessibility, and performance.
* The browser is a shared runtime: user input, rendering, scripts, network, and storage interact.

---

# Cheat Sheet

| Concept | Practical meaning |
| ------- | ----------------- |
| DOM | Live tree representation of the document. |
| Node | A unit in the DOM tree. |
| Event | A notification from user input, browser lifecycle, network, or code. |
| Mutation | A change to DOM structure, text, attributes, or state. |
| Accessibility tree | Browser-derived structure consumed by assistive technologies. |

---

# Interview Questions with Answers

### 1. What is the DOM, and why is it not the same as the HTML source?

The DOM is the browser's live object tree after parsing, correction, script changes, and runtime updates. The HTML source is only the initial text. DevTools shows the current DOM, which may include browser-inserted elements and JavaScript mutations.

### 2. What is the difference between `querySelector` and `getElementById`?

`getElementById` finds one element by id and is very direct. `querySelector` accepts any CSS selector and returns the first match, which is more flexible but depends on selector correctness and scope.

### 3. Why can repeated DOM reads and writes make an interaction slow?

Layout-dependent reads like `offsetHeight` can force the browser to calculate layout. If code alternates reads and writes in a loop, it can cause layout thrashing. Batch reads first, then writes.

### 4. When would you use `DocumentFragment` or template cloning?

Use them when preparing multiple DOM nodes before insertion, especially in framework-free code. They reduce repeated live DOM work and keep construction separate from rendering.

### 5. What DOM code review issues do you look for?

Unsafe `innerHTML`, broad selectors, missing cleanup, repeated layout reads/writes, custom controls without semantics, and code that fights the framework's ownership of the DOM.

---

# Hands-on Exercises

## Exercise 1

Build a tiny DOM interaction for DOM Basics, Selectors, and Nodes.

### Solution

Use semantic HTML, add one event listener, preserve keyboard behavior, and clean up any timer/listener/observer if needed.

## Exercise 2

Inspect the result in DevTools.

### Solution

Check DOM structure, events, computed styles, accessibility name, storage/network/security state if relevant.

---

# Senior Frontend Engineer Takeaway

For senior-level work, DOM Basics, Selectors, and Nodes is not only a syntax topic. You should be able to explain the mental model, choose the right pattern for a product requirement, identify common failure modes, and verify behavior through tooling, tests, and browser inspection.
