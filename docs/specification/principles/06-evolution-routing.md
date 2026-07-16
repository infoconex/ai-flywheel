---
title: "Principle 6: Failure Determines Where the System Evolves"
document_type: "principle"
section: "specification"
status: "canonical"
canonical: true
order: 6
summary: "A failure is diagnostic evidence, not merely a reason to retry."
principle_number: 6
principle_id: "evolution-routing"
last_reviewed: "2026-07-16"
tags:
  - "principles"
---

# Principle 6: Failure Determines Where the System Evolves

A failure is diagnostic evidence, not merely a reason to retry.

## Purpose

When execution reveals a weakness, the AI Flywheel should determine **where the correction belongs** before changing the system.

Different failures have different causes. Treating every failure as a prompt problem, code problem, or retry problem creates brittle systems and repeated mistakes.

The Flywheel therefore classifies the weakness and routes the resulting learning to the most appropriate persistent destination.

## Possible Adaptation Destinations

### Deterministic Capability

Use this destination when the problem is reliably repeatable and can be corrected through code, tools, scripts, services, or another deterministic implementation.

### Procedural Guidance

Use this destination when the process is incomplete, ambiguous, incorrectly ordered, or missing known exception handling.

### Reasoning Knowledge

Use this destination when the condition requires contextual judgment that should remain adaptable but would benefit from durable guidance, examples, heuristics, or lessons.

### Validation

Use this destination when the system lacks a reliable way to determine whether an action or outcome is correct.

### Governance

Use this destination when the evidence shows that authority, approval requirements, prohibited actions, or escalation rules should change.

A governance change requires human authorization under [Principle 1: Autonomy Is Bounded by Human Authority](01-human-authority.md).

## The Evolution Routing Rule

The governing rule is:

> **Correct the weakness at the lowest layer capable of handling it reliably without unnecessarily removing adaptability.**

This prevents the system from solving every recurring problem with additional AI reasoning when a more reliable mechanism exists.

It also prevents the system from hard-coding behavior that still requires judgment.

## Examples

A deterministic implementation bug should normally be corrected in code rather than hidden behind new prompt instructions.

A missing known exception should normally become procedural guidance rather than forcing the AI to rediscover the response each time.

A contextual edge case that varies substantially may remain in AI reasoning rather than becoming brittle deterministic logic.

A repeated human approval may reveal a candidate for increased delegated authority, but the AI may only propose that governance change rather than grant the authority itself.

## Evolution Routing Moves the Determinism Boundary

Routing a learning to a different mechanism can change where responsibility resides.

For example:

**AI reasoning → SOP** when a recurring judgment becomes a known procedure.

**SOP → deterministic capability** when a stable procedure becomes reliably automatable.

**Deterministic capability → SOP or AI reasoning** when evidence shows that a hard-coded assumption is too brittle.

This is how [Principle 3: Work Is Distributed Across a Moving Determinism Boundary](03-moving-determinism-boundary.md) changes responsibility allocation over time.

## Adaptation Must Be Validated

Choosing a destination is not enough.

The resulting change should be validated before it becomes part of future operation, with the rigor of validation matched to the consequence and type of change.

## Principle Navigation

- [Principles Index](README.md)
- **Previous Principle:** [Principle 5: Execution Must Produce Outcome Evidence](05-outcome-evidence.md)
- **Next Principle:** [Principle 7: Learning Must Change a Persistent Operational Asset](07-persistent-learning.md)

## Related Documents

- [Learning Architecture](../../architecture/learning-view.md)
