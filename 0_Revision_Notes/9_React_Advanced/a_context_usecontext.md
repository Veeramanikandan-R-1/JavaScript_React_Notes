# Revision Notes: Context and useContext

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

### 1. When is React Context a good choice?

Context is good for values that many descendants need within a boundary, such as theme, locale, auth session, feature flags, or current workspace. It is not automatically a replacement for all state management.

### 2. Why can Context cause unnecessary re-renders?

Consumers re-render when the provider value changes identity. Passing a newly created object or function every render can update many descendants. Split contexts, memoize values carefully, or move frequently changing state closer to where it is used.

### 3. When should you not use Context?

Avoid Context for highly local state, frequently changing values used by a small subtree, server-state caching, or anything that needs selectors/subscriptions. A store or server-state library may fit better.

### 4. How do you design a provider API?

Keep provider responsibilities clear, expose stable values and actions, handle missing-provider errors intentionally, and avoid mixing unrelated concerns like theme, auth, and data cache in one context.

### 5. What Context issues do you flag in review?

Huge provider values, providers wrapped around the whole app without need, frequently changing values, missing memoization where it matters, and Context used to avoid passing two simple props.

---

# Quick Practice

1. Explain one realistic production use case for Context and useContext in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.

---

# Added from `react_concepts_with_code.docx`

* Theme context pattern: create context, wrap children with provider, consume with `useContext`.
* Memoize object provider values with `useMemo` when consumers rerender too often.
* If a consumer is outside the provider, it receives the context default value.
