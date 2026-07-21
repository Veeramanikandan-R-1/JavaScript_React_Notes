# Progressive Web Apps in React

This file incorporates the PWA section from `Graphql&PWA&Lighthouse.docx`.

---

# 1. What a PWA Is

A Progressive Web App is a web app that can progressively gain app-like capabilities:

* installable experience
* offline support
* fast repeat loads
* web app manifest
* service worker caching
* optional push notifications/background sync

React builds the UI. PWA behavior comes from browser APIs, the manifest, HTTPS, and service workers.

---

# 2. Core Pieces

| Piece | Purpose |
| ----- | ------- |
| HTTPS | Required for service workers outside `localhost`. |
| Web app manifest | Describes app name, icons, start URL, theme color, display mode. |
| Service worker | Background script that can intercept requests and serve cached responses. |
| Cache strategy | Decides app shell, static assets, API response, and offline behavior. |
| Lighthouse | Audits installability, offline behavior, performance, accessibility, and best practices. |

---

# 3. Manifest Example

```json
{
  "short_name": "MyPWA",
  "name": "My React Progressive Web App",
  "icons": [
    {
      "src": "icons/icon-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "icons/icon-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ],
  "start_url": ".",
  "display": "standalone",
  "theme_color": "#000000",
  "background_color": "#ffffff"
}
```

HTML:

```html
<link rel="manifest" href="/manifest.json">
<meta name="theme-color" content="#000000">
```

---

# 4. Simple Service Worker

```js
const CACHE_NAME = "app-shell-v1";
const URLS_TO_CACHE = ["/", "/index.html", "/manifest.json"];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(URLS_TO_CACHE))
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    })
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames
          .filter((cacheName) => cacheName !== CACHE_NAME)
          .map((cacheName) => caches.delete(cacheName))
      )
    )
  );
});
```

This is intentionally simple. Production service workers need versioning, update UX, runtime caching rules, and offline fallback behavior.

---

# 5. Registering a Service Worker

```js
export function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) return;

  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then((registration) => {
        console.log("Service worker registered", registration);
      })
      .catch((error) => {
        console.error("Service worker registration failed", error);
      });
  });
}
```

---

# 6. Vite PWA Option

```powershell
npm install vite-plugin-pwa --save-dev
```

```js
import { VitePWA } from "vite-plugin-pwa";

export default {
  plugins: [
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "My PWA",
        short_name: "PWA",
        icons: [
          { src: "pwa-192x192.png", sizes: "192x192", type: "image/png" },
          { src: "pwa-512x512.png", sizes: "512x512", type: "image/png" },
        ],
      },
    }),
  ],
};
```

---

# 7. Testing Checklist

* Serve over HTTPS or `localhost`.
* Run Lighthouse PWA audit.
* Disable network in DevTools and reload.
* Confirm the manifest loads.
* Confirm service worker is registered.
* Confirm offline fallback does not show a broken blank page.
* Test update behavior after deploying a new build.

---

# 8. Interview Questions

### What makes a web app progressive?

It starts as a normal web app and progressively adds capabilities like installability, offline support, caching, and push notifications when the browser supports them.

### What is the role of a service worker?

It runs separately from the page and can intercept network requests, serve cached resources, and support offline-first behavior.

### Can PWAs access native device features?

They can access supported web platform APIs such as camera, geolocation, notifications, and storage, but not every native capability is available on every platform.

### Why is HTTPS required?

Service workers can intercept requests, so browsers require a secure context to reduce the risk of tampering and abuse.

---

# 9. Source References

* PWA service workers: https://web.dev/learn/pwa/service-workers
* Web app manifest: https://web.dev/learn/pwa/web-app-manifest
* Lighthouse PWA manifest audit: https://developer.chrome.com/docs/lighthouse/pwa/installable-manifest

