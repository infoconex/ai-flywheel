# Principle 4: The SOP Is an Operational Control Plane

The SOP is a persistent, machine-consumable operational contract that guides how the AI Flywheel performs its work.

## Purpose

The SOP is more than documentation written for a human reader.

It provides persistent operational guidance that the AI can use directly during execution.

The SOP should make the intended process explicit enough that the AI can understand:

- what outcome is expected,
- what capabilities are available,
- how normal execution should proceed,
- what known exceptions may occur,
- what evidence should be produced,
- how results should be validated,
- and when escalation is required.

## What the SOP Should Define

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

The SOP should provide enough structure for reliable operation without attempting to eliminate all AI judgment.

## Relationship to AI Reasoning

The SOP guides AI reasoning but does not replace it.

The AI interprets the procedure in the context of the current execution, invokes capabilities as needed, and handles situations that cannot be completely specified in advance.

A strong SOP reduces unnecessary reasoning about known operational behavior while preserving flexibility for genuinely uncertain conditions.

## Relationship to Deterministic Capability

The SOP may instruct the AI to invoke deterministic capabilities for work that should not be repeatedly reasoned through.

As the Flywheel learns, a procedural step may become stable enough to move into deterministic implementation. The SOP then changes from describing how to perform the work to describing when and why the deterministic capability should be used.

This movement is governed by [Principle 3: Work Is Distributed Across a Moving Determinism Boundary](03-moving-determinism-boundary.md).

## Relationship to Governance

The Governance Policy sits above the SOP.

The SOP defines **how the work should be performed**.

The Governance Policy defines **what the Flywheel is authorized to do**.

The SOP may define escalation conditions, but it may not expand the AI's authority or override a governance restriction. This authority model is defined by [Principle 1: Autonomy Is Bounded by Human Authority](01-human-authority.md).

## The SOP Evolves

Execution evidence may reveal that the SOP is:

- incomplete,
- ambiguous,
- incorrect,
- missing an exception,
- missing a validation step,
- or requiring unnecessary AI reasoning.

When the appropriate correction is procedural, the SOP should be updated so future executions inherit the improved guidance. The choice of where a correction belongs is governed by [Principle 6: Failure Determines Where the System Evolves](06-evolution-routing.md).

## Operational Intent

The SOP acts as the persistent bridge between human-defined process knowledge and autonomous AI execution.

It allows operational knowledge to survive individual context windows and provides a stable place for known behavior to accumulate without forcing that behavior prematurely into deterministic code.

## Principle Navigation

- [Principles Index](README.md)
- **Previous Principle:** [Principle 3: Work Is Distributed Across a Moving Determinism Boundary](03-moving-determinism-boundary.md)
- **Next Principle:** [Principle 5: Execution Must Produce Outcome Evidence](05-outcome-evidence.md)

## Related Documents

- [Runtime Architecture](../../architecture/runtime-view.md)
