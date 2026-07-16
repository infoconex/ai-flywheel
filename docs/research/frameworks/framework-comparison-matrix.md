---
title: "Framework Comparison Matrix"
document_type: "comparison"
section: "research"
status: "active-research"
canonical: false
order: 2
summary: "The matrix uses a 0–3 similarity score to represent how closely each framework appears to overlap with each AI Flywheel principle."
comparison_type: "principle-overlap"
scoring_scale: "0-3"
maximum_score: 24
framework_count: 6
last_reviewed: "2026-07-16"
tags:
  - "research"
---

# Framework Comparison Matrix

> **Research status:** Working primary-source comparison. The six framework dossiers have been reviewed against their currently available canonical papers, official repositories, and author-maintained sources as of July 15, 2026. Scores remain comparative judgments rather than mathematical proof of equivalence.

## Scoring System

The matrix uses a **0–3 similarity score** to represent how closely each framework appears to overlap with each AI Flywheel principle.

- **3 — Strong:** The framework contains a substantially similar mechanism that plays a comparable architectural role.
- **2 — Partial:** There is meaningful overlap, but the mechanism is narrower, differently organized, or missing important parts of the AI Flywheel principle.
- **1 — Limited:** The relationship is indirect, informal, narrow, or only partially relevant.
- **0 — None:** No meaningful equivalent mechanism was identified in the reviewed primary sources.
- **TBD — Unscored:** Research is not yet sufficient for a responsible score.

A higher score means **greater apparent overlap with the AI Flywheel**, not that one framework is better than another.

Totals are shown as:

**points earned / maximum available points**

With eight scored principles and a maximum of three points per principle, the maximum total is **24 points**.

## Comparison Matrix

| AI Flywheel Principle | GenericAgent | Metis | MOSS | MASFly | Ralph | Reflexion |
|---|---:|---:|---:|---:|---:|---:|
| Autonomy Bounded by Human Authority | Limited (1) | None (0) | Partial (2) | None (0) | Limited (1) | None (0) |
| AI Is the Operator | Strong (3) | Partial (2) | Partial (2) | Partial (2) | Strong (3) | Partial (2) |
| Moving Determinism Boundary | Partial (2) | Strong (3) | Partial (2) | Limited (1) | Limited (1) | Limited (1) |
| SOP as Operational Control Plane | Strong (3) | Partial (2) | Limited (1) | Strong (3) | Partial (2) | Limited (1) |
| Outcome Evidence | Partial (2) | Strong (3) | Strong (3) | Strong (3) | Partial (2) | Strong (3) |
| Evolution Routing | Partial (2) | Strong (3) | Partial (2) | Partial (2) | Limited (1) | Partial (2) |
| Persistent Operational Learning | Strong (3) | Strong (3) | Strong (3) | Strong (3) | Partial (2) | Strong (3) |
| Compounding Reuse | Strong (3) | Strong (3) | Strong (3) | Strong (3) | Partial (2) | Strong (3) |
| **Total Score** | **19/24 (79.2%)** | **19/24 (79.2%)** | **18/24 (75.0%)** | **17/24 (70.8%)** | **14/24 (58.3%)** | **15/24 (62.5%)** |

## Human-Authority Scoring Notes

The first principle is scored against the AI Flywheel's full concept of bounded autonomy, not merely whether a human appears somewhere in the workflow.

### GenericAgent — Limited (1)

GenericAgent includes an `ask_user` capability and supports human confirmation, but the reviewed sources do not define a separate Governance Policy, explicit authority and uncertainty boundaries, or a rule against autonomous authority expansion.

### Metis — None (0)

The reviewed Metis architecture constrains memory and code creation through representation and validation rules but does not define human authority or approval as part of its self-evolution mechanism.

### MOSS — Partial (2)

MOSS can autonomously collect failure evidence, generate changes, and validate candidate systems, but a converged candidate requires explicit user authorization before replacing the production image. This is a strong authority gate for a consequential change, although it is narrower than the AI Flywheel's general governance model.

### MASFly — None (0)

MASFly includes an AI Watcher that supervises execution, but AI supervision is not equivalent to human authority. No formal human approval or escalation architecture was identified in the primary paper.

### Ralph — Limited (1)

Human initiation, observation, tuning, intervention, and rescue are central to Ralph in practice, but these controls remain largely informal rather than being expressed as machine-readable authority boundaries and governance rules.

### Reflexion — None (0)

Reflexion can incorporate many kinds of feedback, including potentially human feedback, but the canonical framework does not define human authorization, approval gates, or delegated authority boundaries.

## How to Interpret the Totals

The totals are intended as a **similarity index**, not a novelty verdict.

A framework can achieve a high total score while still differing materially in how the principles are combined, how responsibilities interact, or what role each mechanism plays in the overall operating model.

For example, a high-scoring framework may contain strong equivalents for many individual principles without combining them into the AI Flywheel's specific model of:

- human-authorized autonomy with explicit authority and uncertainty boundaries,
- deterministic capability, procedural guidance, and AI reasoning as distinct but movable responsibilities,
- and execution evidence that determines where persistent learning should live.

The total score therefore answers:

> **How much of the AI Flywheel appears individually represented in this framework?**

It does **not** by itself answer:

> **Does this framework implement the same overall methodology as the AI Flywheel?**

## Current Interpretation

After the primary-source framework review, **GenericAgent and Metis are tied for the highest overall apparent overlap at 79.2%**, followed by MOSS at 75.0% and MASFly at 70.8%.

The similar totals hide substantially different kinds of overlap:

- **GenericAgent** is especially close on AI operation, SOP and skill persistence, executable capability creation, and compounding reuse.
- **Metis** is especially close on deliberate representation choice and movement from flexible procedural text into validated executable code.
- **MOSS** is especially close on evidence-driven persistent self-modification, validation, rollback, and explicit human approval before consequential promotion.
- **MASFly** is especially close on SOP-driven system generation, runtime supervision, persistent collaboration experience, and adaptive execution.
- **Ralph** overlaps most strongly with autonomous iterative execution, persistent project artifacts, and deterministic backpressure.
- **Reflexion** overlaps most strongly with feedback-driven learning and persistent reasoning memory.

The most important unresolved comparison is therefore no longer whether the individual mechanisms exist. Most clearly do.

The stronger question is whether another framework explicitly combines all of the following into one operating model:

- human-authorized autonomy with explicit authority and uncertainty boundaries,
- deterministic capability, procedural guidance, and AI reasoning as distinct but movable responsibilities,
- evidence-driven classification of where a persistent improvement should live,
- bidirectional movement across the determinism boundary,
- and compounding reuse of the improved operating system.

These questions are examined most directly in the [Human Authority dossier](../principles/01-human-authority.md), [Moving Determinism Boundary dossier](../principles/03-moving-determinism-boundary.md), and [Evolution Routing dossier](../principles/06-evolution-routing.md).

## Framework Dossiers

- [GenericAgent](genericagent.md)
- [Metis](metis.md)
- [MOSS](moss.md)
- [MASFly](masfly.md)
- [Ralph](ralph.md)
- [Reflexion](reflexion.md)
