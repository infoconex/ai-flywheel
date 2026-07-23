# Stage 7: Persist

The Infoconex AI Flywheel retains validated and authorized learning in a durable operational asset so useful learning can survive the current execution and influence future work.

## Purpose

A lesson does not become operational learning merely because it was observed, discussed, logged, or remembered during one execution.

Persistence changes something durable that future executions can actually use. That durable change may represent a new operational improvement, reusable knowledge derived from failure, or reinforcing evidence associated with an existing validated operating pattern.

## Required Inputs and Preconditions

Persist requires:

- A validation result from [Stage 6: Validate](06-validate.md)
- The evidence supporting that validation result
- The classification identifying how the learning should be handled
- The persistent operational asset to be created, changed, reinforced, or associated with the learning when durable retention is justified
- The authorization required to make any durable operational change

When the input is a candidate adaptation, the candidate must be validated and authorized for persistence before it can become an approved operational improvement.

When the input is reusable learning derived from a failed or rejected attempt, that learning must be validated separately from the failed candidate before it can become trusted persistent learning.

## Required Responsibilities

Persist must:

- Place validated reusable learning in a durable operational asset appropriate to the earlier classification
- Make the resulting learning identifiable and available for later relevant use
- Preserve enough context to distinguish where the learning applies
- Preserve the relationship between the persisted learning and its supporting evidence where required by the operating context
- Avoid treating raw execution history, unvalidated observations, or an unapplied candidate as persisted operational learning
- Prevent a failed or unvalidated adaptation from being activated or represented as an approved operational improvement
- Allow separately validated learning produced by a failed or rejected attempt to be persisted without promoting the failed adaptation itself
- When a successful no-change outcome reinforces an existing validated pattern, retain the reinforcing evidence in an appropriate durable form when it can influence future evaluation, confidence, applicability, or reuse
- Avoid misrepresenting reinforcing evidence as a new adaptation when the operating behavior did not change

Persistent learning may exist in different operational assets. The detailed categories and required properties of persisted learning are defined separately from this stage contract.

Persist may also resolve that no new reusable learning or durable operational change is justified. That explicit result does not create persistent learning, but it distinguishes a completed no-change disposition from a silently skipped Persist responsibility.

## Required Outputs and Evidence

Persist must produce one of the following supported outcomes:

- A durable updated operational asset containing a validated and authorized improvement
- A durable operational asset containing validated reusable learning derived from failure or another non-change outcome
- Reinforcing evidence durably associated with an existing validated operating pattern when that evidence is useful to future operation
- An explicit determination that no new persistent operational learning is justified

When persistent learning is created or updated, Persist must also produce:

- An identifiable persisted learning item or reinforced operating pattern
- Enough applicability context for later relevant use
- An operating state available to [Stage 8: Reuse](08-reuse.md)
- Evidence that the durable persistence action was successfully completed

## Completion Conditions

Persist is complete when the validated learning disposition has been resolved explicitly.

When reusable learning is justified, it must be durably incorporated into or associated with an operational asset and made available for later relevant use.

When no new persistent learning is justified, the stage is complete only when that disposition is explicit and supported by the preceding lifecycle evidence.

A log, transcript, archived conversation, or other stored record does not by itself satisfy the stage contract for persistent learning unless it functions as or informs an operational asset that later execution can reliably use.

## Relationship to Adjacent Stages

Persist consumes validated learning and persistence dispositions produced by [Stage 6: Validate](06-validate.md).

Its durable operating state, persisted learning, reinforced pattern, or explicit no-new-learning result becomes the basis for [Stage 8: Reuse](08-reuse.md).

A failed adaptation does not advance to Reuse as an approved improvement. Separately validated knowledge learned from that failure may advance through Persist and later influence Reuse.

## Governance Considerations

A validated operational change may only be persisted when the system is authorized to make that change.

Changes that expand the AI's authority or modify protected governance require human authorization.

Persistence should also respect governance requirements for versioning, audit history, rollback, protected assets, and change approval where applicable.

Persistent does not mean permanently authoritative. The detailed behavior for challenging, superseding, deprecating, or retiring persisted learning is defined separately from this stage contract.

## Relationships to Principles

- [Principle 7: Learning Must Change a Persistent Operational Asset](../principles/07-persistent-learning.md) defines the requirement that useful learning survive in a form future operation can use.
- [Principle 6: Failure Determines Where the System Evolves](../principles/06-evolution-routing.md) determines which persistent destination should own the learning.
- [Principle 3: Work Is Distributed Across a Moving Determinism Boundary](../principles/03-moving-determinism-boundary.md) allows persistence to reflect a changed placement of responsibility.
- [Principle 1: Autonomy Is Bounded by Human Authority](../principles/01-human-authority.md) constrains what changes the AI may persist on its own.
- [Principle 8: Improvement Must Compound Through Reuse](../principles/08-compounding-reuse.md) requires persisted learning to become available to later execution.

## Stage Navigation

- [Lifecycle Index](README.md)
- **Previous Stage:** [Stage 6: Validate](06-validate.md)
- **Next Stage:** [Stage 8: Reuse](08-reuse.md)

## Related Documents

- [Learning Architecture](../../architecture/learning-view.md)
- [Core Operating Model](../../architecture/operating-model.md)
