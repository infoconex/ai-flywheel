# Principle 3: Work Is Distributed Across a Moving Determinism Boundary

The AI Flywheel deliberately distributes responsibility among deterministic capability, procedural guidance, and AI reasoning.

## Purpose

Different kinds of work are best handled by different mechanisms. The Flywheel should not assume that all behavior belongs in code, all behavior belongs in procedure, or all behavior should remain AI reasoning.

The allocation of responsibility should be intentional and allowed to change as evidence accumulates.

## Normative Requirements

A conforming implementation must satisfy the following requirements:

- Deterministic capability, procedural guidance, and AI reasoning are treated as distinguishable operating mechanisms.
- Responsibilities are intentionally placed in the mechanism best suited to handle them reliably while preserving necessary adaptability.
- The three mechanisms may work together during execution and are not treated as sequential lifecycle stages.
- Responsibility allocation may change when execution evidence shows that the current placement is no longer appropriate.
- Movement across the boundary must be allowed in more than one direction; increased determinism is not automatically considered improvement.

## Operational Model

### Deterministic Capability

Code, tools, scripts, services, or other executable mechanisms should own work that can be made reliably repeatable, testable, and predictable.

### Procedural Guidance

The SOP should own repeatable operational knowledge that benefits from explicit instruction but still requires orchestration, contextual interpretation, or flexible execution.

### AI Reasoning

AI reasoning should own work that requires interpretation, judgment, adaptation, synthesis, or handling of conditions that cannot yet be reduced reliably to deterministic behavior.

### The Boundary Moves

Execution evidence may show that responsibility should move. Examples include:

- a recurring AI judgment becoming a documented procedural rule,
- a stable procedural step becoming deterministic code,
- a brittle hard-coded rule moving back into procedural guidance,
- or an overly rigid procedure moving back toward AI reasoning because the environment requires more judgment.

A common maturation path is:

**AI reasoning → procedural guidance → deterministic capability**

But the boundary is explicitly bidirectional. The governing objective is not maximum automation. It is the best allocation of responsibility for reliability and adaptability.

The recurring question is:

> **Should the AI still reason about this, should the SOP provide better guidance, or has this become predictable enough to move into deterministic capability?**

## Lifecycle Relationship

- **Execute:** all three operating mechanisms work together to perform the current process.
- **Observe and Evaluate:** evidence reveals whether the current responsibility allocation is producing reliable outcomes.
- **Classify:** the Flywheel identifies whether a weakness may be caused by incorrect responsibility placement.
- **Adapt:** responsibility may move to a different mechanism.
- **Validate and Persist:** the new allocation is tested and made durable when appropriate.
- **Reuse:** future execution begins with the updated allocation.

## Evidence of Implementation

Evidence supporting this principle may include:

- an explicit explanation of which responsibilities are owned by deterministic capability, procedure, and AI reasoning,
- examples showing different mechanisms cooperating during one execution,
- examples of recurring reasoning being moved into procedure or code,
- examples of brittle deterministic or procedural behavior being moved back toward more flexible handling,
- and records showing that responsibility placement changes in response to evidence rather than fixed architectural assumptions.

## Non-Conforming Patterns

This principle is not satisfied when:

- all behavior is treated as AI reasoning without intentional responsibility allocation,
- all behavior is fixed automation with no role for adaptive judgment,
- procedural knowledge is indistinguishable from transient prompting with no durable operational role,
- the architecture assumes learning can move only toward greater determinism,
- or responsibility placement cannot change when evidence shows that the current mechanism is wrong.

## Relationships to Other Principles

- [Principle 2](02-ai-as-operator.md) describes the AI operating across these mechanisms.
- [Principle 4](04-sop-control-plane.md) defines the procedural mechanism in more detail.
- [Principle 6](06-evolution-routing.md) determines where a particular learning should be applied and can therefore move the boundary.
- [Principle 7](07-persistent-learning.md) makes a changed responsibility allocation durable.
- [Principle 8](08-compounding-reuse.md) allows improved allocations to benefit later execution.

## Principle Navigation

- [Principles Index](README.md)
- **Previous Principle:** [Principle 2: AI Is the Operator, Not Merely the Assistant](02-ai-as-operator.md)
- **Next Principle:** [Principle 4: The SOP Is an Operational Control Plane](04-sop-control-plane.md)

## Related Documents

- [Runtime Architecture](../../architecture/runtime-view.md)
- [Learning Architecture](../../architecture/learning-view.md)
- [Core Boundaries](../../architecture/boundaries.md)
- [Conformance](../conformance/README.md)