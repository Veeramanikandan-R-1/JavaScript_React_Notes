# Revision Notes: AI Frontend Integration and LLM APIs

## Pipeline

```text
User input -> frontend -> server route -> AI provider -> response -> UI
```

---

# Rules

* Never expose AI API keys in frontend code.
* Use server routes.
* Validate input.
* Handle loading, streaming, error, empty, cancel, and retry states.
* Treat AI output as uncertain.
* Use REST, SDK, or GraphQL from the backend boundary, not directly with secrets in browser code.

---

# Project Ideas

* AI Text Summarizer
* AI Email Generator
* AI Form Assistant
* Smart Resume Analyzer
* Chat with Documents

---

# Backend Choices

* Next.js route handlers
* Node.js + Express
* REST API
* GraphQL API
