---
title: "Document-Type Conventions"
document_type: "guide"
section: "root"
status: "canonical"
canonical: true
order: 3
summary: "This document defines the recommended frontmatter fields for each major documentation type in the AI Flywheel repository."
last_reviewed: "2026-07-16"
tags:
  - "documentation"
  - "frontmatter"
---

# Document-Type Conventions

This document defines the recommended frontmatter fields for each major documentation type in the AI Flywheel repository.

The examples here describe metadata structure only. The complete document content still belongs in Markdown.

## Overview Documents

Use for folder `README.md` files and high-level section indexes.

Recommended fields:

```yaml
title:
document_type: overview
section:
status:
canonical:
order:
summary:
last_reviewed:
tags:
```

Overview pages should remain lightweight. They should summarize the section and link to child documents rather than duplicate child content.

## Formal Definition

Use for the primary methodology definition.

Recommended fields:

```yaml
title:
document_type: definition
section: specification
status: canonical
canonical: true
summary:
last_reviewed:
tags:
```

## Specification Principles

Recommended fields:

```yaml
title:
document_type: principle
section: specification
status: canonical
canonical: true
order:
principle_number:
principle_id:
summary:
last_reviewed:
tags:
```

Do not place principle navigation in frontmatter. Previous and next principle links belong in the visible Markdown body.

## Principle Research Dossiers

Recommended fields:

```yaml
title:
document_type: principle-research
section: research
status: active-research
canonical: false
order:
principle_number:
principle_id:
canonical_source:
summary:
research_started:
last_reviewed:
open_questions:
tags:
```

Research frontmatter should make the relationship to the canonical principle explicit through `canonical_source`.

Research findings, unresolved questions, evidence, and source lists belong in the document body.

## Lifecycle Stages

Recommended fields:

```yaml
title:
document_type: lifecycle-stage
section: specification
status: canonical
canonical: true
order:
stage_number:
stage_id:
summary:
last_reviewed:
tags:
```

Navigation between lifecycle stages belongs in the Markdown body.

## Conformance Criteria

Recommended fields:

```yaml
title:
document_type: conformance-criterion
section: specification
status: canonical
canonical: true
order:
criterion_number:
criterion_id:
required: true
summary:
last_reviewed:
tags:
```

The `required` field allows future conformance models to distinguish mandatory criteria from optional maturity criteria if the specification evolves in that direction.

## Architecture Documents

Recommended fields:

```yaml
title:
document_type: architecture
section: architecture
status: canonical
canonical: true
order:
architecture_view:
scope:
summary:
last_reviewed:
tags:
```

The architecture view should identify the primary perspective of the document, such as `runtime`, `learning`, `governance`, or `boundaries`.

## Framework Research Dossiers

Recommended fields:

```yaml
title:
document_type: framework-research
section: research
status: active-research
canonical: false
order:
framework_name:
framework_type:
summary:
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
last_reviewed:
tags:
```

Only include publication and source fields that have actually been verified.

The frontmatter should not replace the source and evidence sections in the dossier. Its purpose is to expose important structured facts for tooling and indexing.

## Framework Comparison Documents

Recommended fields:

```yaml
title:
document_type: comparison
section: research
status: active-research
canonical: false
comparison_type:
scoring_scale:
maximum_score:
framework_count:
summary:
last_reviewed:
tags:
```

Detailed scores belong in the comparison table, not duplicated in frontmatter.

## Prior-Art Research

Recommended fields:

```yaml
title:
document_type: prior-art
section: research
status: active-research
canonical: false
research_scope:
research_cutoff:
summary:
last_reviewed:
tags:
```

The `research_cutoff` field should represent the date through which the research claims to have considered available work.

## Guides and Reference Material

Use for documentation such as this frontmatter standard.

Recommended fields:

```yaml
title:
document_type: guide
section: frontmatter
status: provisional
canonical: false
order:
summary:
last_reviewed:
tags:
```

If the frontmatter standard is formally adopted as repository policy, its status may be changed from `provisional` to `canonical` while remaining non-canonical with respect to the AI Flywheel methodology itself. In that case, the meaning of `canonical` should continue to answer whether the document defines the AI Flywheel methodology, not whether the repository considers the guide authoritative operational policy.

## Choosing `canonical`

Use:

```yaml
canonical: true
```

only when the document is part of the authoritative AI Flywheel methodology.

Examples include:

- formal definition,
- specification principles,
- lifecycle stages,
- conformance requirements,
- and normative architecture documents when they define required structure.

Use:

```yaml
canonical: false
```

for:

- research,
- comparisons,
- prior-art analysis,
- examples,
- repository process guides,
- and historical material.

A document can be authoritative within the repository without being canonical to the methodology. `canonical` is therefore intentionally narrower than `status`.
