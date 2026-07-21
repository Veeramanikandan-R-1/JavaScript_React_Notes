# Lighthouse React Audit Notes

This file incorporates the Lighthouse section from `Graphql&PWA&Lighthouse.docx`.

---

# 1. What Lighthouse Is

Lighthouse is an automated audit tool that runs a page in Chrome and reports quality signals.

Common categories:

* Performance
* Accessibility
* Best Practices
* SEO
* PWA/installability checks

You can run it from Chrome DevTools, the CLI, or CI.

---

# 2. Important Metrics

| Metric | Meaning | Good target |
| ------ | ------- | ----------- |
| FCP | First Contentful Paint: first visible content | under 1.8s |
| LCP | Largest Contentful Paint: main content visible | under 2.5s |
| CLS | Cumulative Layout Shift: visual stability | under 0.1 |
| TBT | Total Blocking Time: main-thread blocking during load | under 200ms |
| Speed Index | How quickly content visually appears | under 3.4s |

Note: Core Web Vitals are user-centered metrics. Lighthouse is synthetic lab testing. Use both lab and real-user measurements when performance matters.

---

# 3. React-Specific Improvements

| Lighthouse area | React actions |
| ---------------- | ------------- |
| Performance | code-split routes, lazy-load heavy widgets, remove unused libraries, optimize images, reduce blocking JS |
| Accessibility | semantic HTML, labels, alt text, keyboard navigation, visible focus, contrast |
| SEO | title/meta tags, canonical URLs, semantic headings, server rendering where needed |
| PWA | manifest, service worker, HTTPS, offline fallback |
| Best Practices | no console errors, secure APIs, modern image formats, dependency hygiene |

---

# 4. How to Run

Chrome DevTools:

```text
Open page -> DevTools -> Lighthouse -> choose categories -> Analyze page load
```

CLI:

```powershell
npm install -g lighthouse
lighthouse https://your-app-url.com --view
```

CI:

```powershell
npm install --save-dev @lhci/cli
npx lhci autorun
```

---

# 5. Debug Workflow

1. Run Lighthouse on a production build.
2. Note the biggest failing category.
3. Open DevTools Performance trace for the same page.
4. Check bundle size and network waterfall.
5. Fix one bottleneck.
6. Rerun and compare.

Do not optimize randomly. Measure first.

---

# 6. Interview Questions

### Why use Lighthouse in React projects?

It quickly highlights performance, accessibility, SEO, best-practice, and PWA issues that affect user experience.

### How do you improve a poor performance score?

Reduce JavaScript, code-split routes, lazy-load non-critical components, optimize images/fonts, cache static assets, and remove expensive work from initial render.

### Lighthouse vs Core Web Vitals?

Lighthouse is a synthetic audit run in a controlled environment. Core Web Vitals represent user-centered performance metrics and can be collected from real users.

### How does Lighthouse help PWA checks?

It checks installability basics such as valid manifest, service worker behavior, HTTPS, and offline capability.

---

# 7. Source References

* Lighthouse overview: https://developer.chrome.com/docs/lighthouse/overview
* Lighthouse docs: https://developer.chrome.com/docs/lighthouse
* PWA manifest audit: https://developer.chrome.com/docs/lighthouse/pwa/installable-manifest

