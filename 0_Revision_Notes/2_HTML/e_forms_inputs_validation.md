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

# Interview Questions with Answers

### 1. Why does `form` matter in Forms, Inputs, and Validation?

`form` means Groups controls and defines submission behavior. Use Forms, Inputs, and Validation to solve the specific problem described in this note.

### 2. How does `label` affect the implementation?

`label` means Gives an input an accessible name and larger click target. Understand the browser, runtime, or React behavior behind Forms, Inputs, and Validation before choosing an implementation.

### 3. What mistake should you avoid around skipping real edge cases?

Avoid skipping real edge cases. Prefer the simplest reliable approach and verify it with a small example.

### 4. How would you debug a production issue related to Forms, Inputs, and Validation?

Reproduce the issue, inspect the relevant state or DOM, and reduce it to a small failing case. Check edge cases, browser behavior, and tests before changing the implementation.

### 5. What would you check in code review for Forms, Inputs, and Validation?

Check correctness, edge cases, readability, accessibility, performance, and test coverage. Confirm the chosen approach matches the problem and does not add unnecessary complexity.

---

# Quick Practice

1. Explain one realistic production use case for Forms, Inputs, and Validation in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
