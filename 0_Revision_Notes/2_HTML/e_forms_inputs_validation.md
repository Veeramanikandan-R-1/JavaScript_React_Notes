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

### 1. Why should inputs have real labels instead of only placeholders?

A placeholder is a hint, not a label. It disappears while typing, may have poor contrast, and does not replace a programmatic label for assistive tech. I use `<label for="email">Email</label>` or an equivalent accessible label.

### 2. What is the difference between `disabled` and `readonly`?

`disabled` controls cannot be focused, changed, or submitted with the form. `readonly` controls can usually be focused and submitted, but not edited. This matters when displaying server-provided values that still need to be sent.

### 3. How do native validation and custom validation work together?

Native validation gives useful browser behavior through `required`, `type`, `min`, `max`, `pattern`, and constraint APIs. Custom validation is useful for business rules and better messages. I still keep accessible error text connected to the field with `aria-describedby` when needed.

### 4. How would you collect form values without controlling every input in React?

For simple forms, I can use `FormData` on submit and read values from `event.currentTarget`. Controlled inputs are best when the UI must react to every keystroke, but uncontrolled inputs can reduce complexity for straightforward submit flows.

### 5. A form shows an error message, but screen-reader users do not hear it. What do you check?

I check whether the error is associated with the input using `aria-describedby`, whether invalid state is exposed with `aria-invalid`, and whether a submit-level error needs `role="alert"` or focus management. I also check that the message is specific and visible near the field.

---

# Quick Practice

1. Explain one realistic production use case for Forms, Inputs, and Validation in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
