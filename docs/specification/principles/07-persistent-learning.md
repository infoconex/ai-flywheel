# Principle 7: Learning Must Change a Persistent Operational Asset

Useful learning must survive the current execution.

## Purpose

A system does not meaningfully improve if every lesson disappears when the current context ends.

When execution produces a reusable lesson, that learning should change something durable that future executions can actually use.

## Normative Requirements

A conforming implementation must satisfy the following requirements:

- Reusable learning survives the current execution in a durable operational asset.
- The persistent asset matches the type of learning identified through classification and evolution routing.
- Saving raw logs, conversations, or historical records alone does not satisfy persistence unless the resulting knowledge becomes operationally available to future execution.
- Persistent learning is scoped with enough context to avoid applying lessons where they are not valid.
- Improvements are validated appropriately before becoming part of future operation.
- The system must be authorized to persist the change.
- Persistent assets remain revisable, replaceable, reversible, or movable when later evidence shows that the current form is no longer appropriate.

## Operational Model

A lesson may become:

- improved code,
- a new tool or deterministic capability,
- a modification to an existing capability,
- an SOP update,
- a known-failure rule,
- a new validation check,
- durable reasoning guidance,
- a reusable example or heuristic,
- a persistent memory or knowledge artifact,
- or an approved Governance Policy change.

The specific storage technology is implementation-dependent. The requirement is that the learning be durable and available to the future process that needs it.

### Persistence Is More Than Storage

Saving information is not the same as making it operational.

A lesson in a log becomes useful when it is converted into guidance the system can retrieve or apply. A repeated workaround becomes useful when it is added to the SOP. A stable procedure becomes useful when it is implemented as a reusable capability. A human judgment becomes useful when it is captured as durable guidance or an authorized policy change.

### Learning Should Be Scoped Appropriately

Persistent learning should carry enough context to determine where it is valid, such as a particular process, customer, environment, tool, failure class, or governance scope.

Overgeneralized learning can make the Flywheel worse rather than better.

### Persistent Does Not Mean Permanent

Future evidence may show that an asset should be refined, replaced, rolled back, invalidated, or moved to a different operating mechanism.

## Lifecycle Relationship

- **Observe through Classify:** execution evidence is interpreted and a reusable lesson is identified.
- **Adapt:** the system creates or proposes the appropriate improvement.
- **Validate:** the candidate improvement is tested before activation.
- **Persist:** validated and authorized learning changes a durable operational asset.
- **Reuse:** future executions retrieve or apply that asset.
- **Later cycles:** new evidence may refine, replace, invalidate, roll back, or relocate the persisted learning.

## Evidence of Implementation

Evidence supporting this principle may include:

- durable code, SOP, validation, reasoning, knowledge, or governance changes produced from prior execution,
- examples showing that persisted learning remains available after the original context ends,
- retrieval or invocation mechanisms that make the asset available to future operation,
- scope or applicability information attached to learned assets,
- validation and authorization records for persisted changes,
- and examples of persistent assets later being refined, replaced, rolled back, or moved in response to new evidence.

## Non-Conforming Patterns

This principle is not satisfied when:

- lessons disappear with the current context window,
- observations are archived but never converted into reusable operational guidance,
- raw conversation history is stored but future execution cannot operationally use it,
- improvements cannot be retrieved or applied by future executions,
- persisted learning is activated without required validation or authority,
- or lessons are applied indiscriminately outside the context in which they are valid.

## Relationships to Other Principles

- [Principle 5: Execution Must Produce Outcome Evidence](05-outcome-evidence.md) provides the evidence from which useful learning is derived.
- [Principle 6: Failure Determines Where the System Evolves](06-evolution-routing.md) determines which persistent asset should own the learning.
- [Principle 3: Work Is Distributed Across a Moving Determinism Boundary](03-moving-determinism-boundary.md) allows persisted responsibility to move again when evidence changes.
- [Principle 1: Autonomy Is Bounded by Human Authority](01-human-authority.md) determines whether the system is authorized to persist a change.
- [Principle 8: Improvement Must Compound Through Reuse](08-compounding-reuse.md) requires future execution to actually use the improved asset.

## Principle Navigation

- [Principles Index](README.md)
- **Previous Principle:** [Principle 6: Failure Determines Where the System Evolves](06-evolution-routing.md)
- **Next Principle:** [Principle 8: Improvement Must Compound Through Reuse](08-compounding-reuse.md)

## Related Documents

- [Learning Architecture](../../architecture/learning-view.md)
- [Stage 6: Validate](../lifecycle/06-validate.md)
- [Stage 7: Persist](../lifecycle/07-persist.md)
- [Conformance](../conformance/README.md)
