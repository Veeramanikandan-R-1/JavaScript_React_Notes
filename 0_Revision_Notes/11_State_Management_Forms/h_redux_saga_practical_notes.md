# Redux Saga Revision

Saga flow:

```text
dispatch action -> watcher saga -> worker saga -> API/effect -> put success/failure -> reducer -> UI
```

Effects:

| Effect | Memory hook |
| ------ | ----------- |
| `call` | call async function and wait |
| `put` | dispatch action |
| `take` | wait for one action |
| `takeEvery` | run every request |
| `takeLatest` | keep only latest request |
| `select` | read Redux state |
| `fork` | start non-blocking task |
| `cancel` | cancel task |
| `all` | parallel effects |

Use Saga for complex workflows: cancellation, retries, polling, background sync, sequencing, and globally listening to actions.

