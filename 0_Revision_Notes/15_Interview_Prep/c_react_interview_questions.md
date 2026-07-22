# Revision Notes: React Interview Questions

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

# Quick Practice

1. Explain one realistic production use case for React Interview Questions in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
