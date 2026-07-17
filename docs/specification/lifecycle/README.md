# AI Flywheel Lifecycle

The AI Flywheel operates as a recurring eight-stage cycle:

**Execute → Observe → Evaluate → Classify → Adapt → Validate → Persist → Reuse**

![AI Flywheel lifecycle](../../assets/ai-flywheel-2.png)

The lifecycle turns operating experience into validated improvements that future executions can reuse.

## Before the Cycle: Human Authorization

Before autonomous operation begins, a human or authorized group defines the scope within which the Flywheel may operate.

That authorization is represented through a Governance Policy defining:

- what the AI may do on its own,
- what requires approval,
- what conditions require human judgment,
- when escalation is required,
- and what actions are prohibited.

Human authorization does not require a human to manually start every execution. Once authorized, the Flywheel may operate in response to schedules, events, triggers, requests, or ongoing conditions within the authority it has been given.

See [Principle 1: Autonomy Is Bounded by Human Authority](../principles/01-human-authority.md).

## Governance Applies Throughout the Lifecycle

Governance is not another lifecycle stage. It applies whenever the Flywheel proposes an action, decision, change, or persistent learning.

A governed action or change resolves to one of four outcomes:

1. **Authorized** — The AI may proceed on its own.
2. **Approval Required** — The AI recommends an action but requires human permission.
3. **Judgment Required** — The AI does not have enough evidence to responsibly determine the correct action.
4. **Prohibited** — The action is not allowed under the current Governance Policy.

Where practical, escalation should pause only the affected decision rather than unnecessarily stopping unrelated authorized work.

See [Governance and Escalation](../../architecture/governance-and-escalation.md).

## Lifecycle Stages

1. [Stage 1: Execute](01-execute.md) — Perform the work using procedural guidance, AI reasoning, and deterministic capabilities.
2. [Stage 2: Observe](02-observe.md) — Capture evidence about what actually happened during execution.
3. [Stage 3: Evaluate](03-evaluate.md) — Compare observed outcomes with intended outcomes and success criteria.
4. [Stage 4: Classify](04-classify.md) — Identify the type of weakness or learning opportunity and ask where the learning should live.
5. [Stage 5: Adapt](05-adapt.md) — Apply or propose the improvement that fits the classification.
6. [Stage 6: Validate](06-validate.md) — Test the proposed improvement before trusting it for future use.
7. [Stage 7: Persist](07-persist.md) — Store validated and authorized learning in a durable operational asset.
8. [Stage 8: Reuse](08-reuse.md) — Begin future executions with the improved operating system.

## Lifecycle Document Structure

Each lifecycle stage uses the same basic structure:

- **Purpose** — Why does this stage exist?
- **Inputs** — What must be available when the stage begins?
- **Required Behavior** — What must or should happen during the stage?
- **Outputs** — What does the stage produce for the next stage or future execution?
- **Governance Considerations** — How do authority, approval, prohibition, or human judgment affect this stage?
- **Failure and Exit Conditions** — When can the stage advance, loop back, pause, or escalate?
- **Relationships to Principles** — Which named principles are most directly connected to this stage?

The lifecycle pages explain when required behavior occurs. The linked principle pages remain the main source for principle-level requirements.

## The Flywheel Effect

The cycle becomes a Flywheel when future execution uses the improvements created by earlier cycles.

The goal is not change for its own sake. Stable successful behavior should remain stable. The system should evolve when evidence shows that a lasting improvement is justified.

A mature AI Flywheel should reduce repeated reasoning, repeated failure, and unnecessary human intervention while preserving AI judgment and human authority where they are still needed.

## Related Documents

- [Formal Definition](../definition.md)
- [Terminology](../terminology.md)
- [Principles](../principles/README.md)
- [Conformance](../conformance/README.md)
- [Core Operating Model](../../architecture/operating-model.md)
- [Worked Example: Software Maintenance Flywheel](../../examples/software-maintenance-flywheel.md)
