# Concurrent Rendering Revision

## Core Idea

Urgent updates should stay responsive. Non-urgent rendering can be interrupted or deferred.

## Hooks

| Hook | Use |
| ---- | --- |
| `useTransition` | Mark selected state updates as non-urgent. |
| `useDeferredValue` | Let expensive consumers lag behind an immediate value. |
| `useSyncExternalStore` | Subscribe to external stores safely. |

## Interview Line

Debounce reduces how often work starts. Transitions and deferred values improve rendering responsiveness after work starts.

