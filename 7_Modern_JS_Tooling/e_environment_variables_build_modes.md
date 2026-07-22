# Environment Variables and Build Modes (Senior Frontend Engineer Perspective)

Before going deeper into frameworks or libraries, understand this topic as part of real frontend engineering: configuration across local, staging, and production builds.

---

# 1. Fundamentals

* Modern frontend tooling improves feedback loops, compatibility, dependency management, and production builds.
* Tooling should serve the product; avoid complexity that the project does not need.
* A senior developer understands both dev-server convenience and production build consequences.

---

# 2. Core Concepts

| Concept | Practical meaning |
| ------- | ----------------- |
| Package manager | Installs and resolves dependencies. |
| Bundler | Builds dependency graph into browser-ready assets. |
| Transpiler | Transforms source syntax. |
| Linter | Finds suspicious code patterns. |
| Build mode | Different configuration for development, test, staging, and production. |

---

# 3. Internal Working

* A bundler follows imports, transforms files, splits chunks, rewrites asset URLs, and emits optimized production files.
* Development servers optimize feedback speed with module replacement and source maps.
* Lockfiles pin dependency resolution so CI and teammates install the same graph.

---

# 4. Common Mistakes

* Installing dependencies without understanding why.
* Committing local secrets.
* Assuming dev behavior equals production behavior.
* Ignoring build warnings.

---

# 5. Best Practices

* Keep scripts simple and documented.
* Use lockfiles.
* Run lint, tests, and builds in CI.
* Audit dependency size and security before adding libraries.

---

# 6. Code Example

```js
const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

if (!apiBaseUrl) {
  throw new Error("Missing VITE_API_BASE_URL");
}

export const config = {
  apiBaseUrl,
  mode: import.meta.env.MODE,
};
```

---

# 7. Real-world Scenarios

* Debugging a production-only build issue.
* Adding a dependency and checking bundle impact.
* Configuring separate API URLs for local and staging environments.

---

# 8. Senior Deep Dive

## When to Use

* Use tooling that the team can understand, run locally, and support in CI.
* Use Vite or a similar fast tool for modern React apps unless the codebase already has a mature setup.
* Use TypeScript, linting, formatting, and tests as guardrails, not ceremony.

## Debug Checklist

* Compare dev and production builds.
* Inspect lockfiles, dependency versions, environment variables, and generated bundle output.
* Use source maps to connect runtime errors back to source.

## Code Review Checklist

* Are scripts documented and deterministic?
* Are secrets kept out of frontend bundles?
* Does CI run install, lint, test, and build checks?


---

# Revision Notes

* Environment Variables and Build Modes matters because it affects real users, future maintainers, and production behavior.
* Learn the mental model before memorizing syntax.
* Use browser DevTools, tests, and small examples to verify behavior.
* Modern frontend tooling improves feedback loops, compatibility, dependency management, and production builds.
* Tooling should serve the product; avoid complexity that the project does not need.
* A senior developer understands both dev-server convenience and production build consequences.

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

### 1. Why are frontend environment variables not secret?

Values embedded into client JavaScript can be viewed by users in the built assets or network behavior. Frontend env vars are configuration, not secret storage; secrets belong on the server.

### 2. What can differ between development, staging, and production builds?

API base URLs, feature flags, analytics keys, logging behavior, source map settings, minification, browser targets, and security headers. These differences are why production-like testing matters.

### 3. How do build-time env vars differ from runtime config?

Build-time vars are baked into the generated files and require a rebuild to change. Runtime config is loaded by the deployed app, often from an endpoint or injected file, and can change without rebuilding the bundle.

### 4. How would you debug a wrong API URL in production?

Inspect the built JavaScript or runtime config, check CI/deployment variables, verify the mode used by the build command, compare staging and production values, and confirm the network request in DevTools.

### 5. What env/config issues do you flag in review?

Secrets in client variables, inconsistent naming, missing defaults, config read at module load when it should be runtime, feature flags without cleanup plans, and build commands that use the wrong mode.

---

# Hands-on Exercises

## Exercise 1

Build a small example that demonstrates Environment Variables and Build Modes.

### Solution

Keep the example focused, include one realistic edge case, and explain what the browser or React is doing internally.

## Exercise 2

List three production mistakes related to Environment Variables and Build Modes.

### Solution

Use the Common Mistakes section, then add how you would prevent each mistake in code review.

---

# Senior Frontend Engineer Takeaway

For senior-level work, Environment Variables and Build Modes is not only a syntax topic. You should be able to explain the mental model, choose the right pattern for a product requirement, identify common failure modes, and verify behavior through tooling, tests, and browser inspection.
