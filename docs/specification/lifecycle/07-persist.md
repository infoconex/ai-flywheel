# Stage 7: Persist

Validated and authorized learning is stored in a durable operational asset so it can survive the current execution.

## Purpose

A lesson does not become operational learning merely because it was observed, discussed, logged, or remembered during one execution.

Persistence changes something that future executions can actually use.

## Inputs

Persistence receives:

- a validated candidate improvement from [Stage 6: Validate](06-validate.md),
- the evidence supporting validation,
- the classification identifying where the learning should live,
- the persistent operational asset to be created or changed,
- and the applicable authorization required to make that durable change.

## Required Behavior

The persistent asset should match the classification made earlier in the lifecycle.

Possible persistent assets include:

- deterministic capabilities,
- code changes,
- SOP updates,
- validation rules,
- durable reasoning guidance,
- reusable knowledge,
- and approved Governance Policy changes.

A deterministic bug should normally be corrected in deterministic implementation. A procedural weakness should normally change the SOP. A contextual lesson that still requires judgment should remain available as reasoning knowledge rather than being forced into brittle code.

Persistence must make the learning operationally available to future execution. Logs, transcripts, or archived conversations do not satisfy this stage by themselves unless later operation can reliably retrieve and use the resulting learning.

## Outputs

Persistence produces:

- a durable updated operational asset,
- provenance linking the change to its supporting evidence where appropriate,
- enough context or scope to prevent inappropriate reuse,
- and an improved operating state available to [Stage 8: Reuse](08-reuse.md).

## Governance Considerations

A validated change may only be persisted when the system is authorized to make that change.

Changes that expand delegated authority or modify protected governance require human authorization.

Persistence should also respect governance requirements for versioning, auditability, rollback, protected assets, and change approval where applicable.

## Failure and Exit Conditions

The stage must not persist a candidate that has not been sufficiently validated and authorized.

If persistence fails technically, the failure becomes new evidence and should be handled without falsely treating the improvement as available for future use.

If the selected persistent destination proves unsuitable during implementation, the Flywheel should return to classification or adaptation rather than forcing the learning into the wrong asset.

Persistent does not mean permanent. Future evidence may justify refining, replacing, rolling back, invalidating, or moving the asset to another operating mechanism.

## Relationships to Principles

- [Principle 7: Learning Must Change a Persistent Operational Asset](../principles/07-persistent-learning.md) defines the requirement that useful learning survive in an operationally usable form.
- [Principle 6: Failure Determines Where the System Evolves](../principles/06-evolution-routing.md) determines which persistent destination should own the learning.
- [Principle 3: Work Is Distributed Across a Moving Determinism Boundary](../principles/03-moving-determinism-boundary.md) allows persistence to reflect a changed allocation of responsibility.
- [Principle 1: Autonomy Is Bounded by Human Authority](../principles/01-human-authority.md) constrains what changes the AI may persist autonomously.
- [Principle 8: Improvement Must Compound Through Reuse](../principles/08-compounding-reuse.md) requires the persisted improvement to become available to later execution.

## Stage Navigation

- [Lifecycle Index](README.md)
- **Previous Stage:** [Stage 6: Validate](06-validate.md)
- **Next Stage:** [Stage 8: Reuse](08-reuse.md)

## Related Documents

- [Learning Architecture](../../architecture/learning-view.md)
- [Core Operating Model](../../architecture/operating-model.md)
