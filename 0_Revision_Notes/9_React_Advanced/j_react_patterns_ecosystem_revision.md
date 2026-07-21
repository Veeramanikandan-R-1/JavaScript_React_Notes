# Revision Notes: React Patterns and Ecosystem

## Topics

* `React.lazy`
* `Suspense`
* Error Boundaries
* Higher-Order Components
* Render Props
* Portals
* React Fiber
* PWA
* i18n
* folder structure

---

# Quick Rules

* Use `React.lazy` for route/component code splitting.
* Use `Suspense` for loading fallback.
* Error boundaries catch render errors.
* HOCs and render props are older reuse patterns.
* Portals are for modals/overlays.
* Fiber is React's rendering architecture.
* Use feature-based folders for larger apps.

---

# Added from `react_1.docx`

* Use `children` for static/structural composition.
* Use render props or function-as-children when shared logic/data should be exposed to the consumer's UI.
* Render props were especially useful before hooks; custom hooks often replace them now.
* React is a UI library; Angular is a full framework.
* React usually uses one-way data flow; Angular supports two-way binding patterns.
* React gives more architectural choice; Angular gives more built-in structure.
* HOC examples include older Redux `connect` and older router `withRouter`.
