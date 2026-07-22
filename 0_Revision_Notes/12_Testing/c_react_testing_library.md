# Revision Notes: React Testing Library

* Frontend tests protect user workflows, business rules, and component contracts.
* The best tests resemble how users interact with the app.
* Test strategy should balance confidence, speed, maintenance, and failure clarity.
* Best practice: Test user-visible behavior.
* Best practice: Use accessible queries first.
* Best practice: Keep unit tests fast and E2E tests focused on critical journeys.
* Best practice: Make failures easy to diagnose.
* Avoid: Testing implementation details.
* Avoid: Mocking so much that the test proves nothing.
* Avoid: Skipping accessibility queries.
* Avoid: Having only snapshot tests for interactive behavior.

---

# Cheat Sheet

| Concept | Practical meaning |
| ------- | ----------------- |
| Unit test | Small test for isolated logic. |
| Component test | Renders UI and interacts with it. |
| Integration test | Checks multiple units together. |
| End-to-end test | Runs a user journey in a real browser. |
| Mock | Controlled replacement for external dependency. |

---

# Interview Questions with Answers

### 1. Why does React Testing Library encourage querying by role, label, and text?

Those queries match how users and assistive technology understand the UI. They also catch accessibility regressions, such as missing labels or buttons that are not actually buttons.

### 2. Why use `userEvent` instead of only `fireEvent`?

`userEvent` models real interactions more closely, including focus, keyboard, pointer, and typing behavior. `fireEvent` is lower-level and useful for specific events, but can skip important browser-like behavior.

### 3. How do you test async UI with React Testing Library?

Trigger the user action, await visible outcomes with `findBy...` or `waitFor`, and assert loading/error/success states. Avoid arbitrary sleeps; wait for the behavior that matters.

### 4. When is `data-testid` acceptable?

Use it when there is no good user-facing selector, such as chart regions, virtualized rows, or repeated decorative containers. Prefer role, label, text, and accessible name when possible.

### 5. What RTL test issues do you flag in review?

Testing component internals, overusing test ids, not awaiting async updates, missing keyboard interactions, no error-state coverage, and assertions that do not match what the user sees.

---

# Quick Practice

1. Explain one realistic production use case for React Testing Library in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
