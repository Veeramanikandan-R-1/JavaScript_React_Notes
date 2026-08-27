# Media — HTML Interview Notes

For a **5-year React developer**, know the purpose, important attributes, responsive media, accessibility, and when to use **SVG vs Canvas**.

---

## 1. `<img>` ⭐⭐⭐

Displays an image.

```html
<img
  src="/images/profile.jpg"
  alt="User profile"
  width="200"
  height="200"
/>
```

### Important attributes

* `src` → image URL
* `alt` → alternative text (**important for accessibility**)
* `width`, `height` → dimensions
* `loading="lazy"` → lazy-loads image
* `srcset` → responsive image sources
* `sizes` → tells browser which image size is appropriate

### React

```jsx
<img
  src="/profile.jpg"
  alt="User profile"
  width={200}
  height={200}
  loading="lazy"
/>
```

### Why `width`/`height`?

Providing dimensions helps the browser reserve space and reduces **layout shift (CLS)**.

---

# 2. `<picture>` ⭐⭐

Used for **responsive images** or different images based on conditions.

```html
<picture>
  <source
    media="(max-width: 600px)"
    srcset="/mobile.jpg"
  />

  <source
    media="(min-width: 601px)"
    srcset="/desktop.jpg"
  />

  <img src="/desktop.jpg" alt="Landscape" />
</picture>
```

The `<img>` is the **fallback** and should generally be included.

### `<picture>` vs `<img>`

* `<img>` → display one image, potentially with responsive `srcset`
* `<picture>` → art direction / different formats or sources based on conditions

Example format selection:

```html
<picture>
  <source srcset="image.avif" type="image/avif" />
  <source srcset="image.webp" type="image/webp" />
  <img src="image.jpg" alt="Product" />
</picture>
```

---

# 3. `<audio>`

Embeds audio content.

```html
<audio controls>
  <source src="song.mp3" type="audio/mpeg" />
  <source src="song.ogg" type="audio/ogg" />
  Your browser does not support audio.
</audio>
```

### Important attributes

```text
controls
autoplay
loop
muted
preload
```

Example:

```html
<audio controls loop>
  <source src="music.mp3" type="audio/mpeg" />
</audio>
```

### React

```jsx
<audio controls>
  <source src="/music.mp3" type="audio/mpeg" />
</audio>
```

---

# 4. `<video>` ⭐⭐⭐

Embeds video content.

```html
<video
  controls
  width="600"
  poster="/thumbnail.jpg"
>
  <source src="/video.mp4" type="video/mp4" />
  Your browser does not support video.
</video>
```

### Important attributes

| Attribute      | Purpose                   |
| -------------- | ------------------------- |
| `controls`     | Show playback controls    |
| `autoplay`     | Automatically play        |
| `muted`        | Mute video                |
| `loop`         | Repeat                    |
| `poster`       | Thumbnail before playback |
| `preload`      | Controls loading behavior |
| `width/height` | Dimensions                |

### Autoplay

Browsers commonly restrict autoplay with sound.

This is more likely to work:

```html
<video autoplay muted playsinline>
```

`playsinline` is particularly useful for inline playback on mobile browsers.

---

# 5. `<source>`

Defines **multiple media sources** for `<picture>`, `<audio>`, and `<video>`.

```html
<video controls>
  <source src="video.webm" type="video/webm" />
  <source src="video.mp4" type="video/mp4" />
</video>
```

Browser chooses a supported source.

### Important

`<source>` itself doesn't display media. It provides the source to a media element.

---

# 6. `<iframe>` ⭐⭐

Embeds another document/page inside the current page.

Common uses:

* YouTube videos
* Maps
* External applications
* Embedded documents

```html
<iframe
  src="https://example.com"
  title="Example website"
  width="600"
  height="400">
</iframe>
```

### Important attributes

* `src`
* `title`
* `width`, `height`
* `loading="lazy"`
* `allow`
* `sandbox`

### Security ⭐

For untrusted embedded content, use `sandbox` where appropriate:

```html
<iframe
  src="https://example.com"
  title="External content"
  sandbox>
</iframe>
```

`iframe` content is generally subject to browser security mechanisms such as the **same-origin policy**.

### React

```jsx
<iframe
  src="https://www.youtube.com/embed/VIDEO_ID"
  title="Product demonstration"
  loading="lazy"
/>
```

**Accessibility:** Always provide a meaningful `title`.

---

# 7. `<svg>` ⭐⭐⭐

**Scalable Vector Graphics**.

Great for:

* Icons
* Logos
* Illustrations
* Charts
* UI graphics

Example:

```html
<svg
  width="100"
  height="100"
  viewBox="0 0 100 100"
>
  <circle
    cx="50"
    cy="50"
    r="40"
    fill="blue"
  />
</svg>
```

### Advantages

* Vector-based → doesn't become pixelated when scaled
* Can be styled with CSS
* Can be manipulated with JavaScript
* Supports accessibility
* Great for UI icons

### React

JSX:

```jsx
<svg viewBox="0 0 100 100">
  <circle cx="50" cy="50" r="40" />
</svg>
```

Common React usage:

```jsx
<svg aria-label="Success" role="img">
  ...
</svg>
```

For decorative SVGs:

```jsx
<svg aria-hidden="true">
  ...
</svg>
```

---

# 8. `<canvas>` ⭐⭐⭐

Provides a **drawing surface** controlled mainly through JavaScript.

Common uses:

* Games
* Image manipulation
* Data visualization
* Drawing applications
* Animations

HTML:

```html
<canvas id="myCanvas" width="300" height="150"></canvas>
```

JavaScript:

```js
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "blue";
ctx.fillRect(20, 20, 100, 50);
```

### React

```jsx
const canvasRef = useRef(null);

useEffect(() => {
  const canvas = canvasRef.current;
  const ctx = canvas.getContext("2d");

  ctx.fillRect(20, 20, 100, 50);
}, []);

return <canvas ref={canvasRef} width={300} height={150} />;
```

### Important characteristic

Canvas is essentially **pixel-based/raster drawing**.

Once drawn, individual shapes aren't retained as DOM elements.

---

# ⭐ SVG vs Canvas

This is a **very common interview question**.

| SVG                                    | Canvas                                  |
| -------------------------------------- | --------------------------------------- |
| Vector-based                           | Raster/pixel-based drawing surface      |
| DOM-based                              | Not individual DOM elements             |
| Each shape can be accessed/manipulated | Drawing is typically managed through JS |
| Great for icons/charts/UI graphics     | Great for games/heavy drawing           |
| Scales without pixelation              | Can pixelate when scaled                |
| Easier accessibility                   | Accessibility requires extra work       |
| Better for fewer interactive objects   | Better for many/high-frequency objects  |

### Simple rule

> **UI icons, logos, scalable graphics → SVG**

> **Games, image processing, thousands of rapidly changing objects → Canvas**

---

# 🔥 Media Accessibility

### Image

Always provide meaningful `alt`:

```html
<img src="user.jpg" alt="John's profile" />
```

Decorative image:

```html
<img src="background.jpg" alt="" />
```

### Video

Provide captions when appropriate:

```html
<video controls>
  <source src="video.mp4" type="video/mp4" />

  <track
    kind="captions"
    src="captions.vtt"
    srclang="en"
    label="English"
  />
</video>
```

### iframe

Provide:

```html
title="Google Map showing office location"
```

### SVG

Use appropriate accessible naming for meaningful SVGs; hide decorative SVGs from assistive technology.

---

# ⚡ Performance Points

For production React applications:

```jsx
<img
  src="/large-image.jpg"
  alt="Product"
  loading="lazy"
  width={800}
  height={600}
/>
```

Consider:

* **Lazy loading** for below-the-fold images/iframes
* Modern formats such as **WebP/AVIF**
* Responsive images with `srcset` / `sizes`
* Correct image dimensions to reduce layout shift
* Avoid unnecessarily huge media files
* Use appropriate video compression
* Don't autoplay media unnecessarily

---

# ⭐ Quick Revision

| Element     | Purpose                        |
| ----------- | ------------------------------ |
| `<img>`     | Display image                  |
| `<picture>` | Responsive/art-directed images |
| `<audio>`   | Audio playback                 |
| `<video>`   | Video playback                 |
| `<source>`  | Alternative media source       |
| `<iframe>`  | Embed another document         |
| `<svg>`     | Vector graphics                |
| `<canvas>`  | JS-based pixel drawing         |

### Most important interview questions

1. **`img` vs `picture`?**

   * `img` displays an image; `picture` allows different image sources based on media/type conditions.

2. **SVG vs Canvas?**

   * SVG is vector + DOM-based; Canvas is a pixel-based drawing surface.

3. **Why `alt`?**

   * Accessibility and fallback text when an image can't be displayed.

4. **Why `loading="lazy"`?**

   * Defers loading of non-critical media until it is near the viewport.

5. **Why multiple `<source>` elements?**

   * Allows the browser to choose a supported/appropriate media format or source.

6. **Why `title` on iframe?**

   * Gives assistive technologies a meaningful description of the embedded content.
