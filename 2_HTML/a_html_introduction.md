# HTML Introduction (Senior Frontend Engineer Perspective)

Before going deeper into frameworks or libraries, understand this topic as part of real frontend engineering: HTML as semantic document structure rather than visual decoration.

---

# 1. Fundamentals

* HTML stands for HyperText Markup Language.
* HTML describes the structure and meaning of content on a web page.
* Browsers use HTML to build the DOM, assistive technologies use it to understand purpose, and search engines use it to interpret content.
* HTML is forgiving, but professional HTML should be intentional, valid, accessible, and maintainable.

---

# 2. Core Concepts

| Concept | Practical meaning |
| ------- | ----------------- |
| Element | A meaningful unit such as `p`, `button`, `main`, `img`, or `form`. |
| Attribute | Extra information attached to an element, such as `href`, `alt`, `type`, or `aria-label`. |
| Nesting | The parent-child structure that creates the document tree. |
| Semantics | The purpose conveyed by choosing the correct element. |
| DOM | The browser's live object model created from parsed HTML. |

---

# 3. Internal Working

* The browser tokenizes HTML, builds nodes, handles invalid nesting with parser rules, and exposes the result as the DOM.
* Default browser styles make headings bold, lists indented, links blue, and form controls interactive even before CSS.
* Semantic elements expose built-in roles and behavior to accessibility APIs.

---

# 4. Common Mistakes

* Using `div` and `span` for everything.
* Using links for actions or buttons for navigation.
* Leaving images without useful `alt` text.
* Skipping heading levels for visual size instead of document structure.

---

# 5. Best Practices

* Start with meaningful HTML before adding CSS or JavaScript.
* Use one `h1` that describes the page and follow a logical heading hierarchy.
* Use native controls before custom controls.
* Validate important pages and test keyboard navigation early.

---

# 6. Code Example

```html
<article>
  <header>
    <h1>Order Confirmation</h1>
    <p>Your order was placed successfully.</p>
  </header>

  <section aria-labelledby="summary-title">
    <h2 id="summary-title">Summary</h2>
    <p>3 items will arrive tomorrow.</p>
  </section>

  <a href="/orders/123">View order details</a>
</article>
```

---

# 7. Real-world Scenarios

* A screen reader user navigates headings to understand the page quickly.
* A browser submits a form even when JavaScript fails.
* Search engines infer page structure from headings, links, and metadata.

---

# 8. Senior Deep Dive

## When to Use

* Use semantic elements whenever the element's built-in meaning matches the job.
* Use ARIA only to fill semantic gaps, not to overwrite good native HTML.
* Use progressive enhancement for flows that should remain usable under partial loading or JavaScript failure.

## Debug Checklist

* Inspect the DOM tree, not only the visual page.
* Check the accessibility tree, labels, alt text, landmark names, and heading order.
* Submit forms manually and confirm `name` values, methods, validation, and server payloads.

## Code Review Checklist

* Are links and buttons used according to purpose?
* Can a keyboard user complete the flow?
* Does the document have useful title, language, metadata, headings, and landmarks?


---

# Revision Notes

* HTML Introduction matters because it affects real users, future maintainers, and production behavior.
* Learn the mental model before memorizing syntax.
* Use browser DevTools, tests, and small examples to verify behavior.
* HTML stands for HyperText Markup Language.
* HTML describes the structure and meaning of content on a web page.
* Browsers use HTML to build the DOM, assistive technologies use it to understand purpose, and search engines use it to interpret content.
* HTML is forgiving, but professional HTML should be intentional, valid, accessible, and maintainable.

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

# Hands-on Exercises

## Exercise 1

Create a semantic HTML article with title, author, publication date, sections, and related links.

### Solution

Use `article`, `header`, `time`, `section`, `h2`, `p`, and `nav` or `aside` for related links.

---

# Senior Frontend Engineer Takeaway

For senior-level work, HTML Introduction is not only a syntax topic. You should be able to explain the mental model, choose the right pattern for a product requirement, identify common failure modes, and verify behavior through tooling, tests, and browser inspection.
