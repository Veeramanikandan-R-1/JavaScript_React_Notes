# Revision Notes: Vite, Bundling, and Dev Server

* Modern frontend tooling improves feedback loops, compatibility, dependency management, and production builds.
* Tooling should serve the product; avoid complexity that the project does not need.
* A senior developer understands both dev-server convenience and production build consequences.
* Best practice: Keep scripts simple and documented.
* Best practice: Use lockfiles.
* Best practice: Run lint, tests, and builds in CI.
* Best practice: Audit dependency size and security before adding libraries.
* Avoid: Installing dependencies without understanding why.
* Avoid: Committing local secrets.
* Avoid: Assuming dev behavior equals production behavior.
* Avoid: Ignoring build warnings.

---

# Cheat Sheet

| Concept | Practical meaning |
| ------- | ----------------- |
| Package manager | Installs and resolves dependencies. |
| Bundler | Builds dependency graph into browser-ready assets. |
| Transpiler | Transforms source syntax. |
| Linter | Finds suspicious code patterns. |
| Build mode | Different configuration for development, test, staging, and production. |

---

# Interview Questions with Answers

### 1. Why can code work in the Vite dev server but fail after production build?

Development uses fast transforms and native ESM; production bundles, minifies, tree-shakes, hashes assets, and applies different environment modes. Bugs often come from env variables, dynamic imports, asset paths, side effects, or browser-target differences.

### 2. What is HMR, and what bugs can it hide?

Hot Module Replacement updates changed modules without a full reload. It can hide initialization, cleanup, and full-page-load bugs because state may survive in development when it would be recreated in production.

### 3. What is code splitting?

Code splitting breaks the app into chunks that can load on demand. It helps initial load when route, feature, or heavy-library code is not needed immediately, but it adds loading states and failure cases for chunk loading.

### 4. How do you inspect whether a dependency is hurting bundle size?

Build the app, inspect generated chunks with a bundle analyzer or visualizer, check whether imports are tree-shaken, and look for duplicate packages or accidentally importing a whole library for one function.

### 5. What build-tooling changes do you review carefully?

Changes to aliases, env loading, output paths, plugin order, chunking, browser targets, polyfills, and dev server proxy settings because they can change both local behavior and deployed assets.

---

# Quick Practice

1. Explain one realistic production use case for Vite, Bundling, and Dev Server in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
