# Media, iframe, Canvas, and SVG Basics (Senior Frontend Engineer Perspective)

Before going deeper into frameworks or libraries, understand this topic as part of real frontend engineering: embedding visual and external content responsibly.

---

# 1. Fundamentals

* HTML can embed images, audio, video, external pages, canvas drawings, and SVG graphics.
* Embedded media affects performance, accessibility, privacy, security, and layout.
* Use the simplest native element that matches the content.

---

# 2. Core Concepts

| Concept | Practical meaning |
| ------- | ----------------- |
| `picture` | Selects image sources for art direction or format fallback. |
| `video` | Embeds playable video with controls, captions, and sources. |
| `audio` | Embeds playable sound. |
| `iframe` | Embeds another browsing context. |
| `canvas` | Bitmap drawing surface controlled by JavaScript. |
| SVG | Vector graphics that can be inline, linked, styled, and accessible. |

---

# 3. Internal Working

* Media resources can be large and should be lazy-loaded or deferred when below the fold.
* Iframes isolate another page but still carry security and performance concerns.
* Canvas pixels are not semantic; accessible alternatives must be provided when content matters.

---

# 4. Common Mistakes

* Autoplaying media with sound.
* Embedding third-party iframes without sandboxing or performance consideration.
* Using canvas for text-heavy UI that should be HTML.
* Forgetting captions or transcripts for meaningful audio/video.

---

# 5. Best Practices

* Provide captions for videos and transcripts when content requires them.
* Use `loading="lazy"` for below-the-fold iframes and images.
* Add `title` to iframes.
* Use SVG for icons and resolution-independent diagrams; use images for photographic content.

---

# 6. Code Example

```html
<video controls width="640" poster="/media/intro-poster.jpg">
  <source src="/media/intro.webm" type="video/webm">
  <source src="/media/intro.mp4" type="video/mp4">
  <track kind="captions" src="/media/intro-en.vtt" srclang="en" label="English">
</video>

<iframe
  src="https://example.com/report"
  title="Quarterly report preview"
  loading="lazy"
  sandbox="allow-scripts allow-same-origin">
</iframe>
```

---

# 7. Real-world Scenarios

* A product page uses `picture` to serve WebP/AVIF with fallback.
* A tutorial page includes captions so video content remains accessible.
* An embedded dashboard uses iframe sandboxing to reduce risk.

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

* Media, iframe, Canvas, and SVG Basics matters because it affects real users, future maintainers, and production behavior.
* Learn the mental model before memorizing syntax.
* Use browser DevTools, tests, and small examples to verify behavior.
* HTML can embed images, audio, video, external pages, canvas drawings, and SVG graphics.
* Embedded media affects performance, accessibility, privacy, security, and layout.
* Use the simplest native element that matches the content.

---

# Cheat Sheet

| Concept | Practical meaning |
| ------- | ----------------- |
| `picture` | Selects image sources for art direction or format fallback. |
| `video` | Embeds playable video with controls, captions, and sources. |
| `audio` | Embeds playable sound. |
| `iframe` | Embeds another browsing context. |
| `canvas` | Bitmap drawing surface controlled by JavaScript. |
| SVG | Vector graphics that can be inline, linked, styled, and accessible. |

---

# Interview Questions with Answers

### 1. How would you explain Media, iframe, Canvas, and SVG Basics in a real project?

It means choosing markup that describes meaning first: headings for hierarchy, landmarks for page regions, labels for controls, and native elements for behavior.

### 2. What happens internally when Media, iframe, Canvas, and SVG Basics is involved?

The browser parses markup into the DOM and accessibility tree, so incorrect HTML can create bugs even when the screen looks visually correct.

### 3. How do you debug issues related to Media, iframe, Canvas, and SVG Basics?

I check DOM order, headings, labels, alt text, link/button purpose, form submission, keyboard navigation, and whether the page still works with limited JavaScript.

### 4. What is the biggest production risk with Media, iframe, Canvas, and SVG Basics?

The biggest risk is building something that works for the demo state but fails with real content, slow networks, accessibility needs, errors, or future changes.

### 5. What should a senior engineer look for in code review?

They should check the mental model, edge cases, accessibility, performance cost, naming, state ownership, test coverage, and whether the simpler native/platform option was considered.

---

# Hands-on Exercises

## Exercise 1

Embed a responsive video with controls and captions.

### Solution

Use `video`, multiple `source` elements, a `track` for captions, and CSS to constrain width.

---

# Senior Frontend Engineer Takeaway

For senior-level work, Media, iframe, Canvas, and SVG Basics is not only a syntax topic. You should be able to explain the mental model, choose the right pattern for a product requirement, identify common failure modes, and verify behavior through tooling, tests, and browser inspection.
