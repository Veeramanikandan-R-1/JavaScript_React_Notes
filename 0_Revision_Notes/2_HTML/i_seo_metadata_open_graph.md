# Revision Notes: SEO Metadata and Open Graph

* SEO starts with useful content, crawlable links, semantic HTML, performance, and accessible structure.
* Metadata improves how pages appear in tabs, search results, bookmarks, and shared previews.
* Open Graph and Twitter card metadata control social previews.
* Best practice: Use unique titles and descriptions per page.
* Best practice: Keep URLs stable, readable, and canonicalized.
* Best practice: Use semantic headings and internal links.
* Best practice: Optimize Core Web Vitals for search and user experience.
* Best practice: Generate metadata on the server for public content when using React frameworks.
* Avoid: Using the same title and description for every route.
* Avoid: Blocking important content behind JavaScript-only interactions.
* Avoid: Using vague H1 text that does not match page intent.
* Avoid: Forgetting meaningful alt text on content images.

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

# Quick Practice

1. Explain one realistic production use case for SEO Metadata and Open Graph in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
