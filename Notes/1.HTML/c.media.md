
# 1. `<img>`

## What is `<img>`?

Displays an image on the webpage.

```html
<img src="logo.png" alt="Company Logo">
```

Unlike most HTML elements, `<img>` is a **void (empty) element**.

---

## Important Attributes

### src

Image URL.

```html
<img src="/images/logo.png">
```

---

### alt

Alternative text shown when:

* Image fails to load
* Screen readers read the page

```html
<img
    src="user.png"
    alt="User Profile">
```

Always provide meaningful `alt` text unless the image is purely decorative.

---

### width & height

```html
<img
    src="logo.png"
    width="200"
    height="100">
```

**Why important?**

Providing dimensions helps browsers reserve space before the image loads, reducing **Layout Shift (CLS)**.

---

### loading

Lazy loading.

```html
<img
    src="banner.jpg"
    loading="lazy">
```

Values:

```text
lazy
eager
```

---

### decoding

```html
<img decoding="async">
```

Allows asynchronous image decoding for better rendering performance.

---

## React Example

```jsx
<img
    src={user.avatar}
    alt={user.name}
    loading="lazy"
/>
```

---

## Best Practices

* Always provide `alt`.
* Specify `width` and `height`.
* Lazy-load below-the-fold images.
* Compress images (WebP/AVIF where possible).

---

# 2. `<picture>`

Used for **responsive images**.

Different images can be served based on:

* Screen size
* Device resolution
* Image format

---

## Example

```html
<picture>

    <source
        media="(min-width:768px)"
        srcset="desktop.jpg">

    <img
        src="mobile.jpg"
        alt="Nature">

</picture>
```

Desktop gets

```text
desktop.jpg
```

Mobile gets

```text
mobile.jpg
```

---

## Modern Format Example

```html
<picture>

<source
type="image/avif"
srcset="image.avif">

<source
type="image/webp"
srcset="image.webp">

<img
src="image.jpg"
alt="Mountain">

</picture>
```

Browser picks the first supported format.

---

## When to Use

* Responsive websites
* Large hero images
* Different image formats
* Performance optimization

---

# 3. `<audio>`

Embeds audio.

```html
<audio controls>

<source src="song.mp3">

</audio>
```

---

## Common Attributes

### controls

Shows audio controls.

```html
<audio controls>
```

---

### autoplay

Starts automatically.

```html
<audio autoplay>
```

Modern browsers usually block autoplay with sound.

---

### loop

Repeats audio.

```html
<audio loop>
```

---

### muted

Starts muted.

```html
<audio muted>
```

---

### preload

```html
<audio preload="metadata">
```

Values

```text
none
metadata
auto
```

---

# 4. `<video>`

Embeds videos.

```html
<video controls>

<source src="movie.mp4">

</video>
```

---

## Common Attributes

```text
controls
autoplay
muted
loop
poster
preload
playsinline
```

---

### poster

Image before playback.

```html
<video

poster="thumbnail.jpg">
```

---

### playsinline

Important for mobile browsers.

```html
<video playsinline>
```

---

## React Example

```jsx
<video
controls
poster="/poster.png">
```

---

# 5. `<source>`

Defines multiple media sources.

Used inside

* picture
* audio
* video

---

## Video Example

```html
<video controls>

<source
src="video.mp4"
type="video/mp4">

<source
src="video.webm"
type="video/webm">

</video>
```

Browser chooses supported format.

---

# 6. `<iframe>`

Embeds another webpage.

Examples

* YouTube
* Google Maps
* Payment pages
* Dashboards

---

## Example

```html
<iframe

src="https://www.youtube.com/embed/xyz">

</iframe>
```

---

## Important Attributes

### src

Embedded page.

---

### title

Accessibility.

```html
<iframe

title="YouTube Video">
```

---

### loading

```html
loading="lazy"
```

---

### allowfullscreen

```html
allowfullscreen
```

---

### sandbox

Security.

```html
sandbox
```

Restricts iframe capabilities.

---

## React Usage

Very common for

* YouTube
* Vimeo
* Power BI
* Tableau
* Google Maps

---

## Security Consideration

Never embed unknown websites.

Always understand

```text
sandbox

allow

referrerPolicy
```

when working with third-party content.

---

# 7. `<svg>`

SVG = **Scalable Vector Graphics**

Vector graphics are made from mathematical paths.

They scale without losing quality.

---

## Example

```html
<svg
width="100"
height="100">

<circle

cx="50"

cy="50"

r="40"

fill="red"/>

</svg>
```

---

## Characteristics

✔ Infinite scaling

✔ Small file size

✔ CSS styling

✔ JavaScript manipulation

✔ Animation support

---

## React Example

```jsx
<svg>

<circle />

</svg>
```

---

## Common Uses

* Logos
* Icons
* Charts
* Loaders
* Graphs

---

## SVG Advantages

* Resolution independent
* Searchable in DOM
* Easy to animate
* CSS controllable

---

# 8. `<canvas>`

Canvas provides a drawing surface.

Unlike SVG,

Canvas draws pixels.

---

## Example

```html
<canvas

width="300"

height="150">

</canvas>
```

JavaScript

```javascript
const canvas = document.querySelector("canvas");

const ctx = canvas.getContext("2d");

ctx.fillRect(20,20,100,100);
```

---

## Characteristics

✔ Pixel based

✔ High performance

✔ Requires JavaScript

✔ Not editable after drawing

---

## Common Uses

* Games
* Image editors
* Whiteboards
* Charts
* Animations

---

# SVG vs Canvas

| SVG                                         | Canvas                  |
| ------------------------------------------- | ----------------------- |
| Vector                                      | Pixel                   |
| DOM elements                                | Drawing surface         |
| Easy CSS styling                            | JS drawing only         |
| Best for icons                              | Best for games          |
| Scales infinitely                           | May blur when scaled    |
| Easy event handling                         | Manual hit detection    |
| Lower performance with thousands of objects | Better for many objects |

---

## When to Choose

### SVG

* Logo
* Icon
* Charts
* Maps
* Diagrams

---

### Canvas

* Games
* Paint apps
* Particle animations
* Image processing
* High-frequency rendering

---

# Image Formats (Interview Bonus)

| Format | Best Use                                               |
| ------ | ------------------------------------------------------ |
| PNG    | Transparency                                           |
| JPEG   | Photos                                                 |
| WebP   | Modern web images                                      |
| AVIF   | Better compression than WebP                           |
| SVG    | Icons, logos                                           |
| GIF    | Simple animations (prefer video or CSS where possible) |

---

# Accessibility Best Practices

### Images

✔ Meaningful `alt`

```html
<img alt="Profile picture">
```

---

### Decorative Images

```html
<img

alt="">
```

Screen readers ignore it.

---

### Video

Provide

* captions
* subtitles
* transcripts when appropriate

---

### iframe

Always provide

```html
title
```

---

### Audio

Provide transcript when needed.

---

# Performance Best Practices

✔ Lazy load images

```html
loading="lazy"
```

---

✔ Specify width and height.

---

✔ Use WebP or AVIF when supported.

---

✔ Compress media.

---

✔ Use `<picture>` for responsive images.

---

✔ Don't autoplay videos with sound.

---

✔ Lazy-load iframes.

---

# Common Mistakes

❌ Missing `alt` attribute.

❌ Using large images without compression.

❌ Using PNG for photos instead of JPEG/WebP.

❌ Forgetting `loading="lazy"` on non-critical images.

❌ Using Canvas when SVG is more suitable.

❌ Missing `title` on iframes.

❌ Embedding untrusted websites without sandboxing.

❌ Autoplaying videos with audio (often blocked and poor UX).

---

# React-Specific Notes

* JSX uses the same media elements as HTML.
* Use imported assets or URLs for `src`.
* Manage media state (play, pause, mute) via React state or refs.
* Use `useRef` to control audio/video elements imperatively.
* Optimize images using your framework (e.g., Next.js `<Image />`) when available.

---

# Revision Notes

## Media Elements Cheat Sheet

| Element   | Purpose                |
| --------- | ---------------------- |
| `img`     | Display image          |
| `picture` | Responsive images      |
| `audio`   | Play audio             |
| `video`   | Play video             |
| `source`  | Multiple media sources |
| `iframe`  | Embed another webpage  |
| `svg`     | Vector graphics        |
| `canvas`  | Pixel drawing surface  |

---

## Important `<img>` Attributes

| Attribute  | Purpose              |
| ---------- | -------------------- |
| `src`      | Image URL            |
| `alt`      | Accessibility        |
| `width`    | Reserve layout space |
| `height`   | Reserve layout space |
| `loading`  | Lazy loading         |
| `decoding` | Async decoding       |

---

## Audio & Video Attributes

| Attribute     | Purpose                |
| ------------- | ---------------------- |
| `controls`    | Show controls          |
| `autoplay`    | Auto play              |
| `muted`       | Start muted            |
| `loop`        | Repeat                 |
| `poster`      | Video thumbnail        |
| `preload`     | Loading behavior       |
| `playsinline` | Mobile inline playback |

---

## iframe Attributes

| Attribute         | Purpose            |
| ----------------- | ------------------ |
| `src`             | Embedded page      |
| `title`           | Accessibility      |
| `loading`         | Lazy loading       |
| `sandbox`         | Security           |
| `allowfullscreen` | Fullscreen support |

---

## SVG vs Canvas Cheat Sheet

| Feature          | SVG           | Canvas         |
| ---------------- | ------------- | -------------- |
| Graphics         | Vector        | Pixel          |
| DOM-based        | ✅             | ❌              |
| CSS Styling      | ✅             | ❌              |
| Event Handling   | Easy          | Manual         |
| Infinite Scaling | ✅             | ❌              |
| Best For         | Icons, Charts | Games, Drawing |

---

## Image Format Cheat Sheet

| Format | Use Case         |
| ------ | ---------------- |
| PNG    | Transparency     |
| JPEG   | Photos           |
| WebP   | Modern web       |
| AVIF   | Best compression |
| SVG    | Logos & Icons    |

---

# Commonly Asked React Interview Questions (6 Years Experience)

### 1. What is the purpose of the `alt` attribute?

It provides alternative text for accessibility and is shown if the image cannot be loaded.

---

### 2. Why should `width` and `height` be specified on images?

To reserve layout space before the image loads, reducing **Cumulative Layout Shift (CLS)**.

---

### 3. What is the difference between `<img>` and `<picture>`?

* **`img`** displays a single image.
* **`picture`** lets the browser choose the most appropriate image based on screen size, format, or media queries.

---

### 4. What is the purpose of the `<source>` element?

It provides multiple media sources for `picture`, `audio`, or `video`, allowing the browser to choose the best supported option.

---

### 5. Why is `loading="lazy"` important?

It delays loading off-screen images or iframes until they are needed, improving page load performance.

---

### 6. What is the difference between SVG and Canvas?

* **SVG** is vector-based, DOM-backed, scalable, and ideal for icons and charts.
* **Canvas** is pixel-based, drawn with JavaScript, and better suited for games and high-performance animations.

---

### 7. When would you choose SVG over Canvas?

For logos, icons, charts, maps, and graphics that need to scale cleanly and be styled or interacted with individually.

---

### 8. When would you choose Canvas over SVG?

For games, paint applications, particle systems, image manipulation, and scenarios with thousands of rapidly changing objects.

---

### 9. How do you control a video or audio element in React?

Typically by attaching a `ref` with `useRef` and calling methods like `play()`, `pause()`, or reading properties such as `currentTime`.

---

### 10. What security concerns exist with iframes?

Embedding untrusted content can introduce security risks. Use attributes like `sandbox`, limit permissions with `allow`, provide a `title`, and only embed trusted sources.

---

### 11. What image format would you use for different scenarios?

* **JPEG:** Photos
* **PNG:** Images requiring transparency
* **WebP/AVIF:** Optimized web delivery
* **SVG:** Logos, icons, illustrations

---

### 12. How can you optimize images in a React application?

* Compress images.
* Prefer WebP/AVIF.
* Use responsive images with `<picture>`.
* Lazy-load non-critical images.
* Specify image dimensions.
* Use framework-specific optimizations (e.g., Next.js `<Image />`) when applicable.
