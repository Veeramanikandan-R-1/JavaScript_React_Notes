# Revision Notes: HTML Performance and Resource Loading

* HTML controls which resources the browser discovers early.
* Critical resources should load early; non-critical resources should not block first render.
* Good loading strategy reduces blank screens, layout shift, and wasted bandwidth.
* Best practice: Use `type="module"` for modern application entry points.
* Best practice: Set image dimensions or CSS aspect ratios.
* Best practice: Use `loading="lazy"` only for non-critical images and iframes.
* Best practice: Preload only truly critical assets, such as a hero image or primary font.
* Avoid: Preloading too many resources and hurting prioritization.
* Avoid: Lazy-loading the hero image that should load immediately.
* Avoid: Blocking the parser with scripts that are not needed for initial content.
* Avoid: Ignoring font loading behavior and layout shift.

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

# Quick Practice

1. Explain one realistic production use case for HTML Performance and Resource Loading in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
