# Stage 6: Validate

The Infoconex AI Flywheel tests a proposed improvement against appropriate evidence before trusting it for future use.

## Purpose

Adaptation creates a candidate improvement. Validation determines whether that candidate actually addresses the intended weakness well enough to be considered for persistent future use.

Validation and authority are separate concerns. A change may work but still not be authorized, or it may be authorized in principle but not yet proven to work.

## Required Inputs and Preconditions

Validate requires:

- The candidate adaptation from [Stage 5: Adapt](05-adapt.md)
- The weakness or learning opportunity the candidate is intended to address
- The expected improvement
- The evidence supporting the original classification
- Applicable success, safety, and validation criteria
- Representative scenarios or test conditions when relevant
- Governance requirements affecting how the change may be tested, approved, or promoted

The candidate itself must be identifiable well enough to test the proposed improvement rather than merely confirm that some change occurred.

## Required Responsibilities

Validate must:

- Test the actual candidate improvement against the outcome it is intended to improve
- Base the validation conclusion on evidence appropriate to the candidate and its context
- Distinguish a successful validation result from authorization to persist or deploy the change
- Preserve the evidence supporting the validation result
- Represent failed or unresolved validation honestly rather than treating the candidate as validated

Validation methods may vary by domain and change type. Examples include:

- Automated tests for code changes
- Replay against representative scenarios for SOP changes
- Evaluation against known examples for reasoning guidance
- Independent outcome checks for validation rules
- Comparison with prior behavior
- Human review when authority or risk requires it

The detailed requirements for what constitutes sufficient validation are defined separately from this stage contract.

## Required Outputs and Evidence

Validate must produce an explicit validation result with supporting evidence. The result must identify the candidate as one of the following:

- Validated
- Failed validation
- Uncertain or unresolved validation
- Unable to advance because of an applicable governance constraint

A candidate may be eligible for [Stage 7: Persist](07-persist.md) only when it has a successful validation result and the required authorization for persistence.

## Completion Conditions

Validate is complete when the candidate has an explicit validation result supported by preserved evidence.

The stage contract is not satisfied by treating incomplete, failed, or unresolved validation as successful validation.

## Relationship to Adjacent Stages

Validate consumes the candidate improvement, expected outcome, and validation intent produced by [Stage 5: Adapt](05-adapt.md).

A successfully validated and appropriately authorized candidate becomes eligible input to [Stage 7: Persist](07-persist.md).

## Governance Considerations

Human approval does not replace validation.

A human may authorize a change without proving that it works. Likewise, a technically validated change may still require human approval before it can be persisted or deployed.

The Governance Policy determines whether the validation activity itself is authorized and whether successful validation is enough for persistence or requires another approval step.

## Relationships to Principles

- [Principle 5: Execution Must Produce Outcome Evidence](../principles/05-outcome-evidence.md) requires validation conclusions to be based on evidence.
- [Principle 6: Failure Determines Where the System Evolves](../principles/06-evolution-routing.md) allows validation evidence to inform later lifecycle decisions.
- [Principle 7: Learning Must Change a Persistent Operational Asset](../principles/07-persistent-learning.md) requires validation before learning is trusted for durable future use.
- [Principle 1: Autonomy Is Bounded by Human Authority](../principles/01-human-authority.md) keeps technical validation separate from authorization.

## Stage Navigation

- [Lifecycle Index](README.md)
- **Previous Stage:** [Stage 5: Adapt](05-adapt.md)
- **Next Stage:** [Stage 7: Persist](07-persist.md)

## Related Documents

- [Learning Architecture](../../architecture/learning-view.md)
- [Governance and Escalation](../../architecture/governance-and-escalation.md)