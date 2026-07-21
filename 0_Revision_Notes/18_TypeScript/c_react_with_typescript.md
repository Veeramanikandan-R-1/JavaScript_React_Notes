# Revision Notes: React with TypeScript

* Use `npm create vite@latest my-app -- --template react-ts` for modern practice.
* Type props with `type` or `interface`.
* Use `React.ReactNode` for flexible children.
* Use event types such as `React.MouseEvent<HTMLButtonElement>` and `React.ChangeEvent<HTMLInputElement>`.
* Use `User | null` state instead of `{ } as User` unless assertion is truly safe.
* Type reducers with discriminated union actions.
* Type refs with `useRef<HTMLInputElement>(null)`.
* Use `React.ComponentProps<"button">` to wrap native elements.
* Use `Omit` when overriding native prop keys.
* Generic components preserve exact item type.
* Polymorphic `as` components combine custom props with native props of the chosen element.

```tsx
type ButtonProps = {
  variant: "primary" | "secondary";
  children: string;
} & Omit<React.ComponentProps<"button">, "children">;
```
