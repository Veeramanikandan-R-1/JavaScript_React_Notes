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

### 1. Why does Value matter in Variables, Scope, and Hoisting?

Value means Data your program works with. Use Variables, Scope, and Hoisting to solve the specific problem described in this note.

### 2. How does Binding affect the implementation?

Binding means A named reference created by `let`, `const`, `var`, function, or import. Understand the browser, runtime, or React behavior behind Variables, Scope, and Hoisting before choosing an implementation.

### 3. What mistake should you avoid around skipping real edge cases?

Avoid skipping real edge cases. Prefer the simplest reliable approach and verify it with a small example.

### 4. How would you debug a production issue related to Variables, Scope, and Hoisting?

Reproduce the issue, inspect the relevant state or DOM, and reduce it to a small failing case. Check edge cases, browser behavior, and tests before changing the implementation.

### 5. What would you check in code review for Variables, Scope, and Hoisting?

Check correctness, edge cases, readability, accessibility, performance, and test coverage. Confirm the chosen approach matches the problem and does not add unnecessary complexity.

---

# Quick Practice

1. Explain one realistic production use case for Variables, Scope, and Hoisting in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
