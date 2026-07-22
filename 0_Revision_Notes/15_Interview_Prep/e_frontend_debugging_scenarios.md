# Revision Notes: Frontend Debugging Scenarios

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

### 1. A React screen shows old data after quickly changing filters. How do you debug it?

I first reproduce it with slow network throttling and watch the request order. The usual cause is a stale response winning after a newer request. I would check query keys, effect dependencies, AbortController usage, cache invalidation, and whether the UI ties the response to the latest filter state before rendering it.

### 2. A button click does nothing in production, but works locally. What do you inspect?

I check the browser console with source maps, network errors, feature flags, environment variables, minified stack traces, and whether the production bundle is serving stale assets. I also inspect whether the element is actually receiving the click or if an overlay, disabled state, pointer-events rule, or hydration mismatch is blocking interaction.

### 3. A layout breaks only when the customer name is very long. What is your CSS debugging flow?

I inspect the element and parent layout mode, then check `min-width`, `max-width`, `overflow`, `white-space`, flex shrink behavior, grid tracks, and word-breaking. For flex children, `min-width: 0` is a common missing fix. I would also add a long-text regression example because real content is part of the requirement.

### 4. A modal opens, but keyboard users can tab to content behind it. What is the bug?

The modal is missing proper focus management. Opening should move focus into the modal, tab should be contained while it is open, Escape should close when appropriate, the trigger should regain focus on close, and background content should be inert or otherwise unavailable to assistive tech.

### 5. How do you answer when you do not know the root cause yet?

I say what I know, what I need to prove, and what evidence I will collect next. A senior debugging answer is not guessing quickly; it is reducing uncertainty with reproduction steps, logs, DevTools, network traces, DOM inspection, and a small fix backed by a regression test or checklist.

---

# Quick Practice

1. Explain one realistic production use case for Frontend Debugging Scenarios in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.

---

# Added from `react_1.docx`

* Machine coding focus: readability, reusability, modularity, testability, state ownership, accessible UI, and complete UI states.
* Good closing questions: role expectations, first-three-month success, improvement feedback, and current frontend challenges.
