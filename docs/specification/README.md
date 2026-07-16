# AI Flywheel Specification

> **Version 0.1 — Draft**

This section contains the canonical definition of the AI Flywheel methodology. These documents define the model independently of comparisons to other frameworks or prior art.

The specification version describes the maturity of the methodology itself and is independent of any future reference implementation or software release version.

## Table of Contents

- [Formal Definition](definition.md) — Defines the AI Flywheel, human authority, governance, runtime responsibilities, learning destinations, and the two core boundaries.
- [Principles](principles/README.md) — Defines the eight principles that characterize an AI Flywheel, with a dedicated page for each principle.
- [Lifecycle](lifecycle/README.md) — Defines the recurring cycle: Execute, Observe, Evaluate, Classify, Adapt, Validate, Persist, and Reuse, with governance applied continuously.
- [Conformance](conformance/README.md) — Provides an evidence-based assessment model for determining whether an implementation satisfies the canonical specification.
- [Architecture and Diagrams](../architecture/README.md) — Visualizes the runtime model, learning model, governance gates, escalation, and the relationship between the determinism and authority boundaries.

## Conceptual Model

The specification separates four ideas that should not be collapsed into one sequence:

1. **Human authority and governance** define the boundaries within which the Flywheel may operate.
2. **Procedural SOP, AI reasoning, and deterministic capability** work together during execution.
3. **The Flywheel lifecycle** turns execution evidence into validated and persistent learning.
4. **The Moving Determinism Boundary** determines where learned responsibility should live, while the **Authority Boundary** determines what the AI is permitted to decide or change autonomously.

## Scope

The specification answers the question: **What is the AI Flywheel?**

Comparative analysis, related work, and prior-art research are maintained separately in the [research section](../research/README.md).
