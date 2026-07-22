# npm, package.json, and SemVer (Senior Frontend Engineer Perspective)

Before going deeper into frameworks or libraries, understand this topic as part of real frontend engineering: dependency management for frontend projects.

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

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "test": "vitest",
    "lint": "eslint ."
  },
  "dependencies": {
    "@vitejs/plugin-react": "^5.0.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0"
  },
  "devDependencies": {
    "vite": "^7.0.0",
    "vitest": "^3.0.0"
  }
}
```

---

# 7. Real-world Scenarios

* Debugging a production-only build issue.
* Adding a dependency and checking bundle impact.
* Configuring separate API URLs for local and staging environments.

---

# 7.1 `npm` vs `npx`

| Tool | Use |
| ---- | --- |
| `npm` | Install packages, manage scripts, publish packages |
| `npx` | Execute a package binary without manually installing it globally |

```powershell
npm install
npm run dev
npm install react-router-dom

npm create vite@latest my-app -- --template react
npx eslint .
```

Modern note: many package managers can run package binaries. In npm scripts, local binaries from `node_modules/.bin` are available automatically.

## React Project Setup Note

Old notes often use Create React App:

```powershell
npx create-react-app my-app
```

Treat CRA as legacy for new projects. React's official docs announced Create React App deprecation for new apps on February 14, 2025 and point new custom setups toward tools such as Vite, Parcel, or Rsbuild.

Practical modern setup:

```powershell
npm create vite@latest my-app -- --template react
cd my-app
npm install
npm run dev
```

Use CRA knowledge for maintaining older projects, but practice Vite/framework setups for current interviews and new work.

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

* npm, package.json, and SemVer matters because it affects real users, future maintainers, and production behavior.
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

### 1. What is the difference between `dependencies` and `devDependencies`?

`dependencies` are needed by the app/package at runtime or by consumers. `devDependencies` are needed to develop, test, lint, build, or type-check. For a frontend app, the final bundle can still include code from dependencies if it is imported.

### 2. What does `^1.2.3` mean in SemVer?

It allows compatible minor and patch updates up to, but not including, `2.0.0`. That can still introduce regressions, so lockfiles and CI are important for deterministic installs.

### 3. Why should you review a new dependency carefully?

Dependencies add bundle size, supply-chain risk, maintenance burden, transitive dependencies, licensing questions, and upgrade work. I ask whether the package is mature, actively maintained, tree-shakable, typed, and genuinely worth the cost.

### 4. How do lockfiles help production stability?

They pin the exact resolved dependency tree so installs are repeatable across machines and CI. If production changed after an install, comparing lockfile diffs is one of the first debugging steps.

### 5. What package.json changes do you flag in review?

Unnecessary dependencies, broad script changes, unpinned tool assumptions, lifecycle scripts, package upgrades with no test evidence, duplicate libraries, and dependencies that should be dev-only.

---

# Hands-on Exercises

## Exercise 1

Build a small example that demonstrates npm, package.json, and SemVer.

### Solution

Keep the example focused, include one realistic edge case, and explain what the browser or React is doing internally.

## Exercise 2

List three production mistakes related to npm, package.json, and SemVer.

### Solution

Use the Common Mistakes section, then add how you would prevent each mistake in code review.

---

# Senior Frontend Engineer Takeaway

For senior-level work, npm, package.json, and SemVer is not only a syntax topic. You should be able to explain the mental model, choose the right pattern for a product requirement, identify common failure modes, and verify behavior through tooling, tests, and browser inspection.

Related practical note: [npm vs Yarn Package Managers](./h_npm_yarn_package_managers.md).
