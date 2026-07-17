# Stage 3: Evaluate

The AI compares the observed outcome with the intended outcome and applicable success criteria.

## Purpose

Evaluation determines what the evidence means.

The Flywheel must assess the actual outcome rather than assume success because execution completed, no exception was raised, or the AI is confident in its own result.

## Inputs

Evaluation receives:

- the observed evidence set from [Stage 2: Observe](02-observe.md),
- the intended outcome,
- applicable success criteria,
- relevant validation requirements,
- known assumptions and constraints,
- and any governance rules affecting how uncertainty or consequential outcomes must be handled.

## Required Behavior

The Flywheel should distinguish among outcomes such as:

- verified success,
- partial success,
- known failure,
- and uncertain outcome.

Evaluation should use the best available evidence, including independent validation signals where practical.

The Flywheel should ask:

- Did the intended outcome actually occur?
- Were all required conditions satisfied?
- Did the process produce unexpected side effects?
- Were assumptions violated?
- Is the available evidence sufficient to make a responsible determination?

Uncertainty itself is a valid outcome. The system must not convert insufficient evidence into unsupported confidence merely to continue the lifecycle.

## Outputs

Evaluation produces:

- an assessed outcome,
- the evidence supporting that assessment,
- identified gaps or violated assumptions,
- unresolved uncertainty,
- and any observed weakness or learning opportunity that should proceed to [Stage 4: Classify](04-classify.md).

A verified success may still reveal a learning opportunity. A successful result does not imply that the process was optimal, efficient, or appropriately allocated across runtime mechanisms.

## Governance Considerations

When evidence is insufficient for responsible autonomous judgment, the Uncertainty Boundary has been reached.

If additional evidence can resolve the uncertainty within delegated authority, the Flywheel should obtain it. If not, the affected decision requires human judgment.

A technically clear outcome may still trigger the Authority Boundary when the next action is not autonomously permitted.

## Failure and Exit Conditions

Evaluation can advance to classification when the system has:

- a supported outcome assessment,
- an explicit uncertain outcome,
- or a sufficiently identified weakness or learning opportunity to classify.

The stage should return to observation when additional obtainable evidence is required.

The stage should escalate when unresolved uncertainty cannot be responsibly resolved within delegated authority.

## Relationships to Principles

- [Principle 5: Execution Must Produce Outcome Evidence](../principles/05-outcome-evidence.md) requires evaluation to be grounded in observable evidence.
- [Principle 6: Failure Determines Where the System Evolves](../principles/06-evolution-routing.md) uses evaluation results as the basis for later classification and routing.
- [Principle 1: Autonomy Is Bounded by Human Authority](../principles/01-human-authority.md) distinguishes unresolved uncertainty from actions that are understood but not authorized.

## Stage Navigation

- [Lifecycle Index](README.md)
- **Previous Stage:** [Stage 2: Observe](02-observe.md)
- **Next Stage:** [Stage 4: Classify](04-classify.md)

## Related Documents

- [Learning Architecture](../../architecture/learning-view.md)
- [Governance and Escalation](../../architecture/governance-and-escalation.md)
