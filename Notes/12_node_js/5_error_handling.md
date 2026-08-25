## Error Handling — Express.js Interview Notes

Error handling means **detecting errors, passing them correctly, logging them, and returning a consistent response to the client without crashing the server**.

---

### 1. `try/catch`

Used to catch **synchronous errors** and errors from `await` operations.

```js
try {
  const user = await getUser();
  console.log(user);
} catch (error) {
  console.error(error);
}
```

**Interview point:** `try/catch` catches errors thrown inside its `try` block.

---

### 2. Async Error Handling

With `async/await`, use `try/catch` or pass the error to Express's error middleware.

```js
app.get('/users/:id', async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);

    res.json(user);
  } catch (error) {
    next(error); // passes error to global middleware
  }
});
```

For promises, `.catch()` can also be used:

```js
getUser()
  .then(user => res.json(user))
  .catch(next);
```

**Important interview point:** Don't leave rejected promises unhandled.

In modern Express, async route errors are handled more conveniently, but understanding `next(error)` is still important.

---

### 3. Custom Error Class

Instead of throwing generic `Error`, create an error containing additional information such as **status code** and **error type**.

```js
class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true;
  }
}
```

Usage:

```js
throw new AppError('User not found', 404);
```

Why?

Instead of every route doing:

```js
res.status(404).json(...)
```

you can centralize the response logic.

---

### 4. Global Error Middleware

Express has special error middleware with **4 parameters**:

```js
app.use((err, req, res, next) => {
  console.error(err);

  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || 'Internal Server Error'
  });
});
```

It should generally be registered **after your routes**:

```js
app.use('/users', userRoutes);

// Global error handler
app.use((err, req, res, next) => {
  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message
  });
});
```

Flow:

```text
Route
  ↓
Error occurs
  ↓
next(error)
  ↓
Global Error Middleware
  ↓
HTTP Response
```

**Interview question:** How does Express identify error middleware?

**Answer:** By its four arguments:

```js
(err, req, res, next)
```

---

### 5. Operational vs Programming Errors

This is an important interview concept.

#### Operational errors

Expected problems that can happen during normal application operation.

Examples:

* User not found
* Invalid input
* Unauthorized request
* Database temporarily unavailable
* File not found
* Request timeout

These should generally be **handled gracefully**.

```js
throw new AppError('User not found', 404);
```

#### Programming errors

Bugs in the application code.

Examples:

```js
const user = undefined;
console.log(user.name); // TypeError
```

Other examples:

* Undefined variable
* Incorrect function usage
* Logic bugs
* Unexpected null/undefined
* Invalid assumptions in code

**Key distinction:**

> Operational error = expected runtime problem
> Programming error = bug in the code

You generally don't try to "recover" from unknown programming errors as if they were normal business failures.

---

### 6. Proper Error Responses

Don't return random error formats from different APIs.

❌ Bad:

```json
{
  "error": "something went wrong"
}
```

Another API:

```json
{
  "message": "User not found"
}
```

Prefer a consistent structure:

```json
{
  "success": false,
  "statusCode": 404,
  "message": "User not found"
}
```

Common HTTP status codes:

| Status | Meaning               | Example                        |
| ------ | --------------------- | ------------------------------ |
| `400`  | Bad Request           | Invalid input                  |
| `401`  | Unauthorized          | Missing/invalid authentication |
| `403`  | Forbidden             | User doesn't have permission   |
| `404`  | Not Found             | User doesn't exist             |
| `409`  | Conflict              | Duplicate email                |
| `422`  | Unprocessable Entity  | Validation failure             |
| `500`  | Internal Server Error | Unexpected server error        |
| `503`  | Service Unavailable   | Dependency/service unavailable |

**Important:** Don't expose sensitive internal details to clients.

❌ Don't return:

```json
{
  "message": "MongoServerError: connection failed at /app/database/config..."
}
```

Instead:

```json
{
  "success": false,
  "message": "Internal server error"
}
```

Log the detailed error internally.

---

### 7. Logging

Logging helps developers **debug, monitor, and troubleshoot production issues**.

Basic:

```js
console.error(error);
```

Production applications commonly use logging libraries such as **Winston** or **Pino**.

A useful log can contain:

```text
Timestamp
Log level
Request method
URL
Status code
Error message
Stack trace
Request/correlation ID
```

Example:

```js
logger.error({
  message: err.message,
  stack: err.stack,
  path: req.originalUrl,
  method: req.method
});
```

### Log levels

Common levels:

```text
debug
info
warn
error
```

**Important:** Never log sensitive information such as:

* Passwords
* JWT/access tokens
* Credit-card details
* Sensitive personal data

---

# ⭐ Interview-Level Complete Example

Putting the concepts together:

```js
class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true;
  }
}

app.get('/users/:id', async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      throw new AppError('User not found', 404);
    }

    res.json({
      success: true,
      data: user
    });
  } catch (error) {
    next(error);
  }
});

// Global error middleware
app.use((err, req, res, next) => {
  console.error(err.stack);

  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    success: false,
    statusCode,
    message:
      err.isOperational
        ? err.message
        : 'Internal Server Error'
  });
});
```

### 🎯 Remember this for interview

**Error handling flow:**

```text
Error occurs
    ↓
try/catch
    ↓
next(error)
    ↓
Global Error Middleware
    ↓
Log detailed error
    ↓
Return safe + consistent response
```

**Most important points to say in an interview:**

1. Use `try/catch` for `async/await` errors.
2. Use `next(error)` to forward errors to Express error middleware.
3. Global error middleware has `(err, req, res, next)`.
4. Use custom errors for status codes/business errors.
5. Distinguish operational errors from programming bugs.
6. Return consistent HTTP status codes and response formats.
7. Log detailed errors internally, but don't expose sensitive implementation details to clients.
