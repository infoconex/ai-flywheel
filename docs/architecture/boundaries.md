# Core Boundaries

The Infoconex AI Flywheel architecture contains two core structural boundaries that should not be confused: the **Moving Determinism Boundary** and the **Authority Boundary**.

The model also uses an **Uncertainty Boundary** as an evidence-based escalation condition. It answers a different question: whether the AI has enough evidence to decide responsibly.

```mermaid
flowchart TD
    E[Execution Evidence] --> M{Moving Determinism Boundary}
    M --> D[Deterministic Capability]
    M --> S[Procedural Knowledge / SOP]
    M --> R[AI Reasoning]

    H[Human Authority] --> A{Authority Boundary}
    A --> AU[Autonomous Action]
    A --> AP[Human Approval]
    A --> P[Prohibited Action]

    E --> U{Uncertainty Boundary}
    U -->|Sufficient evidence| AU
    U -->|Insufficient evidence| J[Human Judgment]

    D -. governed by .-> A
    S -. governed by .-> A
    R -. governed by .-> A

    AP --> H
    J --> H
```

## Moving Determinism Boundary

The Moving Determinism Boundary determines **where work and learning belong** among deterministic capability, procedural knowledge, and AI reasoning.

This boundary can move as evidence accumulates.

Examples include:

- a recurring AI judgment becoming an SOP rule,
- a stable SOP procedure becoming deterministic code,
- a brittle deterministic rule moving back toward procedural handling,
- or a previously coded behavior returning to AI judgment because the environment has become too variable for reliable deterministic handling.

The goal is to improve where responsibility lives as the system learns.

## Authority Boundary

The Authority Boundary determines **what the AI is allowed to decide, execute, change, or persist on its own**.

This boundary is governed by humans. The AI can propose a change to its authority but cannot expand its own authority.

An action may be well understood and still require human approval.

The Authority Boundary is expressed through the Governance Policy and enforced through governance gates and escalation.

## Uncertainty Boundary

The Uncertainty Boundary determines **whether the available evidence is enough for the AI to make a responsible decision**.

An action may fall within the AI's authority while still requiring escalation because the evidence is incomplete, contradictory, or too unclear.

This requires human judgment or more evidence rather than permission alone.

The Uncertainty Boundary does not determine where responsibility lives and does not define the AI's authority. It is an escalation boundary based on whether enough evidence exists.

## How the Boundaries Interact

The boundaries answer different questions:

> **Moving Determinism Boundary:** Where should this responsibility or learning live?
>
> **Authority Boundary:** Is the AI allowed to make this decision or change on its own?
>
> **Uncertainty Boundary:** Does the AI have enough evidence to decide responsibly?

A learning cycle may decide that a recurring judgment should become deterministic code while governance still requires human approval before that code is created, deployed, or used in a particular context.

Likewise, a human may authorize broad autonomy while the Moving Determinism Boundary still determines that some work should remain in AI reasoning because it is too variable to encode reliably.

A fully authorized action may still require human judgment when there is not enough evidence to choose among possible actions.

## Recommended Mental Model

The architecture can be understood in five steps:

1. **Before and during execution:** Governance determines what is allowed.
2. **During execution:** SOP, AI reasoning, and deterministic capability work together; missing evidence may trigger the Uncertainty Boundary.
3. **After execution:** Evidence is evaluated and classified to determine what was learned, whether adaptation is justified, and where any resulting learning should live.
4. **Before future operational use:** Candidate improvements or other reusable learning intended for persistence are sufficiently validated, governance requirements are satisfied, and Persist resolves the result by durably retaining supported learning, reinforcing an existing validated pattern, or explicitly determining that no new persistent learning is justified.
5. **On later execution:** The relevant current validated operating state becomes the starting point and produces new evidence that can reinforce or challenge earlier learning.

The Moving Determinism Boundary governs **where intelligence and responsibility live**. The Authority Boundary governs **where human authority must remain**. The Uncertainty Boundary governs **when there is not enough evidence for responsible AI judgment**.

## Related Documents

- [Architecture Overview](README.md)
- [Core Operating Model](operating-model.md)
- [Runtime Architecture](runtime-view.md)
- [Learning Architecture](learning-view.md)
- [Governance and Escalation](governance-and-escalation.md)
- [Infoconex AI Flywheel Formal Definition](../specification/definition.md)
- [Terminology](../specification/terminology.md)
