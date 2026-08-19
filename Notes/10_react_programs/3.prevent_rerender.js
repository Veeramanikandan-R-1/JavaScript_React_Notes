// Question

import React, { Component, PureComponent } from 'react';

// // App with 2 buttons stepping by 1 up & down.
// // Clicker is being re-rendered multiple times, how can we improve it?
class Clicker extends PureComponent {
  render() {
    console.log(`[${Date.now()}] render Clicker`, JSON.stringify(this.props));
    return <button onClick={this.props.onClick}>{this.props.children}</button>;
  }
}

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      countUp: 0,
      countDown: 0,
    };
  }

  onCountUp(c) {
    this.setState({ countUp: c });
  }

  onCountDown(c) {
    this.setState({ countDown: c });
  }

  render() {
    const { countUp, countDown } = this.state;
    console.log('parent');
    return (
      <div>
        <h1>Count UP: {countUp}</h1>
        <h1>Count Down: {countDown}</h1>

        <button onClick={() => this.onCountUp(countUp + 1)}>Count Up</button>
        <Clicker onClick={() => this.onCountDown(countDown - 1)}>
          Count Down
        </Clicker>
      </div>
    );
  }
}

// export default App;


// Answer

/*

Yes, this is a good example for discussing **unnecessary re-renders and `PureComponent`**, but there is an important issue in your code.

### What is happening?

When you click **Count Up**:

```js
this.setState({ countUp: c });
```

`App` re-renders.

During that render, this creates a **new function**:

```js
<Clicker onClick={() => this.onCountDown(countDown - 1)}>
```

So even though `countDown` hasn't changed, `Clicker` receives a new `onClick` function.

Because the function reference changed:

```js
old onClick !== new onClick
```

`PureComponent` sees the prop as changed and therefore **re-renders `Clicker`**.

---

### How to fix it

Since you're using class components, bind the handlers once in the constructor:

*/

import React, { PureComponent } from 'react';

class Clicker extends PureComponent {
  render() {
    console.log('Clicker render');

    return (
      <button onClick={this.props.onClick}>
        {this.props.children}
      </button>
    );
  }
}

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      countUp: 0,
      countDown: 0,
    };

    this.onCountUp = this.onCountUp.bind(this);
    this.onCountDown = this.onCountDown.bind(this);
  }

  onCountUp() {
    this.setState((prevState) => ({
      countUp: prevState.countUp + 1,
    }));
  }

  onCountDown() {
    this.setState((prevState) => ({
      countDown: prevState.countDown - 1,
    }));
  }

  render() {
    const { countUp, countDown } = this.state;

    console.log('Parent render');

    return (
      <div>
        <h1>Count UP: {countUp}</h1>
        <h1>Count Down: {countDown}</h1>

        <button onClick={this.onCountUp}>
          Count Up
        </button>

        <Clicker onClick={this.onCountDown}>
          Count Down
        </Clicker>
      </div>
    );
  }
}

export default App;

/*

### Now what happens?

When you click **Count Up**:

```text
App re-renders
     ↓
countUp changes
     ↓
Clicker receives SAME onClick reference
     ↓
PureComponent compares props
     ↓
props haven't changed
     ↓
Clicker does NOT re-render
```

When you click **Count Down**:

```text
App re-renders
     ↓
countDown changes
     ↓
Clicker needs to update
     ↓
Clicker re-renders
```

### Key interview point

`PureComponent` performs **shallow comparison** of props and state.

So this:

```js
onClick={() => this.onCountDown(countDown - 1)}
```

creates a **new function on every render**.

Therefore:

```js
oldFunction !== newFunction // true
```

And `PureComponent` considers the prop changed.

This is the class-component equivalent of a common functional-component issue where you use `React.memo` but pass an inline function:

```jsx
<Clicker onClick={() => handleClick()} />
```

In that case, you'd typically use `useCallback` to preserve the function reference.
*/