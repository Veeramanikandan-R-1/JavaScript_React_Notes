# Events and Event Delegation (Senior Frontend Engineer Perspective)

Before going deeper into frameworks or libraries, understand this topic as part of real frontend engineering: handling user and browser events with propagation in mind.

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
document.querySelector("[data-list]").addEventListener("click", (event) => {
  const button = event.target.closest("[data-remove-id]");
  if (!button) return;

  removeItem(button.dataset.removeId);
});
```

---

# 7. Real-world Scenarios

* Adding accessible keyboard behavior to a dynamic list.
* Persisting user preferences in local storage.
* Preventing injected user content from becoming executable markup.

---

# 7.1 Capture, Bubble, Passive Listeners, and React

Event phases:

```text
capture phase -> target phase -> bubble phase
```

React capture handler:

```jsx
function Toolbar() {
  return (
    <div onClickCapture={() => console.log("capture")}>
      <button onClick={() => console.log("button")}>Save</button>
    </div>
  );
}
```

Native passive listener for scroll/touch performance:

```js
window.addEventListener(
  "scroll",
  () => {
    console.log(window.scrollY);
  },
  { passive: true }
);
```

Passive listeners tell the browser the handler will not call `preventDefault()`, which can help scrolling stay responsive.

React uses a SyntheticEvent wrapper around native events. You still need to understand native propagation because React handlers are ultimately tied to browser events.

---

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

* Events and Event Delegation matters because it affects real users, future maintainers, and production behavior.
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

### 1. How would you explain Events and Event Delegation in a real project?

It is about using the web platform directly: DOM, events, forms, storage, security boundaries, and browser rendering.

### 2. What happens internally when Events and Event Delegation is involved?

Browser APIs are live and stateful, so code must clean up listeners, avoid layout thrashing, preserve accessibility, and respect security limits.

### 3. How do you debug issues related to Events and Event Delegation?

I inspect DOM state, event propagation, network/security errors, storage values, accessibility names, and performance traces.

### 4. What is the biggest production risk with Events and Event Delegation?

The biggest risk is building something that works for the demo state but fails with real content, slow networks, accessibility needs, errors, or future changes.

### 5. What should a senior engineer look for in code review?

They should check the mental model, edge cases, accessibility, performance cost, naming, state ownership, test coverage, and whether the simpler native/platform option was considered.

---

# Hands-on Exercises

## Exercise 1

Build a tiny DOM interaction for Events and Event Delegation.

### Solution

Use semantic HTML, add one event listener, preserve keyboard behavior, and clean up any timer/listener/observer if needed.

## Exercise 2

Inspect the result in DevTools.

### Solution

Check DOM structure, events, computed styles, accessibility name, storage/network/security state if relevant.

---

# Senior Frontend Engineer Takeaway

For senior-level work, Events and Event Delegation is not only a syntax topic. You should be able to explain the mental model, choose the right pattern for a product requirement, identify common failure modes, and verify behavior through tooling, tests, and browser inspection.
