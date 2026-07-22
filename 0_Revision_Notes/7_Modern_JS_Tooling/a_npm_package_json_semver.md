# Revision Notes: npm, package.json, and SemVer

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

# Quick Practice

1. Explain one realistic production use case for npm, package.json, and SemVer in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.

---

# Added from `react_1.docx`

* `npm` installs packages, manages scripts, and publishes packages.
* `npx` executes package binaries without a global install.
* Local package binaries are available automatically inside npm scripts.
