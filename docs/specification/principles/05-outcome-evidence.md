# Principle 5: Execution Must Produce Outcome Evidence

The Infoconex AI Flywheel learns from observed results rather than AI confidence alone.

## Purpose

A Flywheel cannot improve or reinforce reliable behavior responsibly if it cannot determine what actually happened.

Execution must therefore produce enough grounded evidence to distinguish a real outcome from an assumed success and to support later evaluation, classification, validation, persistence, reuse, and reevaluation of prior learning.

## Requirements

A conforming implementation must satisfy these requirements:

- Every meaningful execution produces enough evidence to evaluate what actions were taken, what results were produced, and whether the intended outcome occurred.
- Evidence is sufficient to identify failures, unexpected behavior, broken assumptions, partial success, successful patterns, or unresolved uncertainty when they occur.
- Task completion, lack of an exception, or AI confidence alone are not treated as proof of success.
- Independent or externally grounded validation signals are used where practical.
- Failures and unexpected results are preserved as learning inputs rather than discarded after retry or recovery.
- Important human approvals, judgments, corrections, or context are preserved as evidence when they affect the process or contain reusable learning.

## Operational Model

Outcome evidence may include:

- Logs
- Tool outputs
- Return codes
- Test results
- Validation checks
- External observations
- Metrics
- State changes
- User feedback
- Human approvals or judgments
- Comparisons against clear success criteria

The right evidence depends on the process, but the system should be able to tell the difference between the intended result and a result that merely looks plausible.

### Evidence Must Be Grounded in the Outcome

Where possible, the result should be checked against an independent signal. Examples include verifying that a file was actually created, confirming that a remote system accepted a change, running tests after modifying code, checking that a message was delivered, comparing measured output against expected criteria, or asking for human judgment when an outcome cannot be evaluated automatically.

### Failures, Successes, and Human Decisions Are Evidence

Errors, exceptions, rejected actions, unexpected outputs, failed validations, successful repeated outcomes, and important human decisions may reveal weaknesses, reinforce an existing validated pattern, or challenge earlier learning.

The evidence becomes the basis for deciding what the system should learn and whether adaptation is justified instead of allowing change to be driven by assumption.

## Lifecycle Relationship

- **Execute:** Actions, outputs, decisions, and state changes create the raw material for evidence.
- **Observe:** The system captures the evidence produced by execution.
- **Evaluate:** Evidence is compared with intended outcomes and success criteria.
- **Classify:** The evidence helps identify what was learned, whether adaptation is justified, and where resulting learning should live.
- **Adapt and Validate:** When change is justified, evidence motivates and tests candidate improvements. On a no-change path, evidence may support reinforcing or other reusable learning without manufacturing a candidate.
- **Persist and Reuse:** Supported learning or reinforcing evidence becomes part of the durable operating state and later execution produces new evidence about whether that state remains effective.

The recurring relationship is:

**Execution → Evidence → Evaluation → Classification → Supported learning or reinforcement → Persistence → Reuse → New evidence**

## Evidence of Implementation

Evidence supporting this principle may include:

- Execution logs and tool outputs
- Clear success criteria and validation results
- Independent checks of external state or outcomes
- Records showing preservation of failures and unexpected results
- Examples distinguishing verified success, partial success, failure, and unresolved uncertainty
- Records of important human decisions captured as part of the execution evidence
- Evidence that repeated success can reinforce an existing validated pattern without forcing adaptation
- Later evidence that challenges previously persisted learning when its assumptions no longer hold

## Non-Conforming Patterns

This principle is not satisfied when:

- Success is inferred only because the AI says the task succeeded
- Reaching the final step is treated as proof of the intended outcome
- Lack of an exception is treated as enough validation
- Failures are discarded after a retry and cannot inform later learning
- Successful outcomes are ignored when they contain evidence about an existing validated pattern
- Evidence is too incomplete to determine what actually occurred
- Important human decisions affecting the process leave no usable record

## Relationships to Other Principles

- [Principle 1: Autonomy Is Bounded by Human Authority](01-human-authority.md) treats human approvals and judgments as possible evidence while preserving human authority.
- [Principle 2: AI Is the Operator, Not Merely the Assistant](02-ai-as-operator.md) connects direct AI operation to the evidence generated by execution.
- [Principle 4: The SOP Is an Operational Control Plane](04-sop-control-plane.md) may define evidence expectations before execution begins.
- [Principle 6: Failure Determines Where the System Evolves](06-evolution-routing.md) uses evidence to determine what was learned, whether change is justified, and where resulting learning should live.
- [Principle 7: Learning Must Change a Persistent Operational Asset](07-persistent-learning.md) turns sufficiently supported reusable learning into durable operational assets or reinforcing evidence.
- [Principle 8: Improvement Must Compound Through Reuse](08-compounding-reuse.md) requires reused operating state to keep producing evidence that can confirm or challenge earlier learning.

## Principle Navigation

- [Principles Index](README.md)
- **Previous Principle:** [Principle 4: The SOP Is an Operational Control Plane](04-sop-control-plane.md)
- **Next Principle:** [Principle 6: Failure Determines Where the System Evolves](06-evolution-routing.md)

## Related Documents

- [Learning Architecture](../../architecture/learning-view.md)
- [Stage 2: Observe](../lifecycle/02-observe.md)
- [Stage 3: Evaluate](../lifecycle/03-evaluate.md)
- [Validation Sufficiency Requirements](../validation-sufficiency.md)
- [Conformance](../conformance/README.md)