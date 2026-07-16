---
title: "Frontmatter Examples"
document_type: principle
section: specification
status: canonical
canonical: true
order: 3
summary: "Provides examples of how to use frontmatter for various types of documents"
last_reviewed: 2026-07-16
tags:
  - frontmatter
  - examples
---

# Frontmatter Examples

These examples show recommended frontmatter structures for the main document categories in the AI Flywheel repository.

They are examples of metadata shape, not mandatory templates. Omit fields that do not have a verified or useful value.

## Specification Principle

```yaml
---
title: "Work Is Distributed Across a Moving Determinism Boundary"
document_type: principle
section: specification
status: canonical
canonical: true
order: 3
principle_number: 3
principle_id: moving-determinism-boundary
summary: "Responsibility moves among deterministic capability, procedural guidance, and AI reasoning as evidence accumulates."
last_reviewed: 2026-07-16
tags:
  - determinism
  - responsibility-allocation
  - adaptation
---
```

## Principle Research Dossier

```yaml
---
title: "Research: Work Is Distributed Across a Moving Determinism Boundary"
document_type: principle-research
section: research
status: active-research
canonical: false
order: 3
principle_number: 3
principle_id: moving-determinism-boundary
canonical_source: "../../specification/principles/03-moving-determinism-boundary.md"
summary: "Investigates prior art for dynamically allocating responsibility among reasoning, procedure, and deterministic execution."
research_started: 2026-07-15
last_reviewed: 2026-07-16
open_questions: 9
tags:
  - prior-art
  - determinism
  - adaptive-automation
  - responsibility-allocation
---
```

## Framework Research Dossier

```yaml
---
title: "Metis"
document_type: framework-research
section: research
status: active-research
canonical: false
order: 2
framework_name: Metis
framework_type: self-evolving-agent-framework
summary: "A self-evolving agent architecture that selectively promotes recurring textual procedures into executable code."
first_publication_date: 2026-06-27
first_publication_basis: "First public arXiv submission"
first_publication_source: "https://arxiv.org/abs/2606.24151"
paper_publication_date: 2026-06-27
primary_source: "https://arxiv.org/abs/2606.24151"
comparison_score: 19
comparison_max_score: 24
comparison_percentage: 79.2
last_reviewed: 2026-07-16
tags:
  - self-evolving-agents
  - text-memory
  - code-memory
  - prior-art
---
```

The dates above illustrate the field structure. Publication dates should be added to real dossiers only after they are verified against primary sources.

## Lifecycle Stage

```yaml
---
title: "Classify"
document_type: lifecycle-stage
section: specification
status: canonical
canonical: true
order: 4
stage_number: 4
stage_id: classify
summary: "Determines the nature of a weakness and where resulting learning should persist."
last_reviewed: 2026-07-16
tags:
  - lifecycle
  - classification
  - evolution-routing
---
```

## Conformance Criterion

```yaml
---
title: "Execution Produces Outcome Evidence"
document_type: conformance-criterion
section: specification
status: canonical
canonical: true
order: 5
criterion_number: 5
criterion_id: outcome-evidence
required: true
summary: "Requires execution to produce evidence sufficient to evaluate actual outcomes."
last_reviewed: 2026-07-16
tags:
  - conformance
  - evidence
  - validation
---
```

## Architecture Document

```yaml
---
title: "Runtime Architecture"
document_type: architecture
section: architecture
status: canonical
canonical: true
order: 1
architecture_view: runtime
scope: execution
summary: "Shows how governance, SOP guidance, AI reasoning, and deterministic capability interact during execution."
last_reviewed: 2026-07-16
tags:
  - architecture
  - runtime
  - execution
---
```

## Framework Comparison Matrix

```yaml
---
title: "Framework Comparison Matrix"
document_type: comparison
section: research
status: active-research
canonical: false
comparison_type: principle-overlap
scoring_scale: "0-3"
maximum_score: 24
framework_count: 6
summary: "Compares related frameworks against the eight AI Flywheel principles."
last_reviewed: 2026-07-16
tags:
  - comparison
  - prior-art
  - frameworks
---
```

## Prior-Art Overview

```yaml
---
title: "Prior-Art and Comparative Research Overview"
document_type: prior-art
section: research
status: active-research
canonical: false
research_scope: "AI Flywheel principles and related self-evolving agent methodologies"
research_cutoff: 2026-07-16
summary: "Summarizes current prior-art findings and the strongest remaining differentiation hypotheses."
last_reviewed: 2026-07-16
tags:
  - prior-art
  - novelty
  - research
---
```

## Folder Overview

```yaml
---
title: "AI Flywheel Principles"
document_type: overview
section: specification
status: canonical
canonical: true
order: 2
summary: "Index and overview of the eight principles that define the AI Flywheel operating model."
last_reviewed: 2026-07-16
tags:
  - principles
  - specification
---
```

## Frontmatter Guide

```yaml
---
title: "Frontmatter Schema"
document_type: guide
section: frontmatter
status: provisional
canonical: false
order: 2
summary: "Defines the approved frontmatter field vocabulary and controlled values for AI Flywheel documentation."
last_reviewed: 2026-07-16
tags:
  - documentation
  - metadata
  - frontmatter
---
```

## Minimal Example

Frontmatter should not be padded with empty or unnecessary fields.

A simple overview may need only:

```yaml
---
title: "AI Flywheel Research"
document_type: overview
section: research
status: active-research
canonical: false
summary: "Index of principle-oriented and framework-oriented AI Flywheel research."
---
```

The preferred rule is to include metadata because it has a clear purpose, not because the schema permits it.
