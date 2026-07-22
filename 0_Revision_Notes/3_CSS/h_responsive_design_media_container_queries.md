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

# Interview Questions with Answers

### 1. Why does Fluid layout matter in Responsive Design, Media Queries, and Container Queries?

Fluid layout means Uses percentages, flexible tracks, and intrinsic sizing. Use Responsive Design, Media Queries, and Container Queries to solve the specific problem described in this note.

### 2. How does Breakpoint affect the implementation?

Breakpoint means A CSS condition where layout changes. Understand the browser, runtime, or React behavior behind Responsive Design, Media Queries, and Container Queries before choosing an implementation.

### 3. What mistake should you avoid around skipping real edge cases?

Avoid skipping real edge cases. Prefer the simplest reliable approach and verify it with a small example.

### 4. How would you debug a production issue related to Responsive Design, Media Queries, and Container Queries?

Reproduce the issue, inspect the relevant state or DOM, and reduce it to a small failing case. Check edge cases, browser behavior, and tests before changing the implementation.

### 5. What would you check in code review for Responsive Design, Media Queries, and Container Queries?

Check correctness, edge cases, readability, accessibility, performance, and test coverage. Confirm the chosen approach matches the problem and does not add unnecessary complexity.

---

# Quick Practice

1. Explain one realistic production use case for Responsive Design, Media Queries, and Container Queries in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
