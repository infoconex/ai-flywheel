# AI Flywheel Lifecycle

The AI Flywheel operates as a recurring eight-stage cycle:

**Execute → Observe → Evaluate → Classify → Adapt → Validate → Persist → Reuse**

![AI Flywheel lifecycle](../../assets/ai-flywheel-2.png)

The lifecycle turns operational experience into validated improvements that future executions can reuse.

## Before the Cycle: Human Authorization

Before autonomous operation begins, a human or authorized governing body establishes the scope within which the Flywheel may operate.

That authorization is represented through a Governance Policy defining:

- autonomous authority,
- approval requirements,
- conditions requiring human judgment,
- escalation conditions,
- and prohibited actions.

Human authorization does not require a human to manually initiate every execution. Once authorized, the Flywheel may operate in response to schedules, events, triggers, requests, or continuous conditions within its delegated authority.

See [Principle 1: Autonomy Is Bounded by Human Authority](../principles/01-human-authority.md).

## Governance Applies Throughout the Lifecycle

Governance is not an additional lifecycle stage. It is a continuous constraint that applies whenever the Flywheel proposes an action, decision, change, or persistent learning.

A governed action or change resolves to one of four outcomes:

1. **Authorized** — the AI may proceed autonomously.
2. **Approval Required** — the AI recommends an action but requires human permission.
3. **Judgment Required** — the AI lacks sufficient evidence to responsibly determine the correct action.
4. **Prohibited** — the action is not permitted under the current Governance Policy.

Where practical, escalation should pause only the affected decision rather than unnecessarily stopping unrelated authorized work.

See [Governance and Escalation](../../architecture/governance-and-escalation.md).

## Lifecycle Stages

1. [Execute](01-execute.md) — Perform the work using procedural guidance, AI reasoning, and deterministic capabilities.
2. [Observe](02-observe.md) — Capture evidence about what actually occurred during execution.
3. [Evaluate](03-evaluate.md) — Compare observed outcomes with intended outcomes and success criteria.
4. [Classify](04-classify.md) — Identify the nature of a weakness or learning opportunity and ask where the learning should live.
5. [Adapt](05-adapt.md) — Apply or propose the improvement appropriate to the classification.
6. [Validate](06-validate.md) — Test the proposed improvement before trusting it for future use.
7. [Persist](07-persist.md) — Store validated and authorized learning in a durable operational asset.
8. [Reuse](08-reuse.md) — Begin future executions with the improved operating system.

## The Flywheel Effect

The cycle becomes a Flywheel when reuse causes the benefits of previous cycles to accumulate.

The goal is not continuous change for its own sake. Stable successful behavior should remain stable. The system should evolve when evidence demonstrates that a persistent improvement is justified.

A mature AI Flywheel should reduce repeated reasoning, repeated failure, and unnecessary human intervention while preserving AI judgment and human authority where they remain necessary.

## Related Documents

- [Formal Definition](../definition.md)
- [Principles](../principles/README.md)
- [Conformance Criteria](../conformance/README.md)
- [Architecture and Diagrams](../../architecture/README.md)