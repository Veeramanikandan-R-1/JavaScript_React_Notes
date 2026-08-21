# Senior React Interview — Quick but Strong Answers

## 1. React Rendering Lifecycle

At a high level, React rendering has three important phases:

```text
Trigger
  ↓
Render
  ↓
Commit
```

### Render phase

React calls your components and creates a new React element tree.

### Commit phase

React applies the required changes to the actual DOM.

### Example

```jsx
function App() {
  const [count, setCount] = useState(0);

  console.log("Render");

  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
}
```

When clicking:

```text
setCount()
   ↓
React schedules update
   ↓
Component renders again
   ↓
React compares old/new tree
   ↓
Only required DOM changes are committed
```

**Interview:** Rendering doesn't necessarily mean React updates the DOM. React can render and determine that no DOM change is required.

---

# 2. Why React Re-renders

A component generally re-renders when:

* Its state changes
* Its parent re-renders
* Its context value changes
* Its subscribed external store changes

Example:

```jsx
function Parent() {
  const [count, setCount] = useState(0);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>
        {count}
      </button>

      <Child />
    </>
  );
}
```

`Parent` re-renders when `count` changes, and normally `Child` is also rendered again.

You can optimize `Child` with:

```jsx
const Child = React.memo(() => {
  return <div>Hello</div>;
});
```

**Important:** Re-render ≠ DOM update.

---

# 3. Virtual DOM vs Real DOM

### Real DOM

The browser's actual DOM.

```text
document
 └── html
      └── body
           └── div
```

### Virtual DOM

JavaScript representation of the UI maintained by React.

When state changes:

```text
State change
   ↓
New React tree
   ↓
Compare with previous tree
   ↓
Determine required changes
   ↓
Update Real DOM
```

The main benefit isn't simply "Virtual DOM is faster."

It allows React to **efficiently determine what needs to change and manage updates declaratively**.

---

# 4. Reconciliation Algorithm

**Reconciliation** is React's process of comparing the previous rendered tree with the new rendered tree to determine what needs to change.

Example:

```jsx
<h1>Hello</h1>
```

changes to:

```jsx
<h1>Hello John</h1>
```

React doesn't recreate the entire DOM. It identifies that the text content changed and updates that part.

### Keys are important

```jsx
users.map(user => (
  <User key={user.id} user={user} />
))
```

Keys help React identify which items were added, removed, or moved.

**Interview point:** Never use array index as key when list items can be reordered/inserted/removed.

---

# 5. Fiber Architecture

**Fiber is React's internal architecture for representing and processing component work.**

Before Fiber, React's rendering work was more synchronous.

Fiber allows React to:

* Break rendering work into smaller units
* Prioritize work
* Pause/resume work
* Schedule updates
* Support concurrent rendering features

Think:

```text
Large rendering task
       ↓
Fiber breaks it into units
       ↓
Process according to priority
       ↓
Continue / pause / resume
```

You generally don't interact with Fiber directly.

**Interview:** Fiber is the internal architecture that enables React's modern scheduling and concurrent rendering capabilities.

---

# 6. `useEffect` Dependency Array

```jsx
useEffect(() => {
  console.log("effect");
});
```

Runs after every render.

```jsx
useEffect(() => {
  console.log("effect");
}, []);
```

Runs after initial mount.

```jsx
useEffect(() => {
  console.log("effect");
}, [userId]);
```

Runs when `userId` changes.

### Cleanup

```jsx
useEffect(() => {
  const id = setInterval(() => {
    console.log("hello");
  }, 1000);

  return () => {
    clearInterval(id);
  };
}, []);
```

Cleanup runs when the effect is removed and before the effect is re-run when dependencies change.

---

# 7. Stale Closures

A stale closure happens when a function captures an **old value from a previous render**.

Example:

```jsx
function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setTimeout(() => {
      console.log(count);
    }, 3000);
  };

  return (
    <>
      <button onClick={handleClick}>Log</button>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </>
  );
}
```

If `count` was `0` when you clicked Log, the timeout may print `0` even if the state later becomes `5`.

The callback captured the value from that render.

### Common solution

For state updates:

```jsx
setCount(prev => prev + 1);
```

For needing the latest mutable value:

```jsx
const countRef = useRef(count);
```

**Interview definition:**

> A stale closure occurs when a callback retains references to state or props from an older render.

---

# 8. Race Conditions in Data Fetching

Suppose the user searches:

```text
React
React Hooks
React Router
```

Requests may finish in this order:

```text
React Router  → first
React         → last
```

Then an old response could overwrite the latest result.

### Solution: AbortController

```jsx
useEffect(() => {
  const controller = new AbortController();

  fetch(`/api/users?q=${search}`, {
    signal: controller.signal
  })
    .then(res => res.json())
    .then(data => setUsers(data))
    .catch(err => {
      if (err.name !== "AbortError") {
        console.error(err);
      }
    });

  return () => {
    controller.abort();
  };
}, [search]);
```

When `search` changes, the previous request is cancelled.

Other approaches include request IDs and libraries such as React Query.

---

# 9. `React.memo` vs `useMemo` vs `useCallback`

This is a **very common senior interview question**.

### `React.memo`

Memoizes a **component**.

```jsx
const Child = React.memo(({ name }) => {
  return <h1>{name}</h1>;
});
```

Prevents re-render when props haven't changed according to shallow comparison.

---

### `useMemo`

Memoizes a **calculated value**.

```jsx
const filteredUsers = useMemo(() => {
  return users.filter(user => user.active);
}, [users]);
```

---

### `useCallback`

Memoizes a **function reference**.

```jsx
const handleClick = useCallback(() => {
  console.log("clicked");
}, []);
```

Useful especially when passing callbacks to memoized children.

### Easy memory trick

```text
React.memo  → component
useMemo     → value
useCallback → function
```

Don't blindly use them. Memoization itself has a cost and should solve an actual rendering/performance problem.

---

# 10. Context vs Redux

### Context

Good for relatively global values:

```text
Theme
Language
Current user
```

Example:

```jsx
<ThemeContext.Provider value={theme}>
  <App />
</ThemeContext.Provider>
```

### Redux

Better for complex application state:

```text
Many components
Complex state transitions
Middleware
DevTools
Async workflows
Predictable state updates
```

### Important point

Context is **not really a state management replacement for Redux**.

Context primarily provides a way to pass values through the component tree without prop drilling.

---

# 11. Redux vs Zustand

### Redux Toolkit

Advantages:

* Strong ecosystem
* DevTools
* Middleware
* Predictable architecture
* Good for large applications
* Explicit state updates

### Zustand

Very lightweight:

```js
const useStore = create(set => ({
  count: 0,
  increment: () =>
    set(state => ({
      count: state.count + 1
    }))
}));
```

Less boilerplate and simple API.

### Interview answer

> For a large enterprise application with complex workflows and established Redux architecture, I would choose Redux Toolkit. For smaller applications or simpler global state, Zustand can be a lightweight alternative.

---

# 12. Controlled vs Uncontrolled Components

### Controlled

React owns the value.

```jsx
const [name, setName] = useState("");

<input
  value={name}
  onChange={e => setName(e.target.value)}
/>
```

Good for:

* Validation
* Dynamic forms
* Conditional UI

### Uncontrolled

DOM owns the value.

```jsx
const inputRef = useRef();

<input ref={inputRef} />
```

Read it:

```js
inputRef.current.value;
```

**Interview:** Controlled gives React full control; uncontrolled relies more on the DOM.

---

# 13. SSR vs CSR vs SSG

### CSR — Client-Side Rendering

```text
Browser
 ↓
Download JS
 ↓
React renders
```

Common traditional SPA approach.

### SSR — Server-Side Rendering

```text
Browser
 ↓
Server
 ↓
HTML generated
 ↓
Browser
 ↓
Hydration
```

Useful for SEO and faster initial content.

### SSG — Static Site Generation

HTML is generated ahead of time during build.

Good for:

* Blogs
* Documentation
* Marketing pages

### Simple comparison

|              | CSR            | SSR            | SSG               |
| ------------ | -------------- | -------------- | ----------------- |
| HTML         | Client         | Server request | Build time        |
| SEO          | More difficult | Good           | Good              |
| Dynamic data | Easy           | Easy           | Requires strategy |
| Initial load | Can be slower  | Often faster   | Very fast         |

---

# 14. Hydration

Hydration happens when React takes **server-rendered HTML** and attaches React behavior/event handlers to it.

```text
Server
 ↓
HTML
 ↓
Browser displays HTML
 ↓
JS loads
 ↓
React hydrates
 ↓
Interactive application
```

Example with Next.js:

```jsx
<button onClick={handleClick}>
  Click me
</button>
```

The server can send the HTML, but the button becomes interactive after hydration.

**Important:** Hydration is not the same as rendering the page from scratch.

---

# 15. Suspense

Suspense allows React to show a fallback while something is not ready.

```jsx
<Suspense fallback={<Loading />}>
  <UserProfile />
</Suspense>
```

Commonly used with:

* Lazy-loaded components
* Suspense-enabled data fetching frameworks

Example:

```jsx
const Dashboard = lazy(() => import("./Dashboard"));

<Suspense fallback={<p>Loading...</p>}>
  <Dashboard />
</Suspense>
```

---

# 16. Error Boundaries

Error Boundary catches errors in the rendering/lifecycle of child components and shows fallback UI.

```jsx
class ErrorBoundary extends React.Component {
  state = {
    hasError: false
  };

  static getDerivedStateFromError() {
    return {
      hasError: true
    };
  }

  componentDidCatch(error, info) {
    console.error(error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong</h2>;
    }

    return this.props.children;
  }
}
```

Usage:

```jsx
<ErrorBoundary>
  <Dashboard />
</ErrorBoundary>
```

**Doesn't catch:** event-handler errors, most async callback errors, server-side rendering errors.

---

# 17. StrictMode Behavior

```jsx
<React.StrictMode>
  <App />
</React.StrictMode>
```

StrictMode helps detect potential problems during development.

In React 18 development mode, React intentionally performs certain extra development checks, including an extra setup/cleanup cycle for effects, to expose code that isn't resilient to remounting.

Example:

```jsx
useEffect(() => {
  console.log("effect");

  return () => {
    console.log("cleanup");
  };
}, []);
```

You may see:

```text
effect
cleanup
effect
```

in development.

**Important:** This behavior is primarily a development check; it doesn't mean your production app runs the effect twice.

---

# 18. Concurrent Rendering Concepts

Concurrent rendering means React can work on rendering without necessarily blocking the browser for the entire rendering process.

It enables React to prioritize more important updates.

For example:

```text
User typing
    ↓
High priority

Large list rendering
    ↓
Lower priority
```

React can prioritize the user interaction.

React 18 introduced APIs/features such as:

```jsx
startTransition(() => {
  setSearchResults(results);
});
```

This tells React that the update can be treated as non-urgent.

**Important:** Concurrent rendering is about React's ability to **interrupt, prioritize, and prepare rendering work**. It doesn't mean JavaScript literally runs two renders simultaneously.

---

# 19. React 18 Automatic Batching

Before React 18, batching was more limited in some asynchronous situations.

React 18 with `createRoot` batches updates more broadly.

Example:

```jsx
setTimeout(() => {
  setCount(c => c + 1);
  setName("John");
}, 1000);
```

React 18 can batch these updates into a single render.

Instead of:

```text
setCount → render
setName  → render
```

you generally get:

```text
setCount
   +
setName
   ↓
one render
```

This improves performance.

---

# 20. Optimizing Large Applications

For a large React application, I would look at several areas.

### Rendering

```text
React.memo
useMemo
useCallback
```

only where profiling shows they're useful.

### Code splitting

```jsx
const Reports = lazy(() => import("./Reports"));
```

### Large lists

Use virtualization/windowing:

```text
Only render visible rows
```

Libraries include `react-window` and similar solutions.

### Network

Use:

* caching
* pagination
* request deduplication
* prefetching
* appropriate data-fetching libraries

### Bundle

Analyze:

```text
Bundle size
Unused dependencies
Large libraries
Code splitting
```

### State

Keep state as local as possible instead of putting everything into global state.

---

# 21. Profiling React Applications

My first step wouldn't be randomly adding `useMemo`.

I'd **measure first**.

Use **React DevTools Profiler**.

Look for:

```text
Which component renders?
How often?
Why?
How long does rendering take?
Which interaction caused it?
```

Example:

```text
User clicks button
       ↓
App renders
       ↓
LargeTable renders
       ↓
LargeTable takes 150ms
```

Then investigate why `LargeTable` is rendering.

Possible solutions:

```text
memoization
state colocation
virtualization
component splitting
better data fetching
```

---

# 22. Memory Leaks

A common React problem is not cleaning up subscriptions/resources.

Bad:

```jsx
useEffect(() => {
  const id = setInterval(() => {
    console.log("running");
  }, 1000);
}, []);
```

The interval isn't cleaned up.

Better:

```jsx
useEffect(() => {
  const id = setInterval(() => {
    console.log("running");
  }, 1000);

  return () => {
    clearInterval(id);
  };
}, []);
```

Other things to clean up:

```text
setInterval
setTimeout
event listeners
WebSocket subscriptions
observers
pending requests
external subscriptions
```

---

# 23. Performance Debugging

For a performance issue, I'd follow a systematic process.

### Step 1 — Reproduce

Identify:

```text
Which page?
Which interaction?
How often?
```

### Step 2 — Profile

Use:

```text
React DevTools Profiler
Chrome Performance
Chrome Network
```

### Step 3 — Find the bottleneck

For example:

```text
Button click
   ↓
Parent renders
   ↓
100 children render
   ↓
Expensive calculation
   ↓
200ms
```

### Step 4 — Optimize

Depending on the problem:

```text
Unnecessary renders → React.memo
Expensive calculation → useMemo
Unstable callback → useCallback
Huge list → virtualization
Large bundle → code splitting
Slow API → caching/prefetching
Too much state → colocate state
```

### Step 5 — Measure again

Never assume the optimization helped.

---

# 🔥 Senior Interview Rapid Revision

If the interviewer asks these as quick questions, remember this:

```text
Rendering
→ React creates/updates the UI representation
→ reconciliation
→ commit DOM changes

Re-render
→ state / parent / context / subscribed store changes

Virtual DOM
→ JS representation of UI
→ helps React determine updates

Reconciliation
→ compare previous and next React trees

Fiber
→ React's internal architecture for scheduling/rendering work

useEffect
→ synchronize with external systems
→ dependencies control when it runs

Stale closure
→ callback sees old render's state/props

Race condition
→ older async response overwrites newer state
→ AbortController/request ID

React.memo
→ memoize component

useMemo
→ memoize value

useCallback
→ memoize function

Context
→ share values through tree

Redux
→ predictable centralized state management

Controlled
→ React owns input state

Uncontrolled
→ DOM owns input state

CSR
→ browser renders

SSR
→ server generates HTML per request

SSG
→ HTML generated at build time

Hydration
→ React attaches behavior to server HTML

Suspense
→ fallback while content/code is not ready

Error Boundary
→ catches rendering errors in child tree

StrictMode
→ development checks

Concurrent rendering
→ prioritize/interrupt rendering work

Automatic batching
→ multiple state updates can result in one render

Performance
→ measure → identify → optimize → measure again
```

### ⭐ The senior-level mindset

For a **6-year React interview**, don't answer performance questions with:

> "I'll use `useMemo` and `useCallback`."

A stronger answer is:

> **"First I would profile the application to identify the actual bottleneck. Then, depending on the cause, I might use memoization, state colocation, virtualization, code splitting, caching, or request optimization. After the change, I'd profile again to verify the improvement."**

That answer demonstrates **engineering judgment**, not just knowledge of React APIs.
