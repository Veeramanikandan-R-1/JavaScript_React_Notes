# Revision Notes: HTML and CSS Interview Questions

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

### 1. You see a design where a clickable card navigates to details and also has a favorite icon inside. How would you mark it up?

I would avoid nesting a `button` inside an `a` because interactive elements should not be nested. A practical solution is to make the card layout a container, use a normal link for the title/details area, and a separate `button` for favorite. If the whole card must feel clickable, I would stretch the link with CSS while keeping the favorite button above it in stacking order and keyboard order.

### 2. A production page looks correct on desktop but text overflows and buttons become tiny on mobile. What do you check first?

I check the viewport meta tag, fixed widths, long unbroken text, flex/grid min-width behavior, and whether media queries are written around content instead of device names. I also inspect computed styles on the overflowing element because the real cause is often `width`, `min-width`, `white-space`, or a parent flex item missing `min-width: 0`.

### 3. When should you use Flexbox and when should you use CSS Grid?

Flexbox is better for one-dimensional layout: a row or a column where content size can drive distribution. Grid is better when rows and columns both matter, such as dashboards, galleries, and page-level layout. In interviews I mention that the choice is not about which is newer; it is about whether the layout problem is one-axis or two-axis.

### 4. A button is visually disabled but screen-reader users can still activate it. What is wrong?

Only styling it with a gray color or `opacity` is not enough. A native `button` should use the `disabled` attribute when it truly cannot be used. For links or custom controls, I would reconsider whether they should be buttons, and if a disabled-like state is needed, handle focus, click prevention, `aria-disabled`, and visual styling deliberately.

### 5. How do you explain CSS specificity without just reciting the formula?

I explain it as the browser deciding which matching declaration wins after considering origin, importance, cascade layers, specificity, and source order. Then I give a real example: a component class losing to an ID selector or inline style. A senior answer should also say how to avoid specificity fights: shallow selectors, design tokens, layers where useful, and fewer overrides.

---

# Quick Practice

1. Explain one realistic production use case for HTML and CSS Interview Questions in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
