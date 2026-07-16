# Conformance Evaluation Checklist

Use this checklist to evaluate whether a system satisfies the AI Flywheel conformance criteria.

A complete conformance review should be supported by observable evidence rather than architecture labels or stated intent alone.

## Human Authority

1. Who authorized the Flywheel to operate?
2. Where are its authority boundaries defined?
3. What actions may the AI perform autonomously?
4. What actions require human approval?
5. What conditions require human judgment?
6. What actions are prohibited?
7. Can the AI expand its own authority, or only recommend a governance change for human approval?

See [Criterion 1: Human Authority Defines the Scope of Autonomy](01-human-authority.md).

## AI Operation

8. Does the AI perform meaningful operational work itself?
9. Can it continue autonomously within its delegated authority?
10. Does routine execution avoid unnecessary human handoffs?

See [Criterion 2: AI Executes the Process](02-ai-executes-process.md).

## Runtime Responsibilities

11. Can the system distinguish deterministic capability, procedural guidance, and AI reasoning?
12. Is each responsibility intentionally placed in the mechanism best suited to own it?
13. Can those responsibilities move when evidence shows the current allocation is no longer appropriate?

See [Criterion 3: Runtime Responsibilities Are Distinguishable](03-runtime-responsibilities.md).

## Operational Procedure

14. Does a persistent SOP or equivalent procedure exist?
15. Does it define how work should be performed and how known exceptions should be handled?
16. Does it identify available capabilities, evidence expectations, validation, and escalation conditions where appropriate?
17. Is the SOP subordinate to the Governance Policy?

See [Criterion 4: A Persistent Operational Procedure Exists](04-persistent-operational-procedure.md).

## Outcome Evidence

18. Does execution produce evidence sufficient to evaluate what actually occurred?
19. Is success independently validated where practical?
20. Are failures and unexpected results retained as learning inputs?
21. Are material human judgments and approvals preserved as evidence?

See [Criterion 5: Execution Produces Outcome Evidence](05-outcome-evidence.md).

## Evaluation and Classification

22. Does the system evaluate outcomes against intended results and success criteria?
23. Can it distinguish verified success, failure, partial success, and unresolved uncertainty?
24. Can it identify the type of weakness or learning opportunity?
25. Can it ask where the resulting learning should live?

See [Criterion 6: Outcomes Are Evaluated and Classified](06-evaluation-and-classification.md).

## Improvement Routing

26. Can learning be routed to deterministic capability, procedure, reasoning knowledge, validation, or governance?
27. Can responsibility move across the Moving Determinism Boundary?
28. Does the system avoid forcing every lesson into one fixed adaptation mechanism?

See [Criterion 7: Improvements Are Routed to the Appropriate Destination](07-improvement-routing.md).

## Governance Enforcement

29. Does governance constrain operational actions as they occur?
30. Does governance also constrain persistent self-improvement?
31. Can the system distinguish approval required from judgment required?
32. Are prohibited actions actually blocked?

See [Criterion 8: Governance Is Enforced During Action and Adaptation](08-governance-enforcement.md).

## Persistent Learning

33. Do validated and authorized improvements survive the current execution?
34. Are they stored in durable operational assets that future execution can use?
35. Can persistent assets later be refined, replaced, rolled back, or moved when new evidence requires it?

See [Criterion 9: Useful Learning Persists](09-persistent-learning.md).

## Compounding Reuse

36. Do later executions inherit relevant validated improvements?
37. Does repeated execution reduce unnecessary repeated reasoning, failure, or human escalation?
38. Can a reviewer point to behavior that improved because of learning from earlier executions?

See [Criterion 10: Future Executions Reuse the Improved System](10-compounding-reuse.md).

## Conformance Decision

A system conforms to this version of the AI Flywheel specification when all ten required criteria are satisfied.

When a criterion is not satisfied, the implementation may still use valuable AI Flywheel concepts, but it should not be described as a complete conforming implementation.

## Related Documents

- [Conformance Index](README.md)
- [Non-Conforming Patterns](non-conforming-patterns.md)
