# Principle 6: Failure Determines Where the System Evolves

A failure is diagnostic evidence, not merely a reason to retry.

## Purpose

When execution reveals a weakness, the AI Flywheel should determine **where the correction belongs** before changing the system.

Different failures have different causes. Treating every failure as a prompt problem, code problem, memory problem, or retry problem creates brittle systems and repeated mistakes.

## Normative Requirements

A conforming implementation must satisfy the following requirements:

- The system evaluates and classifies meaningful weaknesses, uncertainty, or learning opportunities before selecting a persistent adaptation destination.
- Different kinds of learning can be routed to different destinations rather than being forced into one fixed mechanism.
- Supported destinations include, as appropriate, deterministic capability, procedural guidance, reasoning knowledge, validation, and governance.
- The system can identify when incorrect responsibility allocation is itself the problem and move responsibility across the Moving Determinism Boundary.
- The selected destination reflects the mechanism best suited to handle the correction reliably without unnecessarily removing adaptability.
- A proposed adaptation is validated before it becomes trusted future behavior.
- Governance changes remain subject to human authorization.

## Operational Model

### Possible Adaptation Destinations

**Deterministic Capability** — use when the problem is reliably repeatable and can be corrected through code, tools, scripts, services, or another deterministic implementation.

**Procedural Guidance** — use when the process is incomplete, ambiguous, incorrectly ordered, or missing known exception handling.

**Reasoning Knowledge** — use when the condition requires contextual judgment that should remain adaptable but would benefit from durable guidance, examples, heuristics, or lessons.

**Validation** — use when the system lacks a reliable way to determine whether an action or outcome is correct.

**Governance** — use when evidence shows that authority, approval requirements, prohibited actions, or escalation rules should change. Governance changes require human authorization.

### The Evolution Routing Rule

> **Correct the weakness at the lowest layer capable of handling it reliably without unnecessarily removing adaptability.**

This prevents the system from solving every recurring problem with additional AI reasoning when a more reliable mechanism exists. It also prevents the system from hard-coding behavior that still requires judgment.

### Routing Can Move Responsibility

Examples include:

- **AI reasoning → SOP** when a recurring judgment becomes a known procedure,
- **SOP → deterministic capability** when a stable procedure becomes reliably automatable,
- and **deterministic capability → SOP or AI reasoning** when evidence shows that a hard-coded assumption is too brittle.

## Lifecycle Relationship

- **Observe and Evaluate:** evidence establishes what happened and whether the outcome exposed a weakness or opportunity.
- **Classify:** the system identifies the nature of the issue and asks where the learning should live.
- **Adapt:** the selected destination receives the proposed correction.
- **Validate:** the adaptation is tested before being trusted.
- **Persist and Reuse:** validated and authorized learning becomes part of future operation.

## Evidence of Implementation

Evidence supporting this principle may include:

- classified failures or learning opportunities with identified causes,
- examples in which different lessons produced different adaptation destinations,
- records showing why a correction was placed in code, procedure, reasoning guidance, validation, or governance,
- examples of responsibility moving across the Moving Determinism Boundary,
- and validation results for proposed adaptations before persistence or reuse.

## Non-Conforming Patterns

This principle is not satisfied when:

- every failure produces the same response,
- the system only retries without diagnosis,
- every lesson is stored only as memory,
- every failure is treated only as a code defect,
- every weakness becomes additional prompt text,
- learning is persisted without determining what mechanism should own it,
- or the system has no intentional mechanism for changing responsibility allocation when the current placement is wrong.

## Relationships to Other Principles

- [Principle 3](03-moving-determinism-boundary.md) defines where responsibility can reside; this principle determines where a specific learning should be applied.
- [Principle 5](05-outcome-evidence.md) provides the evidence required for responsible classification and routing.
- [Principle 7](07-persistent-learning.md) ensures the selected correction becomes a durable operational asset.
- [Principle 1](01-human-authority.md) governs adaptations that affect authority or protected operational assets.
- [Principle 8](08-compounding-reuse.md) depends on correctly routed improvements being inherited by future execution.

## Principle Navigation

- [Principles Index](README.md)
- **Previous Principle:** [Principle 5: Execution Must Produce Outcome Evidence](05-outcome-evidence.md)
- **Next Principle:** [Principle 7: Learning Must Change a Persistent Operational Asset](07-persistent-learning.md)

## Related Documents

- [Learning Architecture](../../architecture/learning-view.md)
- [Stage 4: Classify](../lifecycle/04-classify.md)
- [Stage 5: Adapt](../lifecycle/05-adapt.md)
- [Conformance](../conformance/README.md)