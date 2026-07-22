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

### 1. Why does Transition matter in Transitions, Animations, and Transforms?

Transition means Interpolates property changes. Use Transitions, Animations, and Transforms to solve the specific problem described in this note.

### 2. How does Animation affect the implementation?

Animation means Runs keyframes over time. Understand the browser, runtime, or React behavior behind Transitions, Animations, and Transforms before choosing an implementation.

### 3. What mistake should you avoid around skipping real edge cases?

Avoid skipping real edge cases. Prefer the simplest reliable approach and verify it with a small example.

### 4. How would you debug a production issue related to Transitions, Animations, and Transforms?

Reproduce the issue, inspect the relevant state or DOM, and reduce it to a small failing case. Check edge cases, browser behavior, and tests before changing the implementation.

### 5. What would you check in code review for Transitions, Animations, and Transforms?

Check correctness, edge cases, readability, accessibility, performance, and test coverage. Confirm the chosen approach matches the problem and does not add unnecessary complexity.

---

# Quick Practice

1. Explain one realistic production use case for Transitions, Animations, and Transforms in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
