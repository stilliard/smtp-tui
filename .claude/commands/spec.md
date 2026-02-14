List all feature specs in `.specs/` recursively. For each `.md` file (excluding README.md and _template.md), read the YAML frontmatter and display a summary table:

| Feature | Status | Keywords | Path |
|---------|--------|----------|------|

Sort by status (in-progress first, then draft, then complete).

If $ARGUMENTS is provided, treat it as a feature name and show the full contents of that spec file instead. Search for a matching `.md` file in `.specs/` recursively (match on filename, case-insensitive, `.md` extension optional).

If no specs exist yet, let the user know and suggest using `/spec-new` to create one.
