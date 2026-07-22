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

### 1. How do you choose breakpoints?

I choose breakpoints where the content or layout breaks, not because of a specific device name. I start fluid, test real content, zoom, and narrow widths, then add breakpoints only when the current layout stops working well.

### 2. When are container queries better than media queries?

Container queries are better for reusable components whose layout depends on their parent size, not the viewport. A card in a sidebar and the same card in a wide main area may need different layouts on the same screen width.

### 3. What does mobile-first CSS mean in practice?

Base styles support the simplest/narrowest layout first, then media queries enhance for more space. It usually reduces overrides and makes the default experience more resilient on constrained devices.

### 4. What responsive issues do you test beyond viewport width?

I test zoom, text scaling, long translated strings, touch versus mouse, reduced motion, portrait/landscape, slow networks, high-density images, and keyboard navigation. Responsive design is more than making the browser narrow.

### 5. How do responsive images fit into responsive design?

The layout can be responsive but still waste bandwidth if images are oversized. I check `srcset`, `sizes`, art direction with `picture` when needed, width/height or aspect ratio to prevent CLS, and whether the LCP image is prioritized correctly.

---

# Quick Practice

1. Explain one realistic production use case for Responsive Design, Media Queries, and Container Queries in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
