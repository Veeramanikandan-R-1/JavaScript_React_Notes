## Authentication & Security — Express.js Interview Notes

### 1. JWT Authentication

**JWT (JSON Web Token)** is a token-based authentication mechanism.

After login:

```text
Client → username/password → Server
Server → JWT → Client
Client → JWT in every request → Server
Server → verifies JWT → allows access
```

A JWT has 3 parts:

```text
header.payload.signature
```

Example payload:

```js
{
  userId: 101,
  role: "admin",
  exp: 1780000000
}
```

Creating a JWT:

```js
const jwt = require("jsonwebtoken");

const token = jwt.sign(
  { userId: 101, role: "admin" },
  process.env.JWT_SECRET,
  { expiresIn: "15m" }
);
```

Verifying:

```js
const decoded = jwt.verify(token, process.env.JWT_SECRET);
```

**Interview point:** JWT is **signed, not encrypted**. Don't put passwords or sensitive information inside the payload.

---

### 2. Login / Logout

#### Login

Usually:

1. User sends username/password.
2. Server validates credentials.
3. Server generates access token.
4. Optionally generates refresh token.
5. Client stores/sends tokens.

```js
app.post("/login", async (req, res) => {
  const user = await findUser(req.body.email);

  if (!user || !(await comparePassword(req.body.password, user.password))) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const accessToken = generateAccessToken(user);

  res.json({ accessToken });
});
```

#### Logout

With JWT, logout is different from session authentication.

Because JWT is stateless, the server doesn't automatically "delete" the token.

Common approaches:

* Delete token from client.
* Clear authentication cookie.
* Maintain a token blacklist/revocation mechanism.
* Revoke/rotate refresh token.

**Interview point:** Simply deleting a JWT on the server is impossible unless you maintain server-side token state.

---

### 3. Access Token

An **access token** is used to access protected APIs.

Example:

```http
Authorization: Bearer eyJhbGciOiJIUzI1Ni...
```

Middleware:

```js
const authenticate = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch {
    res.status(401).json({ message: "Invalid token" });
  }
};
```

Usage:

```js
app.get("/profile", authenticate, (req, res) => {
  res.json(req.user);
});
```

**Best practice:** Access tokens should generally have a **short lifetime**, e.g. 5–15 minutes.

---

### 4. Refresh Token

A **refresh token** is used to obtain a new access token when the access token expires.

Typical flow:

```text
Login
  ↓
Access Token (short-lived)
Refresh Token (long-lived)
  ↓
Access token expires
  ↓
Send Refresh Token
  ↓
Server validates it
  ↓
New Access Token
```

Example:

```js
app.post("/refresh", (req, res) => {
  const refreshToken = req.cookies.refreshToken;

  try {
    const decoded = jwt.verify(
      refreshToken,
      process.env.REFRESH_SECRET
    );

    const accessToken = generateAccessToken(decoded);

    res.json({ accessToken });
  } catch {
    res.status(401).json({ message: "Invalid refresh token" });
  }
});
```

**Important interview points:**

| Access Token           | Refresh Token                |
| ---------------------- | ---------------------------- |
| Short-lived            | Long-lived                   |
| Used for APIs          | Used to get new access token |
| Sent frequently        | Sent less frequently         |
| Lower impact if stolen | More sensitive               |

For better security, use **refresh-token rotation/revocation**.

---

### 5. Cookie-Based Authentication

Instead of sending JWT manually in the `Authorization` header, authentication information can be stored in an HTTP cookie.

Example:

```js
res.cookie("refreshToken", refreshToken, {
  httpOnly: true,
  secure: true,
  sameSite: "strict"
});
```

Important cookie flags:

* `HttpOnly` → JavaScript cannot access the cookie.
* `Secure` → sent only over HTTPS.
* `SameSite` → helps prevent CSRF.
* `Expires` / `Max-Age` → controls lifetime.

Reading:

```js
const token = req.cookies.refreshToken;
```

You need:

```js
const cookieParser = require("cookie-parser");

app.use(cookieParser());
```

**Interview point:**

```text
localStorage → accessible by JavaScript → XSS risk
HttpOnly cookie → inaccessible to JavaScript → better protection against token theft via XSS
```

But cookies introduce **CSRF considerations**, so `SameSite` and/or CSRF protection may be needed.

---

### 6. Role-Based Authorization

Authentication answers:

> **Who are you?**

Authorization answers:

> **What are you allowed to do?**

Example roles:

```text
admin
manager
user
```

Middleware:

```js
const authorize = (...allowedRoles) => {
  return (req, res, next) => {
    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({
        message: "Forbidden"
      });
    }

    next();
  };
};
```

Usage:

```js
app.delete(
  "/users/:id",
  authenticate,
  authorize("admin"),
  deleteUser
);
```

Flow:

```text
Authentication
     ↓
Is token valid?
     ↓
Authorization
     ↓
Does role have permission?
```

**401 vs 403:**

* `401 Unauthorized` → authentication missing/invalid.
* `403 Forbidden` → authenticated but doesn't have permission.

---

## 7. CORS

**CORS = Cross-Origin Resource Sharing**

It controls whether a browser allows frontend JavaScript from one origin to access another origin.

Example:

```text
Frontend:
https://myapp.com

Backend:
https://api.myapp.com
```

These are different origins.

Using Express:

```js
const cors = require("cors");

app.use(cors({
  origin: "https://myapp.com"
}));
```

For multiple origins:

```js
app.use(cors({
  origin: ["https://myapp.com", "https://admin.myapp.com"]
}));
```

### Preflight request

For certain cross-origin requests, browser first sends:

```http
OPTIONS /users
```

This is called a **preflight request**.

Server responds with appropriate CORS headers.

**Interview point:** CORS is primarily a **browser security mechanism**. It doesn't prevent Postman/server-to-server requests.

---

## 8. Helmet

**Helmet** adds security-related HTTP headers to Express responses.

Install:

```bash
npm install helmet
```

Usage:

```js
const helmet = require("helmet");

app.use(helmet());
```

It helps protect against several common web security issues by setting headers such as:

* `Content-Security-Policy`
* `X-Content-Type-Options`
* `Strict-Transport-Security`
* `Referrer-Policy`
* and others

Example:

```js
app.use(helmet());
```

**Interview answer:**

> Helmet is Express middleware that sets various HTTP security headers to improve the application's security posture.

It is **not a complete security solution**.

---

## 9. Rate Limiting

Rate limiting restricts how many requests a client can make within a period.

Useful against:

* Brute-force login attacks
* API abuse
* DDoS-like application-level traffic
* Excessive requests

Install:

```bash
npm install express-rate-limit
```

Example:

```js
const rateLimit = require("express-rate-limit");

const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: "Too many login attempts"
});

app.use("/login", loginLimiter);
```

Meaning:

```text
Maximum 5 requests
within 15 minutes
```

For production with multiple server instances, use a shared store such as **Redis**, rather than relying only on in-memory counters.

---

## 10. Input Validation

**Validation checks whether input follows the expected format/rules.**

Example:

```js
{
  email: "test@gmail.com",
  age: 25
}
```

You may require:

```text
email → valid email
age → number
age → >= 18
```

Using a validation library such as Joi:

```js
const schema = Joi.object({
  email: Joi.string().email().required(),
  age: Joi.number().min(18).required()
});
```

Then:

```js
const { error } = schema.validate(req.body);

if (error) {
  return res.status(400).json({
    message: error.details[0].message
  });
}
```

Other commonly used validation libraries:

* Joi
* Zod
* express-validator
* Yup

**Interview point:** Never trust `req.body`, `req.params`, or `req.query`.

---

## 11. Sanitization

**Sanitization cleans/removes potentially dangerous input.**

Example malicious input:

```html
<script>alert("XSS")</script>
```

Sanitization may remove or neutralize the dangerous HTML.

Conceptually:

```js
const cleanInput = sanitize(req.body.comment);
```

### Validation vs Sanitization

| Validation                    | Sanitization                       |
| ----------------------------- | ---------------------------------- |
| Checks whether input is valid | Cleans potentially dangerous input |
| "Is this email valid?"        | "Remove dangerous content"         |
| Rejects invalid input         | Transforms/cleans input            |

Example:

```text
Input
  ↓
Validation → Is it allowed?
  ↓
Sanitization → Clean dangerous content
  ↓
Business logic
  ↓
Database
```

**Important:** Don't blindly sanitize everything. The correct approach depends on where the data will be used. For example, HTML intended for rendering needs context-aware HTML sanitization.

---

# 🔥 Interview-Level Security Flow

A typical secure Express API might look like:

```js
app.use(helmet());

app.use(cors({
  origin: "https://myapp.com"
}));

app.use(express.json());

app.use("/login", loginLimiter);

app.post("/login", validateLogin, login);

app.get(
  "/admin",
  authenticate,
  authorize("admin"),
  getAdminData
);
```

Conceptually:

```text
                 Request
                    ↓
             CORS / Headers
                    ↓
              Rate Limiting
                    ↓
             Input Validation
                    ↓
              Authentication
                    ↓
             Authorization
                    ↓
             Business Logic
                    ↓
                Database
```

### ⭐ Must-remember interview differences

**Authentication vs Authorization**

```text
Authentication = Who are you?
Authorization  = What can you access?
```

**Access vs Refresh Token**

```text
Access  = access API
Refresh = generate new access token
```

**401 vs 403**

```text
401 = not authenticated
403 = authenticated but not allowed
```

**Validation vs Sanitization**

```text
Validation   = check input
Sanitization = clean input
```

**CORS vs CSRF**

```text
CORS = controls cross-origin browser access
CSRF = prevents unwanted authenticated requests
```

**Helmet vs Rate Limiting**

```text
Helmet        = security HTTP headers
Rate limiting = restrict request frequency
```

For a **6-year React/Node interview**, the most important thing is to understand the **complete authentication flow**, especially **JWT + access/refresh tokens + HttpOnly cookies + authentication/authorization + CORS + CSRF/XSS basics**.
