# Revision Notes: Data Types, Equality, and Type Conversion

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
* Primitive values are compared by value.
* Objects, arrays, functions, dates, maps, and sets are compared by reference identity.
* `typeof null` is `"object"` and `typeof NaN` is `"number"`.
* Use `Array.isArray(value)` for arrays.
* In React, initialize state with the shape the UI expects: `0`, `null`, `[]`, `{}`.
* `0` renders in JSX; `null` and `undefined` do not.
* Convert API/form strings before storing them as numbers or booleans in state.

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

# Type Check Cheats

| Need | Use |
| ---- | --- |
| Primitive | `typeof` |
| Array | `Array.isArray` |
| Class instance | `instanceof` |
| Built-in tag | `Object.prototype.toString.call(value)` |

---

# Interview Questions with Answers

### 1. Why does Value matter in Data Types, Equality, and Type Conversion?

Value means Data your program works with. Use Data Types, Equality, and Type Conversion to solve the specific problem described in this note.

### 2. How does Binding affect the implementation?

Binding means A named reference created by `let`, `const`, `var`, function, or import. Understand the browser, runtime, or React behavior behind Data Types, Equality, and Type Conversion before choosing an implementation.

### 3. What mistake should you avoid around skipping real edge cases?

Avoid skipping real edge cases. Prefer the simplest reliable approach and verify it with a small example.

### 4. How would you debug a production issue related to Data Types, Equality, and Type Conversion?

Reproduce the issue, inspect the relevant state or DOM, and reduce it to a small failing case. Check edge cases, browser behavior, and tests before changing the implementation.

### 5. What would you check in code review for Data Types, Equality, and Type Conversion?

Check correctness, edge cases, readability, accessibility, performance, and test coverage. Confirm the chosen approach matches the problem and does not add unnecessary complexity.

---

# Quick Practice

1. Explain one realistic production use case for Data Types, Equality, and Type Conversion in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
