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

### 1. Why does Source map matter in Source Maps, Debugging, CI, and Frontend Delivery?

Source map means A mapping from bundled code back to original source files. In interviews, connect it to Source Maps, Debugging, CI, and Frontend Delivery by explaining the concrete UI behavior, failure state, and tradeoff.

### 2. How does Minified stack trace affect the implementation?

Minified stack trace means A production error trace that needs mapping to be readable. Implementation depends on ownership, lifecycle, and edge cases, not only naming the API.

### 3. What mistake should you avoid around skipping real edge cases?

Avoid skipping real edge cases. Prefer the simplest reliable approach and verify it with a small example.

### 4. How would you debug a production issue related to Source Maps, Debugging, CI, and Frontend Delivery?

Reproduce the issue, inspect the relevant state or DOM, and reduce it to a small failing case. Check edge cases, browser behavior, and tests before changing the implementation.

### 5. What would you check in code review for Source Maps, Debugging, CI, and Frontend Delivery?

Check correctness, edge cases, readability, accessibility, performance, and test coverage. Confirm the chosen approach matches the problem and does not add unnecessary complexity.

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
