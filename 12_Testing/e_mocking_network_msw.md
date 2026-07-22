# Mocking Network Requests with MSW (Senior Frontend Engineer Perspective)

Before going deeper into frameworks or libraries, understand this topic as part of real frontend engineering: testing API-driven UI through realistic request handlers instead of brittle fetch mocks.

---

# 1. Fundamentals

* Frontend tests protect user workflows, business rules, and component contracts.
* The best tests resemble how users interact with the app.
* Test strategy should balance confidence, speed, maintenance, and failure clarity.

---

# 2. Core Concepts

| Concept | Practical meaning |
| ------- | ----------------- |
| Unit test | Small test for isolated logic. |
| Component test | Renders UI and interacts with it. |
| Integration test | Checks multiple units together. |
| End-to-end test | Runs a user journey in a real browser. |
| Mock | Controlled replacement for external dependency. |

---

# 3. Internal Working

* Tests run in different environments: pure Node, jsdom-like DOM simulation, or a real browser.
* The closer a test is to real user behavior, the more confidence it gives and the slower it usually becomes.
* Stable tests avoid asserting implementation details that users cannot observe.

---

# 4. Common Mistakes

* Testing implementation details.
* Mocking so much that the test proves nothing.
* Skipping accessibility queries.
* Having only snapshot tests for interactive behavior.

---

# 5. Best Practices

* Test user-visible behavior.
* Use accessible queries first.
* Keep unit tests fast and E2E tests focused on critical journeys.
* Make failures easy to diagnose.

---

# 6. Code Example

```js
import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";

const server = setupServer(
  http.get("/api/orders", () => {
    return HttpResponse.json([{ id: "1", name: "First order" }]);
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
```

---

# 7. Real-world Scenarios

* Protecting checkout flow with an E2E test.
* Testing a form validation message with React Testing Library.
* Using unit tests for a currency formatter.

---

# 8. Senior Deep Dive

## When to Use

* Use unit tests for pure logic, component tests for UI behavior, and E2E tests for business-critical journeys.
* Mock at the network boundary when testing API-driven UI.
* Keep tests deterministic and easy to diagnose.

## Debug Checklist

* Read the failure message as a user story.
* Inspect rendered DOM output and accessible roles.
* Remove over-mocking before assuming the product code is wrong.

## Code Review Checklist

* Does the test fail for the bug it is meant to prevent?
* Does it query like a user would find the element?
* Is it stable across harmless refactors?


---

# Revision Notes

* Mocking Network Requests with MSW matters because it affects real users, future maintainers, and production behavior.
* Learn the mental model before memorizing syntax.
* Use browser DevTools, tests, and small examples to verify behavior.
* Frontend tests protect user workflows, business rules, and component contracts.
* The best tests resemble how users interact with the app.
* Test strategy should balance confidence, speed, maintenance, and failure clarity.

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

# Hands-on Exercises

## Exercise 1

Write a test for a behavior involving Mocking Network Requests with MSW.

### Solution

Use accessible queries, realistic user events, and assertions based on visible behavior.

## Exercise 2

Add one failure case.

### Solution

The test should prove how the UI behaves when data is missing, validation fails, or the network errors.

---

# Senior Frontend Engineer Takeaway

For senior-level work, Mocking Network Requests with MSW is not only a syntax topic. You should be able to explain the mental model, choose the right pattern for a product requirement, identify common failure modes, and verify behavior through tooling, tests, and browser inspection.
