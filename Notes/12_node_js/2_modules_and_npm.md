# Node.js Modules & NPM — Quick Interview Notes

I'll keep each topic **short but complete enough for interview revision**, including the important points you shouldn't skip.

---

## 1. CommonJS (CJS)

CommonJS is the **traditional Node.js module system**.

Uses:

```js
const express = require("express");
```

Export:

```js
module.exports = myFunction;
```

Import:

```js
const myFunction = require("./myFunction");
```

### Important points

* Uses `require()`
* Uses `module.exports` / `exports`
* Modules are generally loaded **synchronously**
* Very common in older Node.js projects
* File extension `.cjs` explicitly indicates CommonJS

---

## 2. ES Modules (ESM)

ES Modules are the **standard JavaScript module system**.

Import:

```js
import express from "express";
```

Export:

```js
export default myFunction;
```

or:

```js
export { myFunction };
```

### Important points

* Uses `import` / `export`
* Standard JavaScript module system
* Modern Node.js supports ESM
* `.mjs` explicitly indicates ESM
* `"type": "module"` in `package.json` makes `.js` files ESM

Example:

```json
{
  "type": "module"
}
```

---

# 3. `require` vs `import`

| `require`                   | `import`                        |
| --------------------------- | ------------------------------- |
| CommonJS                    | ES Modules                      |
| `require()`                 | `import`                        |
| Traditional Node.js         | Modern JS standard              |
| Usually synchronous loading | Supports static/dynamic imports |
| Common in older projects    | Preferred in modern projects    |

Example:

```js
// CommonJS
const express = require("express");

// ESM
import express from "express";
```

### Interview point

Don't say "`require` is synchronous and `import` is asynchronous" as a blanket rule. The module systems have different loading/linking semantics; **dynamic `import()` is asynchronous**.

---

# 4. `module.exports` vs `export`

### CommonJS

```js
// math.js
function add(a, b) {
  return a + b;
}

module.exports = add;
```

```js
const add = require("./math");
```

### ES Modules

```js
// math.js
export function add(a, b) {
  return a + b;
}
```

```js
import { add } from "./math.js";
```

### Default export

```js
export default add;
```

```js
import add from "./math.js";
```

### Important

Don't confuse:

```js
module.exports
```

with:

```js
exports
```

`exports` initially references `module.exports`, but reassigning `exports` doesn't change what the module exports:

```js
exports.add = add;        // ✅
module.exports = add;     // ✅
exports = add;            // ❌ doesn't replace module.exports
```

---

# 5. Built-in Modules

Node.js provides modules without needing to install them using npm.

Common examples:

```text
fs       → File system
path     → File/directory paths
http     → HTTP server/client
events   → Event handling
crypto   → Cryptography
os       → Operating system information
url      → URL handling
stream   → Streaming data
util     → Utility functions
buffer   → Binary data
```

Example:

```js
const fs = require("fs");
```

or:

```js
import fs from "node:fs";
```

Modern Node.js commonly uses the `node:` prefix:

```js
import path from "node:path";
```

---

# 6. `fs` — File System

The `fs` module allows Node.js to interact with files and directories.

Common operations:

```text
read
write
append
delete
rename
create directory
```

Example:

```js
import fs from "node:fs";

fs.readFile("data.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
```

### Important

Node provides:

* Synchronous APIs → `readFileSync()`
* Asynchronous APIs → `readFile()`
* Promise-based APIs → `fs/promises`

Prefer asynchronous APIs in server applications so you don't unnecessarily block the main JavaScript thread.

---

# 7. `path`

The `path` module helps safely work with file and directory paths.

Common methods:

```js
path.join()
path.resolve()
path.basename()
path.dirname()
path.extname()
```

Example:

```js
import path from "node:path";

const filePath = path.join("uploads", "image.png");

console.log(filePath);
```

### `join()` vs `resolve()`

```js
path.join("users", "data");
```

→ combines path segments.

```js
path.resolve("users", "data");
```

→ creates an absolute path based on the current working directory.

### Interview point

Use `path` instead of manually concatenating paths because it handles platform-specific path separators.

---

# 8. `http`

The `http` module allows Node.js to create HTTP servers without Express.

Example:

```js
import http from "node:http";

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "application/json"
  });

  res.end(JSON.stringify({ message: "Hello" }));
});

server.listen(3000);
```

Express itself is built on top of Node's HTTP capabilities.

```text
Express
   ↓
Node HTTP
   ↓
Network
```

### Important concepts

* Request
* Response
* HTTP method
* URL
* Headers
* Status code
* Server
* Port

---

# 9. `events`

Node.js has an **EventEmitter** system for creating and handling events.

Example:

```js
import { EventEmitter } from "node:events";

const emitter = new EventEmitter();

emitter.on("login", (user) => {
  console.log(`${user} logged in`);
});

emitter.emit("login", "John");
```

Important methods:

```text
on()       → listen to event
emit()     → trigger event
once()     → execute listener once
off()      → remove listener
```

### Why useful?

Used for event-driven programming and internally in many Node.js APIs.

---

# 10. `crypto`

The `crypto` module provides cryptographic functionality.

Used for:

* Hashing
* Encryption/decryption
* Generating random values
* Digital signatures
* Tokens/secrets

Example:

```js
import crypto from "node:crypto";

const token = crypto.randomBytes(32).toString("hex");

console.log(token);
```

### Important interview distinction

**Hashing ≠ encryption**

Hashing:

```text
Password → Hash
```

One-way operation.

Encryption:

```text
Data → Encrypted data → Original data
```

Can be decrypted with the appropriate key.

For password storage, normally use a password-hashing algorithm/library such as **bcrypt/Argon2**, not reversible encryption.

---

# 11. `os`

The `os` module provides information about the operating system.

Example:

```js
import os from "node:os";

console.log(os.platform());
console.log(os.cpus());
console.log(os.totalmem());
console.log(os.freemem());
```

Common methods:

```text
os.platform()
os.arch()
os.cpus()
os.totalmem()
os.freemem()
os.hostname()
os.homedir()
```

Useful for system information and diagnostics.

---

# 12. `package.json` ⭐

`package.json` is the **configuration/metadata file of a Node.js project**.

Example:

```json
{
  "name": "my-app",
  "version": "1.0.0",
  "scripts": {
    "start": "node server.js",
    "test": "jest"
  },
  "dependencies": {
    "express": "^5.1.0"
  },
  "devDependencies": {
    "jest": "^30.0.0"
  }
}
```

Important fields:

```text
name
version
scripts
dependencies
devDependencies
type
main
exports
engines
```

### `type`

```json
"type": "module"
```

Makes `.js` files use ES Modules by default.

Without it, Node commonly treats `.js` as CommonJS unless other configuration indicates otherwise.

---

# 13. npm

**npm = Node Package Manager.**

Used to:

* Install packages
* Remove packages
* Update packages
* Manage dependencies
* Run scripts
* Publish packages

Examples:

```bash
npm install express
```

```bash
npm install
```

```bash
npm uninstall express
```

```bash
npm update
```

```bash
npm run start
```

### `npm install` vs `npm ci`

```bash
npm install
```

Installs dependencies and may update `package-lock.json`.

```bash
npm ci
```

Designed for clean/reproducible CI installations using the lock file.

---

# 14. `dependencies` vs `devDependencies`

### dependencies

Packages required for the application to **run in production**.

Example:

```json
"dependencies": {
  "express": "^5.1.0"
}
```

### devDependencies

Packages needed mainly for **development/testing/building**.

Example:

```json
"devDependencies": {
  "jest": "^30.0.0",
  "eslint": "^9.0.0"
}
```

Install:

```bash
npm install express
```

→ dependency

```bash
npm install -D jest
```

→ devDependency

### Interview question

> Is a devDependency available during development?

**Yes.** It means it is categorized as a development dependency; it isn't intended to be required to run the production application.

---

# 15. npm Scripts

Scripts allow you to define reusable commands inside `package.json`.

```json
{
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js",
    "test": "jest",
    "build": "tsc"
  }
}
```

Run:

```bash
npm start
```

or:

```bash
npm run dev
```

or:

```bash
npm test
```

### Why useful?

Instead of remembering long commands:

```bash
node --some-option server.js
```

you can simply use:

```bash
npm start
```

---

# 16. `package-lock.json` ⭐

`package-lock.json` records the **exact dependency tree/versions resolved for the project**, including transitive dependencies.

Example:

```text
package.json
   ↓
express
   ↓
dependencies
   ↓
exact resolved versions
```

### Why important?

It provides:

* Reproducible installations
* Consistent dependency versions
* Dependency tree information
* Better CI/CD consistency

### Important distinction

```text
package.json
→ What dependencies the project declares

package-lock.json
→ Exact resolved dependency versions/tree
```

Usually, you **commit `package-lock.json` to Git** for applications.

---

# 17. Semantic Versioning ⭐

Semantic versioning is:

```text
MAJOR.MINOR.PATCH
```

Example:

```text
2.4.7
│ │ │
│ │ └── PATCH
│ └──── MINOR
└────── MAJOR
```

### Meaning

**PATCH**

Bug fixes that should be backward compatible.

```text
2.4.7 → 2.4.8
```

**MINOR**

New backward-compatible functionality.

```text
2.4.7 → 2.5.0
```

**MAJOR**

Breaking changes.

```text
2.4.7 → 3.0.0
```

---

## Version ranges you should know

### Exact version

```json
"express": "5.1.0"
```

Only that version.

### `^`

```json
"express": "^5.1.0"
```

Allows compatible updates within the same major version.

Conceptually:

```text
>=5.1.0 <6.0.0
```

### `~`

```json
"express": "~5.1.0"
```

Allows patch-level updates within the same minor version.

Conceptually:

```text
>=5.1.0 <5.2.0
```

### Interview point

`^` and `~` are **version ranges**, while `package-lock.json` records the specific versions actually resolved for the installation.

---

# ⭐ Quick Revision

| Topic                 | Remember                                      |
| --------------------- | --------------------------------------------- |
| **CommonJS**          | `require`, `module.exports`                   |
| **ESM**               | `import`, `export`                            |
| **require**           | CommonJS module loading                       |
| **import**            | ES Module syntax                              |
| **fs**                | Files/directories                             |
| **path**              | File paths                                    |
| **http**              | Create HTTP servers                           |
| **events**            | EventEmitter                                  |
| **crypto**            | Cryptographic operations                      |
| **os**                | OS information                                |
| **package.json**      | Project configuration + declared dependencies |
| **npm**               | Package management                            |
| **dependencies**      | Needed to run application                     |
| **devDependencies**   | Development/test/build tools                  |
| **npm scripts**       | Reusable project commands                     |
| **package-lock.json** | Exact resolved dependency tree                |
| **SemVer**            | `MAJOR.MINOR.PATCH`                           |

### 🎯 Most likely interview questions

1. **CommonJS vs ES Modules?**
2. **`require` vs `import`?**
3. **`module.exports` vs `exports`?**
4. **What is `package.json`?**
5. **Why do we need `package-lock.json`?**
6. **dependencies vs devDependencies?**
7. **What is Semantic Versioning?**
8. **`^` vs `~`?**
9. **What is EventEmitter?**
10. **What is the difference between `path.join()` and `path.resolve()`?**
11. **Why use asynchronous `fs` APIs instead of synchronous ones in a server?**
12. **What is the difference between hashing and encryption?**
