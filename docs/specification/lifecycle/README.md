# Infoconex AI Flywheel Lifecycle

The AI Flywheel operates as a recurring eight-stage cycle:

**Execute → Observe → Evaluate → Classify → Adapt → Validate → Persist → Reuse**

![Infoconex AI Flywheel lifecycle](../../assets/ai-flywheel-2.png)

The lifecycle turns operating experience into validated learning that can improve or reinforce future execution.

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
4. [Stage 4: Classify](04-classify.md) — Identify what was learned, whether change is justified, and where any resulting learning should live.
5. [Stage 5: Adapt](05-adapt.md) — Create a candidate improvement when change is justified or explicitly resolve that no adaptation is required.
6. [Stage 6: Validate](06-validate.md) — Determine whether the candidate improvement or other learning disposition is sufficiently supported before it is trusted for future use.
7. [Stage 7: Persist](07-persist.md) — Retain validated learning, including useful failure-derived or reinforcing knowledge, in a durable form future execution can use.
8. [Stage 8: Reuse](08-reuse.md) — Apply relevant persisted learning and validated operating patterns in later execution.

## Lifecycle Stage Document Structure

Each lifecycle stage follows a consistent document structure.

### Normative Stage Contract

The normative contract for each stage uses the same five sections:

- **Required Inputs and Preconditions** — What must be available or true before the stage can perform its responsibility.
- **Required Responsibilities** — What the stage must accomplish.
- **Required Outputs and Evidence** — What the stage must produce or preserve.
- **Completion Conditions** — What must be true for the stage responsibility to be considered complete.
- **Relationship to Adjacent Stages** — How the stage consumes the prior stage's output and prepares the next stage's input.

The stage contracts define required lifecycle responsibilities without prescribing a specific agent framework, programming language, storage mechanism, AI platform, or execution architecture.

Completion conditions define the boundary of each stage responsibility. The canonical stage order defines the logical dependency of the operating model, but it does not require an implementation to execute each stage exactly once as a rigid linear workflow.

### Supporting Sections

Each lifecycle stage also includes supporting sections that explain and connect the contract:

- **Purpose** — Why the stage exists.
- **Governance Considerations** — How authority, approval, prohibition, and human judgment affect the stage.
- **Relationships to Principles** — Which named principles are most directly connected to the stage.
- **Stage Navigation** — Where the stage sits in the lifecycle.
- **Related Documents** — Where to find relevant supporting material.

The requirement language defined in the [Specification Overview](../README.md#requirement-language) applies throughout every lifecycle page. Supporting explanation does not create additional requirements unless it uses requirement language to do so.

## Lifecycle Transition Semantics

Every lifecycle stage responsibility must be accounted for. A stage may produce a new change, reinforce an existing validated pattern, produce reusable learning from failure, or explicitly resolve that no new persistent change is justified.

An implementation may organize the lifecycle as a pipeline, state machine, agent workflow, event-driven process, or another architecture. Regardless of implementation structure, it must not treat non-linear control flow as permission to bypass required lifecycle responsibilities.

### Permitted Transition Behavior

The lifecycle permits the following transition behavior when supported by evidence and governance:

- **Forward transition** — Continue to the next logical stage when the current stage has a supported result.
- **Retry** — Repeat the current stage when the responsibility is not yet resolved and another attempt is justified.
- **Backward transition** — Return to an earlier stage when new evidence invalidates or materially changes an earlier assumption, assessment, classification, or candidate.
- **Escalation or pause** — Pause the affected decision for required approval or human judgment, then resume from the stage appropriate to the resulting decision.
- **Stop or abandon** — End an attempted action or candidate when proceeding is unsafe, prohibited, unsupported, or no longer justified while preserving the resulting evidence and considering whether it creates reusable learning.

Retries, backward transitions, and stopped attempts must not erase material evidence from earlier attempts. When a transition causes operational work to execute again, the new attempt must remain observable and evaluable rather than replacing the evidence from the prior attempt.

Stopping or abandoning an attempted action or candidate does not automatically stop the lifecycle's learning responsibilities. The resulting evidence must still be evaluated and classified, and any justified learning must continue through validation, persistence, and reuse as appropriate.

A backward transition does not erase later evidence. For example, failed validation becomes new evidence that may cause the Flywheel to return to Evaluate, Classify, or Adapt.

A stage is not considered satisfied merely because the implementation moved past it. Its responsibility must be resolved explicitly enough to produce the evidence required by the lifecycle.

### Successful No-Change Behavior

The lifecycle exists to improve future execution when evidence justifies improvement. It does not require change for its own sake.

When evaluation shows that the outcome is successful or acceptable and classification determines that no adaptation is warranted:

1. **Classify** records the explicit no-change decision and the evidence showing why the current operating pattern remains appropriate.
2. **Adapt** resolves that no candidate adaptation is required rather than manufacturing an unnecessary change. It preserves the current pattern and identifies any learning or reinforcing evidence that should be validated.
3. **Validate** determines whether the no-change conclusion and any reusable or reinforcing learning are adequately supported. If the conclusion is not supported, the lifecycle returns to the appropriate earlier stage.
4. **Persist** durably associates the validated reinforcing evidence with the existing operating pattern so the evidence remains available to future evaluation and reuse. It does not misrepresent a no-change result as a new adaptation or improvement.
5. **Reuse** continues to make the existing validated operating pattern and relevant accumulated learning available to future execution.

A deliberate `no change required` result is therefore a resolved lifecycle outcome, not permission to skip Adapt, Validate, Persist, or Reuse responsibilities.

Repeated successful outcomes may strengthen the evidence supporting an existing validated pattern. That reinforcement can itself be useful learning even when the operating behavior does not change.

### Failure and Validation-Failure Behavior

A failed execution, failed adaptation, and failed validation can all produce valuable learning.

The lifecycle must distinguish between the status of an attempted adaptation and the status of the learning produced by that attempt:

- A failed, unresolved, or unvalidated adaptation must not be promoted as an approved operational improvement.
- The evidence produced by the failed attempt remains available for evaluation and classification.
- Failure-derived learning may become a separate reusable lesson, such as a known-failure rule, applicability constraint, detection rule, validation check, procedural instruction, or strategy-selection rule.
- Failure-derived learning must itself be sufficiently validated and authorized before it becomes trusted persistent operational learning.
- Once validated and persisted, that learning may be reused to avoid repeating the failed approach, detect the condition earlier, constrain when an approach applies, or select a different strategy.

Stopping or abandoning a failed candidate does not require discarding what was learned from it. Likewise, preserving a historical record of failure does not by itself make the failure reusable learning. The useful lesson must be made available to future operation in an appropriate persistent form.

### Validation Failure Does Not End Learning

When validation fails or remains unresolved, the candidate is not eligible to become an approved operational improvement. The validation result becomes new lifecycle evidence and may lead to:

- Retrying validation when the evidence or test conditions were incomplete.
- Returning to Adapt to revise or replace the candidate.
- Returning to Classify when the failure shows that the learning was routed to the wrong destination.
- Returning to Evaluate when the intended outcome or interpretation of the evidence must be reconsidered.
- Escalating for human judgment or authorization.
- Stopping the attempted improvement while preserving and evaluating any useful failure-derived learning.

The lifecycle therefore prevents unsafe promotion of failed changes without preventing the Flywheel from learning from failure.

## The Flywheel Effect

The cycle becomes a Flywheel when future execution uses the learning created or reinforced by earlier cycles.

The goal is not change for its own sake. Stable successful behavior should remain stable. The system should evolve when evidence shows that a lasting improvement is justified, and it should retain evidence that helps demonstrate when an existing pattern continues to work.

A mature AI Flywheel should reduce repeated reasoning, repeated failure, and unnecessary human intervention while preserving AI judgment and human authority where they are still needed.

## Related Documents

- [Formal Definition](../definition.md)
- [Terminology](../terminology.md)
- [Principles](../principles/README.md)
- [Conformance](../conformance/README.md)
- [Core Operating Model](../../architecture/operating-model.md)
- [Worked Example: Continuous Dependency Maintenance](../../examples/software-maintenance/worked-example.md)
