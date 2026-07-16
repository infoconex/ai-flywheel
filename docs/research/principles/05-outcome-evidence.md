# Principle 5: Execution Must Produce Outcome Evidence

The AI Flywheel learns from observed results rather than AI confidence alone.

See the concise [principles specification](../../specification/principles.md#principle-5-execution-must-produce-outcome-evidence).

## Purpose

A Flywheel cannot improve responsibly if it cannot determine what actually happened.

Every meaningful execution should produce enough evidence to evaluate:

- what actions were taken,
- what results were produced,
- whether the intended outcome occurred,
- what assumptions were violated,
- what failed or behaved unexpectedly,
- and whether the process should change before the next execution.

## Forms of Evidence

Outcome evidence may include:

- logs,
- tool outputs,
- return codes,
- test results,
- validation checks,
- external observations,
- metrics,
- state changes,
- user feedback,
- human approvals or judgments,
- and comparisons against explicit success criteria.

The appropriate evidence depends on the process, but the standard remains the same: the system should be able to distinguish an intended outcome from an apparent or assumed success.

## Evidence Must Be Grounded in the Outcome

The AI reporting that it believes a task succeeded is not sufficient evidence.

Where possible, the result should be checked against an independent signal.

Examples include:

- verifying that a file was actually created,
- confirming that a remote system accepted a change,
- running tests after modifying code,
- checking that a message was delivered,
- comparing measured output against expected criteria,
- or asking a human to judge an outcome that cannot be evaluated automatically.

## Failures Are Evidence

Errors, exceptions, rejected actions, unexpected outputs, and unsuccessful validations should be preserved as learning inputs rather than discarded after a retry.

A failed execution may reveal a weakness in:

- deterministic capability,
- procedural guidance,
- AI reasoning,
- validation,
- or governance assumptions.

The evidence allows the Flywheel to determine which type of weakness occurred.

## Human Decisions Are Evidence

When a human provides approval, judgment, correction, or additional context, that decision may contain information that should influence future execution.

The Flywheel should consider whether the decision reveals a reusable lesson that belongs in:

- the SOP,
- reasoning guidance,
- validation,
- a deterministic capability,
- or a proposed governance change.

## Evidence Enables Adaptation

Outcome evidence is the input to the post-execution learning process.

The general relationship is:

**Execution → Evidence → Evaluation → Classification → Adaptation**

Without reliable evidence, adaptation risks optimizing the system based on assumptions rather than reality.

## Related Documents

- [Learning Architecture](../../architecture/learning-view.md)
- [Lifecycle](../../specification/lifecycle.md)
- [Principle 6: Evolution Routing](06-evolution-routing.md)
