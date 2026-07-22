# Revision Notes: Capstone: Responsive Portfolio

* Capstone projects prove that concepts can be integrated into real workflows.
* A strong project includes real states: loading, empty, error, success, validation, and responsive behavior.
* Quality matters more than feature count.
* Best practice: Write requirements before coding.
* Best practice: Design the data model and component tree.
* Best practice: Implement core flows first.
* Best practice: Add tests for critical behavior.
* Best practice: Polish accessibility, responsiveness, and performance before calling it done.
* Avoid: Building only the happy path.
* Avoid: Ignoring responsive layout.
* Avoid: Skipping empty and error states.
* Avoid: Using fake complexity instead of polished fundamentals.

---

# Cheat Sheet

| Concept | Practical meaning |
| ------- | ----------------- |
| Requirements | What the app must do. |
| Architecture | How files, data, UI, and state are organized. |
| States | Loading, empty, error, success, validation, and disabled states. |
| Quality bar | Accessibility, responsiveness, tests, and performance. |
| Review checklist | What makes the project portfolio-ready. |

---

# Interview Questions with Answers

### 1. If I review your portfolio project, what frontend decisions should you be ready to defend?

Be ready to explain semantic structure, responsive layout choices, image optimization, navigation, accessibility, contact-form behavior, performance budget, and how the page supports scanning by recruiters or hiring managers.

### 2. How would you make a portfolio responsive without chasing device-specific breakpoints?

Use content-driven breakpoints, flexible grid/flex layouts, fluid media, sensible max-widths, and test long text, zoom, and narrow screens. The layout should adapt to content, not only to named devices.

### 3. What accessibility checks would you perform before sharing it?

Keyboard navigation, visible focus, heading order, landmarks, link text, image alt text, color contrast, form labels/errors, reduced motion, and zoom support.

### 4. What performance issues are common in portfolio sites?

Oversized hero images, render-blocking fonts, unused libraries, animation on expensive properties, layout shift from images without dimensions, and contact widgets or analytics that load too early.

### 5. What would make this portfolio feel senior rather than decorative?

Clear content hierarchy, real project tradeoffs, polished responsive behavior, fast loading, accessible interactions, readable code organization, and proof that the UI was tested with real content.

---

# Quick Practice

1. Explain one realistic production use case for Capstone: Responsive Portfolio in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
