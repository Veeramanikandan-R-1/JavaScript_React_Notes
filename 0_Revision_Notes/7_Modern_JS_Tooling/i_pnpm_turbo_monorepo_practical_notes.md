# PNPM and Turbo Monorepo Revision Notes

## Core Idea

PNPM manages workspace packages. Turbo coordinates tasks across those packages.

```text
pnpm = install and link packages
turbo = run build/dev/test in dependency-aware order
```

## Fast Checklist

* Check `packageManager` and `engines` before installing.
* Check `pnpm-workspace.yaml` to understand package boundaries.
* Check `turbo.json` to understand build/test/dev flow.
* Use `workspace:*` for local package dependencies.
* Keep package public APIs clean through entry files.
* Avoid hard-coded backend proxy targets in committed code.
* Cache build outputs, not long-running dev servers.

## Common Commands

```powershell
corepack enable
pnpm install
pnpm build
pnpm --filter app dev
pnpm --filter @acme/package build
pnpm --filter "./packages/**" test
```

## Interview Line

Turbo does not replace Vite, Webpack, or Rollup. It runs package scripts in the right order and caches repeatable outputs.

