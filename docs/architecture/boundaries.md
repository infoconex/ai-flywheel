---
title: "Core Boundaries"
document_type: "architecture"
section: "architecture"
status: "canonical"
canonical: true
order: 4
summary: "The AI Flywheel architecture contains two different boundaries that should not be confused: the Moving Determinism Boundary and the Authority Boundary."
architecture_view: "boundaries"
scope: "governance"
last_reviewed: "2026-07-16"
tags:
  - "architecture"
---

# Core Boundaries

The AI Flywheel architecture contains two different boundaries that should not be confused: the **Moving Determinism Boundary** and the **Authority Boundary**.

```mermaid
flowchart TD
    E[Execution Evidence] --> M{Moving Determinism Boundary}
    M --> D[Deterministic Capability]
    M --> S[Procedural Knowledge / SOP]
    M --> R[AI Reasoning]

    H[Human Authority] --> A{Authority Boundary}
    A --> AU[Autonomous Action]
    A --> AP[Human Approval]
    A --> J[Human Judgment]
    A --> P[Prohibited Action]

    D -. governed by .-> A
    S -. governed by .-> A
    R -. governed by .-> A
```

## Moving Determinism Boundary

The Moving Determinism Boundary determines **where work and learning belong** among deterministic capability, procedural knowledge, and AI reasoning.

This boundary can move as evidence accumulates.

Examples include:

- a recurring AI judgment becoming an SOP rule,
- a stable SOP procedure becoming deterministic code,
- a brittle deterministic rule moving back toward procedural handling,
- or a previously codified behavior returning to AI judgment because the environment has become too variable for reliable deterministic treatment.

The Moving Determinism Boundary is optimized through learning.

## Authority Boundary

The Authority Boundary determines **what the AI is permitted to decide, execute, change, or persist autonomously**.

This boundary is governed by humans. The AI can propose a change to its delegated authority but cannot expand its own authority.

An action may therefore be well understood and still require human approval. Conversely, an action may fall within the AI's authority but still require escalation because the evidence is too uncertain to support a responsible decision.

The Authority Boundary is expressed through the Governance Policy and enforced through governance gates and escalation.

## How the Boundaries Interact

The two boundaries answer different questions:

> **Moving Determinism Boundary:** Where should this responsibility or learning live?

> **Authority Boundary:** Is the AI allowed to make this decision or change on its own?

A learning cycle may decide that a recurring judgment should become deterministic code while governance still requires human approval before that code is created, deployed, or used in a particular context.

Likewise, a human may authorize broad autonomy while the Moving Determinism Boundary still determines that some work should remain in AI reasoning because it is too variable to encode reliably.

## Recommended Mental Model

The architecture can be understood in five steps:

1. **Before and during execution:** governance determines what is allowed.
2. **During execution:** SOP, AI reasoning, and deterministic capability work together.
3. **After execution:** evidence is evaluated and the Flywheel determines where learning should persist.
4. **Before persistence or reuse:** the improvement is validated and governance requirements are satisfied.
5. **On the next execution:** the improved system becomes the new starting point.

The first boundary governs **where intelligence and responsibility reside**. The second governs **where human authority must remain**.

## Related Documents

- [Architecture Overview](README.md)
- [Runtime Architecture](runtime-view.md)
- [Learning Architecture](learning-view.md)
- [Governance and Escalation](governance-and-escalation.md)
- [AI Flywheel Formal Definition](../specification/ai-flywheel-definition.md)
