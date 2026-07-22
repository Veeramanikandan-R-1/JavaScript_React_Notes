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

### 1. How would you explain JavaScript prototypes to someone who knows classes?

Objects can delegate property lookup to another object through the prototype chain. `class` syntax is mostly a cleaner way to define constructor functions and prototype methods, not a separate inheritance system like in many classical OOP languages.

### 2. What happens when JavaScript cannot find a property directly on an object?

It walks up the prototype chain until it finds the property or reaches `null`. This matters when debugging inherited methods, monkey patches, `Object.create`, class instances, and unexpected properties from third-party objects.

### 3. When would you use a class in frontend JavaScript?

Classes can be useful for domain objects, SDK wrappers, state machines, custom errors, or APIs with lifecycle and instance methods. For simple data transformation or UI composition, functions and plain objects are often clearer.

### 4. What is the difference between instance fields and prototype methods?

Instance fields are created per instance. Prototype methods are shared through the prototype chain. Shared prototype methods usually use less memory, while per-instance arrow methods can preserve lexical `this` but create a new function for each instance.

### 5. What OOP-related problems do you look for in frontend code?

Overuse of inheritance, mutable shared prototype state, unclear lifecycle cleanup, class instances stored in serializable app state, and methods that depend on `this` in ways that break when passed as callbacks.

---

# Quick Practice

1. Explain one realistic production use case for Prototypes, Classes, and OOP in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
