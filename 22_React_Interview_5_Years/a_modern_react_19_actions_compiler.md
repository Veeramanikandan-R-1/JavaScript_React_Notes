# Modern React 19, Actions, and React Compiler

This note fills the 2026 interview gap for React 19+ topics. For a 5-year React developer, you do not need to pretend every project already uses these APIs, but you should know what problem they solve and how to discuss them clearly.

---

# 1. What Changed in Modern React

Modern React is moving in three important directions:

| Area | Practical meaning |
| ---- | ----------------- |
| Actions | A structured way to handle async mutations, pending state, errors, and forms. |
| Optimistic UI | Show the expected result immediately while the real mutation is pending. |
| Compiler | Build-time automatic memoization so React can reduce unnecessary re-renders without hand-written memoization everywhere. |

Interview line:

> React is becoming less about manually wiring every pending state and memoization, and more about expressing UI, mutations, and boundaries clearly so React and frameworks can optimize them.

---

# 2. Actions

An Action is an async function used to perform a mutation such as submitting a form, updating a record, deleting an item, or saving preferences.

Common Action responsibilities:

* start pending state
* call server/API code
* handle validation or server errors
* update state after success
* support optimistic UI when needed
* reset or preserve form state

Old style:

```jsx
function ProfileForm() {
  const [name, setName] = useState("");
  const [error, setError] = useState(null);
  const [isSaving, setIsSaving] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setIsSaving(true);
    setError(null);

    try {
      await saveProfile({ name });
    } catch (err) {
      setError("Could not save profile");
    } finally {
      setIsSaving(false);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      {error && <p role="alert">{error}</p>}
      <button disabled={isSaving}>Save</button>
    </form>
  );
}
```

Modern React gives better primitives for this pattern.

---

# 3. `useActionState`

`useActionState` connects an Action to component state.

Use it when:

* the result of an async mutation should update local form/message state
* you need pending status
* the next state depends on previous state and submitted data
* you want interview-ready form handling beyond `useState`

Example:

```jsx
import { useActionState } from "react";

async function updateProfile(previousState, formData) {
  const name = String(formData.get("name") || "").trim();

  if (!name) {
    return { status: "error", message: "Name is required" };
  }

  await saveProfile({ name });
  return { status: "success", message: "Profile saved" };
}

export default function ProfileForm() {
  const [state, formAction, isPending] = useActionState(updateProfile, {
    status: "idle",
    message: ""
  });

  return (
    <form action={formAction}>
      <label htmlFor="name">Name</label>
      <input id="name" name="name" />

      {state.message && <p role="status">{state.message}</p>}

      <button disabled={isPending}>
        {isPending ? "Saving..." : "Save"}
      </button>
    </form>
  );
}
```

Interview line:

> `useActionState` is useful when a mutation result should become component state, especially in form flows with pending, success, and validation states.

---

# 4. `useFormStatus`

`useFormStatus` reads the status of the nearest parent form submission.

Use it for a submit button extracted into its own component.

```jsx
import { useFormStatus } from "react-dom";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending}>
      {pending ? "Saving..." : "Save"}
    </button>
  );
}
```

Important limitation:

* `useFormStatus` must be rendered inside the form whose status it reads.
* It is for form submission status, not generic API loading state.

---

# 5. `useOptimistic`

`useOptimistic` shows temporary UI before the server confirms the mutation.

Use it for:

* comments
* likes
* cart quantity
* todo item creation
* chat messages

Example:

```jsx
import { useOptimistic, startTransition } from "react";

function Comments({ comments }) {
  const [optimisticComments, addOptimisticComment] = useOptimistic(
    comments,
    (currentComments, text) => [
      ...currentComments,
      { id: crypto.randomUUID(), text, pending: true }
    ]
  );

  function submitComment(formData) {
    const text = String(formData.get("comment") || "").trim();
    if (!text) return;

    startTransition(async () => {
      addOptimisticComment(text);
      await saveComment(text);
    });
  }

  return (
    <form action={submitComment}>
      <input name="comment" />
      <button>Add</button>

      <ul>
        {optimisticComments.map((comment) => (
          <li key={comment.id}>
            {comment.text}
            {comment.pending && " Saving..."}
          </li>
        ))}
      </ul>
    </form>
  );
}
```

Senior caution:

* optimistic UI must handle failure
* do not use it for dangerous irreversible actions without clear rollback
* reconcile temporary IDs with server IDs
* prevent double-submit bugs
* make pending state visible but not noisy

---

# 6. `use`

`use` can read a Promise or Context in React-supported environments.

Important interview point:

* unlike normal Hooks, `use` can be called in conditions and loops
* it must still be used correctly with the Promise itself
* framework support matters, especially for data loading patterns

Simple mental model:

```jsx
function UserDetails({ userPromise }) {
  const user = use(userPromise);
  return <h1>{user.name}</h1>;
}
```

For most everyday client apps, React Query, SWR, RTK Query, or framework data APIs are still more common.

---

# 7. `useEffectEvent`

`useEffectEvent` separates non-reactive logic from Effects. It helps when an Effect needs the latest props/state, but not every value should make the Effect resubscribe.

Problem:

```jsx
useEffect(() => {
  const connection = connect(roomId);

  connection.onMessage((message) => {
    showToast(message, theme);
  });

  return () => connection.disconnect();
}, [roomId, theme]);
```

Changing `theme` reconnects the room even though only the toast styling needs the latest theme.

Better shape:

```jsx
const onMessage = useEffectEvent((message) => {
  showToast(message, theme);
});

useEffect(() => {
  const connection = connect(roomId);
  connection.onMessage(onMessage);
  return () => connection.disconnect();
}, [roomId]);
```

Interview line:

> `useEffectEvent` is for reading latest values inside an Effect without making that Effect reactive to those values.

---

# 8. React Compiler

React Compiler is a build-time optimizer. Its big promise is automatic memoization of components and hooks.

What it changes:

* less need to manually add `memo`, `useMemo`, and `useCallback` everywhere
* stronger importance of following Rules of React
* lint rules become more important because compiler assumptions depend on purity
* performance work still requires measurement

What it does not mean:

* it does not fix bad architecture
* it does not replace state management
* it does not make expensive rendering free
* it does not remove the need for stable keys
* it does not excuse mutating props/state

Before compiler:

```jsx
const filteredItems = useMemo(
  () => items.filter((item) => item.name.includes(query)),
  [items, query]
);
```

With compiler adoption, many simple memoization cases may be handled automatically. But still use explicit memoization when:

* your codebase has not enabled the compiler
* you need a stable reference for a third-party API
* profiling shows an expensive calculation
* a hook dependency requires stable identity

Interview line:

> React Compiler reduces manual memoization pressure, but it makes pure rendering and correct React rules even more important.

---

# 9. How to Answer in Interviews

### Should we still use `useMemo` and `useCallback`?

Yes, but less mechanically. Use them when there is a measured performance problem, a stable reference contract, or a dependency-array reason. With React Compiler, many routine memoization cases can be optimized automatically, but not every project has adopted it.

### What is optimistic UI?

Optimistic UI immediately shows the expected result of a mutation before the server confirms it. It improves perceived speed, but must handle rollback, errors, and ID reconciliation.

### Why are Actions useful?

Actions make mutation flows more structured. They help model pending state, form submission, validation results, optimistic updates, and server integration more cleanly.

### What is a safe way to adopt modern React APIs?

Start in isolated flows: forms, optimistic comments, non-urgent search updates, or small routes. Add tests for pending, success, error, and rollback states before expanding adoption.

---

# 10. Common Mistakes

* Using optimistic UI without rollback.
* Treating client optimistic state as backend truth.
* Calling `useFormStatus` outside its form context.
* Using `useActionState` for every small local input change.
* Thinking React Compiler means performance work is finished.
* Ignoring lint rules that protect compiler assumptions.
* Explaining new APIs without mentioning framework support.

---

# Source References

* React 19 release notes: https://react.dev/blog/2024/12/05/react-19
* React built-in hooks: https://react.dev/reference/react/hooks
* `useActionState`: https://react.dev/reference/react/useActionState
* `useOptimistic`: https://react.dev/reference/react/useOptimistic
* `useFormStatus`: https://react.dev/reference/react-dom/hooks/useFormStatus
* `useEffectEvent`: https://react.dev/reference/react/useEffectEvent
* React Compiler 1.0: https://react.dev/blog/2025/10/07/react-compiler-1

