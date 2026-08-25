## 1. REST Principles ⭐⭐⭐

**REST = Representational State Transfer.**

REST is an architectural style for designing APIs around **resources**.

### Important REST principles

| Principle             | Meaning                                                             |
| --------------------- | ------------------------------------------------------------------- |
| **Client-Server**     | Frontend and backend are separated                                  |
| **Stateless**         | Server doesn't maintain client request state between requests       |
| **Resource-based**    | APIs represent resources like `/users`, `/orders`                   |
| **HTTP methods**      | GET, POST, PUT, PATCH, DELETE                                       |
| **Uniform interface** | Consistent URLs, methods, status codes                              |
| **Cacheable**         | Responses can be cached when appropriate                            |
| **Layered system**    | Client doesn't need to know whether it talks directly to the server |

Example:

```text
GET    /api/users       → Get users
GET    /api/users/10    → Get user 10
POST   /api/users       → Create user
PUT    /api/users/10    → Replace user 10
PATCH  /api/users/10    → Partially update user 10
DELETE /api/users/10    → Delete user 10
```

### Interview point

REST APIs generally use **nouns**, not actions.

Prefer:

```text
GET /users/10
```

Instead of:

```text
GET /getUser/10
```

---

# 2. CRUD APIs ⭐⭐⭐

CRUD means:

```text
C → Create
R → Read
U → Update
D → Delete
```

Typical REST mapping:

| Operation         | HTTP   | Endpoint     |
| ----------------- | ------ | ------------ |
| Create            | POST   | `/users`     |
| Read all          | GET    | `/users`     |
| Read one          | GET    | `/users/:id` |
| Update completely | PUT    | `/users/:id` |
| Update partially  | PATCH  | `/users/:id` |
| Delete            | DELETE | `/users/:id` |

Example:

```js
router.get('/users', userController.getUsers);

router.get('/users/:id', userController.getUser);

router.post('/users', userController.createUser);

router.patch('/users/:id', userController.updateUser);

router.delete('/users/:id', userController.deleteUser);
```

### PUT vs PATCH ⭐

**PUT** → replace the resource.

**PATCH** → partially update the resource.

```json
PATCH /users/10

{
  "name": "John"
}
```

Only the name needs to change.

---

# 3. Controllers

Controller handles the **HTTP request and response**.

It should generally:

* Read `req`
* Call the service
* Return `res`
* Handle HTTP-level concerns

Example:

```js
const getUser = async (req, res) => {
  const user = await userService.getUser(req.params.id);

  res.status(200).json(user);
};
```

Controller should **not contain lots of business logic**.

Bad:

```text
Controller
 ├── validation
 ├── business logic
 ├── database queries
 ├── calculations
 └── response
```

Better:

```text
Controller
    ↓
Service
    ↓
Repository
    ↓
Database
```

---

# 4. Routes

Routes define:

> **Which HTTP request should execute which controller?**

Example:

```js
router.get('/users', userController.getUsers);

router.get('/users/:id', userController.getUser);

router.post('/users', userController.createUser);
```

You can separate them into files:

```text
routes/
   user.routes.js
   order.routes.js
```

Example:

```js
// user.routes.js

const router = express.Router();

router.get('/', userController.getUsers);
router.get('/:id', userController.getUser);

module.exports = router;
```

Then:

```js
app.use('/api/users', userRouter);
```

So:

```text
GET /api/users
GET /api/users/10
```

---

# 5. Services ⭐⭐⭐

Service contains the **business logic**.

Example:

```js
const createUser = async (userData) => {

  const existingUser =
    await userRepository.findByEmail(userData.email);

  if (existingUser) {
    throw new Error('Email already exists');
  }

  return userRepository.create(userData);
};
```

The controller doesn't need to know how the business logic works.

```text
Controller
     ↓
User Service
     ↓
User Repository
```

### Interview answer

> The service layer contains reusable business logic and keeps controllers thin.

---

# 6. Repository / Data Layer

Repository handles **database interaction**.

Example:

```js
const findByEmail = async (email) => {
  return User.findOne({ email });
};

const create = async (userData) => {
  return User.create(userData);
};
```

The service doesn't directly need to know the database query details.

```text
Controller
     ↓
Service
     ↓
Repository
     ↓
MongoDB / MySQL / PostgreSQL
```

### Why use Repository?

It provides separation between:

```text
Business logic
      ↕
Database logic
```

It can also make database logic easier to test or replace.

---

# 7. Request Validation ⭐⭐⭐

Never blindly trust client input.

Validate things such as:

* Required fields
* Data types
* Email format
* String length
* Allowed values
* Numeric ranges

Example using middleware:

```js
const validateUser = (req, res, next) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({
      message: 'Name and email are required'
    });
  }

  next();
};
```

Then:

```js
router.post(
  '/users',
  validateUser,
  userController.createUser
);
```

In real applications, libraries such as **Joi, Zod, or express-validator** are commonly used.

### Important

Validation should happen **before business logic**.

```text
Request
 ↓
Validation
 ↓
Controller
 ↓
Service
```

---

# 8. Response Formatting

Keep API responses **consistent**.

Instead of different structures everywhere:

```json
{
  "name": "John"
}
```

and:

```json
{
  "data": {
    "name": "John"
  }
}
```

choose a consistent API contract.

For example:

```json
{
  "success": true,
  "data": {
    "id": 10,
    "name": "John"
  },
  "message": "User fetched successfully"
}
```

For errors:

```json
{
  "success": false,
  "message": "User not found",
  "errorCode": "USER_NOT_FOUND"
}
```

### Interview point

Consistent response structures make frontend integration and error handling easier.

---

# 9. HTTP Status Codes ⭐⭐⭐

You should know the important ones.

### 2xx — Success

| Code    | Meaning    | Example           |
| ------- | ---------- | ----------------- |
| **200** | OK         | Successful GET    |
| **201** | Created    | Successful POST   |
| **204** | No Content | Successful DELETE |

Example:

```js
res.status(201).json(user);
```

---

### 4xx — Client Error

| Code    | Meaning                                |
| ------- | -------------------------------------- |
| **400** | Bad Request                            |
| **401** | Unauthorized / authentication required |
| **403** | Forbidden                              |
| **404** | Resource not found                     |
| **409** | Conflict                               |
| **422** | Unprocessable Entity                   |
| **429** | Too Many Requests                      |

Example:

```js
if (!user) {
  return res.status(404).json({
    message: 'User not found'
  });
}
```

---

### 5xx — Server Error

| Code    | Meaning               |
| ------- | --------------------- |
| **500** | Internal Server Error |
| **502** | Bad Gateway           |
| **503** | Service Unavailable   |

### Most important interview distinction

```text
401 → Who are you? Authentication problem

403 → I know who you are, but you're not allowed.
```

---

# 10. API Versioning ⭐⭐

When an API changes in a way that could break existing clients, version it.

Common approach:

```text
/api/v1/users
/api/v2/users
```

Express:

```js
app.use('/api/v1/users', userRoutesV1);
app.use('/api/v2/users', userRoutesV2);
```

Why?

Imagine your React application currently expects:

```json
{
  "name": "John"
}
```

But V2 changes it to:

```json
{
  "firstName": "John"
}
```

Existing clients could break.

Versioning allows:

```text
Old frontend → v1
New frontend → v2
```

Other approaches include versioning through headers or media types, but **URL versioning is very common and easy to understand**.

---

# 11. Pagination ⭐⭐⭐

Don't return 1 million users in one API response.

Instead:

```text
GET /users?page=2&limit=10
```

Express:

```js
router.get('/users', async (req, res) => {
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;

  const skip = (page - 1) * limit;

  const users = await User
    .find()
    .skip(skip)
    .limit(limit);

  res.json({
    data: users,
    page,
    limit
  });
});
```

For page 2:

```text
skip = (2 - 1) × 10
     = 10
```

### Important pagination approaches

**Offset pagination:**

```text
?page=2&limit=20
```

Simple and common.

**Cursor pagination:**

```text
?cursor=abc123&limit=20
```

Better for very large/changing datasets because it avoids some problems associated with large offsets.

### Good interview answer

> Offset pagination is simple, while cursor-based pagination is generally more efficient and stable for large or frequently changing datasets.

---

# 12. Filtering

Filtering means returning only resources matching conditions.

Example:

```text
GET /users?role=admin
```

Express:

```js
const { role } = req.query;

const users = await User.find({
  role
});
```

Multiple filters:

```text
GET /products?category=mobile&brand=apple
```

Could translate to:

```js
{
  category: 'mobile',
  brand: 'apple'
}
```

### Important

Use **query parameters** for filtering, not path parameters.

```text
/users?role=admin       ✅
/users/admin            ❌ generally
```

Path parameters identify a resource:

```text
/users/10
```

Query parameters modify the collection request:

```text
/users?role=admin
```

---

# 13. Sorting

Sorting controls the order of results.

Example:

```text
GET /users?sort=name
```

Descending:

```text
GET /users?sort=-createdAt
```

Example:

```js
const sort = req.query.sort || 'createdAt';

const users = await User.find().sort(sort);
```

You can combine everything:

```text
GET /products
    ?category=mobile
    &sort=-price
    &page=2
    &limit=20
```

Meaning:

```text
Filter   → category = mobile
Sort     → price descending
Page     → 2
Limit    → 20
```

---

# 14. Putting Everything Together ⭐⭐⭐

A typical production API might look like:

```text
GET /api/v1/users
        │
        ├── Authentication middleware
        │
        ├── Validation
        │
        ↓
      Route
        ↓
    Controller
        ↓
     Service
        ↓
   Repository
        ↓
    Database
```

For example:

```js
router.get(
  '/users',
  authenticate,
  validateUserQuery,
  userController.getUsers
);
```

Controller:

```js
const getUsers = async (req, res, next) => {
  try {
    const users = await userService.getUsers(req.query);

    res.status(200).json({
      success: true,
      data: users
    });
  } catch (error) {
    next(error);
  }
};
```

Service:

```js
const getUsers = async (query) => {
  return userRepository.findUsers(query);
};
```

Repository:

```js
const findUsers = async ({ role, page = 1, limit = 10 }) => {

  const filter = role ? { role } : {};

  return User.find(filter)
    .skip((page - 1) * limit)
    .limit(limit);
};
```

---

# ⭐ Interview Architecture to Remember

```text
                 HTTP Request
                      ↓
               Middleware
          (Auth / Validation)
                      ↓
                   Route
                      ↓
                 Controller
                      ↓
                  Service
              (Business Logic)
                      ↓
                Repository
              (Data Access)
                      ↓
                   Database
```

### The responsibility of each layer

| Layer          | Responsibility                  |
| -------------- | ------------------------------- |
| **Route**      | Maps URL + HTTP method          |
| **Middleware** | Auth, validation, logging, etc. |
| **Controller** | Handles HTTP request/response   |
| **Service**    | Business logic                  |
| **Repository** | Database operations             |
| **Database**   | Persistent data                 |

### ⭐ Final interview summary

If asked **"How would you design a REST API in Express?"**, a strong short answer is:

> "I would define resource-based routes using appropriate HTTP methods, keep authentication and validation in middleware, keep controllers thin, put business logic in services, isolate database access in a repository/data layer, return consistent response formats and HTTP status codes, and support concerns like versioning, pagination, filtering, and sorting through query parameters."
