# Revision Notes: JavaScript Interview Questions

* Interview readiness comes from explaining tradeoffs, not reciting definitions.
* Strong answers connect fundamentals to real production consequences.
* Use examples, failure modes, and debugging approaches in every answer.
* Best practice: Start with the mental model.
* Best practice: Give a practical example.
* Best practice: Name tradeoffs.
* Best practice: Mention debugging and tests.
* Best practice: Keep answers concise but concrete.
* Avoid: Answering with definitions only.
* Avoid: Ignoring tradeoffs.
* Avoid: Pretending one tool is always best.
* Avoid: Failing to mention testing and edge cases.

---

# Cheat Sheet

| Concept | Practical meaning |
| ------- | ----------------- |
| Mental model | How the feature really works. |
| Tradeoff | What you gain and lose. |
| Debug story | How you find production issues. |
| Example | Concrete scenario that proves understanding. |
| Edge case | Where simple answers break. |

---

# Interview Questions with Answers

### 1. What is the output of this closure code, and why?

If a loop uses `var`, callbacks created inside the loop share the same function-scoped binding, so they often all see the final value. With `let`, each iteration gets its own block-scoped binding. I would answer by drawing the binding lifetime, not by saying "`var` is bad"; legacy code and interview snippets still use it.

### 2. In what order do `console.log`, `Promise.then`, `queueMicrotask`, and `setTimeout` run?

Synchronous logs run first. Then microtasks run, including promise continuations and `queueMicrotask`, before the browser moves to the next task such as `setTimeout`. In frontend work this matters because too many microtasks can delay rendering and make the UI feel stuck even when code is "async".

### 3. What is the difference between shallow copy and deep copy in JavaScript?

A shallow copy copies the top-level container but keeps nested object references shared. Spread, `Object.assign`, and array spread are shallow. A deep copy recursively copies nested data, but it has tradeoffs around Dates, Maps, functions, class instances, circular references, and performance. In React state updates, shallow structural copying is usually the right pattern.

### 4. Why can `await` inside a `try/catch` catch an error, but returning a promise sometimes does not?

`await` unwraps the promise inside the `try` block, so a rejection becomes a thrown error there. If you just return a promise without awaiting it, the rejection happens after the function has returned and may be handled by the caller instead. In code review I look for missing `await` in `try/catch` blocks that are supposed to handle async failures locally.

### 5. When would you use `Map` instead of a plain object?

I use `Map` when keys are not limited to strings/symbols, insertion order matters clearly, frequent add/delete operations are expected, or the data is naturally a lookup table. For simple JSON-like records, a plain object is often clearer. A senior answer should mention readability, serialization, prototype-key hazards, and the expected access pattern.

---

# Quick Practice

1. Explain one realistic production use case for JavaScript Interview Questions in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
