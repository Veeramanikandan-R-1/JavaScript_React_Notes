# React Re-render Optimization Revision

This file incorporates React performance notes from the pasted `JS revision.md`.

---

# 1. Why Re-renders Happen

A React component re-renders when:

* its state changes
* its props change
* its parent re-renders
* context value it consumes changes

Even if the UI looks the same, React can still call the component again.

---

# 2. Optimization Tools

| Tool | Use |
| ---- | --- |
| `React.memo` | Skip child re-render when props are same |
| `useMemo` | Cache expensive calculated value |
| `useCallback` | Keep stable function reference |
| component splitting | Reduce affected render area |
| stable keys | Preserve list item identity |
| virtualization | Render only visible list rows |

---

# 3. Avoid Inline Objects and Functions When Needed

Problem:

```jsx
<Child style={{ color: "red" }} onClick={() => save()} />
```

This creates new references every render.

Possible fix:

```jsx
const style = useMemo(() => ({ color: "red" }), []);
const handleClick = useCallback(() => save(), [save]);
```

Only optimize this when it actually affects a memoized child or measured performance.

---

# 4. Avoid Unnecessary State Updates

Do not set state if the next value is the same.

```jsx
setValue((current) => {
  if (current === nextValue) return current;
  return nextValue;
});
```

---

# 5. Large Lists

Use virtualization for thousands of rows.

Libraries:

* `react-window`
* `react-virtualized`

---

# 6. Debugging

Use:

* React DevTools Profiler
* browser Performance panel
* console render markers only temporarily

Do not optimize randomly. Measure first.

---

# 7. Practical Performance Notes from `react_1.docx`

Performance has several layers:

| Layer | Examples |
| ----- | -------- |
| Bundler | code splitting, chunking, tree shaking |
| CDN/network | caching static assets close to users |
| Server | faster APIs, SSR/streaming where useful |
| Asset optimization | compressed images, responsive images, lazy loading |
| UI rendering | memoization, virtualization, smaller DOM, fewer unnecessary updates |
| Code cleanup | clear timers, remove event listeners, avoid long synchronous work |

Use skeleton/shimmer UI when it improves perceived loading, but still handle real loading, empty, and error states.
