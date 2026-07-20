# Stage 8: Reuse

Future Infoconex AI Flywheel executions begin with the improved operating state created by previous cycles.

## Purpose

Reuse is what turns isolated learning into compounding improvement.

Persistence creates durable assets. Reuse makes those assets useful by ensuring later execution actually inherits and applies relevant validated and authorized improvements.

## Inputs

Reuse receives:

- Validated and authorized persistent improvements from [Stage 7: Persist](07-persist.md)
- The context in which each improvement is valid
- The current Governance Policy
- A new authorized execution where earlier learning may be relevant

## Required Behavior

Later executions should inherit relevant improvements rather than rediscovering the same solution from scratch.

Reusable improvements may include:

- Better deterministic capabilities
- Improved Standard Operating Procedure (SOP) guidance
- Stronger validation
- Durable reasoning knowledge
- Better failure handling
- Human-authorized governance changes

Reuse must match the current situation. A previously successful lesson should be applied only where it remains relevant, valid, and authorized.

The system should be able to show that earlier learning changed later behavior. Storing an improvement without retrieving, invoking, or applying it does not create compounding reuse.

## Outputs

Reuse produces an improved starting state for the next [Stage 1: Execute](01-execute.md).

The resulting pattern is:

**Better execution → better evidence → better learning → better operating assets → better future execution**

Successful reuse may appear as:

- Fewer repeated failures
- Less unnecessary reasoning
- Less repeated tool exploration
- Stronger validation
- More reliable capability use
- Less unnecessary human escalation

## Governance Considerations

Human decisions can produce reusable learning, but reuse does not allow the AI to grant itself more authority.

A repeated approval pattern may justify a proposal for a Governance Policy change, but expanding the AI's authority still requires human authorization.

Previously authorized learning must also be reused within its current scope. A change in context, risk, or governance may make earlier learning no longer applicable or may require renewed approval.

## Failure and Exit Conditions

The Flywheel should not reuse an improvement when:

- Its context no longer applies
- Later evidence has invalidated it
- Required authorization is no longer present
- The asset cannot be reliably retrieved or executed
- Reuse would create unacceptable uncertainty or risk

When reused behavior produces new evidence showing that the improvement is weak, stale, or in the wrong place, the new execution begins another Flywheel cycle rather than treating persisted learning as permanently correct.

## Relationships to Principles

- [Principle 8: Improvement Must Compound Through Reuse](../principles/08-compounding-reuse.md) defines the requirement that persisted improvements change future operation.
- [Principle 7: Learning Must Change a Persistent Operational Asset](../principles/07-persistent-learning.md) ensures there is durable learning available to reuse.
- [Principle 6: Failure Determines Where the System Evolves](../principles/06-evolution-routing.md) helps place learning where it can be reused effectively.
- [Principle 5: Execution Must Produce Outcome Evidence](../principles/05-outcome-evidence.md) ensures reused improvements remain subject to outcome evaluation.
- [Principle 1: Autonomy Is Bounded by Human Authority](../principles/01-human-authority.md) prevents improving capability from becoming uncontrolled authority expansion.

## Stage Navigation

- [Lifecycle Index](README.md)
- **Previous Stage:** [Stage 7: Persist](07-persist.md)
- **Next Cycle:** [Stage 1: Execute](01-execute.md)

## Related Documents

- [Learning Architecture](../../architecture/learning-view.md)
- [Core Operating Model](../../architecture/operating-model.md)
- [Worked Example: Continuous Dependency Maintenance](../../examples/software-maintenance/worked-example.md)
