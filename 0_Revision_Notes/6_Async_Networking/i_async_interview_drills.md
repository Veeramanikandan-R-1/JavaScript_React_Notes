# Revision Notes: Async JavaScript Interview Drills

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

### 1. What does this output: `setTimeout(() => console.log('timer')); Promise.resolve().then(() => console.log('promise')); console.log('sync');`?

It logs `sync`, then `promise`, then `timer`. Synchronous code runs first, promise callbacks run in the microtask queue, and timers run later as tasks.

### 2. How do you prevent old search results from replacing newer search results?

Track the latest request id or abort the old request when a new query starts. When a response returns, update state only if it still belongs to the latest query.

### 3. Why is `Promise.all(users.map(fetchUser))` risky for a large list?

It starts every request at once, which can overload the browser or backend and make failures harder to recover from. Use batching or concurrency limits when the list is large.

### 4. How do you explain a timeout versus a retry?

A timeout sets a maximum wait for one attempt. A retry starts another attempt after a failure or timeout. Retrying should be bounded, often use backoff, and be safe for the operation.

### 5. What makes an async interview answer senior-level?

It covers execution order, ownership, cancellation, stale responses, failure states, and user impact. It also says how the behavior would be tested under slow network and out-of-order responses.

---

# Quick Practice

1. Explain one realistic production use case for Async JavaScript Interview Drills in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
