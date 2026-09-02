HPE client round (2)

1. React todo app

- add a input box and then display the value entered below input box
- create a todo, add a button onclick of it todo should get added in the table with status and pending
- add a button for each todo to mark it as completed and that todo should be strike through after clicking it

2. React

fetch the api call result and show it in table

3. is/why javascript we call as object oriented program (explain with prototype)

4. how our html code is being converted to page explain the process, how js is getting converted(async/defer)

5. how js files are executed in browser

6. how js engine works (call stack, eventloop, web apis) (3.1 basics)


Answers

1.
```js
import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [inputVal, setInputVal] = useState('');
  const [todos, setTodos] = useState([]);

  const changeHanlder = (e) => {
    setInputVal(e.target.value);
  };

  const todoHandler = () => {
    if (!inputVal) return;
    const updatedTodos = [...todos, { description: inputVal, isDone: false }];
    setTodos(updatedTodos);
  };

  const doneHandler = (entryIndex) => {
    console.log('entryIndex', entryIndex);
    const newTodos = [...todos].map((todo, index) => {
      if (index === entryIndex) {
        return { ...todo, isDone: true };
      }
      return todo;
    });
    console.log('newTodos', newTodos);
    setTodos(newTodos);
  };
  return (
    <div>
      <input onChange={changeHanlder} name="inputBox" />
      <button onClick={todoHandler}>Add Todo</button>
      {/* <p>Value: {inputVal}</p> */}
      {/* <p className="completeTodo">test</p> */}
      <table>
        <th>
          <tr>
            <td>Todo Description</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </th>

        <tbody>
          {todos.map((todo, index) => {
            const { description, isDone } = todo;
            console.log('isDone', isDone);
            return (
              <tr key={index}>
                <td className={isDone ? 'completeTodo' : ''}>{description}</td>
                <td>{isDone ? 'Completed' : 'Pending'}</td>
                {!isDone && (
                  <td>
                    <button
                      onClick={() => {
                        doneHandler(index);
                      }}
                    >
                      Complete
                    </button>
                  </td>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
```
---

2. 
```js
import React, { useState, useEffect } from 'react';
import './style.css';

export default function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    console.log('start');
    const fetchTodos = async () => {
      let response = await fetch('https://jsonplaceholder.typicode.com/todos');
      response = await response.json();
      console.log('response', response);
      setTodos(response)
    };
    fetchTodos();
  
  }, []);

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <table>
        <
        </table>
    </div>
  );
}
```

---

3.

"JavaScript is a multi-paradigm language and supports object-oriented programming. However, unlike Java, JavaScript is fundamentally prototype-based rather than class-based. The class syntax introduced in ES6 is syntactic sugar over JavaScript's existing prototype mechanism."

---

4. 
Yes. Think of it as:

**HTML → DOM, CSS → CSSOM, JS → modifies DOM/CSSOM → Render Tree → Layout → Paint → Composite**

### Browser rendering process

```text
HTML
 │
 ▼
HTML Parser
 │
 ▼
DOM
 │
 │
CSS ──→ CSS Parser ──→ CSSOM
 │                    │
 └────────┬───────────┘
          ▼
     Render Tree
          │
          ▼
        Layout
          │
          ▼
         Paint
          │
          ▼
      Composite
          │
          ▼
     🖥️ Pixels on screen
```

### 1. Browser receives HTML

For example:

```html
<h1>Hello</h1>
<p>Welcome</p>
```

The browser's **HTML parser** reads the HTML and creates the **DOM (Document Object Model)**:

```text
Document
 └── html
      └── body
           ├── h1 → Hello
           └── p  → Welcome
```

---

### 2. Browser processes CSS

```css
h1 {
  color: red;
  font-size: 30px;
}
```

The CSS parser creates the **CSSOM (CSS Object Model)**.

It contains information about how elements should be styled.

---

### 3. DOM + CSSOM → Render Tree

The browser combines the DOM and CSSOM to determine **what should actually be displayed**.

```text
DOM + CSSOM
     ↓
Render Tree
```

For example, an element with:

```css
display: none;
```

is not included in the render tree because it isn't visually displayed.

---

### 4. JavaScript executes

Suppose:

```js
document.querySelector("h1").textContent = "Hello World";
```

JavaScript can modify:

* DOM
* CSS/styles
* attributes
* content
* layout

So JavaScript can cause the browser to **recalculate rendering**.

---

### 5. Layout (Reflow)

The browser calculates the **exact position and size** of elements.

For example:

```text
h1 → x: 20px, y: 10px, width: 300px, height: 40px
p  → x: 20px, y: 60px, width: 500px, height: 20px
```

This is called **Layout** (often called **Reflow** when recalculated).

---

### 6. Paint

The browser converts those calculated elements into visual information:

* Text
* Colors
* Borders
* Shadows
* Images
* Backgrounds

This is the **Paint** phase.

---

### 7. Composite

Modern browsers divide rendering into **layers** and the compositor combines those layers to produce the final image.

For example:

```text
Layer 1 → Background
Layer 2 → Content
Layer 3 → Fixed header
Layer 4 → Animation
       ↓
   Composite
       ↓
    Screen
```

---

### Important: Where does the JavaScript engine fit?

The browser contains a **JavaScript engine** (Chrome uses **V8**).

```text
HTML → DOM
CSS  → CSSOM

JS → JavaScript Engine
          ↓
       DOM/CSS changes
          ↓
       Rendering
```

For example:

```js
button.addEventListener("click", () => {
  document.body.style.background = "red";
});
```

When you click:

```text
Click
 ↓
JS Event
 ↓
JavaScript executes
 ↓
DOM/CSS changes
 ↓
Style calculation
 ↓
Layout (if required)
 ↓
Paint (if required)
 ↓
Composite
 ↓
Screen updated
```

### 🎯 Interview version

> **"The browser parses HTML into the DOM and CSS into the CSSOM. It combines them to create the render tree, calculates layout, paints the visual elements, and composites layers to display pixels on the screen. JavaScript runs through the browser's JS engine and can modify the DOM or styles, which may trigger style recalculation, layout, paint, and compositing."**

One important correction to remember: **JavaScript itself isn't converted into HTML/CSS.** It executes and can **change the DOM and styles**, which then causes the browser's rendering pipeline to run.

---

5. 
JavaScript execution in the browser is roughly:

**Download → Parse → Compile → Execute**

### 1. Browser finds the JS file

HTML:

```html
<script src="app.js"></script>
```

The browser's HTML parser encounters the `<script>` tag and requests `app.js`.

```text
HTML
 ↓
<script src="app.js">
 ↓
Download app.js
```

### 2. JavaScript engine parses the code

The browser passes the JS to its JavaScript engine.

For Chrome/Edge, that's **V8**.

```text
app.js
  ↓
JavaScript Engine (V8)
  ↓
Parsing
```

The engine checks the code and builds internal representations such as an **AST (Abstract Syntax Tree)**.

For example:

```js
const x = 10;
console.log(x);
```

is parsed into a structure representing:

```text
Variable Declaration
      ↓
   x = 10

Function Call
      ↓
 console.log(x)
```

### 3. Engine compiles the code

Modern JS engines use **JIT (Just-In-Time) compilation**.

Very roughly:

```text
JavaScript
    ↓
Parse
    ↓
Bytecode / internal representation
    ↓
Execute
    ↓
Hot code → optimized machine code
```

The engine doesn't simply interpret every line forever. Frequently executed ("hot") code can be optimized into **machine code** for faster execution.

### 4. JavaScript executes

For:

```js
const x = 10;

function add(a, b) {
  return a + b;
}

console.log(add(x, 20));
```

the engine manages execution using concepts such as:

* **Execution Context**
* **Call Stack**
* **Heap**
* **Lexical Environment**
* **Scope**
* **Garbage Collector**

Simplified:

```text
          JavaScript Engine
                 │
       ┌─────────┴─────────┐
       │                   │
     Heap              Call Stack
   Objects/data        Function calls
```

### 5. What about async operations?

This is where the **browser Web APIs + Event Loop** come in.

For example:

```js
console.log("A");

setTimeout(() => {
  console.log("B");
}, 1000);

console.log("C");
```

Execution:

```text
Call Stack
   │
   ├── console.log("A") → A
   │
   ├── setTimeout()
   │       ↓
   │    Browser Timer API
   │
   └── console.log("C") → C

After 1 sec:
Timer callback
   ↓
Callback Queue
   ↓
Event Loop
   ↓
Call Stack
   ↓
console.log("B") → B
```

Output:

```text
A
C
B
```

### 🎯 Interview answer

> **"When the browser encounters a JavaScript file, it downloads it and passes it to the browser's JavaScript engine, such as V8. The engine parses the code, compiles it using techniques including JIT compilation, and executes it using the call stack and memory heap. For asynchronous operations, the browser provides Web APIs, and completed callbacks are handled through the event loop and queues."**

**Key point:** The **browser** provides the environment (DOM, Web APIs, events), while the **JavaScript engine** parses, compiles, and executes JavaScript.

---

6. 
