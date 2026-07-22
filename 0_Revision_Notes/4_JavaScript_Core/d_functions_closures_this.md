# Revision Notes: Functions, Closures, and this

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
* Normal functions have dynamic `this`; arrow functions capture `this` from surrounding scope.
* `call` runs a function with a chosen `this` and comma-separated args.
* `apply` runs a function with a chosen `this` and array args.
* `bind` returns a new function with `this` fixed.
* Closures help with private state, callbacks, factory functions, event handlers, and memoization.
* In React, stale closures usually mean an effect/callback captured old values.
* Currying converts a multi-argument function into unary function calls.
* Partial application lets you provide repeated arguments once and reuse the specialized function.

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

# Function Differences

| Topic | Practical rule |
| ----- | -------------- |
| Normal function | Use for object methods and dynamic `this`. |
| Arrow function | Use for callbacks and lexical `this`. |
| `call` | Invoke now with selected `this`. |
| `apply` | Invoke now with selected `this` and array args. |
| `bind` | Create a later callback with selected `this`. |

---

# Interview Questions with Answers

### 1. Why does Value matter in Functions, Closures, and this?

Value means Data your program works with. Use Functions, Closures, and this to solve the specific problem described in this note.

### 2. How does Binding affect the implementation?

Binding means A named reference created by `let`, `const`, `var`, function, or import. Understand the browser, runtime, or React behavior behind Functions, Closures, and this before choosing an implementation.

### 3. What mistake should you avoid around skipping real edge cases?

Avoid skipping real edge cases. Prefer the simplest reliable approach and verify it with a small example.

### 4. How would you debug a production issue related to Functions, Closures, and this?

Reproduce the issue, inspect the relevant state or DOM, and reduce it to a small failing case. Check edge cases, browser behavior, and tests before changing the implementation.

### 5. What would you check in code review for Functions, Closures, and this?

Check correctness, edge cases, readability, accessibility, performance, and test coverage. Confirm the chosen approach matches the problem and does not add unnecessary complexity.

---

# Quick Practice

1. Explain one realistic production use case for Functions, Closures, and this in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
