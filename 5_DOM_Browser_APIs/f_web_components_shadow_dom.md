# Web Components and Shadow DOM (Senior Frontend Engineer Perspective)

Before going deeper into frameworks or libraries, understand this topic as part of real frontend engineering: native component primitives and encapsulated DOM.

---

# 1. Fundamentals

* Browser APIs connect JavaScript to documents, events, storage, networking, and security boundaries.
* DOM code should preserve semantics, accessibility, and performance.
* The browser is a shared runtime: user input, rendering, scripts, network, and storage interact.

---

# 2. Core Concepts

| Concept | Practical meaning |
| ------- | ----------------- |
| Custom element | A named reusable HTML element. |
| Shadow DOM | Encapsulated DOM subtree. |
| Slot | Placeholder for user-provided children. |
| Attribute | String-based external configuration. |
| Lifecycle callbacks | Methods invoked when components connect, disconnect, or change attributes. |

---

# 3. Internal Working

* DOM reads and writes can trigger style and layout work when mixed carelessly.
* Browser security policies isolate origins and require explicit server permission for cross-origin reads.
* Native elements expose behavior and accessibility that custom JavaScript must otherwise recreate.

---

# 4. Common Mistakes

* Memorizing syntax without understanding behavior.

---

# 5. Best Practices

* Use the simplest reliable approach.

---

# 6. Code Example

```js
class UserBadge extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <style>strong { color: #0f766e; }</style>
      <strong><slot></slot></strong>
    `;
  }
}

customElements.define("user-badge", UserBadge);
```

---

# 7. Real-world Scenarios

* Applying the concept in a real frontend feature.

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

* Web Components and Shadow DOM matters because it affects real users, future maintainers, and production behavior.
* Learn the mental model before memorizing syntax.
* Use browser DevTools, tests, and small examples to verify behavior.
* Browser APIs connect JavaScript to documents, events, storage, networking, and security boundaries.
* DOM code should preserve semantics, accessibility, and performance.
* The browser is a shared runtime: user input, rendering, scripts, network, and storage interact.

---

# Cheat Sheet

| Concept | Practical meaning |
| ------- | ----------------- |
| Custom element | A named reusable HTML element. |
| Shadow DOM | Encapsulated DOM subtree. |
| Slot | Placeholder for user-provided children. |
| Attribute | String-based external configuration. |
| Lifecycle callbacks | Methods invoked when components connect, disconnect, or change attributes. |

---

# Interview Questions with Answers

### 1. When would you choose Web Components over framework components?

Choose Web Components when a component must work across frameworks, inside legacy pages, or as an embeddable widget. If the product is fully inside one React app, framework components are often simpler for state, routing, testing, and team conventions.

### 2. What does Shadow DOM encapsulate and what does it not fully isolate?

Shadow DOM encapsulates markup and styles from normal document selectors. It does not isolate JavaScript execution, network access, layout size, inherited CSS custom properties, or accessibility responsibilities.

### 3. How do slots work in a custom element?

Slots define insertion points inside the shadow tree where light-DOM children are rendered. They let consumers provide content while the component controls structure, styling boundaries, and fallback content.

### 4. What lifecycle cleanup matters in custom elements?

Anything started in `connectedCallback`, such as event listeners, timers, observers, subscriptions, or network work, should be cleaned up in `disconnectedCallback` when appropriate.

### 5. What accessibility issues do you watch for in Web Components?

Custom elements still need names, roles, keyboard behavior, focus management, form participation when relevant, and screen-reader testing. Encapsulation should not make the component invisible or awkward to operate.

---

# Hands-on Exercises

## Exercise 1

Build a tiny DOM interaction for Web Components and Shadow DOM.

### Solution

Use semantic HTML, add one event listener, preserve keyboard behavior, and clean up any timer/listener/observer if needed.

## Exercise 2

Inspect the result in DevTools.

### Solution

Check DOM structure, events, computed styles, accessibility name, storage/network/security state if relevant.

---

# Senior Frontend Engineer Takeaway

For senior-level work, Web Components and Shadow DOM is not only a syntax topic. You should be able to explain the mental model, choose the right pattern for a product requirement, identify common failure modes, and verify behavior through tooling, tests, and browser inspection.
