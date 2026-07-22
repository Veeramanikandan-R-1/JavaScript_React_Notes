# Revision Notes: React Hook Form and Validation

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

### 1. Why do teams use React Hook Form for large forms?

It minimizes rerenders by leaning on uncontrolled inputs, has good field registration APIs, integrates with schema resolvers, and handles touched/dirty/error state without hand-rolling everything.

### 2. What does registering a field mean?

Registration connects the input to the form controller so value, validation rules, refs, and events can be tracked. Custom components need to forward the right props/ref or use a controller pattern.

### 3. When do you validate: on change, blur, or submit?

It depends on the field and user experience. Expensive or noisy validation often belongs on blur or submit; lightweight formatting may happen on change. Errors should not punish users while they are still typing.

### 4. How do schema resolvers fit into form validation?

A resolver adapts a schema result into form errors. It keeps validation rules centralized, but you still need UI-specific behavior for focus, messages, async checks, and server-side errors.

### 5. What React Hook Form issues do you flag in review?

Custom inputs not forwarding refs, validation mode that creates noisy UX, errors not connected accessibly, default values missing, server errors not mapped back to fields, and form state causing unnecessary rerenders.

---

# Quick Practice

1. Explain one realistic production use case for React Hook Form and Validation in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
