# React Testing Revision

This file incorporates React testing notes from the pasted `JS revision.md`.

---

# 1. React Testing Library Basics

Install common testing packages:

```bash
npm install --save-dev @testing-library/react @testing-library/jest-dom
```

React Testing Library focuses on user-visible behavior.

Example:

```jsx
import { render, screen, fireEvent } from "@testing-library/react";

function Counter() {
  const [count, setCount] = React.useState(0);
  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
}

test("increments counter", () => {
  render(<Counter />);
  fireEvent.click(screen.getByText("Count: 0"));
  expect(screen.getByText("Count: 1")).toBeInTheDocument();
});
```

Prefer `userEvent` for realistic user interaction when available.

---

# 2. Snapshot Testing

Snapshot tests capture rendered output.

```bash
npm install --save-dev react-test-renderer
```

```jsx
import renderer from "react-test-renderer";

test("matches snapshot", () => {
  const tree = renderer.create(<Button label="Save" />).toJSON();
  expect(tree).toMatchSnapshot();
});
```

Use snapshots carefully. They are weak for interactive behavior.

---

# 3. Mocking `fetch`

```jsx
global.fetch = vi.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({ name: "Mani" }),
  })
);
```

Better production-style approach:

* use MSW to mock network requests
* test loading, success, empty, and error states

---

# 4. Testing Custom Hooks

Use `renderHook` or test through a component.

```jsx
import { renderHook, act } from "@testing-library/react";

function useCounter() {
  const [count, setCount] = React.useState(0);
  return { count, increment: () => setCount((value) => value + 1) };
}

test("increments hook state", () => {
  const { result } = renderHook(() => useCounter());

  act(() => {
    result.current.increment();
  });

  expect(result.current.count).toBe(1);
});
```

---

# 5. Testing Checklist

Test:

* component renders
* user interactions
* form validation
* loading state
* error state
* API success response
* API failure response
* custom hooks

Avoid:

* only snapshot testing
* testing private implementation details
* mocking everything so the test proves nothing

---

# 6. Coverage, Quality Gates, and SonarQube

Common testing/quality topics from interviews:

| Topic | Practical meaning |
| ----- | ----------------- |
| Unit tests | test small functions/components |
| Integration tests | test components working together |
| E2E tests | test full browser flows |
| Code coverage | shows which lines/branches are exercised |
| SonarQube | reports quality, bugs, duplication, coverage, and security smells |

Coverage is a signal, not proof of quality. A high coverage number can still miss bad assertions or missing user flows.

Good React testing mindset:

* test what the user sees and does
* prefer accessible queries like `getByRole`
* include loading, success, empty, and error states
* mock APIs realistically with MSW when possible
* keep snapshots small and intentional
