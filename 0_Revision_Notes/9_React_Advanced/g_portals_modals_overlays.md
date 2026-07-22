# Revision Notes: Portals, Modals, and Overlays

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

### 1. Why are portals useful for modals and overlays?

Portals let React render overlay content outside the parent DOM hierarchy while keeping it in the React tree. This helps with stacking, clipping, and app shell layout without losing React context.

### 2. What accessibility behavior does a modal need?

It needs an accessible name, focus moved into it on open, focus contained while open, Escape/close behavior where appropriate, background content hidden from interaction, and focus restored to the opener on close.

### 3. What overlay bugs happen because of stacking contexts?

Parents with transforms, opacity, filters, isolation, or positioned z-index can create stacking contexts that trap overlays behind other UI. Portals and a z-index system help avoid random one-off fixes.

### 4. How should body scroll behave when a modal is open?

Usually background scroll should be locked while preserving scroll position and avoiding layout shift from scrollbar changes. Mobile browsers need special care because fixed positioning and viewport units can behave differently.

### 5. What modal/overlay issues do you flag in review?

Missing focus management, click-outside bugs, Escape behavior conflicts, z-index magic numbers, body scroll leaks, no cleanup, inaccessible names, and overlays that cannot handle nested or concurrent dialogs.

---

# Quick Practice

1. Explain one realistic production use case for Portals, Modals, and Overlays in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
