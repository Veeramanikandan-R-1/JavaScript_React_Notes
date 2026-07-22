# Revision Notes: Storage, Cookies, localStorage, sessionStorage, and IndexedDB

* Browser APIs connect JavaScript to documents, events, storage, networking, and security boundaries.
* DOM code should preserve semantics, accessibility, and performance.
* The browser is a shared runtime: user input, rendering, scripts, network, and storage interact.
* Best practice: Use semantic HTML first.
* Best practice: Delegate events for dynamic lists.
* Best practice: Batch DOM reads and writes.
* Best practice: Clean up listeners, observers, timers, and subscriptions.
* Avoid: Building inaccessible custom controls.
* Avoid: Adding event listeners repeatedly without cleanup.
* Avoid: Reading and writing layout in tight loops.
* Avoid: Trusting unsanitized user input.
* `localStorage` persists until cleared.
* `sessionStorage` is temporary for the current tab/session.
* Both store strings and have browser-dependent limits, commonly around 5-10 MB.
* Do not store passwords, tokens, or sensitive user data in web storage.
* Use `JSON.stringify`/`JSON.parse` for object values.

---

# Cheat Sheet

| Concept | Practical meaning |
| ------- | ----------------- |
| DOM | Live tree representation of the document. |
| Node | A unit in the DOM tree. |
| Event | A notification from user input, browser lifecycle, network, or code. |
| Mutation | A change to DOM structure, text, attributes, or state. |
| Accessibility tree | Browser-derived structure consumed by assistive technologies. |

---

# Interview Questions with Answers

### 1. Why does DOM matter in Storage, Cookies, localStorage, sessionStorage, and IndexedDB?

DOM means Live tree representation of the document. Use Storage, Cookies, localStorage, sessionStorage, and IndexedDB to solve the specific problem described in this note.

### 2. How does Node affect the implementation?

Node means A unit in the DOM tree. Understand the browser, runtime, or React behavior behind Storage, Cookies, localStorage, sessionStorage, and IndexedDB before choosing an implementation.

### 3. What mistake should you avoid around skipping real edge cases?

Avoid skipping real edge cases. Prefer the simplest reliable approach and verify it with a small example.

### 4. How would you debug a production issue related to Storage, Cookies, localStorage, sessionStorage, and IndexedDB?

Reproduce the issue, inspect the relevant state or DOM, and reduce it to a small failing case. Check edge cases, browser behavior, and tests before changing the implementation.

### 5. What would you check in code review for Storage, Cookies, localStorage, sessionStorage, and IndexedDB?

Check correctness, edge cases, readability, accessibility, performance, and test coverage. Confirm the chosen approach matches the problem and does not add unnecessary complexity.

---

# Quick Practice

1. Explain one realistic production use case for Storage, Cookies, localStorage, sessionStorage, and IndexedDB in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
