# Principle 1: Autonomy Is Bounded by Human Authority

A human authorizes the AI Flywheel to operate and defines the boundaries of that authority. Once authorized, the Flywheel operates autonomously until it reaches a condition requiring human judgment or human approval.

## Purpose

The goal is not to require a human to participate in every execution. The goal is to make autonomy explicit, bounded, and governable.

Human authority establishes the scope within which the Flywheel may operate independently. Human involvement occurs when the system reaches a boundary it is not permitted or not able to cross responsibly on its own.

## Normative Requirements

A conforming implementation must satisfy the following requirements:

- A human or authorized governing body defines the scope of AI autonomy.
- That authority is represented through a persistent Governance Policy or equivalent control that the system can apply during operation.
- The governance model distinguishes actions the AI may perform autonomously, actions requiring human approval, conditions requiring human judgment, and prohibited actions.
- Governance constrains both operational execution and persistent adaptation of the Flywheel itself.
- The system escalates when human approval or judgment is required rather than silently exceeding authority or manufacturing certainty.
- The AI may recommend increased autonomy but may not grant itself increased authority.
- The SOP and other operational assets may not override the Governance Policy.

## Operational Model

### Governance Policy

A persistent Governance Policy defines the scope of the Flywheel's authority. It should define:

- what the AI may do autonomously,
- what actions require human approval,
- what conditions require human judgment,
- what actions are prohibited,
- what changes the AI may make to code, procedure, reasoning guidance, validation, or other operational assets,
- and who has authority to approve particular decisions.

The Governance Policy sits above the SOP. The SOP defines how work should be performed. The Governance Policy defines what the system is permitted to decide, execute, change, or persist while performing that work.

### Authority and Uncertainty Boundaries

The **Authority Boundary** is reached when the AI can determine what it recommends but is not authorized to take the action. This requires **human approval**.

The **Uncertainty Boundary** is reached when the AI does not have enough reliable evidence to determine what should happen. This requires **human judgment**.

These conditions are deliberately separate. A system can be highly confident about an action it is not authorized to perform, or fully authorized to act while still lacking enough evidence to make a responsible decision.

### Governance Outcomes

A meaningful action or decision should resolve to one of four outcomes:

1. **Authorized** — the AI may proceed autonomously.
2. **Approval Required** — the AI recommends an action but requires human permission.
3. **Judgment Required** — the AI requires human reasoning or context to determine the correct action.
4. **Prohibited** — the action is not permitted under the current Governance Policy.

### Human Decisions as Evidence

Human involvement should not resolve only the immediate event when the decision contains reusable learning.

A human approval or judgment may reveal a missing SOP rule, a new classification rule, a better validation step, a reusable reasoning guideline, or a possible change to delegated authority. When appropriate, that learning should be captured so future executions benefit from the decision.

A core rule remains:

> **The AI may recommend increased autonomy, but it may not grant itself increased autonomy.**

The Flywheel may become more conservative on its own by escalating more often when evidence indicates greater risk or uncertainty. Expanding the system's authority requires human authorization.

## Lifecycle Relationship

This principle applies continuously rather than at a single lifecycle stage.

- **Execute:** governance determines which actions may proceed autonomously and which require escalation.
- **Observe and Evaluate:** human decisions and governance outcomes may become part of the evidence record.
- **Classify and Adapt:** a learning may identify a governance issue or propose a change to delegated authority.
- **Validate and Persist:** persistent changes are subject to authorization as well as technical validation.
- **Reuse:** future execution inherits approved governance changes without allowing the AI to expand its own authority.

## Evidence of Implementation

Evidence supporting this principle may include:

- a persistent Governance Policy or equivalent machine-enforceable authority definition,
- explicit representation of autonomous, approval-required, judgment-required, and prohibited actions,
- execution records showing approval and judgment escalations,
- enforcement evidence showing that prohibited actions are blocked,
- controls governing changes to code, SOPs, reasoning guidance, validation, and other persistent assets,
- and records showing that authority changes require human authorization.

## Non-Conforming Patterns

This principle is not satisfied when:

- autonomy is effectively unlimited,
- authority exists only as informal human expectation,
- governance is documented but not enforced,
- the AI can bypass approval requirements during self-improvement,
- the AI can silently expand its own authority,
- human intervention occurs without defined escalation conditions,
- or the SOP or another operational asset can override governance restrictions.

## Relationships to Other Principles

- [Principle 2](02-ai-as-operator.md) depends on bounded authority so the AI can operate independently without implying unlimited autonomy.
- [Principle 4](04-sop-control-plane.md) defines procedural guidance that remains subordinate to governance.
- [Principle 6](06-evolution-routing.md) may route a learning to governance, but governance changes require human authorization.
- [Principle 7](07-persistent-learning.md) requires persistent changes to be both validated and authorized.
- [Principle 8](08-compounding-reuse.md) allows capability to compound without allowing authority to expand uncontrolled.

## Principle Navigation

- [Principles Index](README.md)
- **Next Principle:** [Principle 2: AI Is the Operator, Not Merely the Assistant](02-ai-as-operator.md)

## Related Documents

- [Governance and Escalation](../../architecture/governance-and-escalation.md)
- [Core Boundaries](../../architecture/boundaries.md)
- [Lifecycle](../lifecycle/README.md)
- [Conformance](../conformance/README.md)