---
title: "Criterion 3: Runtime Responsibilities Are Distinguishable"
document_type: "conformance-criterion"
section: "specification"
status: "canonical"
canonical: true
order: 3
summary: "The system distinguishes among deterministic capability, procedural guidance, and AI reasoning as separate operating mechanisms."
criterion_number: 3
criterion_id: "runtime-responsibilities"
required: true
last_reviewed: "2026-07-16"
tags:
  - "conformance"
---

# Criterion 3: Runtime Responsibilities Are Distinguishable

The system distinguishes among deterministic capability, procedural guidance, and AI reasoning as separate operating mechanisms.

## Requirement

The implementation must intentionally use:

- **deterministic capability** for reliable, repeatable operations,
- **procedural guidance** for durable operational direction and known process behavior,
- and **AI reasoning** for orchestration, interpretation, ambiguity, and judgment.

These mechanisms may operate together during execution and do not need to be separate sequential stages.

## Evidence of Conformance

A conforming implementation should be able to explain:

- which responsibilities are owned by deterministic capability,
- which are governed by procedure,
- which require AI reasoning,
- and how those responsibilities may change as evidence accumulates.

## Non-Conforming Indicators

This criterion is not satisfied when:

- all behavior is treated as AI reasoning without intentional responsibility allocation,
- all behavior is fixed automation with no role for adaptive judgment,
- or procedural knowledge is indistinguishable from transient prompting with no durable operational role.

## Criterion Navigation

- [Conformance Index](README.md)
- **Previous Criterion:** [Criterion 2: AI Executes the Process](02-ai-executes-process.md)
- **Next Criterion:** [Criterion 4: A Persistent Operational Procedure Exists](04-persistent-operational-procedure.md)

## Related Documents

- [Principle 3: Work Is Distributed Across a Moving Determinism Boundary](../principles/03-moving-determinism-boundary.md)
- [Runtime Architecture](../../architecture/runtime-view.md)
