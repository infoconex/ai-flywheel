# Principle 3: Work Is Distributed Across a Moving Determinism Boundary

The AI Flywheel deliberately distributes responsibility among deterministic capability, procedural guidance, and AI reasoning.

## The Three Operating Mechanisms

### Deterministic Capability

Code, tools, scripts, services, or other executable mechanisms should own work that can be made reliably repeatable.

Deterministic capability is preferred when the expected behavior is sufficiently stable, testable, and predictable.

### Procedural Guidance

The SOP should own repeatable operational knowledge that benefits from explicit instruction but still requires orchestration, contextual interpretation, or flexible execution.

Procedural guidance describes how the process should work without requiring every decision to be hard-coded.

### AI Reasoning

AI reasoning should own work that requires interpretation, judgment, adaptation, synthesis, or handling of conditions that cannot yet be reduced reliably to deterministic behavior.

## These Are Not Lifecycle Stages

The three mechanisms are not sequential steps that occur before or after one another.

They work together during execution.

The SOP guides the process. AI reasoning interprets and orchestrates the work. Deterministic capabilities perform reliable repeatable operations when invoked.

A single execution may move between AI reasoning and deterministic tools many times while following the same procedure.

## The Boundary Moves

The allocation of responsibility is not permanent.

Execution evidence may show that a responsibility should move.

Examples include:

- a recurring AI judgment becoming a documented procedural rule,
- a stable procedural step becoming deterministic code,
- a brittle hard-coded rule moving back into procedural guidance,
- or an overly rigid procedure moving back toward AI reasoning because the environment requires more judgment.

The Flywheel therefore improves not only the implementation of the work but also **where the work belongs**.

## Direction of Movement

The Moving Determinism Boundary is explicitly bidirectional.

A common maturation path is:

**AI reasoning → procedural guidance → deterministic capability**

But increased determinism is not always an improvement.

Evidence may justify movement in the opposite direction when deterministic behavior has become brittle or assumptions have changed.

The governing objective is not maximum automation. It is the best allocation of responsibility for reliability and adaptability.

## The Core Question

After learning from execution, the Flywheel should repeatedly ask:

> **Should the AI still reason about this, should the SOP provide better guidance, or has this become predictable enough to move into deterministic capability?**

That question makes responsibility allocation itself something the system can improve over time.

## Relationship to Evolution Routing

The Moving Determinism Boundary describes **where responsibility can reside**.

[Principle 6: Failure Determines Where the System Evolves](06-evolution-routing.md) determines **where a particular learning should be applied** after execution evidence is evaluated.

Together they allow the system to change both its behavior and the mechanism responsible for that behavior.

## Principle Navigation

- [Principles Index](README.md)
- **Previous Principle:** [Principle 2: AI Is the Operator, Not Merely the Assistant](02-ai-as-operator.md)
- **Next Principle:** [Principle 4: The SOP Is an Operational Control Plane](04-sop-control-plane.md)

## Related Documents

- [Runtime Architecture](../../architecture/runtime-view.md)
- [Learning Architecture](../../architecture/learning-view.md)
- [Core Boundaries](../../architecture/boundaries.md)
- [Principle 6: Failure Determines Where the System Evolves](06-evolution-routing.md)
