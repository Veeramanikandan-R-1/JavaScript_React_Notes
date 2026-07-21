# Git and Frontend Project Workflow (Senior Frontend Engineer Perspective)

Before going deeper into frameworks or libraries, understand this topic as part of real frontend engineering: working safely in frontend codebases with branches, commits, reviews, and small changes.

---

# 1. Fundamentals

* Git tracks source history and makes collaboration possible through commits, branches, diffs, merges, and pull requests.
* Frontend work often touches many files, so small commits and clear diffs protect reviewers from accidental regressions.
* A clean workflow is part of engineering quality, not administration.

---

# 2. Core Concepts

| Concept | Practical meaning |
| ------- | ----------------- |
| Working tree | Files as they currently exist on disk. |
| Staging area | Selected changes prepared for the next commit. |
| Commit | A snapshot with a message explaining why the change exists. |
| Branch | A movable line of work for a feature, bug fix, or experiment. |
| Pull request | A review unit that explains the problem, solution, tests, and risks. |

---

# 3. Internal Working

* Git stores content-addressed objects and tracks snapshots, not only line-by-line changes.
* Merge conflicts happen when two branches change overlapping parts of the same file history.
* Lockfiles are important because they make dependency installation reproducible across machines and CI.

---

# 4. Common Mistakes

* Mixing formatting, refactors, and behavior changes in one large commit.
* Ignoring generated lockfile changes after dependency updates.
* Using force pushes on shared branches without coordination.
* Committing secrets, `.env` files, screenshots with sensitive data, or build output.

---

# 5. Best Practices

* Run tests, linting, type checks, and a quick manual browser pass before opening a PR.
* Keep PR descriptions focused on user impact, implementation notes, and verification.
* Commit related changes together and leave unrelated cleanup for another branch.
* Use `.gitignore` for dependencies, build output, logs, local env files, and editor artifacts.

---

# 6. Code Example

```bash
git status
git switch -c feature/order-filter
git add src/components/OrderFilter.jsx src/components/OrderFilter.css
git commit -m "Add order filter controls"
git push -u origin feature/order-filter
```

---

# 7. Real-world Scenarios

* Reviewing a UI change where the screenshot confirms behavior better than prose.
* Separating a component refactor from a feature so regressions are easier to isolate.
* Resolving a package-lock conflict after two branches update dependencies.

---

# 8. Senior Deep Dive

## When to Use

* Use Git and Frontend Project Workflow when it directly supports a user workflow, a maintainability goal, or a measurable quality requirement.
* Prefer native browser/platform behavior when it already solves the problem well.
* Reach for libraries when the domain is complex, error-prone, or already standardized in your stack.

## Debug Checklist

* Reproduce the issue with the smallest realistic input.
* Inspect runtime state instead of trusting source-code assumptions.
* Change one variable at a time and keep the failing case visible.
* After fixing, add a note, test, or checklist item that would have caught the issue earlier.

## Code Review Checklist

* Does the code handle loading, empty, error, long-content, and small-screen states?
* Is the naming clear enough for a teammate to extend safely?
* Are accessibility and keyboard behavior preserved?
* Is the performance cost reasonable for the user journey?


---

# Revision Notes

* Git and Frontend Project Workflow matters because it affects real users, future maintainers, and production behavior.
* Learn the mental model before memorizing syntax.
* Use browser DevTools, tests, and small examples to verify behavior.
* Git tracks source history and makes collaboration possible through commits, branches, diffs, merges, and pull requests.
* Frontend work often touches many files, so small commits and clear diffs protect reviewers from accidental regressions.
* A clean workflow is part of engineering quality, not administration.

---

# Cheat Sheet

| Concept | Practical meaning |
| ------- | ----------------- |
| Working tree | Files as they currently exist on disk. |
| Staging area | Selected changes prepared for the next commit. |
| Commit | A snapshot with a message explaining why the change exists. |
| Branch | A movable line of work for a feature, bug fix, or experiment. |
| Pull request | A review unit that explains the problem, solution, tests, and risks. |

---

# Interview Questions with Answers

### 1. How would you explain Git and Frontend Project Workflow in a real project?

I explain the value model, execution order, scope, references, and failure cases before reaching for syntax.

### 2. What happens internally when Git and Frontend Project Workflow is involved?

JavaScript runs synchronously until the stack clears; async work resumes later through host scheduling, so timing and shared state matter.

### 3. How do you debug issues related to Git and Frontend Project Workflow?

I reproduce the input, add a breakpoint, inspect scope and call stack, verify object identity, and test the edge case that failed.

### 4. What is the biggest production risk with Git and Frontend Project Workflow?

The biggest risk is building something that works for the demo state but fails with real content, slow networks, accessibility needs, errors, or future changes.

### 5. What should a senior engineer look for in code review?

They should check the mental model, edge cases, accessibility, performance cost, naming, state ownership, test coverage, and whether the simpler native/platform option was considered.

---

# Hands-on Exercises

## Exercise 1

Create a branch, make a tiny README edit, view the diff, and revert your own edit.

### Solution

Use `git switch -c practice`, `git diff`, then restore only the file you changed.

---

# Senior Frontend Engineer Takeaway

For senior-level work, Git and Frontend Project Workflow is not only a syntax topic. You should be able to explain the mental model, choose the right pattern for a product requirement, identify common failure modes, and verify behavior through tooling, tests, and browser inspection.
