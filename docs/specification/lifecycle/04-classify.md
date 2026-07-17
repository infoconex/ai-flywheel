# Stage 4: Classify

The AI identifies the type and likely source of any weakness, uncertainty, or learning opportunity revealed by evaluation.

## Purpose

Classification prevents the Flywheel from treating every problem as the same type of problem or sending every lesson to the same improvement mechanism.

At this stage, the Flywheel asks:

> **Where should this learning live?**

## Inputs

Classification receives:

- The assessed outcome from [Stage 3: Evaluate](03-evaluate.md)
- The evidence supporting that assessment
- Identified failures, uncertainty, broken assumptions, or learning opportunities
- The current placement of responsibility among deterministic capability, procedural guidance, and AI reasoning
- Applicable governance constraints

## Required Behavior

The system should consider whether the issue belongs primarily to:

- Deterministic implementation
- Procedural guidance
- Missing or weak validation
- Missing or incomplete reasoning knowledge
- Runtime reasoning
- Environmental change
- Governance or authority
- An incorrect assumption about where responsibility should live

The classification should identify the persistent destination best suited to own the learning, which may include:

- Deterministic capability
- Procedural knowledge
- Reasoning knowledge
- Validation
- A proposed governance change

Classification must be intentional. The system should not automatically route every failure to code changes, prompt changes, memory, retries, or any other single destination.

A classification may also determine that no persistent change is justified because the event is temporary, already handled correctly, or unsupported by enough evidence.

## Outputs

Classification produces:

- An identified weakness or learning opportunity
- A selected improvement destination or clear decision that no adaptation is justified
- The evidence supporting that routing decision
- Any identified movement of responsibility across the Moving Determinism Boundary

When adaptation is justified, the selected destination becomes the primary input to [Stage 5: Adapt](05-adapt.md).

## Governance Considerations

Classification may identify a governance weakness or suggest that the AI's authority should change, but classification itself does not authorize an expansion of authority.

A proposed Governance Policy change remains subject to human authorization.

The Flywheel may determine on its own that more conservative behavior or additional escalation is appropriate when evidence shows increased risk or uncertainty, as long as that change remains within existing authority.

## Failure and Exit Conditions

Classification should return to evaluation or observation when the evidence is too weak to responsibly identify the issue.

It should advance to adaptation when a supported improvement destination has been identified.

It may exit without adaptation when the current operating system behaved correctly and no durable improvement is justified.

It must not force a change merely to complete the lifecycle.

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
