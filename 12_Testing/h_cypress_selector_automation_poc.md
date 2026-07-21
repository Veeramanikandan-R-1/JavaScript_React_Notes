# Cypress Selector Automation PoC

This file preserves the Cypress/Python automation project from the work-summary DOCX files.

---

# 1. Goal

Build a proof of concept that reduces manual effort in UI automation by extracting selectors and converting plain-English test requirements into executable actions.

---

# 2. Tech Stack

* JavaScript
* Cypress
* Python
* Selenium
* Excel parsing

---

# 3. Workflow

```text
Open UI with Cypress
-> recursively scan DOM
-> extract stable selectors
-> store selectors in text/file output
-> read plain-English test steps from Excel
-> map each step to action objects
-> execute actions through automation utility
-> handle dynamic modals/popovers when keywords appear
```

---

# 4. What to Explain in Interviews

* Cypress was used to inspect and extract UI selectors.
* Python/Selenium acted as a bridge for feeding extracted selectors into the AI automation tool.
* Excel requirements were parsed into structured action objects.
* Utility functions executed generated actions for validation.
* Modal and popover handling was keyword-driven so dynamic UI could still be automated.

---

# 5. Impact Statement

```text
This PoC reduced manual locator mapping and improved the accuracy of generated automation scripts by connecting selector extraction, requirement parsing, and action execution.
```

---

# 6. Senior Talking Points

* Prefer stable selectors such as accessible names and `data-testid` over brittle CSS paths.
* Avoid overfitting automation to one DOM snapshot.
* Store selector metadata with context: element type, text, role, test id, route, and parent region.
* Validate generated actions before running destructive steps.
* Keep generated tests readable enough for QA and developers to debug.

