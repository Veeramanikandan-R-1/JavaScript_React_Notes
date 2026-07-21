# TypeScript Interview Questions

This note points to the dedicated TypeScript track and keeps the highest-frequency interview answers close to the interview folder.

Full study files:

* [TypeScript Fundamentals](../18_TypeScript/a_typescript_fundamentals.md)
* [TypeScript Advanced Types, Utility Types, and OOP](../18_TypeScript/b_typescript_advanced_types_oop.md)
* [React with TypeScript](../18_TypeScript/c_react_with_typescript.md)
* [TypeScript Interview Revision](../18_TypeScript/d_typescript_interview_revision.md)

---

# Must-Know Questions

## 1. What is TypeScript?

TypeScript is JavaScript plus static typing. It catches many mistakes during development, improves autocomplete/refactoring, documents contracts, and compiles to plain JavaScript.

## 2. `any` vs `unknown`

`any` disables type checking. `unknown` keeps the value unknown until you narrow it.

```ts
let value: unknown = "hello";

if (typeof value === "string") {
  console.log(value.toUpperCase());
}
```

## 3. `void` vs `never`

`void` means no useful return value. `never` means the function never returns normally.

```ts
function log(message: string): void {
  console.log(message);
}

function fail(message: string): never {
  throw new Error(message);
}
```

## 4. `type` vs `interface`

Use `interface` for public object contracts and declaration merging. Use `type` for unions, intersections, tuples, primitives, utility types, and many React prop models.

## 5. What are generics?

Generics are type placeholders. They make reusable code type-safe.

```ts
function identity<T>(value: T): T {
  return value;
}
```

## 6. What are utility types?

Utility types transform existing types.

```ts
type PublicUser = Omit<User, "passwordHash">;
type ActiveStatus = Exclude<Status, "failed">;
type PartialUser = Partial<User>;
```

## 7. How do you use TypeScript with React?

Type props, state, events, refs, context, reducers, API responses, wrapper components, and reusable generic components.

```tsx
type ButtonProps = {
  variant: "primary" | "secondary";
  children: string;
} & Omit<React.ComponentProps<"button">, "children">;
```

## 8. What should a senior answer include?

Mention the tradeoff: TypeScript improves static confidence, but runtime data still needs validation because API responses and user input can be wrong.
