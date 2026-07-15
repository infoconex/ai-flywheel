# AI Flywheel Conformance Criteria

This document defines a working conformance test for systems described as implementations of the AI Flywheel.

## Required Characteristics

A conforming system should satisfy all of the following conditions.

### 1. Human Authority Defines the Scope of Autonomy

The system operates within explicit human-defined authority boundaries.

A Governance Policy or equivalent persistent control should define what the AI may do autonomously, what requires approval, what requires human judgment, what is prohibited, and when escalation is required.

The AI may recommend increased autonomy but may not grant itself increased authority.

### 2. AI Executes the Process

The AI performs meaningful operational work rather than only producing instructions for a human operator.

Once authorized, the system is designed to continue operating without routine human participation until an escalation condition is reached.

### 3. Runtime Responsibilities Are Distinguishable

The system distinguishes among:

- deterministic capability for repeatable operations,
- procedural guidance for governing how work is performed,
- and AI reasoning for orchestration, interpretation, ambiguity, and judgment.

These mechanisms may operate together during execution and are not required to be separate sequential stages.

### 4. A Persistent Operational Procedure Exists

The process uses durable procedural guidance or an SOP that defines how the work is performed, what capabilities are available, how known conditions are handled, and when escalation is required.

The SOP operates within and may not override the Governance Policy.

### 5. Execution Produces Outcome Evidence

The process captures enough evidence to evaluate actual outcomes rather than relying solely on model confidence or completion status.

Evidence may include human judgments or approvals when they materially affect the process.

### 6. Outcomes Are Evaluated and Classified

The system determines whether the intended result occurred and identifies weaknesses, uncertainty, or learning opportunities.

After execution, the system can ask where resulting learning should persist.

### 7. Improvements Are Routed to the Appropriate Destination

The system can determine whether a lesson should change:

- deterministic capability,
- procedural guidance,
- reasoning knowledge,
- validation,
- or governance.

Movement among deterministic capability, procedure, and AI reasoning is governed by the Moving Determinism Boundary.

### 8. Governance Is Enforced During Action and Adaptation

A proposed action or persistent change can resolve to an appropriate governance outcome such as:

- authorized,
- approval required,
- judgment required,
- or prohibited.

The system escalates when human authority is required rather than manufacturing certainty or silently exceeding delegated authority.

### 9. Useful Learning Persists

Validated and authorized improvements survive the current execution in a durable operational asset.

### 10. Future Executions Reuse the Improved System

Subsequent executions inherit validated improvements so capability can compound over time.

When appropriate, human decisions are converted into reusable guidance so the same unnecessary escalation is not repeated indefinitely.

## Non-Conforming Patterns

The following patterns may contain useful elements of the AI Flywheel but are not sufficient by themselves:

- a loop that only retries until a task succeeds,
- an agent that only stores conversational memory,
- a system that only rewrites source code,
- an agent that only reflects on failure without changing persistent operational assets,
- an automation system with fixed code and no evidence-driven evolution,
- a workflow that records lessons but does not reuse them operationally,
- a system with unrestricted self-modification and no human-defined authority boundary,
- or a human-in-the-loop workflow that requires routine approval for every action without a model for delegated autonomy.

## Conformance Questions

A practical evaluation can begin with these questions:

1. Who authorized the Flywheel to operate, and where are its authority boundaries defined?
2. Can it continue autonomously within those boundaries?
3. Can it distinguish a need for human judgment from a need for human approval?
4. Does it use deterministic capability, procedural guidance, and AI reasoning intentionally?
5. Does execution produce evidence sufficient to evaluate the outcome?
6. Can it determine where a learning should persist after execution?
7. Can it move responsibility across the Moving Determinism Boundary?
8. Does governance constrain both execution and self-improvement?
9. Do validated improvements survive the current context?
10. Are those improvements reused in future executions?

## Conformance Levels

Future versions of this specification may define conformance levels based on delegated autonomy, persistence, self-modification, governance maturity, and escalation behavior. These levels are not yet normative.

## Related Documents

- [Formal Definition](ai-flywheel-definition.md)
- [Principles](principles.md)
- [Lifecycle](lifecycle.md)
- [Architecture and Diagrams](../architecture/README.md)
