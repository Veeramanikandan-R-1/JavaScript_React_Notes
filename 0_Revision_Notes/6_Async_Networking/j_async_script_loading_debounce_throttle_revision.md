# Revision Notes: Async Script Loading, Debounce, and Throttle

## Event Loop

```text
Call stack -> microtasks -> macrotasks
```

Microtasks:

* `Promise.then`
* `queueMicrotask`
* `MutationObserver`

Macrotasks:

* `setTimeout`
* `setInterval`
* DOM events

---

# Script Loading

| Attribute | Use |
| --------- | --- |
| `async` | independent scripts, order does not matter |
| `defer` | DOM-dependent scripts, order matters |
| `type="module"` | modern JS modules, deferred by default |

---

# Debounce vs Throttle

| Concept | Meaning | Use |
| ------- | ------- | --- |
| Debounce | wait for pause | search input |
| Throttle | control speed | scroll/resize |

