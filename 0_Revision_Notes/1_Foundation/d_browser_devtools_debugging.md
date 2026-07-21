# Revision Notes: Browser DevTools and Debugging

* DevTools is the frontend engineer's microscope.
* Good debugging means forming a hypothesis, observing runtime behavior, and changing one variable at a time.
* Most UI bugs become simpler when inspected at the DOM, CSS, network, console, or performance level.
* Best practice: Use device emulation, throttling, and disabled cache during development investigations.
* Best practice: Prefer breakpoints and watch expressions over excessive temporary logs.
* Best practice: Inspect accessibility names for buttons, inputs, images, dialogs, and landmarks.
* Best practice: Record a performance trace before optimizing expensive interactions.
* Avoid: Debugging by random edits instead of isolating the failing layer.
* Avoid: Reading only console errors while ignoring network failures and failed source maps.
* Avoid: Assuming CSS did not apply without checking specificity and overwritten rules.
* Avoid: Testing only with fast network and wide desktop viewport.

---

# Cheat Sheet

| Concept | Practical meaning |
| ------- | ----------------- |
| Elements panel | Inspect DOM, computed styles, layout boxes, event listeners, and accessibility attributes. |
| Console | Evaluate expressions, view logs, inspect errors, and test assumptions quickly. |
| Sources | Set breakpoints, step through code, inspect closures, and debug async stacks. |
| Network | Inspect requests, responses, headers, payloads, caching, timing, and failed calls. |
| Performance | Record long tasks, rendering work, layout shifts, scripting cost, and frame drops. |
| Lighthouse | Get directional audits for performance, accessibility, SEO, and best practices. |

---

# Interview Questions & Answers

### 1. How would you explain Browser DevTools and Debugging in a real project?

I explain the value model, execution order, scope, references, and failure cases before reaching for syntax.

### 2. What happens internally when Browser DevTools and Debugging is involved?

JavaScript runs synchronously until the stack clears; async work resumes later through host scheduling, so timing and shared state matter.

### 3. How do you debug issues related to Browser DevTools and Debugging?

I reproduce the input, add a breakpoint, inspect scope and call stack, verify object identity, and test the edge case that failed.

### 4. What is the biggest production risk with Browser DevTools and Debugging?

The biggest risk is building something that works for the demo state but fails with real content, slow networks, accessibility needs, errors, or future changes.

### 5. What should a senior engineer look for in code review?

They should check the mental model, edge cases, accessibility, performance cost, naming, state ownership, test coverage, and whether the simpler native/platform option was considered.

---

# Quick Practice

1. Explain Browser DevTools and Debugging in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
