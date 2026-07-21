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

# Interview Questions & Answers

### 1. How would you explain Text, Links, Images, and Lists in a real project?

It means choosing markup that describes meaning first: headings for hierarchy, landmarks for page regions, labels for controls, and native elements for behavior.

### 2. What happens internally when Text, Links, Images, and Lists is involved?

The browser parses markup into the DOM and accessibility tree, so incorrect HTML can create bugs even when the screen looks visually correct.

### 3. How do you debug issues related to Text, Links, Images, and Lists?

I check DOM order, headings, labels, alt text, link/button purpose, form submission, keyboard navigation, and whether the page still works with limited JavaScript.

### 4. What is the biggest production risk with Text, Links, Images, and Lists?

The biggest risk is building something that works for the demo state but fails with real content, slow networks, accessibility needs, errors, or future changes.

### 5. What should a senior engineer look for in code review?

They should check the mental model, edge cases, accessibility, performance cost, naming, state ownership, test coverage, and whether the simpler native/platform option was considered.

---

# Quick Practice

1. Explain Text, Links, Images, and Lists in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
