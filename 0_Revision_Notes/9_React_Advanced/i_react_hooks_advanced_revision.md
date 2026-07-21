# Revision Notes: React Hooks Advanced Revision

## Memoization

| Tool | Memoizes |
| ---- | -------- |
| `React.memo` | component |
| `useMemo` | computed value |
| `useCallback` | function reference |

---

# Rules of Hooks

* Only call hooks at the top level.
* Only call hooks from React function components or custom hooks.
* Hook call order must stay the same between renders.

---

# Effects

* `useEffect` is for side effects after render.
* `useMemo` is for derived values during render.
* cleanup runs before next effect and on unmount.
* include dependencies honestly.

---

# Other Hooks

* `useReducer` for complex transitions
* `useLayoutEffect` for pre-paint DOM measurement, such as `getBoundingClientRect()` before visible paint
* custom hooks for reusable logic
* `useRef` for mutable values without re-render
