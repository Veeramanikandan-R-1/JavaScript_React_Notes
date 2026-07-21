# PWA React Revision

PWA pieces:

* HTTPS
* web app manifest
* service worker
* cache strategy
* offline fallback
* installability

Service worker role:

```text
intercepts requests -> can serve cache -> can fall back to network -> can support offline UX
```

Interview answers:

* React builds the UI; PWA behavior comes from browser APIs.
* Service workers require HTTPS except on localhost.
* Manifest describes name, icons, theme color, start URL, and display mode.
* Test using DevTools Application tab, offline mode, and Lighthouse.

