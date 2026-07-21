# Revision Notes: React Security, Accessibility, and Protected Routes

## Protected Routes

* Use React route guards for UX.
* Always secure APIs on backend.
* Role checks must happen server-side too.

---

# JWT Storage

| Place | Risk |
| ----- | ---- |
| localStorage | XSS exposure |
| memory | lost on refresh |
| httpOnly cookie | needs CSRF protection |

---

# Tokens, Sessions, and RBAC

* Access tokens are short-lived credentials sent to protected APIs.
* Refresh tokens request new access tokens and must be protected carefully.
* Sessions let the server recognize a user across requests.
* Frontend protected routes do not secure APIs; backend auth and RBAC must enforce permissions.

---

# XSS

React escapes normal text rendering.

Avoid `dangerouslySetInnerHTML` unless content is trusted and sanitized.

---

# Accessibility

* semantic HTML
* labels
* keyboard support
* visible focus
* error messages
* focus management
* `aria-live` when needed
