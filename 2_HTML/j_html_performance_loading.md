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

# 7.1 Script Loading Comparison

| Script | Parsing behavior | Execution timing | Common use |
| ------ | ---------------- | ---------------- | ---------- |
| normal classic script | blocks parser | immediately when reached | small critical inline behavior |
| `defer` | downloads while parsing | after HTML parsing, in order | app scripts and dependent scripts |
| `async` | downloads while parsing | as soon as ready, order not guaranteed | independent analytics/widgets |
| `type="module"` | deferred by default | after parsing, supports imports | modern app entry point |

```html
<script src="/legacy-critical.js"></script>
<script defer src="/app.js"></script>
<script async src="/analytics.js"></script>
<script type="module" src="/src/main.js"></script>
```

For React app bundles, prefer module scripts or deferred scripts so HTML parsing is not blocked unnecessarily.

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

### 1. What is the difference between `async`, `defer`, and `type="module"` scripts?

A normal script blocks parsing while it downloads and executes. `defer` downloads in parallel and executes after HTML parsing, in order. `async` downloads in parallel and executes as soon as ready, not guaranteed in order. `type="module"` supports imports/exports and is deferred by default.

### 2. When would you use `preload` and when would you use `preconnect`?

Use `preload` for a specific critical resource the browser may discover too late, such as a hero font or image. Use `preconnect` to warm up a connection to a third-party origin needed soon. Both can hurt performance if overused.

### 3. How do images affect LCP and CLS?

A large hero image is often the LCP element, so it needs the right format, dimensions, priority, and server/CDN behavior. Missing width/height or aspect ratio can cause CLS when the image loads. I avoid lazy-loading the likely LCP image.

### 4. What do you check when a page is blank for several seconds?

I inspect the network waterfall, main-thread blocking, render-blocking CSS/JS, bundle size, server response time, font loading, and whether hydration or client data fetching is delaying useful content. I compare dev and production builds because they behave differently.

### 5. How do you load third-party scripts responsibly?

I ask whether the script is needed, whether it can load after interaction or consent, whether it blocks rendering, and what failure looks like. I prefer async/defer, feature flags for risky scripts, and monitoring for performance impact.

---

# Hands-on Exercises

## Exercise 1

Annotate an HTML file with which resources are render-blocking, deferred, or lazy-loaded.

### Solution

Mark CSS as render-blocking, module scripts as deferred, critical images as eager, and below-fold assets as lazy.

---

# Senior Frontend Engineer Takeaway

For senior-level work, HTML Performance and Resource Loading is not only a syntax topic. You should be able to explain the mental model, choose the right pattern for a product requirement, identify common failure modes, and verify behavior through tooling, tests, and browser inspection.
