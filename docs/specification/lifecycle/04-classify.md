# Stage 4: Classify

The Infoconex AI Flywheel identifies the type and likely source of any weakness, uncertainty, successful pattern, or learning opportunity revealed by evaluation.

## Purpose

Classification prevents the Flywheel from treating every outcome as the same type of result or sending every lesson to the same improvement mechanism.

At this stage, the Flywheel asks:

> **What was learned, and where should that learning live?**

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
- Determine whether the evidence justifies a persistent adaptation, reinforces an existing validated pattern, or does not justify durable change
- Consider the part of the operating model best suited to own any resulting improvement or reusable learning
- Make the routing decision intentionally rather than defaulting every outcome to one adaptation mechanism
- Preserve the evidence supporting the routing decision
- Allow the result to be that no persistent adaptation is justified

Potential improvement or learning destinations may include:

- Deterministic implementation
- Procedural guidance
- Validation
- Reasoning knowledge
- Runtime reasoning behavior
- Governance or authority
- A changed placement of responsibility across the Moving Determinism Boundary
- A known-failure rule, applicability constraint, or other reusable knowledge derived from failure
- Reinforcing evidence associated with an existing validated operating pattern

Classification does not authorize a governance change or expansion of authority.

If the available evidence is insufficient to route the learning responsibly, Classify must preserve that uncertainty and obtain additional evidence, return to an earlier stage, or escalate for human judgment as appropriate. An unresolved routing decision is not a completed classification.

## Required Outputs and Evidence

Classify must produce an explicit learning disposition that includes:

- The identified weakness, uncertainty, successful pattern, or learning opportunity
- One of the following supported outcomes:
  - An adaptation is justified and an improvement destination is selected
  - No adaptation is justified and an existing validated pattern is reinforced
  - No reusable learning or persistent change is justified
- The evidence supporting the disposition
- Any identified movement of responsibility across the Moving Determinism Boundary

When classification cannot yet be completed, the stage must instead preserve the unresolved condition and the evidence, judgment, or escalation needed to continue.

## Completion Conditions

Classify is complete when the evidence supports an explicit decision about how the learning should be handled, including when no durable adaptation is justified.

The stage contract is not satisfied by forcing a change solely to continue the lifecycle, by silently treating a successful outcome as if no classification occurred, or by presenting an unresolved routing decision as complete.

## Relationship to Adjacent Stages

Classify consumes the supported assessment and learning opportunities produced by [Stage 3: Evaluate](03-evaluate.md).

A completed learning disposition becomes the primary input to [Stage 5: Adapt](05-adapt.md). When adaptation is justified, Adapt uses the selected improvement destination and supporting evidence. When no adaptation is justified, Adapt explicitly resolves the no-change disposition rather than manufacturing a candidate change.

New evidence from later stages may return the lifecycle to Classify when an earlier routing decision is no longer supported.

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
