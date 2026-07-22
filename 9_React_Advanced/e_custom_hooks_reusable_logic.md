# Custom Hooks and Reusable Logic (Senior Frontend Engineer Perspective)

Before going deeper into frameworks or libraries, understand this topic as part of real frontend engineering: extracting stateful behavior cleanly.

---

# 1. Fundamentals

* React helps build interactive interfaces from reusable components.
* Modern React is centered on function components, props, state, effects, hooks, and predictable rendering.
* Good React code separates UI state, server state, derived values, effects, and reusable logic.

---

# 2. Core Concepts

| Concept | Practical meaning |
| ------- | ----------------- |
| Component | A reusable piece of UI. |
| Props | Inputs passed from parent to child. |
| State | Data that changes over time and triggers rendering. |
| Effect | Synchronization with systems outside React rendering. |
| Render | Calling components to describe UI. |
| Commit | Applying changes to the host environment such as the DOM. |

---

# 3. Internal Working

* React render should stay pure: same inputs should describe the same UI.
* State updates schedule a re-render; React compares the new element tree with the previous tree and commits necessary DOM changes.
* Effects run after commit and should synchronize with external systems such as subscriptions, timers, network, or imperative widgets.

---

# 4. Common Mistakes

* Mutating state directly.
* Putting derived state in state unnecessarily.
* Using effects for calculations that belong in render.
* Using array index keys for reorderable lists.
* Optimizing with memoization before measuring.

---

# 5. Best Practices

* Keep render pure.
* Lift state only when multiple components need it.
* Prefer composition over prop tunnels.
* Use effects only for synchronization.
* Measure before memoizing.

---

# 6. Code Example

```jsx
function EmptyState({ title, action }) {
  return (
    <section aria-labelledby="empty-title">
      <h2 id="empty-title">{title}</h2>
      {action}
    </section>
  );
}

export default function OrdersPage({ orders }) {
  if (orders.length === 0) {
    return <EmptyState title="No orders yet" action={<button>Create order</button>} />;
  }

  return orders.map((order) => <article key={order.id}>{order.name}</article>);
}
```

---

# 7. Real-world Scenarios

* A component re-renders because parent state changed.
* A list has wrong input values because keys are unstable.
* An effect keeps refetching because dependencies are unstable.

---

# 7.1 Custom Hooks Practical Notes

A custom hook is a function whose name starts with `use` and can call other hooks.

Use custom hooks to share stateful logic across components without repeating effect/state code.

Good examples:

* `useLocalStorage`
* `useCounter`
* `useDocumentTitle`
* `useDebouncedValue`
* `useAuthUser`
* `useWindowSize`

```jsx
function useDocumentTitle(title) {
  React.useEffect(() => {
    const previousTitle = document.title;
    document.title = title;

    return () => {
      document.title = previousTitle;
    };
  }, [title]);
}
```

Why custom hooks help:

* cleaner components
* reusable logic
* easier testing
* less HOC/render-prop nesting
* clearer separation between UI and behavior

# 8. Senior Deep Dive

## When to Use

* Use local state for local UI, context for scoped shared values, server-state tools for remote cache, and global stores for truly cross-cutting client state.
* Use effects for synchronization with external systems, not for derived render calculations.
* Use composition before adding global state.

## Debug Checklist

* Use React DevTools to inspect props, state, owners, and render causes.
* Check keys, effect dependencies, stale closures, and state mutation.
* Profile before adding memoization.

## Code Review Checklist

* Is state owned by the smallest sensible component?
* Are effects necessary and cleaned up?
* Are data fetching states and accessibility states complete?


---

# Revision Notes

* Custom Hooks and Reusable Logic matters because it affects real users, future maintainers, and production behavior.
* Learn the mental model before memorizing syntax.
* Use browser DevTools, tests, and small examples to verify behavior.
* React helps build interactive interfaces from reusable components.
* Modern React is centered on function components, props, state, effects, hooks, and predictable rendering.
* Good React code separates UI state, server state, derived values, effects, and reusable logic.

---

# Cheat Sheet

| Concept | Practical meaning |
| ------- | ----------------- |
| Component | A reusable piece of UI. |
| Props | Inputs passed from parent to child. |
| State | Data that changes over time and triggers rendering. |
| Effect | Synchronization with systems outside React rendering. |
| Render | Calling components to describe UI. |
| Commit | Applying changes to the host environment such as the DOM. |

---

# Interview Questions with Answers

### 1. When should you extract a custom hook?

Extract a custom hook when stateful logic is reused, when a component is becoming hard to read, or when an external system needs a clean React API. Do not extract only to make a file look smaller if the abstraction has no clear purpose.

### 2. What makes a custom hook API good?

It has clear inputs and outputs, owns cleanup, documents async/error states, avoids surprising side effects, and keeps stable references where consumers reasonably depend on them.

### 3. How do you test a custom hook?

Test through a small component or hook-testing utility, depending on the stack. Cover initial state, updates, cleanup, async success/failure, stale responses, and dependency changes.

### 4. What can go wrong when a hook hides too much?

Consumers may not understand when network calls happen, how errors are handled, what triggers rerenders, or how cleanup works. A reusable hook should reduce complexity, not move it into a black box.

### 5. What custom-hook issues do you flag in review?

Missing dependency handling, no cleanup, returning unstable objects/functions unnecessarily, mixing unrelated responsibilities, hiding product decisions, and hooks that are reusable in name only.

---

# Hands-on Exercises

## Exercise 1

Create a React component that demonstrates Custom Hooks and Reusable Logic.

### Solution

Include props, state or effects only when needed, stable keys for lists, and visible loading/error/empty states where relevant.

## Exercise 2

Review the component with React DevTools.

### Solution

Inspect props, state ownership, render behavior, effect dependencies, and accessibility names.

---

# Senior Frontend Engineer Takeaway

For senior-level work, Custom Hooks and Reusable Logic is not only a syntax topic. You should be able to explain the mental model, choose the right pattern for a product requirement, identify common failure modes, and verify behavior through tooling, tests, and browser inspection.
