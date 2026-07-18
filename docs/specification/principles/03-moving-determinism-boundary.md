# Principle 3: Work Is Distributed Across a Moving Determinism Boundary

The AI Flywheel deliberately divides responsibility among deterministic capability, procedural guidance, and AI reasoning.

## Purpose

Different kinds of work are best handled in different ways. The Flywheel should not assume that all behavior belongs in code, all behavior belongs in procedure, or all behavior should remain in AI reasoning.

Responsibility should be placed intentionally and allowed to move as evidence accumulates.

## Requirements

A conforming implementation must satisfy these requirements:

- Deterministic capability, procedural guidance, and AI reasoning are treated as separate operating mechanisms.
- Responsibilities are intentionally placed in the mechanism best suited to handle them reliably while preserving needed flexibility.
- The three mechanisms may work together during execution and are not treated as sequential lifecycle stages.
- Responsibility may move when execution evidence shows that the current placement is no longer working well.
- Movement across the boundary must be allowed in more than one direction; more determinism is not automatically an improvement.

## Operational Model

### Deterministic Capability

Code, tools, scripts, services, or other executable mechanisms should own work that can be made reliably repeatable, testable, and predictable.

### Procedural Guidance

The Standard Operating Procedure (SOP) should own repeatable operational knowledge that benefits from clear instructions but still requires orchestration, context, or flexible execution.

### AI Reasoning

AI reasoning should own work that requires interpretation, judgment, adaptation, synthesis, or handling conditions that cannot yet be reduced reliably to deterministic behavior.

### The Boundary Moves

Execution evidence may show that responsibility should move. Examples include:

- A recurring AI judgment becoming a documented procedure
- A stable procedural step becoming deterministic code
- A brittle hard-coded rule moving back into procedural guidance
- An overly rigid procedure moving back toward AI reasoning because the environment requires more judgment

A common path is:

**AI reasoning → procedural guidance → deterministic capability**

But the boundary can move in either direction. The goal is not maximum automation. The goal is to put responsibility where it can be handled most reliably without removing flexibility that is still needed.

The recurring question is:

> **Should the AI still reason about this, should the SOP provide better guidance, or has this become predictable enough to move into deterministic capability?**

## Lifecycle Relationship

- **Execute:** All three operating mechanisms work together to perform the current process.
- **Observe and Evaluate:** Evidence shows whether the current responsibility placement is producing reliable outcomes.
- **Classify:** The Flywheel identifies whether a weakness may be caused by responsibility being in the wrong place.
- **Adapt:** Responsibility may move to a different mechanism.
- **Validate and Persist:** The new placement is tested and made durable when appropriate.
- **Reuse:** Future execution begins with the updated placement.

## Evidence of Implementation

Evidence supporting this principle may include:

- A clear explanation of which responsibilities are owned by deterministic capability, procedure, and AI reasoning
- Examples showing different mechanisms working together during one execution
- Examples of recurring reasoning being moved into procedure or code
- Examples of brittle deterministic or procedural behavior being moved back toward more flexible handling
- Records showing that responsibility placement changes because of evidence rather than fixed design assumptions

## Non-Conforming Patterns

This principle is not satisfied when:

- All behavior is treated as AI reasoning without intentional responsibility placement
- All behavior is fixed automation with no role for adaptive judgment
- Procedural knowledge is indistinguishable from temporary prompting with no durable operational role
- The architecture assumes learning can move only toward more determinism
- Responsibility cannot move when evidence shows that the current mechanism is wrong

## Relationships to Other Principles

- [Principle 2: AI Is the Operator, Not Merely the Assistant](02-ai-as-operator.md) describes the AI operating across these mechanisms.
- [Principle 4: The SOP Is an Operational Control Plane](04-sop-control-plane.md) defines the procedural mechanism in more detail.
- [Principle 6: Failure Determines Where the System Evolves](06-evolution-routing.md) determines where a particular learning should be applied and can therefore move the boundary.
- [Principle 7: Learning Must Change a Persistent Operational Asset](07-persistent-learning.md) makes a changed responsibility placement durable.
- [Principle 8: Improvement Must Compound Through Reuse](08-compounding-reuse.md) allows improved placements to benefit later execution.

## Principle Navigation

- [Principles Index](README.md)
- **Previous Principle:** [Principle 2: AI Is the Operator, Not Merely the Assistant](02-ai-as-operator.md)
- **Next Principle:** [Principle 4: The SOP Is an Operational Control Plane](04-sop-control-plane.md)

## Related Documents

- [Runtime Architecture](../../architecture/runtime-view.md)
- [Learning Architecture](../../architecture/learning-view.md)
- [Core Boundaries](../../architecture/boundaries.md)
- [Conformance](../conformance/README.md)