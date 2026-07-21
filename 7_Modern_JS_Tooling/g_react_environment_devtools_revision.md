# React Environment Variables and DevTools Revision

This file incorporates React environment and DevTools notes from the pasted `JS revision.md`.

---

# 1. Environment Variables

Frontend environment variables are bundled into browser code if used by the app.

Create React App convention:

```text
REACT_APP_API_URL=https://api.example.com
REACT_APP_VERSION=1.0.0
REACT_APP_FEATURE_FLAG=true
```

Access:

```jsx
const apiUrl = process.env.REACT_APP_API_URL;
```

Vite convention:

```text
VITE_API_URL=https://api.example.com
```

Access:

```js
const apiUrl = import.meta.env.VITE_API_URL;
```

Important:

```text
Never put secrets in frontend environment variables.
They are visible in the built JavaScript.
```

---

# 2. Environment Files

Common files:

```text
.env
.env.local
.env.development
.env.production
```

Example:

```text
VITE_API_URL=http://localhost:5000
```

Use different values for local and production API URLs.

---

# 3. React DevTools

Install React Developer Tools in Chrome or Firefox.

Use it to inspect:

* component tree
* props
* state
* context values
* hooks
* render performance

Profiler helps find components that re-render too often.

---

# 4. Debugging Workflow

```text
1. Reproduce issue.
2. Inspect component props/state in React DevTools.
3. Check Network tab for API calls.
4. Check Console for errors.
5. Profile if performance is slow.
```

