# Project Experience Story Bank

This file incorporates `Work_Summary-Veeramanikandan_R.docx` and `WorkSummary_HCL.docx`. Use it to prepare resume bullets, self-introduction, project explanation, and managerial-round answers.

---

# 1. Cisco DNAC EVPN UI

Project:

```text
Web application for managing enterprise networks - EVPN in Cisco DNA Center
```

Tech stack:

* React
* Redux / Redux Toolkit `createAsyncThunk`
* HTML
* CSS / Less
* CSS Modules
* React Testing Library
* JAWS screen reader testing
* SonarQube
* i18n
* Magnetic design system / Figma collaboration

Core work:

* Developed end-to-end screens for Layer 2 Virtual Network workflows.
* Contributed reusable UI components for Fabric, Layer 3 VN, Border VN, and Dashboard workflows.
* Implemented RBAC checks for sensitive network operations such as Fabric and VN creation.
* Integrated persistence API so users could resume workflows from in-progress cards.
* Added Redux workflow state with `createAsyncThunk` to preserve data after page reload and simplify API handling.
* Optimized large summary APIs by splitting bulky Layer 2 and Layer 3 endpoints into smaller modular APIs.
* Fixed in-progress card persistence issues caused by API data limits and multi-cluster behavior.
* Fixed critical Border VN workflow bugs.
* Upgraded Node.js, DPM, React, and related dependencies during Node Uptick work.
* Performed UI patching for backend and QA clusters by building React artifacts and deploying them to VMs.
* Resolved global CSS conflicts by introducing CSS Modules.
* Achieved 95%+ unit test coverage with React Testing Library.
* Improved accessibility through WCAG checks, keyboard navigation, contrast fixes, and JAWS support.
* Maintained code quality through SonarQube.
* Added multilingual support for Chinese, Japanese, and Korean.
* Worked with design team on Magnetic theme integration.

---

# 2. Interview Story: EVPN Workflow Persistence

Situation:

```text
Users needed to resume EVPN workflows from in-progress cards, but workflow data had persistence and API-size issues across clusters.
```

Action:

* investigated where workflow state was lost
* fixed API data-limit issues
* made persistence behavior compatible across multi-cluster environments
* added Redux workflow state to restore UI state after reload
* used `createAsyncThunk` for async API flows

Impact:

```text
Users could return to in-progress EVPN workflows without losing context, improving workflow reliability and user experience.
```

---

# 3. Interview Story: API Optimization

Situation:

```text
Large Layer 2 and Layer 3 summary APIs returned bulky shared objects and affected UI efficiency.
```

Action:

* split large endpoints into smaller modular APIs
* kept existing behavior stable while changing data boundaries
* validated affected screens and workflows

Impact:

```text
Reduced unnecessary data transfer and made summary data handling more maintainable.
```

---

# 4. Interview Story: Accessibility and Quality

Situation:

```text
Enterprise UI needed to satisfy accessibility, screen-reader, and code-quality expectations.
```

Action:

* tested with JAWS
* improved keyboard navigation
* fixed color contrast issues
* used semantic patterns where possible
* increased RTL unit coverage above 95%
* monitored quality through SonarQube

Impact:

```text
Improved accessibility compliance, reduced regression risk, and increased confidence in future UI changes.
```

---

# 5. UI Automation Selector Extraction PoC

Tech stack:

* JavaScript
* Cypress
* Python
* Selenium
* Excel parsing

Core work:

* Built a PoC to automate UI selector extraction for the AI Force automation tool.
* Created Cypress scripts to recursively extract element selectors and store them in text output.
* Integrated Python/Selenium automation to feed selectors into the AI automation workflow.
* Parsed requirements from Excel files and converted plain-English steps into executable test actions.
* Built utility functions to execute generated action objects.
* Added logic to detect modals and popovers dynamically based on Excel keywords.

Impact:

```text
Reduced manual locator-mapping effort and improved the accuracy of generated automation scripts.
```

---

# 6. Earlier Project Summaries

## Kounsera - Online Educational Platform

Tech stack:

* React
* Redux
* HTML
* CSS
* Bootstrap
* Material UI

Contributions:

* built CRUD components for colleges, universities, degrees, and departments
* implemented real-time chat between consultants and support using WebSocket
* enabled bulk CSV uploads to improve onboarding efficiency

## Lavazza IoT Support - Coffee Vending Machine

Tech stack:

* React
* Redux
* HTML
* CSS
* Bootstrap
* Fetch API

Contributions:

* built UI components for device configuration and monitoring
* managed operational status, product levels, and provisioning states
* implemented real-time device tracking for monitoring and maintenance

## Raspberry Pi to GCP Communication

Tech stack:

* Linux
* Python
* Google Cloud Pub/Sub

Contributions:

* built IoT communication for vending-machine data exchange with GCP
* supported secure HTTP transmission for updates, orders, and telemetry

---

# 7. Mini Project Bank

| Project | Strong talking point |
| ------- | -------------------- |
| needYHelp | Book donation platform with OAuth, OTP verification, and Firebase deployment. |
| DevConnector | Social app with JWT authentication and CRUD flows. |
| Expense Manager | Context API state with graphical analytics. |
| Cart Manager | Food-ordering cart state with Redux. |
| Text Editor | Formatting tools, font styling, and math symbol support. |
| Gender Detector UI | Image upload UI integrated with backend ML model. |

---

# 8. Self-Introduction Project Pitch

```text
My strongest recent work has been on Cisco DNAC EVPN UI, where I built React workflows for enterprise network configuration. I worked on Layer 2 VN screens, reusable components, RBAC, workflow persistence, Redux async flows, API optimization, accessibility with JAWS, RTL unit coverage, i18n, CSS Modules, SonarQube quality, and UI patching across QA/backend clusters. I also built a Cypress and Python PoC for extracting selectors and converting Excel-based requirements into automation actions.
```

---

# 9. Resume Bullet Style

Use this format:

```text
Action verb + technical work + business/user impact
```

Examples:

* Built end-to-end EVPN Layer 2 VN workflows in React, improving enterprise network-configuration usability.
* Integrated RBAC for sensitive Fabric and VN operations, strengthening permission-based access control.
* Optimized large summary APIs by splitting bulky Layer 2 and Layer 3 payloads into modular endpoints.
* Improved workflow persistence with API fixes and Redux Toolkit async state, enabling users to resume in-progress EVPN workflows.
* Increased UI reliability with 95%+ React Testing Library coverage and SonarQube quality checks.
* Improved accessibility through WCAG fixes, keyboard navigation, color contrast updates, and JAWS validation.

