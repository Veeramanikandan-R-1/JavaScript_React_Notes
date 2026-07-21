# Enterprise Testing Observability Revision

## Test States

* success
* loading
* empty data
* network error
* unauthorized/session timeout
* server error
* feature disabled
* filter change
* navigation while request is pending

## Cypress Patterns

* Keep API endpoint configs in one file.
* Generate error scenario tests from an array.
* Delay responses to verify loaders.
* Validate API call counts for refresh/filter flows.
* Prefer role/name or `data-cy` selectors.
* Avoid brittle `nth-child` paths.
* Read credentials from environment variables.

## Observability

* Wrap external RUM services with a safe fallback.
* Add user/page/context metadata only where appropriate.
* Clear telemetry user context on logout/session timeout.

## Interview Line

Strong E2E tests prove behavior under production states: slow APIs, failed APIs, empty data, feature gating, session timeout, and repeated user actions.

