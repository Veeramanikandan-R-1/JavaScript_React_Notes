# Revision Notes: Focus Management, Modals, and Menus

* Accessibility means people can use the product across abilities, devices, preferences, and assistive technologies.
* Accessible interfaces are usually more robust for everyone.
* SEO and accessibility both benefit from meaningful structure, fast pages, and clear content.
* Best practice: Use semantic elements.
* Best practice: Test keyboard flows.
* Best practice: Provide accessible names and error messages.
* Best practice: Make metadata unique and server-visible where SEO matters.
* Avoid: Removing focus outlines.
* Avoid: Using ARIA instead of native elements.
* Avoid: Relying on color alone.
* Avoid: Shipping client-only pages that have empty metadata.

---

# Cheat Sheet

| Concept | Practical meaning |
| ------- | ----------------- |
| Semantic HTML | Native meaning and behavior. |
| Focus | Current keyboard interaction target. |
| Accessible name | Text announced for a control. |
| Metadata | Machine-readable page description. |
| Server rendering | HTML available before client JavaScript executes. |

---

# Interview Questions with Answers

### 1. What should happen to focus when a modal opens and closes?

Focus should move into the modal on open, remain inside while the modal is active, and return to the element that opened it on close. Background content should not be reachable while the modal is blocking interaction.

### 2. How is a menu different from a modal dialog?

A modal blocks interaction with the rest of the page. A menu is usually a transient control tied to a trigger, with arrow-key navigation patterns depending on menu type. The expected keyboard behavior is different.

### 3. What can go wrong with click-outside handling?

It can close before inner controls run, conflict with portals, break nested overlays, ignore keyboard users, or close when focus moves for legitimate reasons. Pointer and focus behavior should be designed together.

### 4. How do you debug focus getting lost after closing an overlay?

Find the opener, track where focus moves on open/close, check conditional rendering/remounts, ensure the opener still exists, and test keyboard, mouse, and route-change close paths.

### 5. What overlay accessibility issues do you flag in review?

Missing accessible names, no focus restore, background still tabbable, Escape behavior missing or conflicting, body scroll not restored, and menu keyboard behavior that only supports mouse users.

---

# Quick Practice

1. Explain one realistic production use case for Focus Management, Modals, and Menus in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
