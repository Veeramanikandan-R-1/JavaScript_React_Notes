# AI Frontend Integration and LLM APIs

This note explains how frontend apps connect to AI models safely and practically.

---

# 1. What is an LLM?

LLM means Large Language Model.

Examples:

* OpenAI models
* Gemini
* Anthropic Claude
* Hugging Face models

In a frontend product, an LLM usually receives a prompt and returns text, structured data, or tool/action output.

```text
User input
  -> prompt
  -> server route
  -> AI provider
  -> response
  -> UI state
```

---

# 2. Do Not Call AI APIs Directly from Frontend

Bad pattern:

```js
// Do not expose secret API keys in browser code.
fetch("https://api.example-ai.com/generate", {
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_AI_SECRET_KEY}`,
  },
});
```

Why this is bad:

* Frontend code is visible to users.
* API keys can be stolen.
* Attackers can use your quota.
* You cannot safely enforce usage limits.

Better pattern:

```text
React UI
  -> /api/ai/summarize
  -> server validates request
  -> server calls AI provider with secret key
  -> server returns safe response
```

AI providers can be called through REST APIs, SDKs, or GraphQL-backed backend services. The frontend should still call your own backend boundary first when secrets, validation, rate limits, or logging are involved.

---

# 3. Secure API Key Pattern

Use environment variables only on the server.

```text
.env
AI_API_KEY=secret_server_only_key
```

Frontend sends user input to your backend:

```js
async function summarize(text) {
  const response = await fetch("/api/ai/summarize", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text }),
  });

  if (!response.ok) {
    throw new Error("Failed to summarize text");
  }

  return response.json();
}
```

---

# 4. AI UI States

AI features need more states than normal API calls.

| State | Meaning |
| ----- | ------- |
| Idle | User has not submitted yet |
| Loading | Waiting for first response |
| Streaming | Response is arriving piece by piece |
| Success | Response completed |
| Empty | Model returned no useful answer |
| Error | Request failed |
| Cancelled | User stopped generation |
| Rate limited | Too many requests |

---

# 5. Prompt to UI Pipeline

Example for an AI Email Generator:

```text
1. User enters purpose and tone.
2. Frontend validates form.
3. Frontend sends structured request to server.
4. Server builds prompt.
5. Server calls AI API.
6. Server returns generated email.
7. Frontend shows result with copy/regenerate actions.
```

---

# 6. Good AI Feature Ideas

* AI Text Summarizer
* AI Email Generator
* AI Form Assistant
* Smart Resume Analyzer
* Chat with Documents
* AI Image Generator
* AI Autocomplete

Common backend choices:

* Next.js route handlers
* Node.js + Express API
* REST API
* GraphQL API

---

# 7. Common Mistakes

* Exposing API keys in frontend code.
* Not validating user input.
* Not handling empty or unsafe responses.
* Showing a loading spinner forever.
* Not allowing the user to cancel long responses.
* Storing sensitive prompt data without thinking.
* Treating AI output as always correct.

---

# 8. Practical Checklist

Before shipping an AI feature:

* API key is server-only.
* Input is validated.
* Loading, error, empty, and retry states exist.
* User can copy useful output.
* User can regenerate output.
* Long responses do not freeze UI.
* Sensitive data is handled carefully.
* Cost and rate limits are considered.

---

# 9. Interview Notes

### How do you integrate AI into a React app?

React collects user input, sends it to a backend/server route, the server calls the AI provider securely, and React renders the response with loading and error states.

### Why should API keys not be used directly in frontend code?

Frontend code is visible in the browser, so secrets can be stolen.

### What UI states are important in AI apps?

Idle, loading, streaming, success, empty, error, cancelled, and rate limited.
