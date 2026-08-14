## 1. Singleton

**Singleton = only one shared instance of something.**

Example:

```js
class APIClient {
  constructor() {
    if (APIClient.instance) {
      return APIClient.instance;
    }

    APIClient.instance = this;
  }
}

const apiClient = new APIClient();
```

Both:

```js
const a = new APIClient();
const b = new APIClient();

console.log(a === b); // true
```

### Frontend examples

Singleton-like objects are often used for:

* API clients
* Configuration
* Logging
* Global services

### React perspective

You don't usually need to manually implement Singleton in React. Modules themselves are commonly cached after being imported, which can naturally give you a shared module instance.

**Remember:**

> Singleton = one shared instance.

---

# 2. Factory

**Factory = creates objects without the caller needing to know exactly how they're created.**

Example:

```js
function createButton(type) {
  if (type === "primary") {
    return new PrimaryButton();
  }

  if (type === "secondary") {
    return new SecondaryButton();
  }
}
```

Usage:

```js
const button = createButton("primary");
```

The caller doesn't care about the construction details.

### Frontend examples

Could be used for:

* Creating different API clients
* Creating UI components based on configuration
* Creating different form field types

Example concept:

```js
createComponent("input");
createComponent("select");
createComponent("checkbox");
```

**Remember:**

> Factory = centralize object/component creation logic.

---

# 3. Observer

**Observer = one object watches another and gets notified when its state changes.**

Conceptually:

```text
Subject
   ↓
State changes
   ↓
Notify observers
   ↓
Observer 1
Observer 2
Observer 3
```

Example:

```js
class Store {
  listeners = [];

  subscribe(listener) {
    this.listeners.push(listener);
  }

  notify() {
    this.listeners.forEach(listener => listener());
  }
}
```

### React connection

React state subscriptions and external state-management libraries use concepts similar to the Observer pattern.

Examples:

* Redux subscriptions
* Zustand subscriptions
* Browser events

**Remember:**

> Observer = subscribe to changes and get notified.

---

# 4. Module

**Module pattern = encapsulate related data and functionality and expose only what is needed.**

Modern JavaScript modules make this much easier:

```js
// userService.js

const users = [];

function addUser(user) {
  users.push(user);
}

export { addUser };
```

`users` is not directly exposed.

Other files can use:

```js
import { addUser } from "./userService";
```

### Benefits

* Encapsulation
* Reusability
* Separation of concerns
* Avoid global variables

### React

Almost every React application uses ES modules:

```js
import Button from "./Button";
export default Button;
```

**Remember:**

> Module = encapsulate code and expose a controlled public API.

---

# 5. Pub/Sub

**Pub/Sub = Publisher/Subscriber communication through a shared event channel.**

Unlike Observer, the publisher doesn't directly know who is listening.

```text
Publisher
    ↓
  Event Bus
    ↓
+---+---+
↓       ↓
Sub A  Sub B
```

Example:

```js
// subscribe
eventBus.subscribe("login", handler);

// publish
eventBus.publish("login", user);
```

The publisher simply says:

> "login event happened."

It doesn't need to know who subscribed.

### Observer vs Pub/Sub

**Observer:**

```text
Subject → Observers
```

Usually direct relationship.

**Pub/Sub:**

```text
Publisher → Event Bus → Subscribers
```

Decoupled through an intermediary.

### Frontend examples

* Event bus
* Application-wide events
* Micro-frontends
* Cross-component communication

**Remember:**

> Pub/Sub = communicate through events without directly coupling publisher and subscriber.

---

# 6. Composition Over Inheritance

This is **very important in React interviews**.

The idea:

> Prefer combining small reusable pieces instead of creating deep inheritance hierarchies.

### Inheritance

```text
BaseComponent
      ↓
UserComponent
      ↓
AdminUserComponent
      ↓
SuperAdminComponent
```

Can become difficult to maintain.

### Composition

Instead:

```jsx
<User>
  <Avatar />
  <UserDetails />
  <Actions />
</User>
```

Components are combined to create larger behavior.

React strongly encourages composition.

Example:

```jsx
function Card({ children }) {
  return <div className="card">{children}</div>;
}
```

Usage:

```jsx
<Card>
  <UserProfile />
</Card>
```

### Why composition?

* Reusable
* Flexible
* Less coupling
* Easier to maintain
* Fits React's component model

**Remember:**

> React generally favors composition instead of inheritance for sharing/reusing UI behavior.

---

# 7. Higher-Order Components — HOC

**HOC = a function that takes a component and returns an enhanced component.**

```js
function withAuth(Component) {
  return function AuthenticatedComponent(props) {
    if (!isAuthenticated()) {
      return <Login />;
    }

    return <Component {...props} />;
  };
}
```

Usage:

```js
const ProtectedPage = withAuth(Page);
```

Conceptually:

```text
Component
    ↓
withAuth()
    ↓
Enhanced Component
```

### Common historical React examples

* `connect()` from React Redux
* Authentication HOCs
* Permission HOCs
* Logging HOCs

### Important

HOCs were much more common before **Hooks** became standard.

Today, many use cases can be handled more simply with:

* Custom Hooks
* Composition
* Wrapper components

### Interview answer

> "A HOC is a function that takes a component and returns a new enhanced component. It's useful for sharing cross-cutting behavior, although Hooks have replaced many HOC use cases in modern React."

---

# 8. Render Props

**Render Props = pass a function as a prop so the component can control what gets rendered.**

Example:

```jsx
<DataProvider
  render={(data) => (
    <UserList users={data} />
  )}
/>
```

The `DataProvider` handles the data logic, while the caller decides how to render it.

Conceptually:

```text
DataProvider
     ↓
   data
     ↓
render function
     ↓
UI
```

Another example:

```jsx
<MouseTracker
  render={(position) => (
    <div>
      X: {position.x}, Y: {position.y}
    </div>
  )}
/>
```

### Why use it?

It allows sharing behavior while giving the consuming component control over the UI.

### Modern React

Like HOCs, Render Props are less common today because **Hooks** usually provide a simpler way to share logic.

For example, instead of:

```jsx
<DataProvider render={data => <UserList data={data} />} />
```

you might use:

```jsx
function UserList() {
  const data = useUserData();

  return <div>{/* render */}</div>;
}
```

**Remember:**

> Render Props = share behavior through a function prop that controls rendering.

---

# 🔥 Most Important Comparisons

## Observer vs Pub/Sub

```text
Observer
Subject → Observer
Direct relationship

Pub/Sub
Publisher → Event Bus → Subscriber
Indirect/decoupled relationship
```

---

## HOC vs Render Props

Both historically solve:

> **"How can I reuse component logic?"**

### HOC

```text
Component
   ↓
HOC
   ↓
Enhanced Component
```

### Render Props

```text
Component
   ↓
calls render function
   ↓
UI
```

Modern React often prefers:

```text
Custom Hooks
     ↓
Shared logic
```

---

## Inheritance vs Composition

### Inheritance

```text
Parent
 ↓
Child
 ↓
Grandchild
```

### Composition

```text
Component
  ↓
+--------+--------+
↓        ↓        ↓
Header  Content  Footer
```

React generally prefers **composition**.

---

# 🧠 1-Minute Revision

```text
Singleton
→ One shared instance

Factory
→ Centralized object/component creation

Observer
→ Subscribe to changes and get notified

Module
→ Encapsulate code and expose what is needed

Pub/Sub
→ Publisher and subscriber communicate through an event channel

Composition
→ Build complex UI by combining smaller components
→ Preferred over inheritance in React

HOC
→ Function that takes component and returns enhanced component
→ Older/common React pattern

Render Props
→ Pass function as prop to share behavior/control rendering
→ Older/common React pattern
```

### ⭐ For your 6-year React interview, prioritize:

**1. Composition over inheritance** — very important in React.

**2. HOC vs Custom Hooks** — know why Hooks replaced many HOC use cases.

**3. Observer vs Pub/Sub** — understand the communication difference.

**4. Module** — understand ES modules and encapsulation.

The **Singleton and Factory patterns** are useful to recognize, but I wouldn't spend much preparation time on their textbook implementations unless the job specifically emphasizes design patterns.
