# 1. `<form>`

## What is a Form?

A `<form>` is an HTML element used to **collect user input** and submit it.

Examples:

* Login
* Registration
* Search
* Contact Form
* Checkout

```html
<form>
    <input type="text">
    <button type="submit">Submit</button>
</form>
```

---

## How Form Submission Works

When the user clicks a **submit button**:

```
User fills form
        ↓
Clicks Submit
        ↓
Browser validates fields
        ↓
If valid
        ↓
Form submitted
```

---

## Important Attributes

### action

URL where form data is sent.

```html
<form action="/login">
```

In React SPA applications, this is usually **not used** because React handles submission with JavaScript.

---

### method

HTTP method.

```html
<form method="POST">
```

Possible values

```
GET
POST
```

GET

```
/search?q=react
```

POST

Request body contains form data.

---

### enctype

Used when uploading files.

```html
<form enctype="multipart/form-data">
```

Required for

```html
<input type="file">
```

---

### novalidate

Disables browser validation.

```html
<form novalidate>
```

Useful when React handles validation.

---

## React Usage

React usually prevents default browser submission.

```jsx
function handleSubmit(e) {
    e.preventDefault();

    console.log("Submitted");
}

<form onSubmit={handleSubmit}>
```

---

# 2. `<input>`

Most common form element.

```html
<input>
```

---

## Common Input Types

### text

```html
<input type="text">
```

General text.

---

### password

Masks input.

```html
<input type="password">
```

---

### email

Checks email format.

```html
<input type="email">
```

---

### number

Numeric input.

```html
<input type="number">
```

---

### tel

Phone numbers.

```html
<input type="tel">
```

No automatic phone validation.

---

### url

Website URL.

```html
<input type="url">
```

---

### search

Search box.

```html
<input type="search">
```

---

### date

```html
<input type="date">
```

---

### datetime-local

```html
<input type="datetime-local">
```

---

### time

```html
<input type="time">
```

---

### month

```html
<input type="month">
```

---

### week

```html
<input type="week">
```

---

### color

```html
<input type="color">
```

---

### range

Slider.

```html
<input
type="range"
min="0"
max="100">
```

---

### checkbox

Multiple selections.

```html
<input type="checkbox">
```

---

### radio

Single selection.

```html
<input
type="radio"
name="gender">
```

Radio buttons with the **same `name`** form one group.

---

### file

```html
<input type="file">
```

---

### hidden

Invisible field.

```html
<input
type="hidden"
value="123">
```

---

### submit

```html
<input
type="submit"
value="Save">
```

---

### reset

Resets form.

```html
<input type="reset">
```

Rarely used.

---

# Common Input Attributes

```
placeholder
value
name
id
disabled
readonly
maxlength
minlength
min
max
step
checked
multiple
accept
autocomplete
required
pattern
```

---

# React Perspective

React usually controls inputs.

```jsx
const [name, setName] = useState("");

<input
    value={name}
    onChange={(e) => setName(e.target.value)}
/>
```

This is called a **Controlled Component**.

---

# 3. `<textarea>`

Used for multi-line text.

```html
<textarea></textarea>
```

Example

```html
<textarea
rows="5"
cols="30">
</textarea>
```

---

React

```jsx
<textarea
value={message}
onChange={handleChange}
/>
```

---

# 4. `<select>`

Dropdown list.

```html
<select>

<option>India</option>

<option>USA</option>

</select>
```

---

### Default selection

```html
<option selected>
India
</option>
```

In React, use the `value` prop instead of `selected`.

```jsx
<select value={country}>
```

---

### Multiple Selection

```html
<select multiple>
```

---

# 5. `<datalist>`

Provides suggestions while allowing users to type any value.

```html
<input list="cities">

<datalist id="cities">

<option value="Chennai">

<option value="Delhi">

</datalist>
```

---

## Difference between Select and Datalist

| Select                        | Datalist                            |
| ----------------------------- | ----------------------------------- |
| User must choose an option    | User can type anything              |
| Fixed options                 | Suggestions only                    |
| Cannot enter custom value     | Custom value allowed                |
| Better for controlled choices | Better for autocomplete suggestions |

---

# 6. `<button>`

Creates clickable buttons.

```html
<button>
Save
</button>
```

---

## Types

### submit

Default inside forms.

```html
<button type="submit">
```

---

### button

Normal button.

```html
<button type="button">
```

---

### reset

Resets form.

```html
<button type="reset">
```

---

## React Best Practice

Always specify button type.

```jsx
<button type="button">
```

Otherwise inside a form it behaves as

```
submit
```

which may accidentally submit the form.

---

# 7. `<label>`

Associates text with form controls.

```html
<label>

Username

</label>
```

---

## Best Practice

```html
<label for="username">

Username

</label>

<input id="username">
```

Clicking label focuses input.

---

React

```jsx
<label htmlFor="username">

Username

</label>
```

`htmlFor` is used because `for` is a JavaScript reserved keyword.

---

## Benefits

* Accessibility
* Larger clickable area
* Better UX

---

# 8. `<fieldset>`

Groups related form controls.

```html
<fieldset>

...

</fieldset>
```

Example

```html
<fieldset>

<input>

<input>

</fieldset>
```

---

Useful for

* Address
* Payment
* Personal Information

---

# 9. `<legend>`

Title of fieldset.

```html
<fieldset>

<legend>

Personal Info

</legend>

...

</fieldset>
```

Improves accessibility.

---

# 10. Form Validation

HTML provides built-in validation.

Example

```html
<input
required
type="email">
```

Browser validates automatically.

---

Common validation attributes

```
required
pattern
maxlength
minlength
min
max
step
type
```

---

React often performs additional validation before submitting.

---

# 11. `autocomplete`

Allows browsers to remember user data.

```html
<input autocomplete="email">
```

Common values

```
name

email

username

current-password

new-password

street-address

postal-code

country

off
```

---

Disable

```html
autocomplete="off"
```

---

Production Example

```html
<input autocomplete="email">

<input autocomplete="current-password">
```

---

# 12. `required`

Makes field mandatory.

```html
<input required>
```

Browser blocks submission if empty.

---

Works with

```
input

textarea

select
```

---

# 13. `pattern`

Regex validation.

Example

Only 10 digits.

```html
<input

pattern="[0-9]{10}">
```

---

Only alphabets

```html
pattern="[A-Za-z]+"
```

---

Password

```html
pattern="(?=.*[A-Z])(?=.*[0-9]).{8,}"
```

Requires

* one uppercase
* one number
* minimum 8 characters

---

Works with

```
text

password

email

tel

search

url
```

---

# HTML Validation vs React Validation

| HTML Validation            | React Validation              |
| -------------------------- | ----------------------------- |
| Browser handles validation | JavaScript handles validation |
| Less code                  | More flexible                 |
| Basic validation           | Complex business rules        |
| Limited customization      | Fully customizable            |

Production apps often use **both**:

* HTML for simple constraints (`required`, `type="email"`).
* React (or libraries like React Hook Form/Formik + Yup/Zod) for business logic and custom validation.

---

# Common Mistakes

❌ Forgetting `e.preventDefault()` in React.

❌ Not specifying `button` type.

❌ Using `selected` in React instead of `value`.

❌ Using `for` instead of `htmlFor`.

❌ Forgetting `name` on radio buttons (they won't behave as a group).

❌ Using placeholder instead of label (placeholder is **not** a replacement for a label).

❌ Using browser validation alone for critical business rules.

---

# Best Practices

* Always use `<label>` with form controls.
* Prefer controlled components in React.
* Always specify button `type`.
* Use semantic grouping with `fieldset` and `legend`.
* Combine HTML validation with React validation.
* Use meaningful `autocomplete` values.
* Keep placeholders as hints, not labels.
* Use `name` attributes for form submission and radio grouping.

---

# Revision Notes

## Form Flow

```
<form>
      ↓
User enters data
      ↓
Browser validation
      ↓
onSubmit
      ↓
preventDefault()
      ↓
React validation
      ↓
API call
```

---

## Input Types Cheat Sheet

| Type           | Purpose            |
| -------------- | ------------------ |
| text           | Text               |
| password       | Password           |
| email          | Email              |
| number         | Number             |
| tel            | Phone              |
| url            | Website            |
| search         | Search             |
| date           | Date               |
| time           | Time               |
| datetime-local | Date & Time        |
| month          | Month              |
| week           | Week               |
| color          | Color Picker       |
| range          | Slider             |
| checkbox       | Multiple selection |
| radio          | Single selection   |
| file           | Upload             |
| hidden         | Hidden value       |
| submit         | Submit form        |
| reset          | Reset form         |

---

## Important Form Elements

| Element  | Purpose                     |
| -------- | --------------------------- |
| form     | Container for form controls |
| input    | User input                  |
| textarea | Multi-line input            |
| select   | Dropdown                    |
| datalist | Input suggestions           |
| button   | Action button               |
| label    | Accessible label            |
| fieldset | Group related controls      |
| legend   | Title for fieldset          |

---

## Validation Attributes Cheat Sheet

| Attribute    | Purpose                    |
| ------------ | -------------------------- |
| required     | Mandatory field            |
| pattern      | Regex validation           |
| minlength    | Minimum length             |
| maxlength    | Maximum length             |
| min          | Minimum numeric/date value |
| max          | Maximum numeric/date value |
| step         | Increment value            |
| type         | Built-in format validation |
| autocomplete | Browser autofill           |

---

## Select vs Datalist

| Select                      | Datalist                        |
| --------------------------- | ------------------------------- |
| Fixed choices               | Suggestions                     |
| No custom value             | Custom value allowed            |
| Best for predefined options | Best for searchable suggestions |

---

## React Differences

| HTML                    | React                           |
| ----------------------- | ------------------------------- |
| `for`                   | `htmlFor`                       |
| `class`                 | `className`                     |
| `selected`              | `value`                         |
| Native submit           | `onSubmit + e.preventDefault()` |
| Uncontrolled by default | Usually controlled with state   |

---

# Frequently Asked Interview Questions

### 1. What is the purpose of the `<form>` element?

It groups input controls and provides a mechanism to collect and submit user data.

---

### 2. What is the difference between `GET` and `POST` in forms?

* **GET:** Sends data in the URL, suitable for fetching/searching.
* **POST:** Sends data in the request body, suitable for creating or updating data.

---

### 3. Why do React applications call `e.preventDefault()`?

To stop the browser's default form submission so React can validate data and send API requests without reloading the page.

---

### 4. What is the difference between `<select>` and `<datalist>`?

`<select>` restricts users to predefined options, while `<datalist>` provides suggestions but still allows custom input.

---

### 5. Why should every input have a `<label>`?

It improves accessibility, makes forms easier to use, and clicking the label focuses the associated input.

---

### 6. What is the difference between `disabled` and `readonly`?

* **disabled:** User cannot edit or focus the field, and it is **not submitted** with the form.
* **readonly:** User cannot edit the field, but it **can receive focus and is submitted** with the form.

---

### 7. What is the purpose of `autocomplete`?

It allows browsers to autofill previously entered values, improving user experience.

---

### 8. What does the `required` attribute do?

It prevents form submission until the field has a value.

---

### 9. What is the `pattern` attribute used for?

It validates input against a regular expression before form submission.

---

### 10. Why should you always specify the `type` on a `<button>`?

Because the default button type inside a form is `submit`. Explicitly setting `type="button"` prevents accidental form submissions.

---

### 11. What are controlled components in React?

Inputs whose values are managed by React state using `value` and `onChange`, giving React full control over the form data.

---

### 12. When would you use HTML validation vs React validation?

* **HTML validation:** Simple constraints like `required`, `type="email"`, and `pattern`.
* **React validation:** Business rules, cross-field validation, server-side checks, and custom error handling.
