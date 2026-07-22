# Revision Notes: Frontend System Design

* Interview readiness comes from explaining tradeoffs, not reciting definitions.
* Strong answers connect fundamentals to real production consequences.
* Use examples, failure modes, and debugging approaches in every answer.
* Best practice: Start with the mental model.
* Best practice: Give a practical example.
* Best practice: Name tradeoffs.
* Best practice: Mention debugging and tests.
* Best practice: Keep answers concise but concrete.
* Avoid: Answering with definitions only.
* Avoid: Ignoring tradeoffs.
* Avoid: Pretending one tool is always best.
* Avoid: Failing to mention testing and edge cases.

---

# Cheat Sheet

| Concept | Practical meaning |
| ------- | ----------------- |
| Mental model | How the feature really works. |
| Tradeoff | What you gain and lose. |
| Debug story | How you find production issues. |
| Example | Concrete scenario that proves understanding. |
| Edge case | Where simple answers break. |

---

# Frontend System Design Topics

* CSR
* SSR
* Hydration
* Caching
* CDN
* Microfrontends
* Bundle splitting
* Auth flow
* AI API boundary
* Streaming response state
* Rate limits and error UX

---

# Interview Questions with Answers

### 1. Design a frontend for a dashboard with filters, charts, tables, and export. How do you start?

I start by clarifying users, data sources, freshness requirements, filter behavior, permissions, and performance budget. Then I define routes, URL state for shareable filters, server-state caching, component boundaries, loading/error/empty states, and observability. I would not start with component names before understanding data and user workflows.

### 2. Where would you store table filters: component state, URL params, Redux, or server?

If filters should be shareable, bookmarkable, or survive refresh, I put them in URL search params. If they are temporary UI-only controls, local state is enough. If multiple distant widgets need the same client-only filter state, a store can help. The server owns persisted preferences or canonical query results.

### 3. How would you design frontend performance for a large list?

I would combine backend pagination or cursor loading, stable query keys, virtualization for large visible lists, memoized row rendering only when measured, and careful column/cell composition. I would also discuss skeletons, empty/error states, keyboard navigation, and avoiding layout shift.

### 4. How do you compare CSR, SSR, and SSG in an interview?

CSR is simpler for app-like authenticated screens but waits for JavaScript before meaningful UI. SSR improves first render and SEO but adds hydration, server cost, and caching complexity. SSG is great for mostly static content but needs a strategy for freshness. The right answer depends on content, auth, SEO, latency, and team operations.

### 5. What failure states do senior interviewers expect you to mention?

Slow network, partial data, empty data, stale data, auth expiry, permission denial, retry behavior, offline behavior where relevant, feature-flag rollback, API shape changes, and accessibility failures. A system design answer feels senior when it treats these as first-class states, not afterthoughts.

---

# Quick Practice

1. Explain one realistic production use case for Frontend System Design in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
