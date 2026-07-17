# AI Flywheel Formal Definition

## Definition

The **AI Flywheel** is an evidence-driven operating model in which AI does not merely assist a human in performing work, but progressively builds, operates, observes, and improves the system by which the work is performed.

A human authorizes the Flywheel to operate and defines the boundaries of that authority. Once authorized, the AI operates autonomously within those boundaries until it reaches a condition requiring human judgment or human approval.

During execution, the system combines three operating mechanisms:

1. **Deterministic capability** for work that can be performed reliably and repeatably through code or other deterministic tools.
2. **Procedural guidance, expressed as an SOP**, for defining how work should be performed, how capabilities should be used, how known conditions should be handled, and when escalation is required.
3. **AI reasoning** for interpretation, orchestration, judgment, adaptation, ambiguity resolution, and conditions that cannot yet be reliably reduced to deterministic behavior.

These mechanisms are not sequential lifecycle stages. They participate in execution together. After execution produces evidence, the Flywheel evaluates what happened and determines where any resulting learning should persist.

The core cycle is:

**Execute → Observe → Evaluate → Classify → Adapt → Validate → Persist → Reuse**

Governance applies throughout that cycle. It determines whether an action is authorized, requires human approval, requires human judgment, or is prohibited.

The result is a compounding system in which repeated execution progressively improves reliability, capability, efficiency, and appropriately bounded autonomy.

## Human Authority and Governance

Human authority establishes the scope within which the Flywheel may operate. That authority should be expressed through a persistent **Governance Policy** defining:

- the actions the AI may perform autonomously,
- the changes the AI may make autonomously,
- decisions requiring human approval,
- conditions requiring human judgment,
- prohibited actions,
- applicable risk or consequence thresholds,
- and escalation requirements.

Human authority is not a fourth execution layer. It is the source of governance over the system.

The governing relationship is:

> **Human authority authorizes. Governance constrains. The SOP guides. AI reasoning orchestrates. Deterministic capability performs repeatable work.**

### Uncertainty Boundary

The AI should request human judgment when available evidence is insufficient, contradictory, or too ambiguous to support a responsible decision.

The **Uncertainty Boundary** is an evidence-based escalation boundary. Its purpose is to prevent the system from manufacturing certainty when it does not know enough.

### Authority Boundary

The AI should request human approval when it can identify a preferred action or improvement but has not been granted authority to make that decision or change autonomously.

A core governance rule is:

> **The AI may recommend increased autonomy, but it may not grant itself increased autonomy.**

The Flywheel may become more conservative by escalating more often when unexpected risk is discovered. Expanding its authority requires human authorization.

## Runtime Responsibilities

### Governance Policy

The Governance Policy defines what the Flywheel is permitted to do and when human authority must be invoked. The SOP may not override the Governance Policy.

### Procedural SOP

The SOP is the operational control plane. It defines the intended outcome, process, available capabilities, normal execution path, known exception handling, evidence expectations, validation requirements, and escalation conditions.

### AI Reasoning

AI reasoning interprets the situation, follows and applies the SOP, orchestrates capabilities, handles ambiguity, interprets results, and determines when escalation conditions have been reached.

### Deterministic Capability

Deterministic code and tools perform stable, repeatable, testable operations when the problem is sufficiently understood.

For a visual explanation of these runtime relationships, see the [Core Operating Model](../architecture/operating-model.md) and [Runtime Architecture](../architecture/runtime-view.md).

## Learning Destinations

After execution, observation, evaluation, and classification, the Flywheel asks:

> **Where should this learning live?**

A learning may become:

- a new or improved deterministic capability,
- procedural knowledge in the SOP,
- reasoning knowledge such as durable guidance, examples, heuristics, or memory,
- stronger validation,
- or a proposed Governance Policy change requiring human authority.

This distinction is important: deterministic code, procedural SOP, and AI reasoning are used **during execution**, while the decision to move responsibility among them occurs **after execution produces evidence**.

## The Moving Determinism Boundary

The boundary among deterministic capability, procedural guidance, and AI reasoning is intentionally dynamic.

A recurring judgment may become a procedural rule. A stable procedure may become deterministic code. A brittle deterministic rule may move back into procedure or AI reasoning when the environment proves more variable than expected.

The **Moving Determinism Boundary** therefore asks:

> **Where should this responsibility live so that it is handled as reliably as possible without unnecessarily removing adaptability?**

## The Two Core Structural Boundaries

The AI Flywheel manages two core structural boundaries that answer different architectural questions. The Uncertainty Boundary described above is a separate evidence-based escalation condition.

### Moving Determinism Boundary

Determines **where work and learning belong** among deterministic capability, procedural knowledge, and AI reasoning.

### Authority Boundary

Determines **what the AI is permitted to decide, execute, change, or persist autonomously**.

The determinism boundary can move as the system learns. The authority boundary is governed by humans. The uncertainty boundary determines when available evidence is insufficient for responsible autonomous judgment.

## Related Specification Documents

- [Specification Overview](README.md)
- [Terminology](terminology.md)
- [Principles](principles/README.md)
- [Lifecycle](lifecycle/README.md)
- [Conformance](conformance/README.md)
- [Architecture and Diagrams](../architecture/README.md)
- [Worked Example: Software Maintenance Flywheel](../examples/software-maintenance-flywheel.md)

For comparative research, see the [research section](../research/README.md).
