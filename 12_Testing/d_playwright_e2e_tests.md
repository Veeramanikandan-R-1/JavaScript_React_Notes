# Playwright End-to-End Tests (Senior Frontend Engineer Perspective)

Before going deeper into frameworks or libraries, understand this topic as part of real frontend engineering: testing critical user journeys in a real browser.

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
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

test("submits the search term", async () => {
  const onSearch = vi.fn();
  render(<SearchForm onSearch={onSearch} />);

  await userEvent.type(screen.getByLabelText(/search/i), "react");
  await userEvent.click(screen.getByRole("button", { name: /search/i }));

  expect(onSearch).toHaveBeenCalledWith("react");
});
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

* Playwright End-to-End Tests matters because it affects real users, future maintainers, and production behavior.
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

# Hands-on Exercises

## Exercise 1

Write a test for a behavior involving Playwright End-to-End Tests.

### Solution

Use accessible queries, realistic user events, and assertions based on visible behavior.

## Exercise 2

Add one failure case.

### Solution

The test should prove how the UI behaves when data is missing, validation fails, or the network errors.

---

# Senior Frontend Engineer Takeaway

For senior-level work, Playwright End-to-End Tests is not only a syntax topic. You should be able to explain the mental model, choose the right pattern for a product requirement, identify common failure modes, and verify behavior through tooling, tests, and browser inspection.
