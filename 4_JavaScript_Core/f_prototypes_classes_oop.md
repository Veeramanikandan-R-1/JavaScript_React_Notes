# Prototypes, Classes, and OOP (Senior Frontend Engineer Perspective)

Before going deeper into frameworks or libraries, understand this topic as part of real frontend engineering: JavaScript inheritance and class syntax in real applications.

---

# 1. Fundamentals

* JavaScript powers behavior in the browser and can also run outside the browser.
* Correct JavaScript depends on understanding values, references, scope, functions, async scheduling, and modules.
* Frontend JavaScript must stay responsive because it often shares the main thread with rendering and user input.

---

# 2. Core Concepts

| Concept | Practical meaning |
| ------- | ----------------- |
| Value | Data your program works with. |
| Binding | A named reference created by `let`, `const`, `var`, function, or import. |
| Execution context | The environment where code runs. |
| Reference | A way objects and arrays are shared by identity. |
| Module | A file-level boundary for imports and exports. |

---

# 3. Internal Working

* JavaScript creates execution contexts, manages lexical environments, stores objects by reference, and schedules async continuations through the host runtime.
* Engines optimize hot paths, but readable code and stable object shapes often help more than micro-optimizations.

---

# 4. Common Mistakes

* Confusing mutation with reassignment.
* Ignoring error paths in async code.
* Using loose equality without a deliberate reason.
* Treating objects and arrays as if they are deep-copied by spread.

---

# 5. Best Practices

* Prefer `const` by default and `let` when reassignment is needed.
* Keep functions small and name behavior clearly.
* Handle errors close to where recovery can happen.
* Avoid mutation across component or module boundaries unless it is intentionally owned.

---

# 6. Code Example

```js
class ApiClient {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  get(path) {
    return fetch(`${this.baseUrl}${path}`);
  }
}

const client = new ApiClient("/api");
```

---

# 7. Real-world Scenarios

* Debugging a production bug caused by shared object mutation.
* Explaining why a closure sees the latest variable value.
* Refactoring repeated data transformation into a named function.

---

# 7.1 Practical Prototype Revision

Prototype inheritance means one object can look up properties and methods from another object through its prototype chain.

```js
const animal = {
  lives() {
    return "Every animal lives";
  },
};

const bird = Object.create(animal);
bird.sings = function () {
  return "Bird sings";
};

console.log(bird.sings());
console.log(bird.lives());
```

Avoid assigning `__proto__` in application code. Prefer `Object.create`, constructor functions, or `class extends`.

Class syntax:

```js
class Animal {
  lives() {
    return "Every animal lives";
  }
}

class Bird extends Animal {
  sings() {
    return "Bird sings";
  }
}

const parrot = new Bird();
console.log(parrot.lives());
console.log(parrot.sings());
```

Senior note: classes are syntax over JavaScript's prototype model. They are useful for framework APIs, SDK clients, and domain objects, but React UI is usually simpler with functions, hooks, and plain objects.

---

# 7.2 Four OOP Pillars in JavaScript

JavaScript is prototype-based, but ES6 `class` syntax lets you write familiar OOP-style code. The four interview pillars are encapsulation, abstraction, inheritance, and polymorphism.

## Encapsulation

Encapsulation means keeping data and behavior together and controlling how data changes.

```js
class BankAccount {
  #balance;

  constructor(owner, balance) {
    this.owner = owner;
    this.#balance = balance;
  }

  deposit(amount) {
    if (amount <= 0) throw new Error("Amount must be positive");
    this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount("Veer", 1000);
account.deposit(500);

console.log(account.getBalance()); // 1500
// account.#balance; // SyntaxError: private field is not accessible outside class
```

Interview point: private fields such as `#balance` prevent direct modification of sensitive internal state.

## Abstraction

Abstraction means exposing the required behavior while hiding implementation details.

```js
class Shape {
  area() {
    throw new Error("area() must be implemented");
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius * this.radius;
  }
}

console.log(new Circle(5).area());
```

Interview point: JavaScript does not have strict abstract classes like Java, but a base class can still define a contract.

## Inheritance

Inheritance lets a child reuse and override parent behavior.

```js
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return `${this.name} makes a sound`;
  }
}

class Dog extends Animal {
  speak() {
    return `${this.name} barks`;
  }
}

console.log(new Dog("Tommy").speak());
```

## Polymorphism

Polymorphism means the same interface can produce different behavior depending on the object.

```js
class Cat extends Animal {
  speak() {
    return `${this.name} meows`;
  }
}

const animals = [new Dog("Bruno"), new Cat("Kitty")];

for (const animal of animals) {
  console.log(animal.speak());
}
```

Interview point: the caller uses the same method, `speak()`, without caring whether the object is a `Dog` or `Cat`.

# 8. Senior Deep Dive

## When to Use

* Use JavaScript for behavior, data transformation, async coordination, and progressive enhancement.
* Keep pure calculations separate from DOM, network, and time-based effects.
* Use modules to create clear boundaries between features.

## Debug Checklist

* Set breakpoints at the event handler, state change, or async boundary.
* Inspect object identity and mutation, especially before and after spread operations.
* Verify execution order when promises, timers, or event handlers interact.

## Code Review Checklist

* Are error paths handled?
* Can the function be tested without a browser when it is pure logic?
* Is shared mutable state avoided or clearly owned?


---

# Revision Notes

* Prototypes, Classes, and OOP matters because it affects real users, future maintainers, and production behavior.
* Learn the mental model before memorizing syntax.
* Use browser DevTools, tests, and small examples to verify behavior.
* JavaScript powers behavior in the browser and can also run outside the browser.
* Correct JavaScript depends on understanding values, references, scope, functions, async scheduling, and modules.
* Frontend JavaScript must stay responsive because it often shares the main thread with rendering and user input.

---

# Cheat Sheet

| Concept | Practical meaning |
| ------- | ----------------- |
| Value | Data your program works with. |
| Binding | A named reference created by `let`, `const`, `var`, function, or import. |
| Execution context | The environment where code runs. |
| Reference | A way objects and arrays are shared by identity. |
| Module | A file-level boundary for imports and exports. |

---

# Interview Questions with Answers

### 1. How would you explain Prototypes, Classes, and OOP in a real project?

I explain the value model, execution order, scope, references, and failure cases before reaching for syntax.

### 2. What happens internally when Prototypes, Classes, and OOP is involved?

JavaScript runs synchronously until the stack clears; async work resumes later through host scheduling, so timing and shared state matter.

### 3. How do you debug issues related to Prototypes, Classes, and OOP?

I reproduce the input, add a breakpoint, inspect scope and call stack, verify object identity, and test the edge case that failed.

### 4. What is the biggest production risk with Prototypes, Classes, and OOP?

The biggest risk is building something that works for the demo state but fails with real content, slow networks, accessibility needs, errors, or future changes.

### 5. What should a senior engineer look for in code review?

They should check the mental model, edge cases, accessibility, performance cost, naming, state ownership, test coverage, and whether the simpler native/platform option was considered.

---

# Hands-on Exercises

## Exercise 1

Write a small function or interaction that demonstrates Prototypes, Classes, and OOP.

### Solution

Include one normal input, one edge case, and one failure path. Explain execution order and data mutation rules.

## Exercise 2

Turn the example into an interview-style output question.

### Solution

Write expected output first, then explain stack, scope, references, or async scheduling line by line.

---

# Senior Frontend Engineer Takeaway

For senior-level work, Prototypes, Classes, and OOP is not only a syntax topic. You should be able to explain the mental model, choose the right pattern for a product requirement, identify common failure modes, and verify behavior through tooling, tests, and browser inspection.
