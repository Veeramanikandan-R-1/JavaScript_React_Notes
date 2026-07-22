# Revision Notes: Text, Links, Images, and Lists

* Text elements give meaning and hierarchy to content.
* Links connect documents and resources.
* Images need dimensions, responsive behavior, and alternative text.
* Lists should be used for actual collections of related items.
* Best practice: Write link text that names the destination or action.
* Best practice: Use empty `alt=""` for decorative images and meaningful alt text for informative images.
* Best practice: Provide `width` and `height` on images when possible.
* Best practice: Use `rel="noopener noreferrer"` with external new-tab links.
* Avoid: Using headings for font size instead of structure.
* Avoid: Leaving decorative images with descriptive alt text that adds noise.
* Avoid: Using `target="_blank"` without considering user context and security.
* Avoid: Building menus with random `div`s instead of lists or navigation links.

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

# Quick Practice

1. Explain one realistic production use case for Text, Links, Images, and Lists in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
