# Enterprise Testing and Observability Practical Patterns

These notes capture reusable testing and observability ideas from large React/Cypress product code.

---

# 1. Test the States Users Actually Hit

Enterprise dashboards depend on many APIs. Do not test only the happy path.

Test these states:

* success
* loading
* empty data
* network error
* `401` or session timeout
* `403` or unauthorized
* `500` server error
* delayed response
* feature disabled
* user changes global filters
* user navigates while request is in flight

This catches problems that unit tests alone miss.

---

# 2. Cypress API Config Pattern

Keep endpoint metadata in a reusable config instead of repeating intercept strings in every test.

```js
export const DASHBOARD_APIS = [
  { method: "POST", path: "/api/dashboard/cards", alias: "fetchCards" },
  { method: "POST", path: "/api/dashboard/table", alias: "fetchTable" },
  { method: "GET", path: "/api/features", alias: "fetchFeatures" }
];
```

Then use helper commands:

```js
Cypress.Commands.add("interceptApis", (apiConfigs, statusCode, message) => {
  apiConfigs.forEach(({ method, path, alias }) => {
    cy.intercept(
      { method, url: path },
      { statusCode, body: { error: message } }
    ).as(`${alias}${statusCode}`);
  });
});
```

Why this is useful:

* tests stay readable
* endpoint changes happen in one file
* loading/error scenarios can be generated across many APIs
* aliases become consistent

---

# 3. Generate Error Scenario Tests

Use a small error scenario array.

```js
const ERROR_SCENARIOS = [
  { statusCode: 400, message: "Bad request" },
  { statusCode: 403, message: "Forbidden" },
  { statusCode: 500, message: "Server error" }
];

ERROR_SCENARIOS.forEach(({ statusCode, message }) => {
  it(`shows ${statusCode} error state`, () => {
    cy.interceptApis(DASHBOARD_APIS, statusCode, message);
    cy.visit("/dashboard");

    cy.wait(DASHBOARD_APIS.map(({ alias }) => `@${alias}${statusCode}`));
    cy.get("[data-cy='error-component']").should("contain.text", message);
  });
});
```

This gives broad error coverage without writing nearly identical tests.

---

# 4. Loading and Delayed Response Tests

To test loading states, delay API responses.

```js
Cypress.Commands.add("interceptDelayed", (apiConfigs, delayMs = 2000) => {
  apiConfigs.forEach(({ method, path, alias }) => {
    cy.intercept({ method, url: path }, (req) => {
      req.on("response", (res) => res.setDelay(delayMs));
    }).as(`${alias}Delayed`);
  });
});
```

Then assert loading UI before the request resolves:

```js
cy.interceptDelayed(DASHBOARD_APIS, 5000);
cy.visit("/dashboard");
cy.get("[data-cy='dashboard-spinner']").should("be.visible");
cy.wait(DASHBOARD_APIS.map(({ alias }) => `@${alias}Delayed`));
```

Senior detail: loading tests should verify visible user feedback, not just that an API was delayed.

---

# 5. Validate API Call Counts

Some bugs create duplicate fetches after filter changes or route navigation.

```js
Cypress.Commands.add("validateApiCallCount", (alias, count) => {
  cy.get(`@${alias}.all`).should("have.length", count);
});
```

Use cases:

* refresh button should call APIs once
* changing time filter should call required APIs once
* navigating to detail page should call detail API once
* selecting same filter twice should not duplicate requests

---

# 6. Stable Selector Strategy

Prefer selectors in this order:

1. accessible role and name when stable
2. `data-testid` or `data-cy`
3. visible text when it is part of the product requirement
4. scoped CSS selector as a last resort

Avoid:

* deeply nested `nth-child` selectors
* random generated class names
* selectors depending on layout wrappers
* tests coupled to translated text unless testing translations

Good:

```js
cy.get("[data-cy='time-filter']").click();
cy.findByRole("button", { name: "Refresh" }).click();
```

Risky:

```js
cy.get("div > div:nth-child(3) > button").click();
```

---

# 7. Custom Commands with Intent

Good custom commands represent user or product actions.

Examples:

* `selectAccount(name)`
* `visitDashboardTab(tabName)`
* `selectTimeFilter(value)`
* `interceptNetworkError(apiConfigs)`
* `assertErrorInCards(cardSelectors, statusCode, message)`

Avoid huge custom commands that hide too many assertions. If a helper becomes hard to debug, split it.

---

# 8. Observability Patterns

Frontend observability usually includes:

* RUM initialization
* user context
* route/page metadata
* selected account/tenant metadata
* custom actions
* error reporting
* cleanup on logout/session timeout

Sanitized service pattern:

```js
function createRumService({ windowPath }) {
  const external = readFromWindow(windowPath);

  if (external) {
    return {
      ...external,
      isExternalAvailable: () => true
    };
  }

  return {
    addAction: () => undefined,
    removeUser: () => undefined,
    isExternalAvailable: () => false
  };
}
```

Why the fallback matters:

* feature packages can run standalone
* tests do not crash when RUM is absent
* local development does not require production telemetry
* logout can call `removeUser` safely

---

# 9. Cypress Review Checklist

Before merging an E2E test:

* Are selectors stable?
* Does the test wait on real user-visible outcomes?
* Are API intercept aliases meaningful?
* Are error/loading/empty states covered?
* Are credentials read from environment variables?
* Are sensitive values excluded from commits?
* Is the test independent from previous tests?
* Does `cy.session` validation prove the session is still valid?
* Are waits based on network/UI state instead of arbitrary time?

---

# Interview Questions

### How do you test dashboard API failures?

I centralize endpoint configs, intercept each API with status/error bodies, trigger the user action, wait for aliased requests, then assert visible error states in each dashboard card.

### How do you test loading states in Cypress?

I delay API responses with `cy.intercept`, assert that the loading indicator is visible before the response resolves, then wait for the request and verify the final state.

### How do you make frontend observability safe in feature packages?

I wrap the external RUM service in a small adapter with a no-op fallback. The feature can call telemetry methods without crashing when it runs outside the production shell.

---

# Senior Takeaway

Strong E2E testing is not about clicking everything. It is about proving the app behaves correctly under real production states: slow APIs, failed APIs, empty data, feature gating, session timeout, and repeated user actions.

