# React GraphQL CRUD Capstone Revision

Features:

* list users
* add user
* edit user
* delete user
* loading and error states

Stack:

* React
* Apollo Client
* GraphQL
* Apollo Server
* Express

Backend memory:

```text
typeDefs define schema
resolvers implement Query and Mutation
Express exposes /graphql
```

Frontend memory:

```text
ApolloProvider -> useQuery(GET_USERS) -> useMutation(ADD/UPDATE/DELETE)
```

Upgrades:

* database persistence
* auth context
* input validation
* Apollo cache updates
* optimistic UI
* pagination
* tests

