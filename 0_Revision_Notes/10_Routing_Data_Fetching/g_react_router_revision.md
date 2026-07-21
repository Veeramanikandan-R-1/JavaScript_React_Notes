# Revision Notes: React Router DOM

## Core Components

* `BrowserRouter`
* `Routes`
* `Route`
* `Link`
* `NavLink`
* `Outlet`
* `Navigate`

---

# Dynamic Route

```jsx
<Route path="/users/:userId" element={<UserDetails />} />
```

Use `useParams()` to read route params.

---

# Nested Route

Use parent route + `Outlet`.

---

# Interview Notes

* `Link` avoids full page reload.
* `Outlet` renders child routes.
* React Router creates client-side navigation.

---

# Added from `react_1.docx`

* Conventional routing usually requests a new HTML document and refreshes the page.
* React Router updates browser history and renders matched components without a full reload.
* Protected routes are UX guards, not security boundaries.
* RBAC means Role-Based Access Control and must be enforced on the backend.
* React Router v5 used `Switch`; React Router v6+ uses `Routes`.
