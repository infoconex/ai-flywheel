# AI Flywheel Specification

> **Specification Version:** 0.1 — Draft

This section contains the canonical definition of the AI Flywheel methodology. These documents define the model independently of comparisons to other frameworks or prior art.

The specification version describes the maturity of the methodology itself and is independent of repository, reference-implementation, or software release versions. The planned first repository release is `v0.1.0`, containing **AI Flywheel Specification 0.1 — Draft**.

## Normative Language

The words **must**, **should**, and **may** are used throughout the specification with the following meanings, regardless of capitalization:

- **Must** identifies a requirement that is necessary for conformance.
- **Should** identifies recommended behavior. A valid implementation-specific reason may justify a different approach, but the implications should be understood and the underlying requirement must still be satisfied.
- **May** identifies permitted but optional behavior.

Explanatory architecture, examples, and research documents are non-normative unless they explicitly quote or link to a requirement defined by the canonical specification.

## Draft Stability

Version 0.1 is a working draft intended for public review, implementation experiments, and further research.

Readers should expect that:

- terminology may be refined,
- requirement wording may become more precise,
- conformance guidance may evolve,
- additional examples and implementation guidance may be added,
- and research conclusions may change as new primary sources are reviewed.

The eight principles and eight-stage lifecycle define the current conceptual structure, but this draft does not promise backward compatibility with future pre-1.0 revisions.

## Table of Contents

- [Formal Definition](definition.md) — Defines the AI Flywheel, human authority, governance, runtime responsibilities, learning destinations, and the two core boundaries.
- [Terminology](terminology.md) — Defines the canonical vocabulary used across the specification.
- [Principles](principles/README.md) — Defines the eight principles that characterize an AI Flywheel, with a dedicated page for each principle.
- [Lifecycle](lifecycle/README.md) — Defines the recurring cycle: Execute, Observe, Evaluate, Classify, Adapt, Validate, Persist, and Reuse, with governance applied continuously.
- [Conformance](conformance/README.md) — Provides an evidence-based assessment model for determining whether an implementation satisfies the canonical specification.
- [Architecture and Diagrams](../architecture/README.md) — Visualizes the complete operating model, runtime model, learning model, governance gates, escalation, and the relationship between the determinism and authority boundaries.
- [Worked Examples](../examples/README.md) — Shows how the specification can be applied to concrete operating processes without creating additional normative requirements.

## Conceptual Model

The specification separates four ideas that should not be collapsed into one sequence:

1. **Human authority and governance** define the boundaries within which the Flywheel may operate.
2. **Procedural SOP, AI reasoning, and deterministic capability** work together during execution.
3. **The Flywheel lifecycle** turns execution evidence into validated and persistent learning.
4. **The Moving Determinism Boundary** determines where learned responsibility should live, while the **Authority Boundary** determines what the AI is permitted to decide or change autonomously.

## Principle Reference Convention

Whenever a principle is referenced by number, the reference must also include the principle's canonical name.

Use:

> **Principle 1: Autonomy Is Bounded by Human Authority**

Do not use a bare numbered reference such as `Principle 1` or `P1`, including in prose, tables, diagrams, navigation, or related-document lists.

A principle name may stand alone when the name itself is the clear reference. The rule is intended to prevent readers from having to memorize what a principle number means.

## Scope

The specification answers the question: **What is the AI Flywheel?**

Comparative analysis, related work, and prior-art research are maintained separately in the [research section](../research/README.md).
