# Stage 7: Persist

The Infoconex AI Flywheel stores validated and authorized learning in a durable operational asset so it can survive the current execution.

## Purpose

A lesson does not become operational learning merely because it was observed, discussed, logged, or remembered during one execution.

Persistence makes validated learning durably available to future operation. On a no-change path, that durable result may be reinforcing evidence associated with an existing validated operating pattern rather than a new adaptation.

The normative requirements defining what may count as persisted learning and the properties it must have are defined in [Persisted Learning Requirements](../persisted-learning.md).

## Required Inputs and Preconditions

Persist requires:

- The result from [Stage 6: Validate](06-validate.md)
- The evidence supporting that result
- The classification identifying how the learning should be handled
- The persistent operational asset to be created, changed, or reinforced when persistent learning is justified
- The authorization required to make any durable operational change

A candidate adaptation must be validated and authorized for persistence before it can become an approved operational improvement.

## Required Responsibilities

Persist must:

- Apply the [Persisted Learning Requirements](../persisted-learning.md) to any learning retained for future operation
- Place validated reusable learning in a durable operational asset appropriate to the earlier classification
- Make the resulting learning identifiable and available for later relevant use
- Preserve enough context to distinguish where the learning applies
- Preserve the relationship between the persisted learning and its supporting evidence where required by the operating context
- Avoid treating raw execution history, unvalidated observations, or an unapplied candidate as persisted operational learning
- Prevent a failed, unresolved, rejected, or unvalidated adaptation from being activated or represented as an approved operational improvement
- Allow separately validated learning derived from a failed or rejected attempt to persist without promoting the failed candidate itself
- When a successful no-change outcome reinforces an existing validated operating pattern, durably associate the reinforcing evidence with that pattern without misrepresenting it as a new adaptation
- Explicitly resolve when no new persistent learning or durable operational change is justified

A failed adaptation and the learning produced by that failure are separate lifecycle concerns. The failed candidate itself must not be persisted as an approved improvement. A reusable lesson derived from the failure may be persisted only after that lesson has been evaluated, classified, appropriately represented through Adapt when required, and validated as learning in its own right.

Persisted learning may exist in many kinds of operational assets, including deterministic capability, procedural guidance, reasoning knowledge, configuration, constraints, validation, structured knowledge, failure-derived rules, and authorized governance. Reinforcing evidence may also be durably associated with an existing validated pattern without representing a new operational change.

No specific storage technology or artifact type is required.

## Required Outputs and Evidence

Persist must produce one of the following supported outcomes:

- A durable updated operational asset containing a validated and authorized improvement
- Reinforcing evidence durably associated with an existing validated operating pattern
- Another validated learning item durably incorporated into an appropriate operational asset
- An explicit determination that no new persistent operational learning is justified

When persistent learning is created, updated, or reinforced, Persist must also produce:

- An identifiable persisted learning item or reinforced operating pattern
- Enough applicability context for later relevant use
- An operating state available to [Stage 8: Reuse](08-reuse.md)
- Evidence that the durable persistence action was successfully completed

## Completion Conditions

Persist is complete when the validated learning disposition has been resolved explicitly.

When reusable learning is justified, it must satisfy the applicable [Persisted Learning Requirements](../persisted-learning.md), be durably incorporated into or associated with an operational asset, and be made available for later relevant use.

When a successful no-change outcome reinforces an existing validated operating pattern, the reinforcing evidence must remain durably associated with that pattern rather than being discarded merely because no adaptation occurred.

When no new persistent learning is justified, the stage is complete only when that disposition is explicit and supported by the preceding lifecycle evidence.

A log, transcript, archived conversation, or other stored record does not by itself satisfy the stage contract unless the validated learning represented by it functions as an operational asset that later execution can reliably use.

## Relationship to Adjacent Stages

Persist consumes validated learning and persistence dispositions produced by [Stage 6: Validate](06-validate.md).

Its durable operating state, persisted learning, reinforced pattern, or explicit no-new-learning result becomes the basis for [Stage 8: Reuse](08-reuse.md).

Persistence makes learning available for future operation. It does not by itself demonstrate that the learning was actually reused; that responsibility belongs to Reuse.

## Governance Considerations

A validated change may only be persisted when the system is authorized to make that change.

Changes that expand the AI's authority or modify protected governance require human authorization.

Persistence should also respect governance requirements for versioning, audit history, rollback, protected assets, evidence retention, and change approval where applicable.

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

- [Persisted Learning Requirements](../persisted-learning.md)
- [Validation Sufficiency Requirements](../validation-sufficiency.md)
- [Learning Architecture](../../architecture/learning-view.md)
- [Core Operating Model](../../architecture/operating-model.md)
