# AI Flywheel Formal Definition

## Definition

The **AI Flywheel** is an evidence-driven operating model in which AI does not merely assist a human in performing work, but progressively builds, operates, observes, and improves the system by which the work is performed.

The system deliberately distributes responsibility across three execution layers:

1. **Deterministic code** for work that can be made reliably repeatable.
2. **Procedural guidance, expressed as an SOP**, for defining how work should be performed, how known conditions should be handled, and how exceptions should be governed.
3. **AI reasoning** for situations requiring interpretation, judgment, adaptation, or handling of conditions that cannot yet be reliably reduced to deterministic logic.

Each execution produces evidence about the effectiveness of those layers. The AI evaluates the outcome, identifies weaknesses or failures, determines which layer should change, applies or recommends the appropriate improvement, preserves the resulting knowledge, and uses the improved system in future executions.

The core cycle is:

**Execute → Observe → Evaluate → Classify → Adapt → Validate → Persist → Reuse**

The result is a compounding system in which repeated execution progressively improves reliability, capability, efficiency, and autonomy.

## The Three Execution Layers

### Deterministic Code

Code should own behavior that can be made reliably repeatable, testable, and efficient. It is the preferred execution layer when the problem is sufficiently understood and stable.

### Procedural Guidance

The SOP should own process knowledge, orchestration rules, policies, known exceptions, escalation conditions, evidence requirements, and instructions for using available capabilities.

### AI Reasoning

AI reasoning should own work that requires interpretation, contextual judgment, ambiguity resolution, adaptation, or handling of conditions that are not yet predictable enough to encode deterministically.

## The Moving Determinism Boundary

The boundary among code, procedure, and AI reasoning is intentionally dynamic.

A recurring judgment may become a procedural rule. A stable procedure may become deterministic code. A brittle deterministic rule may move back into procedure or AI reasoning when the environment proves more variable than expected.

The AI Flywheel therefore improves not only the artifacts used to perform work, but also the allocation of responsibility among those artifacts.

## Related Specification Documents

- [Principles](principles.md)
- [Lifecycle](lifecycle.md)
- [Conformance criteria](conformance.md)

For comparative research, see the [prior-art overview](../research/prior-art-overview.md).
