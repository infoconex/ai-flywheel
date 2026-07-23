# Conformance Evaluation Checklist

Use this checklist to evaluate whether a system satisfies the Infoconex AI Flywheel Specification.

A complete conformance review should be supported by observable evidence rather than architecture labels or stated intent alone. The checklist is organized around the eight canonical principles. Lifecycle stages, governance behavior, and supporting architecture provide the operational evidence used to evaluate those principles; they do not create a separate set of conformance requirements.

## Principle 1: Autonomy Is Bounded by Human Authority

1. Who authorized the Flywheel to operate?
2. Where are its authority boundaries defined?
3. What actions may the AI perform autonomously?
4. What actions require human approval?
5. What conditions require human judgment because available evidence is insufficient?
6. What actions are prohibited?
7. Can the AI expand its own authority, or only recommend a governance change for human approval?
8. Does governance constrain operational actions as they occur?
9. Does governance also constrain persistent changes and self-improvement?
10. Can the system distinguish approval required from judgment required?
11. Are prohibited actions actually blocked?

Canonical sources: [Principle 1: Autonomy Is Bounded by Human Authority](../principles/01-human-authority.md), [Infoconex AI Flywheel Lifecycle](../lifecycle/README.md#governance-applies-throughout-the-lifecycle), and [Governance and Escalation](../../architecture/governance-and-escalation.md).

## Principle 2: AI Is the Operator, Not Merely the Assistant

12. Does the AI perform meaningful operational work itself?
13. Can it continue autonomously within its delegated authority?
14. Does routine execution avoid unnecessary human handoffs?

Canonical sources: [Principle 2: AI Is the Operator, Not Merely the Assistant](../principles/02-ai-as-operator.md) and [Stage 1: Execute](../lifecycle/01-execute.md).

## Principle 3: Work Is Distributed Across a Moving Determinism Boundary

15. Can the system distinguish deterministic capability, procedural guidance, and AI reasoning?
16. Is each responsibility intentionally placed in the mechanism best suited to own it?
17. Can those responsibilities move when evidence shows the current allocation is no longer appropriate?
18. Can responsibility move in either direction across the Moving Determinism Boundary rather than only toward more code or automation?

Canonical source: [Principle 3: Work Is Distributed Across a Moving Determinism Boundary](../principles/03-moving-determinism-boundary.md). Supporting explanation: [Runtime Architecture](../../architecture/runtime-view.md).

## Principle 4: The SOP Is an Operational Control Plane

19. Does a persistent Standard Operating Procedure (SOP) or equivalent machine-consumable procedure exist?
20. Does it define how work should be performed and how known exceptions should be handled?
21. Does it identify available capabilities, evidence expectations, validation, and escalation conditions where appropriate?
22. Is the SOP subordinate to the Governance Policy?
23. Can validated procedural learning change the SOP or equivalent guidance for future execution?

Canonical source: [Principle 4: The SOP Is an Operational Control Plane](../principles/04-sop-control-plane.md).

## Principle 5: Execution Must Produce Outcome Evidence

24. Does execution produce evidence sufficient to evaluate what actually occurred?
25. Can outcomes be evaluated against intended results and success criteria?
26. Can the system distinguish verified success, failure, partial success, and unresolved uncertainty?
27. Is success independently validated where practical?
28. Are failures and unexpected results retained as learning inputs?
29. Are material human judgments and approvals preserved as evidence?
30. Is the evidence attributable enough to explain what happened and why the system reached its conclusion?
31. When a candidate improvement is validated, does the evidence address the intended outcome rather than only technical execution or task completion?
32. Is the validation evidence appropriate to the claim, risk, and intended scope of future use?
33. Are representative conditions covered when materially different operating scenarios affect the validation claim?
34. Are material regressions and unacceptable side effects checked when they are reasonably relevant to the candidate?
35. Are contradictory, incomplete, or insufficient results kept failed, uncertain, or unresolved rather than represented as successful validation?
36. Is enough validation evidence preserved to determine what was validated, against what criteria, under what conditions, and with what limitations?

Canonical sources: [Principle 5: Execution Must Produce Outcome Evidence](../principles/05-outcome-evidence.md), [Stage 2: Observe](../lifecycle/02-observe.md), [Stage 3: Evaluate](../lifecycle/03-evaluate.md), [Stage 6: Validate](../lifecycle/06-validate.md), and [Validation Sufficiency Requirements](../validation-sufficiency.md).

## Principle 6: Failure Determines Where the System Evolves

37. Can the system identify the type of weakness, uncertainty, or learning opportunity revealed by an outcome?
38. Are successful outcomes also classified when they provide evidence that an existing pattern should be reinforced or reused?
39. Can the system determine where the resulting learning should live?
40. Can learning be routed to deterministic capability, procedure, reasoning knowledge, validation, or governance as appropriate?
41. Can responsibility move across the Moving Determinism Boundary when classification shows that a different mechanism should own the behavior?
42. Does the system avoid forcing every lesson into one fixed adaptation mechanism?

Canonical sources: [Principle 6: Failure Determines Where the System Evolves](../principles/06-evolution-routing.md), [Stage 3: Evaluate](../lifecycle/03-evaluate.md), [Stage 4: Classify](../lifecycle/04-classify.md), and [Stage 5: Adapt](../lifecycle/05-adapt.md).

## Principle 7: Learning Must Change a Persistent Operational Asset

43. Do validated and authorized improvements survive the current execution?
44. Can persisted learning take the operational form appropriate to what was learned rather than being limited to memory or a knowledge store?
45. Does the implementation distinguish persisted learning from raw logs, transcripts, unvalidated observations, and historical records?
46. Before an improvement is persisted for future use, can the implementation show that the applicable validation sufficiency requirements were satisfied?
47. Are validation and authorization represented as separate decisions so approval cannot substitute for evidence and validation cannot grant authority?
48. Can validated learning derived from a failed or rejected attempt persist without the failed candidate itself being represented as approved behavior?
49. On a no-change path, can reinforcing evidence be associated with an existing validated operating pattern without manufacturing a candidate adaptation?
50. Are persisted learning items identifiable and scoped to the conditions supported by their evidence and validation?
51. Is persisted learning available to the later operating process that needs it rather than merely stored somewhere?
52. Can persistent assets later be refined, replaced, rolled back, invalidated, or moved when new evidence requires it?
53. Can a reviewer identify the specific persistent asset changed, learning item retained, or operating pattern reinforced by a learning event?

Canonical sources: [Principle 7: Learning Must Change a Persistent Operational Asset](../principles/07-persistent-learning.md), [Stage 6: Validate](../lifecycle/06-validate.md), [Validation Sufficiency Requirements](../validation-sufficiency.md), [Persisted Learning Requirements](../persisted-learning.md), and [Stage 7: Persist](../lifecycle/07-persist.md).

## Principle 8: Improvement Must Compound Through Reuse

54. Do later relevant executions have access to validated and authorized persisted learning from earlier cycles?
55. Can the implementation distinguish learning that was available from learning that was actually selected, applied, invoked, or enforced?
56. When reuse is claimed, can a reviewer identify the persisted learning or validated operating pattern involved and why it was applicable?
57. Is there observable evidence showing how earlier learning influenced the later execution rather than merely existing in storage?
58. Can validated failure-derived learning cause later execution to avoid a known failure, apply a constraint, select a different strategy, or otherwise improve without promoting the failed adaptation itself?
59. Can repeated successful operation demonstrate continued reuse of an existing validated operating pattern even when no new adaptation is created?
60. Does the implementation avoid requiring irrelevant, invalid, superseded, or unauthorized learning to be applied merely to claim reuse?
61. Does repeated execution reduce unnecessary repeated reasoning, repeated failure, tool exploration, or human escalation where relevant validated learning applies?
62. Does reused behavior continue to produce outcome evidence so earlier learning can be reevaluated?
63. Can a reviewer point to later behavior that changed or remained reliably improved because of learning from earlier execution?

Canonical sources: [Principle 8: Improvement Must Compound Through Reuse](../principles/08-compounding-reuse.md), [Stage 8: Reuse](../lifecycle/08-reuse.md), and [Reuse Evidence Requirements](../reuse-evidence.md).

## Conformance Decision

A system conforms to this version of the Infoconex AI Flywheel Specification when the implementation can demonstrate, through objective evidence from actual operation, that all eight canonical principles are satisfied and that the complete lifecycle behavior required by the specification is present.

When a principle is not satisfied, the implementation may still use valuable AI Flywheel concepts, but it should not be described as a complete conforming implementation.

This version does not define partial or maturity-based conformance levels.

## Related Documents

- [Conformance Overview](README.md)
- [Non-Conforming Patterns](non-conforming-patterns.md)
- [Validation Sufficiency Requirements](../validation-sufficiency.md)
- [Persisted Learning Requirements](../persisted-learning.md)
- [Reuse Evidence Requirements](../reuse-evidence.md)
- [Formal Definition](../definition.md)
- [Principles](../principles/README.md)
- [Lifecycle](../lifecycle/README.md)
