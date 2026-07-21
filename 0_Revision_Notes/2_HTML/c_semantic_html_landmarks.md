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

# Interview Questions & Answers

### 1. How would you explain Semantic HTML and Landmarks in a real project?

It means choosing markup that describes meaning first: headings for hierarchy, landmarks for page regions, labels for controls, and native elements for behavior.

### 2. What happens internally when Semantic HTML and Landmarks is involved?

The browser parses markup into the DOM and accessibility tree, so incorrect HTML can create bugs even when the screen looks visually correct.

### 3. How do you debug issues related to Semantic HTML and Landmarks?

I check DOM order, headings, labels, alt text, link/button purpose, form submission, keyboard navigation, and whether the page still works with limited JavaScript.

### 4. What is the biggest production risk with Semantic HTML and Landmarks?

The biggest risk is building something that works for the demo state but fails with real content, slow networks, accessibility needs, errors, or future changes.

### 5. What should a senior engineer look for in code review?

They should check the mental model, edge cases, accessibility, performance cost, naming, state ownership, test coverage, and whether the simpler native/platform option was considered.

---

# Quick Practice

1. Explain Semantic HTML and Landmarks in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
