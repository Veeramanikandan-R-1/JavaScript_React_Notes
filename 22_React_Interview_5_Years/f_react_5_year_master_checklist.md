# React 5-Year Interview Master Checklist

Use this as the final revision map before interviews.

---

# 1. React Core

You should explain clearly:

* JSX and element tree
* props vs state
* controlled vs uncontrolled components
* lifting state up
* conditional rendering
* lists and keys
* reconciliation
* Fiber high-level idea
* functional vs class components
* synthetic events
* Strict Mode behavior

Strong answer pattern:

> React components describe UI from props and state. When state changes, React renders a new tree, compares it with the previous one, and commits necessary DOM updates. Keys help React preserve identity in lists.

---

# 2. Hooks

Must know:

* `useState`
* `useEffect`
* `useLayoutEffect`
* `useRef`
* `useMemo`
* `useCallback`
* `useReducer`
* `useContext`
* custom hooks
* dependency arrays
* stale closures
* cleanup functions

Modern hooks to know:

* `useTransition`
* `useDeferredValue`
* `useSyncExternalStore`
* `useActionState`
* `useOptimistic`
* `useFormStatus`
* `useEffectEvent`
* `use`

---

# 3. State Management

Know when to use:

| Situation | Good choice |
| --------- | ----------- |
| local input/modal state | `useState` |
| complex local transitions | `useReducer` |
| theme/auth/current user | Context |
| global client state | Redux Toolkit or Zustand |
| server data cache | React Query, SWR, or RTK Query |
| complex async orchestration | Saga when the project already uses it |

Senior line:

> I avoid putting server cache, form state, route params, and local modal state all into Redux. Different state has different ownership.

---

# 4. Data Fetching

Must cover:

* loading/error/empty states
* cancellation with AbortController
* stale response handling
* retry rules
* pagination
* optimistic updates
* cache invalidation
* polling vs WebSocket/SSE
* auth headers and session timeout

Good answer:

> For server state, I prefer React Query/RTK Query/SWR because they handle caching, dedupe, stale data, retries, and invalidation better than hand-written effects.

---

# 5. Routing and Auth

Must know:

* `BrowserRouter`
* nested routes
* `Outlet`
* route params
* search params
* `useNavigate`
* protected routes
* role-based routes
* lazy-loaded routes
* route-level error/loading states

Senior line:

> Protected routes are UX guards. Backend APIs must still enforce authorization.

---

# 6. Performance

Must know:

* React Profiler
* unnecessary re-renders
* stable references
* memoization tradeoffs
* virtualization
* code splitting
* lazy loading
* bundle analysis
* Web Vitals
* INP, LCP, CLS
* image/font optimization
* React Compiler basics

Good answer:

> I measure first. React performance issues may come from too many renders, expensive calculations, large DOM, heavy bundles, network latency, or layout work.

---

# 7. Testing

Must know:

* unit testing
* React Testing Library
* `userEvent`
* queries by role/label/text
* mocking API with MSW
* Cypress/Playwright for E2E
* testing loading/error/empty states
* testing forms and async UI
* avoiding brittle selectors

Good answer:

> I test user-visible behavior, not implementation details. For API-driven components, I mock at the network boundary and assert loading, success, empty, and error states.

---

# 8. TypeScript with React

Must know:

* props typing
* event typing
* `useState` typing
* reducer action unions
* context with runtime guard
* refs
* generic components
* polymorphic components
* API response types
* discriminated unions

Good answer:

> TypeScript documents component contracts and catches refactor mistakes, but runtime validation is still required for external API data.

---

# 9. Accessibility

Must know:

* semantic HTML
* labels
* button vs div
* keyboard navigation
* focus management
* modal focus restore/trap
* ARIA basics
* error announcements
* color contrast
* reduced motion
* screen reader testing basics

Good answer:

> Accessibility is not only ARIA. It is semantics, labels, focus, keyboard behavior, announcements, contrast, motion, and testing.

---

# 10. Security

Must know:

* XSS
* React escaping
* `dangerouslySetInnerHTML`
* CSRF
* CORS
* token storage tradeoffs
* protected routes
* role checks
* session cleanup
* never trust frontend checks alone

Good answer:

> React escapes text by default, but XSS can still happen through unsafe HTML injection, unsafe URLs, vulnerable dependencies, or mishandled third-party content.

---

# 11. Modern React and Next.js

Must know:

* SSR
* hydration
* hydration mismatch
* Server Components
* Client Components
* `"use client"`
* `"use server"`
* Server Functions/Actions
* streaming
* Suspense boundaries
* route loading/error files in frameworks

Good answer:

> Server Components reduce client JavaScript and can fetch data on the server, while Client Components are used for interactivity, state, effects, and browser APIs.

---

# 12. System Design

Practice designing:

* dashboard
* searchable table
* admin app
* notification system
* form wizard
* infinite feed
* micro frontend shell

Always include:

* requirements
* component boundaries
* API shape
* state ownership
* loading/error/empty states
* performance
* accessibility
* testing
* observability

---

# 13. Machine Coding

Practice until you can build:

* autocomplete with debounce and abort
* modal with portal and focus handling
* toast manager
* data table
* custom `useFetch`
* nested comments
* cart with optimistic update
* dynamic form builder

During coding, say your tradeoffs out loud.

---

# 14. Final 3-Day Revision Plan

## Day 1

* React core
* hooks
* rendering/reconciliation
* forms
* TypeScript React

## Day 2

* state management
* routing/auth
* data fetching
* testing
* performance

## Day 3

* system design
* machine coding
* project stories
* modern React 19
* mock interview answers

---

# 15. Final Interview Rule

For every answer, try to mention:

```text
mental model
real-world use case
edge case
debugging method
test strategy
production risk
```

That is the difference between a 2-year answer and a 5-year answer.

