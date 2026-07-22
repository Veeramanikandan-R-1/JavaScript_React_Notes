# Revision Notes: SEO for React Apps

* Accessibility means people can use the product across abilities, devices, preferences, and assistive technologies.
* Accessible interfaces are usually more robust for everyone.
* SEO and accessibility both benefit from meaningful structure, fast pages, and clear content.
* Best practice: Use semantic elements.
* Best practice: Test keyboard flows.
* Best practice: Provide accessible names and error messages.
* Best practice: Make metadata unique and server-visible where SEO matters.
* Avoid: Removing focus outlines.
* Avoid: Using ARIA instead of native elements.
* Avoid: Relying on color alone.
* Avoid: Shipping client-only pages that have empty metadata.

---

# Cheat Sheet

| Concept | Practical meaning |
| ------- | ----------------- |
| Semantic HTML | Native meaning and behavior. |
| Focus | Current keyboard interaction target. |
| Accessible name | Text announced for a control. |
| Metadata | Machine-readable page description. |
| Server rendering | HTML available before client JavaScript executes. |

---

# Interview Questions with Answers

### 1. Why can SEO be harder in a client-rendered React app?

If meaningful content, links, titles, and metadata appear only after JavaScript runs, crawlers and link previews may miss or delay understanding the page. Server rendering or pre-rendering often helps content-heavy pages.

### 2. What metadata should a React route manage?

Title, description, canonical URL, robots directives where needed, Open Graph/Twitter metadata, structured data when appropriate, and route-specific headings/content that match search intent.

### 3. How do performance and SEO connect?

Slow pages can hurt crawling, ranking signals, and user engagement. LCP, image optimization, JavaScript size, server response time, and stable layout all matter for search and real users.

### 4. How do you debug incorrect link previews?

Inspect the rendered HTML and response source for Open Graph tags, clear CDN/social caches, verify absolute image URLs, status codes, canonical URL, and whether metadata changes only after client-side JavaScript.

### 5. What SEO issues do you flag in React reviews?

Missing route titles/descriptions, duplicate canonical URLs, content hidden behind client-only fetches, broken semantic heading structure, images without useful alt text, and links implemented as buttons or click handlers.

---

# Quick Practice

1. Explain one realistic production use case for SEO for React Apps in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.

---

# Added from `react_1.docx`

* On-page SEO includes HTML structure, title, description, headings, content, alt text, structured data, and performance.
* Off-page SEO includes backlinks, social sharing, brand mentions, guest posts, and references.
* SSR sends meaningful HTML from the server and usually helps public SEO pages.
* CSR is often fine for dashboards/internal tools where SEO is not important.
* SSR is not automatically faster; hydration and server cost still matter.
