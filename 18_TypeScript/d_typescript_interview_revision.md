# TypeScript Interview Revision

This file consolidates high-frequency TypeScript interview answers from `typeScript.docx` and `react with typescript - codeevolution.docx`.

---

# 1. Shortcut Answer

TypeScript adds static typing on top of JavaScript. It catches many errors at compile time, improves IDE autocomplete and refactoring, documents contracts, and helps large React apps stay maintainable. It still compiles to JavaScript and does not remove the need for runtime validation of external data.

---

# 2. Quick Questions

What is the difference between `any` and `unknown`?

`any` turns off type checking. `unknown` forces you to narrow before using the value.

What is the difference between `void` and `never`?

`void` means a function returns no useful value. `never` means a function never returns normally.

What is the difference between `type` and `interface`?

Both can describe object shapes. `interface` supports declaration merging and is good for public contracts. `type` is more flexible for unions, intersections, tuples, primitives, utility types, and React props.

What are generics?

Generics are type placeholders that let code work with multiple types while preserving type safety.

What are utility types?

Utility types transform existing types. Common examples are `Partial`, `Readonly`, `Pick`, `Omit`, and `Exclude`.

What is type narrowing?

Type narrowing refines a broad type into a specific type using checks such as `typeof`, `in`, discriminated unions, or custom type guards.

What is declaration merging?

Declaration merging allows interfaces with the same name to merge into one shape.

What is an ambient declaration?

An ambient declaration uses `declare` to describe external values/modules that exist at runtime but do not have TypeScript types.

---

# 3. React + TypeScript Interview Checklist

Be ready to type:

* props
* optional props
* children
* event handlers
* `useState`
* `useReducer`
* `useRef`
* context
* API responses
* wrapper components
* component-as-prop patterns
* generic list/select/table components
* polymorphic `as` components

Best short answer:

In React + TypeScript, we use types and interfaces to enforce contracts for props, state, hooks, events, context, reducers, and API responses. This reduces runtime bugs, improves autocomplete, and makes large React apps easier to refactor.

---

# 4. Common Mistakes

* Using `any` permanently instead of narrowing or modeling the data.
* Overusing `React.FC` when plain typed functions are clearer.
* Using `{}` assertions to avoid null checks in context/state.
* Typing API responses but not validating runtime data.
* Forgetting event types such as `React.ChangeEvent<HTMLInputElement>`.
* Creating generic components when a simple prop type is enough.
* Not using `Omit` when wrapping native props and overriding keys.

---

# 5. One-Minute Revision Code

```tsx
type User = {
  id: number;
  name: string;
};

type ApiResponse<T> = {
  data: T;
  error?: string;
};

type ButtonProps = {
  variant: "primary" | "secondary";
  children: string;
} & Omit<React.ComponentProps<"button">, "children">;

function Button({ variant, children, ...rest }: ButtonProps) {
  return (
    <button className={`button-${variant}`} {...rest}>
      {children}
    </button>
  );
}

function UsersList({ users }: { users: User[] }) {
  const [selected, setSelected] = React.useState<User | null>(null);

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <button onClick={() => setSelected(user)}>{user.name}</button>
        </li>
      ))}
      <li>Selected: {selected?.name ?? "none"}</li>
    </ul>
  );
}
```
