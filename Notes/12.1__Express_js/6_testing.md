# Testing & Deployment — Express.js Interview Notes

For an Express.js interview, understand **what each testing level is, which tools are used, how environment configuration works, and how an application moves from development → production**.

---

## 1. Unit Testing

**Unit testing** tests a small, isolated piece of code.

Usually:

```text
Function → Input → Output
```

Example:

```js
// utils.js
function add(a, b) {
  return a + b;
}

module.exports = add;
```

Test:

```js
const add = require("./utils");

test("adds two numbers", () => {
  expect(add(2, 3)).toBe(5);
});
```

### Characteristics

* Fast
* Tests one unit/function
* Dependencies are usually mocked
* Doesn't normally require a real database/server

**Interview answer:**

> Unit testing verifies individual functions or modules in isolation.

---

# 2. Integration Testing

Integration testing checks whether **multiple components work correctly together**.

For Express:

```text
Request
   ↓
Route
   ↓
Middleware
   ↓
Controller
   ↓
Database/service
   ↓
Response
```

Example:

```js
POST /users
```

You might verify:

```text
HTTP request
   ↓
Express route
   ↓
Validation
   ↓
Controller
   ↓
Database
   ↓
HTTP response
```

Example with Supertest:

```js
const request = require("supertest");
const app = require("./app");

test("GET /users", async () => {
  const response = await request(app)
    .get("/users");

  expect(response.status).toBe(200);
});
```

### Unit vs Integration

| Unit                | Integration            |
| ------------------- | ---------------------- |
| Small isolated unit | Multiple components    |
| Dependencies mocked | Some real dependencies |
| Very fast           | Usually slower         |
| Tests logic         | Tests interaction      |

---

# 3. Jest

**Jest** is a JavaScript testing framework.

It provides:

* Test runner
* Assertions
* Mocking
* Code coverage
* Setup/teardown
* Snapshot testing

Basic:

```js
test("adds numbers", () => {
  expect(2 + 3).toBe(5);
});
```

### Common Jest functions

```js
describe()
test()
it()
expect()
beforeEach()
afterEach()
beforeAll()
afterAll()
jest.fn()
jest.mock()
```

Example:

```js
describe("Calculator", () => {

  test("adds numbers", () => {
    expect(2 + 3).toBe(5);
  });

});
```

### Setup / cleanup

```js
beforeEach(() => {
  // runs before every test
});

afterEach(() => {
  // runs after every test
});
```

---

# 4. Supertest

**Supertest** is used to test HTTP APIs.

It works very well with Express.

Install:

```bash
npm install --save-dev supertest
```

Example:

```js
const request = require("supertest");
const app = require("./app");

test("GET /users", async () => {

  const response = await request(app)
    .get("/users");

  expect(response.status).toBe(200);

});
```

POST example:

```js
const response = await request(app)
  .post("/users")
  .send({
    name: "John",
    email: "john@gmail.com"
  });

expect(response.status).toBe(201);
```

### Jest vs Supertest

They are not alternatives.

```text
Jest
→ testing framework

Supertest
→ HTTP/API testing library
```

Common combination:

```text
Jest + Supertest + Express
```

---

# 5. Mocking

**Mocking** means replacing a real dependency with a fake implementation during testing.

Suppose your controller calls:

```text
Controller
   ↓
UserService
   ↓
Database
```

For a unit test, you may not want to connect to the real database.

Instead:

```text
Controller
   ↓
Mock UserService
```

Example:

```js
const userService = {
  getUser: jest.fn()
};

userService.getUser.mockResolvedValue({
  id: 1,
  name: "John"
});
```

Now the test doesn't depend on the real service/database.

### Why mocking?

* Tests are faster
* Tests are predictable
* No external dependency
* Can simulate errors

Example:

```js
userService.getUser.mockRejectedValue(
  new Error("Database failed")
);
```

You can test how your controller handles the failure.

### Important interview point

Don't mock everything.

For **unit tests**, mock dependencies heavily.

For **integration tests**, keep important components real where practical.

---

# 6. Environment Configuration

Environment configuration allows different values for:

```text
Development
Testing
Production
```

without changing source code.

Common configuration:

```text
PORT
DATABASE_URL
JWT_SECRET
API_URL
NODE_ENV
```

Example `.env`:

```env
PORT=3000
DATABASE_URL=mongodb://localhost/myapp
JWT_SECRET=my-secret
NODE_ENV=development
```

Using `dotenv`:

```js
require("dotenv").config();

const port = process.env.PORT || 3000;
```

Then:

```js
console.log(process.env.PORT);
```

### Important security rule

Don't commit secrets:

```text
JWT_SECRET
DATABASE_PASSWORD
API_KEYS
```

to Git.

Add:

```text
.env
```

to `.gitignore`.

### Better production approach

In production, environment variables are usually supplied by:

* Docker
* Kubernetes
* CI/CD
* Cloud platform
* Secret manager

rather than committing `.env` secrets to the repository.

---

# 7. Docker Basics

**Docker packages your application and its dependencies into a container.**

Without Docker:

```text
Developer machine
→ Node version?
→ npm version?
→ OS differences?
→ Dependencies?
```

Docker gives a more consistent environment.

### Basic Dockerfile

```dockerfile
FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
```

Build:

```bash
docker build -t my-express-app .
```

Run:

```bash
docker run -p 3000:3000 my-express-app
```

### Important Docker concepts

**Image**

```text
Blueprint/template for application
```

**Container**

```text
Running instance of an image
```

**Dockerfile**

```text
Instructions to build an image
```

**Port mapping**

```text
-p 3000:3000
```

means:

```text
Host port 3000
      ↓
Container port 3000
```

### Interview answer

> Docker packages the application, runtime, dependencies, and configuration needed to run it consistently across environments.

---

# 8. CI/CD Basics

**CI = Continuous Integration**

Whenever code is pushed/PR created:

```text
Git push
   ↓
Install dependencies
   ↓
Lint
   ↓
Run tests
   ↓
Build
```

**CD = Continuous Delivery/Deployment**

After successful CI:

```text
Build
 ↓
Package
 ↓
Deploy
 ↓
Production
```

Typical pipeline:

```text
Developer
   ↓
Git Push / PR
   ↓
CI
   ├── npm ci
   ├── lint
   ├── unit tests
   ├── integration tests
   └── build
          ↓
       Docker image
          ↓
       Deployment
          ↓
       Production
```

Popular tools:

* GitHub Actions
* Jenkins
* GitLab CI/CD
* Azure DevOps
* AWS CodePipeline

### Example GitHub Actions concept

```yaml
steps:
  - npm ci
  - npm test
  - npm run build
```

You don't need to memorize the syntax for an interview unless the job specifically requires it.

---

# 9. Production Configuration

Development and production should not use exactly the same configuration.

Example:

### Development

```env
NODE_ENV=development
PORT=3000
LOG_LEVEL=debug
```

### Production

```env
NODE_ENV=production
PORT=8080
LOG_LEVEL=info
```

In Node:

```js
if (process.env.NODE_ENV === "production") {
  // production-specific behavior
}
```

### Important production considerations

For an Express application:

**1. Environment variables**

Keep secrets/configuration outside source code.

**2. HTTPS**

Use HTTPS, usually through a reverse proxy/load balancer.

**3. Security headers**

```js
app.use(helmet());
```

**4. CORS**

Allow only required origins.

**5. Rate limiting**

Protect APIs, especially authentication endpoints.

**6. Logging**

Use structured logging rather than excessive `console.log`.

Common libraries:

* Pino
* Winston

**7. Error handling**

Don't expose internal details:

❌

```json
{
  "error": "MongoDB connection failed at /internal/server/path..."
}
```

Production should return a safe message:

```json
{
  "message": "Internal server error"
}
```

while logging the actual error internally.

**8. Process management**

Applications may run using:

* Docker
* Kubernetes
* PM2
* Cloud/container platforms

**9. Graceful shutdown**

When the application receives termination signals, finish existing requests and close resources such as database connections.

Conceptually:

```js
process.on("SIGTERM", async () => {
  await db.close();
  server.close();
});
```

**10. Health checks**

Expose an endpoint such as:

```js
app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});
```

This can be used by load balancers/orchestrators to determine whether the application is healthy.

---

# ⭐ Complete Testing Strategy

For a typical Express application:

```text
                Tests
                  │
       ┌──────────┴──────────┐
       ↓                     ↓
   Unit Tests          Integration Tests
       ↓                     ↓
   Jest                Jest + Supertest
       ↓                     ↓
Mock dependencies      Test API flow
```

Example:

```text
Unit:
UserService.createUser()
       ↓
Mock database

Integration:
POST /users
       ↓
Express
       ↓
Validation
       ↓
Controller
       ↓
Database
       ↓
Response
```

---

# ⭐ Development → Production Flow

Remember this flow for interviews:

```text
Developer
    ↓
Git Push / Pull Request
    ↓
CI Pipeline
    ↓
Install dependencies
    ↓
Lint
    ↓
Unit Tests
    ↓
Integration Tests
    ↓
Build
    ↓
Docker Image
    ↓
Deploy
    ↓
Production
    ↓
Monitoring / Logs / Health Checks
```

### 🔥 Must-remember interview differences

**Unit vs Integration**

> Unit tests test isolated pieces; integration tests verify multiple components working together.

**Jest vs Supertest**

> Jest is the testing framework; Supertest is used to make HTTP requests against Express APIs during tests.

**Mocking**

> Mocking replaces real dependencies with controlled fake implementations.

**Image vs Container**

> Image is the packaged blueprint; container is a running instance of that image.

**CI vs CD**

> CI automatically validates code changes; CD automates delivering/deploying validated code.

**`.env`**

> Used for environment-specific configuration, but production secrets should preferably come from the deployment platform/secret manager rather than being committed to Git.

**Production configuration**

> Production needs secure configuration, HTTPS, proper CORS, security headers, rate limiting, logging, error handling, graceful shutdown, health checks, and appropriate process/container management.
