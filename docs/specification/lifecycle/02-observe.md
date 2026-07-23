# Stage 2: Observe

The Infoconex AI Flywheel captures evidence about what actually occurred during execution.

## Purpose

Observation creates the factual record needed to evaluate the outcome.

The Flywheel cannot responsibly learn from execution if later stages must rely only on AI memory, model confidence, or a success indicator that does not demonstrate the actual result.

## Required Inputs and Preconditions

Observe requires the operational record produced by [Stage 1: Execute](01-execute.md), including the available information about:

- Actions taken
- Tool and capability outputs
- Errors and exceptions
- State changes
- Validation signals
- Timing or performance information where relevant
- External observations
- User feedback
- Human approvals or judgments that affected the process

Observation must have access to enough of the execution record to determine what evidence is available and what evidence is missing.

## Required Responsibilities

Observe must:

- Capture or preserve evidence about what actually occurred during execution
- Distinguish observed facts from expected, intended, inferred, or assumed outcomes
- Preserve evidence needed for responsible later evaluation
- Preserve material human decisions when they affected execution or may contain reusable learning
- Identify material evidence gaps rather than replacing missing evidence with unsupported assumptions

Observed evidence may include:

- Tool outputs
- Logs
- Return codes
- Timing and performance data
- External observations
- State changes
- Validation signals
- User feedback
- Human approvals
- Human judgments

The exact evidence depends on the process and domain.

## Required Outputs and Evidence

Observe must produce an evidence set that identifies, where relevant:

- What actions were performed
- What results were produced
- Whether external or internal state changed
- What failures or unexpected conditions occurred
- What validation signals were produced
- What human decisions influenced the outcome
- What material evidence is unavailable or uncertain

## Completion Conditions

Observe is complete when the available evidence has been captured well enough for Evaluate to make a responsible assessment or to explicitly determine that the outcome cannot yet be resolved from the available evidence.

The existence of telemetry alone does not satisfy the stage contract.

## Relationship to Adjacent Stages

Observe consumes the operational record produced by [Stage 1: Execute](01-execute.md).

Its evidence set becomes the primary input to [Stage 3: Evaluate](03-evaluate.md).

## Governance Considerations

Observation must respect governance requirements for evidence collection, access, retention, privacy, and protected information.

Governance should not be bypassed in the name of collecting more evidence. When required evidence cannot be gathered within the AI's authority, that limitation becomes part of the observed record.

## Relationships to Principles

- [Principle 5: Execution Must Produce Outcome Evidence](../principles/05-outcome-evidence.md) defines the requirement for observable outcome evidence.
- [Principle 1: Autonomy Is Bounded by Human Authority](../principles/01-human-authority.md) constrains what evidence may be collected, accessed, retained, or escalated.
- [Principle 7: Learning Must Change a Persistent Operational Asset](../principles/07-persistent-learning.md) may later convert reusable human decisions or observed lessons into durable operational assets.

## Stage Navigation

- [Lifecycle Index](README.md)
- **Previous Stage:** [Stage 1: Execute](01-execute.md)
- **Next Stage:** [Stage 3: Evaluate](03-evaluate.md)

## Related Documents

- [Learning Architecture](../../architecture/learning-view.md)
- [Core Operating Model](../../architecture/operating-model.md)