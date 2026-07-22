# Revision Notes: React Router, Routes, and Layouts

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

### 1. How do you decide a React Router route hierarchy?

Match route boundaries to product sections, shared layouts, data ownership, and error/loading boundaries. Nested routes are useful when parent UI stays mounted while child content changes.

### 2. What problem does a layout route solve?

It keeps shared UI such as navigation, sidebars, tabs, and route-level providers in one place while child routes render through an outlet. This avoids duplicating shell layout across pages.

### 3. How do you handle a not-found route?

Add a route-level 404 experience that preserves navigation, explains the missing page, and gives a recovery path. In data routers, distinguish route-not-found from data-not-found where the URL exists but the resource does not.

### 4. What route bugs do you commonly see?

State resets because layout boundaries are wrong, duplicate data fetching across parent/child routes, relative links pointing to unexpected paths, missing pending states, and redirects that lose the intended destination.

### 5. What do you check in a routing pull request?

Route hierarchy, layout ownership, loading/error boundaries, accessible page titles/headings, redirect behavior, deep-link support, and whether URL changes preserve expected state.

---

# Quick Practice

1. Explain one realistic production use case for React Router, Routes, and Layouts in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
