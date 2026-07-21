# Revision Notes: React Machine Coding Programs

## Must Practice

* Kanban/task manager with persistence, filters, modal, dark mode, and drag/drop.
* Drag-and-drop UI builder with left panel and canvas.
* Auto-increment counter using `useEffect` and `useRef`.
* Recursive menu rendering.
* Native multi-select.
* Custom checkbox multi-select with clear all.
* Paginated debounced user search with favorites.
* Prevent child rerender with `React.memo` and stable callbacks.
* Custom memo wrapper using `useRef` for learning.
* Sorted boxes with recursive nested boxes.

## Common Bugs

* wrong initial state type, such as string instead of array
* missing debounce delay
* page count using `Math.floor` instead of `Math.ceil`
* missing list keys
* favorites lost across pagination
* interval not cleaned up
* drag/drop coordinates not adjusted relative to canvas
* `Number(value) == NaN` used instead of `Number.isNaN(Number(value))`
* unstable callback dependencies causing memoized child rerenders
* mixed nested-array/plain-number state shape without explicit item type

## Senior Checklist

* State ownership is clear.
* Loading, error, empty, and success states exist.
* Inputs are labeled.
* Lists have stable keys.
* Effects clean up timers and requests.
* Expensive derived lists use `useMemo` when useful.
* Custom dropdowns include keyboard/focus/accessibility behavior.
* Complex machine-coding tasks define the data model before rendering UI.
