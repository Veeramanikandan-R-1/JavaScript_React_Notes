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

# Interview Questions & Answers

### 1. How would you explain SEO Metadata and Open Graph in a real project?

It means choosing markup that describes meaning first: headings for hierarchy, landmarks for page regions, labels for controls, and native elements for behavior.

### 2. What happens internally when SEO Metadata and Open Graph is involved?

The browser parses markup into the DOM and accessibility tree, so incorrect HTML can create bugs even when the screen looks visually correct.

### 3. How do you debug issues related to SEO Metadata and Open Graph?

I check DOM order, headings, labels, alt text, link/button purpose, form submission, keyboard navigation, and whether the page still works with limited JavaScript.

### 4. What is the biggest production risk with SEO Metadata and Open Graph?

The biggest risk is building something that works for the demo state but fails with real content, slow networks, accessibility needs, errors, or future changes.

### 5. What should a senior engineer look for in code review?

They should check the mental model, edge cases, accessibility, performance cost, naming, state ownership, test coverage, and whether the simpler native/platform option was considered.

---

# Quick Practice

1. Explain SEO Metadata and Open Graph in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
