# AI Flywheel Conformance

Conformance determines whether an implementation satisfies the canonical AI Flywheel specification.

The conformance section does not independently define the methodology. Normative requirements are defined by the [Formal Definition](../definition.md), [Principles](../principles/README.md), and [Lifecycle](../lifecycle/README.md). Conformance translates those requirements into an implementation-focused assessment model supported by observable evidence.

A system may contain individual AI Flywheel mechanisms without conforming to the complete methodology.

## Conformance Areas

A complete conformance review evaluates the operating model across ten areas derived from the canonical specification:

| Conformance Area | Canonical Specification Source | What Must Be Demonstrated |
|---|---|---|
| **1. Human Authority** | [Principle 1: Autonomy Is Bounded by Human Authority](../principles/01-human-authority.md) | Explicit human-defined authority boundaries govern autonomous operation and authority expansion cannot be self-granted. |
| **2. AI Operation** | [Principle 2: AI Is the Operator, Not Merely the Assistant](../principles/02-ai-as-operator.md), [Stage 1: Execute](../lifecycle/01-execute.md) | AI performs meaningful operational work rather than only producing instructions for a human operator. |
| **3. Runtime Responsibilities** | [Principle 3: Work Is Distributed Across a Moving Determinism Boundary](../principles/03-moving-determinism-boundary.md), [Runtime Architecture](../../architecture/runtime-view.md) | Deterministic capability, procedural guidance, and AI reasoning have intentional and distinguishable roles. |
| **4. Persistent Operational Procedure** | [Principle 4: The SOP Is an Operational Control Plane](../principles/04-sop-control-plane.md) | Durable machine-consumable procedural guidance governs how the work is performed and remains subordinate to governance. |
| **5. Outcome Evidence** | [Principle 5: Execution Must Produce Outcome Evidence](../principles/05-outcome-evidence.md), [Stage 2: Observe](../lifecycle/02-observe.md), [Stage 3: Evaluate](../lifecycle/03-evaluate.md) | Execution produces evidence sufficient to evaluate actual outcomes rather than relying on model confidence or completion status. |
| **6. Evaluation and Classification** | [Stage 3: Evaluate](../lifecycle/03-evaluate.md), [Stage 4: Classify](../lifecycle/04-classify.md), [Principle 6: Failure Determines Where the System Evolves](../principles/06-evolution-routing.md) | The system determines what occurred and identifies the nature of weaknesses, uncertainty, or learning opportunities. |
| **7. Improvement Routing** | [Principle 6: Failure Determines Where the System Evolves](../principles/06-evolution-routing.md), [Stage 4: Classify](../lifecycle/04-classify.md), [Stage 5: Adapt](../lifecycle/05-adapt.md) | Learning is intentionally routed to the persistent mechanism best suited to own it, including movement across the Moving Determinism Boundary when appropriate. |
| **8. Governance Enforcement** | [Principle 1: Autonomy Is Bounded by Human Authority](../principles/01-human-authority.md), [Lifecycle Governance](../lifecycle/README.md#governance-applies-throughout-the-lifecycle), [Governance and Escalation](../../architecture/governance-and-escalation.md) | Human-defined authority constrains both operational execution and persistent adaptation. |
| **9. Persistent Learning** | [Principle 7: Learning Must Change a Persistent Operational Asset](../principles/07-persistent-learning.md), [Stage 7: Persist](../lifecycle/07-persist.md) | Validated and authorized learning survives the current execution in an operational asset future execution can use. |
| **10. Compounding Reuse** | [Principle 8: Improvement Must Compound Through Reuse](../principles/08-compounding-reuse.md), [Stage 8: Reuse](../lifecycle/08-reuse.md) | Later executions inherit relevant improvements so capability, reliability, or efficiency can compound over time. |

These ten areas are an assessment structure, not a second set of independent specification requirements. When the specification changes, conformance should be updated to reflect the canonical source rather than redefining the requirement here.

## Specification Traceability

The following view shows how each canonical principle connects to lifecycle behavior and the conformance areas that assess it.

| Canonical Principle | Primary Lifecycle Relationship | Conformance Areas |
|---|---|---|
| [Principle 1: Autonomy Is Bounded by Human Authority](../principles/01-human-authority.md) | Applies continuously before and throughout all lifecycle stages | Human Authority; Governance Enforcement |
| [Principle 2: AI Is the Operator, Not Merely the Assistant](../principles/02-ai-as-operator.md) | [Stage 1: Execute](../lifecycle/01-execute.md) | AI Operation |
| [Principle 3: Work Is Distributed Across a Moving Determinism Boundary](../principles/03-moving-determinism-boundary.md) | [Stage 1: Execute](../lifecycle/01-execute.md), [Stage 4: Classify](../lifecycle/04-classify.md), [Stage 5: Adapt](../lifecycle/05-adapt.md) | Runtime Responsibilities; Improvement Routing |
| [Principle 4: The SOP Is an Operational Control Plane](../principles/04-sop-control-plane.md) | [Stage 1: Execute](../lifecycle/01-execute.md), with later adaptation and reuse | Persistent Operational Procedure |
| [Principle 5: Execution Must Produce Outcome Evidence](../principles/05-outcome-evidence.md) | [Stage 2: Observe](../lifecycle/02-observe.md), [Stage 3: Evaluate](../lifecycle/03-evaluate.md), [Stage 6: Validate](../lifecycle/06-validate.md) | Outcome Evidence; Evaluation and Classification |
| [Principle 6: Failure Determines Where the System Evolves](../principles/06-evolution-routing.md) | [Stage 3: Evaluate](../lifecycle/03-evaluate.md), [Stage 4: Classify](../lifecycle/04-classify.md), [Stage 5: Adapt](../lifecycle/05-adapt.md) | Evaluation and Classification; Improvement Routing |
| [Principle 7: Learning Must Change a Persistent Operational Asset](../principles/07-persistent-learning.md) | [Stage 6: Validate](../lifecycle/06-validate.md), [Stage 7: Persist](../lifecycle/07-persist.md) | Persistent Learning |
| [Principle 8: Improvement Must Compound Through Reuse](../principles/08-compounding-reuse.md) | [Stage 8: Reuse](../lifecycle/08-reuse.md), which becomes the starting state for the next [Stage 1: Execute](../lifecycle/01-execute.md) | Compounding Reuse |

This table is a navigation and traceability aid. The linked principle and lifecycle documents remain authoritative.

## Evidence-Based Assessment

A conformance claim should be supported by observable evidence rather than architecture labels, implementation intent, or terminology alone.

Evidence may include:

- governance policies and authorization records,
- SOPs or other persistent procedural artifacts,
- execution traces and tool outputs,
- tests and validation results,
- examples of classified failures or learning opportunities,
- persistent changes produced by prior execution,
- and later executions demonstrating reuse of those changes.

The exact technology used to satisfy the specification may vary. Conformance evaluates required operational behavior rather than prescribing a particular language, framework, model, storage system, or infrastructure platform.

## Conformance Decision

A system conforms to this version of the AI Flywheel specification when the implementation can demonstrate that the complete operating model satisfies all ten conformance areas as derived from the canonical specification.

When an area is not satisfied, the implementation may still use valuable AI Flywheel concepts, but it should not be described as a complete conforming implementation.

This version of the specification does not define partial or maturity-based conformance levels. Future versions may introduce maturity classifications based on factors such as delegated autonomy, persistence, self-modification, governance maturity, validation rigor, and escalation behavior. Until such levels are formally defined, they are not normative.

## Supporting Evaluation Documents

- [Conformance Evaluation Checklist](evaluation-checklist.md) — Practical questions for evaluating an implementation against the ten conformance areas and their canonical specification sources.
- [Non-Conforming Patterns](non-conforming-patterns.md) — Common patterns that contain useful Flywheel elements but do not satisfy the complete methodology.

## Related Documents

- [Formal Definition](../definition.md)
- [Terminology](../terminology.md)
- [Principles](../principles/README.md)
- [Lifecycle](../lifecycle/README.md)
- [Core Operating Model](../../architecture/operating-model.md)
- [Worked Example: Software Maintenance Flywheel](../../examples/software-maintenance-flywheel.md)
