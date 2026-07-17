# AI Flywheel Terminology

This page defines the canonical vocabulary used throughout the AI Flywheel specification.

The definitions here are intentionally concise. Detailed behavior and requirements remain in the linked specification documents.

## AI Flywheel

An **AI Flywheel** is an evidence-driven operating model in which AI performs operational work, observes outcomes, evaluates evidence, determines where learning should be applied, validates improvements, persists authorized learning, and reuses the improved operating system in future execution.

See the [Formal Definition](definition.md).

## Governance Policy

A **Governance Policy** is the persistent human-authorized definition of what the AI may decide, execute, change, and persist autonomously, what requires approval or human judgment, and what is prohibited.

The Governance Policy sits above the SOP and constrains both operational execution and persistent adaptation.

See [Principle 1: Autonomy Is Bounded by Human Authority](principles/01-human-authority.md).

## Standard Operating Procedure (SOP)

A **Standard Operating Procedure (SOP)** is persistent, machine-consumable procedural guidance describing how operational work should be performed, including intended outcomes, process flow, capability use, known exceptions, evidence requirements, validation, and escalation.

Within the AI Flywheel, the SOP acts as an operational control plane but remains subordinate to the Governance Policy.

See [Principle 4: The SOP Is an Operational Control Plane](principles/04-sop-control-plane.md).

## Deterministic Capability

A **deterministic capability** is code, a tool, script, service, rule, workflow, or other repeatable mechanism used when behavior can be performed more reliably through explicit implementation than through contextual AI reasoning.

See [Principle 3: Work Is Distributed Across a Moving Determinism Boundary](principles/03-moving-determinism-boundary.md).

## Procedural Guidance

**Procedural guidance** is persistent knowledge that describes how work should be performed without fully encoding the behavior as deterministic implementation. The SOP is the primary expression of procedural guidance in the AI Flywheel.

See [Principle 4: The SOP Is an Operational Control Plane](principles/04-sop-control-plane.md).

## AI Reasoning

**AI reasoning** is the contextual interpretation, judgment, orchestration, problem solving, and adaptation performed by the AI when the correct action cannot or should not be fully predetermined by deterministic capability or fixed procedure.

See [Principle 3: Work Is Distributed Across a Moving Determinism Boundary](principles/03-moving-determinism-boundary.md).

## Outcome Evidence

**Outcome evidence** is observable information sufficient to assess what actually occurred during execution and whether the intended outcome was achieved. It may include tool outputs, state changes, logs, tests, external signals, user feedback, or human decisions.

Model confidence, task completion, or the absence of an exception is not sufficient evidence by itself.

See [Principle 5: Execution Must Produce Outcome Evidence](principles/05-outcome-evidence.md).

## Persistent Operational Asset

A **persistent operational asset** is a durable artifact that can change future execution. Examples include deterministic capability, code, SOP guidance, validation rules, reasoning knowledge, reusable examples, and approved governance changes.

Storage alone is not sufficient. The asset must be available for operational reuse.

See [Principle 7: Learning Must Change a Persistent Operational Asset](principles/07-persistent-learning.md).

## Moving Determinism Boundary

The **Moving Determinism Boundary** determines where work and learning should reside among deterministic capability, procedural guidance, and AI reasoning.

The boundary is bidirectional. Responsibility may move toward greater determinism as behavior becomes stable, or back toward procedure or reasoning when deterministic implementation becomes brittle or context-dependent.

See [Principle 3: Work Is Distributed Across a Moving Determinism Boundary](principles/03-moving-determinism-boundary.md).

## Authority Boundary

The **Authority Boundary** separates actions, decisions, and persistent changes the AI is authorized to perform autonomously from those that require human approval or are prohibited.

The AI may recommend an expansion of authority but may not grant itself additional authority.

See [Principle 1: Autonomy Is Bounded by Human Authority](principles/01-human-authority.md).

## Uncertainty Boundary

The **Uncertainty Boundary** is reached when available evidence is insufficient for the AI to responsibly determine what should happen, even when the AI may otherwise be authorized to act.

Crossing the uncertainty boundary requires human judgment or additional evidence.

See [Principle 1: Autonomy Is Bounded by Human Authority](principles/01-human-authority.md).

## Evolution Routing

**Evolution Routing** is the process of classifying a weakness or learning opportunity and directing the resulting improvement to the persistent mechanism best suited to own it.

The AI Flywheel uses the following routing rule:

> **Correct the weakness at the lowest layer capable of handling it reliably without unnecessarily removing adaptability.**

See [Principle 6: Failure Determines Where the System Evolves](principles/06-evolution-routing.md).

## Validation

**Validation** is the evidence-based assessment of a proposed adaptation before it is trusted for future use. Validation is distinct from authorization: a change may be valid but unauthorized, or authorized but not yet demonstrated to work.

See [Stage 6: Validate](lifecycle/06-validate.md).

## Conformance

**Conformance** is the evidence-based determination that an implementation satisfies the complete canonical AI Flywheel specification.

The conformance model derives its assessment areas from the specification and does not independently define the methodology.

See [AI Flywheel Conformance](conformance/README.md).

## Related Documents

- [AI Flywheel Specification](README.md)
- [Formal Definition](definition.md)
- [Principles](principles/README.md)
- [Lifecycle](lifecycle/README.md)
- [Architecture and Diagrams](../architecture/README.md)
