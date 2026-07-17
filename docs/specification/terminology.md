# AI Flywheel Terminology

This page defines the standard terms used throughout the AI Flywheel specification.

The definitions are intentionally short. Detailed behavior and requirements remain in the linked specification documents.

## AI Flywheel

An **AI Flywheel** is an evidence-driven operating model in which AI performs work, observes outcomes, evaluates evidence, determines where learning should be applied, validates improvements, persists authorized learning, and reuses the improved system in future execution.

See the [Formal Definition](definition.md).

## Governance Policy

A **Governance Policy** is the persistent, human-authorized definition of what the AI may decide, execute, change, and persist on its own, what requires approval or human judgment, and what is prohibited.

The Governance Policy sits above the SOP and constrains both execution and persistent changes.

See [Principle 1: Autonomy Is Bounded by Human Authority](principles/01-human-authority.md).

## Standard Operating Procedure (SOP)

A **Standard Operating Procedure (SOP)** is persistent, machine-consumable guidance that describes how work should be performed, including intended outcomes, process flow, capability use, known exceptions, evidence requirements, validation, and escalation.

Within the AI Flywheel, the SOP acts as an operational control plane but remains subject to the Governance Policy.

See [Principle 4: The SOP Is an Operational Control Plane](principles/04-sop-control-plane.md).

## Deterministic Capability

A **deterministic capability** is code, a tool, script, service, rule, workflow, or other repeatable mechanism used when work can be handled more reliably through explicit implementation than through AI reasoning.

See [Principle 3: Work Is Distributed Across a Moving Determinism Boundary](principles/03-moving-determinism-boundary.md).

## Procedural Guidance

**Procedural guidance** is persistent knowledge that describes how work should be performed without fully turning that behavior into deterministic implementation. The SOP is the main form of procedural guidance in the AI Flywheel.

See [Principle 4: The SOP Is an Operational Control Plane](principles/04-sop-control-plane.md).

## AI Reasoning

**AI reasoning** is the interpretation, judgment, orchestration, problem solving, and adaptation performed by the AI when the correct action cannot or should not be fully predetermined by code or fixed procedure.

See [Principle 3: Work Is Distributed Across a Moving Determinism Boundary](principles/03-moving-determinism-boundary.md).

## Outcome Evidence

**Outcome evidence** is observable information that is sufficient to judge what actually happened during execution and whether the intended outcome was achieved. It may include tool outputs, state changes, logs, tests, external signals, user feedback, or human decisions.

Model confidence, task completion, or the absence of an exception is not enough by itself.

See [Principle 5: Execution Must Produce Outcome Evidence](principles/05-outcome-evidence.md).

## Persistent Operational Asset

A **persistent operational asset** is something durable that can change future execution. Examples include deterministic capability, code, SOP guidance, validation rules, reasoning knowledge, reusable examples, and approved governance changes.

Storage alone is not enough. The asset must be available for future use.

See [Principle 7: Learning Must Change a Persistent Operational Asset](principles/07-persistent-learning.md).

## Moving Determinism Boundary

The **Moving Determinism Boundary** determines where work and learning should live among deterministic capability, procedural guidance, and AI reasoning.

The boundary can move in either direction. Responsibility may move toward more deterministic handling as behavior becomes stable, or back toward procedure or reasoning when code becomes too brittle or the situation depends on context.

See [Principle 3: Work Is Distributed Across a Moving Determinism Boundary](principles/03-moving-determinism-boundary.md).

## Authority Boundary

The **Authority Boundary** separates actions, decisions, and persistent changes the AI may perform on its own from those that require human approval or are prohibited.

The AI may recommend more authority but may not grant itself more authority.

See [Principle 1: Autonomy Is Bounded by Human Authority](principles/01-human-authority.md).

## Uncertainty Boundary

The **Uncertainty Boundary** is reached when the available evidence is not enough for the AI to responsibly decide what should happen, even when the AI may otherwise be allowed to act.

Crossing the uncertainty boundary requires human judgment or more evidence.

See [Principle 1: Autonomy Is Bounded by Human Authority](principles/01-human-authority.md).

## Evolution Routing

**Evolution Routing** is the process of classifying a weakness or learning opportunity and sending the improvement to the part of the system best suited to own it.

The AI Flywheel uses this routing rule:

> **Correct the weakness at the lowest layer capable of handling it reliably without unnecessarily removing adaptability.**

See [Principle 6: Failure Determines Where the System Evolves](principles/06-evolution-routing.md).

## Validation

**Validation** is the process of using evidence to determine whether a proposed change works well enough to trust in future use. Validation is different from authorization: a change may work but still not be authorized, or it may be authorized but not yet proven to work.

See [Stage 6: Validate](lifecycle/06-validate.md).

## Conformance

**Conformance** means showing, with evidence, that an implementation satisfies the complete AI Flywheel specification.

The conformance model gets its assessment areas from the specification and does not define the methodology on its own.

See [AI Flywheel Conformance](conformance/README.md).

## Related Documents

- [AI Flywheel Specification](README.md)
- [Formal Definition](definition.md)
- [Principles](principles/README.md)
- [Lifecycle](lifecycle/README.md)
- [Architecture and Diagrams](../architecture/README.md)
