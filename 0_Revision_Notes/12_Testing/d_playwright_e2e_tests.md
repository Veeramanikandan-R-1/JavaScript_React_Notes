# Revision Notes: Playwright End-to-End Tests

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

### 1. What user journeys deserve Playwright E2E coverage?

Critical journeys that must work after deployment: login, route protection, checkout or submit flows, primary CRUD, search/filter, and core navigation. E2E tests are expensive, so choose flows that justify browser-level confidence.

### 2. Why are Playwright locators better than brittle CSS selectors?

Role, label, text, and test-id locators are more stable and closer to user behavior. Deep CSS selectors couple tests to markup structure and break during harmless refactors.

### 3. How do you make E2E tests less flaky?

Use reliable locators, control test data, wait for user-visible states instead of timeouts, isolate tests, mock only external unstable dependencies when appropriate, and capture traces/screenshots for failure diagnosis.

### 4. When should an E2E test use real APIs versus mocked APIs?

Use real APIs for deployment smoke confidence when stable test data exists. Use mocked APIs for deterministic edge cases, rare failures, or third-party dependencies that should not control frontend test reliability.

### 5. What Playwright issues do you flag in review?

Fixed sleeps, brittle selectors, shared state between tests, no trace on failure, tests that repeat unit coverage at high cost, and flows that cannot explain what user risk they protect.

---

# Quick Practice

1. Explain one realistic production use case for Playwright End-to-End Tests in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
