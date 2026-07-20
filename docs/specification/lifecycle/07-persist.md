# Stage 7: Persist

The Infoconex AI Flywheel stores validated and authorized learning in a durable operational asset so it can survive the current execution.

## Purpose

A lesson does not become operational learning merely because it was observed, discussed, logged, or remembered during one execution.

Persistence changes something that future executions can actually use.

## Required Inputs and Preconditions

Persist requires:

- A successfully validated candidate improvement from [Stage 6: Validate](06-validate.md)
- The evidence supporting the validation result
- The classification identifying where the learning should live
- The persistent operational asset to be created or changed
- The authorization required to make the durable change

The candidate must be validated and authorized for persistence before it can satisfy this stage contract.

## Required Responsibilities

Persist must:

- Place the validated learning in a durable operational asset appropriate to the earlier classification
- Make the resulting improvement identifiable and available for later relevant use
- Preserve enough context to distinguish where the learning applies
- Preserve the relationship between the persisted change and its supporting evidence where required by the operating context
- Avoid treating raw execution history, unvalidated observations, or an unapplied candidate as persisted operational learning

Persistent learning may exist in different operational assets. The detailed categories and required properties of persisted learning are defined separately from this stage contract.

## Required Outputs and Evidence

Persist must produce:

- A durable updated operational asset
- An identifiable persisted improvement
- Enough applicability context for later relevant use
- An improved operating state available to [Stage 8: Reuse](08-reuse.md)
- Evidence that the durable change was successfully made

## Completion Conditions

Persist is complete when the validated and authorized improvement has been durably incorporated into an operational asset and is available for later relevant use.

A log, transcript, archived conversation, or other stored record does not by itself satisfy the stage contract unless it functions as an operational asset that later execution can reliably use.

## Relationship to Adjacent Stages

Persist consumes a successfully validated and appropriately authorized candidate from [Stage 6: Validate](06-validate.md).

Its durable improved operating state becomes available to [Stage 8: Reuse](08-reuse.md).

## Governance Considerations

A validated change may only be persisted when the system is authorized to make that change.

Changes that expand the AI's authority or modify protected governance require human authorization.

Persistence should also respect governance requirements for versioning, audit history, rollback, protected assets, and change approval where applicable.

Persistent does not mean permanently authoritative. The detailed behavior for challenging, superseding, deprecating, or retiring persisted learning is defined separately from this stage contract.

## Relationships to Principles

- [Principle 7: Learning Must Change a Persistent Operational Asset](../principles/07-persistent-learning.md) defines the requirement that useful learning survive in a form future operation can use.
- [Principle 6: Failure Determines Where the System Evolves](../principles/06-evolution-routing.md) determines which persistent destination should own the learning.
- [Principle 3: Work Is Distributed Across a Moving Determinism Boundary](../principles/03-moving-determinism-boundary.md) allows persistence to reflect a changed placement of responsibility.
- [Principle 1: Autonomy Is Bounded by Human Authority](../principles/01-human-authority.md) constrains what changes the AI may persist on its own.
- [Principle 8: Improvement Must Compound Through Reuse](../principles/08-compounding-reuse.md) requires the persisted improvement to become available to later execution.

## Stage Navigation

- [Lifecycle Index](README.md)
- **Previous Stage:** [Stage 6: Validate](06-validate.md)
- **Next Stage:** [Stage 8: Reuse](08-reuse.md)

## Related Documents

- [Learning Architecture](../../architecture/learning-view.md)
- [Core Operating Model](../../architecture/operating-model.md)