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

### 1. What is an accessible name, and how do you debug it?

An accessible name is the text assistive tech uses to identify a control. It can come from a label, text content, `alt`, `aria-label`, or `aria-labelledby` depending on the element. I debug it with the browser accessibility tree and by checking the computed name, not only the visible UI.

### 2. When should you use ARIA?

Use ARIA when native HTML cannot express the needed semantics. Do not use ARIA to cover up poor element choice. A real `button` is better than `div role="button"` because native behavior comes with semantics, keyboard support, and browser expectations.

### 3. What is wrong with positive `tabindex` values?

Positive `tabindex` creates a custom focus order that quickly becomes confusing and hard to maintain. I prefer natural DOM order, use `tabindex="0"` sparingly for custom focusable elements, and `tabindex="-1"` for programmatic focus targets like modal containers or error summaries.

### 4. A toast appears after save. Should it use `aria-live`?

If it communicates important status, yes, usually with a polite live region. If it is an urgent error, `role="alert"` may be appropriate. I avoid overusing live regions because too many announcements can make the experience noisy.

### 5. What is your minimum accessibility checklist for a feature?

Keyboard completion, visible focus, meaningful labels, correct link/button usage, heading order, error association, color contrast, reduced-motion behavior where relevant, and screen-reader names for icon-only controls. I also test the main workflow without a mouse.

---

# Quick Practice

1. Explain one realistic production use case for HTML Accessibility Basics in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
