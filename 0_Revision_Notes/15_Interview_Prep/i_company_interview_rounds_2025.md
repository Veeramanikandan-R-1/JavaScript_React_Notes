# Company Interview Rounds Revision

Company-wise memory:

| Company / round | Main focus |
| --------------- | ---------- |
| HCL Cisco | object flattening, rerender prevention, custom memo |
| Sol-X | live data, GraphQL, drag/drop form builder, job switch |
| Nagarro | JS/CSS/React fundamentals, Redux, performance, PWA, machine coding |
| Aptiv | UI improvement, timezone work, debugging, huge API response, TypeScript |
| Tecnotree | array uniqueness, `useMemo`, Webpack, Babel |
| Mitsogo | Redux, payment retry/idempotency, search data structure, puzzle |
| Shravan test | lifecycle, props, router, binary upload |
| Accenture | React, JS, Git, Agile, DevOps, Redux, auth, libraries |
| Thinkbridge | rerenders, HTTP request parts, duplicate APIs, lazy loading, React vs Angular |

Fast interview answers:

* Live data: WebSocket/SSE if push is possible; controlled polling only when needed.
* Huge API: request fewer fields, paginate, virtualize, cache, normalize, aggregate.
* Duplicate payment/API: idempotency key plus backend status tracking.
* Headers: metadata; params: URL filters/details; body: business payload.
* TypeScript: catches data-shape mistakes and makes large React codebases safer to refactor.

