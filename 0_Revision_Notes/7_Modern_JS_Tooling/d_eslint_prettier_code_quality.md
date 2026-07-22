# Revision Notes: ESLint, Prettier, and Code Quality

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

# Quick Practice

1. Explain one realistic production use case for ESLint, Prettier, and Code Quality in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
