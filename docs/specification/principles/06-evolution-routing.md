# Principle 6: Failure Determines Where the System Evolves

A failure is useful evidence, not merely a reason to retry. Successful outcomes can also reveal learning about what should remain stable, be reinforced, or evolve.

## Purpose

When execution reveals a weakness, uncertainty, successful pattern, or other learning opportunity, the Infoconex AI Flywheel should determine **whether change is justified and where resulting learning belongs** before changing the system.

Different outcomes reveal different kinds of learning. Treating every failure as a prompt problem, code problem, memory problem, or retry problem creates brittle systems and repeated mistakes. Likewise, forcing every successful execution to produce a change creates unnecessary churn.

## Requirements

A conforming implementation must satisfy these requirements:

- The system evaluates and classifies meaningful weaknesses, uncertainty, successful patterns, and other learning opportunities before deciding how they should affect future operation.
- Classification determines whether adaptation is justified, whether evidence reinforces an existing validated operating pattern, or whether no new persistent learning is justified.
- Different kinds of learning can be sent to different destinations rather than being forced into one fixed mechanism.
- Supported destinations include, as appropriate, deterministic capability, procedural guidance, reasoning knowledge, validation, and governance.
- The system can identify when responsibility is in the wrong place and move it across the Moving Determinism Boundary.
- When adaptation is justified, the selected destination reflects the mechanism best suited to handle the correction reliably without removing flexibility that is still needed.
- A failed or rejected adaptation remains distinct from any reusable lesson derived from that attempt.
- Candidate changes and other learning intended for persistent future use are sufficiently validated before being trusted for that use.
- Governance changes remain subject to human authorization.

## Operational Model

### Classification Can Produce Different Dispositions

Classification may determine that:

- **Adaptation is justified** and resulting learning should change a persistent operational asset.
- **No adaptation is justified** and the outcome reinforces an existing validated operating pattern.
- **No new persistent learning is justified** even though the outcome and classification remain part of the evidence record.

A failure may also produce learning that is different from the failed candidate itself. For example, a rejected change may reveal a known-failure rule, applicability constraint, detection mechanism, validation check, procedural instruction, or alternative-strategy rule.

### Possible Adaptation Destinations

**Deterministic Capability** — Use when the problem is repeatable and can be corrected through code, tools, scripts, services, or another deterministic implementation.

**Procedural Guidance** — Use when the process is incomplete, unclear, incorrectly ordered, or missing known exception handling.

**Reasoning Knowledge** — Use when the condition still requires judgment but would benefit from durable guidance, examples, heuristics, or lessons.

**Validation** — Use when the system lacks a reliable way to determine whether an action or outcome is correct.

**Governance** — Use when evidence shows that authority, approval requirements, prohibited actions, or escalation rules should change. Governance changes require human authorization.

### The Evolution Routing Rule

When a correction is required:

> **Correct the weakness at the lowest layer capable of handling it reliably without unnecessarily removing adaptability.**

This prevents the system from solving every recurring problem with more AI reasoning when a more reliable mechanism exists. It also prevents the system from hard-coding behavior that still requires judgment.

### Routing Can Move Responsibility

Examples include:

- **AI reasoning → SOP** when a recurring judgment becomes a known procedure
- **SOP → deterministic capability** when a stable procedure becomes reliably automatable
- **Deterministic capability → SOP or AI reasoning** when evidence shows that a hard-coded assumption is too brittle

## Lifecycle Relationship

- **Observe and Evaluate:** Evidence establishes what happened and what learning the outcome may contain, including successful reinforcing evidence.
- **Classify:** The system determines whether adaptation is justified and where resulting learning should live.
- **Adapt:** A candidate correction is created when change is justified, or the no-adaptation disposition is explicitly resolved.
- **Validate:** Candidate improvements or other reusable learning intended for persistence are evaluated for sufficient support.
- **Persist and Reuse:** Supported learning becomes part of future operation, reinforcing evidence may strengthen an existing validated pattern, or the lifecycle explicitly resolves that no new persistent learning is required.
- **Later cycles:** Failure-derived learning and new evidence can challenge earlier classifications or persisted learning and route the system through the lifecycle again.

## Evidence of Implementation

Evidence supporting this principle may include:

- Classified failures, uncertainty, successful patterns, or learning opportunities with identified causes or meaning
- Explicit decisions about whether adaptation is justified
- Examples in which different lessons produced different destinations
- Records showing why a correction was placed in code, procedure, reasoning guidance, validation, or governance
- No-change classifications that reinforce an existing validated pattern without manufacturing an adaptation
- Failure-derived learning that remains distinguishable from the failed or rejected candidate
- Evidence that responsibility can move across the Moving Determinism Boundary when justified
- Validation results for candidate changes or other reusable learning before persistence or reuse

## Non-Conforming Patterns

This principle is not satisfied when:

- Every failure produces the same response
- The system only retries without diagnosis
- Every successful outcome is forced to create a change
- Every lesson is stored only as memory
- Every failure is treated only as a code defect
- Every weakness becomes additional prompt text
- Learning is persisted without determining what part of the system should own it
- The system has no intentional way to move responsibility when the current placement is wrong
- A failed candidate is promoted as approved behavior instead of separating any validated lesson derived from it

## Relationships to Other Principles

- [Principle 3: Work Is Distributed Across a Moving Determinism Boundary](03-moving-determinism-boundary.md) defines where responsibility can live; this principle determines whether and where specific learning should be applied.
- [Principle 5: Execution Must Produce Outcome Evidence](05-outcome-evidence.md) provides the evidence required for responsible classification and routing.
- [Principle 7: Learning Must Change a Persistent Operational Asset](07-persistent-learning.md) ensures reusable supported learning becomes durable when persistence is justified.
- [Principle 1: Autonomy Is Bounded by Human Authority](01-human-authority.md) governs changes that affect authority or protected operational assets.
- [Principle 8: Improvement Must Compound Through Reuse](08-compounding-reuse.md) depends on relevant current learning and validated operating patterns being inherited by future execution.

## Principle Navigation

- [Principles Index](README.md)
- **Previous Principle:** [Principle 5: Execution Must Produce Outcome Evidence](05-outcome-evidence.md)
- **Next Principle:** [Principle 7: Learning Must Change a Persistent Operational Asset](07-persistent-learning.md)

## Related Documents

- [Learning Architecture](../../architecture/learning-view.md)
- [Stage 4: Classify](../lifecycle/04-classify.md)
- [Stage 5: Adapt](../lifecycle/05-adapt.md)
- [Validation Sufficiency Requirements](../validation-sufficiency.md)
- [Conformance](../conformance/README.md)