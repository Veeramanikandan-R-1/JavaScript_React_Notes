# Realtime Data Patterns Revision

| Pattern | Use |
| ------- | --- |
| WebSocket | two-way realtime chat/dashboard |
| SSE | one-way server push such as logs/notifications |
| Polling | simple backend without push |
| GraphQL Subscription | realtime GraphQL apps |
| Firebase/Supabase listener | realtime database apps |

Checklist:

* clean up sockets, event sources, and intervals
* avoid overlapping polling requests
* add reconnect/backoff
* use functional state updates
* throttle or batch frequent updates
* virtualize long realtime lists
* stop or slow polling when the tab is hidden

