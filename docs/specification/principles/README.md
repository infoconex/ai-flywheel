# AI Flywheel Principles

These eight principles define the expected behavior of an AI Flywheel implementation. Together they describe how human authority, AI operation, deterministic capability, procedural guidance, evidence, learning, and reuse interact as one operating model.

## Principle Document Structure

Each principle document uses a common structure so readers can consistently distinguish explanation from normative requirements and understand how each principle relates to operation, lifecycle, evidence, and conformance.

The standard sections are:

1. **Purpose** — why the principle exists and what problem it addresses.
2. **Normative Requirements** — the canonical requirements an implementation must satisfy.
3. **Operational Model** — how the principle works in practice, including principle-specific concepts and mechanisms.
4. **Lifecycle Relationship** — where the principle participates in the AI Flywheel lifecycle.
5. **Evidence of Implementation** — observable evidence that can support a conformance assessment.
6. **Non-Conforming Patterns** — common implementations that resemble the principle but do not satisfy it.
7. **Relationships to Other Principles** — important dependencies and interactions within the methodology.

Principle-specific subsections may appear inside the Operational Model where additional detail is needed. Governance and authority are addressed explicitly wherever they materially affect the principle rather than being repeated mechanically in every document.

The normative requirements remain authoritative. Evidence examples and non-conforming patterns help assess those requirements but do not create independent specification requirements.

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

- [Formal Definition](../definition.md)
- [Lifecycle](../lifecycle/README.md)
- [Conformance](../conformance/README.md)
- [Architecture and Diagrams](../../architecture/README.md)
- [Framework Comparison Research](../../research/frameworks/framework-comparison-matrix.md)