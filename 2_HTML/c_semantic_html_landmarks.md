# Semantic HTML and Landmarks (Senior Frontend Engineer Perspective)

Before going deeper into frameworks or libraries, understand this topic as part of real frontend engineering: choosing elements that express page structure and interactive purpose.

---

# 1. Fundamentals

* Semantic HTML means using elements according to their meaning, not appearance.
* Landmarks help users navigate page regions quickly.
* Native elements include built-in keyboard behavior, roles, states, and browser integrations.

---

# 2. Core Concepts

| Concept | Practical meaning |
| ------- | ----------------- |
| `header` | Introductory content for a page or section. |
| `nav` | Major navigation links. |
| `main` | The primary unique content of a page. |
| `section` | A thematic group of content, usually with a heading. |
| `article` | A self-contained composition such as a post, card, or news item. |
| `aside` | Tangential or complementary content. |
| `button` | An action. |
| `a` | Navigation to another URL or page location. |

---

# 3. Internal Working

* Browsers map semantic elements to accessibility roles where appropriate.
* A semantic button participates in keyboard activation, focus order, disabled state, and form behavior.
* Landmarks are exposed to assistive technologies so users can jump between page regions.

---

# 4. Common Mistakes

* Using `div role="button"` instead of `button`.
* Using clickable `span` elements without keyboard support.
* Creating many unlabeled `nav` elements that are hard to distinguish.
* Using `section` without a heading when a plain `div` would be clearer.

---

# 5. Best Practices

* Use native elements first and ARIA only when native semantics cannot express the design.
* Give repeated landmarks accessible labels, such as `aria-label="Account"`.
* Keep heading order meaningful even if CSS changes visual size.
* Use `main` once per page.

---

# 6. Code Example

```html
<header>
  <a href="/">Shop</a>
  <nav aria-label="Primary">
    <a href="/products">Products</a>
    <a href="/orders">Orders</a>
  </nav>
</header>

<main>
  <h1>Orders</h1>
  <section aria-labelledby="open-orders">
    <h2 id="open-orders">Open orders</h2>
  </section>
</main>
```

---

# 7. Real-world Scenarios

* A keyboard user tabs through a page and reaches every interactive control in a logical order.
* A screen reader user jumps directly to `main` instead of hearing navigation repeatedly.
* A custom styled button still behaves correctly because it is a real `button`.

---

# 7.1 Semantic HTML in React

React does not replace HTML fundamentals. JSX still becomes real DOM, so semantic mistakes become accessibility and behavior mistakes in the browser.

Avoid div soup:

```jsx
function BadDashboard() {
  return (
    <div>
      <div>Dashboard</div>
      <div onClick={save}>Save</div>
    </div>
  );
}
```

Prefer meaningful elements:

```jsx
function Dashboard() {
  return (
    <>
      <header>
        <nav aria-label="Primary">
          <a href="/inventory">Inventory</a>
          <a href="/assurance">Assurance</a>
        </nav>
      </header>

      <main>
        <h1>Dashboard</h1>
        <section aria-labelledby="devices-title">
          <h2 id="devices-title">Device health</h2>
          <button type="button" onClick={save}>Save</button>
        </section>
      </main>
    </>
  );
}
```

`section` should normally have a heading. Use `article` for content that can stand alone, such as a post, notification, card, or report item.

---

# 8. Senior Deep Dive

## When to Use

* Use semantic elements whenever the element's built-in meaning matches the job.
* Use ARIA only to fill semantic gaps, not to overwrite good native HTML.
* Use progressive enhancement for flows that should remain usable under partial loading or JavaScript failure.

## Debug Checklist

* Inspect the DOM tree, not only the visual page.
* Check the accessibility tree, labels, alt text, landmark names, and heading order.
* Submit forms manually and confirm `name` values, methods, validation, and server payloads.

## Code Review Checklist

* Are links and buttons used according to purpose?
* Can a keyboard user complete the flow?
* Does the document have useful title, language, metadata, headings, and landmarks?


---

# Revision Notes

* Semantic HTML and Landmarks matters because it affects real users, future maintainers, and production behavior.
* Learn the mental model before memorizing syntax.
* Use browser DevTools, tests, and small examples to verify behavior.
* Semantic HTML means using elements according to their meaning, not appearance.
* Landmarks help users navigate page regions quickly.
* Native elements include built-in keyboard behavior, roles, states, and browser integrations.

---

# Cheat Sheet

| Concept | Practical meaning |
| ------- | ----------------- |
| `header` | Introductory content for a page or section. |
| `nav` | Major navigation links. |
| `main` | The primary unique content of a page. |
| `section` | A thematic group of content, usually with a heading. |
| `article` | A self-contained composition such as a post, card, or news item. |
| `aside` | Tangential or complementary content. |
| `button` | An action. |
| `a` | Navigation to another URL or page location. |

---

# Interview Questions with Answers

### 1. When would you use `section`, `article`, `aside`, and a plain `div`?

Use `section` for a thematic group that usually has a heading, `article` for self-contained content that can stand alone, `aside` for complementary content, and `div` when you only need a styling or layout wrapper. A senior answer should not force semantic tags where they do not add meaning.

### 2. A page has three navigation areas. How do screen-reader users distinguish them?

Repeated landmarks need accessible names, such as `<nav aria-label="Primary">`, `<nav aria-label="Breadcrumb">`, and `<nav aria-label="Account">`. Otherwise assistive tech may announce several identical navigation landmarks.

### 3. Is `div role="button"` equivalent to a real `button`?

No. ARIA can expose a role, but it does not automatically give keyboard behavior, disabled behavior, form behavior, focus styling, or expected browser interactions. I use a real `button` unless there is a strong reason not to.

### 4. How many `main` elements should a page have?

One visible `main` landmark per page is the normal rule. It identifies the primary unique content. Multiple visible `main` landmarks make landmark navigation confusing, especially for screen-reader users.

### 5. A custom tab component uses clickable `span`s. What do you ask in review?

I ask whether native buttons can be used. If it must be custom, I check roles, `aria-selected`, roving tab index or focus strategy, keyboard arrows, focus visibility, and whether the DOM order matches the visual order.

---

# Hands-on Exercises

## Exercise 1

Convert a `div`-heavy layout into semantic HTML.

### Solution

Replace layout-only wrappers carefully with `header`, `nav`, `main`, `section`, `article`, `aside`, `footer`, `button`, and `a` where they match purpose.

---

# Senior Frontend Engineer Takeaway

For senior-level work, Semantic HTML and Landmarks is not only a syntax topic. You should be able to explain the mental model, choose the right pattern for a product requirement, identify common failure modes, and verify behavior through tooling, tests, and browser inspection.
