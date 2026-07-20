# Conformance Evaluation Checklist

Use this checklist to evaluate whether a system satisfies the Infoconex AI Flywheel Specification.

A complete conformance review should be supported by observable evidence rather than architecture labels or stated intent alone. The ten sections below are assessment areas derived from the canonical specification; they do not define independent requirements.

## Human Authority

1. Who authorized the Flywheel to operate?
2. Where are its authority boundaries defined?
3. What actions may the AI perform autonomously?
4. What actions require human approval?
5. What conditions require human judgment?
6. What actions are prohibited?
7. Can the AI expand its own authority, or only recommend a governance change for human approval?

Canonical sources: [Principle 1: Autonomy Is Bounded by Human Authority](../principles/01-human-authority.md) and [Governance and Escalation](../../architecture/governance-and-escalation.md).

## AI Operation

8. Does the AI perform meaningful operational work itself?
9. Can it continue autonomously within its delegated authority?
10. Does routine execution avoid unnecessary human handoffs?

Canonical sources: [Principle 2: AI Is the Operator, Not Merely the Assistant](../principles/02-ai-as-operator.md) and [Stage 1: Execute](../lifecycle/01-execute.md).

## Runtime Responsibilities

11. Can the system distinguish deterministic capability, procedural guidance, and AI reasoning?
12. Is each responsibility intentionally placed in the mechanism best suited to own it?
13. Can those responsibilities move when evidence shows the current allocation is no longer appropriate?

Canonical source: [Principle 3: Work Is Distributed Across a Moving Determinism Boundary](../principles/03-moving-determinism-boundary.md). Supporting explanation: [Runtime Architecture](../../architecture/runtime-view.md).

## Operational Procedure

14. Does a persistent Standard Operating Procedure (SOP) or equivalent procedure exist?
15. Does it define how work should be performed and how known exceptions should be handled?
16. Does it identify available capabilities, evidence expectations, validation, and escalation conditions where appropriate?
17. Is the SOP subordinate to the Governance Policy?

Canonical source: [Principle 4: The SOP Is an Operational Control Plane](../principles/04-sop-control-plane.md).

## Outcome Evidence

18. Does execution produce evidence sufficient to evaluate what actually occurred?
19. Is success independently validated where practical?
20. Are failures and unexpected results retained as learning inputs?
21. Are material human judgments and approvals preserved as evidence?

Canonical sources: [Principle 5: Execution Must Produce Outcome Evidence](../principles/05-outcome-evidence.md), [Stage 2: Observe](../lifecycle/02-observe.md), and [Stage 3: Evaluate](../lifecycle/03-evaluate.md).

## Evaluation and Classification

22. Does the system evaluate outcomes against intended results and success criteria?
23. Can it distinguish verified success, failure, partial success, and unresolved uncertainty?
24. Can it identify the type of weakness or learning opportunity?
25. Can it ask where the resulting learning should live?

Canonical sources: [Stage 3: Evaluate](../lifecycle/03-evaluate.md), [Stage 4: Classify](../lifecycle/04-classify.md), and [Principle 6: Failure Determines Where the System Evolves](../principles/06-evolution-routing.md).

## Improvement Routing

26. Can learning be routed to deterministic capability, procedure, reasoning knowledge, validation, or governance?
27. Can responsibility move across the Moving Determinism Boundary?
28. Does the system avoid forcing every lesson into one fixed adaptation mechanism?

Canonical sources: [Principle 6: Failure Determines Where the System Evolves](../principles/06-evolution-routing.md), [Stage 4: Classify](../lifecycle/04-classify.md), and [Stage 5: Adapt](../lifecycle/05-adapt.md).

## Governance Enforcement

29. Does governance constrain operational actions as they occur?
30. Does governance also constrain persistent self-improvement?
31. Can the system distinguish approval required from judgment required?
32. Are prohibited actions actually blocked?

Canonical sources: [Principle 1: Autonomy Is Bounded by Human Authority](../principles/01-human-authority.md), [Infoconex AI Flywheel Lifecycle](../lifecycle/README.md#governance-applies-throughout-the-lifecycle), and [Governance and Escalation](../../architecture/governance-and-escalation.md).

## Persistent Learning

33. Do validated and authorized improvements survive the current execution?
34. Are they stored in durable operational assets that future execution can use?
35. Can persistent assets later be refined, replaced, rolled back, or moved when new evidence requires it?

Canonical sources: [Principle 7: Learning Must Change a Persistent Operational Asset](../principles/07-persistent-learning.md) and [Stage 7: Persist](../lifecycle/07-persist.md).

## Compounding Reuse

36. Do later executions inherit relevant validated improvements?
37. Does repeated execution reduce unnecessary repeated reasoning, failure, or human escalation?
38. Can a reviewer point to behavior that improved because of learning from earlier executions?

Canonical sources: [Principle 8: Improvement Must Compound Through Reuse](../principles/08-compounding-reuse.md) and [Stage 8: Reuse](../lifecycle/08-reuse.md).

## Conformance Decision

A system conforms to this version of the Infoconex AI Flywheel Specification when the implementation can demonstrate that the complete operating model satisfies all ten conformance areas described in the [Conformance Overview](README.md).

When an area is not satisfied, the implementation may still use valuable AI Flywheel concepts, but it should not be described as a complete conforming implementation.

## Related Documents

- [Conformance Overview](README.md)
- [Non-Conforming Patterns](non-conforming-patterns.md)
- [Formal Definition](../definition.md)
- [Principles](../principles/README.md)
- [Lifecycle](../lifecycle/README.md)
