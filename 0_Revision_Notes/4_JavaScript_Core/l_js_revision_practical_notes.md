# Revision Notes: JavaScript Revision Practical Notes

JavaScript was developed by Brendan Eich in 1995 at Netscape.

---

## Date

| Need | Use |
| ---- | --- |
| Date object and methods | `new Date()` |
| Timestamp number | `Date.now()` |
| Same timestamp from Date object | `new Date().getTime()` |

Remember: month is 0-based in `new Date(year, month, day)`.

---

# ES6 Checklist

* `let` and `const`
* arrow functions
* template literals
* destructuring
* spread/rest
* classes
* modules
* promises
* default parameters

---

# Functions

* First-class function: can be stored, passed, and returned.
* Factory function: returns an object.
* Unary function: takes one argument.
* IIFE: runs immediately.
* Constructor function: creates objects with `new`.

---

# Strings and Arrays

* Prefer `slice` for strings.
* `substring` treats negative values as `0`.
* `substr` is legacy.
* `map` transforms one-to-one.
* `flatMap` maps and flattens one level.
* `flat(depth)` flattens nested arrays.
* `flat(Infinity)` fully flattens.

---

# Core Interview Topics

* hoisting
* closures
* currying
* prototypes
* recursion
* shallow copy
* deep copy
* reference assignment
* garbage collection
* memory leaks
* IPv4 regex

---

# Copy Rules

```text
obj1 = obj2              -> same reference
{ ...obj }               -> shallow copy
structuredClone(obj)     -> deep copy
JSON stringify/parse     -> limited deep copy
```

---

# Added from Latest Paste

* TDZ: `let`/`const` exist before initialization but throw `ReferenceError` if accessed early.
* DOM uses `document`; BOM uses `window`.
* Modern JavaScript is interpreted and JIT-compiled by engines.
* `call`/`apply` invoke immediately; `bind` returns a function for later.
* `slice` does not mutate; `splice`, `shift`, and `unshift` mutate.
* `Map` supports any key type, insertion order, direct iteration, and `.size`.
* `Promise.all` fails fast; `allSettled` gives every status; `race` takes first settled; `any` takes first fulfilled.
* JavaScript enum-like constants can be made with `Object.freeze`.
* Generators pause with `yield` and resume with `.next()`.
