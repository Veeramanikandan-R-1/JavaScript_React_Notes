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

# Interview Questions & Answers

### 1. How would you explain Transitions, Animations, and Transforms in a real project?

I start from the layout requirement, decide whether normal flow, flexbox, grid, or positioning fits, then use the cascade deliberately.

### 2. What happens internally when Transitions, Animations, and Transforms is involved?

The browser resolves cascade and computed styles, calculates boxes, lays them out, paints, and composites. A CSS bug usually lives in one of those steps.

### 3. How do you debug issues related to Transitions, Animations, and Transforms?

I inspect the element, check computed styles, box model, active media/container queries, overwritten rules, overflow, and stacking contexts.

### 4. What is the biggest production risk with Transitions, Animations, and Transforms?

The biggest risk is building something that works for the demo state but fails with real content, slow networks, accessibility needs, errors, or future changes.

### 5. What should a senior engineer look for in code review?

They should check the mental model, edge cases, accessibility, performance cost, naming, state ownership, test coverage, and whether the simpler native/platform option was considered.

---

# Quick Practice

1. Explain Transitions, Animations, and Transforms in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
