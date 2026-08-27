# Performance — React/HTML Interview Notes

These concepts mainly control **when browser resources are downloaded and executed**. They can improve initial page load, especially **LCP, FCP, and Total Blocking Time (TBT)**.

---

note:

* **LCP** → **Largest Contentful Paint** — measures when the **largest visible content element** (e.g., hero image, heading, large text block) is rendered.

* **FCP** → **First Contentful Paint** — measures when the **first piece of content** (text, image, SVG, etc.) is rendered on the screen.

### Easy way to remember

**FCP = First content appears**
**LCP = Largest important content appears**


---

## 1. `defer`

Used with external JavaScript files.

```html
<script src="/app.js" defer></script>
```

### Behavior

* Downloads script **in parallel** while HTML is parsing.
* Executes **after HTML parsing completes**.
* Maintains execution order when multiple deferred scripts are present.
* Doesn't block HTML parsing.

```text
HTML parsing ────────────────────┐
JS download    ────────────────   │
                                 ↓
                         HTML parsing done
                                 ↓
                         Execute JS
```

### Best for

Scripts that need the DOM and aren't required immediately.

**Interview:** `defer` is generally a good default for classic external scripts.

---

# 2. `async`

Downloads the script in parallel with HTML parsing and executes it **as soon as it finishes downloading**.

```html
<script src="/analytics.js" async></script>
```

### Behavior

* Download doesn't block HTML parsing.
* Execution **can interrupt HTML parsing**.
* Execution order between multiple async scripts is **not guaranteed**.

```text
HTML parsing ─────────────────────────
JS download ────────┐
                    ↓
                 Execute
                    ↓
HTML parsing continues
```

### Best for

Independent scripts such as:

* Analytics
* Ads
* Tracking scripts

### `async` vs `defer`

|                                      | `async`               | `defer`             |
| ------------------------------------ | --------------------- | ------------------- |
| Download                             | Parallel              | Parallel            |
| Execute                              | As soon as downloaded | After HTML parsing  |
| Execution order                      | ❌ Not guaranteed      | ✅ Preserved         |
| Blocks HTML parsing during execution | Yes                   | No                  |
| Typical use                          | Independent scripts   | Application scripts |

---

# 3. Module Scripts

JavaScript modules can be loaded using:

```html
<script type="module" src="/app.js"></script>
```

Module scripts are **deferred by default**.

So:

```html
<script type="module" src="/app.js"></script>
```

behaves similarly to:

```html
<script type="module" src="/app.js" defer></script>
```

### Features

* Supports `import` / `export`.
* Deferred by default.
* Strict mode automatically applies.
* Each module has its own scope.
* Browser handles the module dependency graph.

```js
// app.js
import { add } from "./utils.js";

console.log(add(2, 3));
```

### Interview point

Don't normally need to add `defer` to a module script because modules are deferred by default.

---

# 4. Lazy Loading Images

Don't download images until they're close to the viewport.

```html
<img
  src="/product.jpg"
  alt="Product"
  loading="lazy"
/>
```

In React:

```jsx
<img
  src="/product.jpg"
  alt="Product"
  loading="lazy"
/>
```

### Good for

* Images below the fold
* Large image galleries
* Long pages

### ⚠️ Important

Don't blindly lazy-load the **LCP/hero image**.

For example:

```jsx
// Hero image — usually don't lazy load
<img
  src="/hero.jpg"
  alt="Dashboard"
  loading="eager"
/>
```

Below-the-fold:

```jsx
<img
  src="/product.jpg"
  alt="Product"
  loading="lazy"
/>
```

---

# 5. `preload`

Tells the browser:

> **"This resource will be needed very soon; start fetching it early."**

Example:

```html
<link
  rel="preload"
  href="/hero.webp"
  as="image"
/>
```

CSS:

```html
<link
  rel="preload"
  href="/critical.css"
  as="style"
/>
```

Font:

```html
<link
  rel="preload"
  href="/font.woff2"
  as="font"
  type="font/woff2"
  crossorigin
/>
```

### Use for

Resources that are:

* **High priority**
* Needed very soon
* Discovered late by the browser

### ⚠️ Don't overuse

Preloading unnecessary resources can **compete with critical resources** and actually hurt performance.

---

# 6. `prefetch`

Tells the browser:

> **"This resource may be needed later."**

```html
<link
  rel="prefetch"
  href="/next-page.js"
/>
```

Usually lower priority than `preload`.

### Example

If the user is currently on:

```text
/products
```

and you're confident they may navigate to:

```text
/products/details
```

you could prefetch resources for that future page.

### Difference

```text
preload  → Needed NOW / very soon
prefetch → Might be needed LATER
```

**Interview:** `prefetch` is speculative; the browser may choose whether/when to fetch it.

---

# 7. `dns-prefetch`

Asks the browser to perform **DNS resolution early** for a domain you'll likely request.

```html
<link
  rel="dns-prefetch"
  href="//cdn.example.com"
/>
```

For example, if assets come from:

```text
cdn.example.com
```

DNS lookup can happen before the actual resource request.

### Benefit

Reduces DNS lookup latency when the resource is requested later.

### `dns-prefetch` vs `preconnect`

```html
<link rel="preconnect" href="https://cdn.example.com">
```

* `dns-prefetch` → DNS lookup only.
* `preconnect` → DNS + connection setup (and TLS for HTTPS).

For an important third-party origin, `preconnect` can be more effective, but should also be used selectively.

---

# ⭐ Quick Interview Revision

```text
defer
→ Download parallel
→ Execute after HTML parsing
→ Order preserved

async
→ Download parallel
→ Execute immediately when downloaded
→ Order NOT guaranteed

type="module"
→ Supports import/export
→ Deferred by default

loading="lazy"
→ Delay offscreen image loading
→ Don't normally lazy-load LCP/hero image

preload
→ Resource needed very soon
→ High priority
→ Don't overuse

prefetch
→ Resource potentially needed later
→ Low/speculative priority

dns-prefetch
→ Resolve DNS early
→ Reduces DNS lookup latency
```

### 🎯 Most important interview comparison

**`preload` vs `prefetch`:**

> `preload` is for a resource the current page **definitely needs soon**; `prefetch` is for a resource that **may be needed later**, often for a future navigation.

**`async` vs `defer`:**

> Both download without blocking HTML parsing, but `async` executes as soon as downloaded with no guaranteed order, while `defer` waits for HTML parsing to finish and preserves script order.
