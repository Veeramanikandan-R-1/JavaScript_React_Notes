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

### 1. When would you use `section`, `article`, `aside`, and a plain `div`?

Use `section` for a thematic group that usually has a heading, `article` for self-contained content that can stand alone, `aside` for complementary content, and `div` when you only need a styling or layout wrapper. A senior answer should not force semantic tags where they do not add meaning.

### 2. A page has three navigation areas. How do screen-reader users distinguish them?

Repeated landmarks need accessible names, such as `<nav aria-label="Primary">`, `<nav aria-label="Breadcrumb">`, and `<nav aria-label="Account">`. Otherwise assistive tech may announce several identical navigation landmarks.

### 3. Is `div role="button"` equivalent to a real `button`?

No. ARIA can expose a role, but it does not automatically give keyboard behavior, disabled behavior, form behavior, focus styling, or expected browser interactions. I use a real `button` unless there is a strong reason not to.

### 4. How many `main` elements should a page have?

One visible `main` landmark per page is the normal rule. It identifies the primary unique content. Multiple visible `main` landmarks make landmark navigation confusing, especially for screen-reader users.

### 5. A custom tab component uses clickable `span`s. What do you ask in review?

I ask whether native buttons can be used. If it must be custom, I check roles, `aria-selected`, roving tab index or focus strategy, keyboard arrows, focus visibility, and whether the DOM order matches the visual order.

---

# Quick Practice

1. Explain one realistic production use case for Semantic HTML and Landmarks in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
