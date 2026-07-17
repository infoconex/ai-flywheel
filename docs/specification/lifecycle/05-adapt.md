# Stage 5: Adapt

The Flywheel selects the right improvement target and applies or proposes a change.

## Purpose

Adaptation turns a supported classification into a specific candidate improvement.

The goal is not constant change or maximum automation. The goal is to correct the identified weakness in the part of the system best suited to own the improved behavior.

## Inputs

Adaptation receives:

- the classification produced by [Stage 4: Classify](04-classify.md),
- the selected improvement destination,
- the evidence supporting that decision,
- the current persistent operational assets,
- the current placement of responsibility across the Moving Determinism Boundary,
- and the applicable Governance Policy.

## Required Behavior

Possible adaptations include:

- code changes,
- new deterministic tools,
- modifications to existing capabilities,
- SOP changes,
- stronger validation,
- new reusable reasoning guidance,
- movement of responsibility across the Moving Determinism Boundary,
- or a proposed Governance Policy change.

The Flywheel should follow the Evolution Routing Rule:

> **Correct the weakness at the lowest layer capable of handling it reliably without unnecessarily removing adaptability.**

The goal is not maximum determinism or maximum AI reasoning. The improvement should be placed where it can work most reliably while keeping the flexibility that is still needed.

Adaptation produces a candidate change. It does not prove that the change is correct or authorize it for persistent use.

## Outputs

Adaptation produces:

- a candidate change or proposed governance decision,
- the persistent asset or responsibility placement that would be affected,
- the reason and evidence supporting the change,
- the expected improvement,
- and enough information to determine how the candidate should be validated.

The candidate proceeds to [Stage 6: Validate](06-validate.md) before it is trusted for future reuse.

## Governance Considerations

Not every adaptation may be applied by the AI on its own.

The Governance Policy determines whether a proposed change is:

- Authorized,
- Approval Required,
- Judgment Required,
- or Prohibited.

The AI may recommend more authority but may not grant itself more authority.

Where approval is required before a candidate can even be tested or applied in an isolated environment, the Flywheel must obtain that approval before proceeding.

## Failure and Exit Conditions

Adaptation should return to classification when the proposed change reveals that the original diagnosis or destination was wrong.

It should pause or escalate when the proposed change is outside the AI's authority.

It should advance to validation when there is a specific candidate improvement that can be responsibly tested.

A candidate must not be persisted merely because the AI was able to generate or apply it.

## Relationships to Principles

- [Principle 6: Failure Determines Where the System Evolves](../principles/06-evolution-routing.md) defines how learning is sent to the right improvement destination.
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
