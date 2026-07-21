# Revision Notes: Next.js Fullstack Basics

## Learn These First

* App Router
* Layouts
* Server Components
* Client Components
* Server Actions
* Route handlers / API routes
* Auth
* Prisma
* SQLite or PostgreSQL
* Vercel deployment
* Basic Node.js / Express backend concepts

---

# App Router

```text
app/
  layout.tsx
  page.tsx
  dashboard/page.tsx
  blog/[slug]/page.tsx
  api/posts/route.ts
```

---

# Server vs Client

| Type | Use for |
| ---- | ------- |
| Server Component | Data fetching, database, content, secrets |
| Client Component | Clicks, input state, browser APIs |

---

# Practice Project

Build a Blog Dashboard:

* Login
* Protected dashboard
* Create/edit/delete posts
* Prisma database
* Loading/error/empty states
* Deploy on Vercel

---

# Node / Express Basics

Know:

* Routes
* Request body
* JSON response
* Middleware
* Auth checks
* Environment variables
* Error handling

---

# Interview Quick Answers

### Why use server routes for AI apps?

To keep API keys secure and validate requests before calling the AI provider.

### Why use Next.js?

Routing, SSR, SEO, backend routes, server components, and deployment-friendly React.
