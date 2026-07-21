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

# Interview Questions & Answers

### 1. How would you explain Variables, Scope, and Hoisting in a real project?

I explain the value model, execution order, scope, references, and failure cases before reaching for syntax.

### 2. What happens internally when Variables, Scope, and Hoisting is involved?

JavaScript runs synchronously until the stack clears; async work resumes later through host scheduling, so timing and shared state matter.

### 3. How do you debug issues related to Variables, Scope, and Hoisting?

I reproduce the input, add a breakpoint, inspect scope and call stack, verify object identity, and test the edge case that failed.

### 4. What is the biggest production risk with Variables, Scope, and Hoisting?

The biggest risk is building something that works for the demo state but fails with real content, slow networks, accessibility needs, errors, or future changes.

### 5. What should a senior engineer look for in code review?

They should check the mental model, edge cases, accessibility, performance cost, naming, state ownership, test coverage, and whether the simpler native/platform option was considered.

---

# Quick Practice

1. Explain Variables, Scope, and Hoisting in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
