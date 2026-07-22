# Revision Notes: Auth, Protected Routes, and Loading States

* React helps build interactive interfaces from reusable components.
* Modern React is centered on function components, props, state, effects, hooks, and predictable rendering.
* Good React code separates UI state, server state, derived values, effects, and reusable logic.
* Best practice: Keep render pure.
* Best practice: Lift state only when multiple components need it.
* Best practice: Prefer composition over prop tunnels.
* Best practice: Use effects only for synchronization.
* Best practice: Measure before memoizing.
* Avoid: Mutating state directly.
* Avoid: Putting derived state in state unnecessarily.
* Avoid: Using effects for calculations that belong in render.
* Avoid: Using array index keys for reorderable lists.

---

# Cheat Sheet

| Concept | Practical meaning |
| ------- | ----------------- |
| Component | A reusable piece of UI. |
| Props | Inputs passed from parent to child. |
| State | Data that changes over time and triggers rendering. |
| Effect | Synchronization with systems outside React rendering. |
| Render | Calling components to describe UI. |
| Commit | Applying changes to the host environment such as the DOM. |

---

# Interview Questions with Answers

### 1. What states should a protected route handle?

Unknown auth/loading, authenticated allowed, authenticated forbidden, unauthenticated redirect/login, expired session, and server/auth-check failure. Treating unknown as logged out causes flicker and bad redirects.

### 2. Why is client-side route protection not enough for security?

Client routing controls UI, not data access. The backend must still enforce authorization for every protected resource because users can call APIs outside the app.

### 3. How do you preserve the intended destination after login?

Store the attempted URL in router state or a safe return parameter, then navigate back after successful login. Validate return URLs so login cannot become an open redirect.

### 4. How do auth checks interact with loading UI?

The app should show a pending state while auth is unknown, avoid rendering protected content before authorization is known, and avoid redirect loops while token/session refresh is in progress.

### 5. What protected-route issues do you flag in review?

UI-only authorization assumptions, flicker of protected content, redirect loops, losing destination, missing forbidden state, stale user permissions, and error states that force unnecessary logout.

---

# Quick Practice

1. Explain one realistic production use case for Auth, Protected Routes, and Loading States in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
