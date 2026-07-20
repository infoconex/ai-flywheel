# Infoconex AI Flywheel Lifecycle

The AI Flywheel operates as a recurring eight-stage cycle:

**Execute → Observe → Evaluate → Classify → Adapt → Validate → Persist → Reuse**

![Infoconex AI Flywheel lifecycle](../../assets/ai-flywheel-2.png)

The lifecycle turns operating experience into validated improvements that future executions can reuse.

## Before the Cycle: Human Authorization

Before autonomous operation begins, a human or authorized group defines the scope within which the Flywheel may operate.

That authorization is represented through a Governance Policy defining:

- What the AI may do on its own
- What requires approval
- What conditions require human judgment
- When escalation is required
- What actions are prohibited

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
3. [Stage 3: Evaluate](03-evaluate.md) — Compare the outcome against the intended result and success criteria.
4. [Stage 4: Classify](04-classify.md) — Identify what was learned, the source of weakness or uncertainty, and where the learning should live.
5. [Stage 5: Adapt](05-adapt.md) — Change the procedure, reasoning, deterministic capability, validation, or governance needed to address what was learned.
6. [Stage 6: Validate](06-validate.md) — Confirm that the proposed improvement works as intended before trusting it for future use.
7. [Stage 7: Persist](07-persist.md) — Store validated and authorized learning in a durable operational asset.
8. [Stage 8: Reuse](08-reuse.md) — Use the improved operating state in future execution.

## Lifecycle Stage Contracts

Each lifecycle stage has a normative contract using the same structure:

- **Required Inputs and Preconditions** — What must be available or true before the stage can perform its responsibility.
- **Required Responsibilities** — What the stage must accomplish.
- **Required Outputs and Evidence** — What the stage must produce or preserve.
- **Completion Conditions** — What must be true for the stage responsibility to be considered complete.
- **Relationship to Adjacent Stages** — How the stage consumes the prior stage's output and prepares the next stage's input.

The stage contracts define required lifecycle responsibilities without prescribing a specific agent framework, programming language, storage mechanism, AI platform, or execution architecture.

Completion conditions define the boundary of each stage responsibility. Retry behavior, backward transitions, escalation paths, stopping conditions, validation-failure routing, and other lifecycle transition semantics are separate concerns and are not defined by the individual stage contracts.

The requirement language defined in the [Specification Overview](../README.md#requirement-language) applies to every lifecycle contract. Supporting examples and explanatory text do not create additional requirements unless they use requirement language to do so.

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
- [Worked Example: Continuous Dependency Maintenance](../../examples/software-maintenance/worked-example.md)