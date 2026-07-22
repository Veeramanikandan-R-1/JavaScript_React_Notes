# Revision Notes: Semantic HTML and Landmarks

* Semantic HTML means using elements according to their meaning, not appearance.
* Landmarks help users navigate page regions quickly.
* Native elements include built-in keyboard behavior, roles, states, and browser integrations.
* Best practice: Use native elements first and ARIA only when native semantics cannot express the design.
* Best practice: Give repeated landmarks accessible labels, such as `aria-label="Account"`.
* Best practice: Keep heading order meaningful even if CSS changes visual size.
* Best practice: Use `main` once per page.
* Avoid: Using `div role="button"` instead of `button`.
* Avoid: Using clickable `span` elements without keyboard support.
* Avoid: Creating many unlabeled `nav` elements that are hard to distinguish.
* Avoid: Using `section` without a heading when a plain `div` would be clearer.

---

# Cheat Sheet

| Concept | Practical meaning |
| ------- | ----------------- |
| `header` | Introductory content for a page or section. |
| `nav` | Major navigation links. |
| `main` | The primary unique content of a page. |
| `section` | A thematic group of content, usually with a heading. |
| `article` | A self-contained composition such as a post, card, or news item. |
| `aside` | Tangential or complementary content. |
| `button` | An action. |
| `a` | Navigation to another URL or page location. |

---

# Interview Questions with Answers

### 1. Why does `header` matter in Semantic HTML and Landmarks?

`header` means Introductory content for a page or section. Use Semantic HTML and Landmarks to solve the specific problem described in this note.

### 2. How does `nav` affect the implementation?

`nav` means Major navigation links. Understand the browser, runtime, or React behavior behind Semantic HTML and Landmarks before choosing an implementation.

### 3. What mistake should you avoid around skipping real edge cases?

Avoid skipping real edge cases. Prefer the simplest reliable approach and verify it with a small example.

### 4. How would you debug a production issue related to Semantic HTML and Landmarks?

Reproduce the issue, inspect the relevant state or DOM, and reduce it to a small failing case. Check edge cases, browser behavior, and tests before changing the implementation.

### 5. What would you check in code review for Semantic HTML and Landmarks?

Check correctness, edge cases, readability, accessibility, performance, and test coverage. Confirm the chosen approach matches the problem and does not add unnecessary complexity.

---

# Quick Practice

1. Explain one realistic production use case for Semantic HTML and Landmarks in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
