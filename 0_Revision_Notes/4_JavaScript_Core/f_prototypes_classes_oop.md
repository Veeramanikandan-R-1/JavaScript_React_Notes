# Revision Notes: Prototypes, Classes, and OOP

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
* Prototype inheritance lets an object find methods through its prototype chain.
* Prefer `Object.create`, constructor functions, or `class extends` over direct `__proto__` assignment.
* `class` syntax is cleaner syntax over JavaScript prototypes.
* React UI code usually favors functions and hooks, but prototype knowledge matters for interviews, SDKs, and legacy code.
* Encapsulation: keep state private and expose controlled methods, such as `#balance` with `deposit()`.
* Abstraction: expose a contract such as `area()` and hide each class's calculation details.
* Inheritance: use `extends` to reuse parent behavior.
* Polymorphism: different classes respond to the same method name in their own way.

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

### 1. Why does Persistent connection matter in Prototypes, Classes, and OOP?

Persistent connection means A long-lived channel for receiving updates. In interviews, connect it to Prototypes, Classes, and OOP by explaining the concrete UI behavior, failure state, and tradeoff.

### 2. How does Reconnection affect the implementation?

Reconnection means Recovery logic after network loss. Implementation depends on ownership, lifecycle, and edge cases, not only naming the API.

### 3. What mistake should you avoid around skipping real edge cases?

Avoid skipping real edge cases. Prefer the simplest reliable approach and verify it with a small example.

### 4. How would you debug a production issue related to Prototypes, Classes, and OOP?

Reproduce the issue, inspect the relevant state or DOM, and reduce it to a small failing case. Check edge cases, browser behavior, and tests before changing the implementation.

### 5. What would you check in code review for Prototypes, Classes, and OOP?

Check correctness, edge cases, readability, accessibility, performance, and test coverage. Confirm the chosen approach matches the problem and does not add unnecessary complexity.

---

# Quick Practice

1. Explain one realistic production use case for Prototypes, Classes, and OOP in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
