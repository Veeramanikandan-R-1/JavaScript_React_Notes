# Conversational, Voice, and Streaming AI UI

AI frontend work is not only calling an API. The UI must make slow, uncertain, generated responses feel clear and controllable.

---

# 1. Conversational UI Basics

A chat-style AI screen usually contains:

* Message list
* User input box
* Send button
* Loading or streaming indicator
* Error message
* Retry button
* Stop generating button
* Copy response button
* Regenerate response button

Message shape:

```js
const message = {
  id: crypto.randomUUID(),
  role: "user", // user | assistant | system
  content: "Summarize this article",
  status: "sent", // sending | streaming | complete | error
  createdAt: Date.now(),
};
```

---

# 2. Streaming Responses

Streaming means the response appears piece by piece instead of waiting for the full answer.

Why streaming improves UX:

* User sees progress quickly.
* Long answers feel faster.
* User can stop generation.
* The app feels more interactive.

UI checklist:

* Show partial text.
* Keep scroll position sensible.
* Provide Stop button.
* Disable duplicate submit while streaming.
* Handle stream interruption.
* Save final response only after completion.

---

# 3. Voice Integration

Voice AI interfaces can use:

* Speech-to-text
* Text-to-speech
* Web Speech API
* Microphone permission
* Audio playback controls

Basic browser speech recognition idea:

```js
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

if (SpeechRecognition) {
  const recognition = new SpeechRecognition();
  recognition.lang = "en-US";
  recognition.onresult = (event) => {
    const text = event.results[0][0].transcript;
    console.log(text);
  };
  recognition.start();
}
```

Text-to-speech idea:

```js
const utterance = new SpeechSynthesisUtterance("Here is your summary.");
speechSynthesis.speak(utterance);
```

---

# 4. State Management for AI Responses

Simple AI forms can use local React state.

Complex AI apps may need:

* Zustand
* Redux Toolkit
* React Query for server state
* Reducers for message state transitions

Use reducer-style state when messages can move through many states.

```js
function chatReducer(state, action) {
  switch (action.type) {
    case "message/sent":
      return { ...state, messages: [...state.messages, action.message] };
    case "assistant/streaming":
      return { ...state, activeResponse: action.chunk };
    case "assistant/error":
      return { ...state, error: action.error };
    default:
      return state;
  }
}
```

---

# 5. AI UI Accessibility

Important checks:

* Input has a visible label.
* Send button is a real `button`.
* Streaming response does not constantly steal focus.
* Error messages use `role="alert"` when needed.
* Keyboard users can send, stop, retry, copy, and clear.
* Voice features also have non-voice alternatives.

Example:

```html
<section aria-labelledby="chat-title">
  <h1 id="chat-title">AI Assistant</h1>
  <div aria-live="polite" aria-label="Conversation messages"></div>
  <form>
    <label for="prompt">Message</label>
    <textarea id="prompt" name="prompt"></textarea>
    <button type="submit">Send</button>
  </form>
</section>
```

---

# 6. Project Ideas

* AI Chatbot
* Voice Assistant UI
* AI Interview Practice Bot
* AI Code Explainer
* AI Document Chat

---

# 7. Common Mistakes

* No stop button for long responses.
* Not showing partial progress.
* Losing scroll position in chat.
* Re-rendering the whole message list for every token.
* Voice-only UI without text fallback.
* Not handling microphone permission denial.

