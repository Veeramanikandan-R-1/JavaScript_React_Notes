# Frontend Delivery, Agile, and DevOps Interview Notes

This note incorporates the unique Agile/DevOps interview points from `react_js.docx`.

---

# 1. Why It Matters

A frontend developer is not only responsible for writing components. In real teams, you also participate in planning, estimation, reviews, releases, debugging, monitoring, and production support.

Interviewers ask Agile and DevOps questions to check whether you can work in a product team, not only in isolated code tasks.

---

# 2. Agile Practical Notes

Common Agile workflow:

```text
requirement -> story refinement -> estimate -> implementation -> review -> test -> demo -> release -> feedback
```

Useful vocabulary:

| Term | Meaning |
| ---- | ------- |
| User story | A small user-focused requirement. |
| Acceptance criteria | Conditions that decide whether the story is complete. |
| Sprint | A short planning and delivery cycle. |
| Backlog | Prioritized list of work. |
| Refinement | Clarifying scope, dependencies, and edge cases before implementation. |
| Retrospective | Team discussion about what to improve next. |

Frontend story checklist:

* What route/screen changes?
* What API data is needed?
* What are loading, empty, error, and permission states?
* What validation and accessibility behavior is required?
* What browser/device support matters?
* What tests prove the story works?

---

# 3. DevOps Practical Notes for Frontend

Frontend DevOps usually includes:

* branch and pull request workflow
* lint/test/build checks in CI
* environment variables for dev/stage/prod
* artifact builds such as static files or container images
* deployments through CDN, app platform, or server
* release notes and rollback plan
* monitoring for errors, performance, and user impact

CI pipeline example:

```text
install dependencies
  -> lint
  -> unit tests
  -> build
  -> e2e/smoke tests
  -> deploy to staging
  -> approve/release to production
```

---

# 4. Senior Interview Answers

How do you estimate frontend work?

I split the story by UI states, API dependency, validation, accessibility, tests, and unknowns. I call out risks early, such as unclear API contracts, design gaps, browser support, or hidden edge cases.

How do you handle production bugs?

I reproduce the issue, check logs and monitoring, identify the affected release, create a small safe fix, add regression coverage, and communicate impact and rollout status.

What should a pull request include?

It should be small enough to review, explain the user-facing change, include screenshots when UI changes, pass lint/test/build, and mention edge cases or follow-ups.

How do you work with backend/API teams?

I agree on request/response contracts, status codes, error shapes, auth behavior, pagination/filtering, and test data before wiring the UI deeply.

---

# 5. Delivery Checklist

* Story has clear acceptance criteria.
* UI handles loading, empty, error, success, and permission states.
* API contract and error shape are known.
* Accessibility and keyboard behavior are checked.
* Pull request has focused scope.
* CI passes lint, test, and build.
* Deployment and rollback path are understood.
* Monitoring can detect real user impact.
