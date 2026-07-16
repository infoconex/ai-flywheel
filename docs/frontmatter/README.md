---
title: "Frontmatter Reference"
document_type: "overview"
section: "root"
status: "canonical"
canonical: true
order: 1
summary: "This section defines how YAML frontmatter should be used across the AI Flywheel documentation."
last_reviewed: "2026-07-16"
tags:
  - "documentation"
  - "frontmatter"
  - "overview"
---

# Frontmatter Reference

This section defines how YAML frontmatter should be used across the AI Flywheel documentation.

Frontmatter provides machine-readable metadata about a document. It should describe the document without duplicating the document's substantive content, navigation, references, or research findings.

The goals of the frontmatter standard are to:

- distinguish canonical specification from research and supporting material,
- make document type and scope explicit,
- support future tooling, indexing, validation, and generated documentation,
- provide consistent metadata across the repository,
- and avoid creating a second source of truth for information already maintained in Markdown content.

## Documents in This Section

- [Frontmatter Schema](schema.md) — Defines the shared field vocabulary, required fields, optional fields, and controlled values.
- [Document-Type Conventions](document-types.md) — Defines which fields apply to each category of documentation.
- [Maintenance Rules](maintenance.md) — Defines when frontmatter should be updated and how to avoid metadata drift.
- [Examples](examples.md) — Provides recommended frontmatter examples for the major document types in the repository.

## Core Rule

> **Frontmatter describes the document. Markdown defines and explains the knowledge.**

Frontmatter should not duplicate:

- previous and next navigation links that already appear in the document body,
- related-document lists,
- research questions,
- research findings,
- source lists,
- comparison tables,
- or substantive specification content.

## Authority and Meaning

Frontmatter is metadata about a document, not a replacement for the document itself.

A field such as:

```yaml
status: canonical
```

helps tools and AI systems understand that the document is authoritative, but the actual methodology remains defined by the document body.

Likewise:

```yaml
status: active-research
```

signals that findings may change and should not override canonical specification documents.

## Adoption

This section is a proposed frontmatter standard for review. Frontmatter should be added across the repository only after the schema and conventions have been accepted.
