# Revision Notes: JavaScript Introduction

* JavaScript powers behavior in the browser and can also run outside the browser.
* Correct JavaScript depends on understanding values, references, scope, functions, async scheduling, and modules.
* Frontend JavaScript must stay responsive because it often shares the main thread with rendering and user input.
* Best practice: Prefer `const` by default and `let` when reassignment is needed.
* Best practice: Keep functions small and name behavior clearly.
* Best practice: Handle errors close to where recovery can happen.
* Best practice: Avoid mutation across component or module boundaries unless it is intentionally owned.
* Avoid: Confusing mutation with reassignment.
* Avoid: Ignoring error paths in async code.
* Avoid: Using loose equality without a deliberate reason.
* Avoid: Treating objects and arrays as if they are deep-copied by spread.

---

# Cheat Sheet

| Concept | Practical meaning |
| ------- | ----------------- |
| Value | Data your program works with. |
| Binding | A named reference created by `let`, `const`, `var`, function, or import. |
| Execution context | The environment where code runs. |
| Reference | A way objects and arrays are shared by identity. |
| Module | A file-level boundary for imports and exports. |

---

# Interview Questions with Answers

### 1. What does it mean that JavaScript is single-threaded in the browser?

JavaScript execution for a page mostly runs on the main thread, which is also responsible for user input, style, layout, and paint. Long synchronous work can block clicks, typing, animation, and rendering, so production frontend code must be careful with expensive loops and heavy parsing.

### 2. How would you explain the difference between JavaScript and the browser APIs?

JavaScript is the language: values, functions, objects, scope, promises, and modules. The browser provides host APIs such as DOM, fetch, timers, storage, events, history, and rendering. A good answer separates language behavior from environment behavior.

### 3. Why does understanding references matter in UI code?

Objects and arrays are shared by reference, so mutating one reference can unexpectedly change state elsewhere. This matters in React, memoization, reducers, form state, cache updates, and debugging “why did this value change?” bugs.

### 4. How do you keep JavaScript from making an interface feel slow?

Measure main-thread work, split expensive tasks, avoid unnecessary re-renders, debounce high-frequency handlers, lazy-load noncritical code, and move appropriate work to workers. The goal is not only faster code; it is preserving responsiveness.

### 5. What do you look for when reviewing a frontend JavaScript utility?

I check input/output clarity, edge cases, mutation, error handling, testability, naming, and whether the utility belongs in shared code. I also check whether browser-specific behavior has leaked into code that should be pure.

---

# Quick Practice

1. Explain one realistic production use case for JavaScript Introduction in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
