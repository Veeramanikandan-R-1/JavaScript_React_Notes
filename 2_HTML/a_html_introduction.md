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

# Hands-on Exercises

## Exercise 1

Create a semantic HTML article with title, author, publication date, sections, and related links.

### Solution

Use `article`, `header`, `time`, `section`, `h2`, `p`, and `nav` or `aside` for related links.

---

# Senior Frontend Engineer Takeaway

For senior-level work, HTML Introduction is not only a syntax topic. You should be able to explain the mental model, choose the right pattern for a product requirement, identify common failure modes, and verify behavior through tooling, tests, and browser inspection.
