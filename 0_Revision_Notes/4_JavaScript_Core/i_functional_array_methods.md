# Revision Notes: Functional Array Methods

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

### 1. When would you use `map`, `filter`, `reduce`, `some`, and `find`?

Use `map` to transform every item, `filter` to keep some items, `reduce` to accumulate, `some` to test whether any item matches, and `find` to return the first matching item. Choose the method that states the intent most clearly.

### 2. Why can `reduce` make code harder to review?

`reduce` can hide multiple operations in one callback, especially when accumulating objects or doing conditional branching. It is great for clear aggregation, but for complex transformations a loop or named helper can be easier to debug.

### 3. What is the difference between `forEach` and `map`?

`map` returns a new array of transformed values. `forEach` runs side effects and returns `undefined`. Using `map` only for side effects is a code smell because it communicates the wrong intent.

### 4. How do array methods affect rendering performance?

Repeated filtering, sorting, grouping, or mapping during every render can become expensive with large lists. Measure first, then consider memoization, precomputed indexes, pagination, virtualization, or moving work closer to the data layer.

### 5. What bugs do you look for in array transformations?

Mutating the original array with `sort` or `reverse`, missing return statements inside callbacks, unstable keys derived from indexes, incorrect handling of empty arrays, and transformations that assume API fields are always present.

---

# Quick Practice

1. Explain one realistic production use case for Functional Array Methods in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
