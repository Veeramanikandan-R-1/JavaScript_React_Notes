# Company Interview Rounds and Answer Bank

This file incorporates `questions (2).docx`. It preserves company-wise questions, personal answer drafts, and coding tasks without duplicating every basic JS/React theory note that already exists elsewhere.

---

# 1. HCL Interview for Cisco Client

Date in source note: November 27, 2025.

Questions:

* JavaScript object flattening.
* React rerender prevention.
* Build a custom `React.memo`-style wrapper using `useRef`.

Coding solutions are preserved in:

* [JavaScript Coding Programs](../19_Coding_Practice/a_javascript_programs.md)
* [React Machine Coding Programs](../19_Coding_Practice/b_react_machine_coding_programs.md)

React optimization answer:

```text
If count changes should not rerender an input child:
1. Wrap child with React.memo.
2. Pass stable function props with useCallback.
3. Avoid putting inputValue in callback dependencies when the callback only calls setInputValue.
4. Verify with React DevTools profiler or console count.
```

Corrected callback:

```jsx
const inputChangeHandler = useCallback((event) => {
  setInputValue(event.target.value);
}, []);
```

Cisco DNAC EVPN project context is consolidated in [Project Experience Story Bank](./j_project_experience_story_bank.md).

---

# 2. Sol-X Second Round

Questions:

* How do you handle live data without repeatedly hitting an API with `setInterval`?
* GraphQL basics.
* Build a canvas/form-builder style UI:
  * left panel has controls such as label, text input, button
  * drag to the right panel
  * dropped item becomes a real HTML element
* Why switch jobs?

Live-data answer:

```text
If the server can push updates, prefer WebSocket or Server-Sent Events.
If polling is required, use controlled polling with cleanup, visibility handling, backoff, caching, and deduplication.
Avoid uncontrolled setInterval loops that keep hitting APIs when the component is hidden or unmounted.
```

GraphQL answer:

```text
GraphQL lets the client ask for the exact fields it needs.
It is useful when screens need related data from multiple resources and REST would over-fetch or require many round trips.
```

Job-switch answer:

```text
I have learned a lot in my current role, but I am ready for more complex frontend challenges where I can grow technically and contribute at a higher level. I am focusing on long-term career growth, stronger product impact, and deeper frontend engineering work.
```

---

# 3. Nagarro LinkedIn Rounds

Technical Round 1:

* CSS positioning.
* CSS `transform` and `translate`.
* `let`, `const`, and `var`.
* `typeof null`.
* hoisting.
* event delegation.
* closures.
* shallow copy vs deep copy.
* `map`, `filter`, `forEach`.
* React hooks.
* `useEffect` vs `useLayoutEffect`.
* keys in React lists.
* controlled vs uncontrolled components.
* prop drilling.
* `React.memo`.
* valid parentheses.
* dynamic multi-select dropdown.

Technical Round 2:

* Redux internal flow.
* Context API vs Redux.
* client-server architecture in React.
* code splitting.
* side effects.
* `useMemo` vs `useCallback`.
* large React app performance.
* React Fiber and reconciliation.
* local state vs global state.
* service workers and PWA.
* own `Array.prototype.map`.
* REST API call with loading and error UI.

Event delegation answer:

```js
const list = document.getElementById("parentList");

list.addEventListener("click", (event) => {
  if (event.target.matches("li")) {
    console.log("Clicked item:", event.target.textContent);
  }
});
```

Why it helps:

* fewer listeners
* less memory usage
* works for dynamically added items
* centralizes event handling

---

# 4. Aptiv First Round

Questions:

* If given a chance to prove yourself with UI, what changes would you make?
* Have you worked with teams in different time zones?
* A page is loading for a long time and then errors. How do you debug?
* Huge API response from different sources. How do you handle it?
* Explain your daily routine.
* How does TypeScript help in real-world development?

UI improvement answer:

```text
I would start with UX and maintainability: improve navigation, consistency, accessibility, responsive behavior, and reusable components. Then I would profile performance, reduce unnecessary rendering, check bundle size, and add focused tests for critical flows.
```

Timezone collaboration answer:

```text
I keep tickets updated, document decisions, communicate blockers early, and create overlap for critical discussions. Clear handoff notes help avoid delays across time zones.
```

Slow/error page debugging answer:

```text
I check Network and Console first, then React DevTools for rerenders and component state. I verify API status, payload size, error handling, loading states, and whether error boundaries or fallback UI are missing.
```

Huge API answer:

```text
Ask backend for only required fields when possible. Use pagination or infinite scroll, virtualization, caching, normalization, and Promise.all or backend aggregation when multiple sources must be merged.
```

TypeScript answer:

```text
TypeScript catches wrong data shapes during development, improves autocomplete, makes React props self-documenting, and makes refactoring safer in large teams.
```

---

# 5. JavaScript Prep List from Source Notes

Frequently asked topics:

* execution context and call stack
* data types: arrays, objects, strings
* array and object methods
* `let`, `var`, `const`
* hoisting and temporal dead zone
* illegal shadowing
* scope and scope chain
* mutable vs immutable values
* shallow copy and deep copy
* DOM and BOM
* critical rendering path
* function declaration vs function expression
* arrow functions and `this`
* IIFE
* `call`, `apply`, `bind`
* closures
* callbacks and callback hell
* Promises and Promise chaining
* async/await
* currying
* debouncing and throttling
* event propagation, bubbling, capturing, delegation
* prototype and prototypal inheritance
* memoization
* generator functions
* event loop, microtasks, macrotasks
* `DOMContentLoaded`, `load`, `beforeunload`, `unload`
* `async` and `defer`
* polyfills: Promise methods, `call`, `apply`, `bind`, `map`, `reduce`, `filter`, `forEach`, `flat`, Fetch API
* Web APIs: `setTimeout`, `setInterval`
* higher-order functions
* JS engine basics

Shadowing answer:

```text
Shadowing happens when an inner variable has the same name as an outer variable. Inside that scope, the inner variable hides the outer one.
```

---

# 6. Tecnotree

First round:

* unique elements and one-time-occurrence elements from an array.

Second round:

* `useMemo` vs `useEffect`.
* how Webpack works in React.
* how React code is processed by Babel.
* how to configure Webpack.

---

# 7. Mitsogo Second Round

Questions:

* Why do we need Redux?
* Payment security: if first API call has no response and user retries, how does backend know it is a second attempt?
* Start-menu-style search: what data structure and UI approach would you use?
* Puzzle: mislabeled boxes with red, blue, and mixed balls.

Payment retry answer:

```text
Use an idempotency key or unique request id generated for the payment attempt. The backend stores that key with request status, timestamp, and result so duplicate retries do not charge twice.
```

Search answer:

```text
Use normalized arrays/maps for results, debounce input, cache previous searches, and design nested pages as route/config data instead of deeply coupled nested objects.
```

Puzzle memory:

```text
Pick from the box labeled mixed first, because labels are known to be wrong. One pick identifies that box, then the remaining labels can be inferred.
```

Source feedback preserved: develop logical reasoning.

---

# 8. Shravan Test

Questions captured:

* React Router history mutability.
* `Content-Type` for image/binary upload through Axios.
* lifecycle method that runs once after render.
* component receives outside values through props.
* lifecycle methods before mount.
* state initialization in class components.

Corrections and modern framing:

* Router history details are version-dependent. In modern React Router apps, prefer router APIs such as `useNavigate` instead of mutating history directly.
* For binary uploads, use `multipart/form-data` for form uploads or `application/octet-stream` for raw binary streams, depending on backend contract.
* Class lifecycle after first render: `componentDidMount`.
* Functional equivalent: `useEffect(() => { ... }, [])`.
* Initialize class state directly in constructor with `this.state = ...`; do not use `setState` in the constructor for initialization.

---

# 9. Accenture Rounds

Second round topics:

* React vs other frameworks.
* hook types and lifecycle equivalents.
* state vs props.
* unidirectional vs bidirectional data flow.
* Context API vs Redux.
* Redux flow.
* pure components and pure functions.
* async nature of `setState`.
* callbacks inside `setState`.
* HOC use cases.
* controlled and uncontrolled components.
* `children` props.
* hoisting, ES6 features, spread/rest.
* `let`, `var`, `const`, TDZ.
* rebase and Git practice.
* Bitbucket, Jira, Agile, DevOps.

Final round topics:

* why Redux and alternatives.
* execution context.
* daily work explanation.
* user stories and story points.
* context API and custom hooks.
* lifecycle methods.
* why Accenture and why job switch.
* libraries used: React Hook Form, MUI, Ant Design, Formik, React Bootstrap, Redux, React Router, Axios, Lodash, UUID.
* third-party APIs.
* why Sass.
* access token vs refresh token.
* localStorage vs sessionStorage.
* password hashing library: bcrypt.

---

# 10. Thinkbridge Third Round

Questions:

* prevent rerender on state update
* `useMemo`, `useRef`, `useCallback`
* why POST cannot simply be used as GET
* why not send business data in headers
* header vs params vs body
* Redux vs plain object/import-export state
* lazy loading and chunks
* preventing duplicate API calls on repeated clicks
* normal variable vs state variable
* React vs Angular
* where virtual DOM exists

HTTP answer:

| Part | Use |
| ---- | --- |
| Headers | Metadata such as auth token, content type, accepted response type, client info. |
| Query params | URL-visible filters, search terms, pagination, sort, resource identifiers when appropriate. |
| Body | Business payload for create/update actions, forms, JSON, file metadata, etc. |

Why not use GET like POST:

* URL length limits apply.
* query data is visible in URL and history.
* GET is cacheable by default in many contexts.
* browser APIs do not consistently support GET request bodies.
* file upload belongs in body-based requests, usually POST/PUT/PATCH.

Prevent duplicate API calls:

* disable button while request is pending
* debounce or throttle user-triggered actions
* use idempotency keys for critical writes
* cancel stale requests with `AbortController`
* dedupe cached requests with React Query, SWR, or RTK Query
* guard saga/thunk flows with `takeLatest`, request status, or unique request ids

React vs Angular:

| React | Angular |
| ----- | ------- |
| UI library focused on view/component layer | Full framework |
| Uses JSX | Uses templates |
| Routing is added with a library | Router is built in |
| Virtual DOM model | Framework-managed DOM/change detection |
| Usually unidirectional data flow | Supports two-way binding patterns |

Virtual DOM answer:

```text
The Virtual DOM is an in-memory JavaScript representation used by React during rendering and diffing. It is not a visible DOM node stored in the page.
```

---

# 11. HR Round Prep

Prepare short, honest answers for:

* companies attended and why you were not selected
* other offers and joining intent
* company history
* tell me about yourself
* why change job
* why this company
* relocation comfort
* salary expectation
* notice period
* night shifts
* academic/career gaps
* questions for interviewer

Do:

* be genuine
* keep answers calm and specific
* connect job switch to growth, not complaints
* ask clear questions without hesitation
