# JavaScript Revision Practical Notes

This file incorporates unique JavaScript revision points from the pasted `JS revision.md` notes.

---

# 1. JavaScript History

Quick history fact: JavaScript was developed by Brendan Eich in 1995 while he was working at Netscape.

---

# 2. Date

## `new Date()` vs `Date.now()`

| Feature | `new Date()` | `Date.now()` |
| ------- | ------------ | ------------ |
| Return type | Date object | Number |
| Value | Current date/time object | Milliseconds since Jan 1, 1970 |
| Use for | Formatting, date methods, display | Time difference, timestamps, performance timing |
| Equivalent | `new Date().getTime()` | Same timestamp number |

```js
const date = new Date();
const timestamp = Date.now();

console.log(date.getFullYear());
console.log(date.toISOString());
console.log(timestamp);
```

Important:

```js
new Date(2025, 10, 17); // November 17, 2025 because month is 0-based
```

Common methods:

```js
const d = new Date();

d.getFullYear();
d.getMonth(); // 0 = January
d.getDate();
d.getDay(); // 0 = Sunday
d.getHours();
d.getMinutes();
d.getSeconds();

d.setFullYear(2030);
d.setMonth(5); // June
d.setDate(10);

d.toDateString();
d.toISOString();
d.toLocaleString();
```

Timing example:

```js
const start = Date.now();

// run work

const end = Date.now();
console.log(`Time taken: ${end - start} ms`);
```

---

# 3. ES6 Features to Revise

| Feature | Why it matters |
| ------- | -------------- |
| `let` and `const` | Block scope, safer than `var` |
| Arrow functions | Short syntax and lexical `this` |
| Template literals | String interpolation and multiline strings |
| Destructuring | Extract values from arrays/objects |
| Spread/rest | Copy, merge, expand, collect values |
| Classes | Cleaner syntax over prototypes |
| Modules | `import` and `export` |
| Promises | Better async flow than callback nesting |
| Enhanced object literals | Short object property/method syntax |
| Default parameters | Fallback parameter values |

Example:

```js
const user = { name: "Mani", role: "developer" };
const { name } = user;

const roles = ["admin", "user"];
const allRoles = ["owner", ...roles];

function greet(person = "Guest") {
  return `Hello ${person}`;
}
```

---

# 3.1 JavaScript Engine Mental Model

When JavaScript runs, the engine roughly does this:

```text
source code -> parser -> AST -> interpreter/baseline compiler -> optimized JIT code
```

Runtime memory model:

| Area | Practical meaning |
| ---- | ----------------- |
| Call stack | Tracks currently running function calls. |
| Heap | Stores objects, arrays, functions, and closures. |
| Garbage collector | Reclaims memory that is no longer reachable. |
| Execution context | Stores variable environment, scope chain, and `this` binding for running code. |

Interview line:

JavaScript is single-threaded for normal JS execution, but the browser provides Web APIs for timers, network, DOM events, and workers. The event loop coordinates callbacks back onto the main thread.

---

# 4. Functions

## Ways to Declare Functions

```js
function add(a, b) {
  return a + b;
}

const subtract = function (a, b) {
  return a - b;
};

const multiply = (a, b) => a * b;

(function () {
  console.log("IIFE");
})();
```

## First-Class Function

A function is first-class when it can be:

* stored in a variable
* passed as an argument
* returned from another function

```js
function run(callback) {
  callback();
}

run(() => console.log("Called"));
```

## Factory Function

A factory function returns an object.

```js
function createUser(name) {
  return {
    name,
    greet() {
      return `Hello ${name}`;
    },
  };
}
```

## Unary Function

A unary function takes one argument.

```js
const square = (num) => num * num;
```

## Constructor Function

Constructor functions were commonly used before classes.

```js
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  return `Hello ${this.name}`;
};

const user = new Person("Mani");
```

Use modern `class` syntax in most new code, but understand constructor functions for interviews and legacy code.

---

# 5. IIFE

IIFE means Immediately Invoked Function Expression.

```js
(function () {
  const privateValue = "hidden";
  console.log(privateValue);
})();
```

Modern JavaScript often uses modules and block scope instead of IIFEs.

Still useful for:

* old browser code
* immediate setup logic
* avoiding global variable pollution in legacy scripts

---

# 6. Strings: `slice`, `substring`, `substr`

| Method | Notes |
| ------ | ----- |
| `slice(start, end)` | Supports negative indexes |
| `substring(start, end)` | Negative values become `0`; swaps arguments if start > end |
| `substr(start, length)` | Uses length, not end index; legacy and not recommended |

```js
const str = "JavaScript";

console.log(str.slice(0, 4)); // Java
console.log(str.slice(-6)); // Script
console.log(str.substring(4, 0)); // Java
console.log(str.substr(4, 6)); // Script
```

Prefer `slice` for modern code.

---

# 7. Arrays: `map`, `flatMap`, and `flat`

## `map`

Returns one output item for each input item.

```js
const nums = [1, 2, 3];
const doubled = nums.map((num) => num * 2);
```

## `flatMap`

Maps and flattens one level.

```js
const sentences = ["hello world", "js revision"];
const words = sentences.flatMap((sentence) => sentence.split(" "));
```

## `flat`

Flattens nested arrays.

```js
const arr = [1, [2, 3], [4, [5]]];

console.log(arr.flat()); // [1, 2, 3, 4, [5]]
console.log(arr.flat(2)); // [1, 2, 3, 4, 5]
console.log(arr.flat(Infinity)); // fully flattened
```

Important:

```js
[1, , 2, [3, , 4]].flat(); // holes are removed
```

---

# 8. Recursion

Recursion means a function calls itself until a base condition stops it.

Useful for:

* nested menus
* tree data
* comments/replies
* folder structures
* recursive accordion UI

Example:

```js
function printMenu(items, level = 0) {
  for (const item of items) {
    console.log(`${" ".repeat(level * 2)}- ${item.label}`);

    if (item.children) {
      printMenu(item.children, level + 1);
    }
  }
}
```

Always include a base condition or recursion will never stop.

---

# 9. Hoisting

Hoisting means declarations are processed before code runs.

```js
console.log(a); // undefined
var a = 10;

console.log(b); // ReferenceError
let b = 20;
```

Function declarations are hoisted:

```js
sayHi();

function sayHi() {
  console.log("Hi");
}
```

Best practice:

* use `const` and `let`
* declare variables before using them
* avoid relying on hoisting

---

# 10. Closures and Currying

A closure is created when an inner function remembers variables from its outer function.

```js
function outer() {
  let count = 0;

  return function inner() {
    count += 1;
    return count;
  };
}

const counter = outer();
console.log(counter()); // 1
console.log(counter()); // 2
```

Currying:

```js
function multiply(a) {
  return function (b) {
    return a * b;
  };
}

const double = multiply(2);
console.log(double(5)); // 10
```

---

# 11. Prototypes

Every JavaScript object has a prototype chain.

```js
const person = {
  greet() {
    return "Hello";
  },
};

const student = Object.create(person);
student.name = "Mani";

console.log(student.greet());
console.log(Object.getPrototypeOf(student) === person);
```

Constructor function inheritance:

```js
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  return `Hello ${this.name}`;
};
```

Class syntax:

```js
class Animal {
  speak() {
    return "sound";
  }
}

class Dog extends Animal {
  speak() {
    return "bark";
  }
}
```

Classes are syntax over JavaScript's prototype model.

---

# 12. Shallow Copy, Deep Copy, and Reference Assignment

## Reference Assignment

```js
const obj2 = { name: "Alice" };
const obj1 = obj2;

obj1.name = "Bob";
console.log(obj2.name); // Bob
```

This is not a copy. Both variables point to the same object.

## Shallow Copy

Copies only first-level properties.

```js
const original = {
  name: "Alice",
  address: { city: "Delhi" },
};

const copy = { ...original };
copy.address.city = "Mumbai";

console.log(original.address.city); // Mumbai
```

Shallow copy methods:

| Type | Method |
| ---- | ------ |
| Object | `{ ...obj }` |
| Object | `Object.assign({}, obj)` |
| Array | `[...array]` |
| Array | `array.slice()` |
| Array | `Array.from(array)` |

## Deep Copy

Duplicates nested data.

```js
const copy = structuredClone(original);
```

Options:

| Method | Notes |
| ------ | ----- |
| `structuredClone(obj)` | Best modern built-in option |
| `JSON.parse(JSON.stringify(obj))` | Loses functions, `undefined`, Dates, circular refs |
| `lodash.cloneDeep()` | Reliable library option |
| Manual recursion | Full control |

---

# 13. Garbage Collection and Memory Leaks

JavaScript automatically clears objects that are no longer reachable.

An object stays in memory if it is still reachable from:

* global variables
* active functions
* closures
* timers
* DOM references
* event listeners

Common memory leak causes:

* uncleared timers
* event listeners not removed
* closures holding large data
* detached DOM nodes
* growing global arrays/caches

Example:

```js
function outer() {
  const largeData = new Array(1000000).fill("data");

  return function inner() {
    console.log(largeData[0]);
  };
}
```

Prevention:

```js
const intervalId = setInterval(run, 1000);
clearInterval(intervalId);

button.addEventListener("click", handleClick);
button.removeEventListener("click", handleClick);
```

Debug tools:

* Chrome DevTools Memory tab
* Heap snapshots
* Detached DOM tree checks
* Performance tab
* Lighthouse / Web Vitals

---

# 14. Regex: IPv4 Validation

IPv4 regex:

```js
const ipv4Regex =
  /^(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}$/;

function isValidIPv4(ip) {
  return ipv4Regex.test(ip);
}

console.log(isValidIPv4("192.168.0.1")); // true
console.log(isValidIPv4("256.100.100.100")); // false
console.log(isValidIPv4("123.45.67.089")); // false
```

IPv4 with optional subnet from `/0` to `/24`:

```js
const ipv4WithSubnet =
  /^(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}(\/([0-9]|1[0-9]|2[0-4]))?$/;
```

Note: This subnet example only allows `/0` to `/24`, matching the pasted note. For real CIDR IPv4 validation, `/0` to `/32` is common.

---

# 15. Extra Practical Interview Points from Latest Paste

## TDZ

`let` and `const` are hoisted but cannot be accessed before the declaration line runs. Accessing them inside that period throws `ReferenceError`.

## DOM vs BOM

DOM is the document tree through `document`. BOM is the browser environment through `window`, such as `location`, `history`, `navigator`, and `screen`.

## JavaScript Engine Flow

Modern engines parse code, execute it, and use JIT compilation to optimize repeated/hot paths. A balanced interview answer is: JavaScript is interpreted and JIT-compiled in modern engines.

## `call`, `apply`, `bind`

```text
call  -> invoke now, args one by one
apply -> invoke now, args as array
bind  -> return a new function for later
```

## `slice`, `splice`, `shift`, `unshift`

```text
slice   -> copy without mutation
splice  -> insert/remove/replace with mutation
shift   -> remove first item with mutation
unshift -> add first item with mutation
```

## `Map` vs Object

Use plain objects for known structured data. Use `Map` for dynamic key-value storage, any key type, insertion order, frequent add/remove, and easy `.size`.

## Promise Method Choice

```text
Promise.all        -> all required, fail fast
Promise.allSettled -> partial results are okay
Promise.race       -> first settled result
Promise.any        -> first successful result
```

## Enum-Like Constants

```js
const Role = Object.freeze({
  Admin: "admin",
  Member: "member",
});
```

## Generator Function

A generator pauses at `yield` and resumes later from the same point.

```js
function* idGenerator() {
  yield 1;
  yield 2;
}

const ids = idGenerator();
console.log(ids.next()); // { value: 1, done: false }
console.log(ids.next()); // { value: 2, done: false }
```

Generators are not common in day-to-day React UI code, but they appear in concepts like Redux Saga and interview questions about iterators.

---

# 16. Quick Interview Checklist

Be ready to explain:

* `new Date()` vs `Date.now()`
* `let`, `const`, arrow functions, destructuring, spread/rest
* constructor function vs class
* first-class functions
* factory functions
* IIFE
* hoisting
* closures
* prototypes
* `slice` vs `substring` vs `substr`
* `map` vs `flatMap` vs `flat`
* recursion
* shallow copy vs deep copy vs reference assignment
* garbage collection and memory leaks
* IPv4 regex validation
* TDZ
* DOM vs BOM
* interpreted vs JIT-compiled JavaScript
* normal function vs arrow function
* `call`, `apply`, `bind`
* `slice` vs `splice`
* `shift` vs `unshift`
* `Map` vs object
* Promise method choices
* enum-like constants with `Object.freeze`
* generators
