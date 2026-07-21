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

# Interview Questions & Answers

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

# Quick Practice

1. Explain Events and Event Delegation in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
