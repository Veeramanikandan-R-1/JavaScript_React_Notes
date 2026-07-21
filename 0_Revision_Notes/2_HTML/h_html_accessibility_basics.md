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

# Interview Questions & Answers

### 1. How would you explain HTML Accessibility Basics in a real project?

It means choosing markup that describes meaning first: headings for hierarchy, landmarks for page regions, labels for controls, and native elements for behavior.

### 2. What happens internally when HTML Accessibility Basics is involved?

The browser parses markup into the DOM and accessibility tree, so incorrect HTML can create bugs even when the screen looks visually correct.

### 3. How do you debug issues related to HTML Accessibility Basics?

I check DOM order, headings, labels, alt text, link/button purpose, form submission, keyboard navigation, and whether the page still works with limited JavaScript.

### 4. What is the biggest production risk with HTML Accessibility Basics?

The biggest risk is building something that works for the demo state but fails with real content, slow networks, accessibility needs, errors, or future changes.

### 5. What should a senior engineer look for in code review?

They should check the mental model, edge cases, accessibility, performance cost, naming, state ownership, test coverage, and whether the simpler native/platform option was considered.

---

# Quick Practice

1. Explain HTML Accessibility Basics in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
