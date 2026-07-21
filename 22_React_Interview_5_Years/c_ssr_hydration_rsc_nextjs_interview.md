# SSR, Hydration, React Server Components, and Next.js Interview Notes

This note covers the React/Next.js rendering topics expected from a strong 5-year frontend developer.

---

# 1. Rendering Strategies

| Strategy | Meaning | Good for |
| -------- | ------- | -------- |
| CSR | Browser downloads JS, then React renders UI. | internal apps, highly interactive screens |
| SSR | Server renders HTML per request, then client hydrates it. | SEO, faster first content, personalized pages |
| SSG | HTML generated at build time. | docs, blogs, marketing pages |
| ISR / revalidation | Static page regenerated after a time or trigger. | content that changes sometimes |
| Streaming SSR | Server sends HTML in chunks as parts become ready. | slow data boundaries, better perceived loading |
| RSC | Server Components render outside the browser and do not ship component JS to client. | data-heavy UI, reducing client bundle |

Interview line:

> The choice is not SSR vs CSR only. Modern React apps combine server rendering, client interactivity, streaming, caching, and selective hydration.

---

# 2. Hydration

Hydration is React attaching event handlers and client behavior to server-rendered HTML.

Flow:

```text
server sends HTML
-> browser shows non-interactive preview
-> JavaScript loads
-> React matches client tree to server HTML
-> event handlers attach
-> page becomes interactive
```

Hydration mismatch means server HTML and initial client render do not match.

Common causes:

* invalid HTML nesting
* rendering `Date.now()` directly
* rendering random values directly
* using `window` or `localStorage` during render
* user-specific browser data differs between server and client
* conditional markup differs on first client render
* browser extensions or CDN transforms altering HTML

Bad:

```jsx
function Header() {
  return <p>{new Date().toLocaleTimeString()}</p>;
}
```

Better:

```jsx
function Header() {
  const [time, setTime] = useState("");

  useEffect(() => {
    setTime(new Date().toLocaleTimeString());
  }, []);

  return <p>{time || "Loading time..."}</p>;
}
```

Senior line:

> The first client render should match the server output. Browser-only differences should be moved to an Effect or isolated client-only component.

---

# 3. Server Components

React Server Components render in a server environment and are not sent to the browser as component JavaScript.

They can:

* read files or databases through the framework/server environment
* fetch data without exposing secrets to the browser
* reduce client bundle size
* pass rendered output to the client tree

They cannot:

* use `useState`
* use `useEffect`
* access browser APIs
* attach event handlers directly

Example shape:

```jsx
// Server Component
import ProductActions from "./ProductActions";

export default async function ProductPage({ productId }) {
  const product = await getProduct(productId);

  return (
    <section>
      <h1>{product.name}</h1>
      <ProductActions productId={product.id} />
    </section>
  );
}
```

```jsx
// ProductActions.jsx
"use client";

export default function ProductActions({ productId }) {
  const [quantity, setQuantity] = useState(1);

  return (
    <button onClick={() => addToCart(productId, quantity)}>
      Add to cart
    </button>
  );
}
```

---

# 4. `"use client"`

`"use client"` marks a module boundary that must run on the client.

Use it for:

* state
* effects
* event handlers
* browser APIs
* interactive widgets
* third-party libraries that depend on the DOM

Do not put `"use client"` at the top of every file. That defeats much of the benefit of Server Components.

Good split:

```text
ProductPage.server.jsx
  fetches data
  renders static product details
  imports AddToCartButton client component

AddToCartButton.jsx
  "use client"
  owns state and click handling
```

---

# 5. `"use server"` and Server Functions

`"use server"` marks a server-side function that can be called from client-side code through framework support.

Example:

```jsx
// actions.js
"use server";

export async function createPost(formData) {
  const title = String(formData.get("title") || "").trim();
  await db.post.create({ title });
}
```

```jsx
export default function NewPostForm() {
  return (
    <form action={createPost}>
      <input name="title" />
      <button>Create</button>
    </form>
  );
}
```

Security notes:

* validate all inputs on the server
* check authorization inside the server function
* do not assume hidden form fields are trusted
* avoid returning secrets
* understand framework deployment/runtime limits

---

# 6. Streaming and Suspense

Streaming lets the server send parts of HTML as they become ready. Suspense boundaries define where loading fallbacks can appear.

```jsx
export default function DashboardPage() {
  return (
    <>
      <SummaryCards />

      <Suspense fallback={<ChartSkeleton />}>
        <SlowChart />
      </Suspense>

      <Suspense fallback={<TableSkeleton />}>
        <SlowTable />
      </Suspense>
    </>
  );
}
```

Why it matters:

* users see useful UI sooner
* slow sections do not block the whole page
* loading states become route/section-level design decisions
* response status behavior can be different after streaming starts

---

# 7. Next.js App Router Mental Model

In App Router:

* routes are file-system based
* layouts persist across navigation
* pages and layouts are Server Components by default
* `loading.js` can provide route loading UI
* `error.js` can provide route error UI
* data can be fetched in Server Components
* Client Components are used for interactivity
* navigation uses prefetching, streaming, and client-side transitions

Practical folder:

```text
app/
  dashboard/
    layout.jsx
    loading.jsx
    error.jsx
    page.jsx
    Filters.jsx
```

`page.jsx` can fetch server data. `Filters.jsx` may be a Client Component if it uses state and events.

---

# 8. Common Interview Bugs

| Bug | Cause | Fix |
| --- | ----- | --- |
| Hydration mismatch | server and first client render differ | make initial render deterministic |
| `window is not defined` | browser API used during server render | move to Effect or Client Component |
| Huge client bundle | too many files marked `"use client"` | push data/static rendering to Server Components |
| Button click does nothing | event handler placed in Server Component | move interactive part to Client Component |
| Secret leaked | API token used in client bundle | keep secrets in server-only code |
| Slow SSR route | all data blocks full page render | add Suspense boundaries and stream sections |

---

# 9. Interview Answers

### What is hydration?

Hydration is React attaching client-side behavior to server-rendered HTML. The server HTML and initial client render must match, otherwise React reports hydration mismatch.

### Server Component vs Client Component?

Server Components render on the server and cannot use state, effects, event handlers, or browser APIs. Client Components run in the browser and are used for interactivity.

### Is `"use server"` how you mark Server Components?

No. Server Components are the default in RSC frameworks such as Next.js App Router. `"use server"` marks Server Functions.

### When would you choose SSR?

When first content, SEO, personalization, or social sharing matter. For heavily internal authenticated dashboards, CSR can still be fine if SEO is irrelevant and the app has strong loading states.

### How do you avoid hydration errors?

Make server and initial client output deterministic, avoid browser APIs during render, use valid HTML, move client-only work to `useEffect` or Client Components, and avoid time/random/user-agent dependent markup in the first render.

---

# Source References

* Next.js Server and Client Components: https://nextjs.org/docs/app/getting-started/server-and-client-components
* Next.js hydration error guide: https://nextjs.org/docs/messages/react-hydration-error
* Next.js linking and navigation: https://nextjs.org/docs/app/getting-started/linking-and-navigating
* Next.js streaming guide: https://nextjs.org/docs/app/guides/streaming
* React Server Components: https://react.dev/reference/rsc/server-components
* React `"use client"`: https://react.dev/reference/rsc/use-client
* React `"use server"`: https://react.dev/reference/rsc/use-server

