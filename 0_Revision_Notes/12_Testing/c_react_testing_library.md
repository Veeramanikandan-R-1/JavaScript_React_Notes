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

# Interview Questions & Answers

### 1. How would you explain React Testing Library in a real project?

I test behavior that users and business rules depend on, using the smallest test level that gives confidence.

### 2. What happens internally when React Testing Library is involved?

Unit tests are fast for pure logic, component tests check interaction and accessibility, and E2E tests protect critical journeys in a real browser.

### 3. How do you debug issues related to React Testing Library?

I avoid brittle implementation assertions and prefer accessible queries, realistic events, and clear setup data.

### 4. What is the biggest production risk with React Testing Library?

The biggest risk is building something that works for the demo state but fails with real content, slow networks, accessibility needs, errors, or future changes.

### 5. What should a senior engineer look for in code review?

They should check the mental model, edge cases, accessibility, performance cost, naming, state ownership, test coverage, and whether the simpler native/platform option was considered.

---

# Quick Practice

1. Explain React Testing Library in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
