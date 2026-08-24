## 1. EventEmitter ⭐

`EventEmitter` is Node.js's mechanism for creating and handling **custom events**.

You:

1. Register a listener
2. Emit an event
3. Listener executes

```js
const EventEmitter = require("node:events");

const emitter = new EventEmitter();

emitter.on("login", (user) => {
  console.log(`${user} logged in`);
});

emitter.emit("login", "John");
```

### Important methods

| Method                       | Purpose              |
| ---------------------------- | -------------------- |
| `on()`                       | Listen to an event   |
| `once()`                     | Listen only once     |
| `emit()`                     | Trigger event        |
| `off()` / `removeListener()` | Remove listener      |
| `removeAllListeners()`       | Remove all listeners |

### Important concepts

* Event name
* Listener/callback
* Event arguments
* Multiple listeners can listen to the same event
* Node.js itself uses EventEmitter extensively

**Interview:**

> EventEmitter is useful for event-driven communication within a Node.js application.

---

# 2. Streams ⭐

Streams allow you to **process data piece-by-piece instead of loading everything into memory at once**.

Very useful for:

* Large files
* Video/audio
* Network requests
* File uploads/downloads

### Four types

| Stream        | Purpose                  |
| ------------- | ------------------------ |
| **Readable**  | Read data                |
| **Writable**  | Write data               |
| **Duplex**    | Read + write             |
| **Transform** | Read + transform + write |

### Example

Instead of:

```js
fs.readFile("large-video.mp4", ...)
```

which loads the entire file into memory, use:

```js
const fs = require("node:fs");

const stream = fs.createReadStream("large-video.mp4");

stream.on("data", (chunk) => {
  console.log("Received chunk:", chunk.length);
});
```

Data comes in **chunks**.

### Important concept: Backpressure

If the producer sends data faster than the consumer can process it, **backpressure** prevents the writable side from being overwhelmed.

`pipe()` helps manage this:

```js
const fs = require("node:fs");

const read = fs.createReadStream("input.txt");
const write = fs.createWriteStream("output.txt");

read.pipe(write);
```

### Interview point

> Streams improve memory efficiency because they process data incrementally.

---

# 3. Buffers ⭐

A `Buffer` represents **raw binary data** in Node.js.

JavaScript traditionally works with strings and objects, but Node.js often needs to work with binary data such as:

* Images
* Videos
* PDFs
* Network packets
* File data

Example:

```js
const buffer = Buffer.from("Hello");

console.log(buffer);
console.log(buffer.toString());
```

Output conceptually:

```text
<Buffer 48 65 6c 6c 6f>
Hello
```

### Important concepts

* Buffer is backed by memory outside the normal JavaScript object model.
* Commonly used with streams and file/network operations.
* Buffers represent bytes.

### Buffer vs Stream

```text
Buffer  → represents data in memory
Stream  → processes data over time/chunks
```

---

# 4. File Handling

Node.js provides the `fs` module for working with files and directories.

Common operations:

```text
read
write
append
rename
delete
create directory
```

### Example

```js
const fs = require("node:fs/promises");

async function readFile() {
  try {
    const data = await fs.readFile("data.txt", "utf8");
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
```

### Important APIs

```text
readFile()
writeFile()
appendFile()
rename()
unlink()
mkdir()
readdir()
```

There are generally:

* Callback APIs
* Synchronous APIs
* Promise APIs

### `readFile` vs `readFileSync`

```js
fs.readFile(...)
```

→ asynchronous

```js
fs.readFileSync(...)
```

→ synchronous/blocking

For server applications, asynchronous APIs are generally preferred for normal I/O so the main JS thread isn't unnecessarily blocked.

### Interview point

For very large files, consider **streams** instead of reading the entire file into memory.

---

# 5. Environment Variables ⭐

Environment variables store configuration **outside your source code**.

Common examples:

```text
PORT=3000
DATABASE_URL=...
JWT_SECRET=...
NODE_ENV=production
```

Why?

* Different configuration for development/production
* Avoid hardcoding secrets
* Easier deployment configuration

Example:

```js
const port = process.env.PORT || 3000;

app.listen(port);
```

### Important

Don't commit sensitive values such as passwords/API secrets to Git.

---

# 6. `.env`

`.env` is a common file used during development to store environment variables.

Example:

```env
PORT=3000
DB_URL=mongodb://localhost:27017/mydb
JWT_SECRET=my-secret
```

Then an environment-variable loader such as `dotenv` can load them.

```js
require("dotenv").config();

console.log(process.env.PORT);
```

### Important points

* `.env` is commonly used for local development.
* Usually add `.env` to `.gitignore`.
* Production environments often provide variables directly through the hosting/deployment platform rather than relying on a `.env` file.

### Interview point

> `.env` is a file convention; `process.env` is Node's interface for accessing environment variables available to the process.

---

# 7. `process` ⭐

`process` is a global Node.js object that provides information and control over the **current Node.js process**.

You don't need to import it.

Example:

```js
console.log(process.pid);
console.log(process.platform);
console.log(process.version);
```

Important properties/methods:

```text
process.env
process.argv
process.pid
process.cwd()
process.exit()
process.nextTick()
```

### `process.argv`

Provides command-line arguments.

```bash
node app.js hello
```

```js
console.log(process.argv);
```

Can be used to access `"hello"`.

### `process.cwd()`

Returns the current working directory.

```js
console.log(process.cwd());
```

---

# 8. `process.env`

`process.env` contains environment variables available to the current Node.js process.

Example:

```env
PORT=5000
```

```js
console.log(process.env.PORT);
```

Output:

```text
5000
```

Common:

```js
const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV;
```

### Important interview point

Environment variables are generally exposed as **strings**.

So:

```env
PORT=3000
```

means:

```js
typeof process.env.PORT
// "string"
```

If you need a number:

```js
const port = Number(process.env.PORT);
```

---

# 9. `process.nextTick()` ⭐

`process.nextTick()` schedules a callback to execute **after the current synchronous operation finishes, before the event loop proceeds to later phases**.

Example:

```js
console.log("1");

process.nextTick(() => {
  console.log("2");
});

console.log("3");
```

Output:

```text
1
3
2
```

### Important

`process.nextTick()` is **not the same as `setTimeout(..., 0)`**.

```text
Current synchronous code
        ↓
process.nextTick queue
        ↓
Other microtasks / event-loop processing
        ↓
Timers / other phases
```

Node-specific interview point:

> `process.nextTick()` has very high priority. Excessive recursive use can starve the event loop.

---

# 10. Timers ⭐

Node.js provides timer APIs for scheduling callbacks.

### `setTimeout()`

Runs after at least the specified delay.

```js
setTimeout(() => {
  console.log("Hello");
}, 1000);
```

Important: `1000ms` means **minimum delay**, not guaranteed exact execution time.

---

### `setInterval()`

Runs repeatedly.

```js
const id = setInterval(() => {
  console.log("Running...");
}, 1000);

setTimeout(() => {
  clearInterval(id);
}, 5000);
```

---

### `setImmediate()`

Schedules a callback to execute in the **check phase** of the Node.js event loop.

```js
setImmediate(() => {
  console.log("Immediate");
});
```

### Important interview distinction

```text
setTimeout()
→ timer phase

setImmediate()
→ check phase

process.nextTick()
→ runs before the event loop continues to later phases
```

Don't assume `setTimeout(fn, 0)` always executes before `setImmediate()` in every situation; their relative order can depend on context.

---

# 11. Cluster — Basic

The Node.js `cluster` module allows you to create **multiple Node.js processes** that can share a server port.

Why?

Node's JavaScript execution is primarily single-threaded. A single process may not fully utilize all CPU cores.

Cluster:

```text
             Server
                |
       ┌────────┼────────┐
       ↓        ↓        ↓
    Worker   Worker   Worker
    Process  Process  Process
       ↓        ↓        ↓
     CPU 1    CPU 2    CPU 3
```

### Basic example

```js
const cluster = require("node:cluster");
const os = require("node:os");

if (cluster.isPrimary) {
  const workers = os.cpus().length;

  for (let i = 0; i < workers; i++) {
    cluster.fork();
  }
} else {
  // Start server
}
```

### Important

* Cluster uses **multiple processes**, not multiple threads.
* Each worker has its own memory/Node.js process.
* Useful for CPU utilization and scaling across cores.
* In modern production systems, containers/process managers/load balancers are also commonly used.

---

# 12. Worker Threads — Basic ⭐

Worker Threads allow Node.js to run JavaScript in **separate threads**.

Useful for **CPU-intensive operations**.

Examples:

* Image processing
* Large calculations
* CPU-heavy data processing

They are generally **not needed simply because an operation is asynchronous I/O**.

### Example

Main file:

```js
const { Worker } = require("node:worker_threads");

const worker = new Worker("./worker.js");

worker.on("message", (result) => {
  console.log("Result:", result);
});
```

`worker.js`:

```js
const { parentPort } = require("node:worker_threads");

const result = 10 * 20;

parentPort.postMessage(result);
```

### Cluster vs Worker Threads

| Cluster                       | Worker Threads                           |
| ----------------------------- | ---------------------------------------- |
| Multiple processes            | Multiple threads                         |
| Separate memory               | Can share memory using SharedArrayBuffer |
| Good for scaling processes    | Good for CPU-heavy JS work               |
| Each worker is a Node process | Worker runs inside same process          |

**Interview:**

> Use Worker Threads for CPU-intensive JavaScript work; don't use them as a replacement for normal asynchronous I/O.

---

# 13. Child Process — Basic ⭐

The `child_process` module allows Node.js to **create/run another process** from a Node.js application.

Useful for:

* Running shell commands
* Running another application
* Executing scripts
* CPU-heavy work in separate processes

### `exec()`

Runs a command through a shell and returns the collected output.

```js
const { exec } = require("node:child_process");

exec("node --version", (error, stdout) => {
  if (error) {
    console.error(error);
    return;
  }

  console.log(stdout);
});
```

### `spawn()`

Useful when you want to handle large/continuous output using streams.

```js
const { spawn } = require("node:child_process");

const child = spawn("node", ["script.js"]);

child.stdout.on("data", (data) => {
  console.log(data.toString());
});
```

### Other important APIs

```text
exec()
spawn()
execFile()
fork()
```

### `fork()`

Specifically starts another **Node.js process** and provides built-in IPC (inter-process communication).

---

# ⭐ Cluster vs Worker Threads vs Child Process

This is a very common area for interview questions.

| Feature     | Cluster                               | Worker Threads                                | Child Process               |
| ----------- | ------------------------------------- | --------------------------------------------- | --------------------------- |
| Unit        | Process                               | Thread                                        | Process                     |
| Memory      | Separate                              | Same process; memory can be shared explicitly | Separate                    |
| Main use    | Scale Node processes across CPU cores | CPU-intensive JS work                         | Run another process/command |
| IPC         | Yes                                   | Yes                                           | Yes                         |
| Typical use | Server scaling                        | Heavy computation                             | Shell commands/scripts      |

### Easy way to remember

```text
Cluster
→ "I want multiple Node server processes."

Worker Thread
→ "I have CPU-heavy JavaScript work."

Child Process
→ "I want to run another process/command."
```

---

# 🔥 Final Interview Revision

| Topic                     | One-line answer                                       |
| ------------------------- | ----------------------------------------------------- |
| **EventEmitter**          | Create/listen/emit custom events                      |
| **Streams**               | Process data in chunks                                |
| **Buffer**                | Represents binary data                                |
| **File handling**         | `fs` for files/directories                            |
| **Environment variables** | External application configuration                    |
| **`.env`**                | Common local file for environment variables           |
| **process**               | Information/control of current Node process           |
| **process.env**           | Access environment variables                          |
| **process.nextTick()**    | High-priority callback before later event-loop phases |
| **Timers**                | Schedule callbacks                                    |
| **Cluster**               | Multiple Node processes                               |
| **Worker Threads**        | Multiple threads for CPU-heavy JS                     |
| **Child Process**         | Run another process/command                           |

### ⭐ Questions you should definitely be able to answer

1. **What is EventEmitter and where is it used?**
2. **What are the four types of streams?**
3. **Why are streams better for large files?**
4. **What is backpressure?**
5. **What is a Buffer?**
6. **What is the difference between Buffer and Stream?**
7. **What is `process.env`?**
8. **Why do we use `.env`?**
9. **`process.nextTick()` vs `setImmediate()`?**
10. **`setTimeout()` vs `setImmediate()`?**
11. **Cluster vs Worker Threads?**
12. **Worker Threads vs Child Process?**
13. **When would you use Worker Threads?**
14. **When would you use `spawn()` vs `exec()`?**
15. **Why would you use Cluster if Node.js is single-threaded?**
