# Revision Notes: Accessibility with JavaScript

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

# Quick Practice

1. Explain one realistic production use case for Accessibility with JavaScript in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
