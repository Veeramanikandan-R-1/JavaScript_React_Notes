# Revision Notes: How the Web Works

## Simple Flow

```text
URL
  -> DNS finds server
  -> Browser sends HTTP request
  -> Server returns HTML
  -> Browser loads CSS, JS, images, fonts
  -> Browser renders page
  -> JavaScript adds interaction
```

---

# URL Parts

```text
https://example.com/products?page=2
```

| Part | Meaning |
| ---- | ------- |
| `https` | Protocol |
| `example.com` | Domain |
| `/products` | Path |
| `?page=2` | Query string |

---

# HTTP Methods

| Method | Use |
| ------ | --- |
| `GET` | Read data |
| `POST` | Create data |
| `PUT` | Replace data |
| `PATCH` | Update data |
| `DELETE` | Delete data |

---

# Status Codes

| Code | Meaning |
| ---- | ------- |
| `200` | Success |
| `201` | Created |
| `400` | Bad request |
| `401` | Not logged in |
| `403` | No permission |
| `404` | Not found |
| `500` | Server error |

---

# Debug Checklist

## Blank page

* Check Console for JavaScript errors.
* Check Network for failed JS or CSS files.
* Check Elements to see if HTML exists.

## API issue

* Check request URL.
* Check method.
* Check status code.
* Check payload.
* Check response.
* Check CORS errors.

## CSS not updating

* Hard refresh.
* Disable cache.
* Check file path.
* Check overridden CSS rules.

---

# Interview Quick Answers

### What happens when you enter a URL?

Browser finds the server, requests HTML, loads assets, renders the page, and runs JavaScript.

### Why use Network tab?

To inspect files, API calls, status codes, payloads, responses, cache, and timing.
