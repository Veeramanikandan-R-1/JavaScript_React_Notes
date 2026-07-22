# HTML Interview Notes (Senior Frontend Engineer Perspective)

Before going deeper into frameworks or libraries, understand this topic as part of real frontend engineering: high-signal HTML questions around semantics, forms, accessibility, SEO, loading, and browser behavior.

---

# 1. Fundamentals

* Interview readiness comes from explaining tradeoffs, not reciting definitions.
* Strong answers connect fundamentals to real production consequences.
* Use examples, failure modes, and debugging approaches in every answer.

---

# 2. Core Concepts

| Concept | Practical meaning |
| ------- | ----------------- |
| Mental model | How the feature really works. |
| Tradeoff | What you gain and lose. |
| Debug story | How you find production issues. |
| Example | Concrete scenario that proves understanding. |
| Edge case | Where simple answers break. |

---

# 3. Internal Working

* Interviewers usually test whether you can reason from first principles under ambiguity.
* Good frontend system design answers include data flow, component boundaries, state ownership, performance, accessibility, observability, and rollout risk.

---

# 4. Common Mistakes

* Answering with definitions only.
* Ignoring tradeoffs.
* Pretending one tool is always best.
* Failing to mention testing and edge cases.

---

# 5. Best Practices

* Start with the mental model.
* Give a practical example.
* Name tradeoffs.
* Mention debugging and tests.
* Keep answers concise but concrete.

---

# 6. Code Example

```text
High-signal HTML answer:

Semantic HTML is about meaning and behavior.
A button performs an action.
A link navigates.
A label names a control.
A heading creates structure.
ARIA should supplement native HTML only when native semantics are not enough.
```

---

# 7. Real-world Scenarios

* Explaining closure behavior with a short code sample.
* Designing a frontend for a dashboard with filters and realtime updates.
* Comparing local state, context, Redux, and server cache.

---

# 7.1 High-Frequency Senior HTML Traps

| Question | Strong short answer |
| -------- | ------------------- |
| Does React replace HTML fundamentals? | No. JSX still renders real DOM, so semantics, labels, forms, focus, metadata, and loading still matter. |
| `readonly` vs `disabled`? | `readonly` values submit; `disabled` controls do not submit and are skipped in focus. |
| `section` vs `article`? | `section` groups a themed area, usually with a heading. `article` is self-contained content. |
| `srcset` vs `picture`? | `srcset` helps the browser choose image resolution. `picture` changes source by media condition or format. |
| `async` vs `defer`? | `async` runs when ready and order is not guaranteed. `defer` runs after parsing and preserves order. |
| `robots.txt` vs robots meta? | `robots.txt` guides crawling by path; robots meta gives page-level indexing/following hints. |
| `button` vs `a`? | Button performs an action. Anchor navigates to a URL or page fragment. |
| Is client validation enough? | No. It improves UX; server validation is required for correctness and security. |

Practical audit flow:

1. Disable CSS mentally: does the content order still make sense?
2. Use keyboard only: can every control be reached and operated?
3. Inspect the accessibility tree: do controls have names and states?
4. Submit the form: are `name`, method, payload, and validation correct?
5. Check initial HTML: title, description, canonical, language, viewport, and share metadata.

---

# 8. Senior Deep Dive

## When to Use

* Use semantic elements whenever the element's built-in meaning matches the job.
* Use ARIA only to fill semantic gaps, not to overwrite good native HTML.
* Use progressive enhancement for flows that should remain usable under partial loading or JavaScript failure.

## Debug Checklist

* Inspect the DOM tree, not only the visual page.
* Check the accessibility tree, labels, alt text, landmark names, and heading order.
* Submit forms manually and confirm `name` values, methods, validation, and server payloads.

## Code Review Checklist

* Are links and buttons used according to purpose?
* Can a keyboard user complete the flow?
* Does the document have useful title, language, metadata, headings, and landmarks?


---

# Revision Notes

* HTML Interview Notes matters because it affects real users, future maintainers, and production behavior.
* Learn the mental model before memorizing syntax.
* Use browser DevTools, tests, and small examples to verify behavior.
* Interview readiness comes from explaining tradeoffs, not reciting definitions.
* Strong answers connect fundamentals to real production consequences.
* Use examples, failure modes, and debugging approaches in every answer.

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

# Hands-on Exercises

## Exercise 1

Build a semantic page section that demonstrates HTML Interview Notes.

### Solution

Include meaningful headings, landmarks where appropriate, labels for controls, useful link text, and keyboard-friendly native elements.

## Exercise 2

Audit it without CSS and JavaScript.

### Solution

The reading order should still make sense, links and forms should still work, and the content should remain understandable.

---

# Senior Frontend Engineer Takeaway

For senior-level work, HTML Interview Notes is not only a syntax topic. You should be able to explain the mental model, choose the right pattern for a product requirement, identify common failure modes, and verify behavior through tooling, tests, and browser inspection.
