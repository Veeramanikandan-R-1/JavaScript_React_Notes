# Revision Notes: Memory, References, and Mutation

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

### 1. What is referential equality, and why does React care about it?

Referential equality checks whether two values point to the same object or function. React state updates, memoized components, dependency arrays, and cache updates often rely on reference changes to know whether work should happen.

### 2. What is the difference between mutation and reassignment?

Reassignment changes which value a variable points to. Mutation changes the contents of an existing object or array. `const` blocks reassignment, but it does not make objects immutable.

### 3. How can shared references create hard-to-find bugs?

Two parts of the app may hold the same object and one part mutates it without the other knowing. The UI can then show stale data, skip renders, or change unexpectedly after a seemingly unrelated action.

### 4. How do you debug an accidental mutation?

Track where the object is created, passed, and changed. Use breakpoints, object snapshots, `Object.freeze` in development, reducer tests, and reference comparisons before and after the suspected update.

### 5. When is mutation acceptable?

Mutation is acceptable when it is local, clearly owned, and not observable by other code, such as building a temporary object inside a function. Shared app state, cache data, props, and reducer inputs should be treated as immutable.

---

# Quick Practice

1. Explain one realistic production use case for Memory, References, and Mutation in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
