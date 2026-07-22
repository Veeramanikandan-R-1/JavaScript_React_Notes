# Text, Links, Images, and Lists (Senior Frontend Engineer Perspective)

---

# 1. Fundamentals

* Text elements give meaning and hierarchy to content.
* Links connect documents and resources.
* Images need dimensions, responsive behavior, and alternative text.
* Lists should be used for actual collections of related items.

---

# 2. Core Concepts

| Concept | Practical meaning |
| ------- | ----------------- |
| Headings | Create document outline and scanning structure. |
| Paragraphs | Represent blocks of prose. |
| Emphasis | `em` and `strong` express meaning, not just italics or bold style. |
| Links | `href` makes an anchor navigable and keyboard-focusable. |
| Images | `src`, `alt`, `width`, `height`, `loading`, and `srcset` control meaning and loading. |
| Lists | `ul`, `ol`, and `dl` communicate grouped content. |

---

# 3. Internal Working

* Images without known dimensions can cause layout shift when they load.
* An anchor without `href` is not a normal link.
* Assistive technologies use link text out of context, so vague labels like `click here` are weak.

---

# 4. Common Mistakes

* Using headings for font size instead of structure.
* Leaving decorative images with descriptive alt text that adds noise.
* Using `target="_blank"` without considering user context and security.
* Building menus with random `div`s instead of lists or navigation links.

---

# 5. Best Practices

* Write link text that names the destination or action.
* Use empty `alt=""` for decorative images and meaningful alt text for informative images.
* Provide `width` and `height` on images when possible.
* Use `rel="noopener noreferrer"` with external new-tab links.

---

# 6. Code Example

```html
<section aria-labelledby="resources-title">
  <h2 id="resources-title">Learning resources</h2>
  <p>Start with the official documentation before copying snippets.</p>

  <ul>
    <li><a href="/guides/html-semantics">HTML semantics guide</a></li>
    <li><a href="/guides/css-layout">CSS layout guide</a></li>
  </ul>

  <img
    src="/images/layout-example.png"
    alt="Dashboard layout showing header, sidebar, content, and footer regions"
    width="960"
    height="540"
    loading="lazy">
</section>
```

---

# 7. Real-world Scenarios

* A search result shows better snippets because headings and link text are clear.
* A page avoids layout shift because images declare dimensions.
* A screen reader user understands an image because the alt text explains its information.

---

# 7.1 `srcset`, `sizes`, and `picture`

Use `srcset` + `sizes` when the same image should be served at different resolutions.

```html
<img
  src="/images/card-800.jpg"
  srcset="/images/card-400.jpg 400w, /images/card-800.jpg 800w, /images/card-1200.jpg 1200w"
  sizes="(max-width: 600px) 100vw, 400px"
  alt="Analytics card preview"
  width="800"
  height="500">
```

Browser mental model:

```text
viewport + sizes + device pixel ratio + available srcset candidates -> best image file
```

Use `picture` when the art direction or format changes:

```html
<picture>
  <source media="(max-width: 600px)" srcset="/images/team-mobile.jpg">
  <source type="image/avif" srcset="/images/team.avif">
  <img src="/images/team.jpg" alt="Team reviewing a dashboard" width="1200" height="800">
</picture>
```

Interview answer: `srcset` is mainly for resolution choice; `picture` is for choosing different sources by media condition or format.

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

* Text, Links, Images, and Lists matters because it affects real users, future maintainers, and production behavior.
* Learn the mental model before memorizing syntax.
* Use browser DevTools, tests, and small examples to verify behavior.
* Text elements give meaning and hierarchy to content.
* Links connect documents and resources.
* Images need dimensions, responsive behavior, and alternative text.
* Lists should be used for actual collections of related items.

---

# Cheat Sheet

| Concept | Practical meaning |
| ------- | ----------------- |
| Headings | Create document outline and scanning structure. |
| Paragraphs | Represent blocks of prose. |
| Emphasis | `em` and `strong` express meaning, not just italics or bold style. |
| Links | `href` makes an anchor navigable and keyboard-focusable. |
| Images | `src`, `alt`, `width`, `height`, `loading`, and `srcset` control meaning and loading. |
| Lists | `ul`, `ol`, and `dl` communicate grouped content. |

---
# Interview Questions with Answers

### 1. Can heading levels be skipped because the design makes the text look smaller?

No. Heading levels describe document outline, not visual size. If a design needs a smaller visual style, use CSS while keeping heading order meaningful. I check this because screen-reader users often navigate by headings.

### 2. What is the difference between an empty `alt=""` and missing `alt`?

Empty `alt=""` intentionally marks the image as decorative, so assistive tech can skip it. Missing `alt` is usually a bug; the screen reader may announce the file name or URL. The right answer depends on image purpose in context.

### 3. When should a link open in a new tab?

Rarely, and only when it is clearly useful, such as external documentation or preserving a long-running workflow. If it opens a new tab, I prefer making that clear to users. I avoid forcing new tabs for normal navigation because users can choose that themselves.

### 4. When would you use `ul`, `ol`, and `dl`?

Use `ul` for unordered groups, `ol` where order matters, and `dl` for name/value or term/description relationships. Interviewers ask this because lists are often styled away visually, but the semantics still help assistive tech and maintainability.

### 5. How do you make image-heavy content perform well without breaking UX?

I use correct dimensions to avoid layout shift, responsive image sources where needed, lazy loading for below-the-fold images, meaningful `alt`, and modern formats when supported. I avoid lazy-loading the LCP image because that can slow the first meaningful view.

---

# Hands-on Exercises

## Exercise 1

Write an accessible resource list with three links and one informative image.

### Solution

Use a heading, `ul`, descriptive anchors, and an `img` with useful alt text and dimensions.

---

# Senior Frontend Engineer Takeaway

For senior-level work, Text, Links, Images, and Lists is not only a syntax topic. You should be able to explain the mental model, choose the right pattern for a product requirement, identify common failure modes, and verify behavior through tooling, tests, and browser inspection.
