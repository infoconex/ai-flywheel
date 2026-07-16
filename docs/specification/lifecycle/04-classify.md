---
title: "Stage 4: Classify"
document_type: "lifecycle-stage"
section: "specification"
status: "canonical"
canonical: true
order: 4
summary: "The AI identifies the nature and likely source of any weakness, uncertainty, or learning opportunity revealed by evaluation."
stage_number: 4
stage_id: "classify"
last_reviewed: "2026-07-16"
tags:
  - "lifecycle"
---

# Stage 4: Classify

The AI identifies the nature and likely source of any weakness, uncertainty, or learning opportunity revealed by evaluation.

## Purpose

Classification prevents the Flywheel from treating every problem as the same type of problem.

The system should consider whether the issue belongs primarily to:

- deterministic implementation,
- procedural guidance,
- missing validation,
- missing or incomplete reasoning knowledge,
- runtime reasoning,
- environmental change,
- governance or authority,
- or an incorrect assumption about where responsibility should reside.

## The Core Classification Question

At this stage, the Flywheel asks:

> **Where should this learning live?**

The answer may be:

- deterministic capability,
- procedural knowledge,
- reasoning knowledge,
- validation,
- or a proposed governance change.

Classification identifies the destination. The next stage determines and applies the actual adaptation.

## Classification Can Move Responsibility

A classification may reveal that the current mechanism owning a responsibility is no longer the right one.

For example, a recurring AI judgment may now be stable enough to become a procedure, or brittle deterministic logic may need to return to procedural guidance or AI reasoning.

## Stage Navigation

- [Lifecycle Index](README.md)
- **Previous Stage:** [Stage 3: Evaluate](03-evaluate.md)
- **Next Stage:** [Stage 5: Adapt](05-adapt.md)

## Related Documents

- [Principle 6: Failure Determines Where the System Evolves](../principles/06-evolution-routing.md)
- [Principle 3: Work Is Distributed Across a Moving Determinism Boundary](../principles/03-moving-determinism-boundary.md)
