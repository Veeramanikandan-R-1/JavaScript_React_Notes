# Revision Notes: JSX, Components, and Props

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

### 1. What is JSX actually compiled into?

JSX is syntax that tooling transforms into JavaScript calls that describe React elements. It is not HTML, which is why attributes, expressions, casing, and component names follow JavaScript/React rules.

### 2. What makes a good component prop API?

It is explicit, minimal, hard to misuse, and shaped around product behavior rather than internal implementation. Good props make states and variants clear without forcing every parent to know component internals.

### 3. When is prop drilling acceptable?

It is acceptable for a few levels when the data is local to that branch and the flow is clear. Context or a store is better when many distant components need the same value or prop chains are hiding ownership.

### 4. Why should components avoid mutating props?

Props are owned by the parent. Mutating them creates hidden side effects, breaks React's data flow, and can cause skipped renders or confusing state changes. Components should request changes through callbacks.

### 5. What prop/component issues do you look for in review?

Boolean prop explosions, unclear children usage, unstable callback contracts, missing accessibility props, duplicated component variants, and props that expose internal styling details instead of supported behavior.

---

# Quick Practice

1. Explain one realistic production use case for JSX, Components, and Props in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.

---

# Added from `react_1.docx`

* `children` is JSX placed between component tags and supports layout/composition.
* Type `children` as `React.ReactNode` in TypeScript.
* Render props pass a function so the consumer controls rendering with data from the component.
* JSX uses `className` instead of `class`.
* Fragments have no DOM node, so they cannot have `className`, `id`, or styles.
* Use `prop-types` in JS projects or TypeScript for stronger static checks.
* React is a UI library, not a full framework; routing, data fetching, and state choices are separate.
