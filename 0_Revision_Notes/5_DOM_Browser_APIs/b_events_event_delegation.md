# Revision Notes: Events and Event Delegation

* Browser APIs connect JavaScript to documents, events, storage, networking, and security boundaries.
* DOM code should preserve semantics, accessibility, and performance.
* The browser is a shared runtime: user input, rendering, scripts, network, and storage interact.
* Best practice: Use semantic HTML first.
* Best practice: Delegate events for dynamic lists.
* Best practice: Batch DOM reads and writes.
* Best practice: Clean up listeners, observers, timers, and subscriptions.
* Avoid: Building inaccessible custom controls.
* Avoid: Adding event listeners repeatedly without cleanup.
* Avoid: Reading and writing layout in tight loops.
* Avoid: Trusting unsanitized user input.

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

### 1. Explain event bubbling and capturing with a click inside a nested button area.

In capture, the event travels from the document down toward the target. At target, handlers on the clicked element run. In bubble, it travels back up through ancestors. Most UI event handlers rely on bubbling.

### 2. What is event delegation, and when is it useful?

Event delegation attaches one listener to a stable ancestor and uses the event target to decide what action occurred. It is useful for large lists, dynamic content, menus, tables, and framework-free interactions.

### 3. What is the difference between `event.target` and `event.currentTarget`?

`target` is the deepest element where the event originated. `currentTarget` is the element whose listener is currently running. Delegated handlers often need `target.closest(...)` and then a containment check.

### 4. When is `stopPropagation()` a bad fix?

It can hide ownership problems and break analytics, global shortcuts, menus, overlays, or parent components. Use it only when the interaction genuinely should not reach ancestors, and document the boundary.

### 5. What event-listener bugs do you look for in review?

Listeners added repeatedly, missing cleanup, passive listeners missing on scroll/touch where appropriate, handlers doing heavy synchronous work, and mouse-only behavior without keyboard or touch support.

---

# Quick Practice

1. Explain one realistic production use case for Events and Event Delegation in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
