# Revision Notes: DOM Basics, Selectors, and Nodes

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
* DOM represents page content through `document`.
* BOM represents browser features through `window`.
* DOM examples: elements, attributes, text nodes, events.
* BOM examples: `location`, `history`, `navigator`, `screen`, `alert`.
* In React, use refs for direct DOM access only when state/props are not enough.

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

# DOM vs BOM

| DOM | BOM |
| --- | --- |
| Page/document tree | Browser environment |
| Root is `document` | Root is `window` |
| Change content, attributes, and nodes | Navigate, inspect browser info, use history |

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

# Quick Practice

1. Explain one realistic production use case for DOM Basics, Selectors, and Nodes in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
