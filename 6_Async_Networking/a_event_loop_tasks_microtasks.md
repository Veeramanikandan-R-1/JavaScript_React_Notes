# Event Loop, Tasks, and Microtasks (Senior Frontend Engineer Perspective)

Before going deeper into frameworks or libraries, understand this topic as part of real frontend engineering: how asynchronous JavaScript is scheduled and why order matters.

---

# 1. Fundamentals

* Asynchronous code lets applications wait for timers, network, files, and user events without blocking the main thread.
* Promise-based flows should model success, failure, cancellation, and stale responses.
* Reliable networking code handles loading, empty, error, retry, and timeout states.

---

# 2. Core Concepts

| Concept | Practical meaning |
| ------- | ----------------- |
| Task | Macrotask such as timer, user event, or network continuation. |
| Microtask | Promise continuation that runs before the next render opportunity. |
| Promise | Represents eventual success or failure. |
| Cancellation | Stopping work that is no longer needed. |
| Race condition | A bug where timing changes the result. |

---

# 3. Internal Working

* Synchronous code runs to completion before microtasks and later tasks execute.
* Promise callbacks run as microtasks, which can starve rendering if chained heavily.
* Fetch starts browser-managed network work and resolves when response headers are available.

---

# 4. Common Mistakes

* Forgetting `await` inside `try/catch`.
* Letting stale requests overwrite newer results.
* Treating every fetch resolution as successful HTTP status.
* Retrying non-idempotent operations blindly.

---

# 5. Best Practices

* Represent loading, success, empty, and error states explicitly.
* Cancel stale requests when the UI changes.
* Use backoff and idempotency for retries.
* Surface useful errors to users and diagnostics to developers.

---

# 6. Code Example

```js
console.log("A");

setTimeout(() => console.log("B"), 0);

Promise.resolve().then(() => console.log("C"));

console.log("D");

// A, D, C, B
```

---

# 7. Real-world Scenarios

* Cancelling old search requests as the user types.
* Showing a retry button after a network failure.
* Updating a realtime notification count without refreshing the page.

---

# 7.1 React Context and Event Loop

JavaScript runs one piece of synchronous code at a time. Browser work such as timers, DOM events, and network requests completes later, then callbacks return through task or microtask queues.

React implications:

* `setState`/`useState` updates are scheduled and may be batched, so logging state immediately after setting it often shows the old value.
* `useEffect` runs after React has committed the DOM update and the browser has had a chance to paint.
* `useLayoutEffect` runs after DOM mutation but before paint, so heavy work there can block the frame.
* Long synchronous loops freeze the UI because the browser cannot process rendering or input while the call stack is busy.

```jsx
function Example() {
  const [count, setCount] = React.useState(0);

  function increment() {
    setCount(count + 1);
    console.log(count); // old value from this render
  }

  return <button onClick={increment}>{count}</button>;
}
```

Async effect example:

```jsx
React.useEffect(() => {
  let active = true;

  async function loadData() {
    const response = await fetch("/data");
    const data = await response.json();

    if (active) {
      setData(data);
    }
  }

  loadData();

  return () => {
    active = false;
  };
}, []);
```

# 8. Senior Deep Dive

## When to Use

* Use sequential awaits when order matters and parallel promises when work is independent.
* Use cancellation for typeahead, route changes, and stale requests.
* Use retries only when the operation is safe and the retry improves user experience.

## Debug Checklist

* Log request IDs or timestamps to detect stale responses.
* Check whether `response.ok` is handled separately from network failure.
* Throttle the network and test cancellation, retry, timeout, and offline behavior.

## Code Review Checklist

* Are loading, error, empty, cancelled, and stale states explicit?
* Are retries bounded and idempotency considered?
* Can old responses overwrite newer UI state?


---

# Revision Notes

* Event Loop, Tasks, and Microtasks matters because it affects real users, future maintainers, and production behavior.
* Learn the mental model before memorizing syntax.
* Use browser DevTools, tests, and small examples to verify behavior.
* Asynchronous code lets applications wait for timers, network, files, and user events without blocking the main thread.
* Promise-based flows should model success, failure, cancellation, and stale responses.
* Reliable networking code handles loading, empty, error, retry, and timeout states.

---

# Cheat Sheet

| Concept | Practical meaning |
| ------- | ----------------- |
| Task | Macrotask such as timer, user event, or network continuation. |
| Microtask | Promise continuation that runs before the next render opportunity. |
| Promise | Represents eventual success or failure. |
| Cancellation | Stopping work that is no longer needed. |
| Race condition | A bug where timing changes the result. |

---

# Interview Questions with Answers

### 1. What is the output order of synchronous code, a resolved promise, and `setTimeout`?

Synchronous code runs first, promise callbacks run next as microtasks, and `setTimeout` callbacks run later as tasks. A senior answer should also mention that microtasks are drained before the browser moves to the next task/render opportunity.

### 2. Why can too many microtasks make the UI feel stuck?

The browser drains the microtask queue before handling the next task. If code keeps scheduling microtasks, it can delay rendering and user input even though the code is “async.”

### 3. What is the difference between a task and a microtask in UI behavior?

A task can come from timers, user events, network callbacks, or script loading. A microtask usually comes from promise continuation work. This matters when reasoning about when state updates, DOM changes, and rendering can happen.

### 4. How would you debug an event-loop issue that blocks clicks?

Record a Performance trace, look for long tasks, inspect promise chains/timers, and find synchronous work inside handlers or microtasks. Then split work, defer noncritical processing, or move heavy computation to a worker.

### 5. What event-loop misconceptions do you watch for in interviews?

Thinking promises run on another thread, assuming `setTimeout(..., 0)` runs immediately, forgetting that microtasks run before timers, and using async code while still doing heavy synchronous work.

---

# Hands-on Exercises

## Exercise 1

Implement an async flow related to Event Loop, Tasks, and Microtasks.

### Solution

Represent loading, success, empty, error, cancelled, and stale states explicitly.

## Exercise 2

Test with slow network and out-of-order responses.

### Solution

Use request IDs or cancellation so old responses cannot overwrite newer UI.

---

# Senior Frontend Engineer Takeaway

For senior-level work, Event Loop, Tasks, and Microtasks is not only a syntax topic. You should be able to explain the mental model, choose the right pattern for a product requirement, identify common failure modes, and verify behavior through tooling, tests, and browser inspection.
