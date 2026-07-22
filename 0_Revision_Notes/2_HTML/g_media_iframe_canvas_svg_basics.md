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

# Interview Questions with Answers

### 1. Why does `picture` matter in Media, iframe, Canvas, and SVG Basics?

`picture` means Selects image sources for art direction or format fallback. Use Media, iframe, Canvas, and SVG Basics to solve the specific problem described in this note.

### 2. How does `video` affect the implementation?

`video` means Embeds playable video with controls, captions, and sources. Understand the browser, runtime, or React behavior behind Media, iframe, Canvas, and SVG Basics before choosing an implementation.

### 3. What mistake should you avoid around skipping real edge cases?

Avoid skipping real edge cases. Prefer the simplest reliable approach and verify it with a small example.

### 4. How would you debug a production issue related to Media, iframe, Canvas, and SVG Basics?

Reproduce the issue, inspect the relevant state or DOM, and reduce it to a small failing case. Check edge cases, browser behavior, and tests before changing the implementation.

### 5. What would you check in code review for Media, iframe, Canvas, and SVG Basics?

Check correctness, edge cases, readability, accessibility, performance, and test coverage. Confirm the chosen approach matches the problem and does not add unnecessary complexity.

---

# Quick Practice

1. Explain one realistic production use case for Media, iframe, Canvas, and SVG Basics in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
