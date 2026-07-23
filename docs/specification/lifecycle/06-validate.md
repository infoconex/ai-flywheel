# Stage 6: Validate

The Infoconex AI Flywheel determines whether a proposed improvement or other learning intended for persistent future use is sufficiently supported before it is trusted.

## Purpose

Adaptation creates a candidate improvement when change is justified. Validation determines whether that candidate actually addresses the intended weakness well enough to be considered for persistent future use.

When Adapt explicitly resolves that no adaptation is required, there is no candidate change to test. Validate instead resolves whether any reinforcing or reusable learning intended for persistence is sufficiently supported. It must not manufacture a change merely to create a validation subject.

Validation and authority are separate concerns. A change may work but still not be authorized, or it may be authorized in principle but not yet proven to work.

The normative minimum conditions for deciding whether validation is sufficient are defined in [Validation Sufficiency Requirements](../validation-sufficiency.md).

## Required Inputs and Preconditions

Validate requires:

- The candidate adaptation or explicit no-change resolution from [Stage 5: Adapt](05-adapt.md)
- The weakness, successful pattern, or learning opportunity associated with that result
- The expected improvement when a candidate adaptation exists
- The evidence supporting the original classification
- Applicable success, safety, and validation criteria
- Representative scenarios or test conditions when relevant
- Governance requirements affecting how a change or persistent learning may be tested, approved, or promoted

When a candidate exists, the candidate must be identifiable well enough to test the proposed improvement rather than merely confirm that some change occurred.

## Required Responsibilities

When a candidate adaptation exists, Validate must:

- Test the actual candidate improvement against the outcome it is intended to improve
- Apply the [Validation Sufficiency Requirements](../validation-sufficiency.md) to the validation claim being made
- Base the validation conclusion on evidence appropriate to the candidate, its risk, and its intended scope of reuse
- Distinguish technical success from outcome success when they are materially different
- Check for material regressions or unacceptable side effects when they are reasonably relevant to the candidate
- Distinguish a successful validation result from authorization to persist or deploy the change
- Preserve enough attributable evidence to support later persistence, review, and reuse decisions
- Represent failed, contradictory, incomplete, or unresolved validation honestly rather than treating the candidate as validated

When no adaptation is required, Validate must:

- Explicitly record that no candidate adaptation requires validation
- Determine whether any reinforcing or reusable learning intended for persistence is sufficiently supported under the [Validation Sufficiency Requirements](../validation-sufficiency.md)
- Preserve the evidence supporting that determination

Validation methods may vary by domain and change type. Examples include:

- Automated tests for code changes
- Replay against representative scenarios for SOP changes
- Evaluation against known examples for reasoning guidance
- Independent outcome checks for validation rules
- Comparison with prior behavior
- Human review when authority or risk requires it

No single method is universally required. The method and evidence must be sufficient for the validation claim, risk, and intended scope of future use.

## Required Outputs and Evidence

Validate must produce an explicit result with supporting evidence.

When a candidate adaptation exists, the result must identify the candidate as one of the following:

- Validated
- Failed validation
- Uncertain or unresolved validation
- Unable to advance because of an applicable governance constraint

A candidate may be identified as **Validated** only when the applicable [Validation Sufficiency Requirements](../validation-sufficiency.md) are satisfied.

When no candidate adaptation exists, the result must identify:

- That no candidate validation was required
- Whether any reinforcing or reusable learning intended for persistence is sufficiently supported

A candidate adaptation may be eligible for [Stage 7: Persist](07-persist.md) as an approved operational improvement only when it has a successful validation result and the required authorization for persistence.

A failed, unresolved, or unvalidated candidate must not advance to Persist as an approved operational improvement.

## Completion Conditions

Validate is complete when the applicable validation responsibility has an explicit result supported by preserved evidence and the applicable sufficiency requirements have been resolved.

The stage contract is not satisfied by treating incomplete, failed, contradictory, or unresolved validation as successful validation, by relying only on technical execution success when the intended outcome is broader, or by treating the absence of a candidate as permission to skip consideration of reinforcing or reusable learning.

## Relationship to Adjacent Stages

Validate consumes the candidate improvement or explicit no-change resolution produced by [Stage 5: Adapt](05-adapt.md).

A successfully validated and appropriately authorized candidate becomes eligible input to [Stage 7: Persist](07-persist.md).

A no-change path may advance to Persist with sufficiently supported reinforcing learning, or with an explicit determination that no new persistent learning is justified.

When candidate validation fails, the candidate does not advance as an approved improvement. The validation result becomes new evidence and returns through the lifecycle as needed. Any reusable lesson derived from that failure must be evaluated and classified before the system decides where that new learning should live.

## Governance Considerations

Human approval does not replace validation.

A human may authorize a change without proving that it works. Likewise, a technically validated change may still require human approval before it can be persisted or deployed.

The Governance Policy determines whether the validation activity itself is authorized and whether successful validation is enough for persistence or requires another approval step.

## Relationships to Principles

- [Principle 5: Execution Must Produce Outcome Evidence](../principles/05-outcome-evidence.md) requires validation conclusions to be based on evidence.
- [Principle 6: Failure Determines Where the System Evolves](../principles/06-evolution-routing.md) requires new learning from validation failure to be evaluated and routed intentionally rather than promoted automatically.
- [Principle 7: Learning Must Change a Persistent Operational Asset](../principles/07-persistent-learning.md) requires validation before learning is trusted for durable future use.
- [Principle 1: Autonomy Is Bounded by Human Authority](../principles/01-human-authority.md) keeps technical validation separate from authorization.

## Stage Navigation

- [Lifecycle Index](README.md)
- **Previous Stage:** [Stage 5: Adapt](05-adapt.md)
- **Next Stage:** [Stage 7: Persist](07-persist.md)

## Related Documents

- [Validation Sufficiency Requirements](../validation-sufficiency.md)
- [Learning Architecture](../../architecture/learning-view.md)
- [Governance and Escalation](../../architecture/governance-and-escalation.md)
