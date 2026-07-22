# Modules, import, and export (Senior Frontend Engineer Perspective)

Before going deeper into frameworks or libraries, understand this topic as part of real frontend engineering: organizing JavaScript across files and build boundaries.

---

# 1. Fundamentals

* JavaScript powers behavior in the browser and can also run outside the browser.
* Correct JavaScript depends on understanding values, references, scope, functions, async scheduling, and modules.
* Frontend JavaScript must stay responsive because it often shares the main thread with rendering and user input.

---

# 2. Core Concepts

| Concept | Practical meaning |
| ------- | ----------------- |
| Value | Data your program works with. |
| Binding | A named reference created by `let`, `const`, `var`, function, or import. |
| Execution context | The environment where code runs. |
| Reference | A way objects and arrays are shared by identity. |
| Module | A file-level boundary for imports and exports. |

---

# 3. Internal Working

* JavaScript creates execution contexts, manages lexical environments, stores objects by reference, and schedules async continuations through the host runtime.
* Engines optimize hot paths, but readable code and stable object shapes often help more than micro-optimizations.

---

# 4. Common Mistakes

* Confusing mutation with reassignment.
* Ignoring error paths in async code.
* Using loose equality without a deliberate reason.
* Treating objects and arrays as if they are deep-copied by spread.

---

# 5. Best Practices

* Prefer `const` by default and `let` when reassignment is needed.
* Keep functions small and name behavior clearly.
* Handle errors close to where recovery can happen.
* Avoid mutation across component or module boundaries unless it is intentionally owned.

---

# 6. Code Example

```js
// money.js
export function formatCurrency(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

// app.js
import { formatCurrency } from "./money.js";
console.log(formatCurrency(42));
```

---

# 7. Real-world Scenarios

* Debugging a production bug caused by shared object mutation.
* Explaining why a closure sees the latest variable value.
* Refactoring repeated data transformation into a named function.

---

# 8. Senior Deep Dive

## When to Use

* Use JavaScript for behavior, data transformation, async coordination, and progressive enhancement.
* Keep pure calculations separate from DOM, network, and time-based effects.
* Use modules to create clear boundaries between features.

## Debug Checklist

* Set breakpoints at the event handler, state change, or async boundary.
* Inspect object identity and mutation, especially before and after spread operations.
* Verify execution order when promises, timers, or event handlers interact.

## Code Review Checklist

* Are error paths handled?
* Can the function be tested without a browser when it is pure logic?
* Is shared mutable state avoided or clearly owned?


---

# Revision Notes

* Modules, import, and export matters because it affects real users, future maintainers, and production behavior.
* Learn the mental model before memorizing syntax.
* Use browser DevTools, tests, and small examples to verify behavior.
* JavaScript powers behavior in the browser and can also run outside the browser.
* Correct JavaScript depends on understanding values, references, scope, functions, async scheduling, and modules.
* Frontend JavaScript must stay responsive because it often shares the main thread with rendering and user input.

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

# Hands-on Exercises

## Exercise 1

Write a small function or interaction that demonstrates Modules, import, and export.

### Solution

Include one normal input, one edge case, and one failure path. Explain execution order and data mutation rules.

## Exercise 2

Turn the example into an interview-style output question.

### Solution

Write expected output first, then explain stack, scope, references, or async scheduling line by line.

---

# Senior Frontend Engineer Takeaway

For senior-level work, Modules, import, and export is not only a syntax topic. You should be able to explain the mental model, choose the right pattern for a product requirement, identify common failure modes, and verify behavior through tooling, tests, and browser inspection.
