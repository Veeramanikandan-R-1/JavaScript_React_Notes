# GraphQL with React and Apollo Practical Notes

This file incorporates the GraphQL section from `Graphql&PWA&Lighthouse.docx` and updates the examples to current Apollo usage.

---

# 1. What GraphQL Is

GraphQL is a query language for APIs and a server-side runtime for executing those queries against your existing data.

Frontend mental model:

```text
React component asks for exact fields
-> GraphQL server validates query against schema
-> resolvers fetch data
-> server returns JSON matching the query shape
-> component renders loading, error, empty, and success states
```

---

# 2. GraphQL vs REST

| Area | REST | GraphQL |
| ---- | ---- | ------- |
| Endpoints | multiple resource endpoints | usually one `/graphql` endpoint |
| Response shape | server-defined | client requests exact fields |
| Over-fetching | common | reduced when queries are designed well |
| Under-fetching | may need multiple calls | nested data can be fetched in one query |
| Operations | GET, POST, PUT, PATCH, DELETE | Query, Mutation, Subscription |
| Versioning | often URL/header versioning | schema can evolve with new/deprecated fields |

Interview line: GraphQL is useful when screens need precise, related data and REST would either over-fetch or require many round trips.

---

# 3. Core Concepts

## Schema

The schema is the API contract.

```graphql
type User {
  id: ID!
  name: String!
  email: String!
}

type Query {
  users: [User!]!
  user(id: ID!): User
}
```

Common types:

| Type | Meaning |
| ---- | ------- |
| `Int` | integer |
| `Float` | decimal number |
| `String` | text |
| `Boolean` | true/false |
| `ID` | unique identifier |
| `[Type]` | list |
| `Type!` | non-null |

## Query

```graphql
query GetUsers {
  users {
    id
    name
  }
}
```

## Mutation

```graphql
mutation AddUser($name: String!, $email: String!) {
  addUser(name: $name, email: $email) {
    id
    name
    email
  }
}
```

## Resolver

```js
const resolvers = {
  Query: {
    users: () => getAllUsers(),
    user: (_, { id }) => getUserById(id),
  },
  Mutation: {
    addUser: (_, { name, email }) => addUserToDB({ name, email }),
  },
};
```

## Subscription

Subscriptions are used for realtime updates, commonly over WebSocket transport.

```graphql
subscription OnMessageAdded {
  messageAdded {
    id
    content
  }
}
```

---

# 4. Apollo Client Setup in React

Install:

```powershell
npm install @apollo/client graphql
```

Client:

```js
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  link: new HttpLink({
    uri: "/graphql",
    headers: {
      authorization: `Bearer ${localStorage.getItem("accessToken") || ""}`,
    },
  }),
  cache: new InMemoryCache(),
});
```

Provider:

```jsx
import { ApolloProvider } from "@apollo/client";
import { client } from "./apolloClient";

createRoot(document.getElementById("root")).render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
```

---

# 5. Query Example

```jsx
import { gql, useQuery } from "@apollo/client";

const GET_USERS = gql`
  query GetUsers {
    users {
      id
      name
      email
    }
  }
`;

export function UsersList() {
  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) return <p>Loading users...</p>;
  if (error) return <p role="alert">Failed to load users</p>;
  if (!data.users.length) return <p>No users found.</p>;

  return (
    <ul>
      {data.users.map((user) => (
        <li key={user.id}>
          {user.name} ({user.email})
        </li>
      ))}
    </ul>
  );
}
```

---

# 6. Mutation Example

```jsx
import { gql, useMutation } from "@apollo/client";

const ADD_USER = gql`
  mutation AddUser($name: String!, $email: String!) {
    addUser(name: $name, email: $email) {
      id
      name
      email
    }
  }
`;

export function AddUserForm() {
  const [addUser, { loading, error }] = useMutation(ADD_USER, {
    refetchQueries: ["GetUsers"],
  });

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    await addUser({
      variables: {
        name: formData.get("name"),
        email: formData.get("email"),
      },
    });

    event.currentTarget.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input name="name" required />
      </label>

      <label>
        Email
        <input name="email" type="email" required />
      </label>

      <button type="submit" disabled={loading}>
        {loading ? "Saving..." : "Add user"}
      </button>

      {error && <p role="alert">Could not save user.</p>}
    </form>
  );
}
```

Senior note: `refetchQueries` is simple for interviews. In production, prefer targeted cache updates when refetching would be wasteful.

---

# 7. Current Apollo Server with Express

The older source doc uses `apollo-server-express`. Current Apollo Server examples use `@apollo/server` with Express middleware.

```powershell
npm install @apollo/server graphql express cors
```

```js
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import cors from "cors";
import express from "express";

const typeDefs = `#graphql
  type User {
    id: ID!
    name: String!
  }

  type Query {
    users: [User!]!
  }
`;

const users = [{ id: "1", name: "John" }];

const resolvers = {
  Query: {
    users: () => users,
  },
};

const app = express();
const server = new ApolloServer({ typeDefs, resolvers });

await server.start();

app.use("/graphql", cors(), express.json(), expressMiddleware(server));

app.listen(4000, () => {
  console.log("GraphQL server running at http://localhost:4000/graphql");
});
```

---

# 8. Advanced Concepts

| Concept | Practical use |
| ------- | ------------- |
| Variables | Pass dynamic input safely instead of string-building queries. |
| Fragments | Reuse field selections across queries/mutations. |
| Directives | Conditionally include/skip fields with directives such as `@include` and `@skip`. |
| Pagination | Use offset/limit or cursor-based pagination for large lists. |
| Cache normalization | Store entities by ID so related queries can share cached data. |
| N+1 problem | Resolver fetches too many nested records one by one; solve with batching/data loaders. |
| Error policy | Decide whether partial data can render when some GraphQL fields fail. |

Fragment example:

```graphql
fragment UserFields on User {
  id
  name
  email
}

query GetUsers {
  users {
    ...UserFields
  }
}
```

---

# 9. Interview Questions

### What is GraphQL?

GraphQL is a typed API query language and runtime where the client requests the exact data shape it needs.

### What are Query, Mutation, and Subscription?

Query reads data. Mutation changes data. Subscription receives realtime updates.

### What is a resolver?

A resolver is the server-side function that returns data for a schema field.

### How do you handle authentication in GraphQL?

Attach tokens in request headers from the client, validate them on the server, and put the authenticated user into resolver context.

### How do you optimize GraphQL performance?

Request only needed fields, paginate large lists, use fragments carefully, avoid N+1 resolver calls, cache normalized entities, and monitor query complexity.

---

# 10. Source References

* GraphQL official docs: https://graphql.org/
* Apollo Client React docs: https://www.apollographql.com/docs/react
* Apollo Client queries: https://www.apollographql.com/docs/react/data/queries
* Apollo Client mutations: https://www.apollographql.com/docs/react/data/mutations
* Apollo Server Express middleware: https://www.apollographql.com/docs/apollo-server/api/express-middleware

