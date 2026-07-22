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

# Interview Questions with Answers

### 1. Why do interviewers care about semantic HTML when CSS can make anything look right?

Because HTML is not only visual structure. The element choice affects keyboard behavior, form behavior, accessibility APIs, browser defaults, SEO, and maintainability. A `button` already supports focus and keyboard activation; a clickable `div` has to rebuild all of that manually and is easy to get wrong.

### 2. What is the practical difference between a link and a button?

A link navigates to a URL or page location. A button performs an action on the current page, such as submit, save, open, close, or toggle. If an interviewer gives me a clickable UI, I decide by user intent first, not by how the control looks.

### 3. What happens if the browser receives invalid nested HTML?

The HTML parser is forgiving and will repair the DOM using parser rules, but the final DOM may not match what the developer expected. That can break CSS selectors, event handling, accessibility relationships, and hydration in React apps.

### 4. How do you decide good `alt` text for an image?

If the image conveys information, the `alt` should describe the information in context. If the image is decorative, use empty `alt=""` so assistive tech can skip it. I do not repeat nearby text, and for complex charts I provide a nearby text summary or table.

### 5. What do you check before approving basic HTML in a React component?

I check heading order, labels, form names, link/button purpose, `alt` text, valid nesting, language/title metadata when page-level, and whether the component still works with keyboard and real content. JSX still becomes HTML, so React does not remove these responsibilities.

---

# Quick Practice

1. Explain one realistic production use case for HTML Introduction in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
