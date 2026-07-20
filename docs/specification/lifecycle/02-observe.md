# Stage 2: Observe

The Infoconex AI Flywheel captures evidence about what actually occurred during execution.

## Purpose

Observation creates the factual record needed to evaluate the outcome.

The Flywheel cannot responsibly learn from execution if later stages must rely only on AI memory, model confidence, or a success indicator that does not demonstrate the actual result.

## Inputs

Observation receives the operational record produced by [Stage 1: Execute](01-execute.md), including:

- Actions taken
- Tool and capability outputs
- Errors and exceptions
- State changes
- Validation signals
- Timing or performance information where relevant
- External observations
- User feedback
- Human approvals or judgments that affected the process

## Required Behavior

The system must preserve enough evidence to support responsible later evaluation.

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

The exact evidence depends on the process, but it should allow later stages to distinguish what actually happened from what the AI expected or intended to happen.

When a human decision affects execution, that decision should become part of the observed record when it may contain reusable learning.

## Outputs

Observation produces an evidence set sufficient for [Stage 3: Evaluate](03-evaluate.md) to assess:

- What actions were performed
- What results were produced
- Whether relevant external state changed
- What failures or unexpected conditions occurred
- What validations ran
- What human decisions influenced the outcome

## Governance Considerations

Observation must respect governance requirements for evidence collection, access, retention, privacy, and protected information.

Governance should not be bypassed in the name of collecting more evidence. When required evidence cannot be gathered within the AI's authority, that limitation becomes part of the observed record and may require escalation during evaluation.

## Failure and Exit Conditions

Observation should not advance merely because some telemetry exists.

The stage can advance to evaluation when the available evidence is sufficient to make a responsible assessment or sufficient to determine that the outcome is uncertain.

If critical evidence is missing and can still be collected within the AI's authority, the system should gather that evidence before advancing.

If missing evidence cannot be obtained autonomously, the limitation should be preserved and handled as uncertainty rather than replaced with an unsupported assumption.

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
