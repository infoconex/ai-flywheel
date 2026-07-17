# Principle 2: AI Is the Operator, Not Merely the Assistant

The AI Flywheel is designed around AI performing the operational work itself rather than only producing instructions for a human to execute.

## Purpose

Traditional AI assistance often stops at recommendation or generation: the AI writes code, suggests a procedure, or analyzes a problem, and a human then performs the work.

The AI Flywheel changes that relationship. The AI becomes the operator of the process and carries execution forward within its delegated authority.

## Normative Requirements

A conforming implementation must satisfy the following requirements:

- AI performs meaningful operational work rather than only advising a human operator.
- AI directly participates in execution by interpreting procedure, invoking capabilities, reasoning between actions, and interpreting results.
- Once authorized, the AI can continue the process without routine human participation until an escalation condition is reached.
- The AI owns execution continuity within its delegated authority, including handling exceptions, gathering more evidence, recovering from known failures, or escalating when required.
- Routine operation must not depend on a human manually carrying out each instruction or generated artifact.

## Operational Model

Within its authorized scope, the AI may:

- follow and interpret the SOP,
- invoke existing tools and deterministic capabilities,
- create new capabilities when needed and authorized,
- reason between tool calls,
- inspect execution results,
- recover from known failures,
- gather additional evidence,
- request human judgment or approval when required,
- and propose or apply authorized improvements to persistent operational assets.

The exact capabilities available depend on the implementation and Governance Policy.

### Execution Continuity

The AI should not stop simply because one deterministic action fails. It should use available evidence and procedural guidance to determine the next appropriate action, including whether to retry, use a different capability, reason through an exception, gather more evidence, escalate, or classify the failure for later adaptation.

The stronger operating pattern is:

**AI creates or obtains a capability → AI invokes it → AI interprets the result → AI continues the process**

Human authority remains above AI operation:

> **Humans authorize and govern. The AI operates.**

## Lifecycle Relationship

- **Execute:** this principle is most directly expressed here; AI performs and carries forward the operational process.
- **Observe:** because the AI operates the process, execution evidence is directly available to the system responsible for later learning.
- **Evaluate and Classify:** the AI interprets outcomes and identifies what should happen next.
- **Adapt through Reuse:** the same operating system that performs work can participate in improving and later reusing the capabilities and guidance it depends on.

## Evidence of Implementation

Evidence supporting this principle may include:

- execution traces showing the AI directly invoking tools or capabilities,
- examples of the AI continuing through multiple operational steps without routine human handoffs,
- records of exception handling or recovery performed by the AI,
- examples of AI-created capabilities later invoked by AI,
- and escalation records showing that human involvement occurs because of defined authority or uncertainty boundaries rather than normal process continuation.

## Non-Conforming Patterns

This principle is not satisfied when the AI primarily:

- writes instructions that a human must routinely carry out,
- generates code that only a human operates as part of the normal process,
- stops after every action for unnecessary human continuation,
- or provides advice while the actual operating process remains human-owned.

## Relationships to Other Principles

- [Principle 1: Autonomy Is Bounded by Human Authority](01-human-authority.md) defines the authority within which AI operation occurs.
- [Principle 3: Work Is Distributed Across a Moving Determinism Boundary](03-moving-determinism-boundary.md) defines how work performed by the AI is distributed among reasoning, procedure, and deterministic capability.
- [Principle 4: The SOP Is an Operational Control Plane](04-sop-control-plane.md) provides the persistent procedure the AI uses to operate.
- [Principle 5: Execution Must Produce Outcome Evidence](05-outcome-evidence.md) ensures execution produces evidence that can drive learning.
- [Principle 8: Improvement Must Compound Through Reuse](08-compounding-reuse.md) depends on the AI actually reusing improved operational assets in later work.

## Principle Navigation

- [Principles Index](README.md)
- **Previous Principle:** [Principle 1: Autonomy Is Bounded by Human Authority](01-human-authority.md)
- **Next Principle:** [Principle 3: Work Is Distributed Across a Moving Determinism Boundary](03-moving-determinism-boundary.md)

## Related Documents

- [Runtime Architecture](../../architecture/runtime-view.md)
- [Stage 1: Execute](../lifecycle/01-execute.md)
- [Conformance](../conformance/README.md)
