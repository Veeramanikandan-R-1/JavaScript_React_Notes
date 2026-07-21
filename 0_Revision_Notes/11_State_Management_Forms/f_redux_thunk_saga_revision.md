# Revision Notes: Redux, Thunk, Saga, and Context

## Redux Flow

```text
Component -> dispatch(action) -> reducer -> store -> UI
```

---

# Core Terms

* store
* action
* reducer
* dispatch
* selector

---

# Redux Toolkit

* recommended Redux style
* `configureStore`
* `createSlice`
* `createAsyncThunk`
* uses Immer

---

# Async Tools

| Tool | Use |
| ---- | --- |
| Thunk | simple async |
| `createAsyncThunk` | standard RTK async |
| Saga | complex side effects and cancellation |
| RTK Query | server-state cache |

Deep-dive revision:

* [Redux Toolkit and Thunk Revision](./g_redux_toolkit_thunk_practical_notes.md)
* [Redux Saga Revision](./h_redux_saga_practical_notes.md)

---

# Context vs Redux

Context is good for simple shared values. Redux is better for complex global state and predictable async workflows.

---

# Added from `react_1.docx`

* Plain objects can hold data; Redux adds a predictable update workflow.
* Redux flow: component -> dispatch action -> reducer -> store updates -> subscribed UI re-renders.
* Flux is an architecture for unidirectional data flow.
* Redux is Flux-inspired but usually has one store instead of multiple coordinated stores.
* Redux state is immutable so change detection, debugging, DevTools, and tests are easier.
* Redux Toolkit lets reducers look mutable because Immer produces immutable updates.
* Memoized selectors such as `reselect` help avoid unnecessary derived-data recalculation and rerenders.
