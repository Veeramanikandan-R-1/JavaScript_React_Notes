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

### 1. What is the difference between primitive values and objects in JavaScript?

Primitives such as strings, numbers, booleans, `null`, `undefined`, symbols, and bigints are compared by value. Objects, arrays, functions, dates, and maps are compared by reference identity, which affects equality checks, memoization, and state updates.

### 2. Why do most frontend codebases prefer `===` over `==`?

`===` avoids implicit type coercion, so the comparison is easier to reason about. `==` has edge cases that can surprise reviewers, especially around `null`, `undefined`, empty strings, booleans, and arrays.

### 3. When is `Number(value)` safer than relying on implicit conversion?

When parsing form values, URL params, API strings, or local storage values, explicit conversion makes the intent clear and gives you a place to handle `NaN`, empty input, decimals, and invalid values.

### 4. Why is `NaN` tricky in validation code?

`NaN` is not equal to itself, so `value === NaN` is always false. Use `Number.isNaN(value)` after explicit conversion and decide how empty strings, whitespace, and partially typed numbers should behave in the UI.

### 5. What type-conversion bugs commonly appear in frontend apps?

String numbers from forms or query params, booleans stored as strings, invalid dates, object identity checks that should compare ids, and truthy/falsy checks that accidentally treat `0` or empty strings as missing data.

---

# Quick Practice

1. Explain one realistic production use case for Data Types, Equality, and Type Conversion in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
