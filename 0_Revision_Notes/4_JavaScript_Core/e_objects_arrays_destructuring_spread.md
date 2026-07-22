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

# Interview Questions with Answers

### 1. Why does Value matter in Objects, Arrays, Destructuring, and Spread?

Value means Data your program works with. Use Objects, Arrays, Destructuring, and Spread to solve the specific problem described in this note.

### 2. How does Binding affect the implementation?

Binding means A named reference created by `let`, `const`, `var`, function, or import. Understand the browser, runtime, or React behavior behind Objects, Arrays, Destructuring, and Spread before choosing an implementation.

### 3. What mistake should you avoid around skipping real edge cases?

Avoid skipping real edge cases. Prefer the simplest reliable approach and verify it with a small example.

### 4. How would you debug a production issue related to Objects, Arrays, Destructuring, and Spread?

Reproduce the issue, inspect the relevant state or DOM, and reduce it to a small failing case. Check edge cases, browser behavior, and tests before changing the implementation.

### 5. What would you check in code review for Objects, Arrays, Destructuring, and Spread?

Check correctness, edge cases, readability, accessibility, performance, and test coverage. Confirm the chosen approach matches the problem and does not add unnecessary complexity.

---

# Quick Practice

1. Explain one realistic production use case for Objects, Arrays, Destructuring, and Spread in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
