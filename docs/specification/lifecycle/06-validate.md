# Stage 6: Validate

The proposed improvement is tested against appropriate evidence before it is trusted for future use.

## Purpose

Adaptation creates a candidate improvement. Validation determines whether that candidate actually corrects the identified weakness and is safe enough to become part of future operation.

Validation and authority are separate concerns. A change may be technically valid but unauthorized, or authorized in principle but not yet demonstrated to work.

## Inputs

Validation receives:

- the candidate adaptation from [Stage 5: Adapt](05-adapt.md),
- the weakness or learning opportunity the candidate is intended to address,
- the evidence supporting the original classification,
- applicable success and safety criteria,
- representative scenarios or test conditions,
- and governance requirements affecting how the change may be tested, approved, or promoted.

## Required Behavior

Validation should be proportional to the type and consequence of the change.

Examples include:

- automated tests for code changes,
- replay against representative scenarios for SOP changes,
- evaluation against known examples for reasoning guidance,
- independent outcome checks for validation rules,
- comparison with the prior operating behavior,
- and human review when authority or risk requires it.

Validation must test the actual candidate improvement rather than merely confirm that a change was made.

Where practical, validation should include independent evidence capable of detecting whether the proposed change creates new failures or side effects.

## Outputs

Validation produces one of the following:

- a validated candidate improvement with supporting evidence,
- a failed validation result with evidence explaining the failure,
- an uncertain validation result requiring more evidence or human judgment,
- or a governance outcome preventing the candidate from advancing.

A validated and authorized candidate may proceed to [Stage 7: Persist](07-persist.md).

## Governance Considerations

Human approval does not replace validation.

A human may authorize a change without proving that it works. Likewise, a technically validated change may still require human approval before it can be persisted or deployed.

The Governance Policy determines whether the validation activity itself is authorized and whether successful validation is sufficient for persistence or requires an additional approval gate.

## Failure and Exit Conditions

When validation fails, the failure must become new outcome evidence.

The Flywheel should return to classification or adaptation when the failure reveals that:

- the diagnosis was incomplete,
- the selected destination was wrong,
- the candidate change is ineffective,
- or the candidate introduces unacceptable side effects.

The stage should not advance to persistence when validation is incomplete, failed, or unresolved.

Uncertain validation that cannot be resolved within delegated authority requires human judgment.

## Relationships to Principles

- [Principle 5: Execution Must Produce Outcome Evidence](../principles/05-outcome-evidence.md) requires validation conclusions to be evidence-based.
- [Principle 6: Failure Determines Where the System Evolves](../principles/06-evolution-routing.md) allows failed validation to trigger reclassification or a different adaptation destination.
- [Principle 7: Learning Must Change a Persistent Operational Asset](../principles/07-persistent-learning.md) requires validation before learning is trusted for durable future use.
- [Principle 1: Autonomy Is Bounded by Human Authority](../principles/01-human-authority.md) keeps technical validation separate from authorization.

## Stage Navigation

- [Lifecycle Index](README.md)
- **Previous Stage:** [Stage 5: Adapt](05-adapt.md)
- **Next Stage:** [Stage 7: Persist](07-persist.md)

## Related Documents

- [Learning Architecture](../../architecture/learning-view.md)
- [Governance and Escalation](../../architecture/governance-and-escalation.md)
