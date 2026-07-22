# Revision Notes: JavaScript Interview Drills

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

### 1. What does this output, and why: `console.log(a); var a = 1;`?

It logs `undefined` because the `var` declaration is hoisted and initialized to `undefined` before execution, while the assignment happens later. A strong answer explains declaration, initialization, and execution order separately.

### 2. What does this output: `Promise.resolve().then(() => console.log(1)); setTimeout(() => console.log(2)); console.log(3);`?

It logs `3`, then `1`, then `2`. Synchronous code runs first, promise callbacks run in the microtask queue after the current call stack, and timers run later from the task queue.

### 3. How do you fix a function that mutates input data during sorting?

Copy before sorting: `const sorted = [...items].sort(compare)`. In review, also check whether `compare` is stable for equal values and whether sorting should happen once near data loading instead of on every render.

### 4. How would you explain debounce versus throttle with an autocomplete example?

Debounce waits until typing pauses before calling the API, which fits autocomplete search. Throttle limits execution to a fixed rate, which fits scroll or resize tracking where you want periodic updates while the event continues.

### 5. What makes a JavaScript interview answer senior-level?

It gives the result, explains the underlying model, names edge cases, and connects the behavior to real UI bugs. For example, closures are not only trivia; they affect timers, event listeners, hooks, and stale state.

---

# Quick Practice

1. Explain one realistic production use case for JavaScript Interview Drills in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
