# Focus Management, Modals, and Menus (Senior Frontend Engineer Perspective)

Before going deeper into frameworks or libraries, understand this topic as part of real frontend engineering: advanced keyboard interaction patterns.

---

# 1. Fundamentals

* Accessibility means people can use the product across abilities, devices, preferences, and assistive technologies.
* Accessible interfaces are usually more robust for everyone.
* SEO and accessibility both benefit from meaningful structure, fast pages, and clear content.

---

# 2. Core Concepts

| Concept | Practical meaning |
| ------- | ----------------- |
| Semantic HTML | Native meaning and behavior. |
| Focus | Current keyboard interaction target. |
| Accessible name | Text announced for a control. |
| Metadata | Machine-readable page description. |
| Server rendering | HTML available before client JavaScript executes. |

---

# 3. Internal Working

* Browsers derive the accessibility tree from DOM, roles, labels, states, and relationships.
* Crawlers and social bots read HTML, links, metadata, and rendered content with varying JavaScript support.
* Focus management is runtime state and must be handled when UI appears, disappears, or traps interaction.

---

# 4. Common Mistakes

* Removing focus outlines.
* Using ARIA instead of native elements.
* Relying on color alone.
* Shipping client-only pages that have empty metadata.

---

# 5. Best Practices

* Use semantic elements.
* Test keyboard flows.
* Provide accessible names and error messages.
* Make metadata unique and server-visible where SEO matters.

---

# 6. Code Example

```html
<main>
  <h1>Account settings</h1>
  <button type="button" aria-expanded="false" aria-controls="security-menu">
    Security options
  </button>
  <div id="security-menu" hidden>
    <a href="/settings/password">Change password</a>
  </div>
</main>
```

---

# 7. Real-world Scenarios

* A modal traps focus correctly.
* A React product page exposes metadata for sharing.
* A keyboard user completes a form without a mouse.

---

# 7.1 React Modal Focus Checklist

When a React modal opens:

* move focus into the modal
* keep tab focus inside the modal while open
* close on Escape when appropriate
* restore focus to the trigger when the modal closes
* hide or inert background content when required

```jsx
function Modal({ onClose, children }) {
  const closeButtonRef = React.useRef(null);

  React.useEffect(() => {
    const previous = document.activeElement;
    closeButtonRef.current?.focus();

    return () => previous?.focus?.();
  }, []);

  return (
    <div role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <h2 id="modal-title">Confirm action</h2>
      {children}
      <button ref={closeButtonRef} type="button" onClick={onClose}>
        Close
      </button>
    </div>
  );
}
```

For production modals, use a well-tested component or accessibility utility unless your team is prepared to handle focus trapping and edge cases fully.

---

# 8. Senior Deep Dive

## When to Use

* Use accessibility checks during implementation, not as a final cleanup pass.
* Use semantic HTML and native controls before ARIA-heavy custom widgets.
* Use server-visible content and metadata where SEO matters.

## Debug Checklist

* Navigate using only the keyboard.
* Inspect accessible names, roles, states, and relationships.
* Test zoom, reduced motion, color contrast, and form error announcements.

## Code Review Checklist

* Can users identify, reach, operate, and understand every control?
* Does focus move predictably when UI opens or closes?
* Is important content available to crawlers and assistive technology?


---

# Revision Notes

* Focus Management, Modals, and Menus matters because it affects real users, future maintainers, and production behavior.
* Learn the mental model before memorizing syntax.
* Use browser DevTools, tests, and small examples to verify behavior.
* Accessibility means people can use the product across abilities, devices, preferences, and assistive technologies.
* Accessible interfaces are usually more robust for everyone.
* SEO and accessibility both benefit from meaningful structure, fast pages, and clear content.

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

# Hands-on Exercises

## Exercise 1

Audit a UI flow related to Focus Management, Modals, and Menus.

### Solution

Check keyboard access, focus order, labels, roles, announcements, color contrast, zoom, and reduced motion.

## Exercise 2

Fix one issue without changing visual design.

### Solution

Prefer semantic HTML, labels, focus management, and accessible text before ARIA-heavy changes.

---

# Senior Frontend Engineer Takeaway

For senior-level work, Focus Management, Modals, and Menus is not only a syntax topic. You should be able to explain the mental model, choose the right pattern for a product requirement, identify common failure modes, and verify behavior through tooling, tests, and browser inspection.
