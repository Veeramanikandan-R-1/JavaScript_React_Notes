# Revision Notes: memo, useMemo, and useCallback

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

### 1. When should you use `React.memo`, `useMemo`, or `useCallback`?

Use them when measurement or component structure shows avoidable expensive work or unnecessary child renders. They are optimization tools, not default styling. First make the render correct and simple.

### 2. Why can memoization make code worse?

It adds dependency maintenance, comparison overhead, stale closure risk, and cognitive load. If the calculation is cheap or the component always re-renders for other reasons, memoization may add cost without benefit.

### 3. Why does a memoized child still re-render when passed an inline object?

An inline object creates a new reference every render, so shallow comparison sees the prop as changed. Move stable objects outside render, derive them with `useMemo` when needed, or redesign the child API.

### 4. How do you find the real cause of excessive React renders?

Use React DevTools Profiler, check which props changed, inspect parent state ownership, and verify whether the slow part is rendering, expensive calculation, layout, or network work. Then optimize the bottleneck.

### 5. What memoization issues do you flag in review?

Memo everywhere without measurement, missing dependencies, using `useCallback` only to silence lint, unstable objects passed to memoized children, and custom comparison functions that ignore important props.

---

# Quick Practice

1. Explain one realistic production use case for memo, useMemo, and useCallback in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.

---

# Added from `react_1.docx`

* `React.memo` memoizes a component render result based on props.
* `useMemo` memoizes a calculated value.
* `useCallback` memoizes a function reference.
* `React.PureComponent` gives class components shallow prop/state comparison.
* Memoization helps only when references are stable and the measured cost justifies it.
* `useCallback(fn, deps)` is roughly `useMemo(() => fn, deps)`, but clearer.
* Use `useMemo` when unrelated state changes should not redo an expensive calculation.
* Use `useCallback` with `React.memo` children when function identity would otherwise force child rerenders.
