# Revision Notes: Design Systems, Harbor, DNAC UI, and Magnetic

## Quick Meaning

* A design system is shared UI components, tokens, accessibility rules, and product patterns.
* A component library is the code layer developers import and use.
* Tokens are reusable design values such as color, spacing, typography, radius, and elevation.
* Storybook is commonly used to document and test component states.

## Harbor / DNAC

* Harbor-style components help build Cisco enterprise/network-management UI consistently.
* Common UI examples: dashboards, inventory tables, filters, alerts, forms, modals, status chips, and navigation.
* Practical benefit: faster development, consistent styling, shared behavior, accessibility, and theming.
* Exact package names can vary by Cisco team or project.

## Magnetic

* Magnetic is Cisco's broader unified design-system/product-language direction for networking and security products.
* Developer work usually means following shared components, tokens, Storybook examples, and migration guidance.

## Harbor vs Magnetic

| Topic | Simple answer |
| ----- | ------------- |
| Harbor | Component-library layer used to build app UI. |
| Magnetic | Broader design-system/product-language direction. |
| Frontend job | Use approved components, wire state/API behavior, and avoid unsupported overrides. |

## Practical Checklist

* Use existing design-system components before creating custom UI.
* Prefer component props and variants over custom CSS overrides.
* Use tokens for spacing, colors, and typography.
* Verify loading, disabled, empty, error, and permission states.
* Check keyboard navigation and screen-reader labels.
* Review Storybook before implementing a component from memory.

## Interview Line

Harbor is closer to the React component-library layer I consume in code. Magnetic is closer to the broader Cisco design-system direction. In a real project, I would verify the exact package, token system, and migration rules from the team documentation.
