# Revision Notes: useEffect and Side Effects

* React helps build interactive interfaces from reusable components.
* Modern React is centered on function components, props, state, effects, hooks, and predictable rendering.
* Good React code separates UI state, server state, derived values, effects, and reusable logic.
* Best practice: Keep render pure.
* Best practice: Lift state only when multiple components need it.
* Best practice: Prefer composition over prop tunnels.
* Best practice: Use effects only for synchronization.
* Best practice: Measure before memoizing.
* Avoid: Mutating state directly.
* Avoid: Putting derived state in state unnecessarily.
* Avoid: Using effects for calculations that belong in render.
* Avoid: Using array index keys for reorderable lists.

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

### 1. When do you actually need `useEffect`?

Use it to synchronize React with something outside render: network requests, subscriptions, timers, imperative DOM APIs, browser storage, or third-party widgets. Do not use it just to calculate derived data from props/state.

### 2. Why is an incorrect dependency array dangerous?

Missing dependencies create stale closures. Extra unstable dependencies can rerun effects too often. The correct dependencies describe the values the effect reads from render scope.

### 3. What should an effect cleanup do?

It should undo subscriptions, timers, event listeners, observers, in-flight async ownership, or imperative library work started by the effect. Cleanup should make reruns and unmounts safe.

### 4. How do you avoid race conditions in data fetching effects?

Abort the old request or track whether the response still belongs to the latest render. Also represent loading, error, empty, cancelled, and stale states so old responses cannot silently overwrite newer UI.

### 5. What effect issues do you flag in review?

Effects used for derived state, missing cleanup, disabled dependency linting, async functions defined carelessly, event listeners that re-register repeatedly, and effects that combine unrelated responsibilities.

---

# Quick Practice

1. Explain one realistic production use case for useEffect and Side Effects in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.

---

# Added from `react_1.docx`

* `useEffect` runs after commit and synchronizes with external systems.
* `useMemo` runs during render and returns a cached calculated value.
* Use `useMemo` for expensive derived values, not side effects.
* Use `useEffect` for network calls, subscriptions, timers, DOM APIs, logging, and cleanup.
