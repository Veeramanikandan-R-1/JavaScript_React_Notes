# Revision Notes: HTML Interview Notes

* Interview readiness comes from explaining tradeoffs, not reciting definitions.
* Strong answers connect fundamentals to real production consequences.
* Use examples, failure modes, and debugging approaches in every answer.
* Best practice: Start with the mental model.
* Best practice: Give a practical example.
* Best practice: Name tradeoffs.
* Best practice: Mention debugging and tests.
* Best practice: Keep answers concise but concrete.
* Avoid: Answering with definitions only.
* Avoid: Ignoring tradeoffs.
* Avoid: Pretending one tool is always best.
* Avoid: Failing to mention testing and edge cases.

---

# Cheat Sheet

| Concept | Practical meaning |
| ------- | ----------------- |
| Mental model | How the feature really works. |
| Tradeoff | What you gain and lose. |
| Debug story | How you find production issues. |
| Example | Concrete scenario that proves understanding. |
| Edge case | Where simple answers break. |

---

# Interview Questions with Answers

### 1. What are the top HTML mistakes you see in React codebases?

Clickable `div`s, missing labels, poor heading order, invalid nesting, wrong link/button usage, missing image `alt`, and custom controls without keyboard support. These issues often pass visual review but fail accessibility, SEO, and production usability.

### 2. How do you explain semantic HTML to a junior developer?

Semantic HTML means choosing the element that matches the purpose of the content or interaction. Start with meaning, then style it. A button can look like a link and a link can look like a button, but their behavior and user expectations are different.

### 3. What do you inspect in the accessibility tree?

I inspect roles, accessible names, states, descriptions, landmark names, heading structure, and whether hidden content is actually hidden from assistive tech. The DOM and the accessibility tree can reveal issues that are invisible in screenshots.

### 4. What HTML knowledge matters most for SEO?

Useful titles, headings, crawlable links, metadata, canonical URLs, image alt where relevant, structured data when appropriate, and content present in initial HTML for pages that need indexing. SEO is not only meta tags; it starts with readable content structure.

### 5. How do you handle disagreement with a designer about native controls?

I explain the built-in behavior we get from native controls, then try to match the design with CSS before replacing semantics. If a custom control is unavoidable, I make the accessibility and keyboard requirements explicit so the team understands the cost.

---

# Quick Practice

1. Explain one realistic production use case for HTML Interview Notes in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
