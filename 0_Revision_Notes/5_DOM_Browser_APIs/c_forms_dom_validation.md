# Revision Notes: DOM Forms and Validation

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

### 1. Why should form fields use real labels instead of placeholders only?

Labels provide a persistent accessible name, increase the clickable target, and remain visible after typing. Placeholders are hints, not labels, and can disappear exactly when the user needs context.

### 2. How does native constraint validation help frontend apps?

Attributes like `required`, `type`, `min`, `max`, and `pattern` give baseline validation, keyboard hints, and browser semantics. Custom validation can build on top of that, but server validation is still required.

### 3. How do you make validation errors accessible?

Associate the error text with the input using `aria-describedby`, update invalid state thoughtfully, and move focus only when it helps the user recover. Error messages should be specific and not rely on color alone.

### 4. What can go wrong with custom select or date-picker controls?

They can lose keyboard behavior, accessible names, focus management, mobile input support, form submission semantics, and validation integration. A senior answer starts by asking whether native controls can meet the requirement.

### 5. What form bugs do you look for during review?

Missing labels, unclear required/optional state, errors not connected to fields, submit buttons disabled without recovery, client-only validation, and form state that breaks browser autofill or password managers.

---

# Quick Practice

1. Explain one realistic production use case for DOM Forms and Validation in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
