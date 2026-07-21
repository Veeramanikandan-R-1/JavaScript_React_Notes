# PNPM and Turbo Monorepo Practical Notes

These notes come from studying a real enterprise UI monorepo pattern and generalizing the useful parts for future projects.

---

# 1. Why Teams Use a Monorepo

A monorepo keeps multiple related apps and packages in one Git repository.

Common frontend examples:

* one shell app plus many feature packages
* shared UI components plus product apps
* shared HTTP client, auth helpers, and state utilities
* multiple micro frontend packages built and deployed together
* mock servers and documentation beside the app code

The benefit is not "one repo is always better." The benefit is that shared contracts can be changed, tested, and versioned together.

---

# 2. Practical Folder Shape

```text
repo/
  app/
    package.json
    src/
  packages/
    ui/
    http-client/
    services/
    feature-a/
    feature-b/
  mock-servers/
  docs/
  package.json
  pnpm-workspace.yaml
  turbo.json
```

What each part means:

| Area | Responsibility |
| ---- | -------------- |
| `app/` | Main application or app shell. |
| `packages/ui` | Shared components, tokens, or wrappers. |
| `packages/http-client` | Shared API client and request/response interceptors. |
| `packages/services` | Navigation, session, telemetry, page utilities. |
| `packages/feature-*` | Independently owned business features or MFEs. |
| `mock-servers` | Local development API simulation. |
| `turbo.json` | Task graph for build, dev, test, and caching. |
| `pnpm-workspace.yaml` | Declares which folders are workspace packages. |

---

# 3. PNPM Workspace Basics

`pnpm-workspace.yaml` tells PNPM which folders are packages:

```yaml
packages:
  - app
  - packages/**
```

Useful commands:

```powershell
corepack enable
pnpm install
pnpm --filter app dev
pnpm --filter @acme/http-client build
pnpm --filter "./packages/**" test
```

Senior habit: do not run random package-manager commands until you check the lockfile and `packageManager` field.

```json
{
  "packageManager": "pnpm@10.x",
  "engines": {
    "node": ">=22"
  }
}
```

This tells you the expected Node and PNPM versions before you debug install issues.

---

# 4. Turbo Task Graph

Turbo is useful when many packages depend on each other.

Example mental model:

```json
{
  "tasks": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": ["dist/**"]
    },
    "dev": {
      "dependsOn": ["^build"],
      "persistent": true,
      "cache": false
    }
  }
}
```

Meaning:

| Config | Meaning |
| ------ | ------- |
| `dependsOn: ["^build"]` | Build dependencies before building the current package. |
| `outputs: ["dist/**"]` | Cache build artifacts from this folder. |
| `persistent: true` | This task keeps running, like a dev server or watcher. |
| `cache: false` | Do not cache tasks whose result is not a static artifact. |

Good interview wording:

> Turbo does not replace the bundler. It coordinates package scripts across the monorepo and caches repeatable outputs.

---

# 5. Workspace Dependency Pattern

Inside packages, you may see dependencies on other workspace packages.

```json
{
  "dependencies": {
    "@acme/services": "workspace:*",
    "@acme/http-client": "workspace:*"
  }
}
```

This means:

* use the local workspace version during development
* avoid publishing and reinstalling for every internal change
* make cross-package changes easier to test in one PR

Common mistake: importing from a package's `src` path directly.

Prefer:

```js
import { httpClient } from "@acme/http-client";
```

Avoid:

```js
import { httpClient } from "../../http-client/src";
```

The package public API should be clear and intentional.

---

# 6. Local Development Flow

Typical workflow:

```powershell
corepack enable
pnpm install
pnpm build
pnpm --filter app dev
```

For one feature package:

```powershell
pnpm --filter @acme/feature-traffic dev
```

For debugging a shared package:

```powershell
pnpm --filter @acme/http-client build --watch
pnpm --filter app dev
```

Senior habit: when the app behaves differently from the package you edited, check whether the package is being consumed from `dist`, source, or a dev server.

---

# 7. What to Check in a Monorepo

When you join a large frontend repo, inspect in this order:

1. Root `package.json`: package manager, Node version, top-level scripts.
2. `pnpm-workspace.yaml`: package boundaries.
3. `turbo.json`: build order and cached outputs.
4. App package: framework, dev server, proxy, environment variables.
5. Shared packages: HTTP client, auth/session utilities, design system, state tools.
6. Feature packages: routing contract, exposed modules, tests.
7. CI files: what actually runs before merge.

This avoids the common beginner mistake of opening random components first and missing the system shape.

---

# 8. Common Production Risks

| Risk | Practical fix |
| ---- | ------------- |
| Different Node versions across machines | Commit `packageManager`, `engines`, and use Corepack. |
| Build order bugs | Model dependencies in Turbo instead of relying on manual script order. |
| Package boundary leaks | Export from package entry files and avoid deep relative imports. |
| Slow CI | Cache deterministic build outputs and test only affected packages where safe. |
| Dev proxy points to hard-coded backend | Use environment variables and safe local defaults. |
| Package script drift | Keep common script names: `build`, `dev`, `test`, `lint`. |

---

# 9. Interview Questions

### What problem does PNPM solve in a monorepo?

PNPM manages workspace packages, installs dependencies efficiently, and uses a strict dependency model so packages cannot accidentally rely on undeclared dependencies.

### What problem does Turbo solve?

Turbo coordinates scripts across packages, understands package dependency order, and caches repeatable task outputs such as builds.

### Why should dev tasks usually disable cache?

Dev tasks are long-running watchers or servers. Their value is the running process, not a reusable static output.

### How do you debug a failing monorepo build?

Check the package-manager version, lockfile, root scripts, Turbo task graph, the failed package's script, package dependency order, and whether generated `dist` files are stale.

---

# Senior Takeaway

A monorepo is a coordination tool. The senior skill is seeing package boundaries clearly: what is shared, what is app-specific, what can be independently built, and what must remain a stable public contract.

