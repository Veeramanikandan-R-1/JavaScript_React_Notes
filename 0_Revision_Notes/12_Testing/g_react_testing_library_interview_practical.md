# React Testing Library Practical Revision

Mental model:

```text
render -> query like a user -> interact -> assert visible result
```

Query memory:

| Need | Query |
| ---- | ----- |
| Must exist now | `getBy*` |
| Must not exist | `queryBy*` |
| Appears later | `findBy*` |
| Button/link/heading/alert | `getByRole` |
| Input with label | `getByLabelText` |

Best practices:

* Use `userEvent` for realistic clicks, typing, tabbing, and selection.
* Use `fireEvent` only for low-level event dispatch.
* Test behavior, not state variables or implementation details.
* Use provider render helpers for Redux, Context, and Router.
* Test loading, success, empty, validation, and error states.
* Use Playwright/Cypress for full E2E workflows.

