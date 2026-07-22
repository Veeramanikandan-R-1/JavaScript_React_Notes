# Revision Notes: CSS Interview Notes

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

### 1. Explain the cascade and specificity as if you were debugging a real bug.

The winning declaration depends on origin, importance, cascade layer, specificity, source order, and inheritance. In a real bug, I inspect the computed style, find the crossed-out declarations, identify the winning selector, and decide whether the fix belongs in order, specificity, scope, or component API.

### 2. When do you choose Flexbox and when do you choose Grid?

Flexbox is better for one-dimensional distribution, such as nav items or action rows. Grid is better for two-dimensional page or card layouts where rows and columns both matter. I choose based on the layout problem, not personal preference.

### 3. A page has horizontal scroll only on mobile. What do you check first?

Inspect the page width, highlight overflowing elements, and check fixed widths, long unbroken text, images, tables, negative margins, `100vw`, and flex children missing `min-width: 0`. Then confirm the fix at zoomed text sizes and narrow devices.

### 4. What makes CSS accessible?

Accessible CSS preserves visible focus, readable contrast, scalable text, enough hit area, usable disabled/error states, reduced-motion preferences, and layouts that still work with zoom, translated text, and assistive technology.

### 5. How would you review a CSS pull request as a senior frontend engineer?

I check whether the layout model is appropriate, selectors are scoped, tokens are used, states are complete, responsive behavior survives real content, and the change does not create browser-support or performance risks. I also look for whether the CSS matches an existing component pattern before adding a new one.

---

# Quick Practice

1. Explain one realistic production use case for CSS Interview Notes in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
