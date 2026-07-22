# Revision Notes: Mocking Network Requests with MSW

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

### 1. Why use MSW instead of mocking `fetch` directly?

MSW intercepts requests at the network boundary, so the app still uses its real fetch/client code. This catches integration issues that direct function mocks can hide.

### 2. What API states should network mocks cover?

Success, empty, validation error, auth error, server error, slow response, timeout/cancel if relevant, malformed data, and pagination/filter combinations that affect UI behavior.

### 3. How do you avoid mocks drifting from the real API?

Share schemas/fixtures where possible, keep handlers close to API contracts, review mocks when API contracts change, and include some integration/E2E coverage against real backend or contract tests.

### 4. What is the risk of over-mocking network behavior?

Tests can pass while real auth headers, credentials, CORS, status codes, response shapes, or timing fail. Mocks should simulate important behavior, not an idealized API.

### 5. What MSW issues do you flag in review?

Handlers that match too broadly, missing error scenarios, fixtures unrelated to real contracts, tests that assert implementation details, and mocks that make impossible product states look valid.

---

# Quick Practice

1. Explain one realistic production use case for Mocking Network Requests with MSW in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
