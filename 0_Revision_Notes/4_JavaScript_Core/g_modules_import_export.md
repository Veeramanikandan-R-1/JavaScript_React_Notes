# Revision Notes: Modules, import, and export

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

### 1. What is the difference between default exports and named exports?

Named exports make imports explicit and easier to refactor across a large app. Default exports can be convenient for one-main-thing modules, but they allow arbitrary import names and can make search/refactor weaker.

### 2. What does it mean that ES module imports are live bindings?

An imported binding reflects the current exported value from the module, not a copied snapshot. You cannot reassign the import locally, and circular dependencies can expose partially initialized bindings if modules are structured poorly.

### 3. How do circular dependencies usually show up in frontend apps?

They often appear when feature modules import from each other, or when barrel files re-export too much. Symptoms include `undefined` imports, initialization-order bugs, broken tests, and bundles that become harder to split.

### 4. What is tree shaking, and what code prevents it from working well?

Tree shaking removes unused exports from the bundle. It works best with static ES module imports/exports and is hurt by side-effectful modules, dynamic require patterns, broad barrel imports, and packages that do not advertise side-effect behavior correctly.

### 5. What do you review in module boundaries?

I check that imports point in the right architectural direction, feature code is not depending on internals from another feature, shared modules are genuinely shared, and side effects do not run just because a module was imported.

---

# Quick Practice

1. Explain one realistic production use case for Modules, import, and export in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
