Search across all feature specs in `.specs/` for a keyword or phrase.

Search term: $ARGUMENTS

Steps:
1. If no search term provided, ask for one.
2. Search all `.md` files in `.specs/` recursively (excluding README.md and _template.md).
3. Check both the YAML frontmatter `keywords` field AND the body content.
4. Display matching specs with the feature name, status, and a brief snippet showing where the match was found.
