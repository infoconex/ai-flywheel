# End-to-End Example: [Example Name]

This example shows how the Infoconex AI Flywheel can [operate a recurring process] and improve or reinforce the operating model used by later executions.

## Use Case

**[Short name for the concrete use case]**

[Describe the recurring need, affected environment, desired consistency, and why learning from execution should improve later work.]

The example presents one possible implementation. It illustrates the Infoconex AI Flywheel Specification but does not add requirements or prescribe a required architecture.

## Scenario

[Describe the organization, current problem, recurring work, and why the initial process is not sufficient.]

The initial process requires the AI to:

1. [Required activity]
2. [Required activity]
3. [Required activity]
4. [Required activity]
5. [Escalation or completion condition]

The organization implements this process as an AI Flywheel so execution can produce evidence, reveal weaknesses, reinforce effective patterns, and improve the operating model used by later runs.

## Intended Outcome

The intended outcome is [specific result] that:

- [Measurable success criterion]
- [Measurable success criterion]
- [Required control]
- [Evidence requirement]
- [Authority constraint]

Completing the workflow does not prove success. The outcome must be evaluated against these criteria.

## Human Authorization and Governance

Before autonomous operation begins, humans define a persistent Governance Policy.

### Authorized

The Governance Policy authorizes the AI to:

- [Authorized action]
- [Authorized action]
- [Authorized improvement or evidence action]

### Approval Required

Human approval is required before the AI may:

- [Approval-required action]
- [Approval-required activation or persistence action]

### Judgment Required

Human judgment is required when:

- [Condition with insufficient or conflicting evidence]
- [Condition requiring accountable human interpretation]

### Prohibited

The AI is prohibited from:

- [Prohibited action]
- [Control that may not be bypassed]
- [Unauthorized expansion of authority]

Governance applies throughout execution and improvement. It is not a lifecycle stage.

## Initial Operating Model

### Deterministic Capability

[Describe repeatable operations performed by approved code, tools, scripts, templates, or services.]

### Procedural Guidance

[Describe the durable Standard Operating Procedure and the conditions, evidence, exceptions, and escalation rules it contains.]

### AI Reasoning

[Describe the contextual interpretation, investigation, evaluation, classification, and decision-making performed by the AI.]

## Cycle 1: [First Learning Event]

### Execute

[Describe the AI operating the process and the condition encountered.]

### Observe

[Describe the evidence captured, including unsuccessful attempts and recovery actions.]

### Evaluate

[Compare the evidence with the intended outcome and success criteria.]

### Classify

Ask:

> **What was learned, is adaptation justified, and where should any resulting learning live?**

[Classify the weakness, opportunity, reinforcing success, or uncertainty. Identify whether adaptation is justified and whether resulting learning belongs in governance, deterministic capability, procedural guidance, AI reasoning, validation, or another persistent operating asset.]

### Adapt

[If change is justified, describe the candidate improvement and its applicability boundaries. If no adaptation is required, record that disposition explicitly rather than manufacturing a change.]

### Validate

[For a candidate improvement, describe outcome-focused validation, representative conditions, regression and side-effect checks, and limitations. For a no-change path, describe whether reinforcing or reusable learning intended for persistence is sufficiently supported.]

### Persist

[Describe the durable learning outcome: a validated and authorized operational change, separately validated failure-derived learning, reinforcing evidence associated with an existing validated pattern, or an explicit no-new-persistent-learning disposition. Include scope, traceability, authorization, and supersession considerations where relevant.]

### Reuse

[Show a later relevant execution using applicable current persisted learning or continuing an existing validated operating pattern. Identify observable evidence that the earlier learning or pattern influenced the later execution.]

Include measurements when they help demonstrate the effect:

| Measure | Before Learning | After Reuse |
|---|---:|---:|
| [Measure] | [Value] | [Value] |
| [Measure] | [Value] | [Value] |

## Cycle 2: [Second Learning Event]

[Repeat the lifecycle responsibilities, allowing successful no-change, failure-derived learning, backward transitions, or supersession when the evidence supports them.]

## Cycle 3: [Third Learning Event]

[Repeat the lifecycle responsibilities, allowing successful no-change, failure-derived learning, backward transitions, or supersession when the evidence supports them.]

## Human Authority During Execution

Describe realistic examples of:

### Prohibited Action

[Example and required response.]

### Approval Required

[Example and required response.]

### Judgment Required

[Example and required response.]

### Human Decisions as Evidence

[Explain how human decisions may reveal reusable learning without allowing the AI to expand its own authority.]

## Conformance Mapping

Map the example to the eight canonical principle-aligned assessments using observable evidence from the scenario. Do not treat this explanatory mapping as proof that an implementation conforms.

| Principle-Aligned Assessment | How the Example Illustrates It |
|---|---|
| **Principle 1: Autonomy Is Bounded by Human Authority** | [Observable evidence] |
| **Principle 2: AI Is the Operator, Not Merely the Assistant** | [Observable evidence] |
| **Principle 3: Work Is Distributed Across a Moving Determinism Boundary** | [Observable evidence] |
| **Principle 4: The SOP Is an Operational Control Plane** | [Observable evidence] |
| **Principle 5: Execution Must Produce Outcome Evidence** | [Observable evidence] |
| **Principle 6: Failure Determines Where the System Evolves** | [Observable evidence] |
| **Principle 7: Learning Must Change a Persistent Operational Asset** | [Observable evidence] |
| **Principle 8: Improvement Must Compound Through Reuse** | [Observable evidence] |

## What Compounded

| Cycle | Evidence Revealed | Persistent Learning or Reinforcement | Effect on Later Execution |
|---|---|---|---|
| **Cycle 1** | [Evidence] | [Learning, reinforcement, or no-new-learning disposition] | [Effect] |
| **Cycle 2** | [Evidence] | [Learning, reinforcement, or no-new-learning disposition] | [Effect] |
| **Cycle 3** | [Evidence] | [Learning, reinforcement, or no-new-learning disposition] | [Effect] |

Explain why the result represents compounding learning rather than retrying, saving logs, or making a one-time change. Include no-change cycles where continued successful reuse reinforces an existing validated pattern when relevant.

## Lifecycle Summary

The canonical lifecycle responsibilities are:

**Execute → Observe → Evaluate → Classify → Adapt → Validate → Persist → Reuse**

The lifecycle does not require every cycle to create a new adaptation. Each responsibility must be explicitly resolved for the actual outcome, including successful no-change paths and failed or superseded learning.

Human authority and governance apply throughout the lifecycle.

Deterministic capability, procedural guidance, and AI reasoning work together during execution. They are operating mechanisms, not additional lifecycle stages.

## Related Specification Documents

- [Formal Definition](../specification/definition.md)
- [Principles](../specification/principles/README.md)
- [Lifecycle](../specification/lifecycle/README.md)
- [AI Flywheel Conformance](../specification/conformance/README.md)
- [Principle-Aligned Conformance Assessments](../specification/conformance/principle-assessments.md)
- [Core Operating Model](../architecture/operating-model.md)