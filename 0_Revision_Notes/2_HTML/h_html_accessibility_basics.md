# Revision Notes: HTML Accessibility Basics

* Accessibility starts with semantic HTML.
* Most accessible UI is built by choosing the right native elements, labels, text alternatives, heading order, and focus behavior.
* ARIA can help when semantics are missing, but it cannot fix poor interaction design by itself.
* Best practice: Use semantic HTML before ARIA.
* Best practice: Test with only the keyboard.
* Best practice: Ensure every interactive control has a visible label or accessible name.
* Best practice: Use headings and landmarks to make the page navigable.
* Best practice: Keep visual order and DOM order aligned.
* Avoid: Adding ARIA roles that conflict with native semantics.
* Avoid: Removing focus outlines without a visible replacement.
* Avoid: Using icons as buttons without accessible names.
* Avoid: Creating custom controls that do not support keyboard interaction.

---

# Cheat Sheet

| Concept | Practical meaning |
| ------- | ----------------- |
| Accessible name | The label or text assistive tech announces for a control. |
| Focus order | The sequence keyboard users move through interactive elements. |
| Alt text | Text alternative for meaningful images. |
| Landmark | A major page region such as navigation or main content. |
| ARIA | Attributes that add semantics when native HTML is not enough. |

---

# Interview Questions with Answers

### 1. Why does Accessible name matter in HTML Accessibility Basics?

Accessible name means The label or text assistive tech announces for a control. Use HTML Accessibility Basics to solve the specific problem described in this note.

### 2. How does Focus order affect the implementation?

Focus order means The sequence keyboard users move through interactive elements. Understand the browser, runtime, or React behavior behind HTML Accessibility Basics before choosing an implementation.

### 3. What mistake should you avoid around skipping real edge cases?

Avoid skipping real edge cases. Prefer the simplest reliable approach and verify it with a small example.

### 4. How would you debug a production issue related to HTML Accessibility Basics?

Reproduce the issue, inspect the relevant state or DOM, and reduce it to a small failing case. Check edge cases, browser behavior, and tests before changing the implementation.

### 5. What would you check in code review for HTML Accessibility Basics?

Check correctness, edge cases, readability, accessibility, performance, and test coverage. Confirm the chosen approach matches the problem and does not add unnecessary complexity.

---

# Quick Practice

1. Explain one realistic production use case for HTML Accessibility Basics in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
