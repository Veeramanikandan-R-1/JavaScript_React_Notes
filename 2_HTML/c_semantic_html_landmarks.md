# Semantic HTML and Landmarks (Senior Frontend Engineer Perspective)

Before going deeper into frameworks or libraries, understand this topic as part of real frontend engineering: choosing elements that express page structure and interactive purpose.

---

# 1. Fundamentals

* Semantic HTML means using elements according to their meaning, not appearance.
* Landmarks help users navigate page regions quickly.
* Native elements include built-in keyboard behavior, roles, states, and browser integrations.

---

# 2. Core Concepts

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

# 3. Internal Working

* Browsers map semantic elements to accessibility roles where appropriate.
* A semantic button participates in keyboard activation, focus order, disabled state, and form behavior.
* Landmarks are exposed to assistive technologies so users can jump between page regions.

---

# 4. Common Mistakes

* Using `div role="button"` instead of `button`.
* Using clickable `span` elements without keyboard support.
* Creating many unlabeled `nav` elements that are hard to distinguish.
* Using `section` without a heading when a plain `div` would be clearer.

---

# 5. Best Practices

* Use native elements first and ARIA only when native semantics cannot express the design.
* Give repeated landmarks accessible labels, such as `aria-label="Account"`.
* Keep heading order meaningful even if CSS changes visual size.
* Use `main` once per page.

---

# 6. Code Example

```html
<header>
  <a href="/">Shop</a>
  <nav aria-label="Primary">
    <a href="/products">Products</a>
    <a href="/orders">Orders</a>
  </nav>
</header>

<main>
  <h1>Orders</h1>
  <section aria-labelledby="open-orders">
    <h2 id="open-orders">Open orders</h2>
  </section>
</main>
```

---

# 7. Real-world Scenarios

* A keyboard user tabs through a page and reaches every interactive control in a logical order.
* A screen reader user jumps directly to `main` instead of hearing navigation repeatedly.
* A custom styled button still behaves correctly because it is a real `button`.

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

* Semantic HTML and Landmarks matters because it affects real users, future maintainers, and production behavior.
* Learn the mental model before memorizing syntax.
* Use browser DevTools, tests, and small examples to verify behavior.
* Semantic HTML means using elements according to their meaning, not appearance.
* Landmarks help users navigate page regions quickly.
* Native elements include built-in keyboard behavior, roles, states, and browser integrations.

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

# Hands-on Exercises

## Exercise 1

Convert a `div`-heavy layout into semantic HTML.

### Solution

Replace layout-only wrappers carefully with `header`, `nav`, `main`, `section`, `article`, `aside`, `footer`, `button`, and `a` where they match purpose.

---

# Senior Frontend Engineer Takeaway

For senior-level work, Semantic HTML and Landmarks is not only a syntax topic. You should be able to explain the mental model, choose the right pattern for a product requirement, identify common failure modes, and verify behavior through tooling, tests, and browser inspection.
