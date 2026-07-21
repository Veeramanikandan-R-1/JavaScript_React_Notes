# GraphQL React Apollo Revision

Mental model:

```text
component query -> schema validation -> resolver -> JSON in requested shape -> UI state
```

Must know:

* Query reads data.
* Mutation changes data.
* Subscription receives realtime updates.
* Schema is the API contract.
* Resolver returns data for a schema field.
* Apollo Client gives React hooks such as `useQuery`, `useMutation`, and `useSubscription`.
* Use variables instead of string-building queries.
* Use fragments to reuse field sets.
* Paginate large lists.
* Avoid N+1 resolver problems.
* Attach auth through headers and validate it on the server.

GraphQL vs REST:

* REST usually has multiple endpoints and server-shaped responses.
* GraphQL usually has one endpoint and client-shaped responses.

