# Next.js Fullstack Basics

Next.js helps React developers build production-style apps with routing, server rendering, server routes, authentication, and deployment.

---

# 1. What to Learn

Focus on:

* App Router
* Layouts
* Server Components
* Client Components
* Server Actions
* API routes or route handlers
* Authentication
* Database access
* Deployment

---

# 2. App Router Mental Model

Common structure:

```text
app/
  layout.tsx
  page.tsx
  dashboard/
    page.tsx
  blog/
    [slug]/
      page.tsx
  api/
    posts/
      route.ts
```

Practical meaning:

* `page.tsx` creates a route.
* `layout.tsx` wraps route UI.
* `[slug]` creates a dynamic route.
* `route.ts` can create backend API endpoints.

---

# 3. Server Components vs Client Components

Use Server Components for:

* Fetching data
* Reading from database
* Rendering content-heavy pages
* Keeping secrets away from browser

Use Client Components for:

* Click handlers
* Form input state
* Browser APIs
* Animations
* Local interactive UI

Client component marker:

```tsx
"use client";

import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```

---

# 4. API Routes / Route Handlers

Use route handlers for backend work:

* Calling AI APIs
* Hiding API keys
* Reading/writing database
* Auth checks
* Validating requests

Example:

```ts
export async function POST(request: Request) {
  const body = await request.json();

  if (!body.title) {
    return Response.json({ message: "Title is required" }, { status: 400 });
  }

  return Response.json({ ok: true });
}
```

---

# 5. Auth Options

Common choices:

* NextAuth/Auth.js
* JWT-based auth
* Hosted auth providers

Auth UI states:

* Checking session
* Logged out
* Logged in
* No permission
* Session expired

---

# 6. Database Basics

Common beginner stack:

```text
Next.js + Prisma + SQLite
Next.js + Prisma + PostgreSQL
```

Prisma example idea:

```text
User
Post
Comment
```

Start with SQLite for learning. Use PostgreSQL for production-like practice.

---

# 7. Node.js and Express Basics

Even if you use Next.js, learn basic backend concepts.

Focus on:

* Routes
* Request body
* Response JSON
* Middleware
* Authentication checks
* Environment variables
* Error handling

Express-style example:

```js
app.post("/api/summarize", async (req, res) => {
  const { text } = req.body;

  if (!text) {
    return res.status(400).json({ message: "Text is required" });
  }

  const summary = await summarizeWithAI(text);
  res.json({ summary });
});
```

---

# 8. Practice Project: Blog Dashboard

Build:

* Public blog list
* Blog details page
* Login
* Protected dashboard
* Create post
* Edit post
* Delete post
* Prisma database
* Deployment on Vercel

Quality checklist:

* Form validation
* Loading state
* Empty state
* Error state
* Protected routes
* SEO metadata
* Mobile layout

---

# 8. Interview Notes

### Why use Next.js?

For routing, server rendering, backend route handlers, performance, SEO, and deployment-friendly React apps.

### Why are server routes useful for AI apps?

They protect API keys and let the server validate requests before calling AI providers.

### Server Component vs Client Component?

Server Components run on the server and are good for data/content. Client Components run in the browser and are needed for interactivity.
