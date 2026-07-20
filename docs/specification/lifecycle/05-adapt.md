# Stage 5: Adapt

The Infoconex AI Flywheel selects the appropriate improvement target and applies or proposes a change.

## Purpose

Adaptation turns a supported classification into a concrete candidate improvement.

The goal is not continuous change or maximum automation. The goal is to correct the identified weakness in the part of the system best suited to own the improved behavior.

## Inputs

Adaptation receives:

- The classification produced by [Stage 4: Classify](04-classify.md)
- The selected improvement destination
- The evidence supporting that routing decision
- The current persistent operational assets
- The current placement of responsibility across the Moving Determinism Boundary
- The applicable Governance Policy

## Required Behavior

Possible adaptations include:

- Code changes
- New deterministic tools
- Changes to existing capabilities
- SOP changes
- Stronger validation
- New reusable reasoning guidance
- Movement of responsibility across the Moving Determinism Boundary
- A proposed Governance Policy change

The Flywheel should follow the Evolution Routing Rule:

> **Correct the weakness at the lowest layer capable of handling it reliably without unnecessarily removing adaptability.**

The goal is not maximum determinism or maximum AI reasoning. The improvement should be placed where it can operate most reliably while retaining needed flexibility.

Adaptation produces a candidate change. It does not by itself prove that the change is correct or authorize that change for persistent use.

## Outputs

Adaptation produces:

- A candidate change or proposed governance decision
- The persistent asset or responsibility placement that would be affected
- The reason and evidence supporting the change
- The expected improvement
- Enough information to determine how the candidate should be validated

The candidate proceeds to [Stage 6: Validate](06-validate.md) before it is trusted for future reuse.

## Governance Considerations

Not every adaptation may be applied autonomously.

The Governance Policy determines whether a proposed change is:

- Authorized
- Approval Required
- Judgment Required
- Prohibited

The AI may recommend an expansion of its authority but may not grant itself additional authority.

Where approval is required before a candidate can even be tested or applied in an isolated environment, the Flywheel must obtain that approval before proceeding.

## Failure and Exit Conditions

Adaptation should return to classification when the proposed change reveals that the original diagnosis or destination was incorrect.

It should pause or escalate when the proposed change is outside the AI's authority.

It should advance to validation when there is a concrete candidate improvement that can be responsibly tested.

A candidate must not be persisted merely because the AI was able to generate or apply it.

## Relationships to Principles

- [Principle 6: Failure Determines Where the System Evolves](../principles/06-evolution-routing.md) defines how learning is routed to an appropriate improvement destination.
- [Principle 3: Work Is Distributed Across a Moving Determinism Boundary](../principles/03-moving-determinism-boundary.md) allows adaptations to change where responsibility lives.
- [Principle 1: Autonomy Is Bounded by Human Authority](../principles/01-human-authority.md) constrains what the AI may change or propose on its own.
- [Principle 7: Learning Must Change a Persistent Operational Asset](../principles/07-persistent-learning.md) becomes relevant once a candidate improvement has been validated and authorized for persistence.

## Stage Navigation

- [Lifecycle Index](README.md)
- **Previous Stage:** [Stage 4: Classify](04-classify.md)
- **Next Stage:** [Stage 6: Validate](06-validate.md)

## Related Documents

- [Learning Architecture](../../architecture/learning-view.md)
- [Core Operating Model](../../architecture/operating-model.md)
