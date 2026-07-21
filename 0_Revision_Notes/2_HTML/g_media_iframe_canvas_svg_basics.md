# Revision Notes: Media, iframe, Canvas, and SVG Basics

* HTML can embed images, audio, video, external pages, canvas drawings, and SVG graphics.
* Embedded media affects performance, accessibility, privacy, security, and layout.
* Use the simplest native element that matches the content.
* Best practice: Provide captions for videos and transcripts when content requires them.
* Best practice: Use `loading="lazy"` for below-the-fold iframes and images.
* Best practice: Add `title` to iframes.
* Best practice: Use SVG for icons and resolution-independent diagrams; use images for photographic content.
* Avoid: Autoplaying media with sound.
* Avoid: Embedding third-party iframes without sandboxing or performance consideration.
* Avoid: Using canvas for text-heavy UI that should be HTML.
* Avoid: Forgetting captions or transcripts for meaningful audio/video.

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

# Interview Questions & Answers

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

# Quick Practice

1. Explain Media, iframe, Canvas, and SVG Basics in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
