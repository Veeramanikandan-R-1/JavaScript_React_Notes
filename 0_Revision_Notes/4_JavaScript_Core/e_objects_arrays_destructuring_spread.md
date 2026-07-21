# Revision Notes: Objects, Arrays, Destructuring, and Spread

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
* `slice` copies part of an array and does not mutate.
* `splice` removes/replaces/inserts and mutates the original array.
* `shift` removes from the start; `unshift` adds to the start.
* In React state, avoid mutating array methods unless you first create a new array.
* Use `Map` for dynamic key-value collections, any key type, and easy `.size`.
* Use `Object.freeze` for enum-like constants in plain JavaScript.

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

# Array and Collection Cheats

| Need | Use |
| ---- | --- |
| Copy a portion | `slice` |
| Insert/remove in place | `splice` |
| Remove first item | `shift` |
| Add first item | `unshift` |
| Dynamic key-value store | `Map` |
| Enum-like constants | `Object.freeze` |

---

# Interview Questions & Answers

### 1. How would you explain Objects, Arrays, Destructuring, and Spread in a real project?

I explain the value model, execution order, scope, references, and failure cases before reaching for syntax.

### 2. What happens internally when Objects, Arrays, Destructuring, and Spread is involved?

JavaScript runs synchronously until the stack clears; async work resumes later through host scheduling, so timing and shared state matter.

### 3. How do you debug issues related to Objects, Arrays, Destructuring, and Spread?

I reproduce the input, add a breakpoint, inspect scope and call stack, verify object identity, and test the edge case that failed.

### 4. What is the biggest production risk with Objects, Arrays, Destructuring, and Spread?

The biggest risk is building something that works for the demo state but fails with real content, slow networks, accessibility needs, errors, or future changes.

### 5. What should a senior engineer look for in code review?

They should check the mental model, edge cases, accessibility, performance cost, naming, state ownership, test coverage, and whether the simpler native/platform option was considered.

---

# Quick Practice

1. Explain Objects, Arrays, Destructuring, and Spread in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
