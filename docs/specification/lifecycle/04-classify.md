# Stage 4: Classify

The Infoconex AI Flywheel identifies what was learned from evaluation, determines whether adaptation is justified, and decides where any resulting learning should live.

## Purpose

Classification prevents the Flywheel from treating every outcome as the same type of result or sending every lesson to the same improvement mechanism.

At this stage, the Flywheel asks:

> **What was learned, is adaptation justified, and where should any resulting learning live?**

## Required Inputs and Preconditions

Classify requires:

- The assessed outcome from [Stage 3: Evaluate](03-evaluate.md)
- The evidence supporting that assessment
- Identified failures, uncertainty, broken assumptions, successful patterns, or learning opportunities
- The current placement of responsibility among deterministic capability, procedural guidance, and AI reasoning
- Applicable governance constraints

The classification must be grounded in an evaluated outcome or identified learning opportunity rather than an unsupported preference for a particular implementation mechanism.

## Required Responsibilities

Classify must:

- Identify the type and likely source of the weakness, uncertainty, successful pattern, or learning opportunity
- Determine whether the evidence justifies adaptation, reinforces an existing validated operating pattern, or does not justify new persistent learning
- Consider the part of the operating model best suited to own any resulting improvement or reusable learning
- Make the routing decision intentionally rather than defaulting every outcome to one adaptation mechanism
- Preserve the evidence supporting the routing decision
- Allow the result to be that no adaptation is justified

Potential improvement destinations may include:

- Deterministic capability
- Procedural guidance
- Reasoning knowledge
- Validation
- Governance

Classification may also determine that responsibility should move across the Moving Determinism Boundary when the current placement is no longer appropriate.

Classification does not authorize a governance change or expansion of authority.

## Required Outputs and Evidence

Classify must produce:

- An identified weakness, uncertainty, successful pattern, or learning opportunity
- One of the following supported dispositions:
  - Adaptation is justified and an improvement destination is selected
  - No adaptation is justified and the evidence reinforces an existing validated operating pattern
  - No new reusable learning or persistent change is justified
- The evidence supporting the disposition
- Any identified movement of responsibility across the Moving Determinism Boundary

## Completion Conditions

Classify is complete when the evidence supports an explicit decision about how the learning should be handled, including when no adaptation or new persistent learning is justified.

The stage contract is not satisfied by forcing a change solely to continue the lifecycle or by silently treating a successful outcome as if no classification occurred.

## Relationship to Adjacent Stages

Classify consumes the supported assessment and learning opportunities produced by [Stage 3: Evaluate](03-evaluate.md).

When adaptation is justified, the selected improvement destination and supporting evidence become the primary inputs to [Stage 5: Adapt](05-adapt.md).

When no adaptation is justified, the explicit no-change disposition becomes the input to Adapt so the lifecycle can resolve that responsibility without manufacturing a candidate change.

## Governance Considerations

Classification may identify a governance weakness or suggest that the AI's authority should change, but classification itself does not authorize an expansion of authority.

A proposed Governance Policy change remains subject to human authorization.

The Flywheel may determine on its own that more conservative behavior or additional escalation is appropriate when evidence shows increased risk or uncertainty, as long as that change remains within existing authority.

## Relationships to Principles

- [Principle 6: Failure Determines Where the System Evolves](../principles/06-evolution-routing.md) defines intentional learning classification and routing.
- [Principle 3: Work Is Distributed Across a Moving Determinism Boundary](../principles/03-moving-determinism-boundary.md) allows classification to identify that responsibility should move between operating mechanisms.
- [Principle 5: Execution Must Produce Outcome Evidence](../principles/05-outcome-evidence.md) requires the classification decision to remain grounded in evidence.
- [Principle 1: Autonomy Is Bounded by Human Authority](../principles/01-human-authority.md) constrains governance changes and authority expansion.

## Stage Navigation

- [Lifecycle Index](README.md)
- **Previous Stage:** [Stage 3: Evaluate](03-evaluate.md)
- **Next Stage:** [Stage 5: Adapt](05-adapt.md)

## Related Documents

- [Learning Architecture](../../architecture/learning-view.md)
- [Core Boundaries](../../architecture/boundaries.md)
