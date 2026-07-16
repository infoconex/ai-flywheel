---
title: "Frontmatter Maintenance Rules"
document_type: "guide"
section: "root"
status: "canonical"
canonical: true
order: 4
summary: "This document defines how frontmatter should be maintained after adoption."
last_reviewed: "2026-07-16"
tags:
  - "documentation"
  - "frontmatter"
---

# Frontmatter Maintenance Rules

This document defines how frontmatter should be maintained after adoption.

The purpose of frontmatter is to improve clarity and automation. It should never become stale metadata that contradicts the document body.

## General Maintenance Rule

When a document changes, update only the frontmatter fields whose meaning has actually changed.

Do not mechanically rewrite every field on every edit.

## When to Update `last_updated`

Update `last_updated` when the document's substantive meaning changes.

Examples include:

- changing a principle definition,
- adding or removing a lifecycle requirement,
- changing a conformance criterion,
- materially revising a research conclusion,
- changing a framework comparison score,
- or adding newly verified publication information.

Do not update it for purely cosmetic changes such as:

- typo corrections,
- whitespace changes,
- formatting cleanup,
- or link-label changes that do not alter meaning.

## When to Update `last_reviewed`

Update `last_reviewed` only when someone deliberately reviews the document for correctness and current relevance.

A routine edit is not automatically a review.

For research documents, a review should normally consider whether:

- newer primary sources exist,
- publication or release dates are still correctly represented,
- comparison claims remain accurate,
- links still point to authoritative sources,
- and open questions or evidence gaps have changed.

## Maintaining `status`

Status changes should be deliberate.

Examples:

```text
active-research → research-complete
```

should occur only when the stated research objective has been substantially addressed and reviewed.

```text
draft-specification → canonical
```

should occur only when the document has been accepted as part of the authoritative methodology.

Do not infer status changes from age, number of edits, or merge state.

## Maintaining `canonical`

The `canonical` field answers one narrow question:

> Does this document authoritatively define the AI Flywheel methodology?

Research documents should remain:

```yaml
canonical: false
```

regardless of how thoroughly researched or authoritative their evidence becomes.

A research dossier can become `research-complete` without becoming canonical.

## Maintaining Publication Dates

Framework publication dates should be treated as factual research claims.

Whenever `first_publication_date` is used, also maintain:

```yaml
first_publication_basis:
first_publication_source:
```

The date should represent the earliest verified public appearance under the stated basis.

Possible bases include:

- first verified public project release,
- first public repository release,
- first public paper submission,
- first author-published project description,
- or another clearly described public event.

If a newly discovered source establishes an earlier date:

1. update the date,
2. update the basis if necessary,
3. update the source,
4. revise the dossier body so the evidence remains visible,
5. and update `last_updated` and `last_reviewed` when appropriate.

Do not silently change historical dates only in frontmatter.

## Maintaining Comparison Metadata

When a framework comparison score changes, update any corresponding structured score fields in that framework dossier.

The comparison matrix remains the detailed source of truth for scoring rationale.

Avoid storing the entire principle-by-principle score breakdown in frontmatter unless future tooling creates a concrete need for it.

## Maintaining Counts

Fields such as:

```yaml
open_questions:
framework_count:
```

must stay synchronized with the visible document content.

If maintaining the count becomes burdensome or unreliable, remove the field rather than allowing it to drift.

## Maintaining Tags

Tags should use stable lowercase kebab-case values.

Examples:

```yaml
tags:
  - human-authority
  - governance
  - delegated-autonomy
```

Before adding a new tag, prefer an existing equivalent term.

Avoid synonyms that fragment the same concept, such as using all of:

```text
human-in-loop
human-in-the-loop
hitl
```

unless the distinctions are intentional and documented.

## Avoiding Duplication

Do not add frontmatter fields that duplicate information already maintained elsewhere without a clear automation need.

In particular, do not duplicate:

- previous and next navigation,
- related documents,
- source lists,
- research questions,
- research findings,
- comparison tables,
- or full descriptions of document content.

When duplication is unavoidable for tooling, explicitly identify which representation is the source of truth.

## Adding New Fields

A new field should be added to the schema only when:

1. more than one document can benefit from it, or a strong type-specific need exists,
2. the value is stable enough to maintain,
3. the field has a clear definition,
4. it does not unnecessarily duplicate visible content,
5. and there is a plausible consumer such as indexing, validation, filtering, or documentation generation.

When adding a field:

1. define it in [Frontmatter Schema](schema.md),
2. document which types may use it in [Document-Type Conventions](document-types.md),
3. add or revise an example in [Examples](examples.md),
4. and update existing documents only where the field is relevant.

## Removing or Renaming Fields

Avoid renaming fields casually because tooling may depend on them.

When a field must be renamed:

1. update this reference documentation first,
2. update all documents in the same change when practical,
3. update any validation or generation tooling,
4. and do not leave both old and new fields active indefinitely.

## Validation

Once frontmatter is adopted broadly, the repository should eventually add automated validation for:

- valid YAML syntax,
- required fields by document type,
- controlled `document_type`, `section`, and `status` values,
- ISO date formatting,
- Boolean types,
- duplicate or unknown fields,
- and broken `canonical_source` paths.

Validation should enforce the documented schema rather than introducing undocumented conventions in code.

## Review Cadence

Canonical specification documents should be reviewed when the methodology changes.

Research documents should be reviewed when:

- new relevant work appears,
- a comparison claim is challenged,
- an open research question is answered,
- or a major methodology revision changes what should be compared.

The frontmatter standard itself should be reviewed whenever new document categories or automated documentation tooling are introduced.
