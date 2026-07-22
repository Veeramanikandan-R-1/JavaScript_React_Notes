# Revision Notes: Text, Links, Images, and Lists

* Text elements give meaning and hierarchy to content.
* Links connect documents and resources.
* Images need dimensions, responsive behavior, and alternative text.
* Lists should be used for actual collections of related items.
* Best practice: Write link text that names the destination or action.
* Best practice: Use empty `alt=""` for decorative images and meaningful alt text for informative images.
* Best practice: Provide `width` and `height` on images when possible.
* Best practice: Use `rel="noopener noreferrer"` with external new-tab links.
* Avoid: Using headings for font size instead of structure.
* Avoid: Leaving decorative images with descriptive alt text that adds noise.
* Avoid: Using `target="_blank"` without considering user context and security.
* Avoid: Building menus with random `div`s instead of lists or navigation links.

---

# Cheat Sheet

| Concept | Practical meaning |
| ------- | ----------------- |
| Headings | Create document outline and scanning structure. |
| Paragraphs | Represent blocks of prose. |
| Emphasis | `em` and `strong` express meaning, not just italics or bold style. |
| Links | `href` makes an anchor navigable and keyboard-focusable. |
| Images | `src`, `alt`, `width`, `height`, `loading`, and `srcset` control meaning and loading. |
| Lists | `ul`, `ol`, and `dl` communicate grouped content. |

---

# Interview Questions with Answers

### 1. Why does Conditional branch matter in Text, Links, Images, and Lists?

Conditional branch means Choosing which UI to render from current state. In interviews, connect it to Text, Links, Images, and Lists by explaining the concrete UI behavior, failure state, and tradeoff.

### 2. How does Stable key affect the implementation?

Stable key means A persistent identity for each item in a changing list. Implementation depends on ownership, lifecycle, and edge cases, not only naming the API.

### 3. What mistake should you avoid around skipping real edge cases?

Avoid skipping real edge cases. Prefer the simplest reliable approach and verify it with a small example.

### 4. How would you debug a production issue related to Text, Links, Images, and Lists?

Reproduce the issue, inspect the relevant state or DOM, and reduce it to a small failing case. Check edge cases, browser behavior, and tests before changing the implementation.

### 5. What would you check in code review for Text, Links, Images, and Lists?

Check correctness, edge cases, readability, accessibility, performance, and test coverage. Confirm the chosen approach matches the problem and does not add unnecessary complexity.

---

# Quick Practice

1. Explain one realistic production use case for Text, Links, Images, and Lists in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
