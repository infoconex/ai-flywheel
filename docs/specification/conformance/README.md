---
title: "AI Flywheel Conformance Criteria"
document_type: "overview"
section: "specification"
status: "canonical"
canonical: true
order: 5
summary: "A system described as implementing the AI Flywheel should satisfy all ten required conformance criteria defined in this section."
last_reviewed: "2026-07-16"
tags:
  - "overview"
---

# AI Flywheel Conformance Criteria

A system described as implementing the AI Flywheel should satisfy all ten required conformance criteria defined in this section.

Conformance is evaluated against the operating model as a whole. A system may contain individual AI Flywheel mechanisms without conforming to the complete methodology.

## Required Criteria

1. [Human Authority Defines the Scope of Autonomy](01-human-authority.md) — Explicit human-defined authority boundaries govern autonomous operation.
2. [AI Executes the Process](02-ai-executes-process.md) — AI performs meaningful operational work rather than only advising a human operator.
3. [Runtime Responsibilities Are Distinguishable](03-runtime-responsibilities.md) — Deterministic capability, procedural guidance, and AI reasoning have distinguishable roles.
4. [A Persistent Operational Procedure Exists](04-persistent-operational-procedure.md) — Durable procedural guidance governs how the work is performed.
5. [Execution Produces Outcome Evidence](05-outcome-evidence.md) — The system captures evidence sufficient to evaluate actual outcomes.
6. [Outcomes Are Evaluated and Classified](06-evaluation-and-classification.md) — The system determines what occurred and identifies the nature of weaknesses or learning opportunities.
7. [Improvements Are Routed to the Appropriate Destination](07-improvement-routing.md) — Learning is directed to the persistent mechanism best suited to own it.
8. [Governance Is Enforced During Action and Adaptation](08-governance-enforcement.md) — Authority boundaries constrain both operational execution and self-improvement.
9. [Useful Learning Persists](09-persistent-learning.md) — Validated and authorized learning survives the current execution.
10. [Future Executions Reuse the Improved System](10-compounding-reuse.md) — Later executions inherit improvements so capability can compound.

## Supporting Evaluation Documents

- [Non-Conforming Patterns](non-conforming-patterns.md) — Common patterns that contain useful Flywheel elements but do not satisfy the complete methodology.
- [Conformance Evaluation Checklist](evaluation-checklist.md) — A practical question-based review for evaluating an implementation.

## Conformance Standard

A conforming AI Flywheel implementation should satisfy all ten required criteria.

The exact technology used to implement each requirement may vary. The specification defines the required operational behavior rather than prescribing a particular language, framework, model, storage system, or infrastructure platform.

## Conformance Levels

This version of the specification does not define partial or maturity-based conformance levels.

Future versions may introduce maturity classifications based on factors such as delegated autonomy, persistence, self-modification, governance maturity, validation rigor, and escalation behavior. Until such levels are formally defined, they are not normative.

## Related Documents

- [Formal Definition](../ai-flywheel-definition.md)
- [Principles](../principles/README.md)
- [Lifecycle](../lifecycle/README.md)
- [Architecture and Diagrams](../../architecture/README.md)
