## Express.js Middleware — Interview Notes

Middleware is **one of the most important concepts in Express.js**. For a senior-level interview, understand the execution flow, `next()`, ordering, authentication/authorization, and error handling.

---

### 1. What is Middleware?

Middleware is a function that runs **between the incoming request and the final route handler**.

It has access to:

* `req` — request
* `res` — response
* `next` — function to move to the next middleware

```js
const logger = (req, res, next) => {
  console.log(req.method, req.url);
  next();
};

app.use(logger);

app.get('/users', (req, res) => {
  res.send('Users');
});
```

Flow:

```text
Request
   ↓
logger middleware
   ↓ next()
Route handler
   ↓
Response
```

### Interview answer

> Middleware is a function that executes during the request-response lifecycle. It can modify `req`/`res`, perform validation or authentication, terminate the request, or pass control to the next middleware using `next()`.

---

# 2. Middleware Execution Flow

Middleware executes **in the order in which it is registered**.

```js
app.use((req, res, next) => {
  console.log('Middleware 1');
  next();
});

app.use((req, res, next) => {
  console.log('Middleware 2');
  next();
});

app.get('/', (req, res) => {
  console.log('Route handler');
  res.send('Hello');
});
```

Output:

```text
Middleware 1
Middleware 2
Route handler
```

Think:

```text
Request
  ↓
M1
  ↓ next()
M2
  ↓ next()
M3
  ↓
Route
  ↓
Response
```

---

# 3. `next()`

`next()` passes control to the **next middleware/handler**.

```js
app.use((req, res, next) => {
  console.log('Before route');
  next();
});
```

Without `next()`:

```js
app.use((req, res, next) => {
  console.log('Stopped here');
});
```

The request will hang because neither `next()` nor `res.send()` was called.

### Middleware can also terminate the request

```js
app.use((req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).json({
      message: 'Unauthorized'
    });
  }

  next();
});
```

So middleware can do **either**:

```text
next()          → continue
res.send()      → terminate
next(error)     → error handling
```

---

# 4. Application-Level Middleware

Registered directly on the Express application using `app.use()` or `app.METHOD()`.

```js
app.use((req, res, next) => {
  console.log('Every request');
  next();
});
```

You can also limit it to a path:

```js
app.use('/api', (req, res, next) => {
  console.log('Only /api requests');
  next();
});
```

Example:

```text
/api/users     → middleware runs
/api/products  → middleware runs
/users         → middleware doesn't run
```

---

# 5. Router-Level Middleware

Middleware attached to an `express.Router()`.

```js
const router = express.Router();

router.use((req, res, next) => {
  console.log('User router middleware');
  next();
});

router.get('/profile', (req, res) => {
  res.send('Profile');
});

app.use('/users', router);
```

Flow:

```text
GET /users/profile
       ↓
Application middleware
       ↓
User router middleware
       ↓
/profile route
```

### When useful?

For middleware that applies only to a specific feature/module.

```text
/users → user middleware
/orders → order middleware
/admin → admin middleware
```

---

# 6. Built-in Middleware

Express provides some middleware out of the box.

### `express.json()`

Parses JSON request bodies.

```js
app.use(express.json());

app.post('/users', (req, res) => {
  console.log(req.body);

  res.json(req.body);
});
```

Request:

```json
{
  "name": "John",
  "age": 25
}
```

Without `express.json()`, `req.body` may not be parsed as expected.

### `express.urlencoded()`

Parses URL-encoded form data.

```js
app.use(express.urlencoded({ extended: true }));
```

### `express.static()`

Serves static files.

```js
app.use(express.static('public'));
```

For example:

```text
public/
  index.html
  style.css
  image.png
```

---

# 7. Third-Party Middleware

Middleware provided by external npm packages.

Common examples:

```text
cors
helmet
morgan
cookie-parser
compression
```

Example with CORS:

```js
const cors = require('cors');

app.use(cors());
```

Example with logging:

```js
const morgan = require('morgan');

app.use(morgan('dev'));
```

### Interview point

> Third-party middleware adds functionality that isn't provided directly by Express.

---

# 8. Custom Middleware

Middleware written by you.

Example logger:

```js
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

app.use(logger);
```

Another example:

```js
const checkAge = (req, res, next) => {
  if (req.query.age >= 18) {
    next();
  } else {
    res.status(403).send('Not allowed');
  }
};

app.get('/adult', checkAge, (req, res) => {
  res.send('Welcome');
});
```

---

# 9. Authentication Middleware

Authentication answers:

> **Who are you?**

Usually checks JWT/session/cookie.

Example:

```js
const authenticate = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({
      message: 'Authentication required'
    });
  }

  // Verify token here
  req.user = {
    id: 101,
    role: 'admin'
  };

  next();
};
```

Use it:

```js
app.get('/profile', authenticate, (req, res) => {
  res.json(req.user);
});
```

Flow:

```text
Request
  ↓
Authentication
  ↓
Valid token?
  ↓
Route
```

---

# 10. Authorization Middleware

Authorization answers:

> **What are you allowed to do?**

Authentication:

```text
Who are you?
```

Authorization:

```text
What can you access?
```

Example:

```js
const authorizeAdmin = (req, res, next) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({
      message: 'Forbidden'
    });
  }

  next();
};
```

Use both:

```js
app.delete(
  '/users/:id',
  authenticate,
  authorizeAdmin,
  (req, res) => {
    res.send('User deleted');
  }
);
```

Flow:

```text
Request
  ↓
Authentication
  ↓
Authorization
  ↓
Controller
```

### Important interview distinction

```text
401 → Not authenticated
403 → Authenticated but not authorized
```

---

# 11. Error-Handling Middleware ⭐

Express error middleware has **4 parameters**:

```js
(err, req, res, next)
```

Example:

```js
app.use((err, req, res, next) => {
  console.error(err);

  res.status(500).json({
    message: 'Something went wrong'
  });
});
```

To send an error to it:

```js
app.get('/users', (req, res, next) => {
  try {
    throw new Error('Database failed');
  } catch (err) {
    next(err);
  }
});
```

Flow:

```text
Request
  ↓
Route
  ↓
Error occurs
  ↓
next(error)
  ↓
Error middleware
  ↓
Response
```

### Very important

Error middleware should generally be registered **after your routes/middleware**.

```js
app.use('/api', routes);

// Error handler LAST
app.use((err, req, res, next) => {
  res.status(500).json({
    message: err.message
  });
});
```

---

# 12. Middleware Execution Order ⭐⭐⭐

This is one of the most common interview questions.

Consider:

```js
app.use((req, res, next) => {
  console.log('A');
  next();
});

app.use((req, res, next) => {
  console.log('B');
  next();
});

app.get('/users', (req, res, next) => {
  console.log('C');
  next();
});

app.use((req, res) => {
  console.log('D');
  res.send('Done');
});
```

Request:

```text
GET /users
```

Output:

```text
A
B
C
D
```

Because Express follows the **registration order**.

---

# 13. Middleware Can Modify `req`

Very common for authentication.

```js
const authenticate = (req, res, next) => {
  req.user = {
    id: 10,
    name: 'John'
  };

  next();
};

app.get('/profile', authenticate, (req, res) => {
  res.json(req.user);
});
```

Middleware adds information to the request, which later handlers can use.

---

# 14. Middleware Can Modify `res`

For example, adding a response header:

```js
app.use((req, res, next) => {
  res.setHeader('X-App-Version', '1.0');
  next();
});
```

---

# 15. Multiple Middleware on One Route

You can chain multiple middleware functions.

```js
app.post(
  '/users',
  authenticate,
  validateUser,
  authorizeAdmin,
  createUser
);
```

Flow:

```text
Request
 ↓
authenticate
 ↓
validateUser
 ↓
authorizeAdmin
 ↓
createUser
 ↓
Response
```

This is very common in real-world Express applications.

---

# 16. Middleware vs Controller

A useful architecture:

```text
Request
   ↓
Middleware
   ↓
Controller
   ↓
Service
   ↓
Database
```

For example:

```js
router.post(
  '/users',
  authenticate,
  validateUser,
  userController.create
);
```

Where:

```text
authenticate → security
validateUser → validation
controller   → HTTP request/response handling
service      → business logic
```

Don't put everything inside middleware.

---

# 17. `next()` vs `next(error)` ⭐

### Normal flow

```js
next();
```

Means:

> Continue normal middleware chain.

### Error flow

```js
next(error);
```

Means:

> Skip normal middleware and go to error-handling middleware.

Example:

```js
app.get('/users', (req, res, next) => {
  try {
    // database operation
  } catch (error) {
    next(error);
  }
});
```

---

# 18. Common Interview Trap — Forgetting `return`

Bad:

```js
if (!token) {
  res.status(401).send('Unauthorized');
}

next();
```

After sending the response, execution may continue and call `next()`.

Better:

```js
if (!token) {
  return res.status(401).send('Unauthorized');
}

next();
```

Or:

```js
if (!token) {
  res.status(401).send('Unauthorized');
  return;
}

next();
```

---

# 19. Complete Real-World Example ⭐

```js
const express = require('express');

const app = express();
const router = express.Router();

app.use(express.json());

// Application middleware
app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

// Authentication
const authenticate = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({
      message: 'Unauthorized'
    });
  }

  req.user = {
    id: 1,
    role: 'admin'
  };

  next();
};

// Authorization
const authorizeAdmin = (req, res, next) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({
      message: 'Forbidden'
    });
  }

  next();
};

// Router
router.delete(
  '/users/:id',
  authenticate,
  authorizeAdmin,
  (req, res) => {
    res.json({
      message: `User ${req.params.id} deleted`
    });
  }
);

app.use('/api', router);

// Error middleware - should be last
app.use((err, req, res, next) => {
  console.error(err);

  res.status(500).json({
    message: 'Internal Server Error'
  });
});

app.listen(3000);
```

Request:

```text
DELETE /api/users/10
```

Execution:

```text
express.json()
      ↓
logger
      ↓
router
      ↓
authenticate
      ↓
authorizeAdmin
      ↓
route handler
      ↓
response
```

If something fails:

```text
      ↓
next(error)
      ↓
Error middleware
      ↓
500 response
```

---

## ⭐ Interview Quick Revision

| Topic             | Remember                                                     |
| ----------------- | ------------------------------------------------------------ |
| Middleware        | Function executed during request-response lifecycle          |
| `req`             | Request information                                          |
| `res`             | Used to send response                                        |
| `next()`          | Continue to next middleware                                  |
| `next(error)`     | Go to error handler                                          |
| App middleware    | `app.use()`                                                  |
| Router middleware | `router.use()`                                               |
| Built-in          | `express.json()`, `express.urlencoded()`, `express.static()` |
| Third-party       | `cors`, `helmet`, `morgan`, etc.                             |
| Custom            | Middleware written by developer                              |
| Authentication    | **Who are you?**                                             |
| Authorization     | **What can you access?**                                     |
| `401`             | Not authenticated                                            |
| `403`             | Not authorized                                               |
| Error middleware  | `(err, req, res, next)`                                      |
| Execution order   | **Registration order**                                       |
| Error middleware  | Usually registered **last**                                  |

### One-line senior interview answer

> **Express middleware forms a chain through which every request passes. Each middleware can inspect or modify the request/response, terminate the request, continue using `next()`, or forward an error using `next(error)`. The order in which middleware is registered determines the execution order.**
