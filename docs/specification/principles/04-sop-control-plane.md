# Principle 4: The SOP Is an Operational Control Plane

The SOP is a persistent, machine-consumable operational contract that guides how the AI Flywheel performs its work.

## Purpose

The SOP is more than documentation written for a human reader. It provides durable operational guidance that the AI can use directly during execution and across future execution contexts.

It creates a stable place for known process behavior to accumulate without forcing every recurring rule into deterministic code or requiring the AI to rediscover the same procedure repeatedly.

## Normative Requirements

A conforming implementation must satisfy the following requirements:

- A persistent operational procedure or equivalent durable guidance exists.
- The procedure is directly available to the AI during operation and survives individual execution contexts.
- The procedure defines how work should be performed with enough specificity to guide reliable execution.
- Where applicable, it defines intended outcomes, available capabilities, normal execution flow, known conditions and exceptions, failure handling, evidence expectations, validation requirements, and escalation conditions.
- The SOP guides AI reasoning without attempting to eliminate all contextual judgment.
- The SOP remains subordinate to the Governance Policy and may not expand or override human-defined authority.
- Procedural learning can update the SOP so future executions inherit improved guidance.

## Operational Model

A useful AI Flywheel SOP may contain:

- process objectives and success criteria,
- normal execution flow,
- available deterministic capabilities and how to use them,
- known conditions and exceptions,
- known failure-handling procedures,
- expected evidence and logging,
- validation requirements,
- conditions requiring AI judgment,
- and escalation conditions.

### Relationship to AI Reasoning

The SOP guides AI reasoning but does not replace it. The AI interprets the procedure in the context of the current execution, invokes capabilities as needed, and handles situations that cannot be completely specified in advance.

A strong SOP reduces unnecessary reasoning about known operational behavior while preserving flexibility for genuinely uncertain conditions.

### Relationship to Deterministic Capability

The SOP may instruct the AI to invoke deterministic capabilities for work that should not be repeatedly reasoned through. As a procedure becomes stable enough for deterministic implementation, the SOP may shift from describing how to perform the work to describing when and why the capability should be used.

### The SOP Evolves

Execution evidence may reveal that the SOP is incomplete, ambiguous, incorrect, missing an exception or validation step, or requiring unnecessary AI reasoning.

When the appropriate correction is procedural, the SOP should be updated so future executions inherit the improved guidance.

## Lifecycle Relationship

- **Execute:** the SOP guides the operational process, capability use, known exception handling, evidence expectations, and escalation.
- **Observe and Evaluate:** execution evidence may reveal weaknesses or ambiguity in the procedure.
- **Classify:** the Flywheel determines whether a learning belongs in procedural guidance.
- **Adapt:** the SOP is changed when procedure is the correct destination.
- **Validate:** procedural changes are tested against representative scenarios or other appropriate evidence.
- **Persist and Reuse:** the improved SOP becomes durable guidance for future execution.

## Evidence of Implementation

Evidence supporting this principle may include:

- a persistent SOP, runbook, procedure, or equivalent machine-consumable operational artifact,
- proof that the AI directly accesses that guidance during execution,
- documented normal paths, known exceptions, evidence expectations, validation, or escalation rules,
- execution examples showing that known procedure is reused across separate contexts,
- and examples of execution learning producing durable procedural updates.

## Non-Conforming Patterns

This principle is not satisfied when:

- process knowledge exists only in transient conversation history,
- the AI must rediscover the same known procedure on every execution,
- procedural guidance is unavailable to future operation,
- the procedure is merely human documentation that the operating AI does not use,
- or the procedure can override governance restrictions.

## Relationships to Other Principles

- [Principle 1: Autonomy Is Bounded by Human Authority](01-human-authority.md) places the Governance Policy above the SOP.
- [Principle 2: AI Is the Operator, Not Merely the Assistant](02-ai-as-operator.md) describes the AI directly consuming and applying the procedure.
- [Principle 3: Work Is Distributed Across a Moving Determinism Boundary](03-moving-determinism-boundary.md) determines when responsibility should remain procedural or move elsewhere.
- [Principle 5: Execution Must Produce Outcome Evidence](05-outcome-evidence.md) supplies the evidence that can expose procedural weaknesses.
- [Principle 6: Failure Determines Where the System Evolves](06-evolution-routing.md) determines when a correction belongs in the SOP.
- [Principle 7: Learning Must Change a Persistent Operational Asset](07-persistent-learning.md) requires useful procedural learning to survive the current execution.

## Principle Navigation

- [Principles Index](README.md)
- **Previous Principle:** [Principle 3: Work Is Distributed Across a Moving Determinism Boundary](03-moving-determinism-boundary.md)
- **Next Principle:** [Principle 5: Execution Must Produce Outcome Evidence](05-outcome-evidence.md)

## Related Documents

- [Runtime Architecture](../../architecture/runtime-view.md)
- [Stage 1: Execute](../lifecycle/01-execute.md)
- [Conformance](../conformance/README.md)
