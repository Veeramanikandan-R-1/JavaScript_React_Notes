# ESLint, Prettier, and Code Quality (Senior Frontend Engineer Perspective)

Before going deeper into frameworks or libraries, understand this topic as part of real frontend engineering: automated guardrails for readable code.

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
export default [
  {
    files: ["**/*.{js,jsx}"],
    rules: {
      "no-unused-vars": "error",
      "react-hooks/exhaustive-deps": "warn",
    },
  },
];
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

* ESLint, Prettier, and Code Quality matters because it affects real users, future maintainers, and production behavior.
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

### 1. What is the difference between ESLint and Prettier?

ESLint finds code-quality, correctness, and consistency issues using rules. Prettier formats code layout automatically. They overlap less when Prettier owns formatting and ESLint owns suspicious code patterns.

### 2. What lint rules are especially valuable in React/frontend projects?

Rules for hooks dependencies, unused variables, accessibility, imports, no-floating-promises where TypeScript supports it, no accidental globals, and team-specific boundaries such as feature import rules.

### 3. When would you disable a lint rule?

Only when the rule is wrong for the specific case and the exception is documented. A broad config disable should require a team decision because it changes the quality bar for everyone.

### 4. How do linting and formatting fit into CI?

CI should run install, typecheck, lint, tests, and build in a deterministic environment. Formatting can be checked in CI, but most teams also run it pre-commit or in the editor to keep feedback fast.

### 5. What code-quality tooling issues do you flag in review?

Disabling rules to merge faster, adding format-only churn with logic changes, inconsistent local/CI scripts, missing accessibility linting, and custom rules that create noise without catching real problems.

---

# Hands-on Exercises

## Exercise 1

Build a small example that demonstrates ESLint, Prettier, and Code Quality.

### Solution

Keep the example focused, include one realistic edge case, and explain what the browser or React is doing internally.

## Exercise 2

List three production mistakes related to ESLint, Prettier, and Code Quality.

### Solution

Use the Common Mistakes section, then add how you would prevent each mistake in code review.

---

# Senior Frontend Engineer Takeaway

For senior-level work, ESLint, Prettier, and Code Quality is not only a syntax topic. You should be able to explain the mental model, choose the right pattern for a product requirement, identify common failure modes, and verify behavior through tooling, tests, and browser inspection.
