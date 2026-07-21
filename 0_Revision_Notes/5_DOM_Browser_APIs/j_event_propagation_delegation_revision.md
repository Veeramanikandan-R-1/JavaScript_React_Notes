# Revision Notes: Event Propagation and Delegation

## Event Flow

```text
Capturing: window -> target
Target: actual element
Bubbling: target -> window
```

---

# Key Commands / APIs

```js
element.addEventListener("click", handler);
element.addEventListener("click", handler, { capture: true });
event.stopPropagation();
event.target;
event.currentTarget;
event.target.closest("selector");
```

---

# Event Delegation

Attach one listener to a parent.

Benefits:

* fewer listeners
* handles dynamic children
* good for lists, tables, menus

Limitation:

* relies on bubbling
* needs careful target checking

