# Meta Tags — React/HTML Interview Notes

Meta tags provide **metadata about a webpage**. They are placed inside the HTML `<head>` and are important for **SEO, responsive behavior, browser behavior, and social sharing**.

> In React/Vite, these are typically managed in `index.html`; for SSR/Next.js, they can be managed per page.

---

## 1. `charset`

Defines the **character encoding** of the document.

```html
<meta charset="UTF-8">
```

* `UTF-8` supports most languages and special characters.
* Should be placed early inside `<head>`.

**Interview:** Prevents character encoding issues such as `₹`, `é`, Tamil characters, etc.

---

## 2. `viewport`

Controls how the page is displayed on **mobile devices**.

```html
<meta
  name="viewport"
  content="width=device-width, initial-scale=1.0"
/>
```

### Important values

* `width=device-width` → viewport width = device width.
* `initial-scale=1.0` → initial zoom level = 100%.

**Interview:** Essential for responsive web applications.

⚠️ Avoid using `user-scalable=no` because it can hurt accessibility by preventing users from zooming.

---

## 3. `description`

Provides a short description of the webpage, mainly useful for **SEO/search result snippets**.

```html
<meta
  name="description"
  content="Learn React JS concepts with practical examples."
/>
```

**Good practice:**

* Make it unique per page.
* Clearly describe the page content.
* Don't stuff it with keywords.

**Important:** `description` doesn't directly guarantee a particular Google search snippet.

---

## 4. `robots`

Tells search engine crawlers what they should/can do with a page.

```html
<meta
  name="robots"
  content="index, follow"
/>
```

Common values:

```text
index       → allow page indexing
noindex     → don't index page
follow      → follow links
nofollow    → don't follow links
```

Example:

```html
<meta name="robots" content="noindex, nofollow">
```

Useful for pages such as internal/private pages that shouldn't appear in search results.

**Interview:** `robots` controls crawler behavior; it is **not an access-control/security mechanism**.

---

# 5. Open Graph (OG)

Open Graph metadata controls how your page appears when shared on platforms such as **Facebook, LinkedIn, and other services that consume OG metadata**.

Typical tags:

```html
<meta property="og:title" content="React Interview Guide">
<meta property="og:description" content="React concepts for senior developers.">
<meta property="og:image" content="https://example.com/react.png">
<meta property="og:url" content="https://example.com/react-guide">
<meta property="og:type" content="website">
```

### Important OG tags

| Tag              | Purpose              |
| ---------------- | -------------------- |
| `og:title`       | Shared page title    |
| `og:description` | Shared description   |
| `og:image`       | Preview image        |
| `og:url`         | Canonical/shared URL |
| `og:type`        | Content type         |

**Interview:** OG tags improve the **social sharing preview**, not traditional SEO ranking directly.

---

# 6. Favicon

Small icon displayed in the **browser tab, bookmarks, etc.**

```html
<link rel="icon" href="/favicon.ico">
```

Modern example:

```html
<link
  rel="icon"
  type="image/png"
  href="/favicon.png"
/>
```

You can also provide different sizes:

```html
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png">
```

---

# Complete Example

```html
<head>
  <meta charset="UTF-8">

  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
  >

  <meta
    name="description"
    content="React JS interview preparation guide."
  >

  <meta
    name="robots"
    content="index, follow"
  >

  <!-- Open Graph -->
  <meta property="og:title" content="React Interview Guide">
  <meta property="og:description" content="React concepts and examples.">
  <meta property="og:image" content="/react-preview.png">
  <meta property="og:url" content="https://example.com/react">
  <meta property="og:type" content="website">

  <!-- Favicon -->
  <link rel="icon" href="/favicon.ico">

  <title>React Interview Guide</title>
</head>
```

### ⭐ Quick Interview Revision

```text
charset     → Character encoding
viewport    → Mobile/responsive behavior
description → Search engine page description
robots      → Crawler/indexing instructions
Open Graph  → Social media sharing preview
favicon     → Browser tab/site icon
```

**Key React point:** For a React SPA, metadata in the initial `index.html` is global. If you need **different metadata for different routes/pages**, use a metadata/head-management solution or framework-level support such as Next.js metadata.
