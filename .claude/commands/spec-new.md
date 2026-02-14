Create a new feature spec from the template at `.specs/_template.md`.

Feature name: $ARGUMENTS

Steps:
1. If no name provided, ask for one.
2. Convert the name to kebab-case for the filename.
3. If $ARGUMENTS contains a `/` (e.g. `billing/invoicing`), treat the first part as a group folder and the rest as the filename. Create the folder if it doesn't exist.
4. Copy `.specs/_template.md` and replace all instances of `FEATURE_NAME` with the provided feature name (title case for headings, kebab-case for filename).
5. Save to `.specs/{name}.md` or `.specs/{group}/{name}.md`.
6. Show the created file path and open it for editing.

If `.specs/_template.md` doesn't exist, create it first using this default:

```markdown
---
feature: FEATURE_NAME
status: draft
keywords:
---

# FEATURE_NAME

## Overview
Brief description of what this feature does and why it exists.

## Rules
- Key business rules and constraints
- Edge cases to handle

## Implementation
How this feature is built. Key files and modules involved.

## Validation
- [ ] How to verify this feature works
- [ ] Expected behaviour to confirm
```
