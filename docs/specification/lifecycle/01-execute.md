# Stage 1: Execute

The AI performs the operational work using the current combination of procedural guidance, AI reasoning, and deterministic capability.

## Purpose

Execution applies the current operating system of the Flywheel to real work.

The AI is the operator of the process. It follows persistent procedural guidance, invokes deterministic capabilities, reasons about context and ambiguity, and carries authorized work forward without requiring a human to perform routine operational steps.

## Inputs

Execution begins with:

- an authorized goal, trigger, request, event, or unit of work,
- the applicable Governance Policy,
- the current SOP or other persistent procedural guidance,
- available deterministic capabilities,
- relevant reasoning knowledge and context,
- and the current operating state inherited from prior Flywheel cycles.

## Required Behavior

During execution:

- the AI must perform meaningful operational work rather than only generate instructions for a human operator,
- deterministic capability, procedural guidance, and AI reasoning must have intentional and distinguishable roles,
- the AI should follow the applicable SOP while retaining enough reasoning ability to handle context, ambiguity, and exceptions,
- deterministic capabilities should be used where reliable repeatable behavior already exists,
- and actions must remain within the current Governance Policy.

The three operating mechanisms are not separate lifecycle stages. A single execution may move between AI reasoning and deterministic capabilities many times while following the same procedure.

## Outputs

Execution produces:

- operational results and outputs,
- state changes,
- tool and capability results,
- errors and exceptions,
- decisions and escalation events,
- validation signals generated during operation,
- and other raw events needed to determine what actually occurred.

These outputs become the primary inputs to [Stage 2: Observe](02-observe.md).

## Governance Considerations

Every action remains subject to the Governance Policy.

When execution reaches the Authority Boundary, the affected action must be handled according to its governance outcome: Authorized, Approval Required, or Prohibited.

When execution reaches the Uncertainty Boundary because evidence is insufficient for responsible autonomous judgment, the affected decision requires additional evidence or human judgment.

Where practical, unrelated authorized work should continue rather than stopping the entire process.

## Failure and Exit Conditions

Execution does not end the Flywheel merely because the task completed, failed, or raised no exception.

Every meaningful execution should proceed to observation with enough operational data to evaluate the actual outcome.

When the AI cannot continue within its delegated authority or cannot responsibly resolve uncertainty, the affected decision must be paused or escalated rather than bypassing governance.

## Relationships to Principles

- [Principle 1: Autonomy Is Bounded by Human Authority](../principles/01-human-authority.md) constrains every operational action.
- [Principle 2: AI Is the Operator, Not Merely the Assistant](../principles/02-ai-as-operator.md) establishes that the AI owns execution continuity.
- [Principle 3: Work Is Distributed Across a Moving Determinism Boundary](../principles/03-moving-determinism-boundary.md) defines how runtime responsibility is allocated.
- [Principle 4: The SOP Is an Operational Control Plane](../principles/04-sop-control-plane.md) defines the persistent procedural guidance used during execution.
- [Principle 5: Execution Must Produce Outcome Evidence](../principles/05-outcome-evidence.md) requires execution to produce enough observable information for later assessment.

## Stage Navigation

- [Lifecycle Index](README.md)
- **Next Stage:** [Stage 2: Observe](02-observe.md)

## Related Documents

- [Runtime Architecture](../../architecture/runtime-view.md)
- [Core Operating Model](../../architecture/operating-model.md)
