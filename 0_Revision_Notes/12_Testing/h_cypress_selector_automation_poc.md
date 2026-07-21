# Cypress Selector Automation PoC Revision

Flow:

```text
Cypress scans DOM -> extracts selectors -> file output -> Excel steps parsed -> action objects -> automation execution
```

Interview points:

* use stable selectors first: role, label, text, `data-testid`
* avoid brittle deep CSS selectors
* keep selector metadata with context
* validate generated actions before running
* handle modals/popovers dynamically

Impact:

```text
Reduced manual locator mapping and improved generated automation accuracy.
```

