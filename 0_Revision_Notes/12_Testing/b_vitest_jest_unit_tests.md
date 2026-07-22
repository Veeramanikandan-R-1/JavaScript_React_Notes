# Revision Notes: Vitest, Jest, and Unit Tests

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

### 1. What logic is best suited for unit tests in frontend apps?

Pure functions, reducers, validators, formatters, parsers, feature-flag decisions, permission logic, and edge-case-heavy business rules. These tests should be fast, focused, and not require a browser.

### 2. When is mocking helpful, and when does it hurt?

Mock time, network, storage, or expensive boundaries when needed. Avoid mocking the thing you are trying to verify or recreating implementation details so thoroughly that the test cannot catch integration bugs.

### 3. How do you test timer-based code?

Use fake timers when they make the test deterministic, advance time intentionally, and assert visible result or callback behavior. Clean up timers so tests do not leak into each other.

### 4. What makes a unit test hard to maintain?

Testing private structure, over-mocking, unclear setup, huge fixtures, snapshots without intent, and assertions that do not describe the behavior being protected.

### 5. What unit-test issues do you flag in review?

No edge cases, tests that pass even if the implementation is broken, shared mutable fixtures, no failure-path coverage, and assertions that only check that a function was called instead of checking the result.

---

# Quick Practice

1. Explain one realistic production use case for Vitest, Jest, and Unit Tests in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
