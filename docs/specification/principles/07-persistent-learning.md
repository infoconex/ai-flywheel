# Principle 7: Learning Must Change a Persistent Operational Asset

Useful Infoconex AI Flywheel learning must survive the current execution.

## Purpose

A system does not meaningfully improve if every lesson disappears when the current context ends.

When execution produces a reusable lesson, that learning should change something durable that future executions can actually use.

## Requirements

A conforming implementation must satisfy these requirements:

- Reusable learning survives the current execution in a durable operational asset.
- The persistent asset matches the type of learning identified through classification and evolution routing.
- Saving raw logs, conversations, or historical records alone does not satisfy persistence unless the resulting knowledge becomes available to future operation.
- Persistent learning includes enough context to avoid applying lessons where they do not belong.
- Improvements are validated before becoming part of future operation.
- The system must be authorized to persist the change.
- Persistent assets can be revised, replaced, rolled back, invalidated, or moved when later evidence shows that the current form is no longer appropriate.

## Operational Model

A lesson may become:

- Improved code
- A new tool or deterministic capability
- A modification to an existing capability
- An SOP update
- A known-failure rule
- A new validation check
- Durable reasoning guidance
- A reusable example or heuristic
- A persistent memory or knowledge asset
- An approved Governance Policy change

The storage technology is up to the implementation. The requirement is that the learning be durable and available to the future process that needs it.

### Persistence Is More Than Storage

Saving information is not the same as making it useful to future execution.

A lesson in a log becomes useful when it is turned into guidance the system can retrieve or apply. A repeated workaround becomes useful when it is added to the SOP. A stable procedure becomes useful when it is implemented as a reusable capability. A human judgment becomes useful when it is captured as durable guidance or an authorized policy change.

### Learning Should Be Scoped Appropriately

Persistent learning should carry enough context to show where it applies, such as a particular process, customer, environment, tool, failure class, or governance scope.

Applying a lesson too broadly can make the Flywheel worse instead of better.

### Persistent Does Not Mean Permanent

Future evidence may show that an asset should be refined, replaced, rolled back, invalidated, or moved to a different operating mechanism.

## Lifecycle Relationship

- **Observe through Classify:** Execution evidence is interpreted and a reusable lesson is identified.
- **Adapt:** The system creates or proposes the appropriate improvement.
- **Validate:** The candidate improvement is tested before activation.
- **Persist:** Validated and authorized learning changes a durable operational asset.
- **Reuse:** Future executions retrieve or apply that asset.
- **Later cycles:** New evidence may refine, replace, invalidate, roll back, or move the persisted learning.

## Evidence of Implementation

Evidence supporting this principle may include:

- Durable code, SOP, validation, reasoning, knowledge, or governance changes produced from earlier execution
- Examples showing that persisted learning remains available after the original context ends
- Retrieval or invocation mechanisms that make the asset available to future operation
- Scope or applicability information attached to learned assets
- Validation and authorization records for persisted changes
- Examples of persistent assets later being refined, replaced, rolled back, or moved in response to new evidence

## Non-Conforming Patterns

This principle is not satisfied when:

- Lessons disappear with the current context window
- Observations are archived but never turned into reusable guidance
- Raw conversation history is stored but future execution cannot use it
- Improvements cannot be retrieved or applied by future executions
- Persisted learning is activated without required validation or authority
- Lessons are applied outside the context where they are valid

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
