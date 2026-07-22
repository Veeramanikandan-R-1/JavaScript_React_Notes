# React Interview Questions (Senior Frontend Engineer Perspective)

Before going deeper into frameworks or libraries, understand this topic as part of real frontend engineering: practical interview answers for React.

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

```jsx
function OrderList({ orders }) {
  return (
    <ul>
      {orders.map((order) => (
        <li key={order.id}>{order.customerName}</li>
      ))}
    </ul>
  );
}

// Interview angle: stable keys preserve component identity across updates.
```

---

# 7. Real-world Scenarios

* Explaining closure behavior with a short code sample.
* Designing a frontend for a dashboard with filters and realtime updates.
* Comparing local state, context, Redux, and server cache.

---

# 8. Senior Deep Dive

## When to Use

* Use interview notes to practice explaining mental models out loud.
* Convert definitions into examples, tradeoffs, and debugging stories.
* Practice writing small code examples from memory.

## Debug Checklist

* When stuck, restate the input, expected output, and actual output.
* Trace execution step by step before changing code.
* Say your assumptions clearly.

## Code Review Checklist

* Does the answer mention runtime behavior?
* Does it include a concrete example?
* Does it name at least one tradeoff or failure mode?


---

# Revision Notes

* React Interview Questions matters because it affects real users, future maintainers, and production behavior.
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

### 1. A child component needs to update a value shown in a sibling. Where should the state live?

The state should move to the closest common parent that owns both siblings. I would not jump directly to Redux or context unless the state is needed across distant parts of the app. A senior answer should separate local UI state, URL state, server state, and global client state.

### 2. Why are array indexes risky as React keys?

Indexes are risky when items can be inserted, removed, sorted, or filtered because React may preserve the wrong component state for a different item. They are acceptable only for truly static lists. In real apps this shows up as wrong input values, incorrect focus, broken animations, or stale row state.

### 3. When is `useEffect` the wrong tool?

`useEffect` is wrong for values that can be calculated during render, for event-specific logic that belongs in an event handler, and for derived state that duplicates props/state. Effects are for synchronizing with external systems: network, subscriptions, timers, DOM APIs, logging, or imperative widgets.

### 4. A component re-renders too often. What is your debugging flow?

First I confirm whether the re-render is actually expensive. Then I use React DevTools Profiler, inspect prop identity, check parent state changes, review context provider values, and look for unnecessary derived objects/functions. I memoize only after I know the cause; otherwise memoization can hide design problems.

### 5. How do you handle loading, empty, error, and permission states in React?

I model them explicitly instead of relying on `null` and scattered booleans. The UI should show a useful loading state, a clear empty state, actionable errors, and access-denied states where relevant. I also check accessibility: alerts for errors, focus behavior after transitions, and buttons disabled only when necessary.

---

# Hands-on Exercises

## Exercise 1

Build a small example that demonstrates React Interview Questions.

### Solution

Keep the example focused, include one realistic edge case, and explain what the browser or React is doing internally.

## Exercise 2

List three production mistakes related to React Interview Questions.

### Solution

Use the Common Mistakes section, then add how you would prevent each mistake in code review.

---

# Senior Frontend Engineer Takeaway

For senior-level work, React Interview Questions is not only a syntax topic. You should be able to explain the mental model, choose the right pattern for a product requirement, identify common failure modes, and verify behavior through tooling, tests, and browser inspection.
