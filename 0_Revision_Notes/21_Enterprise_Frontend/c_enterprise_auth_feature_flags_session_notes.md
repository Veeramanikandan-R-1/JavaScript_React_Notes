# Enterprise Auth Feature Flags Session Revision

## Route Decision States

* loading
* error
* redirect to login
* unauthorized
* feature disabled
* not provisioned
* allowed

## Practical Rules

* Auth is not just logged in.
* Route metadata should include access, admin, sidebar, and feature requirements.
* Available feature means product/license supports it.
* Enabled feature means current account can use it.
* Frontend feature flags are UX controls, not security.
* Backend APIs must enforce authorization.
* Session cleanup should clear cookies, localStorage, sessionStorage, cached MFE config, and telemetry user context.

## Interview Line

Enterprise protected routes are a small policy engine, not a single `isLoggedIn` boolean.

