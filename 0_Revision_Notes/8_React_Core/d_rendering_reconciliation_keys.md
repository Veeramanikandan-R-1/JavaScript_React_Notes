# Revision Notes: Rendering, Reconciliation, and Keys

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

### 1. What does React reconciliation do?

React compares the previous and next element trees to decide what needs to change in the host environment. It uses component type and keys to preserve or replace component instances and their state.

### 2. Why are array indexes risky as keys?

Indexes break when items are inserted, removed, filtered, or reordered because React may preserve state for the wrong item. This shows up as wrong input values, broken animations, or selected state moving to another row.

### 3. When is using an index as a key acceptable?

It is acceptable for a static list that never reorders, filters, inserts, or deletes and has no item-local state. Even then, a stable id is usually clearer if one exists.

### 4. Why can changing a component's key reset its state?

A different key tells React it is a different component instance, so React unmounts the old one and mounts a new one. This can be useful for resetting forms, but accidental key changes cause lost state.

### 5. What rendering/key issues do you look for in review?

Unstable keys from indexes or random values, state stored in list rows without stable identity, expensive work during render, accidental remounts, and components relying on effects to fix data that could be derived during render.

---

# Quick Practice

1. Explain one realistic production use case for Rendering, Reconciliation, and Keys in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.

---

# Added from `react_1.docx`

* Flow: JSX -> React elements -> render work -> reconciliation -> commit DOM changes -> browser paint.
* Re-render means React calls components again; DOM update means the browser DOM actually changes.
* If root element type changes, React tears down the old subtree.
* If element type is the same, React updates changed attributes where possible.
* Virtual DOM is a React/library concept; Shadow DOM is a browser encapsulation feature.
* Fiber lets React split, pause, resume, and prioritize render work.
