# Revision Notes: React Testing

## Tools

* React Testing Library
* jest-dom
* Vitest or Jest
* MSW
* renderHook

---

# Test These

* render output
* user clicks/typing
* forms
* loading state
* error state
* fetch success/failure
* custom hooks

---

# Warning

Snapshots are useful only in limited cases. Prefer behavior tests.

---

# Added from `react_1.docx`

* Include code coverage where the team expects it.
* SonarQube can report quality, duplication, coverage, bugs, and security smells.
* Coverage is a signal, not proof of quality.
* Prefer user-visible assertions with accessible queries such as `getByRole`.
