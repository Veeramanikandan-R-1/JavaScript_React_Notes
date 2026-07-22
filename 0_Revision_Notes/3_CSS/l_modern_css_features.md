# Revision Notes: Modern CSS Features

* Modern CSS reduces JavaScript and fragile hacks.
* Use newer features when browser support matches project requirements.
* Progressive enhancement lets advanced CSS improve capable browsers while preserving baseline behavior.
* Best practice: Use modern CSS to simplify, not impress.
* Best practice: Prefer logical properties for reusable components.
* Best practice: Use layers to organize reset, base, components, and utilities.
* Best practice: Document browser support assumptions.
* Avoid: Using new CSS without checking target browser support.
* Avoid: Replacing readable CSS with clever selectors.
* Avoid: Using nesting to create overly deep selectors.
* Avoid: Forgetting fallback behavior.

---

# Cheat Sheet

| Concept | Practical meaning |
| ------- | ----------------- |
| Logical properties | Use writing-mode-aware properties like `margin-inline`. |
| `:is()` | Groups selector alternatives. |
| `:where()` | Groups selectors with zero specificity. |
| Cascade layers | Control broad style ordering. |
| Nesting | Write related selectors together where supported by tooling/runtime. |
| Color functions | Create adaptable color systems. |

---

# Interview Questions with Answers

### 1. Why does Logical properties matter in Modern CSS Features?

Logical properties means Use writing-mode-aware properties like `margin-inline`. Use Modern CSS Features to solve the specific problem described in this note.

### 2. How does `:is()` affect the implementation?

`:is()` means Groups selector alternatives. Understand the browser, runtime, or React behavior behind Modern CSS Features before choosing an implementation.

### 3. What mistake should you avoid around skipping real edge cases?

Avoid skipping real edge cases. Prefer the simplest reliable approach and verify it with a small example.

### 4. How would you debug a production issue related to Modern CSS Features?

Reproduce the issue, inspect the relevant state or DOM, and reduce it to a small failing case. Check edge cases, browser behavior, and tests before changing the implementation.

### 5. What would you check in code review for Modern CSS Features?

Check correctness, edge cases, readability, accessibility, performance, and test coverage. Confirm the chosen approach matches the problem and does not add unnecessary complexity.

---

# Quick Practice

1. Explain one realistic production use case for Modern CSS Features in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
