# Capstone: AI Productivity Hub

This is the final AI-ready frontend capstone from the pasted roadmap.

---

# 1. Goal

Build one app that combines multiple AI tools in a single dashboard.

The project should prove:

* React or Next.js skill
* TypeScript usage
* Secure AI API integration
* Good UI states
* Responsive design
* Testing and deployment

---

# 2. Features

Include:

* AI Text Summarizer
* AI Email Generator
* AI Image Generator page
* Voice Assistant UI
* Saved history
* Dashboard home
* Settings page

---

# 3. Suggested Tech Stack

```text
Next.js
TypeScript
Tailwind CSS
Prisma
SQLite or PostgreSQL
Auth.js / NextAuth
OpenAI or another AI provider
Vercel
```

---

# 4. Required UI States

Every tool should handle:

* Idle
* Loading
* Streaming if supported
* Success
* Empty response
* Error
* Cancelled
* Rate limited

---

# 5. Pages

```text
/
/summarizer
/email-generator
/image-generator
/voice-assistant
/history
/settings
```

---

# 6. Security Checklist

* AI API key stays on server.
* Frontend calls your own server route.
* Input is validated.
* Sensitive prompts are not logged carelessly.
* Auth protects saved history.
* Rate limits are considered.

---

# 7. Portfolio Checklist

* Live demo link
* GitHub link
* README setup steps
* Screenshots
* Feature list
* Tech stack
* Known limitations
* Future improvements

---

# 8. Interview Talking Points

* Why API keys must stay server-side
* How streaming improves UX
* How AI responses are stored
* How loading/error states work
* How you tested the main flows
* How you optimized bundle size and page speed

