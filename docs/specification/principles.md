# AI Flywheel Principles

These principles define the expected behavior of an AI Flywheel implementation. They are intentionally stated without reference to other frameworks.

## Principle 1: AI Is the Operator, Not Merely the Assistant

The AI executes the operational process rather than merely generating instructions for a human to carry out.

The AI may create, invoke, interpret, and improve the capabilities it uses. Human oversight may remain present, but the operating model is designed around AI execution.

## Principle 2: Work Is Distributed Across a Moving Determinism Boundary

Responsibility is deliberately allocated among deterministic code, procedural guidance, and AI reasoning.

The allocation is not permanent. Evidence from execution can justify moving behavior from one layer to another when doing so improves reliability, efficiency, clarity, or adaptability.

## Principle 3: The SOP Is an Operational Control Plane

The SOP is a persistent, machine-consumable operational contract.

It should define the intended outcome, available capabilities, normal execution path, known failure handling, evidence requirements, validation expectations, escalation conditions, and circumstances requiring AI judgment.

## Principle 4: Execution Must Produce Outcome Evidence

The system learns from observed results rather than AI confidence alone.

An execution should leave enough evidence to determine what happened, whether the intended result occurred, what assumptions were violated, and where the process or implementation failed.

## Principle 5: Failure Determines Where the System Evolves

A failure is diagnostic evidence, not merely a reason to retry.

The system should classify the weakness and determine the appropriate destination for improvement: deterministic code, the SOP, validation, reusable knowledge, or continued AI reasoning.

The governing rule is:

> Correct the weakness at the lowest layer capable of handling it reliably without unnecessarily removing adaptability.

## Principle 6: Learning Must Change a Persistent Operational Asset

Useful learning must survive the current execution.

A lesson may become improved code, a new tool, a modified capability, an SOP change, a validation rule, a reusable lesson, or durable guidance for future reasoning.

## Principle 7: Improvement Must Compound Through Reuse

The output of one cycle becomes part of the operating system of the next.

Repeated execution should progressively reduce unnecessary repeated reasoning, repeated failure, and human intervention while preserving AI judgment where the environment genuinely requires it.

## Related Documents

- [Formal definition](ai-flywheel-definition.md)
- [Lifecycle](lifecycle.md)
- [Conformance criteria](conformance.md)
- [Principle research dossiers](../research/prior-art-overview.md#principle-research-dossiers)
