# Principle 7: Learning Must Change a Persistent Operational Asset

Useful Infoconex AI Flywheel learning must survive the current execution.

## Purpose

A system does not meaningfully improve if every lesson disappears when the current context ends.

When execution produces reusable learning, that learning must become durably available to future operation in a form appropriate to what was learned.

## Requirements

A conforming implementation must satisfy these requirements:

- Reusable learning survives the current execution in a durable operational asset.
- The persistent asset matches the type of learning identified through classification and evolution routing.
- Persisted learning is not limited to conversational memory or a knowledge store and may be represented through executable, procedural, reasoning, validation, configuration, knowledge, constraint, governance, or other operational forms.
- Saving raw logs, conversations, observations, or historical records alone does not satisfy persistence unless validated learning represented by those records becomes available to future operation.
- Persistent learning is identifiable and includes enough context to avoid applying lessons where they do not belong.
- Improvements are sufficiently validated before becoming part of future operation.
- The system must be authorized to persist governed changes.
- A failed or rejected adaptation is not persisted as an approved improvement, while separately validated learning derived from that attempt may persist in an appropriate form.
- Reinforcing evidence may be associated with an existing validated operating pattern without requiring or misrepresenting a new adaptation.
- Persistent assets can be revised, replaced, rolled back, invalidated, or moved when later evidence shows that the current form is no longer appropriate.

The detailed requirements for what may count as persisted learning are defined in [Persisted Learning Requirements](../persisted-learning.md).

## Operational Model

A lesson may become:

- Improved code
- A new tool or deterministic capability
- A modification to an existing capability
- An SOP update
- A known-failure rule or rejected-strategy rule
- An applicability constraint or strategy-selection rule
- A new validation or detection check
- Durable reasoning guidance
- A reusable example, heuristic, skill, or workflow
- A persistent knowledge or decision asset
- Configuration or policy rules
- An approved Governance Policy change
- Reinforcing evidence attached to an existing validated operating pattern

The storage technology is up to the implementation. The requirement is that the learning be durable and available to the future process that needs it.

### Persistence Is More Than Storage

Saving information is not the same as making it useful to future execution.

A lesson in a log becomes useful when it is turned into guidance, a rule, a constraint, or another operational form the system can retrieve or apply. A repeated workaround becomes useful when it is added to the SOP. A stable procedure becomes useful when it is implemented as a reusable capability. A human judgment becomes useful when it is captured as durable guidance or an authorized policy change.

### Failure-Derived Learning Is Separate from the Failed Candidate

A failed adaptation may reveal a reusable lesson without making the attempted adaptation safe or correct.

The failed candidate must remain rejected as an operational improvement. A separate lesson such as a known-failure condition, applicability constraint, detection rule, or alternative-strategy rule may persist only after it follows the lifecycle and is validated in its own right.

### Reinforcement Does Not Require Change

A successful or acceptable outcome may strengthen the evidence supporting an existing validated operating pattern.

That reinforcing evidence may be retained and associated with the existing pattern without inventing a new adaptation or pretending that the operating behavior changed.

### Learning Should Be Scoped Appropriately

Persistent learning should carry enough context to show where it applies, such as a particular process, customer, environment, tool, version, failure class, or governance scope.

Applying a lesson too broadly can make the Flywheel worse instead of better.

### Persistent Does Not Mean Permanent

Future evidence may show that an asset should be refined, replaced, rolled back, invalidated, or moved to a different operating mechanism.

## Lifecycle Relationship

- **Observe through Classify:** Execution evidence is interpreted and a reusable lesson or reinforcing pattern is identified.
- **Adapt:** The system creates or proposes the appropriate improvement when change is justified, or explicitly resolves that no adaptation is required.
- **Validate:** The candidate improvement or other learning intended for persistence is evaluated for sufficient support.
- **Persist:** Validated and authorized learning changes or enriches a durable operational asset, reinforces an existing validated pattern, or explicitly resolves that no new persistent learning is justified.
- **Reuse:** Future executions retrieve or apply relevant persisted learning and validated operating patterns.
- **Later cycles:** New evidence may refine, replace, invalidate, roll back, or move the persisted learning.

## Evidence of Implementation

Evidence supporting this principle may include:

- Durable code, SOP, validation, reasoning, configuration, knowledge, constraint, or governance changes produced from earlier execution
- Validated failure-derived rules or guidance that remain distinct from the rejected candidate that produced the evidence
- Reinforcing evidence associated with existing validated operating patterns
- Examples showing that persisted learning remains available after the original context ends
- Retrieval or invocation mechanisms that make the asset available to future operation
- Scope or applicability information attached to learned assets
- Validation and authorization records for persisted changes
- Examples of persistent assets later being refined, replaced, rolled back, or moved in response to new evidence

## Non-Conforming Patterns

This principle is not satisfied when:

- Lessons disappear with the current context window
- Observations are archived but never turned into reusable operational learning
- Raw conversation history is stored but future execution cannot use the resulting learning
- Improvements cannot be retrieved or applied by future executions
- A failed or rejected adaptation is represented as approved behavior merely because its history was retained
- Persisted learning is activated without required validation or authority
- Lessons are applied outside the context where they are valid
- Every successful execution is forced to create a new adaptation even when the evidence only reinforces an existing validated pattern

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

- [Persisted Learning Requirements](../persisted-learning.md)
- [Validation Sufficiency Requirements](../validation-sufficiency.md)
- [Learning Architecture](../../architecture/learning-view.md)
- [Stage 6: Validate](../lifecycle/06-validate.md)
- [Stage 7: Persist](../lifecycle/07-persist.md)
- [Stage 8: Reuse](../lifecycle/08-reuse.md)
- [Conformance](../conformance/README.md)
