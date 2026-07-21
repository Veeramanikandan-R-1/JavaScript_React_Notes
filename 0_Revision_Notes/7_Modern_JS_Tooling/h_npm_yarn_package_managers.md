# npm vs Yarn Revision

* `npm` ships with Node.js; Yarn is an alternative package manager.
* Both use `package.json`.
* npm lockfile: `package-lock.json`.
* Yarn lockfile: `yarn.lock`.
* Commit one lockfile and use the matching package manager in CI.
* For npm CI pipelines, prefer `npm ci` because it installs from the lockfile and fails when the lockfile is out of sync.
* Yarn Plug'n'Play can avoid `node_modules`, but verify tooling compatibility before adopting it.

Command memory:

```powershell
npm install
npm install axios
npm install axios --save-dev
npm uninstall axios
npm run dev
npm ci

yarn install
yarn add axios
yarn add axios --dev
yarn remove axios
yarn dev
```

Interview answer: modern npm and Yarn are both mature. Choose based on repo standard, lockfile, CI, workspace needs, and team familiarity.

