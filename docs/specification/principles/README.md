---
title: "AI Flywheel Principles"
document_type: "overview"
section: "specification"
status: "canonical"
canonical: true
order: 3
summary: "These eight principles define the expected behavior of an AI Flywheel implementation. Together they describe how human authority, AI operation, deterministic capability, procedural guidance, evidence, learning, and reuse interact as one ope"
last_reviewed: "2026-07-16"
tags:
  - "overview"
---

# AI Flywheel Principles

These eight principles define the expected behavior of an AI Flywheel implementation. Together they describe how human authority, AI operation, deterministic capability, procedural guidance, evidence, learning, and reuse interact as one operating model.

## Table of Contents

1. [Autonomy Is Bounded by Human Authority](01-human-authority.md) — Human authorization establishes the boundaries within which the Flywheel operates autonomously and defines when human judgment or approval is required.
2. [AI Is the Operator, Not Merely the Assistant](02-ai-as-operator.md) — AI performs the operational work, invokes capabilities, interprets results, handles exceptions, and carries the process forward.
3. [Work Is Distributed Across a Moving Determinism Boundary](03-moving-determinism-boundary.md) — Responsibility is deliberately allocated among deterministic capability, procedural guidance, and AI reasoning, and may move as evidence accumulates.
4. [The SOP Is an Operational Control Plane](04-sop-control-plane.md) — Persistent machine-consumable procedure guides execution, capability use, known exceptions, validation, evidence, and escalation.
5. [Execution Must Produce Outcome Evidence](05-outcome-evidence.md) — The Flywheel learns from observable results rather than relying on AI confidence alone.
6. [Failure Determines Where the System Evolves](06-evolution-routing.md) — Observed weaknesses are classified and routed to the persistent mechanism best suited to correct them.
7. [Learning Must Change a Persistent Operational Asset](07-persistent-learning.md) — Reusable learning must survive the current execution in a durable asset available to future operation.
8. [Improvement Must Compound Through Reuse](08-compounding-reuse.md) — Validated improvements are inherited by future executions so the operating system becomes progressively more capable.

## How the Principles Fit Together

The principles form a coherent operating model rather than eight independent features:

**Human authority bounds autonomy → AI operates the process → work is allocated across code, procedure, and reasoning → execution produces evidence → evidence determines where the system should evolve → validated learning persists → future execution reuses the improved system.**

## Related Documents

- [Formal Definition](../ai-flywheel-definition.md)
- [Lifecycle](../lifecycle/README.md)
- [Conformance Criteria](../conformance/README.md)
- [Architecture and Diagrams](../../architecture/README.md)
- [Framework Comparison Research](../../research/frameworks/framework-comparison-matrix.md)
