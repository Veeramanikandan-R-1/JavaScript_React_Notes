# npm vs Yarn: Package Manager Practical Notes

This file incorporates `npm & yarn differences.docx` and updates the interview notes with modern package-manager wording.

---

# 1. What They Are

| Tool | Practical meaning |
| ---- | ----------------- |
| `npm` | Default package manager that ships with Node.js. It installs packages, runs scripts, manages lockfiles, and publishes packages. |
| Yarn | Alternative package manager originally created to improve install speed, consistency, caching, and workspace workflows. Modern Yarn also supports Plug'n'Play. |

Both use `package.json` as the project contract.

---

# 2. Daily Commands

| Task | npm | Yarn |
| ---- | --- | ---- |
| Initialize project | `npm init` | `yarn init` |
| Install all dependencies | `npm install` | `yarn install` |
| Install dependency | `npm install axios` | `yarn add axios` |
| Install dev dependency | `npm install axios --save-dev` | `yarn add axios --dev` |
| Remove package | `npm uninstall axios` | `yarn remove axios` |
| Update package | `npm update axios` | `yarn upgrade axios` |
| Run script | `npm run dev` | `yarn dev` |
| Global install | `npm install -g nodemon` | `yarn global add nodemon` |

Interview note: avoid global installs for project tools when possible. Prefer local dev dependencies and scripts so every teammate and CI use the same version.

---

# 3. Lockfiles

| Tool | Lockfile | Why it matters |
| ---- | -------- | -------------- |
| npm | `package-lock.json` | Pins the resolved dependency graph for repeatable installs. |
| Yarn | `yarn.lock` | Pins the resolved dependency graph for repeatable installs. |

Commit exactly one lockfile for an app. Mixing package managers usually creates confusing diffs and "works on my machine" bugs.

For CI with npm, prefer:

```powershell
npm ci
```

`npm ci` installs from the lockfile and fails when `package.json` and the lockfile disagree. That is better for automation than quietly rewriting the lockfile.

---

# 4. Speed, Caching, and Determinism

Older interview notes often say "Yarn is faster and npm is sequential." Treat that as historical context, not a fixed modern rule.

Practical answer:

* Yarn became popular because early npm had weaker performance and consistency.
* npm improved a lot after lockfiles, workspaces, and better installer behavior.
* Modern npm and Yarn are both mature enough for real projects.
* Pick based on the repo standard, lockfile, CI setup, workspace needs, and team familiarity.

---

# 5. Workspaces and Monorepos

Workspaces let one repo manage multiple packages.

Use cases:

* app + shared UI package
* design system + docs site
* micro frontend packages
* shared utilities across apps

Both npm and Yarn support workspaces. Yarn had strong early workspace support; npm added workspace support later.

---

# 6. Yarn Plug'n'Play

Yarn Plug'n'Play can remove the traditional `node_modules` folder and resolve packages through Yarn-managed metadata.

Why teams consider it:

* stricter dependency boundaries
* faster installs in some setups
* fewer huge `node_modules` trees

Practical caution: verify editor, framework, test runner, bundler, and deployment compatibility before enabling PnP in an existing project.

---

# 7. Which One Should I Use?

| Project situation | Good choice |
| ----------------- | ----------- |
| Simple Node or React app | npm is simple because it comes with Node. |
| Existing repo with `package-lock.json` | npm, unless the team migrates deliberately. |
| Existing repo with `yarn.lock` | Yarn, unless the team migrates deliberately. |
| Monorepo already standardized on Yarn | Yarn. |
| CI/CD automation | Either, but use a deterministic install command and commit the lockfile. |
| Need Plug'n'Play | Yarn modern releases. |

Senior answer: the best package manager is the one the repo can run repeatably in local development, CI, and production builds.

---

# 8. Interview Highlights

* `npm` comes with Node.js.
* Yarn was created to improve earlier dependency-install pain points.
* Both read `package.json`.
* Both use lockfiles for repeatable installs.
* Yarn can use Plug'n'Play.
* npm has `npm ci` for clean CI installs.
* Do not mix package managers casually in the same repo.

---

# 9. Source References

* npm package-lock docs: https://docs.npmjs.com/cli/v9/configuring-npm/package-lock-json/
* npm install docs: https://docs.npmjs.com/cli/v9/commands/npm-install/
* npm ci docs: https://docs.npmjs.com/cli/v9/commands/npm-ci/
* Yarn Plug'n'Play docs: https://yarnpkg.com/features/pnp

