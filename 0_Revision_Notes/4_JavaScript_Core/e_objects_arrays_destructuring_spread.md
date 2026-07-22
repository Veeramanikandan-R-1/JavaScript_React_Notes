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

### 1. What is the difference between shallow copy and deep copy?

A shallow copy copies the top-level object or array but keeps nested objects by reference. A deep copy duplicates nested data too. Spread syntax is shallow, which is a common source of state mutation bugs.

### 2. Why can `{ ...user }` still allow accidental mutation?

Nested objects are still shared. If `user.address` is an object, mutating `copy.address.city` also mutates `user.address.city`. In UI state updates, copy each level that changes or use a helper that preserves immutability.

### 3. When would you avoid destructuring?

Avoid it when it hides where values come from, creates very long parameter lists, renames too many properties, or makes optional data harder to read. Clear code beats clever destructuring in shared frontend code.

### 4. How do object identity bugs affect React rendering?

If you mutate an existing object, React may not see a changed reference and may skip updates. If you recreate objects unnecessarily, memoized children may re-render. Debug by checking reference equality and where objects are created.

### 5. What array update mistakes do you watch for?

Using mutating methods like `sort`, `reverse`, `splice`, or `push` directly on state, using array indexes as stable identities, and doing expensive transformations repeatedly during render without measurement.

---

# Quick Practice

1. Explain one realistic production use case for Objects, Arrays, Destructuring, and Spread in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
