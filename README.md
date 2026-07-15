# AI Flywheel

> **Status:** Early definition and working specification. The methodology and supporting research will evolve as the model is tested, refined, and compared with related work.

## Formal Definition

The **AI Flywheel** is an evidence-driven operating model in which AI does not merely assist a human in performing work, but progressively builds, operates, observes, and improves the system by which the work is performed.

A human authorizes the Flywheel to operate and defines the boundaries of that authority. Once authorized, the AI operates autonomously within those boundaries until it reaches a condition requiring human judgment or human approval.

During execution, the Flywheel combines:

1. **Deterministic capability** for reliable, repeatable operations.
2. **Procedural guidance, expressed as an SOP**, for defining how work should be performed and when escalation is required.
3. **AI reasoning** for orchestration, interpretation, judgment, adaptation, and ambiguity.

These are not sequential lifecycle stages. They work together during execution and become possible destinations for learning after execution produces evidence.

The core cycle is:

**Execute → Observe → Evaluate → Classify → Adapt → Validate → Persist → Reuse**

Governance applies throughout the cycle, determining whether actions and changes are authorized, require human approval, require human judgment, or are prohibited.

## High-Level Principles

### 1. Autonomy Is Bounded by Human Authority

A human authorizes the Flywheel and defines its authority boundaries. The AI then operates autonomously within those boundaries and escalates only when uncertainty or authority requires human involvement.

### 2. AI Is the Operator, Not Merely the Assistant

The AI executes the operational process and can create, invoke, interpret, and improve the capabilities it uses to perform the work.

### 3. Work Is Distributed Across a Moving Determinism Boundary

Responsibility is deliberately divided among deterministic capability, procedural SOPs, and AI reasoning. As evidence accumulates, responsibility can move between these mechanisms.

### 4. The SOP Is an Operational Control Plane

The SOP is a machine-consumable operational contract that defines the intended outcome, normal execution path, available capabilities, known failure handling, evidence requirements, and escalation conditions.

### 5. Execution Must Produce Outcome Evidence

The system learns from observed outcomes rather than AI confidence alone. Executions should produce enough evidence to determine what happened and whether the intended result occurred.

### 6. Failure Determines Where the System Evolves

After execution is evaluated, the Flywheel determines where the resulting learning should live: deterministic capability, procedural knowledge, reasoning knowledge, validation, or governance.

### 7. Learning Must Change a Persistent Operational Asset

Useful learning must survive the current execution in a form that can influence future operation.

### 8. Improvement Must Compound Through Reuse

The output of one cycle becomes part of the operating system of the next, progressively reducing repeated failure, repeated reasoning, and unnecessary human intervention.

## The Two Core Boundaries

The **Moving Determinism Boundary** determines where work and learning should live among deterministic capability, procedural knowledge, and AI reasoning.

The **Authority Boundary** determines what the AI is permitted to decide, execute, change, or persist autonomously.

The determinism boundary can move as the system learns. The authority boundary is governed by humans.

## Documentation

Start with the [documentation index](docs/README.md).

- [AI Flywheel Specification](docs/specification/README.md) — The canonical definition, principles, lifecycle, governance model, and conformance criteria.
- [AI Flywheel Architecture](docs/architecture/README.md) — Starting diagrams for the runtime model, learning model, governance, and escalation.
- [AI Flywheel Research](docs/research/README.md) — Prior-art analysis, framework comparisons, and principle research dossiers.

The specification defines the methodology. The research collection examines related ideas, antecedents, and differentiation without making prior-art discussion part of the canonical definition.
