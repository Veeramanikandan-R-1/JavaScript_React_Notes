# Realtime Data Patterns in React

This file incorporates the live-data section from `Graphql&PWA&Lighthouse.docx`.

---

# 1. Goal

Realtime UI means the page updates without a manual browser refresh.

Examples:

* chat messages
* stock prices
* notifications
* deployment logs
* network health dashboards
* collaborative editing

---

# 2. Pattern Selection

| Pattern | Best for | Tradeoff |
| ------- | -------- | -------- |
| WebSocket | two-way realtime chat, dashboards, collaborative apps | requires connection lifecycle handling |
| Server-Sent Events | one-way server-to-client streams such as logs or notifications | client cannot send messages on same stream |
| Polling | simple backends without push support | repeated requests and delayed updates |
| GraphQL Subscriptions | GraphQL apps with realtime requirements | needs subscription transport/server support |
| Firebase/Supabase listeners | realtime database apps | vendor-specific data model |

Interview answer:

```text
Prefer WebSocket/SSE when backend can push. Use controlled polling when push is unavailable. Always clean up connections, handle reconnect/offline states, and throttle UI updates if events are frequent.
```

---

# 3. WebSocket Example

```jsx
import { useEffect, useState } from "react";

export function LiveMessages() {
  const [messages, setMessages] = useState([]);
  const [status, setStatus] = useState("connecting");

  useEffect(() => {
    const socket = new WebSocket("wss://example.com/live");

    socket.addEventListener("open", () => setStatus("connected"));

    socket.addEventListener("message", (event) => {
      const message = JSON.parse(event.data);
      setMessages((current) => [...current, message]);
    });

    socket.addEventListener("close", () => setStatus("closed"));
    socket.addEventListener("error", () => setStatus("error"));

    return () => socket.close();
  }, []);

  return (
    <section>
      <p>Status: {status}</p>
      {messages.map((message) => (
        <p key={message.id}>{message.text}</p>
      ))}
    </section>
  );
}
```

Production upgrades:

* reconnect with backoff
* heartbeat/ping timeout
* auth token refresh handling
* bounded message list
* batch frequent updates before setting state

---

# 4. Polling Example

Use polling when the backend has only normal HTTP APIs.

```jsx
import { useEffect, useState } from "react";

export function PollingData() {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    let ignore = false;

    async function fetchData() {
      try {
        const response = await fetch("/api/live-summary");
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const json = await response.json();
        if (!ignore) setData(json);
      } catch (err) {
        if (!ignore) setError(err.message);
      }
    }

    fetchData();
    const intervalId = window.setInterval(fetchData, 5000);

    return () => {
      ignore = true;
      window.clearInterval(intervalId);
    };
  }, []);

  if (error) return <p role="alert">{error}</p>;

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
```

Polling checklist:

* clear interval on unmount
* stop or slow polling when tab is hidden
* avoid overlapping requests
* add backoff after failures
* do not poll high-cost endpoints too frequently

---

# 5. Server-Sent Events Example

```jsx
useEffect(() => {
  const eventSource = new EventSource("/api/events");

  eventSource.onmessage = (event) => {
    const update = JSON.parse(event.data);
    setUpdates((current) => [...current, update]);
  };

  eventSource.onerror = () => {
    setStatus("stream-error");
  };

  return () => eventSource.close();
}, []);
```

SSE is good for one-way updates such as logs, notifications, and live status.

---

# 6. GraphQL Subscription Example

```jsx
import { gql, useSubscription } from "@apollo/client";

const MESSAGE_SUBSCRIPTION = gql`
  subscription OnMessageAdded {
    messageAdded {
      id
      text
    }
  }
`;

export function LatestMessage() {
  const { data, loading, error } = useSubscription(MESSAGE_SUBSCRIPTION);

  if (loading) return <p>Waiting for messages...</p>;
  if (error) return <p role="alert">Subscription failed.</p>;

  return <p>New message: {data.messageAdded.text}</p>;
}
```

---

# 7. Avoiding Performance Problems

Frequent updates can hurt React rendering.

Use:

* functional state updates
* batching
* throttling
* virtualization for long lists
* `React.memo` for expensive rows
* derived-state memoization
* centralized store only when multiple screens need the same stream

---

# 8. Interview Questions

### How do you handle live data in React?

Use WebSockets, SSE, GraphQL subscriptions, or polling depending on backend support and UX requirements.

### WebSocket vs polling?

WebSocket keeps a persistent connection and receives updates immediately. Polling repeatedly asks the server for updates.

### How do you avoid rerender loops?

Open the connection in an effect with a stable dependency array, clean it up, and use functional state updates.

### How do you avoid duplicate API pressure?

Use push transports when possible, slow/stop polling when hidden, dedupe requests, and add backoff after failures.

