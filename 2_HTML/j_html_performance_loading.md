# HTML Performance and Resource Loading (Senior Frontend Engineer Perspective)

Before going deeper into frameworks or libraries, understand this topic as part of real frontend engineering: how markup choices influence page speed and rendering.

---

# 1. Fundamentals

* HTML controls which resources the browser discovers early.
* Critical resources should load early; non-critical resources should not block first render.
* Good loading strategy reduces blank screens, layout shift, and wasted bandwidth.

---

# 2. Core Concepts

| Concept | Practical meaning |
| ------- | ----------------- |
| Critical CSS | Styles needed for above-the-fold content. |
| `defer` | Loads script during parsing and executes after document parsing. |
| `async` | Loads script independently and executes as soon as available. |
| Module script | Deferred by default and supports ES modules. |
| Preload | Hints that a resource is important for the current page. |
| Lazy loading | Defers below-the-fold images and iframes. |

---

# 3. Internal Working

* The preload scanner discovers resources while the main parser builds the document.
* CSS blocks render because layout depends on styles.
* Classic synchronous scripts can block parsing and delay content discovery.
* Images with missing dimensions can cause cumulative layout shift.

---

# 4. Common Mistakes

* Preloading too many resources and hurting prioritization.
* Lazy-loading the hero image that should load immediately.
* Blocking the parser with scripts that are not needed for initial content.
* Ignoring font loading behavior and layout shift.

---

# 5. Best Practices

* Use `type="module"` for modern application entry points.
* Set image dimensions or CSS aspect ratios.
* Use `loading="lazy"` only for non-critical images and iframes.
* Preload only truly critical assets, such as a hero image or primary font.

---

# 6. Code Example

```html
<link rel="preload" href="/fonts/inter.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="/styles.css">
<script type="module" src="/src/main.js"></script>

<img
  src="/images/hero.jpg"
  alt="Team dashboard preview"
  width="1440"
  height="900"
  fetchpriority="high">

<img
  src="/images/detail.jpg"
  alt="Detailed analytics chart"
  width="800"
  height="500"
  loading="lazy">
```

---

# 7. Real-world Scenarios

* A landing page improves LCP by prioritizing the hero image.
* A dashboard avoids layout shift by reserving image and chart space.
* A third-party analytics script is moved away from the critical path.

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

* HTML Performance and Resource Loading matters because it affects real users, future maintainers, and production behavior.
* Learn the mental model before memorizing syntax.
* Use browser DevTools, tests, and small examples to verify behavior.
* HTML controls which resources the browser discovers early.
* Critical resources should load early; non-critical resources should not block first render.
* Good loading strategy reduces blank screens, layout shift, and wasted bandwidth.

---

# Cheat Sheet

| Concept | Practical meaning |
| ------- | ----------------- |
| Critical CSS | Styles needed for above-the-fold content. |
| `defer` | Loads script during parsing and executes after document parsing. |
| `async` | Loads script independently and executes as soon as available. |
| Module script | Deferred by default and supports ES modules. |
| Preload | Hints that a resource is important for the current page. |
| Lazy loading | Defers below-the-fold images and iframes. |

---

# Interview Questions with Answers

### 1. How would you explain HTML Performance and Resource Loading in a real project?

It means choosing markup that describes meaning first: headings for hierarchy, landmarks for page regions, labels for controls, and native elements for behavior.

### 2. What happens internally when HTML Performance and Resource Loading is involved?

The browser parses markup into the DOM and accessibility tree, so incorrect HTML can create bugs even when the screen looks visually correct.

### 3. How do you debug issues related to HTML Performance and Resource Loading?

I check DOM order, headings, labels, alt text, link/button purpose, form submission, keyboard navigation, and whether the page still works with limited JavaScript.

### 4. What is the biggest production risk with HTML Performance and Resource Loading?

The biggest risk is building something that works for the demo state but fails with real content, slow networks, accessibility needs, errors, or future changes.

### 5. What should a senior engineer look for in code review?

They should check the mental model, edge cases, accessibility, performance cost, naming, state ownership, test coverage, and whether the simpler native/platform option was considered.

---

# Hands-on Exercises

## Exercise 1

Annotate an HTML file with which resources are render-blocking, deferred, or lazy-loaded.

### Solution

Mark CSS as render-blocking, module scripts as deferred, critical images as eager, and below-fold assets as lazy.

---

# Senior Frontend Engineer Takeaway

For senior-level work, HTML Performance and Resource Loading is not only a syntax topic. You should be able to explain the mental model, choose the right pattern for a product requirement, identify common failure modes, and verify behavior through tooling, tests, and browser inspection.
