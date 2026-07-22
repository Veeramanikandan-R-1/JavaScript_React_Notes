# Revision Notes: Babel, TypeScript, and Transpilation

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
* Babel transpiles syntax such as JSX and modern JavaScript.
* Webpack bundles modules and assets into deployable files.
* Babel can be used inside Webpack through `babel-loader`.
* Build flow: entry file -> dependency graph -> Babel transform -> optimized bundle -> browser.

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

# TypeScript React Practice

Focus on:

* `type`
* `interface`
* Generics
* Typing props
* Typing state
* Typing form/input/click events
* Replacing `any`
* Converting existing React projects to TypeScript

Example:

```ts
type ApiState<T> =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; data: T }
  | { status: "error"; error: Error };
```

---

# Interview Questions with Answers

### 1. What is the difference between transpilation and type checking?

Transpilation changes source syntax into runnable JavaScript for target browsers or runtimes. Type checking analyzes TypeScript for type errors but does not change runtime behavior. Many toolchains do these as separate steps.

### 2. Why can TypeScript pass but the app still fail at runtime?

Types can be wrong at boundaries such as APIs, local storage, URL params, feature flags, and third-party scripts. TypeScript does not validate runtime data unless you add parsing or schema validation.

### 3. When do you need Babel in a modern frontend stack?

You may need Babel for JSX transforms, syntax transforms, plugins, legacy browser support, or specific framework/tooling requirements. Some stacks use esbuild or SWC for speed, so the answer should match the project setup.

### 4. How do browser targets affect output code?

Targets decide which syntax must be transformed and which polyfills may be needed. A modern-only target can ship smaller code, while supporting older browsers may require transforms that change performance and bundle size.

### 5. What TypeScript/tooling issues do you flag in review?

Unchecked `any`, unsafe assertions, disabled type errors, inconsistent build/typecheck scripts, runtime data trusted without validation, and transpiler changes without verifying the production build.

---

# Quick Practice

1. Explain one realistic production use case for Babel, TypeScript, and Transpilation in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
