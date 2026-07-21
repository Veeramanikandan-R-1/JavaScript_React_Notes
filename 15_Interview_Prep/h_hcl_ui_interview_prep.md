# HCL UI Interview Prep

This file incorporates `Hcl interview prep1. .docx`. It keeps the original round themes, fixes weak candidate solutions, and turns each item into revision-ready notes.

---

# 1. First Set: UI Round Topics

Questions reported:

* DSA: Container With Most Water.
* React: fetch 1000+ records, display list, then optimize it.
* Security and authentication.
* JavaScript: explain `call`, `apply`, and `bind`.
* HTML and CSS basics.

Practical answer map:

| Area | What to say |
| ---- | ----------- |
| 1000+ records | Fetch with loading/error states, paginate or infinite-scroll, debounce search, virtualize very large lists, memoize expensive filtering, avoid rerendering unchanged rows. |
| Security/auth | Use access token in `Authorization` header, refresh token flow, protected routes, session expiry handling, backend token validation, CORS configured by backend. |
| HTML/CSS basics | Semantics, forms, accessibility, box model, flex/grid, positioning, responsiveness, specificity. |

Security summary:

```text
Frontend sends request with Authorization header.
Backend validates token before serving protected data.
Frontend protects routes for UX, but backend protection is mandatory.
CORS is configured by backend so the browser can allow trusted origins.
```

---

# 2. `call`, `apply`, and `bind`

The value of `this` depends on how a function is called. `call`, `apply`, and `bind` let you explicitly control it.

| Method | Calls immediately? | Arguments | Returns | Use case |
| ------ | ------------------ | --------- | ------- | -------- |
| `call` | yes | individual args | function result | Invoke now with a chosen `this`. |
| `apply` | yes | array of args | function result | Invoke now when args are already in an array. |
| `bind` | no | individual args | new function | Save a function with fixed `this` for later. |

```js
const person = { name: "Veera" };

function greet(age, city) {
  return `Hi, I am ${this.name}, ${age} years old from ${city}`;
}

console.log(greet.call(person, 25, "Chennai"));
console.log(greet.apply(person, [25, "Chennai"]));

const greetLater = greet.bind(person, 25, "Chennai");
console.log(greetLater());
```

Real-world use: `bind` is useful when a callback loses its original object context.

---

# 3. Second Set: Coding, Review, and Tooling

Questions reported:

* Explain problem statement and pseudocode for Roman to Integer.
* Explain problem statement and pseudocode for Container With Most Water.
* Review a React code file:
  * explain what it is doing
  * find bugs
  * suggest fixes
  * optimize it
* Compare async/await and Promises.
* Name design libraries used.
* Name deployment/infrastructure platforms.
* Explain Webpack and build tools.

Code-review workflow answer:

```text
1. Explain the component's purpose and data flow.
2. Check state ownership, props, side effects, rendering branches, and keys.
3. Check bugs: null states, dependency arrays, stale closures, missing cleanup, error handling.
4. Check performance: unnecessary rerenders, expensive work in render, list virtualization, memoization.
5. Check UX/accessibility: labels, keyboard support, loading/error/empty states.
6. Suggest tests for the risky behavior.
```

Async answer:

* Promises and `async/await` use the same Promise model.
* `async/await` is cleaner for sequential logic and `try/catch`.
* Use `Promise.all` with `await` for independent parallel requests.

```js
async function fetchDashboard() {
  const [user, posts, comments] = await Promise.all([
    fetchUser(),
    fetchPosts(),
    fetchComments(),
  ]);

  return { user, posts, comments };
}
```

Design libraries mentioned in the source notes:

* Cisco DNA / design-system components
* Material UI
* Ant Design
* Bootstrap / React Bootstrap

Deployment platforms mentioned:

* AWS, GCP, Azure
* Firebase, Vercel, Netlify, Render
* Docker and Kubernetes for container-based deployment

Build-tool answer:

```text
Webpack is a module bundler.
It follows imports, handles JS/CSS/images, transpiles when configured, code-splits, tree-shakes, produces source maps, and emits optimized browser assets.
Build tools exist to transform, bundle, optimize, and automate frontend delivery.
```

---

# 4. Third Set: React Machine Coding

Problem statement:

Build a React component that creates boxes from numeric input.

Requirements:

* positive number: add a box with that number
* boxes sorted ascending
* negative number: delete the box matching the absolute value
* comma-separated input such as `1,1` or `2,3`: create nested boxes
* nesting should work recursively for any depth
* optional: styling and animation

Clean solution is preserved in [React Machine Coding Programs](../19_Coding_Practice/b_react_machine_coding_programs.md).

Common candidate bugs from the original attempt:

* `Number(currValue) == NaN` never works; use `Number.isNaN(Number(value))`.
* nested arrays and plain numbers need a consistent data model.
* list items need stable keys.
* sorting should happen before rendering or when inserting.
* debounce is optional; do not call the input handler recursively from an effect unless needed.

---

# 5. Fast Revision Checklist

Before an HCL-style UI round, revise:

* `call`, `apply`, `bind`
* Promises vs `async/await`
* DSA: two pointers, maps, stacks, recursion
* React list optimization
* debounce and throttle
* route protection and token flow
* CORS basics
* Webpack/Vite/build tools
* code-review explanation flow
* one React machine-coding problem end to end

For HCL/Cisco project-experience answers, revise [Project Experience Story Bank](./j_project_experience_story_bank.md).
