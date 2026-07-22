# Revision Notes: Frontend Testing Strategy

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

### 1. How do you decide what to test with unit, component, integration, and E2E tests?

Use unit tests for pure logic, component tests for UI behavior, integration tests for connected flows, and E2E tests for the highest-value user journeys. The goal is confidence with fast feedback and clear failures.

### 2. What makes a frontend test valuable?

It fails when important user behavior breaks, is understandable from the failure message, avoids implementation details, and is cheap enough to run often. Coverage percentage alone does not prove value.

### 3. What belongs in an E2E smoke suite?

Critical paths such as login, core navigation, major CRUD flow, checkout/payment-safe path, and app boot. Keep smoke tests small and stable so they protect deployments instead of becoming noise.

### 4. How do you handle flaky tests?

Treat flakiness as a product-quality problem. Find whether it comes from timing, network, selectors, shared state, test data, environment, or real race conditions. Quarantine only as a short-term containment step.

### 5. What testing issues do you flag in review?

Tests that assert implementation details, mocks that hide real behavior, missing failure states, snapshots used as a substitute for behavior, and E2E tests that cover trivial paths while critical flows remain untested.

---

# Quick Practice

1. Explain one realistic production use case for Frontend Testing Strategy in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
