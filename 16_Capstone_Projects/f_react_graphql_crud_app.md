# Capstone: React GraphQL CRUD App

This capstone incorporates the GraphQL CRUD project from `Graphql&PWA&Lighthouse.docx`.

---

# 1. Goal

Build a small user-management app with:

* GraphQL backend
* React frontend
* Apollo Client
* list users
* add user
* edit user
* delete user
* loading and error states

---

# 2. Backend Setup

Install:

```powershell
mkdir graphql-crud-app
cd graphql-crud-app
npm init -y
npm install @apollo/server graphql express cors uuid
```

Server:

```js
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import cors from "cors";
import express from "express";
import { v4 as uuid } from "uuid";

let users = [
  { id: "1", name: "John", email: "john@example.com" },
  { id: "2", name: "Jane", email: "jane@example.com" },
];

const typeDefs = `#graphql
  type User {
    id: ID!
    name: String!
    email: String!
  }

  type Query {
    users: [User!]!
    user(id: ID!): User
  }

  type Mutation {
    addUser(name: String!, email: String!): User!
    updateUser(id: ID!, name: String, email: String): User!
    deleteUser(id: ID!): ID!
  }
`;

const resolvers = {
  Query: {
    users: () => users,
    user: (_, { id }) => users.find((user) => user.id === id) || null,
  },
  Mutation: {
    addUser: (_, { name, email }) => {
      const user = { id: uuid(), name, email };
      users.push(user);
      return user;
    },
    updateUser: (_, { id, name, email }) => {
      const user = users.find((item) => item.id === id);
      if (!user) throw new Error("User not found");

      if (name !== undefined) user.name = name;
      if (email !== undefined) user.email = email;

      return user;
    },
    deleteUser: (_, { id }) => {
      users = users.filter((user) => user.id !== id);
      return id;
    },
  },
};

const app = express();
const server = new ApolloServer({ typeDefs, resolvers });

await server.start();

app.use("/graphql", cors(), express.json(), expressMiddleware(server));
app.listen(4000, () => console.log("http://localhost:4000/graphql"));
```

---

# 3. Frontend Setup

```powershell
npm create vite@latest client -- --template react
cd client
npm install
npm install @apollo/client graphql
```

Apollo client:

```js
import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});
```

Provider:

```jsx
import { ApolloProvider } from "@apollo/client";
import { createRoot } from "react-dom/client";
import { client } from "./apolloClient";
import App from "./App";

createRoot(document.getElementById("root")).render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
```

---

# 4. React CRUD Screen

```jsx
import { gql, useMutation, useQuery } from "@apollo/client";
import { useState } from "react";

const GET_USERS = gql`
  query GetUsers {
    users {
      id
      name
      email
    }
  }
`;

const ADD_USER = gql`
  mutation AddUser($name: String!, $email: String!) {
    addUser(name: $name, email: $email) {
      id
      name
      email
    }
  }
`;

const UPDATE_USER = gql`
  mutation UpdateUser($id: ID!, $name: String, $email: String) {
    updateUser(id: $id, name: $name, email: $email) {
      id
      name
      email
    }
  }
`;

const DELETE_USER = gql`
  mutation DeleteUser($id: ID!) {
    deleteUser(id: $id)
  }
`;

export default function App() {
  const [form, setForm] = useState({ id: null, name: "", email: "" });
  const { loading, error, data } = useQuery(GET_USERS);
  const [addUser] = useMutation(ADD_USER, { refetchQueries: ["GetUsers"] });
  const [updateUser] = useMutation(UPDATE_USER, { refetchQueries: ["GetUsers"] });
  const [deleteUser] = useMutation(DELETE_USER, { refetchQueries: ["GetUsers"] });

  async function handleSubmit(event) {
    event.preventDefault();

    if (form.id) {
      await updateUser({
        variables: { id: form.id, name: form.name, email: form.email },
      });
    } else {
      await addUser({ variables: { name: form.name, email: form.email } });
    }

    setForm({ id: null, name: "", email: "" });
  }

  if (loading) return <p>Loading users...</p>;
  if (error) return <p role="alert">Failed to load users.</p>;

  return (
    <main>
      <h1>User Management</h1>

      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            value={form.name}
            onChange={(event) => setForm({ ...form, name: event.target.value })}
            required
          />
        </label>

        <label>
          Email
          <input
            type="email"
            value={form.email}
            onChange={(event) => setForm({ ...form, email: event.target.value })}
            required
          />
        </label>

        <button type="submit">{form.id ? "Update" : "Add"}</button>
      </form>

      <ul>
        {data.users.map((user) => (
          <li key={user.id}>
            <span>
              {user.name} ({user.email})
            </span>
            <button type="button" onClick={() => setForm(user)}>
              Edit
            </button>
            <button
              type="button"
              onClick={() => deleteUser({ variables: { id: user.id } })}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
}
```

---

# 5. Interview Upgrades

* replace in-memory data with MongoDB or PostgreSQL
* validate input on server
* add authentication context
* update Apollo cache manually instead of always refetching
* add optimistic UI for fast interactions
* add pagination
* test loading, error, empty, add, edit, and delete flows

