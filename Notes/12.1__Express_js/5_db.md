## 1. Node.js + MongoDB

**MongoDB** is a NoSQL, document-oriented database.

Data is stored as **documents** (JSON-like/BSON):

```js
{
  _id: "123",
  name: "John",
  age: 25,
  skills: ["React", "Node"]
}
```

Typical architecture:

```text
React
  ↓ HTTP
Express / Node.js
  ↓
MongoDB
```

You can connect to MongoDB using the official MongoDB driver or **Mongoose**.

Using MongoDB driver:

```js
const { MongoClient } = require("mongodb");

const client = new MongoClient(process.env.MONGO_URI);

await client.connect();

const db = client.db("myapp");
const users = db.collection("users");

const result = await users.find({ age: 25 }).toArray();
```

### Interview point

MongoDB generally doesn't require a rigid table/schema structure like MySQL, although applications can enforce schemas using Mongoose or application-level validation.

---

# 2. Node.js + MySQL

**MySQL** is a relational database.

Data is stored in:

```text
Database
  └── Tables
       ├── Rows
       └── Columns
```

Example:

```text
users

id | name | email
---|------|----------------
1  | John | john@gmail.com
2  | Bob  | bob@gmail.com
```

Node can connect using packages such as `mysql2`.

```js
const mysql = require("mysql2/promise");

const connection = await mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "myapp"
});

const [rows] = await connection.execute(
  "SELECT * FROM users WHERE id = ?",
  [101]
);

console.log(rows);
```

### Important

Use **parameterized queries**, not string concatenation.

❌ Don't:

```js
const query = `SELECT * FROM users WHERE id = ${req.params.id}`;
```

✅ Do:

```js
connection.execute(
  "SELECT * FROM users WHERE id = ?",
  [req.params.id]
);
```

This helps prevent **SQL injection**.

---

# 3. Mongoose — Basic

**Mongoose** is an **ODM (Object Data Modeling)** library for MongoDB and Node.js.

It provides:

* Schema
* Model
* Validation
* Middleware/hooks
* Query APIs
* Relationships using references/population

Example:

```js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  age: Number
});

const User = mongoose.model("User", userSchema);
```

Create:

```js
const user = await User.create({
  name: "John",
  email: "john@gmail.com",
  age: 25
});
```

Find:

```js
const users = await User.find({ age: 25 });
```

### Schema vs Model

```text
Schema → defines structure/rules

Model → provides API to interact with collection
```

Example:

```js
User.find()
User.create()
User.updateOne()
User.deleteOne()
```

---

# 4. ORM / ODM Concept

### ORM

**ORM = Object Relational Mapping**

Used mainly with relational databases like:

```text
MySQL
PostgreSQL
Oracle
```

It maps:

```text
JavaScript Object
       ↓
Database Table
```

Examples:

* Sequelize
* TypeORM
* Prisma

Instead of:

```sql
SELECT * FROM users;
```

You may write something like:

```js
User.findMany();
```

### ODM

**ODM = Object Document Mapping**

Used with document databases such as MongoDB.

Example:

```text
JavaScript Object
       ↓
MongoDB Document
```

**Mongoose = ODM for MongoDB.**

### Easy interview answer

> ORM maps application objects to relational database tables, while ODM maps application objects to document-oriented databases.

---

# 5. CRUD

CRUD means:

| Operation | HTTP      | Mongo/Mongoose example |
| --------- | --------- | ---------------------- |
| Create    | POST      | `User.create()`        |
| Read      | GET       | `User.find()`          |
| Update    | PUT/PATCH | `User.updateOne()`     |
| Delete    | DELETE    | `User.deleteOne()`     |

### Example Express CRUD

```js
// Create
app.post("/users", async (req, res) => {
  const user = await User.create(req.body);
  res.status(201).json(user);
});

// Read
app.get("/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// Update
app.put("/users/:id", async (req, res) => {
  const user = await User.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.json(user);
});

// Delete
app.delete("/users/:id", async (req, res) => {
  await User.findByIdAndDelete(req.params.id);

  res.status(204).send();
});
```

### Interview point

Real applications usually don't put all database logic directly inside routes.

Common architecture:

```text
Route
  ↓
Controller
  ↓
Service
  ↓
Repository / Model
  ↓
Database
```

---

# 6. Database Connection

You generally establish the database connection when the application starts rather than opening a new connection for every request.

MongoDB + Mongoose:

```js
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(3000);
  })
  .catch(err => {
    console.error("DB connection failed", err);
  });
```

Typical startup:

```text
Start Node
   ↓
Connect Database
   ↓
Connection successful
   ↓
Start Express server
```

### Why?

If you connect to the database for every request:

```text
Request 1 → connect → query → disconnect
Request 2 → connect → query → disconnect
Request 3 → connect → query → disconnect
```

This is inefficient.

Instead:

```text
Application
    ↓
Database Connection Pool
    ↓
Reuse connections
```

---

# 7. Connection Pooling

A **connection pool** maintains multiple reusable database connections.

Example:

```text
             Connection Pool
          ┌────┬────┬────┬────┐
Request → │ C1 │ C2 │ C3 │ C4 │
          └────┴────┴────┴────┘
```

When a request needs the database:

```text
Request
   ↓
Get available connection
   ↓
Execute query
   ↓
Return connection to pool
```

### Why pooling?

Without pooling:

```text
Create connection
     ↓
Query
     ↓
Close connection
```

Repeatedly creating connections is expensive.

With pooling:

```text
Create connections once
       ↓
Reuse them
       ↓
Better performance
```

MySQL example:

```js
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: "myapp",
  connectionLimit: 10
});

const [rows] = await pool.execute(
  "SELECT * FROM users"
);
```

### Interview question

**What happens if all connections in the pool are busy?**

New requests generally **wait until a connection becomes available**, subject to the pool's configuration/timeouts.

---

# 8. Transactions — Basic

A **transaction** groups multiple database operations into one logical unit.

Important concept:

> Either all operations succeed, or they are rolled back.

Example: Bank transfer.

```text
Account A → -₹100
Account B → +₹100
```

Both operations should succeed together.

If:

```text
A → -₹100 ✅
B → +₹100 ❌
```

we don't want the money to disappear.

So use a transaction:

```text
BEGIN
  ↓
Debit A
  ↓
Credit B
  ↓
COMMIT
```

If something fails:

```text
BEGIN
  ↓
Debit A
  ↓
Credit B ❌
  ↓
ROLLBACK
```

### ACID

Transactions are commonly discussed with **ACID**:

* **Atomicity** → all or nothing
* **Consistency** → database remains valid
* **Isolation** → concurrent transactions don't improperly interfere
* **Durability** → committed data survives failures

### MySQL basic example

```js
const connection = await pool.getConnection();

try {
  await connection.beginTransaction();

  await connection.execute(
    "UPDATE accounts SET balance = balance - 100 WHERE id = ?",
    [1]
  );

  await connection.execute(
    "UPDATE accounts SET balance = balance + 100 WHERE id = ?",
    [2]
  );

  await connection.commit();
} catch (error) {
  await connection.rollback();
  throw error;
} finally {
  connection.release();
}
```

### MongoDB

MongoDB also supports **multi-document transactions** in supported deployment configurations.

With Mongoose, you'll commonly see:

```js
const session = await mongoose.startSession();

try {
  session.startTransaction();

  await User.updateOne(
    { _id: userId },
    { $set: { status: "active" } },
    { session }
  );

  await session.commitTransaction();
} catch (error) {
  await session.abortTransaction();
} finally {
  session.endSession();
}
```

---

# 9. Indexes — Basic

An **index** improves the speed of database searches.

Without an index:

```text
Search user
   ↓
Check row 1
Check row 2
Check row 3
...
Check row 1,000,000
```

With an index:

```text
Search user
   ↓
Index
   ↓
Quickly locate matching records
```

Example MongoDB:

```js
userSchema.index({ email: 1 });
```

Or:

```js
userSchema.index({ email: 1 }, { unique: true });
```

Now queries such as:

```js
User.findOne({ email: "john@gmail.com" });
```

can efficiently use the index.

### MySQL

```sql
CREATE INDEX idx_email
ON users(email);
```

### Important trade-off

Indexes aren't free.

**Advantages:**

* Faster reads/searches
* Faster filtering/sorting for suitable queries

**Disadvantages:**

* Consume storage
* Make inserts/updates/deletes somewhat more expensive because indexes also need updating

So don't blindly create indexes on every column.

### Interview point

Create indexes based on **actual query patterns**.

For example, if you frequently do:

```sql
SELECT * FROM users WHERE email = ?
```

an index on `email` makes sense.

---

# ⭐ Quick Interview Revision

```text
MongoDB
→ NoSQL/document database
→ Documents/collections
→ Mongoose commonly used

MySQL
→ Relational database
→ Tables/rows/columns
→ SQL

Mongoose
→ ODM for MongoDB
→ Schema + Model + validation + queries

ORM
→ Object ↔ relational tables

ODM
→ Object ↔ documents

CRUD
→ Create, Read, Update, Delete

Connection
→ Establish DB connection when application starts

Connection Pool
→ Reusable database connections
→ Improves performance

Transaction
→ Multiple operations treated as one unit
→ COMMIT or ROLLBACK
→ ACID

Index
→ Faster reads/search
→ Costs storage + write performance
```

### ⭐ Common interview questions

**Why use connection pooling?**
→ To reuse database connections instead of repeatedly creating/closing them.

**Why use indexes?**
→ To speed up frequently executed queries, at the cost of storage and some write overhead.

**What is Mongoose?**
→ An ODM that provides schema, validation, models, and query APIs for MongoDB.

**ORM vs ODM?**
→ ORM maps objects to relational tables; ODM maps objects to documents.

**Why transactions?**
→ To ensure multiple related database operations succeed or fail as a single unit.

**What is the difference between MongoDB and MySQL?**
→ MongoDB is document-oriented/NoSQL, while MySQL is relational and uses tables, rows, columns, and SQL.
