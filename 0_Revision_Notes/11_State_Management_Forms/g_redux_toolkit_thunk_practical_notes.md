# Redux Toolkit and Thunk Revision

* Redux Toolkit is the recommended way to write Redux.
* `configureStore` creates the store with good defaults.
* `createSlice` combines reducer logic and action creators.
* RTK reducers can look mutable because Immer produces immutable state.
* `createAsyncThunk` creates `pending`, `fulfilled`, and `rejected` async actions.
* Thunks are functions that can use `dispatch` and `getState`.
* RTK Query is better when the main requirement is server-state fetching and caching.

Decision memory:

| Need | Tool |
| ---- | ---- |
| Simple local component state | `useState` |
| Shared app state with predictable updates | Redux Toolkit |
| Simple async Redux workflow | thunk / `createAsyncThunk` |
| Cached API data | RTK Query |
| Complex cancellation/workflow orchestration | Redux Saga |

