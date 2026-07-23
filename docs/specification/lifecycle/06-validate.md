# Stage 6: Validate

The Infoconex AI Flywheel evaluates whether a candidate improvement or other learning disposition is sufficiently supported before the resulting learning is trusted for future use.

## Purpose

Adapt produces an explicit response to classification. Validation determines whether that response is supported well enough to influence persistent future operation.

Validation and authority are separate concerns. A change may work but still not be authorized, or it may be authorized in principle but not yet proven to work.

Validation also applies when the correct outcome is not a new adaptation. A no-change conclusion or reusable lesson derived from failure still needs enough evidence to justify being trusted beyond the current execution.

## Required Inputs and Preconditions

Validate requires:

- The adaptation result from [Stage 5: Adapt](05-adapt.md)
- The weakness, successful pattern, or learning opportunity the result is intended to address
- The expected improvement when a candidate adaptation exists
- The evidence supporting the original classification and adaptation result
- Applicable success, safety, and validation criteria
- Representative scenarios or test conditions when relevant
- Governance requirements affecting how the result may be tested, approved, or promoted

The subject of validation must be identifiable well enough to assess the actual claim being made. Depending on the lifecycle path, that subject may be:

- A candidate adaptation
- An explicit conclusion that no adaptation is required
- A reusable lesson derived from a failed or rejected attempt
- Reinforcing evidence associated with an existing validated operating pattern

## Required Responsibilities

Validate must:

- Assess the actual validation subject against the outcome or learning claim it is intended to support
- Base the validation conclusion on evidence appropriate to the subject and its context
- Distinguish a successful validation result from authorization to persist or deploy a change
- Preserve the evidence supporting the validation result
- Represent failed or unresolved validation honestly rather than treating the subject as validated
- When validating a no-change result, determine whether the evidence supports preserving the current operating behavior rather than manufacturing a change
- When an adaptation fails validation, keep the failed candidate separate from any potentially reusable learning produced by that failure
- Allow failure-derived learning to become a separate validation subject when it can improve future execution

Validation methods may vary by domain and subject. Examples include:

- Automated tests for code changes
- Replay against representative scenarios for SOP changes
- Evaluation against known examples for reasoning guidance
- Independent outcome checks for validation rules
- Comparison with prior behavior
- Evidence showing that the current validated pattern continues to satisfy the intended outcome
- Testing a known-failure rule or applicability constraint against representative cases
- Human review when authority or risk requires it

The detailed requirements for what constitutes sufficient validation are defined separately from this stage contract.

## Required Outputs and Evidence

Validate must produce an explicit validation result with supporting evidence.

For a candidate adaptation, the result must identify the candidate as one of the following:

- Validated
- Failed validation
- Uncertain or unresolved validation
- Unable to advance because of an applicable governance constraint

For a no-change or failure-derived learning path, the result must identify whether the claimed learning or disposition is:

- Sufficiently supported for persistence or reinforcement
- Not sufficiently supported
- Uncertain or unresolved
- Unable to advance because of an applicable governance constraint

A candidate adaptation may become eligible to be persisted as an approved operational improvement only when it has a successful validation result and the required authorization.

A failed or rejected adaptation must not be promoted as an approved operational improvement. However, separately validated learning produced by that failed attempt may still become eligible for [Stage 7: Persist](07-persist.md).

## Completion Conditions

Validate is complete when the validation subject has an explicit result supported by preserved evidence.

The stage contract is not satisfied by treating incomplete, failed, or unresolved validation as successful validation.

When validation fails, the lifecycle must not silently continue as though the candidate succeeded. The result becomes new evidence that may justify retry, backward transition, escalation, stopping the attempted improvement, or validating a separate lesson derived from the failure.

## Relationship to Adjacent Stages

Validate consumes the adaptation result, intended outcome, and validation intent produced by [Stage 5: Adapt](05-adapt.md).

Successfully validated and appropriately authorized operational improvements may advance to [Stage 7: Persist](07-persist.md).

Validated no-change conclusions, reinforcing evidence, and reusable failure-derived learning may also advance to Persist when durable retention can influence future operation.

Failed or unresolved validation may return the lifecycle to Evaluate, Classify, Adapt, or another appropriate stage. Returning to an earlier stage does not erase the validation evidence that caused the transition.

## Governance Considerations

Human approval does not replace validation.

A human may authorize a change without proving that it works. Likewise, a technically validated change may still require human approval before it can be persisted or deployed.

The Governance Policy determines whether the validation activity itself is authorized and whether successful validation is enough for persistence or requires another approval step.

Governance may also require stopping or escalating a candidate even when useful learning can still be preserved from the attempt.

## Relationships to Principles

- [Principle 5: Execution Must Produce Outcome Evidence](../principles/05-outcome-evidence.md) requires validation conclusions to be based on evidence.
- [Principle 6: Failure Determines Where the System Evolves](../principles/06-evolution-routing.md) allows validation evidence to inform later lifecycle decisions and produce new learning.
- [Principle 7: Learning Must Change a Persistent Operational Asset](../principles/07-persistent-learning.md) requires reusable learning to be validated before it is trusted for durable future use.
- [Principle 1: Autonomy Is Bounded by Human Authority](../principles/01-human-authority.md) keeps technical validation separate from authorization.

## Stage Navigation

- [Lifecycle Index](README.md)
- **Previous Stage:** [Stage 5: Adapt](05-adapt.md)
- **Next Stage:** [Stage 7: Persist](07-persist.md)

## Related Documents

- [Learning Architecture](../../architecture/learning-view.md)
- [Governance and Escalation](../../architecture/governance-and-escalation.md)
