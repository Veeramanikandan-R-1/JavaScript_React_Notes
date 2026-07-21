# Revision Notes: TypeScript Fundamentals

* TypeScript is JavaScript plus static typing.
* It catches many issues before runtime and improves autocomplete/refactoring.
* Use local `typescript` dev dependency for real projects.
* `any` disables checking; `unknown` forces narrowing.
* `void` means no useful return; `never` means the function never returns normally.
* Use `type` for unions/intersections/React props; use `interface` for public object contracts and declaration merging.
* Runtime data still needs runtime validation.

```ts
let value: unknown = "hello";

if (typeof value === "string") {
  console.log(value.toUpperCase());
}
```
