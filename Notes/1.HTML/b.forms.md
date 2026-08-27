# HTML Forms — Interview Notes

For a **5-year React developer**, the key areas are **form controls, accessibility, validation, and controlled vs uncontrolled forms in React**.

---

## 1. `<form>` ⭐

Container for user input.

```html
<form action="/login" method="POST">
  <input type="email" name="email" />
  <button type="submit">Login</button>
</form>
```

### Important attributes

* `action` → where form data is submitted.
* `method` → usually `GET` or `POST`.
* `autocomplete` → browser autofill behavior.
* `novalidate` → disables browser's built-in validation.

In React, you commonly handle submission yourself:

```jsx
function handleSubmit(e) {
  e.preventDefault();

  // API call
}

<form onSubmit={handleSubmit}>
  ...
</form>
```

**Important:** `button` inside a form defaults to `type="submit"`.

---

# 2. `<input>` Types ⭐⭐⭐

`<input>` is one of the most commonly used form controls.

### Common types

```html
<input type="text" />
<input type="email" />
<input type="password" />
<input type="number" />
<input type="tel" />
<input type="url" />
<input type="search" />
<input type="date" />
<input type="time" />
<input type="datetime-local" />
<input type="month" />
<input type="week" />
<input type="checkbox" />
<input type="radio" />
<input type="file" />
<input type="color" />
<input type="range" />
<input type="hidden" />
<input type="submit" />
<input type="reset" />
```

### React example

```jsx
<input
  type="email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>
```

### Important interview point

`type="email"` provides browser-level validation, but **it doesn't replace server-side validation**.

---

# 3. `<textarea>`

Used for **multi-line text**.

```html
<textarea
  name="message"
  rows="5"
  cols="30">
</textarea>
```

### React

Unlike HTML, React uses `value`:

```jsx
<textarea
  value={message}
  onChange={(e) => setMessage(e.target.value)}
/>
```

Don't use:

```jsx
<textarea>Default text</textarea>
```

for controlled React state.

Use:

```jsx
<textarea defaultValue="Default text" />
```

for an uncontrolled textarea.

---

# 4. `<select>` ⭐

Creates a dropdown.

```html
<label for="country">Country</label>

<select id="country" name="country">
  <option value="in">India</option>
  <option value="us">USA</option>
  <option value="uk">UK</option>
</select>
```

React:

```jsx
<select value={country} onChange={(e) => setCountry(e.target.value)}>
  <option value="in">India</option>
  <option value="us">USA</option>
</select>
```

Multiple selection:

```html
<select multiple>
  <option>React</option>
  <option>Java</option>
  <option>Node.js</option>
</select>
```

---

# 5. `<datalist>`

Provides **suggestions/autocomplete options** for an input.

```html
<label for="browser">Browser:</label>

<input list="browsers" id="browser" />

<datalist id="browsers">
  <option value="Chrome">
  <option value="Firefox">
  <option value="Edge">
</datalist>
```

### Difference: `select` vs `datalist`

| `select`                           | `datalist`                         |
| ---------------------------------- | ---------------------------------- |
| User chooses from provided options | User can type custom value         |
| Dropdown selection                 | Input + suggestions                |
| Restricts selection                | Doesn't necessarily restrict input |

---

# 6. `<button>` ⭐

```html
<button type="submit">Submit</button>
<button type="button">Cancel</button>
<button type="reset">Reset</button>
```

### Important

Inside a form:

```html
<button>Click</button>
```

defaults to:

```html
<button type="submit">
```

Therefore, explicitly specify `type` when the button shouldn't submit.

React:

```jsx
<button type="button" onClick={handleCancel}>
  Cancel
</button>
```

---

# 7. `<label>` ⭐⭐⭐

Provides an accessible name for a form control.

```html
<label for="email">Email</label>
<input id="email" type="email" />
```

Clicking the label focuses the input.

In React JSX:

```jsx
<label htmlFor="email">Email</label>
<input id="email" type="email" />
```

### Important React difference

HTML:

```html
for="email"
```

JSX:

```jsx
htmlFor="email"
```

**Interview:** Always associate labels with form controls, especially for accessibility.

---

# 8. `<fieldset>` and `<legend>`

Used to **group related form controls**.

```html
<fieldset>
  <legend>Gender</legend>

  <label>
    <input type="radio" name="gender" value="male" />
    Male
  </label>

  <label>
    <input type="radio" name="gender" value="female" />
    Female
  </label>
</fieldset>
```

* `<fieldset>` → groups related controls.
* `<legend>` → describes the group.

Especially useful for **radio buttons and checkboxes** and improves accessibility.

---

# 9. Form Validation ⭐⭐⭐

Validation ensures user input satisfies requirements.

There are two major types:

### Client-side validation

Performed in browser/UI.

```html
<input
  type="email"
  required
/>
```

### Server-side validation

Performed by backend.

**Server-side validation is mandatory** because client-side validation can be bypassed.

---

## 10. `required` ⭐

Makes a field mandatory.

```html
<input type="text" required />
```

If empty, browser prevents form submission.

React:

```jsx
<input
  type="email"
  required
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>
```

Works with many form controls including `input`, `select`, and `textarea`.

---

# 11. `pattern` ⭐⭐

Uses a **regular expression** to validate an input.

Example: exactly 10 digits:

```html
<input
  type="text"
  pattern="[0-9]{10}"
  required
/>
```

Valid:

```text
9876543210
```

Invalid:

```text
98765
98765432101
```

### Important

For HTML `pattern`, you generally provide the regex **without `/ /`**:

```html
pattern="[0-9]{10}"
```

not:

```html
pattern="/[0-9]{10}/"
```

### React

```jsx
<input
  type="text"
  pattern="[0-9]{10}"
  required
/>
```

---

# 12. Other Important Validation Attributes

### `minLength` / `maxLength`

```html
<input
  type="password"
  minlength="8"
  maxlength="20"
/>
```

React:

```jsx
<input minLength={8} maxLength={20} />
```

### `min` / `max`

For numbers/dates:

```html
<input type="number" min="18" max="100" />
```

### `step`

Controls allowed increments:

```html
<input type="number" min="0" max="100" step="5" />
```

---

# 13. `autocomplete` ⭐⭐

Tells the browser whether/how it can autofill a field.

```html
<input
  type="email"
  name="email"
  autocomplete="email"
/>
```

Common values:

```html
autocomplete="name"
autocomplete="email"
autocomplete="tel"
autocomplete="street-address"
autocomplete="username"
autocomplete="current-password"
autocomplete="new-password"
```

Disable:

```html
autocomplete="off"
```

React:

```jsx
<input autoComplete="email" />
```

**React difference:** HTML `autocomplete` → JSX `autoComplete`.

---

# 14. Complete Example

```jsx
function LoginForm() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    console.log(formData.get("email"));
    console.log(formData.get("password"));
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="on">
      <div>
        <label htmlFor="email">Email</label>

        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
        />
      </div>

      <div>
        <label htmlFor="password">Password</label>

        <input
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          minLength={8}
          required
        />
      </div>

      <button type="submit">Login</button>
      <button type="button">Cancel</button>
    </form>
  );
}
```

---

# 🔥 React Interview Must-Know

### Controlled form ⭐⭐⭐

React state controls the input:

```jsx
const [email, setEmail] = useState("");

<input
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>
```

**React state = source of truth.**

### Uncontrolled form

DOM maintains the value:

```jsx
const inputRef = useRef();

<input ref={inputRef} defaultValue="" />
```

You can also use:

```jsx
const formData = new FormData(e.currentTarget);
```

### Controlled vs Uncontrolled

| Controlled              | Uncontrolled            |
| ----------------------- | ----------------------- |
| State controls value    | DOM controls value      |
| `value` + `onChange`    | `defaultValue` / `ref`  |
| Easy dynamic validation | Simpler for basic forms |
| More React re-renders   | Less state management   |

---

## ⭐ Quick Revision

| Concept               | Remember                                     |
| --------------------- | -------------------------------------------- |
| `<form>`              | Container for form controls                  |
| `<input>`             | Single-line/multiple specialized input types |
| `<textarea>`          | Multi-line text                              |
| `<select>`            | Dropdown                                     |
| `<datalist>`          | Input with suggestions                       |
| `<button>`            | Submit/action/reset                          |
| `<label>`             | Accessible control name                      |
| `<fieldset>`          | Groups related controls                      |
| `<legend>`            | Describes fieldset                           |
| `required`            | Mandatory field                              |
| `pattern`             | Regex validation                             |
| `autocomplete`        | Browser autofill                             |
| `min/max`             | Value boundaries                             |
| `minLength/maxLength` | String length                                |
| Client validation     | Better UX                                    |
| Server validation     | **Required for security**                    |
| Controlled            | React state owns value                       |
| Uncontrolled          | DOM owns value                               |
