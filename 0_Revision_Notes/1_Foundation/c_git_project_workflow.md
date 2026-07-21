# Revision Notes: Git and Frontend Project Workflow

* Git tracks source history and makes collaboration possible through commits, branches, diffs, merges, and pull requests.
* Frontend work often touches many files, so small commits and clear diffs protect reviewers from accidental regressions.
* A clean workflow is part of engineering quality, not administration.
* Best practice: Run tests, linting, type checks, and a quick manual browser pass before opening a PR.
* Best practice: Keep PR descriptions focused on user impact, implementation notes, and verification.
* Best practice: Commit related changes together and leave unrelated cleanup for another branch.
* Best practice: Use `.gitignore` for dependencies, build output, logs, local env files, and editor artifacts.
* Avoid: Mixing formatting, refactors, and behavior changes in one large commit.
* Avoid: Ignoring generated lockfile changes after dependency updates.
* Avoid: Using force pushes on shared branches without coordination.
* Avoid: Committing secrets, `.env` files, screenshots with sensitive data, or build output.

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

# Interview Questions & Answers

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

# Quick Practice

1. Explain Git and Frontend Project Workflow in two minutes.
2. Write a tiny code example from memory.
3. Name one accessibility, performance, or maintainability risk.
4. Describe how you would debug a related production issue.
