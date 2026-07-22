# Revision Notes: Capstone: E-commerce Frontend in React

* Capstone projects prove that concepts can be integrated into real workflows.
* A strong project includes real states: loading, empty, error, success, validation, and responsive behavior.
* Quality matters more than feature count.
* Best practice: Write requirements before coding.
* Best practice: Design the data model and component tree.
* Best practice: Implement core flows first.
* Best practice: Add tests for critical behavior.
* Best practice: Polish accessibility, responsiveness, and performance before calling it done.
* Avoid: Building only the happy path.
* Avoid: Ignoring responsive layout.
* Avoid: Skipping empty and error states.
* Avoid: Using fake complexity instead of polished fundamentals.

---

# Cheat Sheet

| Concept | Practical meaning |
| ------- | ----------------- |
| Requirements | What the app must do. |
| Architecture | How files, data, UI, and state are organized. |
| States | Loading, empty, error, success, validation, and disabled states. |
| Quality bar | Accessibility, responsiveness, tests, and performance. |
| Review checklist | What makes the project portfolio-ready. |

---

# Interview Questions with Answers

### 1. What user journeys must an e-commerce frontend cover?

Browse products, search/filter/sort, view product detail, manage cart, handle inventory/price changes, checkout or checkout handoff, auth/session state, order confirmation, and recovery from payment/API errors.

### 2. What state belongs in the cart?

Store item identity and quantity, then reconcile price, inventory, promotions, shipping, and tax with the server. The client cart should not be the final authority for money or availability.

### 3. What edge cases should checkout handle?

Out-of-stock items, changed prices, expired sessions, duplicate submit, failed payment, slow network, address validation, coupon failure, abandoned cart restore, and retry without double-ordering.

### 4. How do you make product listing pages performant?

Optimize images, paginate or infinite-load responsibly, include filter params in cache keys, avoid expensive client filtering of huge datasets, lazy-load noncritical widgets, and preserve layout stability.

### 5. What would you check in an e-commerce frontend review?

Cart correctness, server validation, accessible forms, loading/error/retry states, protected routes, price/inventory reconciliation, analytics that does not block UX, and tests for checkout failure paths.

---

# Quick Practice

1. Explain one realistic production use case for Capstone: E-commerce Frontend in React in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
