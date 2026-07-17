# Stage 2: Observe

The system captures evidence about what actually happened during execution.

## Purpose

Observation creates the factual record needed to evaluate the outcome.

The Flywheel cannot responsibly learn from execution if later stages must rely only on AI memory, model confidence, or a success indicator that does not show the actual result.

## Inputs

Observation receives the record produced by [Stage 1: Execute](01-execute.md), including:

- actions taken,
- tool and capability outputs,
- errors and exceptions,
- state changes,
- validation signals,
- timing or performance information where relevant,
- external observations,
- user feedback,
- and human approvals or judgments that affected the process.

## Required Behavior

The system must preserve enough evidence to support responsible later evaluation.

Observed evidence may include:

- tool outputs,
- logs,
- return codes,
- timing and performance data,
- external observations,
- state changes,
- validation signals,
- user feedback,
- human approvals,
- and human judgments.

The exact evidence depends on the process, but it should allow later stages to distinguish what actually happened from what the AI expected or intended to happen.

When a human decision affects execution and may contain reusable learning, that decision should become part of the observed record.

## Outputs

Observation produces an evidence set that allows [Stage 3: Evaluate](03-evaluate.md) to assess:

- what actions were performed,
- what results were produced,
- whether relevant external state changed,
- what failures or unexpected conditions occurred,
- what validations ran,
- and what human decisions influenced the outcome.

## Governance Considerations

Observation must respect governance requirements for evidence collection, access, retention, privacy, and protected information.

Governance should not be bypassed in the name of collecting more evidence. When required evidence cannot be gathered within the AI's authority, that limitation becomes part of the observed record and may require escalation during evaluation.

## Failure and Exit Conditions

Observation should not advance merely because some telemetry exists.

The stage can advance to evaluation when the available evidence is enough to make a responsible assessment or enough to determine that the outcome is uncertain.

If critical evidence is missing and can still be collected within the AI's authority, the system should gather that evidence before advancing.

If missing evidence cannot be obtained on its own, the limitation should be preserved and handled as uncertainty rather than replaced with an unsupported assumption.

## Relationships to Principles

- [Principle 5: Execution Must Produce Outcome Evidence](../principles/05-outcome-evidence.md) defines the requirement for observable outcome evidence.
- [Principle 1: Autonomy Is Bounded by Human Authority](../principles/01-human-authority.md) constrains what evidence may be collected, accessed, retained, or escalated.
- [Principle 7: Learning Must Change a Persistent Operational Asset](../principles/07-persistent-learning.md) may later turn reusable human decisions or observed lessons into durable operational assets.

## Stage Navigation

- [Lifecycle Index](README.md)
- **Previous Stage:** [Stage 1: Execute](01-execute.md)
- **Next Stage:** [Stage 3: Evaluate](03-evaluate.md)

## Related Documents

- [Learning Architecture](../../architecture/learning-view.md)
- [Core Operating Model](../../architecture/operating-model.md)
