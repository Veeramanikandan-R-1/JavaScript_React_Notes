# Revision Notes: Environment Variables and Build Modes

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

# Quick Practice

1. Explain one realistic production use case for Environment Variables and Build Modes in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
