# JavaScript Interview Drills (Senior Frontend Engineer Perspective)

Before going deeper into frameworks or libraries, understand this topic as part of real frontend engineering: output questions, closures, this, coercion, promises, prototypes, references, and clean explanations.

---

# 1. Fundamentals

* Interview readiness comes from explaining tradeoffs, not reciting definitions.
* Strong answers connect fundamentals to real production consequences.
* Use examples, failure modes, and debugging approaches in every answer.

---

# 2. Core Concepts

| Concept | Practical meaning |
| ------- | ----------------- |
| Mental model | How the feature really works. |
| Tradeoff | What you gain and lose. |
| Debug story | How you find production issues. |
| Example | Concrete scenario that proves understanding. |
| Edge case | Where simple answers break. |

---

# 3. Internal Working

* Interviewers usually test whether you can reason from first principles under ambiguity.
* Good frontend system design answers include data flow, component boundaries, state ownership, performance, accessibility, observability, and rollout risk.

---

# 4. Common Mistakes

* Answering with definitions only.
* Ignoring tradeoffs.
* Pretending one tool is always best.
* Failing to mention testing and edge cases.

---

# 5. Best Practices

* Start with the mental model.
* Give a practical example.
* Name tradeoffs.
* Mention debugging and tests.
* Keep answers concise but concrete.

---

# 6. Code Example

```js
for (var i = 0; i < 3; i += 1) {
  setTimeout(() => console.log(i), 0);
}

for (let j = 0; j < 3; j += 1) {
  setTimeout(() => console.log(j), 0);
}

// First loop: 3, 3, 3 because one function-scoped binding is shared.
// Second loop: 0, 1, 2 because each iteration gets a block-scoped binding.
```

---

# 7. Real-world Scenarios

* Explaining closure behavior with a short code sample.
* Designing a frontend for a dashboard with filters and realtime updates.
* Comparing local state, context, Redux, and server cache.

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

* JavaScript Interview Drills matters because it affects real users, future maintainers, and production behavior.
* Learn the mental model before memorizing syntax.
* Use browser DevTools, tests, and small examples to verify behavior.
* Interview readiness comes from explaining tradeoffs, not reciting definitions.
* Strong answers connect fundamentals to real production consequences.
* Use examples, failure modes, and debugging approaches in every answer.

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

# Hands-on Exercises

## Exercise 1

Write a small function or interaction that demonstrates JavaScript Interview Drills.

### Solution

Include one normal input, one edge case, and one failure path. Explain execution order and data mutation rules.

## Exercise 2

Turn the example into an interview-style output question.

### Solution

Write expected output first, then explain stack, scope, references, or async scheduling line by line.

---

# Senior Frontend Engineer Takeaway

For senior-level work, JavaScript Interview Drills is not only a syntax topic. You should be able to explain the mental model, choose the right pattern for a product requirement, identify common failure modes, and verify behavior through tooling, tests, and browser inspection.
