# Revision Notes: Forms, Inputs, and Validation

* Forms are the primary way users send data to applications.
* Native form controls provide labels, keyboard behavior, validation, autofill, mobile keyboards, and submission behavior.
* Client-side validation improves UX but server-side validation is still required for correctness and security.
* Best practice: Use explicit labels for every input.
* Best practice: Choose the most specific input type.
* Best practice: Show errors near the relevant field and preserve user input after failed submission.
* Best practice: Use `aria-describedby` to connect help and error text.
* Best practice: Validate on submit, then optionally validate touched fields during editing.
* Avoid: Using placeholder text as the only label.
* Avoid: Missing `name` attributes, causing submitted form data to be empty.
* Avoid: Using `type="text"` for email, tel, number, date, or password fields.
* Avoid: Showing error text visually but not connecting it to the input for assistive tech.

---

# Cheat Sheet

| Concept | Practical meaning |
| ------- | ----------------- |
| `form` | Groups controls and defines submission behavior. |
| `label` | Gives an input an accessible name and larger click target. |
| Input type | Controls keyboard, validation, and browser UI. |
| Constraint validation | Built-in validation from attributes like `required`, `minlength`, `pattern`, and `type`. |
| Fieldset | Groups related controls, especially radio buttons and checkboxes. |
| Error messaging | Explains what failed and how to fix it. |

---

# Interview Questions & Answers

### 1. How would you explain Forms, Inputs, and Validation in a real project?

It means choosing markup that describes meaning first: headings for hierarchy, landmarks for page regions, labels for controls, and native elements for behavior.

### 2. What happens internally when Forms, Inputs, and Validation is involved?

The browser parses markup into the DOM and accessibility tree, so incorrect HTML can create bugs even when the screen looks visually correct.

### 3. How do you debug issues related to Forms, Inputs, and Validation?

I check DOM order, headings, labels, alt text, link/button purpose, form submission, keyboard navigation, and whether the page still works with limited JavaScript.

### 4. What is the biggest production risk with Forms, Inputs, and Validation?

The biggest risk is building something that works for the demo state but fails with real content, slow networks, accessibility needs, errors, or future changes.

### 5. What should a senior engineer look for in code review?

They should check the mental model, edge cases, accessibility, performance cost, naming, state ownership, test coverage, and whether the simpler native/platform option was considered.

---

# Quick Practice

1. Explain Forms, Inputs, and Validation in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
