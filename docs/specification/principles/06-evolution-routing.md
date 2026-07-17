# Principle 6: Failure Determines Where the System Evolves

A failure is useful evidence, not merely a reason to retry.

## Purpose

When execution reveals a weakness, the AI Flywheel should determine **where the correction belongs** before changing the system.

Different failures have different causes. Treating every failure as a prompt problem, code problem, memory problem, or retry problem creates brittle systems and repeated mistakes.

## Requirements

A conforming implementation must satisfy these requirements:

- The system evaluates and classifies meaningful weaknesses, uncertainty, or learning opportunities before choosing where a persistent improvement should go.
- Different kinds of learning can be sent to different destinations rather than being forced into one fixed mechanism.
- Supported destinations include, as appropriate, deterministic capability, procedural guidance, reasoning knowledge, validation, and governance.
- The system can identify when responsibility is in the wrong place and move it across the Moving Determinism Boundary.
- The selected destination reflects the mechanism best suited to handle the correction reliably without removing flexibility that is still needed.
- A proposed change is validated before it becomes trusted future behavior.
- Governance changes remain subject to human authorization.

## Operational Model

### Possible Adaptation Destinations

**Deterministic Capability** — Use when the problem is repeatable and can be corrected through code, tools, scripts, services, or another deterministic implementation.

**Procedural Guidance** — Use when the process is incomplete, unclear, incorrectly ordered, or missing known exception handling.

**Reasoning Knowledge** — Use when the condition still requires judgment but would benefit from durable guidance, examples, heuristics, or lessons.

**Validation** — Use when the system lacks a reliable way to determine whether an action or outcome is correct.

**Governance** — Use when evidence shows that authority, approval requirements, prohibited actions, or escalation rules should change. Governance changes require human authorization.

### The Evolution Routing Rule

> **Correct the weakness at the lowest layer capable of handling it reliably without unnecessarily removing adaptability.**

This prevents the system from solving every recurring problem with more AI reasoning when a more reliable mechanism exists. It also prevents the system from hard-coding behavior that still requires judgment.

### Routing Can Move Responsibility

Examples include:

- **AI reasoning → SOP** when a recurring judgment becomes a known procedure,
- **SOP → deterministic capability** when a stable procedure becomes reliably automatable,
- and **deterministic capability → SOP or AI reasoning** when evidence shows that a hard-coded assumption is too brittle.

## Lifecycle Relationship

- **Observe and Evaluate:** Evidence establishes what happened and whether the outcome exposed a weakness or opportunity.
- **Classify:** The system identifies the type of issue and asks where the learning should live.
- **Adapt:** The selected destination receives the proposed correction.
- **Validate:** The change is tested before being trusted.
- **Persist and Reuse:** Validated and authorized learning becomes part of future operation.

## Evidence of Implementation

Evidence supporting this principle may include:

- classified failures or learning opportunities with identified causes,
- examples in which different lessons produced different destinations,
- records showing why a correction was placed in code, procedure, reasoning guidance, validation, or governance,
- examples of responsibility moving across the Moving Determinism Boundary,
- and validation results for proposed changes before persistence or reuse.

## Non-Conforming Patterns

This principle is not satisfied when:

- every failure produces the same response,
- the system only retries without diagnosis,
- every lesson is stored only as memory,
- every failure is treated only as a code defect,
- every weakness becomes additional prompt text,
- learning is persisted without determining what part of the system should own it,
- or the system has no intentional way to move responsibility when the current placement is wrong.

## Relationships to Other Principles

- [Principle 3: Work Is Distributed Across a Moving Determinism Boundary](03-moving-determinism-boundary.md) defines where responsibility can live; this principle determines where a specific learning should be applied.
- [Principle 5: Execution Must Produce Outcome Evidence](05-outcome-evidence.md) provides the evidence required for responsible classification and routing.
- [Principle 7: Learning Must Change a Persistent Operational Asset](07-persistent-learning.md) ensures the selected correction becomes a durable operational asset.
- [Principle 1: Autonomy Is Bounded by Human Authority](01-human-authority.md) governs changes that affect authority or protected operational assets.
- [Principle 8: Improvement Must Compound Through Reuse](08-compounding-reuse.md) depends on correctly routed improvements being inherited by future execution.

## Principle Navigation

- [Principles Index](README.md)
- **Previous Principle:** [Principle 5: Execution Must Produce Outcome Evidence](05-outcome-evidence.md)
- **Next Principle:** [Principle 7: Learning Must Change a Persistent Operational Asset](07-persistent-learning.md)

## Related Documents

- [Learning Architecture](../../architecture/learning-view.md)
- [Stage 4: Classify](../lifecycle/04-classify.md)
- [Stage 5: Adapt](../lifecycle/05-adapt.md)
- [Conformance](../conformance/README.md)
