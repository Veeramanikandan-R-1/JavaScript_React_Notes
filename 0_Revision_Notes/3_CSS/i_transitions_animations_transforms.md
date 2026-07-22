# Revision Notes: Transitions, Animations, and Transforms

* Motion should clarify change, hierarchy, feedback, or spatial relationship.
* Transitions animate between states; keyframe animations define timelines.
* Transforms can often animate cheaply because they avoid full layout recalculation.
* Best practice: Keep UI motion short and purposeful.
* Best practice: Use opacity and transform for frequent animations.
* Best practice: Provide reduced-motion alternatives.
* Best practice: Avoid moving large areas during text entry or critical tasks.
* Avoid: Animating everything because it looks lively.
* Avoid: Ignoring `prefers-reduced-motion`.
* Avoid: Using slow easing for frequent controls.
* Avoid: Relying on motion as the only feedback.

---

# Cheat Sheet

| Concept | Practical meaning |
| ------- | ----------------- |
| Transition | Interpolates property changes. |
| Animation | Runs keyframes over time. |
| Transform | Moves, scales, rotates, or skews visual output. |
| Compositing | Combining layers into final pixels. |
| Reduced motion | User preference to minimize animation. |

---

# Interview Questions with Answers

### 1. When would you use a transition instead of a keyframe animation?

Use a transition when the UI moves between two states, such as hover, focus, expand, or selected. Use a keyframe animation when the motion has multiple steps, needs to run independently, repeats, or represents a timeline.

### 2. Which CSS properties are safest to animate in a production UI?

`transform` and `opacity` are usually the safest because browsers can often handle them on the compositor. Animating `width`, `height`, `top`, `left`, margins, or heavy shadows can trigger layout and paint, so measure before shipping.

### 3. How do you handle users who prefer reduced motion?

Use `@media (prefers-reduced-motion: reduce)` to remove or shorten nonessential motion. Keep the state change clear even without animation, especially for navigation, modals, drawers, and validation feedback.

### 4. Why is `transform: translate()` often better than changing `top` or `left`?

Changing `top` or `left` can force layout for positioned elements. `transform` changes the visual position without affecting surrounding layout, so it is often smoother and less likely to cause layout thrashing.

### 5. A hover animation feels janky on a mid-range phone. How would you debug it?

Record it in DevTools Performance, check for layout and paint cost, enable paint flashing, and inspect layer/compositing behavior. Also check whether JavaScript, large images, filters, box shadows, or layout-changing properties are competing with the animation.

---

# Quick Practice

1. Explain one realistic production use case for Transitions, Animations, and Transforms in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
