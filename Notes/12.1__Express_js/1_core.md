## 1. What is Express.js? ⭐

**Express.js is a lightweight web framework for Node.js** used to build:

* REST APIs
* Web servers
* Backend applications
* Middleware-based applications

Node.js provides low-level HTTP capabilities, while Express makes things like **routing, middleware, request/response handling, and error handling** easier.

```text
Node.js
   ↓
HTTP module
   ↓
Express.js
   ↓
Routes + Middleware + Controllers
   ↓
REST API
```

Example:

```js
const express = require("express");

const app = express();

app.get("/users", (req, res) => {
  res.json([{ id: 1, name: "John" }]);
});
```

### Interview point

> Express is a framework built on Node.js, not a replacement for Node.js.

---

# 2. Creating an Express Server ⭐

Basic Express server:

```js
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
```

### Flow

```text
Client
  ↓
http://localhost:3000
  ↓
Express
  ↓
Route
  ↓
Response
```

### Important

`app.listen()` starts the server and makes it listen for incoming connections.

---

# 3. Routing ⭐

**Routing determines how an application responds to a particular URL + HTTP method.**

Example:

```js
app.get("/users", (req, res) => {
  res.json({ message: "Get users" });
});

app.post("/users", (req, res) => {
  res.json({ message: "Create user" });
});
```

Routes are generally:

```text
HTTP Method + URL → Handler
```

For larger applications, use `express.Router()`:

```js
const router = express.Router();

router.get("/", getUsers);
router.post("/", createUser);

app.use("/users", router);
```

Now:

```text
GET  /users
POST /users
```

### Interview point

Keep routes thin; typically put business logic in **controllers/services**, rather than writing everything directly inside route handlers.

---

# 4. HTTP Methods

Express supports HTTP methods such as:

```js
app.get("/users", ...);
app.post("/users", ...);
app.put("/users/:id", ...);
app.patch("/users/:id", ...);
app.delete("/users/:id", ...);
```

| Method  | Purpose                              |
| ------- | ------------------------------------ |
| GET     | Retrieve                             |
| POST    | Create                               |
| PUT     | Replace                              |
| PATCH   | Partial update                       |
| DELETE  | Delete                               |
| OPTIONS | CORS/preflight and supported methods |
| HEAD    | Headers without response body        |

Example:

```js
app.get("/users", getUsers);
app.post("/users", createUser);
app.delete("/users/:id", deleteUser);
```

---

# 5. Route Parameters ⭐

Route parameters are **dynamic values embedded in the URL path**.

Example:

```js
app.get("/users/:id", (req, res) => {
  console.log(req.params.id);
});
```

Request:

```text
GET /users/123
```

Then:

```js
req.params.id
// "123"
```

Multiple parameters:

```js
app.get("/users/:userId/orders/:orderId", (req, res) => {
  console.log(req.params.userId);
  console.log(req.params.orderId);
});
```

Request:

```text
/users/10/orders/500
```

Result:

```text
userId = "10"
orderId = "500"
```

---

Note:

The issue is with this line:

```js
res.send('router get', req.params.id);
```

`res.send()` accepts **one response body**, not multiple arguments like `console.log()`.

### Fix

Use a template string:

```js
router.get('/:id', (req, res) => {
  res.send(`router get ${req.params.id}`);
});
```

Then call:

```text
GET http://localhost:3000/userRouter/123
```

Response:

```text
router get 123
```

### Or return JSON

```js
router.get('/:id', (req, res) => {
  res.json({
    message: 'router get',
    id: req.params.id
  });
});
```

Response:

```json
{
  "message": "router get",
  "id": "123"
}
```

### Why `req.params.id` itself is correct

Your route is:

```js
router.get('/:id', ...)
```

and you've mounted the router here:

```js
app.use('/userRouter', router);
```

So the **actual URL** is:

```text
/userRouter/:id
```

For example:

```text
/userRouter/123
```

Therefore:

```js
req.params.id
// "123"
```

One small point: route parameters are received as **strings**, so `"123"` is not the number `123`. If you need a number:

```js
const id = Number(req.params.id);
```


---

### Route parameter vs query parameter

```text
/users/123
       ↑
   route parameter
```

```text
/users?id=123
       ↑
   query parameter
```

---

# 6. Query Parameters ⭐

Query parameters are values after `?` in the URL.

Example:

```text
GET /users?page=2&limit=10&role=admin
```

Access them using:

```js
app.get("/users", (req, res) => {
  console.log(req.query.page);
  console.log(req.query.limit);
  console.log(req.query.role);
});
```

Output conceptually:

```js
{
  page: "2",
  limit: "10",
  role: "admin"
}
```

### Common uses

* Filtering
* Searching
* Sorting
* Pagination

Example:

```text
/products?category=mobile&sort=price&page=2
```

### Important

Query parameter values are typically received as **strings**.

So you may need:

```js
const page = Number(req.query.page);
```

---

# 7. Request Body ⭐

The **request body** contains data sent by the client, commonly with POST, PUT, or PATCH.

Example request:

```http
POST /users
Content-Type: application/json

{
  "name": "John",
  "email": "john@example.com"
}
```

To read JSON request bodies, enable Express's JSON middleware:

```js
app.use(express.json());
```

Then:

```js
app.post("/users", (req, res) => {
  console.log(req.body.name);
  console.log(req.body.email);
});
```

### Important

Without:

```js
app.use(express.json());
```

Express won't automatically parse JSON request bodies.

For HTML form data:

```js
app.use(express.urlencoded({ extended: true }));
```

---

# 8. `req.params` ⭐

`req.params` contains **route parameters**.

```js
app.get("/users/:id", (req, res) => {
  console.log(req.params);
});
```

Request:

```text
GET /users/123
```

Result:

```js
{
  id: "123"
}
```

Example:

```js
const userId = req.params.id;
```

### Remember

```text
/users/:id
       ↓
req.params.id
```

---

# 9. `req.query` ⭐

`req.query` contains **query string parameters**.

```js
app.get("/users", (req, res) => {
  console.log(req.query);
});
```

Request:

```text
/users?page=2&role=admin
```

Result:

```js
{
  page: "2",
  role: "admin"
}
```

### Remember

```text
/users?page=2
       ↓
req.query.page
```

---

# 10. `req.body` ⭐

`req.body` contains the parsed request body.

```js
app.use(express.json());

app.post("/users", (req, res) => {
  console.log(req.body);
});
```

Request:

```json
{
  "name": "John",
  "age": 30
}
```

Then:

```js
req.body
```

contains:

```js
{
  name: "John",
  age: 30
}
```

### Important

`req.body` depends on body-parsing middleware such as:

```js
express.json()
express.urlencoded()
```

---

# 11. `req.headers` ⭐

`req.headers` contains HTTP request headers.

Example request:

```http
GET /users
Authorization: Bearer abc123
Content-Type: application/json
```

Access:

```js
app.get("/users", (req, res) => {
  console.log(req.headers);
  console.log(req.headers.authorization);
});
```

Common headers:

```text
Authorization
Content-Type
Accept
Cookie
User-Agent
Origin
```

### Authentication example

```js
const authHeader = req.headers.authorization;
```

Could contain:

```text
Bearer eyJhbGciOi...
```

---

# 12. `req.cookies` ⭐

`req.cookies` contains cookies sent by the browser.

However, Express doesn't parse cookies by default.

You typically use the `cookie-parser` middleware:

```js
const cookieParser = require("cookie-parser");

app.use(cookieParser());
```

Then:

```js
app.get("/", (req, res) => {
  console.log(req.cookies);
});
```

If the browser sends:

```http
Cookie: sessionId=abc123
```

You can access:

```js
req.cookies.sessionId
```

### Important security concepts

Authentication cookies are commonly configured with:

```text
HttpOnly
Secure
SameSite
```

For example, when setting a cookie:

```js
res.cookie("sessionId", "abc123", {
  httpOnly: true,
  secure: true,
  sameSite: "strict"
});
```

---

# 13. `res.send()` ⭐

`res.send()` sends a response to the client.

Example:

```js
app.get("/", (req, res) => {
  res.send("Hello World");
});
```

Can send:

* String
* HTML
* Buffer
* Object/array

Example:

```js
res.send({ name: "John" });
```

For APIs, `res.json()` is generally clearer when intentionally returning JSON.

---

# 14. `res.json()` ⭐

`res.json()` sends a JSON response.

Example:

```js
app.get("/users", (req, res) => {
  res.json({
    id: 1,
    name: "John"
  });
});
```

Response:

```json
{
  "id": 1,
  "name": "John"
}
```

Express handles JSON serialization and sets an appropriate content type.

### Common API pattern

```js
res.status(200).json({
  message: "Success",
  data: users
});
```

---

# 15. `res.status()` ⭐

`res.status()` sets the HTTP status code.

Example:

```js
res.status(201).json({
  message: "User created"
});
```

Common examples:

```js
res.status(200); // Success
res.status(201); // Created
res.status(400); // Bad Request
res.status(401); // Unauthorized
res.status(403); // Forbidden
res.status(404); // Not Found
res.status(500); // Server Error
```

### Important

`res.status()` **doesn't send the response by itself**.

Usually chain it with:

```js
res.status(404).json({
  message: "User not found"
});
```

---

# 16. `res.sendStatus()` ⭐

`res.sendStatus(code)`:

1. Sets the HTTP status code
2. Sends a standard response body associated with that status

Example:

```js
res.sendStatus(404);
```

Equivalent conceptually to:

```js
res.status(404).send("Not Found");
```

Another:

```js
res.sendStatus(204);
```

### Important difference

```js
res.status(404)
```

→ only sets status; response isn't finished.

```js
res.sendStatus(404)
```

→ sets status **and sends a response**.

```js
res.status(404).json({
  message: "User not found"
});
```

→ sets status and sends a custom JSON response.

---

# ⭐ `req` vs `res` — Easy Revision

```text
req = Request from client
res = Response from server
```

### `req`

| Property      | Contains         |
| ------------- | ---------------- |
| `req.params`  | Route parameters |
| `req.query`   | Query parameters |
| `req.body`    | Request body     |
| `req.headers` | Request headers  |
| `req.cookies` | Cookies          |

### `res`

| Method             | Purpose                             |
| ------------------ | ----------------------------------- |
| `res.send()`       | Send response                       |
| `res.json()`       | Send JSON                           |
| `res.status()`     | Set status                          |
| `res.sendStatus()` | Set status + send standard response |

---

# 🔥 One API Combining Everything

```js
const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();

app.use(express.json());
app.use(cookieParser());

app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  const page = req.query.page;
  const token = req.headers.authorization;
  const session = req.cookies.sessionId;

  res.status(200).json({
    id,
    page,
    token,
    session
  });
});

app.post("/users", (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({
      message: "Name and email are required"
    });
  }

  res.status(201).json({
    message: "User created",
    user: { name, email }
  });
});

app.listen(3000);
```

A request like:

```text
GET /users/10?page=2
Authorization: Bearer abc
Cookie: sessionId=xyz
```

gives you:

```text
req.params.id          → "10"
req.query.page         → "2"
req.headers.authorization → "Bearer abc"
req.cookies.sessionId  → "xyz"
```

And for:

```text
POST /users
```

with:

```json
{
  "name": "John",
  "email": "john@example.com"
}
```

you access it using:

```text
req.body.name
req.body.email
```

---

## 🎯 Most Important Express Interview Questions

For this section, make sure you can answer these without looking at notes:

1. **What is Express.js and why do we use it?**
2. **What is routing in Express?**
3. **What is the difference between `req.params`, `req.query`, and `req.body`?**
4. **How do you read request headers?**
5. **How do you handle JSON request bodies?**
6. **How do you read cookies in Express?**
7. **`res.send()` vs `res.json()`?**
8. **`res.status()` vs `res.sendStatus()`?**
9. **How would you return a 404 response?**
10. **How would you return a 201 response after creating a resource?**
11. **Why do we use `express.json()`?**
12. **What is `express.Router()` and why is it useful?**
