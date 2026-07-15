# AI Flywheel Formal Definition

## Definition

The **AI Flywheel** is an evidence-driven operating model in which AI does not merely assist a human in performing work, but progressively builds, operates, observes, and improves the system by which the work is performed.

The system deliberately distributes responsibility across three execution layers:

1. **Deterministic code** for work that can be made reliably repeatable.
2. **Procedural guidance, expressed as an SOP**, for defining how work should be performed, how known conditions should be handled, and how exceptions should be governed.
3. **AI reasoning** for situations requiring interpretation, judgment, adaptation, or handling of conditions that cannot yet be reliably reduced to deterministic logic.

These execution layers operate within explicit **human-defined authority boundaries**. Human authority is not a fourth execution layer. It is a governance layer that determines what the AI may do autonomously, what requires human approval, and when uncertainty requires human judgment.

Each execution produces evidence about the effectiveness of the system. The AI evaluates the outcome, identifies weaknesses or failures, determines which layer should change, determines whether it is authorized to make that change, applies or proposes the appropriate improvement, preserves validated learning, and uses the improved system in future executions.

The core cycle is:

**Execute → Observe → Evaluate → Classify → Determine Authority → Adapt → Validate → Approve if Required → Persist → Reuse**

The result is a compounding system in which repeated execution progressively improves reliability, capability, efficiency, and appropriately bounded autonomy.

## The Three Execution Layers

### Deterministic Code

Code should own behavior that can be made reliably repeatable, testable, and efficient. It is the preferred execution layer when the problem is sufficiently understood and stable.

### Procedural Guidance

The SOP should own process knowledge, orchestration rules, policies, known exceptions, escalation conditions, authority constraints, evidence requirements, and instructions for using available capabilities.

### AI Reasoning

AI reasoning should own work that requires interpretation, contextual judgment, ambiguity resolution, adaptation, or handling of conditions that are not yet predictable enough to encode deterministically.

## Human Authority and Bounded Autonomy

The AI Flywheel should operate autonomously only within explicitly delegated authority.

Two distinct gates govern escalation:

### Uncertainty Gate

The AI should request human judgment when available evidence is insufficient, contradictory, or too ambiguous to support a responsible decision.

The purpose of the uncertainty gate is to prevent the system from manufacturing certainty when it does not know enough.

### Authority Gate

The AI should request human approval when it can identify a preferred action or improvement but is not authorized to make that decision or change autonomously.

Authority boundaries may depend on consequence, risk, policy, security, business impact, regulatory obligations, or explicit organizational rules.

Human input should itself become execution evidence. When appropriate, repeated human decisions may be converted into clearer policy, better escalation rules, improved classification guidance, or newly delegated authority. The goal is not to eliminate human involvement, but to eliminate unnecessary repeated involvement while preserving decisions that should remain under human control.

## The Moving Determinism Boundary

The boundary among code, procedure, and AI reasoning is intentionally dynamic.

A recurring judgment may become a procedural rule. A stable procedure may become deterministic code. A brittle deterministic rule may move back into procedure or AI reasoning when the environment proves more variable than expected.

The AI Flywheel therefore improves not only the artifacts used to perform work, but also the allocation of responsibility among those artifacts.

## The Authority Boundary

The authority boundary is distinct from the determinism boundary.

The determinism boundary asks:

> Should this responsibility belong to deterministic code, procedural guidance, or AI reasoning?

The authority boundary asks:

> Is the AI authorized to make this decision or change on its own?

A mature AI Flywheel should improve its ability to operate autonomously without assuming unlimited authority. Autonomy may expand when evidence, policy, and human delegation justify it, while consequential decisions may remain permanently subject to human control.

## Related Specification Documents

- [Principles](principles.md)
- [Lifecycle](lifecycle.md)
- [Conformance criteria](conformance.md)

For comparative research, see the [prior-art overview](../research/prior-art-overview.md).