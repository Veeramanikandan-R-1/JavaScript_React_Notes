# Revision Notes: Responsive Design, Media Queries, and Container Queries

* Responsive design means interfaces adapt to device size, container size, input method, and user preferences.
* Start with fluid layouts, then add breakpoints where content needs them.
* Container queries let components respond to their own space, not only the viewport.
* Best practice: Use content-driven breakpoints.
* Best practice: Prefer flexible constraints like `min()`, `max()`, and `clamp()`.
* Best practice: Test at awkward widths, zoom levels, and long translations.
* Best practice: Use responsive images for large media.
* Avoid: Designing desktop first and patching mobile at the end.
* Avoid: Using breakpoints based only on popular devices.
* Avoid: Hiding important content on mobile.
* Avoid: Ignoring coarse pointer and reduced motion preferences.

---

# Cheat Sheet

| Concept | Practical meaning |
| ------- | ----------------- |
| Fluid layout | Uses percentages, flexible tracks, and intrinsic sizing. |
| Breakpoint | A CSS condition where layout changes. |
| Media query | Applies styles based on viewport or device features. |
| Container query | Applies styles based on an ancestor container. |
| Responsive image | Serves appropriate image size or crop. |

---

# Interview Questions & Answers

### 1. How would you explain Responsive Design, Media Queries, and Container Queries in a real project?

I start from the layout requirement, decide whether normal flow, flexbox, grid, or positioning fits, then use the cascade deliberately.

### 2. What happens internally when Responsive Design, Media Queries, and Container Queries is involved?

The browser resolves cascade and computed styles, calculates boxes, lays them out, paints, and composites. A CSS bug usually lives in one of those steps.

### 3. How do you debug issues related to Responsive Design, Media Queries, and Container Queries?

I inspect the element, check computed styles, box model, active media/container queries, overwritten rules, overflow, and stacking contexts.

### 4. What is the biggest production risk with Responsive Design, Media Queries, and Container Queries?

The biggest risk is building something that works for the demo state but fails with real content, slow networks, accessibility needs, errors, or future changes.

### 5. What should a senior engineer look for in code review?

They should check the mental model, edge cases, accessibility, performance cost, naming, state ownership, test coverage, and whether the simpler native/platform option was considered.

---

# Quick Practice

1. Explain Responsive Design, Media Queries, and Container Queries in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
