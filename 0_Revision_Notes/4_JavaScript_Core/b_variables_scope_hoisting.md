# Revision Notes: Variables, Scope, and Hoisting

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
* TDZ: `let` and `const` are hoisted but cannot be read before initialization.
* `var` can be read before assignment as `undefined`; `let`/`const` throw `ReferenceError`.
* Lexical environment means where scope is written; execution context means what is running now.
* Modern JavaScript uses interpretation plus JIT compilation for optimized hot code.
* `"use strict"` catches unsafe legacy patterns like accidental globals.

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

# Must-Know Examples

```js
console.log(a); // ReferenceError
let a = 10;

console.log(b); // undefined
var b = 20;
```

```text
Lexical environment = where code is written
Execution context   = what runs at runtime
```

---

# Interview Questions with Answers

### 1. What is the difference between `var`, `let`, and `const`?

`var` is function-scoped and hoisted with `undefined`. `let` and `const` are block-scoped and have a temporal dead zone before initialization. `const` prevents reassignment of the binding, not mutation of the object it points to.

### 2. What will this print and why: `for (var i = 0; i < 3; i++) setTimeout(() => console.log(i))`?

It prints `3` three times because all callbacks close over the same function-scoped `var i`, and the callbacks run after the loop completes. Using `let` creates a new block-scoped binding per iteration, so it prints `0`, `1`, `2`.

### 3. What is hoisting, and what do candidates often get wrong about it?

Hoisting means declarations are processed before execution, but initialization rules differ. Function declarations are callable before their line, `var` exists as `undefined`, and `let`/`const` are hoisted but unavailable in the temporal dead zone.

### 4. How can stale closures show up in frontend code?

A callback can capture an older value and run later in a timer, event listener, promise, or React effect. Debug by checking where the function is created, what variables it closes over, and whether the code needs a dependency update, ref, or functional state update.

### 5. What variable-related issues do you flag during review?

Accidental globals, broad mutable state, confusing shadowing, `var` in modern app code, mutation hidden behind `const`, and closures that outlive the state they depend on.

---

# Quick Practice

1. Explain one realistic production use case for Variables, Scope, and Hoisting in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
