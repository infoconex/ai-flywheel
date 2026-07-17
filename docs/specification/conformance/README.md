# AI Flywheel Conformance

![AI Flywheel Conformance](../../assets/conformance.png)

Conformance determines whether an implementation satisfies the AI Flywheel specification.

The conformance section does not define the methodology on its own. The requirements come from the [Formal Definition](../definition.md), [Principles](../principles/README.md), and [Lifecycle](../lifecycle/README.md). Conformance turns those requirements into a practical assessment based on observable evidence.

A system may contain individual AI Flywheel mechanisms without conforming to the complete methodology.

## Conformance Areas

A complete conformance review evaluates the operating model across ten areas taken from the specification:

| Conformance Area | Specification Source | What Must Be Demonstrated |
|---|---|---|
| **1. Human Authority** | [Principle 1: Autonomy Is Bounded by Human Authority](../principles/01-human-authority.md) | Human-defined authority boundaries govern autonomous operation, and the AI cannot grant itself more authority. |
| **2. AI Operation** | [Principle 2: AI Is the Operator, Not Merely the Assistant](../principles/02-ai-as-operator.md), [Stage 1: Execute](../lifecycle/01-execute.md) | AI performs meaningful work rather than only producing instructions for a human operator. |
| **3. Runtime Responsibilities** | [Principle 3: Work Is Distributed Across a Moving Determinism Boundary](../principles/03-moving-determinism-boundary.md), [Runtime Architecture](../../architecture/runtime-view.md) | Deterministic capability, procedural guidance, and AI reasoning have clear and intentional roles. |
| **4. Persistent Operational Procedure** | [Principle 4: The SOP Is an Operational Control Plane](../principles/04-sop-control-plane.md) | Durable machine-consumable guidance directs how work is performed and remains subject to governance. |
| **5. Outcome Evidence** | [Principle 5: Execution Must Produce Outcome Evidence](../principles/05-outcome-evidence.md), [Stage 2: Observe](../lifecycle/02-observe.md), [Stage 3: Evaluate](../lifecycle/03-evaluate.md) | Execution produces enough evidence to judge actual outcomes instead of relying on model confidence or completion status. |
| **6. Evaluation and Classification** | [Stage 3: Evaluate](../lifecycle/03-evaluate.md), [Stage 4: Classify](../lifecycle/04-classify.md), [Principle 6: Failure Determines Where the System Evolves](../principles/06-evolution-routing.md) | The system determines what happened and identifies the type of weakness, uncertainty, or learning opportunity. |
| **7. Improvement Routing** | [Principle 6: Failure Determines Where the System Evolves](../principles/06-evolution-routing.md), [Stage 4: Classify](../lifecycle/04-classify.md), [Stage 5: Adapt](../lifecycle/05-adapt.md) | Learning is intentionally sent to the part of the system best suited to own it, including movement across the Moving Determinism Boundary when appropriate. |
| **8. Governance Enforcement** | [Principle 1: Autonomy Is Bounded by Human Authority](../principles/01-human-authority.md), [Lifecycle Governance](../lifecycle/README.md#governance-applies-throughout-the-lifecycle), [Governance and Escalation](../../architecture/governance-and-escalation.md) | Human-defined authority constrains both execution and persistent changes. |
| **9. Persistent Learning** | [Principle 7: Learning Must Change a Persistent Operational Asset](../principles/07-persistent-learning.md), [Stage 7: Persist](../lifecycle/07-persist.md) | Validated and authorized learning survives the current execution in an asset future execution can use. |
| **10. Compounding Reuse** | [Principle 8: Improvement Must Compound Through Reuse](../principles/08-compounding-reuse.md), [Stage 8: Reuse](../lifecycle/08-reuse.md) | Later executions use relevant improvements so capability, reliability, or efficiency can improve over time. |

These ten areas are a way to assess the specification, not a second set of requirements. When the specification changes, conformance should be updated to point back to the source requirement rather than redefining it here.

## Specification Traceability

The following table shows how each principle connects to lifecycle behavior and the conformance areas that assess it.

| Principle | Primary Lifecycle Relationship | Conformance Areas |
|---|---|---|
| [Principle 1: Autonomy Is Bounded by Human Authority](../principles/01-human-authority.md) | Applies before and throughout all lifecycle stages | Human Authority; Governance Enforcement |
| [Principle 2: AI Is the Operator, Not Merely the Assistant](../principles/02-ai-as-operator.md) | [Stage 1: Execute](../lifecycle/01-execute.md) | AI Operation |
| [Principle 3: Work Is Distributed Across a Moving Determinism Boundary](../principles/03-moving-determinism-boundary.md) | [Stage 1: Execute](../lifecycle/01-execute.md), [Stage 4: Classify](../lifecycle/04-classify.md), [Stage 5: Adapt](../lifecycle/05-adapt.md) | Runtime Responsibilities; Improvement Routing |
| [Principle 4: The SOP Is an Operational Control Plane](../principles/04-sop-control-plane.md) | [Stage 1: Execute](../lifecycle/01-execute.md), with later adaptation and reuse | Persistent Operational Procedure |
| [Principle 5: Execution Must Produce Outcome Evidence](../principles/05-outcome-evidence.md) | [Stage 2: Observe](../lifecycle/02-observe.md), [Stage 3: Evaluate](../lifecycle/03-evaluate.md), [Stage 6: Validate](../lifecycle/06-validate.md) | Outcome Evidence; Evaluation and Classification |
| [Principle 6: Failure Determines Where the System Evolves](../principles/06-evolution-routing.md) | [Stage 3: Evaluate](../lifecycle/03-evaluate.md), [Stage 4: Classify](../lifecycle/04-classify.md), [Stage 5: Adapt](../lifecycle/05-adapt.md) | Evaluation and Classification; Improvement Routing |
| [Principle 7: Learning Must Change a Persistent Operational Asset](../principles/07-persistent-learning.md) | [Stage 6: Validate](../lifecycle/06-validate.md), [Stage 7: Persist](../lifecycle/07-persist.md) | Persistent Learning |
| [Principle 8: Improvement Must Compound Through Reuse](../principles/08-compounding-reuse.md) | [Stage 8: Reuse](../lifecycle/08-reuse.md), which becomes the starting point for the next [Stage 1: Execute](../lifecycle/01-execute.md) | Compounding Reuse |

This table helps readers navigate the specification. The linked principle and lifecycle documents remain the source of the requirements.

## Evidence-Based Assessment

A conformance claim should be supported by observable evidence rather than labels or stated intent alone.

Evidence may include:

- Governance policies and authorization records
- SOPs or other persistent procedural assets
- Execution traces and tool outputs
- Tests and validation results
- Examples of classified failures or learning opportunities
- Persistent changes produced by earlier execution
- Later executions showing that those changes were reused

The exact technology used to satisfy the specification may vary. Conformance looks at the required behavior rather than requiring a specific language, framework, model, storage system, or infrastructure platform.

## Conformance Decision

A system conforms to this version of the AI Flywheel specification when it can demonstrate that the complete operating model satisfies all ten conformance areas.

When an area is not satisfied, the implementation may still use valuable AI Flywheel concepts, but it should not be described as a complete conforming implementation.

This version does not define partial or maturity-based conformance levels. A future version may add maturity levels for areas such as autonomy, persistence, self-modification, governance, validation, and escalation. Until then, those levels are not part of the specification.

## Supporting Evaluation Documents

- [Conformance Evaluation Checklist](evaluation-checklist.md) — Practical questions for evaluating an implementation against the ten conformance areas and their specification sources.
- [Non-Conforming Patterns](non-conforming-patterns.md) — Common patterns that contain useful Flywheel elements but do not satisfy the complete methodology.

## Related Documents

- [Formal Definition](../definition.md)
- [Terminology](../terminology.md)
- [Principles](../principles/README.md)
- [Lifecycle](../lifecycle/README.md)
- [Core Operating Model](../../architecture/operating-model.md)
- [Worked Example: Software Maintenance Flywheel](../../examples/software-maintenance-flywheel.md)
