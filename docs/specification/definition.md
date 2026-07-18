# AI Flywheel Formal Definition

## Definition

The **AI Flywheel** is an evidence-driven operating model in which AI does not merely assist a human in performing work, but progressively builds, operates, observes, and improves the system by which the work is performed.

A human authorizes the Flywheel to operate and defines the limits of that authority. Once authorized, the AI operates on its own within those limits until it reaches a condition requiring human judgment or approval.

During execution, the system combines three operating mechanisms:

1. **Deterministic capability** for work that can be performed reliably and repeatably through code or other deterministic tools.
2. **Procedural guidance, expressed as a Standard Operating Procedure (SOP)**, for defining how work should be performed, how capabilities should be used, how known conditions should be handled, and when escalation is required.
3. **AI reasoning** for interpretation, orchestration, judgment, adaptation, ambiguity, and conditions that cannot yet be handled reliably through deterministic behavior.

These mechanisms are not sequential lifecycle stages. They work together during execution. After execution produces evidence, the Flywheel evaluates what happened and determines where any resulting learning should persist.

The core cycle is:

**Execute → Observe → Evaluate → Classify → Adapt → Validate → Persist → Reuse**

Governance applies throughout that cycle. It determines whether an action is authorized, requires human approval, requires human judgment, or is prohibited.

The result is a compounding system in which repeated execution improves reliability, capability, efficiency, and safely bounded autonomy over time.

## Human Authority and Governance

Human authority establishes the scope within which the Flywheel may operate. That authority should be expressed through a persistent **Governance Policy** defining:

- the actions the AI may perform on its own,
- the changes the AI may make on its own,
- decisions requiring human approval,
- conditions requiring human judgment,
- prohibited actions,
- applicable risk or impact thresholds,
- and escalation requirements.

Human authority is not a fourth execution layer. It is the source of governance over the system.

The governing relationship is:

> **Human authority authorizes. Governance constrains. The SOP guides. AI reasoning orchestrates. Deterministic capability performs repeatable work.**

### Uncertainty Boundary

The AI should request human judgment when the available evidence is not enough, is contradictory, or is too unclear to support a responsible decision.

The **Uncertainty Boundary** is an evidence-based escalation boundary. Its purpose is to prevent the system from pretending to be certain when it does not know enough.

### Authority Boundary

The AI should request human approval when it can identify a preferred action or improvement but has not been given authority to make that decision or change on its own.

A core governance rule is:

> **The AI may recommend increased autonomy, but it may not grant itself increased autonomy.**

The Flywheel may become more conservative by escalating more often when unexpected risk is discovered. Expanding its authority requires human authorization.

## Runtime Responsibilities

### Governance Policy

The Governance Policy defines what the Flywheel is allowed to do and when human authority must be involved. The SOP may not override the Governance Policy.

### Procedural SOP

The SOP is the operational control plane. It defines the intended outcome, process, available capabilities, normal execution path, known exception handling, evidence expectations, validation requirements, and escalation conditions.

### AI Reasoning

AI reasoning interprets the situation, follows and applies the SOP, orchestrates capabilities, handles ambiguity, interprets results, and determines when escalation conditions have been reached.

### Deterministic Capability

Deterministic code and tools perform stable, repeatable, testable operations when the problem is understood well enough.

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

The boundary among deterministic capability, procedural guidance, and AI reasoning can move as the system learns.

A recurring judgment may become a procedural rule. A stable procedure may become deterministic code. A brittle deterministic rule may move back into procedure or AI reasoning when the environment is more variable than expected.

The **Moving Determinism Boundary** therefore asks:

> **Where should this responsibility live so that it is handled as reliably as possible without removing flexibility that is still needed?**

## The Two Core Structural Boundaries

The AI Flywheel manages two core structural boundaries that answer different questions. The Uncertainty Boundary described above is a separate evidence-based escalation condition.

### Moving Determinism Boundary

Determines **where work and learning belong** among deterministic capability, procedural knowledge, and AI reasoning.

### Authority Boundary

Determines **what the AI is allowed to decide, execute, change, or persist on its own**.

The determinism boundary can move as the system learns. The authority boundary is governed by humans. The uncertainty boundary determines when the available evidence is not enough for responsible AI judgment.

## Related Specification Documents

- [Specification Overview](README.md)
- [Terminology](terminology.md)
- [Principles](principles/README.md)
- [Lifecycle](lifecycle/README.md)
- [Conformance](conformance/README.md)
- [Architecture and Diagrams](../architecture/README.md)
- [Worked Example: Software Maintenance Flywheel](../examples/software-maintenance-flywheel.md)

For comparative research, see the [research section](../research/README.md).