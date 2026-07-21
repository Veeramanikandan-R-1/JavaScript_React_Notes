# Revision Notes: HTML Introduction

* HTML stands for HyperText Markup Language.
* HTML describes the structure and meaning of content on a web page.
* Browsers use HTML to build the DOM, assistive technologies use it to understand purpose, and search engines use it to interpret content.
* HTML is forgiving, but professional HTML should be intentional, valid, accessible, and maintainable.
* Best practice: Start with meaningful HTML before adding CSS or JavaScript.
* Best practice: Use one `h1` that describes the page and follow a logical heading hierarchy.
* Best practice: Use native controls before custom controls.
* Best practice: Validate important pages and test keyboard navigation early.
* Avoid: Using `div` and `span` for everything.
* Avoid: Using links for actions or buttons for navigation.
* Avoid: Leaving images without useful `alt` text.
* Avoid: Skipping heading levels for visual size instead of document structure.

---

# Cheat Sheet

| Concept | Practical meaning |
| ------- | ----------------- |
| Element | A meaningful unit such as `p`, `button`, `main`, `img`, or `form`. |
| Attribute | Extra information attached to an element, such as `href`, `alt`, `type`, or `aria-label`. |
| Nesting | The parent-child structure that creates the document tree. |
| Semantics | The purpose conveyed by choosing the correct element. |
| DOM | The browser's live object model created from parsed HTML. |

---

# Interview Questions & Answers

### 1. How would you explain HTML Introduction in a real project?

It means choosing markup that describes meaning first: headings for hierarchy, landmarks for page regions, labels for controls, and native elements for behavior.

### 2. What happens internally when HTML Introduction is involved?

The browser parses markup into the DOM and accessibility tree, so incorrect HTML can create bugs even when the screen looks visually correct.

### 3. How do you debug issues related to HTML Introduction?

I check DOM order, headings, labels, alt text, link/button purpose, form submission, keyboard navigation, and whether the page still works with limited JavaScript.

### 4. What is the biggest production risk with HTML Introduction?

The biggest risk is building something that works for the demo state but fails with real content, slow networks, accessibility needs, errors, or future changes.

### 5. What should a senior engineer look for in code review?

They should check the mental model, edge cases, accessibility, performance cost, naming, state ownership, test coverage, and whether the simpler native/platform option was considered.

---

# Quick Practice

1. Explain HTML Introduction in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
