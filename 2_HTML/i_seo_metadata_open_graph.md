# SEO Metadata and Open Graph (Senior Frontend Engineer Perspective)

Before going deeper into frameworks or libraries, understand this topic as part of real frontend engineering: making pages understandable in search, browser chrome, and social sharing.

---

# 1. Fundamentals

* SEO starts with useful content, crawlable links, semantic HTML, performance, and accessible structure.
* Metadata improves how pages appear in tabs, search results, bookmarks, and shared previews.
* Open Graph and Twitter card metadata control social previews.

---

# 2. Core Concepts

| Concept | Practical meaning |
| ------- | ----------------- |
| Title | The page label shown in tabs and often search results. |
| Description | A concise summary that may appear in search snippets. |
| Canonical URL | Preferred URL when duplicate or similar pages exist. |
| Open Graph | Metadata used by many social platforms for rich previews. |
| Structured data | Machine-readable information that can support rich search results. |

---

# 3. Internal Working

* Search crawlers parse HTML, links, headings, metadata, canonical hints, and page content.
* Client-rendered pages can be indexed, but server-rendered or pre-rendered content is often more reliable for SEO-critical pages.
* Social preview bots commonly read initial HTML metadata and may not execute application JavaScript fully.

---

# 4. Common Mistakes

* Using the same title and description for every route.
* Blocking important content behind JavaScript-only interactions.
* Using vague H1 text that does not match page intent.
* Forgetting meaningful alt text on content images.

---

# 5. Best Practices

* Use unique titles and descriptions per page.
* Keep URLs stable, readable, and canonicalized.
* Use semantic headings and internal links.
* Optimize Core Web Vitals for search and user experience.
* Generate metadata on the server for public content when using React frameworks.

---

# 6. Code Example

```html
<title>React Hooks Notes | Frontend Notes</title>
<meta name="description" content="Practical notes on React hooks, effects, state, and common mistakes.">
<link rel="canonical" href="https://example.com/react/hooks">

<meta property="og:title" content="React Hooks Notes">
<meta property="og:description" content="Senior frontend notes for understanding React hooks in real applications.">
<meta property="og:type" content="article">
<meta property="og:url" content="https://example.com/react/hooks">
<meta property="og:image" content="https://example.com/images/react-hooks.png">
```

---

# 7. Real-world Scenarios

* A documentation page needs a unique title so users can identify it among many tabs.
* A product page needs server-rendered metadata for link previews.
* A blog post uses canonical URLs to avoid duplicate indexing.

---

# 7.1 SEO Details for Interviews

Robots meta vs `robots.txt`:

| Tool | Use |
| ---- | --- |
| `robots.txt` | Tells crawlers which paths they should not crawl. |
| `<meta name="robots">` | Gives page-level indexing/following hints. |

```html
<meta name="robots" content="index,follow">
<link rel="alternate" hreflang="en-IN" href="https://example.com/en-in/product">
<link rel="manifest" href="/site.webmanifest">
<link rel="icon" href="/favicon.ico">
```

Structured data example:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "React Hooks Notes",
  "author": { "@type": "Person", "name": "Frontend Team" }
}
</script>
```

`meta name="keywords"` appears in old notes and old tutorials, but modern SEO does not depend on it. Spend time on helpful content, titles, descriptions, headings, links, performance, and crawlability.

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

* SEO Metadata and Open Graph matters because it affects real users, future maintainers, and production behavior.
* Learn the mental model before memorizing syntax.
* Use browser DevTools, tests, and small examples to verify behavior.
* SEO starts with useful content, crawlable links, semantic HTML, performance, and accessible structure.
* Metadata improves how pages appear in tabs, search results, bookmarks, and shared previews.
* Open Graph and Twitter card metadata control social previews.

---

# Cheat Sheet

| Concept | Practical meaning |
| ------- | ----------------- |
| Title | The page label shown in tabs and often search results. |
| Description | A concise summary that may appear in search snippets. |
| Canonical URL | Preferred URL when duplicate or similar pages exist. |
| Open Graph | Metadata used by many social platforms for rich previews. |
| Structured data | Machine-readable information that can support rich search results. |

---

# Interview Questions with Answers

### 1. What page metadata do you expect on a production page?

At minimum: a unique `title`, useful meta description, canonical URL where needed, viewport, language, and social preview tags for shareable pages. For product/article/event pages, I also consider structured data if it matches visible content.

### 2. Why is Open Graph not the same as SEO?

Open Graph controls how a page appears when shared on platforms that read OG tags. SEO is broader: crawlability, content, links, performance, structured data, canonicalization, and rendering. OG tags help sharing, but they do not replace good page content.

### 3. How do React apps create SEO problems?

If all meaningful content is client-rendered after JavaScript loads, crawlers and preview bots may see weak or empty HTML. Solutions include SSR, SSG, pre-rendering, server metadata generation, and making sure each route has unique metadata.

### 4. What is a canonical URL and when do you need it?

A canonical URL tells search engines which URL should be treated as the primary version when duplicate or near-duplicate pages exist. It matters for filtered pages, tracking query params, pagination strategies, and content available under multiple paths.

### 5. A shared link shows the wrong image on Slack. What do you check?

I check `og:image`, absolute URL, image dimensions, cache behavior on the platform, redirects, robots restrictions, and whether the server returns the tags in initial HTML. Many preview bots do not wait for client-side JavaScript to update metadata.

---

# Hands-on Exercises

## Exercise 1

Write metadata for a course landing page.

### Solution

Include title, description, canonical URL, Open Graph title, description, type, URL, and image.

---

# Senior Frontend Engineer Takeaway

For senior-level work, SEO Metadata and Open Graph is not only a syntax topic. You should be able to explain the mental model, choose the right pattern for a product requirement, identify common failure modes, and verify behavior through tooling, tests, and browser inspection.
