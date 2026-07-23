# Stage 5: Adapt

The Infoconex AI Flywheel resolves the classified learning disposition by creating or proposing a candidate improvement when change is justified, or by explicitly preserving the current operating pattern when no adaptation is required.

## Purpose

Adaptation turns a supported classification into a concrete response.

The goal is not continuous change or maximum automation. The goal is to respond appropriately to what was learned, including when the correct response is to leave the operating behavior unchanged.

## Required Inputs and Preconditions

Adapt requires:

- The learning disposition produced by [Stage 4: Classify](04-classify.md)
- The evidence supporting that disposition
- The selected improvement destination when adaptation is justified
- The current persistent operational assets
- The current placement of responsibility across the Moving Determinism Boundary
- The applicable Governance Policy

Adaptation requires a supported classification. An unsupported preference for a tool, technology, prompt, code change, or other mechanism is not enough.

## Required Responsibilities

Adapt must:

- Respond to the classified learning disposition without forcing change when change is not justified
- Create or propose a concrete candidate improvement when adaptation is justified
- Place a candidate in the improvement destination selected by classification unless new evidence shows that destination is unsuitable
- Preserve the reason and evidence supporting any candidate change
- State the expected improvement the candidate is intended to produce
- Identify enough validation intent to allow the candidate itself to be evaluated
- Keep any proposed or applied change within the applicable Governance Policy
- When no adaptation is justified, explicitly record that no candidate change is required and preserve the evidence supporting continuation of the current operating pattern
- Identify any reinforcing or failure-derived learning that should still be evaluated for persistence and future reuse even when the attempted adaptation itself is rejected or no operational change is proposed

Possible adaptations include:

- Code changes
- New deterministic tools
- Changes to existing capabilities
- SOP changes
- Stronger validation
- New reusable reasoning guidance
- Known-failure rules or applicability constraints
- Movement of responsibility across the Moving Determinism Boundary
- A proposed Governance Policy change

The Flywheel should follow the Evolution Routing Rule:

> **Correct the weakness at the lowest layer capable of handling it reliably without unnecessarily removing adaptability.**

Adaptation produces a candidate change only when change is justified. It does not by itself prove that the change is correct or authorize that change for persistent use.

A no-change resolution is not a skipped Adapt stage. It is an explicit determination that the current operating behavior should remain unchanged based on the evidence available at that point in the lifecycle.

If Adapt cannot responsibly resolve the classification because more evidence, authority, or human judgment is required, the stage must pause, return to an appropriate earlier stage, or escalate. An unresolved adaptation decision is not a completed Adapt stage.

## Required Outputs and Evidence

Adapt must produce one of the following supported results:

- A concrete candidate change or proposed governance decision
- An explicit `no adaptation required` resolution that identifies the operating pattern being preserved

The result must also preserve:

- The persistent asset or responsibility placement that would be affected when a candidate change exists
- The reason and evidence supporting the result
- The expected improvement when a candidate change exists
- Any reinforcing or failure-derived learning that should be considered separately from the disposition of the candidate itself
- The information needed to determine what [Stage 6: Validate](06-validate.md) must assess

When Adapt cannot yet produce a completed result, it must preserve the unresolved condition and the evidence, authority, judgment, or escalation needed to continue.

## Completion Conditions

Adapt is complete when the classified learning disposition has been resolved into an explicit adaptation result and enough information exists for Validate to assess that result.

When change is justified, a concrete candidate improvement and its intended effect must be explicit.

When no change is justified, the stage is complete only when the no-change resolution and supporting evidence are explicit. Silently doing nothing does not satisfy the stage contract.

Generating or applying a change does not by itself satisfy the lifecycle requirement for validation or persistence.

## Relationship to Adjacent Stages

Adapt consumes the learning disposition and supporting evidence produced by [Stage 4: Classify](04-classify.md).

A completed adaptation result becomes the primary input to [Stage 6: Validate](06-validate.md). Validate may assess a candidate improvement, an explicit no-change resolution, or reusable learning derived from a failed or rejected attempt.

If new evidence shows that the earlier classification or improvement destination was wrong, the lifecycle may return to Classify rather than forcing the current adaptation path to continue.

## Governance Considerations

Not every adaptation may be applied autonomously.

The Governance Policy determines whether a proposed change is:

- Authorized
- Approval Required
- Judgment Required
- Prohibited

The AI may recommend an expansion of its authority but may not grant itself additional authority.

Where approval is required before a candidate can be tested or applied in an isolated environment, the Flywheel must obtain that approval before proceeding.

A prohibited or unauthorized candidate must not be applied merely to keep the lifecycle moving. The resulting constraint may itself become evidence for later evaluation, classification, or human escalation.

## Relationships to Principles

- [Principle 6: Failure Determines Where the System Evolves](../principles/06-evolution-routing.md) defines how learning is routed to an appropriate improvement destination.
- [Principle 3: Work Is Distributed Across a Moving Determinism Boundary](../principles/03-moving-determinism-boundary.md) allows adaptations to change where responsibility lives.
- [Principle 1: Autonomy Is Bounded by Human Authority](../principles/01-human-authority.md) constrains what the AI may change or propose on its own.
- [Principle 7: Learning Must Change a Persistent Operational Asset](../principles/07-persistent-learning.md) becomes relevant when reusable learning is validated and authorized for persistence.

## Stage Navigation

- [Lifecycle Index](README.md)
- **Previous Stage:** [Stage 4: Classify](04-classify.md)
- **Next Stage:** [Stage 6: Validate](06-validate.md)

## Related Documents

- [Learning Architecture](../../architecture/learning-view.md)
- [Core Operating Model](../../architecture/operating-model.md)
