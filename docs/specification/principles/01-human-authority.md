# Principle 1: Autonomy Is Bounded by Human Authority

A human authorizes the AI Flywheel to operate and defines the limits of that authority. Once authorized, the Flywheel operates on its own until it reaches a condition that requires human judgment or approval.

## Purpose

The goal is not to require a human to participate in every execution. The goal is to make autonomy clear, bounded, and governed.

Human authority establishes the scope within which the Flywheel may operate independently. Human involvement occurs when the system reaches a boundary it is not allowed or not able to cross responsibly on its own.

## Requirements

A conforming implementation must satisfy these requirements:

- A human or authorized group defines the scope of AI autonomy.
- That authority is represented through a persistent Governance Policy or equivalent control that the system can apply during operation.
- The governance model distinguishes actions the AI may perform on its own, actions requiring human approval, conditions requiring human judgment, and prohibited actions.
- Governance constrains both execution and persistent changes to the Flywheel itself.
- The system escalates when human approval or judgment is required rather than silently exceeding its authority or pretending to be certain.
- The AI may recommend increased autonomy but may not grant itself increased authority.
- The Standard Operating Procedure (SOP) and other operational assets may not override the Governance Policy.

## Operational Model

### Governance Policy

A persistent Governance Policy defines the scope of the Flywheel's authority. It should define:

- What the AI may do on its own
- What actions require human approval
- What conditions require human judgment
- What actions are prohibited
- What changes the AI may make to code, procedure, reasoning guidance, validation, or other operational assets
- Who has authority to approve particular decisions

The Governance Policy sits above the SOP. The SOP defines how work should be performed. The Governance Policy defines what the system is allowed to decide, execute, change, or persist while doing that work.

### Authority and Uncertainty Boundaries

The **Authority Boundary** is reached when the AI can determine what it recommends but is not allowed to take the action. This requires **human approval**.

The **Uncertainty Boundary** is reached when the AI does not have enough reliable evidence to determine what should happen. This requires **human judgment**.

These are different conditions. A system can be highly confident about an action it is not allowed to perform, or fully authorized to act while still lacking enough evidence to make a responsible decision.

### Governance Outcomes

A meaningful action or decision should resolve to one of four outcomes:

1. **Authorized** — the AI may proceed on its own.
2. **Approval Required** — the AI recommends an action but requires human permission.
3. **Judgment Required** — the AI requires human reasoning or context to determine the correct action.
4. **Prohibited** — the action is not allowed under the current Governance Policy.

### Human Decisions as Evidence

Human involvement should not resolve only the immediate event when the decision contains reusable learning.

A human approval or judgment may reveal a missing SOP rule, a new classification rule, a better validation step, reusable reasoning guidance, or a possible change to the AI's authority. When appropriate, that learning should be captured so future executions benefit from the decision.

A core rule remains:

> **The AI may recommend increased autonomy, but it may not grant itself increased autonomy.**

The Flywheel may become more conservative on its own by escalating more often when evidence shows greater risk or uncertainty. Expanding the system's authority requires human authorization.

## Lifecycle Relationship

This principle applies throughout the lifecycle rather than at one stage.

- **Execute:** Governance determines which actions may proceed on their own and which require escalation.
- **Observe and Evaluate:** Human decisions and governance outcomes may become part of the evidence record.
- **Classify and Adapt:** Learning may identify a governance issue or suggest a change to authority.
- **Validate and Persist:** Persistent changes are subject to authorization as well as technical validation.
- **Reuse:** Future execution inherits approved governance changes without allowing the AI to expand its own authority.

## Evidence of Implementation

Evidence supporting this principle may include:

- A persistent Governance Policy or equivalent authority definition that the system can enforce
- Clear representation of autonomous, approval-required, judgment-required, and prohibited actions
- Execution records showing approval and judgment escalations
- Evidence that prohibited actions are blocked
- Controls governing changes to code, SOPs, reasoning guidance, validation, and other persistent assets
- Records showing that authority changes require human authorization

## Non-Conforming Patterns

This principle is not satisfied when:

- Autonomy is effectively unlimited
- Authority exists only as an informal human expectation
- Governance is documented but not enforced
- The AI can bypass approval requirements during self-improvement
- The AI can silently expand its own authority
- Human intervention occurs without defined escalation conditions
- The SOP or another operational asset can override governance restrictions

## Relationships to Other Principles

- [Principle 2: AI Is the Operator, Not Merely the Assistant](02-ai-as-operator.md) depends on bounded authority so the AI can operate independently without implying unlimited autonomy.
- [Principle 4: The SOP Is an Operational Control Plane](04-sop-control-plane.md) defines procedural guidance that remains subject to governance.
- [Principle 6: Failure Determines Where the System Evolves](06-evolution-routing.md) may route learning to governance, but governance changes require human authorization.
- [Principle 7: Learning Must Change a Persistent Operational Asset](07-persistent-learning.md) requires persistent changes to be both validated and authorized.
- [Principle 8: Improvement Must Compound Through Reuse](08-compounding-reuse.md) allows capability to compound without allowing authority to expand on its own.

## Principle Navigation

- [Principles Index](README.md)
- **Next Principle:** [Principle 2: AI Is the Operator, Not Merely the Assistant](02-ai-as-operator.md)

## Related Documents

- [Governance and Escalation](../../architecture/governance-and-escalation.md)
- [Core Boundaries](../../architecture/boundaries.md)
- [Lifecycle](../lifecycle/README.md)
- [Conformance](../conformance/README.md)