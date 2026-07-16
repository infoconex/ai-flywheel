# Principle 1: Autonomy Is Bounded by Human Authority

A human authorizes the AI Flywheel to operate and defines the boundaries of that authority. Once authorized, the Flywheel operates autonomously until it reaches a condition requiring human judgment or human approval.

## Purpose

The goal is not to require a human to participate in every execution. The goal is to make autonomy explicit, bounded, and governable.

A human authorizes the system to operate. The AI then performs routine work autonomously within the authority it has been granted.

Human involvement occurs when the system reaches a boundary it is not permitted or not able to cross responsibly on its own.

## Governance Policy

A persistent Governance Policy defines the scope of the Flywheel's authority.

It should define:

- what the AI may do autonomously,
- what actions require human approval,
- what conditions require human judgment,
- what actions are prohibited,
- what changes the AI may make to code, procedure, reasoning guidance, validation, or other operational assets,
- and who has authority to approve particular decisions.

The Governance Policy sits above the SOP. The SOP defines how work should be performed. The Governance Policy defines what the system is permitted to decide, execute, change, or persist while performing that work.

The SOP may not override the Governance Policy.

## The Two Escalation Boundaries

### Authority Boundary

The AI can determine what it recommends, but it is not authorized to take the action.

This requires **human approval**.

### Uncertainty Boundary

The AI does not have enough reliable evidence to determine what should happen.

This requires **human judgment**.

These conditions are deliberately separate. A system can be highly confident about an action it is not authorized to perform, or fully authorized to act while still lacking enough evidence to make a responsible decision.

## Governance Outcomes

A meaningful action or decision should resolve to one of four outcomes:

1. **Authorized** — the AI may proceed autonomously.
2. **Approval Required** — the AI recommends an action but requires human permission.
3. **Judgment Required** — the AI requires human reasoning or context to determine the correct action.
4. **Prohibited** — the action is not permitted under the current Governance Policy.

## Human Decisions Become Evidence

Human involvement should not resolve only the immediate event when the decision contains reusable learning.

A human approval or judgment may reveal:

- a missing SOP rule,
- a new classification rule,
- a better validation step,
- a reusable reasoning guideline,
- or a possible change to delegated authority.

When appropriate, that learning should be captured so future executions benefit from the decision.

## Authority Cannot Be Self-Granted

A core rule of the AI Flywheel is:

> **The AI may recommend increased autonomy, but it may not grant itself increased autonomy.**

The Flywheel may become more conservative on its own by escalating more often when evidence indicates greater risk or uncertainty.

Expanding the system's authority requires human authorization.

## Operational Intent

The intended operating pattern is:

**Human authorization → autonomous execution → escalation only when authority or uncertainty requires it → human decision captured as evidence when reusable**

The objective is not to remove humans from the process. It is to preserve human authority while allowing the Flywheel to operate independently wherever human participation is unnecessary.

## Related Documents

- [Principles Index](README.md)
- [Governance and Escalation](../../architecture/governance-and-escalation.md)
- [Core Boundaries](../../architecture/boundaries.md)
- [Principle 2: AI Is the Operator](02-ai-as-operator.md)
