# 1. Fundamentals

## What is Web Performance?

Web performance is how **fast a webpage loads, becomes interactive, and responds to users**.

Good performance improves:

* User Experience (UX)
* SEO
* Core Web Vitals
* Conversion rate

As a React developer, optimizing **resource loading** is as important as optimizing React rendering.

---

# 2. defer

## What is it?

`defer` tells the browser to **download the JavaScript file in parallel** while parsing HTML, but **execute it only after the HTML is fully parsed**.

```html
<script defer src="main.js"></script>
```

---

## Without defer

Browser flow:

```
HTML Parsing
      ↓
Encounter <script>
      ↓
Stop parsing HTML
      ↓
Download JS
      ↓
Execute JS
      ↓
Continue HTML parsing
```

HTML parsing is blocked.

---

## With defer

```
HTML Parsing
      ↓
Download JS (parallel)
      ↓
Continue HTML parsing
      ↓
HTML Finished
      ↓
Execute JS
```

No blocking while parsing.

---

## Multiple Deferred Scripts

```html
<script defer src="a.js"></script>
<script defer src="b.js"></script>
```

Execution order:

```
a.js

↓

b.js
```

Order is preserved.

---

## When to use?

* Large application scripts
* React bundles
* Scripts depending on the DOM

---

# 3. async

## What is it?

`async` downloads the script in parallel and executes it **immediately after download**, even if HTML parsing isn't complete.

```html
<script async src="analytics.js"></script>
```

---

## Flow

```
HTML Parsing
      ↓
Download JS
      ↓
Download Complete
      ↓
Pause HTML Parsing
      ↓
Execute JS
      ↓
Resume HTML Parsing
```

---

## Multiple Async Scripts

```html
<script async src="a.js"></script>
<script async src="b.js"></script>
```

Execution order is **not guaranteed**.

Whichever downloads first executes first.

---

## When to use?

Independent scripts:

* Google Analytics
* Ads
* Tracking
* Heatmaps

---

## defer vs async

| Feature                             | defer                      | async                           |
| ----------------------------------- | -------------------------- | ------------------------------- |
| Downloads in parallel               | ✅                          | ✅                               |
| Blocks HTML parsing during download | ❌                          | ❌                               |
| Blocks parsing during execution     | ❌ (executes after parsing) | ✅                               |
| Executes after HTML parsing         | ✅                          | ❌                               |
| Execution order preserved           | ✅                          | ❌                               |
| Best for                            | App scripts                | Third-party independent scripts |

---

# 4. Module Scripts

## What are Module Scripts?

JavaScript ES Modules loaded using:

```html
<script type="module" src="main.js"></script>
```

---

## Benefits

* Supports `import` / `export`
* Uses strict mode automatically
* Each file has its own scope
* Downloads dependencies efficiently
* Deferred by default

---

## Example

```javascript
// utils.js
export function sum(a, b) {
    return a + b;
}
```

```javascript
// main.js
import { sum } from "./utils.js";
```

---

## Does `type="module"` need `defer`?

No.

```html
<script type="module" src="main.js"></script>
```

Module scripts already behave like deferred scripts.

Adding `defer` is unnecessary.

---

## Interview Tip

Modern React projects (Vite, Next.js, etc.) use ES Modules.

---

# 5. Lazy Loading Images

## What is it?

Images are loaded **only when they are about to enter the viewport**.

Instead of loading every image immediately.

---

## Example

```html
<img
src="product.jpg"
loading="lazy"
alt="Product">
```

---

## Without Lazy Loading

```
100 Images

↓

Browser downloads all 100 immediately.
```

---

## With Lazy Loading

```
Only visible images

↓

Downloaded first

↓

Remaining images download while scrolling.
```

---

## Benefits

* Faster initial page load
* Lower bandwidth usage
* Better Largest Contentful Paint (LCP) for offscreen images

---

## Don't Lazy Load

* Hero image
* Banner image
* Logo above the fold
* Any image immediately visible when the page loads

These should load immediately.

---

# 6. preload

## What is preload?

Tells the browser:

> **"This resource is critical. Download it immediately."**

Example

```html
<link
rel="preload"
href="/fonts/inter.woff2"
as="font"
type="font/woff2"
crossorigin>
```

---

## Common Uses

* Fonts
* Hero image
* Critical CSS
* Critical JavaScript

---

## Flow

Normal

```
HTML

↓

Discover Font

↓

Download Font
```

Preload

```
HTML Starts

↓

Download Font Immediately
```

---

## Benefit

Reduces waiting time for important resources.

---

# 7. prefetch

## What is Prefetch?

Prefetch downloads resources that **might be needed later**, during browser idle time.

```html
<link
rel="prefetch"
href="/about.js">
```

---

## Example

User is on

```
Home
```

Next likely page

```
About
```

Browser downloads

```
about.js
```

in the background.

When the user navigates:

```
Instant loading
```

---

## React Example

Many routing libraries and frameworks prefetch route bundles automatically or provide APIs to do so (e.g., Next.js prefetches links in many cases).

---

# 8. dns-prefetch

## What is it?

Resolves a domain's DNS **before** it's actually needed.

Normally

```
Need google.com

↓

DNS Lookup

↓

Connect

↓

Download
```

With DNS Prefetch

```
Browser resolves DNS earlier

↓

Later connection becomes faster
```

---

## Example

```html
<link
rel="dns-prefetch"
href="//fonts.googleapis.com">
```

---

## Useful For

Third-party domains

* Google Fonts
* Analytics
* CDN
* APIs

---

## Benefit

Saves DNS lookup time.

---

# preload vs prefetch vs dns-prefetch

| Feature          | preload                    | prefetch             | dns-prefetch         |
| ---------------- | -------------------------- | -------------------- | -------------------- |
| Purpose          | Load critical resource now | Load future resource | Resolve domain early |
| Priority         | High                       | Low                  | Very Low             |
| Used For         | Fonts, hero image, CSS     | Next page JS         | External domains     |
| Used Immediately | ✅                          | ❌                    | ❌                    |

---

# Real-world Example

```html
<head>

<meta charset="UTF-8">

<script
type="module"
src="/main.js"></script>

<link
rel="preload"
href="/fonts/inter.woff2"
as="font"
type="font/woff2"
crossorigin>

<link
rel="prefetch"
href="/dashboard.js">

<link
rel="dns-prefetch"
href="//fonts.googleapis.com">

</head>

<body>

<img
src="banner.jpg"
alt="Banner">

<img
src="gallery1.jpg"
loading="lazy"
alt="Gallery">

</body>
```

---

# Best Practices

* Use `defer` for traditional application scripts.
* Use `async` only for independent third-party scripts.
* Prefer `type="module"` for modern JavaScript applications.
* Lazy load images below the fold.
* Preload only critical resources.
* Prefetch resources likely needed on the next navigation.
* Use `dns-prefetch` for frequently accessed third-party domains.
* Measure performance using Chrome DevTools and Lighthouse before optimizing.

---

# Common Mistakes

❌ Using `async` for dependent scripts

May execute in the wrong order.

---

❌ Lazy loading the hero image

Delays the most important visible image.

---

❌ Preloading too many resources

Reduces the benefit because everything competes for bandwidth.

---

❌ Using both `defer` and `type="module"`

`type="module"` is already deferred.

---

❌ Prefetching large resources unnecessarily

Wastes bandwidth and cache.

---

# Revision Notes

## Performance Cheat Sheet

| Feature          | Purpose                                          | When to Use                         |
| ---------------- | ------------------------------------------------ | ----------------------------------- |
| `defer`          | Download in parallel, execute after HTML parsing | Main application scripts            |
| `async`          | Download and execute immediately                 | Analytics, Ads, Tracking            |
| `type="module"`  | ES Modules (automatically deferred)              | Modern JavaScript/React apps        |
| `loading="lazy"` | Load images only when needed                     | Images below the fold               |
| `preload`        | Download critical resources immediately          | Fonts, hero images, critical CSS    |
| `prefetch`       | Download likely future resources                 | Next route/page assets              |
| `dns-prefetch`   | Resolve DNS early                                | External domains (CDN, Fonts, APIs) |

---

## Remember

```
defer
    ↓
App Scripts

async
    ↓
Independent Scripts

module
    ↓
Modern ES Modules

lazy
    ↓
Offscreen Images

preload
    ↓
Critical Resources

prefetch
    ↓
Future Resources

dns-prefetch
    ↓
External Domains
```

---

# Common Interview Questions (6 Years React)

### 1. What is the difference between `defer` and `async`?

* `defer` executes after HTML parsing is complete and preserves script order.
* `async` executes as soon as the download finishes and does not preserve order.

---

### 2. Why is `type="module"` preferred in modern React projects?

It supports ES Modules (`import`/`export`), uses strict mode automatically, has module scope, and behaves like `defer` by default.

---

### 3. Can you use both `defer` and `type="module"`?

Yes, but it's unnecessary because module scripts are already deferred by default.

---

### 4. When should you use lazy loading for images?

For images below the fold or content that is not immediately visible. Avoid lazy loading above-the-fold images.

---

### 5. What is the difference between `preload` and `prefetch`?

* **Preload:** Downloads a critical resource needed for the current page immediately.
* **Prefetch:** Downloads a resource likely to be needed on a future navigation during idle time.

---

### 6. What is `dns-prefetch`?

It performs DNS resolution for external domains in advance, reducing the connection setup time when those domains are later accessed.

---

### 7. Why shouldn't dependent scripts use `async`?

Because `async` doesn't guarantee execution order, which can cause scripts that rely on one another to fail.

---

### 8. What resources are commonly preloaded?

* Web fonts
* Hero images
* Critical CSS
* Critical JavaScript needed for initial rendering

---

### 9. How does lazy loading improve performance?

It reduces initial network requests, decreases bandwidth usage, and speeds up the first render by loading offscreen images only when needed.

---

### 10. How would you optimize a React application's loading performance?

A strong answer should include:

* Use ES Modules (`type="module"`).
* Code split with `React.lazy()` and dynamic imports.
* Lazy load offscreen images.
* Preload critical fonts and hero assets.
* Prefetch likely next-route bundles.
* Use `dns-prefetch`/`preconnect` for important third-party origins.
* Compress and cache static assets.
* Measure improvements using Lighthouse and Chrome DevTools.
