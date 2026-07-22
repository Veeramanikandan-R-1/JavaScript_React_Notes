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

### 1. What is a closure, and where does it show up in frontend code?

A closure is a function retaining access to variables from its lexical scope after that outer scope has run. It shows up in event handlers, timers, async callbacks, hooks, memoized functions, debounced handlers, and module-level private state.

### 2. Why does `this` behave differently in arrow functions?

Arrow functions do not create their own `this`; they capture it lexically from the surrounding scope. Normal functions receive `this` from how they are called, which is why method extraction, callbacks, and event handlers can change behavior.

### 3. What can go wrong when passing an object method as a callback?

The method may lose its receiver, so `this` becomes `undefined` in strict mode or points somewhere unexpected. Fixes include binding the method, wrapping the call, or designing the function to accept explicit arguments instead of relying on `this`.

### 4. How would you debug a stale value inside a click handler or timer?

Find where the function was created and what variables it captured. Then check whether the value changes after creation, whether the handler is re-registered, and whether the code needs a fresh closure, a ref, a dependency update, or a functional state update.

### 5. What function-related issues do you look for in code review?

Hidden side effects, unclear return values, accidental dependency on `this`, callbacks that capture stale state, unnecessary function recreation in hot paths, and utility functions that mix pure logic with DOM or network work.

---

# Quick Practice

1. Explain one realistic production use case for Functions, Closures, and this in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
