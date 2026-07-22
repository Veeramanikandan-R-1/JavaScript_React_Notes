# Revision Notes: Rendering, Reflow, Repaint, and Layout Thrashing

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

### 1. What is the difference between style calculation, layout, paint, and compositing?

Style calculation resolves CSS rules. Layout computes element geometry. Paint fills pixels for text, backgrounds, borders, shadows, and images. Compositing combines layers into the final frame.

### 2. What is layout thrashing?

Layout thrashing happens when code repeatedly writes to the DOM and then reads layout-dependent values, forcing the browser to recalculate layout again and again. Batch reads before writes to avoid it.

### 3. Which animations are usually cheaper: `transform` or `height`?

`transform` is usually cheaper because it can often be composited without recalculating layout. Animating `height` changes layout and can affect surrounding elements, so it should be used carefully and measured.

### 4. How would you debug a scroll or drag interaction that feels slow?

Record the interaction in DevTools Performance, look for long tasks, forced reflow, heavy paint, and event handlers running too often. Then check whether work can be throttled, moved off the main thread, simplified, or batched.

### 5. What rendering-performance issues do you look for in review?

Layout reads inside loops, measuring immediately after writes, expensive animation properties, large repaint areas, unnecessary DOM churn, and scroll handlers doing synchronous work on every event.

---

# Quick Practice

1. Explain one realistic production use case for Rendering, Reflow, Repaint, and Layout Thrashing in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
