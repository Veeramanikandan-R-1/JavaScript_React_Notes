# Node.js API / Backend Concepts — Interview Revision

I'll keep this **short, practical, and interview-focused**, while covering the important points you should know for each topic.

---

## 1. HTTP Server

An **HTTP server** receives HTTP requests from clients and sends HTTP responses.

In Node.js, you can create one using the built-in `http` module:

```js
const http = require("node:http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ message: "Hello" }));
});

server.listen(3000);
```

Flow:

```text
React / Browser
      ↓ HTTP Request
Node.js Server
      ↓ HTTP Response
React / Browser
```

### Interview point

Express.js sits on top of Node's HTTP capabilities and makes routing, middleware, request handling, etc. easier.

---

# 2. HTTP Request / Response ⭐

Every API interaction generally has:

```text
Client → Request → Server
Client ← Response ← Server
```

### Request contains

* HTTP method
* URL
* Headers
* Query parameters
* Path parameters
* Body

Example:

```http
POST /users?page=1
Content-Type: application/json

{
  "name": "John"
}
```

### Response contains

* Status code
* Headers
* Body

Example:

```http
HTTP/1.1 201 Created
Content-Type: application/json

{
  "id": 10,
  "name": "John"
}
```

---

# 3. REST API ⭐

**REST (Representational State Transfer)** is an architectural style for designing APIs around resources.

Example resource:

```text
/users
```

Operations:

```text
GET    /users       → Get users
GET    /users/10    → Get user 10
POST   /users       → Create user
PUT    /users/10    → Replace user
PATCH  /users/10    → Partially update user
DELETE /users/10    → Delete user
```

### Important REST concepts

* Resource-based URLs
* HTTP methods represent operations
* Stateless requests
* Standard HTTP status codes
* Usually JSON responses
* Cacheability can be supported

### Stateless

Each request should contain the information needed to process it; the server shouldn't rely on hidden client request state from a previous request.

---

# 4. HTTP Methods ⭐

| Method      | Purpose                  | Typical use    |
| ----------- | ------------------------ | -------------- |
| **GET**     | Read                     | Get users      |
| **POST**    | Create/action            | Create user    |
| **PUT**     | Replace                  | Replace user   |
| **PATCH**   | Partial update           | Update email   |
| **DELETE**  | Delete                   | Delete user    |
| **HEAD**    | Headers only             | Check resource |
| **OPTIONS** | Supported methods / CORS | Preflight      |

Example:

```http
GET /users
POST /users
PUT /users/10
PATCH /users/10
DELETE /users/10
```

### Important interview concepts

**GET** should be safe and is normally used for retrieving data.

**PUT** is generally idempotent.

**DELETE** is also generally idempotent.

**POST** is generally not idempotent.

### PUT vs PATCH

```text
PUT
→ Replace the resource

PATCH
→ Partially update the resource
```

---

# 5. HTTP Status Codes ⭐

Status codes tell the client what happened.

### 1xx — Informational

Rarely important for basic interviews.

### 2xx — Success

```text
200 OK
201 Created
202 Accepted
204 No Content
```

Example:

```js
res.status(201).json(user);
```

### 3xx — Redirection

```text
301 Moved Permanently
302 Found
304 Not Modified
```

### 4xx — Client Error

```text
400 Bad Request
401 Unauthorized
403 Forbidden
404 Not Found
409 Conflict
422 Unprocessable Content
429 Too Many Requests
```

Important distinction:

```text
401 → Authentication is missing/invalid

403 → Authentication may be valid, but access is forbidden
```

### 5xx — Server Error

```text
500 Internal Server Error
502 Bad Gateway
503 Service Unavailable
504 Gateway Timeout
```

### Easy memory

```text
2xx → Success
3xx → Redirect/cache-related
4xx → Client/request problem
5xx → Server problem
```

---

# 6. Headers ⭐

Headers carry **metadata** about a request or response.

### Request headers

```http
Authorization: Bearer token
Content-Type: application/json
Accept: application/json
```

### Response headers

```http
Content-Type: application/json
Cache-Control: max-age=3600
Set-Cookie: ...
```

In Node/Express:

```js
req.headers
```

```js
res.setHeader("Content-Type", "application/json");
```

### Important headers to know

* `Content-Type`
* `Accept`
* `Authorization`
* `Cache-Control`
* `Cookie`
* `Set-Cookie`
* `Origin`
* `Access-Control-Allow-Origin`

---

# 7. JSON

**JSON = JavaScript Object Notation.**

Common format for API data exchange.

Example:

```json
{
  "id": 1,
  "name": "John",
  "skills": ["React", "Node"]
}
```

JSON supports:

```text
string
number
boolean
null
object
array
```

JSON does **not** support:

```text
undefined
functions
Date objects directly
```

In Express:

```js
res.json({
  name: "John"
});
```

### Interview point

HTTP itself doesn't require JSON. REST APIs commonly use JSON because it's lightweight and widely supported.

---

# 8. API Error Handling ⭐

A good API should return:

* Appropriate HTTP status
* Consistent error structure
* Useful error message
* Optional error code/details
* Logs for server-side investigation

Example:

```json
{
  "error": {
    "code": "USER_NOT_FOUND",
    "message": "User not found"
  }
}
```

Example Express error middleware:

```js
app.use((err, req, res, next) => {
  console.error(err);

  res.status(err.status || 500).json({
    message: err.message || "Internal Server Error"
  });
});
```

### Important

Don't expose sensitive internal information:

```text
❌ Database password
❌ Stack trace in production
❌ Internal implementation details
```

### Good architecture

```text
Route
 ↓
Controller
 ↓
Service
 ↓
Error
 ↓
Global error middleware
 ↓
Response
```

---

# 9. Request Validation ⭐

Validation checks whether incoming data is **valid before processing it**.

Example request:

```json
{
  "name": "John",
  "email": "invalid"
}
```

You might validate:

```text
name → required
email → valid email
age → number
password → minimum length
```

Example using a validation library conceptually:

```js
if (!email || !email.includes("@")) {
  return res.status(400).json({
    message: "Invalid email"
  });
}
```

Libraries commonly used in Node:

* Zod
* Joi
* express-validator

### Important

**Never trust client-side validation alone.**

React can validate the form, but the backend must validate again.

```text
React validation
       ↓
    API call
       ↓
Backend validation ✅
       ↓
Database
```

---

# 10. Pagination ⭐

Pagination prevents returning thousands/millions of records in one response.

Example:

```http
GET /users?page=2&limit=10
```

Meaning:

```text
Page = 2
Items per page = 10
```

Response:

```json
{
  "data": [...],
  "page": 2,
  "limit": 10,
  "total": 100
}
```

### Offset pagination

Common approach:

```text
page = 2
limit = 10

offset = (page - 1) × limit
       = 10
```

Database conceptually:

```sql
LIMIT 10 OFFSET 10
```

### Cursor pagination

Instead of page numbers:

```http
GET /users?limit=10&cursor=abc123
```

Useful for **large/changing datasets** because it can avoid some of the consistency/performance issues of large offsets.

### Interview point

Know:

```text
Offset pagination
→ Simple

Cursor pagination
→ Better suited to large/dynamic datasets
```

---

# 11. Filtering

Filtering returns only data matching certain conditions.

Example:

```http
GET /users?role=admin&status=active
```

Meaning:

```text
role = admin
status = active
```

Backend:

```js
const { role, status } = req.query;
```

Could result in:

```sql
WHERE role = 'admin'
AND status = 'active'
```

### Important

Query parameters are commonly used for filtering:

```text
/users?role=admin
/products?category=mobile
/orders?status=pending
```

---

# 12. Sorting

Sorting controls the order of returned data.

Example:

```http
GET /users?sort=name&order=asc
```

Or:

```http
GET /products?sort=price&order=desc
```

Backend should **whitelist allowed sort fields** instead of blindly putting user input into database queries.

Example:

```js
const allowedFields = ["name", "createdAt", "price"];

if (!allowedFields.includes(sort)) {
  return res.status(400).json({
    message: "Invalid sort field"
  });
}
```

### Common combination

Real APIs often combine:

```http
GET /products
    ?page=2
    &limit=20
    &category=mobile
    &sort=price
    &order=asc
```

So:

```text
Pagination
+
Filtering
+
Sorting
```

are often implemented together.

---

# 13. Caching ⭐

Caching stores previously generated/fetched data so future requests can be served faster.

Without cache:

```text
Client
 ↓
API
 ↓
Database
 ↓
Response
```

With cache:

```text
Client
 ↓
API
 ↓
Cache → Data exists → Response
 ↓
Database → if cache miss
```

### Types you should know

**Client/browser cache**

```text
Browser
```

**CDN cache**

```text
Cloudflare / CDN
```

**Server-side cache**

```text
Redis
```

### HTTP caching

Important headers:

```http
Cache-Control
ETag
Last-Modified
Expires
```

Example:

```http
Cache-Control: max-age=3600
```

### Cache invalidation

One of the important challenges:

> When database data changes, how do you ensure cached data isn't stale?

Common strategies:

* TTL (time-to-live)
* Cache-aside
* Invalidation on update
* Write-through

For interviews, understand **cache-aside**:

```text
Request
  ↓
Check cache
  ↓
Found → return
  ↓
Not found
  ↓
Database
  ↓
Store in cache
  ↓
Return
```

---

# 14. Logging ⭐

Logging records information about application behavior.

Useful for:

* Debugging
* Monitoring
* Auditing
* Troubleshooting production issues

Basic example:

```js
console.log("User logged in");
console.error("Database connection failed");
```

For production applications, structured logging libraries are generally preferred, such as:

* Winston
* Pino

Example concept:

```json
{
  "level": "error",
  "message": "Database connection failed",
  "timestamp": "2026-08-24T12:00:00Z"
}
```

### Important logging levels

```text
debug
info
warn
error
```

### What NOT to log

Never casually log:

```text
❌ Passwords
❌ JWT/access tokens
❌ API secrets
❌ Sensitive personal data
```

### Production logging

Usually combine:

```text
Application
    ↓
Structured logs
    ↓
Log aggregation
    ↓
Monitoring / alerting
```

---

# ⭐ How These Concepts Fit Together

Imagine your React application calls:

```http
GET /products?page=2&limit=20&category=mobile&sort=price
```

The Node/Express backend might process it like:

```text
HTTP Request
     ↓
Authentication
     ↓
Request Validation
     ↓
Read Query Parameters
     ↓
Filtering
     ↓
Sorting
     ↓
Pagination
     ↓
Check Cache
     ↓
Database (if cache miss)
     ↓
JSON Response
     ↓
HTTP Status Code
     ↓
Logging
```

Example response:

```json
{
  "data": [
    {
      "id": 1,
      "name": "Phone",
      "price": 25000
    }
  ],
  "pagination": {
    "page": 2,
    "limit": 20,
    "total": 150
  }
}
```

---

# 🔥 Interview Quick Revision

| Topic           | Remember                              |
| --------------- | ------------------------------------- |
| **HTTP Server** | Receives requests and sends responses |
| **Request**     | Method + URL + headers + body         |
| **Response**    | Status + headers + body               |
| **REST**        | Resource-oriented API design          |
| **GET**         | Read                                  |
| **POST**        | Create                                |
| **PUT**         | Replace                               |
| **PATCH**       | Partial update                        |
| **DELETE**      | Delete                                |
| **2xx**         | Success                               |
| **4xx**         | Client/request error                  |
| **5xx**         | Server error                          |
| **Headers**     | Request/response metadata             |
| **JSON**        | Common API data format                |
| **Validation**  | Verify incoming data                  |
| **Pagination**  | Return data in chunks                 |
| **Filtering**   | Select matching records               |
| **Sorting**     | Order records                         |
| **Caching**     | Reuse data to improve performance     |
| **Logging**     | Record application events/errors      |

### ⭐ Must-know interview questions

1. **What is REST API?**
2. **GET vs POST?**
3. **PUT vs PATCH?**
4. **401 vs 403?**
5. **What happens when a React app calls a Node API?**
6. **How do you handle errors globally in Express?**
7. **Why is backend validation required if React already validates?**
8. **Offset vs cursor pagination?**
9. **How would you improve a slow API?**
10. **What is caching and where can you implement it?**
11. **What should you never put in logs?**
12. **What is the difference between request headers and request body?**
