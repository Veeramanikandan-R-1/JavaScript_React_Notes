# Node.js Core — Quick Interview Notes

revise here code evolution nodejs notes - https://docs.google.com/document/d/1Oa2YAnYuQx0CmoVVkdWM9r3x8d-ia3wPQXgQOlfDVQk/edit?tab=t.0

### 1. What is Node.js?

**Node.js is a JavaScript runtime** that allows us to run JavaScript outside the browser, mainly for building backend/server applications.

* Built on Google's **V8 engine**
* Commonly used for REST APIs, real-time apps, microservices, etc.
* Uses an event-driven, non-blocking architecture.

**Interview:**

> Node.js is not a programming language or framework; it's a JavaScript runtime environment.

---

### 2. Node.js Architecture

High-level architecture:

```text
JavaScript Code
      ↓
    V8 Engine
      ↓
   Node.js APIs
      ↓
    Libuv
      ↓
Operating System
```

Node.js uses:

* **V8** → executes JavaScript
* **Event Loop** → manages asynchronous operations
* **Libuv** → handles I/O and provides the event loop/thread pool
* **OS** → performs underlying operations

---

### 3. V8 Engine

**V8 is Google's JavaScript engine**, originally developed for Chrome.

Node.js uses V8 to:

* Execute JavaScript
* Convert JavaScript into machine code
* Manage memory and garbage collection

```text
JavaScript
    ↓
   V8
    ↓
Machine Code
```

---

### 4. Single-threaded Architecture

Node.js executes JavaScript code using **one main thread**.

But this does **not** mean Node.js can handle only one request at a time.

It uses:

* Event Loop
* OS asynchronous APIs
* Libuv thread pool

to handle many operations efficiently.

**Interview point:**

> Node.js is single-threaded for JavaScript execution, but asynchronous operations can be handled outside the main thread.

---

### 5. Event-driven Architecture

Node.js works heavily around **events and callbacks**.

Instead of continuously waiting for an operation to finish:

```text
Request
  ↓
Start operation
  ↓
Continue doing other work
  ↓
Operation completes
  ↓
Callback/event executes
```

Example:

```js
fs.readFile("data.txt", callback);
```

Node doesn't need to block while waiting for the file.

---

### 6. Non-blocking I/O

**I/O = Input/Output**, such as:

* Database calls
* File operations
* Network requests

Non-blocking means Node.js doesn't wait for the operation to complete before continuing other work.

```js
fs.readFile("data.txt", () => {
  console.log("File read");
});

console.log("Continue execution");
```

Output:

```text
Continue execution
File read
```

This allows Node.js to efficiently handle many concurrent requests.

---

### 7. Event Loop ⭐

The **Event Loop** allows Node.js to perform asynchronous operations without blocking the main JavaScript thread.

Simplified:

```text
Call Stack
    ↓
Async operation
    ↓
Libuv / OS
    ↓
Callback ready
    ↓
Event Loop
    ↓
Call Stack
```

The Event Loop continuously checks whether there is work waiting to be executed.

**Interview question:**

> Why is the Event Loop important?

**Answer:** It enables Node.js to handle asynchronous operations while keeping JavaScript execution non-blocking.

---

### 8. Call Stack

The **Call Stack** keeps track of currently executing JavaScript functions.

```js
function a() {
  b();
}

function b() {
  console.log("Hello");
}

a();
```

Stack:

```text
a()
 ↓
b()
 ↓
console.log()
```

Functions are added to the stack when called and removed when completed.

---

### 9. Callback Queue

When an asynchronous operation finishes, its callback may be placed into a queue waiting for execution.

```js
setTimeout(() => {
  console.log("Hello");
}, 0);
```

Simplified flow:

```text
setTimeout
    ↓
Timer completes
    ↓
Callback Queue
    ↓
Event Loop
    ↓
Call Stack
```

The Event Loop moves the callback to the Call Stack when the stack is free.

---

### 10. Microtask vs Macrotask ⭐

**Microtasks** have higher priority than regular macrotasks.

### Microtasks

Examples:

```js
Promise.then()
queueMicrotask()
process.nextTick()
```

### Macrotasks

Examples:

```js
setTimeout()
setInterval()
setImmediate()
```

Simplified order:

```text
Synchronous code
      ↓
Microtasks
      ↓
Macrotasks
```

Example:

```js
console.log("1");

setTimeout(() => console.log("2"), 0);

Promise.resolve().then(() => console.log("3"));

console.log("4");
```

Output:

```text
1
4
3
2
```

**Interview point:** Promise callbacks generally execute before timer callbacks.

---

### 11. Libuv

**Libuv is a library used by Node.js to provide asynchronous I/O capabilities.**

It helps Node.js handle things like:

* Event Loop
* File system operations
* Networking
* Thread pool
* Timers

Think:

```text
Node.js
   ↓
 Libuv
   ↓
Async I/O + Event Loop + Thread Pool
```

You don't need to know Libuv internals for most interviews.

---

### 12. Asynchronous Programming

Asynchronous programming means an operation can start without making the program wait for it to finish.

Example:

```js
const data = await fetchData();

console.log(data);
```

The underlying operation can happen asynchronously rather than blocking the Node.js process.

Common approaches:

```text
Callbacks
   ↓
Promises
   ↓
async/await
```

---

### 13. Callbacks

A **callback is a function passed to another function to be executed later.**

```js
function greet(name, callback) {
  callback(`Hello ${name}`);
}

greet("John", message => {
  console.log(message);
});
```

Commonly used in older Node.js APIs.

Problem with too many nested callbacks:

```text
Callback
  ↓
  Callback
    ↓
    Callback
      ↓
      Callback
```

This is called **Callback Hell**.

---

### 14. Promises ⭐

A Promise represents the eventual result of an asynchronous operation.

It has three states:

```text
Pending
   ↓
 ┌───────┐
 ↓       ↓
Fulfilled  Rejected
```

Example:

```js
fetchData()
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

Benefits:

* Better async handling
* Avoids callback hell
* Easier error handling
* Can chain operations

---

### 15. async/await ⭐

`async/await` is a cleaner way to work with Promises.

Instead of:

```js
fetchData()
  .then(data => console.log(data))
  .catch(error => console.log(error));
```

We can write:

```js
async function getData() {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
```

Important:

> `async/await` does not make asynchronous code synchronous internally. It provides cleaner syntax for working with Promises.

---

### 16. Error Handling

Node.js applications need to handle both synchronous and asynchronous errors.

### Synchronous

```js
try {
  riskyOperation();
} catch (error) {
  console.log(error);
}
```

### Promise / async-await

```js
try {
  const data = await fetchData();
} catch (error) {
  console.log(error);
}
```

In Express, errors are commonly handled using **centralized error-handling middleware**:

```text
Request
   ↓
Route
   ↓
Controller
   ↓
Error
   ↓
Error Middleware
   ↓
Response
```

---

## ⭐ 1-Minute Revision

Remember this flow:

```text
Node.js
  ↓
V8 executes JavaScript
  ↓
JavaScript runs on main thread
  ↓
Async operations handled by OS / Libuv
  ↓
Event Loop monitors completed operations
  ↓
Callbacks / Promise handlers get executed
```

And remember:

| Concept              | Simple meaning                         |
| -------------------- | -------------------------------------- |
| **V8**               | Executes JavaScript                    |
| **Call Stack**       | Executes JS functions                  |
| **Event Loop**       | Coordinates async work                 |
| **Libuv**            | Provides async I/O + thread pool       |
| **Callback Queue**   | Holds callbacks waiting to execute     |
| **Microtask**        | Higher-priority async task             |
| **Macrotask**        | Timer/I/O-style task                   |
| **Callback**         | Function executed later                |
| **Promise**          | Represents future async result         |
| **async/await**      | Cleaner Promise syntax                 |
| **Non-blocking I/O** | Don't wait for I/O to finish           |
| **Single-threaded**  | One main JS execution thread           |
| **Event-driven**     | Behavior is driven by events/callbacks |
