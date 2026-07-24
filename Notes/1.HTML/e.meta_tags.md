# 1. Fundamentals

## What are Meta Tags?

Meta tags are HTML elements placed inside the `<head>` section of an HTML document.

They provide **metadata (information about the page)** to browsers, search engines, and social media platforms.

They are **not displayed** on the webpage.

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
```

---

## Why do we need Meta Tags?

They help with:

* Character encoding
* Responsive layouts
* SEO
* Social media previews
* Browser behavior
* Search engine indexing

Without proper meta tags:

* Text may display incorrectly.
* Mobile pages won't be responsive.
* SEO ranking may decrease.
* Shared links may look poor.
* Search engines may not index pages correctly.

---

# 2. charset

## What is it?

Specifies the character encoding used by the webpage.

```html
<meta charset="UTF-8">
```

---

## Why UTF-8?

UTF-8 supports almost every language.

Examples:

* English
* Tamil
* Hindi
* Japanese
* Arabic
* Emojis 😊

Without UTF-8:

```
Hello → HÃ©llo
```

Characters may become corrupted.

---

## Best Practice

Always place it as the first meta tag.

```html
<head>
<meta charset="UTF-8">
```

---

## Interview Question

**Why UTF-8?**

Because it supports nearly every Unicode character and avoids encoding issues.

---

# 3. Viewport

## What is it?

Controls how a webpage is displayed on mobile devices.

```html
<meta
name="viewport"
content="width=device-width, initial-scale=1.0">
```

---

## Breakdown

### width=device-width

Uses the device's actual screen width.

Example

Phone width:

```
390px
```

Browser renders page using

```
390px
```

instead of

```
980px
```

(default behavior on many mobile browsers)

---

### initial-scale=1.0

Initial zoom level.

```
1.0 = 100%
```

---

## Without Viewport

Page becomes zoomed out.

Users need to zoom manually.

Responsive CSS won't work correctly.

---

## React Interview Point

Responsive React applications rely on:

* Viewport meta tag
* CSS Media Queries
* Flexbox
* Grid

All work together.

---

# 4. Description

## What is it?

Provides a summary of the webpage.

```html
<meta
name="description"
content="Learn React from beginner to advanced.">
```

---

## Why is it important?

Search engines often use this text in search results.

Example

Google

```
React Tutorial

Learn React from beginner to advanced...
```

---

## SEO Benefits

Good description

↓

Higher click-through rate

↓

More traffic

---

## Best Practice

Keep

```
150-160 characters
```

Make it meaningful.

Do not stuff keywords.

---

# 5. Robots

## How `robots` Meta Tag Works (Short Explanation)

The `robots` meta tag tells **search engine crawlers (Google, Bing, etc.)** what they are allowed to do with a specific webpage.

```html
<meta name="robots" content="index, follow">
```

### Common Values

| Value      | Meaning                                     |
| ---------- | ------------------------------------------- |
| `index`    | Allow the page to appear in search results. |
| `noindex`  | Do not show the page in search results.     |
| `follow`   | Crawl and follow links on the page.         |
| `nofollow` | Do not follow links on the page.            |

### Examples

**1. Public page (normal website)**

```html
<meta name="robots" content="index, follow">
```

* ✅ Page appears in Google.
* ✅ Google follows links on the page.

**2. Login/Admin page**

```html
<meta name="robots" content="noindex, nofollow">
```

* ❌ Page won't appear in Google.
* ❌ Google won't follow links from that page.

### How it works internally

1. Search engine crawler visits the page.
2. It reads the `<head>` section.
3. It finds the `robots` meta tag.
4. It follows the instructions (`index`, `noindex`, `follow`, `nofollow`).

### Interview Tip

* **`robots` meta tag** controls crawling/indexing **for a single page**.
* **`robots.txt`** controls crawler access **for multiple pages or directories**.


---

# 6. Open Graph (OG Tags)

## What are they?

Open Graph tags control how a webpage appears when shared on social media.

Platforms:

* Facebook
* LinkedIn
* WhatsApp
* Slack
* Discord

---

## Example

```html
<meta property="og:title" content="React Interview Guide">

<meta property="og:description"
content="Master React interviews.">

<meta property="og:image"
content="https://example.com/react.png">

<meta property="og:url"
content="https://example.com">

<meta property="og:type"
content="website">
```

---

## Common Tags

### og:title

Title shown.

---

### og:description

Description shown.

---

### og:image

Thumbnail.

---

### og:url

Canonical URL.

---

### og:type

Usually

```
website
```

or

```
article
```

---

## Without OG Tags

Sharing

```
example.com
```

may produce

```
No image

Wrong title

Poor preview
```

---

## Interview Point

React apps intended for marketing or blogging should include Open Graph tags to improve social sharing.

For SPAs, these tags are often generated server-side (SSR) or at build time (e.g., Next.js, React frameworks with SSR/prerendering), because many social crawlers don't reliably execute client-side JavaScript.

---

# 7. Favicon

## What is it?

Small icon shown in:

* Browser tab
* Bookmarks
* History

---

## Example

```html
<link
rel="icon"
href="/favicon.ico">
```

or

```html
<link
rel="icon"
type="image/png"
href="/logo.png">
```

---

## Why important?

Brand identity.

Users recognize the website quickly.

---

## React

Usually placed inside

```
public/
```

Example

```
public/

favicon.ico
```

Referenced in the HTML document served by the app (for example, `public/index.html` in Create React App or the framework's document/head configuration).

---

# React Specific Notes

## Create React App

Meta tags are commonly placed in:

```
public/index.html
```

---

## Dynamic Meta Tags

Single Page Applications need dynamic meta tags for different pages.

Common approaches:

* React Helmet (legacy but still used)
* `react-helmet-async` (recommended for React apps needing Helmet functionality)
* Framework-provided APIs (e.g., Next.js Metadata API)

Example

```jsx
import { Helmet } from "react-helmet-async";

<Helmet>
    <title>Products</title>
    <meta
        name="description"
        content="Browse products."
    />
</Helmet>
```

This allows each route to have its own title and description.

---

# Best Practices

* Always use UTF-8.
* Always include viewport.
* Write unique descriptions for every page.
* Use robots carefully.
* Add Open Graph tags for shareable pages.
* Include favicon.
* Generate dynamic metadata for SPAs when SEO matters.
* Prefer server-side rendering or prerendering for SEO-critical React applications.

---

# Common Mistakes

❌ Missing viewport

Result:

Poor mobile experience

---

❌ Duplicate descriptions

SEO becomes weaker.

---

❌ Missing favicon

Looks unprofessional.

---

❌ Forgetting Open Graph

Bad social media previews.

---

❌ Using `noindex` accidentally

Google won't index the page.

---

# Real-world Example

```html
<head>

<meta charset="UTF-8">

<meta
name="viewport"
content="width=device-width, initial-scale=1.0">

<meta
name="description"
content="Online React Interview Preparation Platform">

<meta
name="robots"
content="index, follow">

<meta
property="og:title"
content="React Interview Notes">

<meta
property="og:description"
content="Master React interviews">

<meta
property="og:image"
content="/images/react.png">

<link
rel="icon"
href="/favicon.ico">

<title>React Interview Notes</title>

</head>
```

---

# Revision Notes

## Meta Tags Cheat Sheet

| Tag         | Purpose                  | Example                                  |
| ----------- | ------------------------ | ---------------------------------------- |
| charset     | Character encoding       | `<meta charset="UTF-8">`                 |
| viewport    | Responsive mobile layout | `width=device-width, initial-scale=1.0`  |
| description | SEO summary              | `<meta name="description">`              |
| robots      | Search engine indexing   | `index, follow` / `noindex`              |
| Open Graph  | Social sharing preview   | `og:title`, `og:image`, `og:description` |
| favicon     | Browser tab icon         | `<link rel="icon">`                      |

---

## Remember

```
charset
    ↓
Correct text rendering

viewport
    ↓
Responsive website

description
    ↓
SEO snippet

robots
    ↓
Search engine control

Open Graph
    ↓
Social media preview

favicon
    ↓
Browser branding
```

---

# Common Interview Questions

### 1. Why is `charset="UTF-8"` important?

It ensures the browser correctly displays Unicode characters (multiple languages and emojis) and prevents encoding issues.

---

### 2. What happens if the viewport meta tag is missing?

The browser uses a virtual desktop-width viewport, causing the page to appear zoomed out and breaking responsive layouts on mobile devices.

---

### 3. Does the meta description directly improve SEO ranking?

Not directly. Search engines don't typically use it as a ranking factor, but a good description improves click-through rate (CTR), which can indirectly benefit overall search performance.

---

### 4. What is the difference between robots `index` and `follow`?

* `index` → Allows search engines to index the page.
* `follow` → Allows search engines to crawl links on the page.

---

### 5. Why are Open Graph tags important?

They control how links appear when shared on social media, including the title, description, and thumbnail image.

---

### 6. Where do you place meta tags in a React application?

Static metadata is placed in the HTML document (for example, `public/index.html` in Create React App). Route-specific metadata is managed dynamically using libraries like `react-helmet-async` or framework-specific APIs such as the Next.js Metadata API.

---

### 7. Why do React SPAs often need dynamic meta tags?

Different routes represent different content. Dynamic metadata ensures each page has the correct title, description, and social preview, improving SEO and shareability.

---

### 8. Can client-side React alone guarantee SEO-friendly meta tags?

Not always. Many search engines can render JavaScript, but social media crawlers and some bots may not. For SEO-critical applications, SSR, SSG, or prerendering is generally preferred.

---

### 9. What is the purpose of a favicon?

It provides a recognizable icon for browser tabs, bookmarks, and history, improving branding and user recognition.

---

### 10. Which meta tags should almost every website include?

* `charset`
* `viewport`
* `description`
* `robots` (appropriate to the page)
* Open Graph tags (for shareable pages)
* Favicon link
