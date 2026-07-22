# Accessibility with JavaScript (Senior Frontend Engineer Perspective)

Before going deeper into frameworks or libraries, understand this topic as part of real frontend engineering: focus management, keyboard patterns, live regions, dialogs, menus, and reduced motion in dynamic UI.

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
function openDialog(dialog, trigger) {
  dialog.showModal();
  dialog.querySelector("button, [href], input, select, textarea")?.focus();

  dialog.addEventListener(
    "close",
    () => {
      trigger.focus();
    },
    { once: true }
  );
}
```

---

# 7. Real-world Scenarios

* Adding accessible keyboard behavior to a dynamic list.
* Persisting user preferences in local storage.
* Preventing injected user content from becoming executable markup.

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

* Accessibility with JavaScript matters because it affects real users, future maintainers, and production behavior.
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

### 1. What accessibility behavior can JavaScript accidentally break?

JavaScript can break focus order, keyboard activation, native form behavior, announcements, scroll position, browser history, and semantic relationships. The more custom the interaction, the more responsibility the script takes on.

### 2. How should focus behave when opening and closing a modal?

Move focus into the modal when it opens, keep keyboard focus inside while it is modal, close on expected actions, and return focus to the triggering element when it closes. The rest of the page should not be reachable to assistive tech while blocked.

### 3. When should you use ARIA?

Use native HTML first. Add ARIA when native semantics are not enough, and only when you also implement the required keyboard behavior and state updates. ARIA changes meaning; it does not create behavior.

### 4. How do you make dynamic updates understandable to screen-reader users?

Use appropriate live regions for status updates, keep messages concise, avoid constantly changing announcements, and ensure focus moves only when the user's task requires it.

### 5. What accessibility checks do you expect before shipping custom interaction?

Keyboard-only operation, visible focus, accessible names, correct roles/states, screen-reader behavior, reduced motion, zoom support, and that native semantics were preserved wherever possible.

---

# Hands-on Exercises

## Exercise 1

Build a tiny DOM interaction for Accessibility with JavaScript.

### Solution

Use semantic HTML, add one event listener, preserve keyboard behavior, and clean up any timer/listener/observer if needed.

## Exercise 2

Inspect the result in DevTools.

### Solution

Check DOM structure, events, computed styles, accessibility name, storage/network/security state if relevant.

---

# Senior Frontend Engineer Takeaway

For senior-level work, Accessibility with JavaScript is not only a syntax topic. You should be able to explain the mental model, choose the right pattern for a product requirement, identify common failure modes, and verify behavior through tooling, tests, and browser inspection.
