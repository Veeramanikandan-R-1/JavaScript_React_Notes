# Revision Notes: Web Platform APIs, Observers, and Workers

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

### 1. When would you use `IntersectionObserver` instead of a scroll listener?

Use `IntersectionObserver` when you need to know whether elements enter or leave a viewport/container, such as lazy loading, analytics impressions, or infinite scroll sentinels. It avoids doing manual geometry checks on every scroll event.

### 2. What is `ResizeObserver` useful for?

It observes element size changes, not viewport changes. It is useful for charts, virtualized containers, responsive components, and layout logic that depends on the rendered size of a specific element.

### 3. When should frontend work move to a Web Worker?

Move CPU-heavy work that does not need direct DOM access: parsing large files, data processing, search indexing, compression, image processing, or expensive calculations. Workers communicate by messages, so data transfer cost matters.

### 4. What cleanup do observers and workers need?

Disconnect observers when the observed element is no longer relevant, remove listeners, abort in-flight work where possible, and terminate workers when their lifecycle ends. Leaking these can create memory and performance issues.

### 5. What problems do you look for in observer/worker code?

Observers that watch too many nodes, callbacks that mutate layout repeatedly, missing cleanup, workers used for trivial work, large object copies across worker boundaries, and no fallback for unsupported APIs where the product needs one.

---

# Quick Practice

1. Explain one realistic production use case for Web Platform APIs, Observers, and Workers in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
