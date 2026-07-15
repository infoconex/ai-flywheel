# AI Flywheel Principles

These principles define the expected behavior of an AI Flywheel implementation. They are intentionally stated without reference to other frameworks.

## Principle 1: Autonomy Is Bounded by Human Authority

The AI Flywheel begins with human authorization but is designed to operate autonomously within explicitly defined authority boundaries.

Once authorized, the Flywheel should continue operating without routine human participation while remaining within its delegated scope.

A persistent Governance Policy should define what the AI may do autonomously, what requires approval, what requires human judgment, what is prohibited, and when escalation is required.

The system distinguishes two primary escalation conditions:

- **Uncertainty boundary:** the AI lacks sufficient evidence or confidence to make a responsible decision and requests human judgment.
- **Authority boundary:** the AI can identify a preferred action but is not authorized to take it and requests human approval.

Human intervention should become evidence when appropriate. Repeated human decisions may improve future policy, procedural guidance, classification, or delegated authority.

The AI may recommend increased autonomy, but it may not grant itself increased autonomy.

## Principle 2: AI Is the Operator, Not Merely the Assistant

The AI executes the operational process rather than merely generating instructions for a human to carry out.

The AI may create, invoke, interpret, and improve the capabilities it uses. Humans provide authority, judgment, and approval where required, but routine execution is designed around AI operation.

## Principle 3: Work Is Distributed Across a Moving Determinism Boundary

Responsibility is deliberately allocated among deterministic capability, procedural guidance, and AI reasoning.

These are not lifecycle stages. They are mechanisms used during execution and potential destinations for learning after execution.

The allocation is not permanent. Evidence can justify moving behavior from one mechanism to another when doing so improves reliability, efficiency, clarity, or adaptability.

## Principle 4: The SOP Is an Operational Control Plane

The SOP is a persistent, machine-consumable operational contract.

It should define the intended outcome, available capabilities, normal execution path, known failure handling, evidence requirements, validation expectations, and escalation conditions.

The SOP operates within the Governance Policy and may not override human-defined authority boundaries.

## Principle 5: Execution Must Produce Outcome Evidence

The system learns from observed results rather than AI confidence alone.

An execution should leave enough evidence to determine what happened, whether the intended result occurred, what assumptions were violated, and where the process or implementation failed.

## Principle 6: Failure Determines Where the System Evolves

A failure is diagnostic evidence, not merely a reason to retry.

After execution is observed and evaluated, the system should classify the weakness and determine where the resulting learning should persist: deterministic capability, procedural guidance, reasoning knowledge, validation, or governance.

The governing rule is:

> **Correct the weakness at the lowest layer capable of handling it reliably without unnecessarily removing adaptability.**

A proposed Governance Policy change requires human authority.

## Principle 7: Learning Must Change a Persistent Operational Asset

Useful learning must survive the current execution.

A lesson may become improved code, a new tool, a modified capability, an SOP change, a validation rule, durable reasoning guidance, reusable knowledge, or an approved governance change.

## Principle 8: Improvement Must Compound Through Reuse

The output of one cycle becomes part of the operating system of the next.

Repeated execution should progressively reduce unnecessary repeated reasoning, repeated failure, and unnecessary human intervention while preserving AI judgment and human authority where they remain necessary.

## Related Documents

- [Formal Definition](ai-flywheel-definition.md)
- [Lifecycle](lifecycle.md)
- [Conformance Criteria](conformance.md)
- [Architecture and Diagrams](../architecture/README.md)
- [Principle Research Dossiers](../research/principles/README.md)
