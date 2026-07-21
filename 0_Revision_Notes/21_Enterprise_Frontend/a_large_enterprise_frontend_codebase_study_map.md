# Large Enterprise Frontend Codebase Revision

## Study Order

1. README and root `package.json`
2. workspace config
3. app entry point
4. route config
5. API client
6. auth/session layer
7. state setup
8. tests
9. CI/build scripts

## Important Patterns

* App shell owns bootstrapping, layout, routes, proxies, and plugin runtime.
* Shared HTTP client owns headers, tokens, session timeout, and error handling.
* Route config can drive navigation, access checks, sidebar visibility, and tests.
* Shared services need fallbacks for standalone feature development.
* Long-running requests need polling cancellation and stale-response guards.

## Interview Line

Enterprise frontend skill means understanding boundaries: shell vs feature, shared vs local, config vs component code, and UX checks vs backend security.

