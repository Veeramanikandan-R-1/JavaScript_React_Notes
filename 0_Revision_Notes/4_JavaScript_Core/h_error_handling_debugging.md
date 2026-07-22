# Revision Notes: Error Handling and Debugging

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

### 1. How do you decide whether to catch an error locally or let it bubble up?

Catch locally when the component can recover, show a specific message, retry, or provide fallback UI. Let it bubble when a higher boundary owns the failure experience, logging, or navigation-level recovery.

### 2. What should a good frontend error message include?

For users, it should explain what happened in plain language and what they can do next. For developers, logs should include context such as request id, route, user action, feature flag, browser, and original stack through source maps.

### 3. Why is swallowing errors in `catch` dangerous?

It hides failures from users, monitoring, and tests. If code catches an error, it should either recover deliberately, transform and rethrow it, or report it with enough context to debug.

### 4. How do you debug a minified production stack trace?

Use source maps in the error-monitoring tool or browser, map the release to the exact deployed commit, reproduce with matching environment flags, and inspect the async boundary that triggered the error.

### 5. What error-handling issues do you flag in pull requests?

Missing failure states, `catch` blocks that only `console.log`, retry loops without limits, exposing internal error text to users, losing original stack/context, and tests that cover only the happy path.

---

# Quick Practice

1. Explain one realistic production use case for Error Handling and Debugging in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
