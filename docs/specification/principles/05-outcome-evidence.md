# Principle 5: Execution Must Produce Outcome Evidence

The AI Flywheel learns from observed results rather than AI confidence alone.

## Purpose

A Flywheel cannot improve responsibly if it cannot determine what actually happened.

Every meaningful execution should produce enough evidence to evaluate:

- what actions were taken,
- what results were produced,
- whether the intended outcome occurred,
- what assumptions were violated,
- what failed or behaved unexpectedly,
- and whether the process should change before the next execution.

## Evidence Sufficiency

Outcome evidence must be sufficient to support later evaluation and learning.

A process reaching its final step, completing without an exception, or receiving a confident success statement from the AI is not by itself evidence that the intended result occurred.

Where practical, the Flywheel should preserve enough persistent evidence that a reviewer or later process can determine what happened without relying only on the model's transient memory of the execution.

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

The evidence allows the Flywheel to determine which type of weakness occurred. That classification is the basis of [Principle 6: Failure Determines Where the System Evolves](06-evolution-routing.md).

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

**Execution → Evidence → Evaluation → Classification → Adaptation**

Without reliable evidence, adaptation risks optimizing the system based on assumptions rather than reality.

## Principle Navigation

- [Principles Index](README.md)
- **Previous Principle:** [Principle 4: The SOP Is an Operational Control Plane](04-sop-control-plane.md)
- **Next Principle:** [Principle 6: Failure Determines Where the System Evolves](06-evolution-routing.md)

## Related Documents

- [Learning Architecture](../../architecture/learning-view.md)
- [Lifecycle](../lifecycle/README.md)