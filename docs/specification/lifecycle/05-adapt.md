# Stage 5: Adapt

The Infoconex AI Flywheel selects the appropriate improvement target and applies or proposes a change.

## Purpose

Adaptation turns a supported classification into a concrete candidate improvement.

The goal is not continuous change or maximum automation. The goal is to correct the identified weakness in the part of the system best suited to own the improved behavior.

## Required Inputs and Preconditions

Adapt requires:

- The classification produced by [Stage 4: Classify](04-classify.md)
- The selected improvement destination
- The evidence supporting that routing decision
- The current persistent operational assets
- The current placement of responsibility across the Moving Determinism Boundary
- The applicable Governance Policy

Adaptation requires a supported classification that identifies a concrete improvement target. An unsupported preference for a tool, technology, prompt, code change, or other mechanism is not enough.

## Required Responsibilities

Adapt must:

- Create or propose a concrete candidate improvement that addresses the classified weakness or learning opportunity
- Place the candidate in the improvement destination selected by classification unless new evidence shows that destination is unsuitable
- Preserve the reason and evidence supporting the candidate change
- State the expected improvement the candidate is intended to produce
- Identify enough validation intent to allow the candidate itself to be evaluated
- Keep the proposed or applied change within the applicable Governance Policy

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

Adaptation produces a candidate change. It does not by itself prove that the change is correct or authorize that change for persistent use.

## Required Outputs and Evidence

Adapt must produce:

- A concrete candidate change or proposed governance decision
- The persistent asset or responsibility placement that would be affected
- The reason and evidence supporting the change
- The expected improvement
- The information needed to determine how the candidate should be validated

## Completion Conditions

Adapt is complete when a concrete candidate improvement exists, its intended effect and target are explicit, and enough information exists for Validate to assess the candidate itself.

Generating or applying a change does not by itself satisfy the lifecycle requirement for validation or persistence.

## Relationship to Adjacent Stages

Adapt consumes the improvement destination and supporting evidence produced by [Stage 4: Classify](04-classify.md).

Its candidate improvement, expected outcome, and validation intent become the primary inputs to [Stage 6: Validate](06-validate.md).

## Governance Considerations

Not every adaptation may be applied autonomously.

The Governance Policy determines whether a proposed change is:

- Authorized
- Approval Required
- Judgment Required
- Prohibited

The AI may recommend an expansion of its authority but may not grant itself additional authority.

Where approval is required before a candidate can be tested or applied in an isolated environment, the Flywheel must obtain that approval before proceeding.

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