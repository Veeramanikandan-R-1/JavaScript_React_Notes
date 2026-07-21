# React System Design Interview Playbook

For 5-year React roles, system design is often frontend-focused: component boundaries, data flow, caching, performance, accessibility, testing, observability, and rollout.

---

# 1. Universal Answer Structure

Use this order in interviews:

```text
requirements
-> users and constraints
-> page/component structure
-> data model and APIs
-> state ownership
-> loading/error/empty states
-> performance
-> accessibility
-> testing
-> observability
-> rollout and risks
```

This makes you sound senior because you cover the product, not only the component.

---

# 2. Design: Enterprise Dashboard

## Requirements

* summary cards
* charts
* data table
* filters: tenant, site, time range
* role-based visibility
* export
* loading, empty, and error states

## Architecture

```text
DashboardPage
  DashboardProvider
  GlobalFilters
  SummaryCards
  TrendCharts
  DataTable
  ExportMenu
```

## State

| State | Owner |
| ----- | ----- |
| selected tenant/site/time range | URL or global dashboard context |
| server data | React Query / RTK Query |
| table sort/page/search | URL search params if shareable, otherwise local/table store |
| drawer/modal state | local component state |
| role/feature flags | auth/session provider |

## Data Fetching

* query key includes filters
* abort stale requests
* cache by route/filter
* prefetch next tab if valuable
* retry only safe reads
* show partial errors per widget when APIs fail independently

## Performance

* code-split heavy chart library
* virtualize large table
* memoize column definitions
* debounce search input
* use `useTransition` for heavy local filtering
* avoid re-rendering all cards when one filter opens

## Testing

* unit test filter/query builders
* RTL test loading/error/empty widgets
* E2E test filter change calls expected APIs
* E2E test export flow
* accessibility test keyboard navigation

Interview line:

> I would treat dashboard widgets as independently loading sections so one failed API does not blank the whole page.

---

# 3. Design: Searchable Data Table

## Requirements

* search
* sort
* filters
* pagination
* column visibility
* row actions
* accessible keyboard navigation

## Component Shape

```text
DataTablePage
  TableToolbar
  FilterPanel
  DataTable
    HeaderCell
    Row
    RowActions
  Pagination
```

## Decisions

| Concern | Decision |
| ------- | -------- |
| Backend pagination | use cursor for large changing datasets |
| Search | debounce input and cancel stale requests |
| Sort/filter state | keep in URL for shareable views |
| Large rows | virtualize |
| Selection | store selected row IDs, not whole row objects |
| Accessibility | table semantics or grid pattern depending on complexity |

## API Contract

```text
GET /items?query=&sort=&cursor=&limit=&status=
response: { data, nextCursor, totalCount? }
```

Senior note: total count can be expensive on large datasets. Ask if exact total is required.

---

# 4. Design: Role-Based Admin App

## Requirements

* login/session
* admin-only pages
* feature flags
* audit-friendly actions
* protected routes
* graceful unauthorized states

## Architecture

```text
AuthProvider
FeatureFlagProvider
Router
  ProtectedRoute
  AdminLayout
  AuditLogPage
  UserManagementPage
```

## Auth Rules

* frontend route guards improve UX
* backend must enforce authorization
* token/session expiry should clear local state
* role changes should refresh permissions
* hide inaccessible nav items but handle direct URLs too

## Tests

* admin user can access admin route
* normal user sees unauthorized
* logged-out user redirects to login
* session timeout clears storage and redirects

---

# 5. Design: Notification System

## Requirements

* unread count
* toast or inbox
* realtime updates if available
* mark as read
* reconnect/offline handling

## Transport Choice

| Option | Use when |
| ------ | -------- |
| WebSocket | two-way realtime needed |
| SSE | server-to-client updates only |
| Polling | backend only supports HTTP |

## State

* server state cache for notifications list
* local UI state for open/closed panel
* optimistic update for mark as read
* reconnect/backoff status

Senior line:

> If backend push is unavailable, I use controlled polling with cleanup, tab visibility handling, and backoff after failures.

---

# 6. Design: Multi-Step Form Wizard

## Requirements

* multiple steps
* validation per step
* save draft
* review screen
* submit
* navigation guard for unsaved changes

## State

| State | Owner |
| ----- | ----- |
| input values | React Hook Form |
| validation schema | Zod/Yup |
| current step | URL or local state |
| draft data | API/cache/localStorage depending on requirement |
| submit status | mutation state |

## Good Practices

* validate step before moving forward
* preserve values when moving between steps
* use accessible error messages
* focus first invalid field
* block double submission
* support reload/resume if business-critical

---

# 7. Design: Infinite Scroll Feed

## Requirements

* initial feed
* load more
* pull/refresh
* optimistic like/comment
* empty and end states
* avoid scroll jank

## Design

* cursor pagination
* IntersectionObserver sentinel
* dedupe records by ID
* abort stale refresh
* virtualize if list grows large
* preserve scroll position on navigation

Common bug:

* duplicate items after refetch because pages are merged without ID dedupe

---

# 8. Design: Micro Frontend Shell

## Requirements

* host shell
* remote feature modules
* manifest config
* shared navigation/session/telemetry
* route contributions
* version compatibility

## Architecture

```text
ShellApp
  loads manifest
  initializes runtime
  exposes shared services
  renders navigation
  imports remote modules
```

Senior risks:

* failed remote should not crash entire shell
* local cache can become stale/corrupt
* shared services need stable contracts
* route ownership must be clear
* CSS/design-system conflicts must be controlled
* security cannot rely on hidden frontend routes

---

# 9. What Interviewers Listen For

Strong signals:

* asks clarifying questions
* separates client state from server state
* discusses URL state for shareable views
* covers loading/error/empty states
* mentions accessibility and keyboard behavior
* thinks about stale requests and cancellation
* measures performance instead of guessing
* includes testing strategy
* discusses rollout and monitoring

Weak signals:

* only draws components
* stores everything in Redux
* ignores backend/API contracts
* ignores failure states
* says "use memo everywhere"
* forgets accessibility
* gives no test plan

---

# Interview Template

Use this compact answer:

```text
I would first clarify users, scale, data freshness, permissions, and device targets.
Then I would design the page as feature-level components with clear data ownership.
Server data would live in React Query/RTK Query, shareable filters in URL params, and local UI state close to the component.
I would handle loading, empty, error, unauthorized, and partial-failure states.
For performance, I would code-split heavy routes, virtualize large lists, debounce search, cancel stale requests, and profile before memoizing.
I would test pure logic with unit tests, user behavior with RTL, and critical journeys with E2E tests.
Finally, I would add logs/RUM for failures and roll out behind a feature flag if risk is high.
```

