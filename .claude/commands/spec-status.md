Update the status of a feature spec.

Arguments: $ARGUMENTS (expected format: `feature-name status`)

Valid statuses: draft, in-progress, complete

Steps:
1. Parse the feature name and new status from arguments.
2. If either is missing, ask for them.
3. Find the matching `.md` file in `.specs/` recursively.
4. Update the `status` field in the YAML frontmatter.
5. Confirm the change.
