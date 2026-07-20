# Stage 3: Evaluate

The Infoconex AI Flywheel compares the observed outcome with the intended outcome and applicable success criteria.

## Purpose

Evaluation determines what the evidence means.

The Flywheel must assess the actual outcome rather than assume success because execution completed, no exception was raised, or the AI is confident in its own result.

## Required Inputs and Preconditions

Evaluate requires:

- The observed evidence set from [Stage 2: Observe](02-observe.md)
- The intended outcome
- Applicable success criteria
- Relevant validation requirements
- Known assumptions and constraints
- Any governance rules affecting how uncertainty or significant outcomes must be handled

The evidence set must be sufficient to support an assessment or to identify that the outcome remains uncertain.

## Required Responsibilities

Evaluate must:

- Compare the observed outcome with the intended outcome and applicable success criteria
- Base conclusions on available evidence rather than execution completion, model confidence, or absence of an exception alone
- Identify whether required conditions were satisfied
- Identify material unexpected side effects or violated assumptions when evidence reveals them
- Represent insufficient evidence as uncertainty rather than unsupported confidence
- Identify material weaknesses or learning opportunities revealed by the assessment

An assessed outcome may include:

- Verified success
- Partial success
- Known failure
- Uncertain outcome

A verified success may still reveal a learning opportunity. A successful result does not imply that the process was optimal, efficient, or appropriately divided across runtime mechanisms.

## Required Outputs and Evidence

Evaluate must produce:

- An assessed outcome
- The evidence supporting that assessment
- Identified gaps or violated assumptions
- Unresolved uncertainty
- Any observed weakness or learning opportunity that requires classification

## Completion Conditions

Evaluate is complete when the available evidence supports an explicit outcome assessment, including an explicit uncertain outcome when evidence is insufficient, and any material weakness or learning opportunity has been identified for classification.

Evaluation must not treat an unsupported conclusion as a completed assessment.

## Relationship to Adjacent Stages

Evaluate consumes the evidence set produced by [Stage 2: Observe](02-observe.md).

Its supported assessment and identified learning opportunities become the primary inputs to [Stage 4: Classify](04-classify.md).

## Governance Considerations

When evidence is insufficient for responsible autonomous judgment, the Uncertainty Boundary has been reached.

If additional evidence can resolve the uncertainty within the AI's authority, the Flywheel should obtain it. If not, the affected decision requires human judgment.

A technically clear outcome may still trigger the Authority Boundary when a resulting action is not allowed autonomously.

## Relationships to Principles

- [Principle 5: Execution Must Produce Outcome Evidence](../principles/05-outcome-evidence.md) requires evaluation to be grounded in observable evidence.
- [Principle 6: Failure Determines Where the System Evolves](../principles/06-evolution-routing.md) uses evaluation results as the basis for later classification and routing.
- [Principle 1: Autonomy Is Bounded by Human Authority](../principles/01-human-authority.md) distinguishes unresolved uncertainty from actions that are understood but not authorized.

## Stage Navigation

- [Lifecycle Index](README.md)
- **Previous Stage:** [Stage 2: Observe](02-observe.md)
- **Next Stage:** [Stage 4: Classify](04-classify.md)

## Related Documents

- [Learning Architecture](../../architecture/learning-view.md)
- [Governance and Escalation](../../architecture/governance-and-escalation.md)