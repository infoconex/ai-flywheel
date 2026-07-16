# Frontmatter Schema

This document defines the approved field vocabulary for AI Flywheel documentation frontmatter.

The schema is intentionally small. Fields should be added only when they provide durable machine-readable value that is not already better represented in the Markdown body or Git history.

## Core Fields

These fields may be used across document types.

| Field | Purpose |
|---|---|
| `title` | Human-readable document title. |
| `document_type` | Controlled classification describing what kind of document this is. |
| `section` | High-level documentation area containing the document. |
| `status` | Authority or maturity state of the document. |
| `canonical` | Boolean indicating whether the document is an authoritative source for the methodology. |
| `order` | Numeric ordering within a collection when stable ordering is useful. |
| `summary` | One-sentence description suitable for indexes and generated navigation. |
| `created` | Date the document was first created, when that date is intentionally tracked. |
| `last_updated` | Date substantive content was last changed. |
| `last_reviewed` | Date the document was deliberately reviewed for correctness. |
| `tags` | Controlled discovery and classification terms. |

## Controlled `document_type` Values

Use one of the following unless a new type has been deliberately added to this standard:

```text
overview
definition
principle
lifecycle-stage
architecture
research-overview
principle-research
framework-research
comparison
prior-art
guide
example
```

## Controlled `section` Values

Current values are:

```text
root
specification
architecture
research
frontmatter
```

Future sections should be added only when a corresponding top-level documentation area exists.

## Controlled `status` Values

### `canonical`
The document is an authoritative definition of the AI Flywheel methodology.

### `draft-specification`
The document is intended to become normative but is still being developed.

### `active-research`
The document contains ongoing investigation, working conclusions, or unresolved questions.

### `research-complete`
The stated research objective has been substantially answered and deliberately reviewed.

### `provisional`
The content is useful working material but is neither normative specification nor formal active research.

### `deprecated`
The document should no longer be used as the current source.

### `historical`
The document is intentionally preserved to record earlier thinking or evolution.

## Specialized Fields

### Principles

```yaml
principle_number:
principle_id:
```

`principle_id` should be a stable semantic identifier such as `moving-determinism-boundary`.

### Principle Research

```yaml
canonical_source:
research_started:
open_questions:
```

`open_questions` should contain a count, not the questions themselves.

### Framework Research

```yaml
framework_name:
framework_type:
first_publication_date:
first_publication_basis:
first_publication_source:
project_release_date:
paper_publication_date:
primary_source:
official_site:
official_repository:
comparison_score:
comparison_max_score:
comparison_percentage:
```

Use `first_publication_date` only when the basis is explicitly documented in `first_publication_basis`.

Prefer precise language such as:

```yaml
first_publication_basis: "First verified public project release"
```

or:

```yaml
first_publication_basis: "First public arXiv submission"
```

Do not use an ambiguous field such as `established_date`.

### Lifecycle Stages

```yaml
stage_number:
stage_id:
```

### Architecture

```yaml
architecture_view:
scope:
```

Suggested `architecture_view` values are:

```text
runtime
learning
governance
boundaries
```

### Comparison Documents

```yaml
comparison_type:
scoring_scale:
maximum_score:
framework_count:
```

### Prior-Art Research

```yaml
research_scope:
research_cutoff:
```

`research_cutoff` is useful because research findings become stale as new work is published.

## Fields Intentionally Excluded

The following should not normally be used:

```text
author
description
keywords
version
category
related_documents
sources
references
previous
next
```

Reasons:

- `author` is already represented by Git history.
- `description` duplicates `summary`.
- `keywords` duplicates `tags`.
- `version` should be handled through repository or methodology releases rather than per-file metadata unless a future need is defined.
- `category` overlaps `document_type` and `section`.
- `related_documents`, `sources`, and `references` belong in the visible Markdown body.
- `previous` and `next` duplicate explicit navigation already maintained in the document body.

## Date Format

All dates should use ISO 8601 calendar format:

```text
YYYY-MM-DD
```

Example:

```yaml
last_reviewed: 2026-07-16
```

## Boolean Values

Use YAML Boolean values without quotes:

```yaml
canonical: true
required: true
```

## Empty Values

Do not include fields with empty values merely because they exist in the schema.

Prefer:

```yaml
official_repository: https://github.com/example/project
```

and omit `official_site` entirely when no official site has been identified.

The schema defines allowed fields, not a requirement that every document contain every possible field.
