# Revision Notes: Source Maps, Debugging, CI, and Frontend Delivery

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

### 1. What are source maps used for in production debugging?

They map minified bundle locations back to the original source files, making stack traces and DevTools debugging usable. They are most useful when tied to the exact release/commit that produced the deployed assets.

### 2. What are the security and operational tradeoffs of publishing source maps?

Public source maps can expose source structure and comments. Private upload to an error-monitoring tool gives debugging value while reducing exposure. The right choice depends on product risk and observability needs.

### 3. What should CI verify before deploying a frontend app?

Install from the lockfile, typecheck, lint, test, build, run key smoke or E2E checks, validate assets, and attach the release id/source maps. The pipeline should fail before deployment when the app cannot be built reproducibly.

### 4. How do you debug a bug that appears only after deployment?

Start from the release id, compare the deployed commit and lockfile, inspect production env values, reproduce with a production build locally, check source-mapped stack traces, and review CDN/cache behavior.

### 5. What delivery-pipeline issues do you flag in review?

Skipping lockfile installs, deploying without build/test evidence, source maps not matching releases, long-lived cached HTML, missing rollback plan, and CI scripts that differ from local package scripts without a reason.

---

# Quick Practice

1. Explain one realistic production use case for Source Maps, Debugging, CI, and Frontend Delivery in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.

---

# Added from `react_1.docx`

* Production builds remove development warnings, minify output, and enable dead-code removal.
* Modern tools enable production behavior through `npm run build`.
* Custom Webpack projects can use `mode: "production"`.
* Always test production build output, not only the dev server.
