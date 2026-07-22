# Revision Notes: Web Components and Shadow DOM

* Browser APIs connect JavaScript to documents, events, storage, networking, and security boundaries.
* DOM code should preserve semantics, accessibility, and performance.
* The browser is a shared runtime: user input, rendering, scripts, network, and storage interact.
* Best practice: Use the simplest reliable approach.
* Avoid: Memorizing syntax without understanding behavior.

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

# Quick Practice

1. Explain one realistic production use case for Web Components and Shadow DOM in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
