# Revision Notes: TypeScript Advanced Types, Utility Types, and OOP

* Generics preserve type safety while reusing code across many types.
* `Omit` removes keys from object types.
* `Exclude` removes members from union types.
* `keyof` creates a union of object keys.
* `typeof` derives a type from a value.
* `public` is default; `private` limits access to class; `protected` allows subclasses.
* Abstract classes can define required methods and shared implementation.

```ts
type Status = "pending" | "success" | "failed";
type ActiveStatus = Exclude<Status, "failed">;

type User = { id: number; name: string; passwordHash: string };
type PublicUser = Omit<User, "passwordHash">;
```
