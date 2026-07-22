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

### 1. When would you use `picture` instead of just `img srcset`?

Use `srcset`/`sizes` when the same image is served at different resolutions. Use `picture` when the actual source should change by format or art direction, such as WebP vs JPEG, or a cropped mobile image versus a wide desktop image.

### 2. What security concerns do you check before adding an iframe?

I check the source, sandbox requirements, allowed permissions, referrer policy, `allow` attributes, loading behavior, and whether the iframe needs a useful `title`. Untrusted iframes should be tightly sandboxed.

### 3. Why can canvas be an accessibility problem?

Canvas draws pixels; it does not naturally expose semantic structure to assistive tech. If the canvas conveys information or interaction, I provide fallback text, an accessible alternative, keyboard support, and sometimes a separate DOM representation of the same data.

### 4. Inline SVG or SVG as an image: how do you choose?

Use inline SVG when you need styling, animation, currentColor, or accessible internal structure. Use `<img src="icon.svg">` for simple static images. For decorative icons, hide them from assistive tech; for meaningful icons, provide an accessible name.

### 5. What do you check for video accessibility?

Captions for spoken content, transcripts when useful, keyboard-operable controls, no unexpected autoplay with sound, visible focus, and a fallback for unsupported formats. I also check file size and preload behavior because media can easily dominate performance.

---

# Quick Practice

1. Explain one realistic production use case for Media, iframe, Canvas, and SVG Basics in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
