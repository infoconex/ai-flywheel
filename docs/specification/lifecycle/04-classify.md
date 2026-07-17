# Stage 4: Classify

The AI identifies the nature and likely source of any weakness, uncertainty, or learning opportunity revealed by evaluation.

## Purpose

Classification prevents the Flywheel from treating every problem as the same type of problem or sending every lesson to the same adaptation mechanism.

At this stage, the Flywheel asks:

> **Where should this learning live?**

## Inputs

Classification receives:

- the assessed outcome from [Stage 3: Evaluate](03-evaluate.md),
- the evidence supporting that assessment,
- identified failures, uncertainty, violated assumptions, or learning opportunities,
- the current allocation of responsibility among deterministic capability, procedural guidance, and AI reasoning,
- and applicable governance constraints.

## Required Behavior

The system should consider whether the issue belongs primarily to:

- deterministic implementation,
- procedural guidance,
- missing or weak validation,
- missing or incomplete reasoning knowledge,
- runtime reasoning,
- environmental change,
- governance or authority,
- or an incorrect assumption about where responsibility should reside.

The classification should identify the persistent destination best suited to own the learning, which may include:

- deterministic capability,
- procedural knowledge,
- reasoning knowledge,
- validation,
- or a proposed governance change.

Classification must be intentional. The system should not automatically route every failure to code changes, prompt changes, memory, retries, or any other single destination.

A classification may also determine that no persistent change is justified because the event is transient, already handled correctly, or unsupported by enough evidence.

## Outputs

Classification produces:

- a diagnosed weakness or learning opportunity,
- a selected improvement destination or explicit decision that no adaptation is justified,
- the evidence supporting that routing decision,
- and any identified movement of responsibility across the Moving Determinism Boundary.

When adaptation is justified, the selected destination becomes the primary input to [Stage 5: Adapt](05-adapt.md).

## Governance Considerations

Classification may identify a governance weakness or propose that delegated authority should change, but classification itself does not authorize an expansion of authority.

A proposed Governance Policy change remains subject to human authorization.

The Flywheel may autonomously classify that more conservative behavior or additional escalation is appropriate when evidence indicates increased risk or uncertainty, provided that change remains within existing authority.

## Failure and Exit Conditions

Classification should return to evaluation or observation when the evidence is too weak to responsibly diagnose the issue.

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
