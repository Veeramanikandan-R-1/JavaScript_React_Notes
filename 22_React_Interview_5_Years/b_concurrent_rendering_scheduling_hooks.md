# React Concurrent Rendering and Scheduling Hooks

This note prepares you for senior React questions about responsiveness, update priority, transitions, and expensive UI.

---

# 1. The Mental Model

React rendering work can be urgent or non-urgent.

| Update type | Example | User expectation |
| ----------- | ------- | ---------------- |
| Urgent | typing in an input, clicking a button, opening a menu | must feel immediate |
| Non-urgent | filtering a huge list, rendering search results, switching heavy tabs | can lag slightly if input stays responsive |

Concurrent React lets React interrupt and prioritize rendering work. You do not manually control threads. You tell React which updates are less urgent.

Interview line:

> Concurrent rendering is about keeping the UI responsive by letting React pause, interrupt, and prioritize rendering work.

---

# 2. `startTransition` and `useTransition`

Use `useTransition` when a state update may trigger expensive rendering and can be treated as non-urgent.

Example: search input with heavy results.

```jsx
import { useState, useTransition } from "react";

function ProductSearch({ products }) {
  const [inputValue, setInputValue] = useState("");
  const [query, setQuery] = useState("");
  const [isPending, startTransition] = useTransition();

  function handleChange(event) {
    const nextValue = event.target.value;
    setInputValue(nextValue);

    startTransition(() => {
      setQuery(nextValue);
    });
  }

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <input value={inputValue} onChange={handleChange} />
      {isPending && <p role="status">Updating results...</p>}
      <ProductList products={filteredProducts} />
    </>
  );
}
```

What happens:

* input state updates urgently
* result filtering/rendering is marked as a transition
* React can keep typing responsive while rendering results

---

# 3. `useDeferredValue`

Use `useDeferredValue` when you receive a value immediately but want part of the UI to lag behind.

```jsx
import { useDeferredValue, useMemo, useState } from "react";

function SearchPage({ products }) {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);

  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      product.name.toLowerCase().includes(deferredQuery.toLowerCase())
    );
  }, [products, deferredQuery]);

  const isStale = query !== deferredQuery;

  return (
    <>
      <input value={query} onChange={(e) => setQuery(e.target.value)} />

      <div style={{ opacity: isStale ? 0.6 : 1 }}>
        <ProductList products={filteredProducts} />
      </div>
    </>
  );
}
```

Difference:

| Hook | Best for |
| ---- | -------- |
| `useTransition` | You control where the non-urgent state update happens. |
| `useDeferredValue` | You receive a value and want expensive consumers to lag behind. |

---

# 4. Debounce vs Deferred Rendering

Do not confuse them.

| Technique | What it does |
| --------- | ------------ |
| Debounce | Delays work until user stops typing. Often reduces API calls. |
| `useDeferredValue` | Allows urgent UI to update while expensive rendering catches up. |
| `useTransition` | Marks selected state updates as non-urgent. |

For API search:

* debounce or server-state cache reduces network calls
* abort stale requests prevents old responses from overwriting new results
* transition/deferred value improves rendering responsiveness

You may need more than one.

---

# 5. Suspense and Transitions

Transitions pair well with Suspense because they can keep previous UI visible while new UI loads.

```jsx
function App() {
  const [tab, setTab] = useState("overview");
  const [isPending, startTransition] = useTransition();

  function selectTab(nextTab) {
    startTransition(() => {
      setTab(nextTab);
    });
  }

  return (
    <>
      <Tabs selected={tab} onSelect={selectTab} />
      {isPending && <InlineProgress />}

      <Suspense fallback={<PageSkeleton />}>
        <TabPanel tab={tab} />
      </Suspense>
    </>
  );
}
```

Senior UX note:

* page-level fallback is fine for first load
* for tab switches, keeping old content visible can feel better
* show a small pending indicator instead of blanking the whole screen

---

# 6. What Transitions Do Not Solve

Transitions do not:

* make slow API calls faster
* reduce bundle size
* fix bad keys
* remove expensive calculations
* replace virtualization for huge lists
* prevent memory leaks

If the DOM is too large, use virtualization. If JavaScript is too heavy, split or optimize. If the API is slow, cache, paginate, or improve the backend contract.

---

# 7. `useSyncExternalStore`

Use `useSyncExternalStore` when React must subscribe to an external mutable store safely.

Examples:

* browser online/offline state
* custom global store
* third-party store outside React
* WebSocket cache
* feature flag store

```jsx
import { useSyncExternalStore } from "react";

function subscribe(callback) {
  window.addEventListener("online", callback);
  window.addEventListener("offline", callback);

  return () => {
    window.removeEventListener("online", callback);
    window.removeEventListener("offline", callback);
  };
}

function getSnapshot() {
  return navigator.onLine;
}

export function useOnlineStatus() {
  return useSyncExternalStore(subscribe, getSnapshot, () => true);
}
```

Interview line:

> `useSyncExternalStore` is the correct React primitive for subscribing to external stores while keeping snapshots consistent with concurrent rendering.

---

# 8. Senior Debug Checklist

When a React screen feels slow:

1. Check whether the bottleneck is network, JavaScript, rendering, layout, or bundle size.
2. Use React Profiler to find expensive components.
3. Check if input state and expensive result state are coupled.
4. Try `useTransition` or `useDeferredValue` for non-urgent rendering.
5. Use virtualization for large lists.
6. Abort stale requests for typeahead.
7. Avoid deriving huge data inside render without memoization or server support.
8. Keep loading states calm and localized.

---

# Interview Questions

### What is the difference between `useTransition` and `useDeferredValue`?

`useTransition` marks a state update as non-urgent where the update is triggered. `useDeferredValue` lets a value update immediately but lets expensive consumers render later using a deferred version.

### When would you use `useTransition`?

For UI changes that may trigger expensive rendering but should not block urgent interactions, such as switching a heavy tab or updating search results while typing.

### When is debounce still needed?

When you want to reduce how often work starts, especially API calls. Transitions improve rendering responsiveness, but they do not reduce network requests by themselves.

### What is `useSyncExternalStore` for?

It is for subscribing to external stores safely and consistently in React, especially with concurrent rendering and hydration.

---

# Source References

* `useTransition`: https://react.dev/reference/react/useTransition
* `useDeferredValue`: https://react.dev/reference/react/useDeferredValue
* `useSyncExternalStore`: https://react.dev/reference/react/useSyncExternalStore
* React built-in hooks: https://react.dev/reference/react/hooks

