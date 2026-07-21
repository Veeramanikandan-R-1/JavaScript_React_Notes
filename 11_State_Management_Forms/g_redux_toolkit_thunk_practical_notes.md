# Redux Toolkit, Thunk, and RTK Query Practical Notes

This file incorporates `redux-thunk&toolkit.docx` and keeps the notes modern, practical, and interview-ready.

---

# 1. What Redux Toolkit Solves

Redux Toolkit is the official recommended way to write Redux logic.

It reduces old Redux boilerplate by providing:

* `configureStore`
* `createSlice`
* `createAsyncThunk`
* RTK Query
* built-in Redux Thunk middleware
* Redux DevTools setup
* Immer-powered immutable updates

Old Redux separated action types, action creators, reducers, middleware setup, and store setup. RTK combines the common patterns without removing Redux's predictable data flow.

---

# 2. Store Setup with `configureStore`

```js
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import userReducer from "./userSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
  },
});
```

Why this is better than manual `createStore` setup:

* includes good middleware defaults
* includes thunk by default
* enables DevTools in development
* simplifies multiple reducers
* gives better TypeScript inference

---

# 3. `createSlice`

`createSlice` creates reducer logic and action creators together.

```js
import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment(state) {
      state.value += 1;
    },
    decrement(state) {
      state.value -= 1;
    },
    incrementByAmount(state, action) {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
```

The code looks mutable, but RTK uses Immer internally to produce immutable updates.

---

# 4. Component Usage

```jsx
import { useDispatch, useSelector } from "react-redux";
import { increment } from "./counterSlice";

export default function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <section>
      <h2>{count}</h2>
      <button type="button" onClick={() => dispatch(increment())}>
        Increment
      </button>
    </section>
  );
}
```

Senior note: keep selectors close to the slice when the state shape is reused across components.

---

# 5. `reducers` vs `extraReducers`

| Feature | `reducers` | `extraReducers` |
| ------- | ---------- | --------------- |
| Purpose | Handles actions owned by the same slice | Handles actions created elsewhere |
| Action creators | Auto-generated | Not generated here |
| Common use | local slice events | `createAsyncThunk`, logout reset, shared actions |

---

# 6. `createAsyncThunk`

Use `createAsyncThunk` for async workflows where Redux state must track loading, success, and error.

```js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchUser = createAsyncThunk("user/fetchUser", async (id) => {
  const response = await fetch(`/api/users/${id}`);
  if (!response.ok) throw new Error("Failed to fetch user");
  return response.json();
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;
```

---

# 7. What Is a Thunk?

A thunk is a function that delays work. In Redux, a thunk action creator returns a function instead of a plain action object.

```js
export function fetchTodos() {
  return async function fetchTodosThunk(dispatch, getState) {
    dispatch(todosLoading());

    try {
      const response = await client.get("/todos");
      dispatch(todosLoaded(response.todos));
    } catch (error) {
      dispatch(todosFailed(error.message));
    }
  };
}
```

Use thunks for:

* simple async API calls
* dispatching multiple actions in one flow
* reading current state with `getState`
* moving side-effect logic out of UI components

---

# 8. Middleware

RTK includes thunk by default. Add custom middleware like this:

```js
export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(customMiddleware),
});
```

Do not put side effects inside reducers. Reducers must stay pure.

---

# 9. RTK Query

RTK Query is for server-state fetching and caching.

```js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  endpoints: (builder) => ({
    getUser: builder.query({
      query: (id) => `users/${id}`,
    }),
  }),
});

export const { useGetUserQuery } = userApi;
```

RTK Query handles:

* loading and error flags
* request deduplication
* caching
* refetching
* generated hooks

Use `createAsyncThunk` when the async workflow is part of custom client state. Use RTK Query when the main problem is cached server data.

---

# 10. Interview Questions

### What problems does Redux Toolkit solve?

It reduces boilerplate, gives safer defaults, simplifies store setup, combines actions and reducers in slices, and handles immutable updates through Immer.

### Why can reducers appear to mutate state in RTK?

Immer records the mutations and produces a new immutable state object.

### What is the difference between `createSlice` and `createAsyncThunk`?

`createSlice` defines synchronous reducer logic and action creators. `createAsyncThunk` creates an async action workflow with `pending`, `fulfilled`, and `rejected` actions.

### What is the difference between RTK Query and `createAsyncThunk`?

RTK Query is a data-fetching and caching abstraction. `createAsyncThunk` is a lower-level async action helper for Redux workflows.

---

# 11. Source References

* Redux Toolkit app structure: https://redux.js.org/tutorials/essentials/part-2-app-structure
* Redux async logic with `createAsyncThunk`: https://redux.js.org/tutorials/essentials/part-5-async-logic
* RTK Query basics: https://redux.js.org/tutorials/essentials/part-7-rtk-query-basics

