# Revision Notes: details, dialog, template, and Progressive Enhancement

* HTML provides the semantic foundation for web pages and application screens.
* Correct HTML improves accessibility, SEO, browser behavior, forms, navigation, and resilience when JavaScript fails.
* Modern HTML includes useful built-in elements that can replace fragile custom JavaScript when used correctly.
* Best practice: Use native elements before custom widgets.
* Best practice: Keep heading and landmark structure meaningful.
* Best practice: Make controls work with keyboard and forms by default.
* Best practice: Use metadata and loading attributes intentionally.
* Best practice: Test the page with JavaScript disabled when progressive enhancement matters.
* Avoid: Replacing native elements with generic `div`s.
* Avoid: Adding JavaScript for behavior the browser already provides.
* Avoid: Forgetting labels, keyboard behavior, and useful text alternatives.
* Avoid: Testing only the visual result instead of DOM meaning and accessibility.

---

# Cheat Sheet

| Concept | Practical meaning |
| ------- | ----------------- |
| Semantic element | An element chosen for meaning, not visual appearance. |
| Native behavior | Built-in browser interaction such as form submission, disclosure, or dialog behavior. |
| Progressive enhancement | A baseline experience that works before optional JavaScript upgrades it. |
| Accessible name | The name assistive technologies announce for a control. |
| Metadata | Document information used by browsers, crawlers, and sharing tools. |

---

# Interview Questions with Answers

### 1. When would you choose native `details/summary` instead of building an accordion from scratch?

When the requirement is a simple disclosure that should work with minimal JavaScript. Native `details/summary` gives built-in toggle behavior and accessibility semantics. I would build custom only if design or behavior requirements exceed what the native element can reliably support.

### 2. What does the native `dialog` element give you, and what must you still verify?

`dialog` gives a browser-supported dialog primitive, `showModal()`, backdrop behavior, and better semantics than a random div. I still verify focus movement, close behavior, accessible name, scroll locking, browser support, and how nested or stacked modals are handled.

### 3. What is progressive enhancement?

Progressive enhancement means starting with working HTML and then layering CSS and JavaScript enhancements. If JavaScript fails or loads slowly, the core content or form should still be understandable and usable where possible.

### 4. When is the `template` element useful?

`template` stores inert markup that is not rendered until cloned. It is useful for lightweight browser-native examples, repeated markup, or progressive enhancement without immediately executing scripts or loading media inside the template.

### 5. A modal works visually but screen-reader users are confused. What do you inspect?

I inspect the accessible name, role, focus placement, tab containment, background inertness, Escape/close behavior, return focus, and whether important content is announced. Visual overlay alone does not make a dialog accessible.

---

# Quick Practice

1. Explain one realistic production use case for details, dialog, template, and Progressive Enhancement in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
