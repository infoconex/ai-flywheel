# Framework Comparison Matrix

> **Research status:** Working primary-source comparison. The six framework research pages have been reviewed against their currently available papers, official repositories, and author-maintained sources as of July 15, 2026. Scores are comparison judgments, not mathematical proof that two systems are equivalent.

## Scoring System

The matrix uses a **0–3 similarity score** to show how closely each framework appears to overlap with each AI Flywheel principle.

- **3 — Strong:** The framework contains a very similar mechanism that plays a similar role.
- **2 — Partial:** There is meaningful overlap, but the mechanism is narrower, organized differently, or missing important parts of the AI Flywheel principle.
- **1 — Limited:** The relationship is indirect, informal, narrow, or only partly relevant.
- **0 — None:** No meaningful equivalent mechanism was identified in the reviewed primary sources.
- **TBD — Unscored:** There is not enough research yet for a responsible score.

A higher score means **greater apparent overlap with the AI Flywheel**, not that one framework is better than another.

Totals are shown as:

**points earned / maximum available points**

With eight scored principles and a maximum of three points per principle, the maximum total is **24 points**.

In this matrix, **SOP** means **Standard Operating Procedure**.

## Comparison Matrix

| AI Flywheel Principle | GenericAgent | Metis | MOSS | MASFly | Ralph | Reflexion |
|---|---:|---:|---:|---:|---:|---:|
| **Principle 1: Autonomy Is Bounded by Human Authority** | Limited (1) | None (0) | Partial (2) | None (0) | Limited (1) | None (0) |
| **Principle 2: AI Is the Operator, Not Merely the Assistant** | Strong (3) | Partial (2) | Partial (2) | Partial (2) | Strong (3) | Partial (2) |
| **Principle 3: Work Is Distributed Across a Moving Determinism Boundary** | Partial (2) | Strong (3) | Partial (2) | Limited (1) | Limited (1) | Limited (1) |
| **Principle 4: The SOP Is an Operational Control Plane** | Strong (3) | Partial (2) | Limited (1) | Strong (3) | Partial (2) | Limited (1) |
| **Principle 5: Execution Must Produce Outcome Evidence** | Partial (2) | Strong (3) | Strong (3) | Strong (3) | Partial (2) | Strong (3) |
| **Principle 6: Failure Determines Where the System Evolves** | Partial (2) | Strong (3) | Partial (2) | Partial (2) | Limited (1) | Partial (2) |
| **Principle 7: Learning Must Change a Persistent Operational Asset** | Strong (3) | Strong (3) | Strong (3) | Strong (3) | Partial (2) | Strong (3) |
| **Principle 8: Improvement Must Compound Through Reuse** | Strong (3) | Strong (3) | Strong (3) | Strong (3) | Partial (2) | Strong (3) |
| **Total Score** | **19/24 (79.2%)** | **19/24 (79.2%)** | **18/24 (75.0%)** | **17/24 (70.8%)** | **14/24 (58.3%)** | **15/24 (62.5%)** |

## Human-Authority Scoring Notes

**Principle 1: Autonomy Is Bounded by Human Authority** is scored against the AI Flywheel's full concept of bounded autonomy, not simply whether a human appears somewhere in the workflow.

### GenericAgent — Limited (1)

GenericAgent includes an `ask_user` capability and supports human confirmation, but the reviewed sources do not define a separate Governance Policy, clear authority and uncertainty boundaries, or a rule against the AI expanding its own authority.

### Metis — None (0)

The reviewed Metis architecture constrains memory and code creation through representation and validation rules but does not define human authority or approval as part of its self-evolution mechanism.

### MOSS — Partial (2)

MOSS can collect failure evidence, generate changes, and validate candidate systems on its own, but a converged candidate requires user authorization before replacing the production image. This is a strong authority gate for a significant change, although it is narrower than the AI Flywheel's broader governance model.

### MASFly — None (0)

MASFly includes an AI Watcher that supervises execution, but AI supervision is not the same as human authority. No formal human approval or escalation model was identified in the primary paper.

### Ralph — Limited (1)

Human initiation, observation, tuning, intervention, and rescue are central to Ralph in practice, but these controls remain mostly informal rather than being expressed as machine-readable authority boundaries and governance rules.

### Reflexion — None (0)

Reflexion can use many kinds of feedback, including human feedback, but the framework does not define human authorization, approval gates, or authority boundaries as part of its core model.

## How to Interpret the Totals

The totals are intended as a **similarity index**, not a novelty verdict.

A framework can have a high total score while still differing in how the principles are combined, how responsibilities interact, or what role each mechanism plays in the overall operating model.

For example, a high-scoring framework may contain strong equivalents for many individual principles without combining them into the AI Flywheel's specific model of:

- Human-authorized autonomy with clear authority and uncertainty boundaries
- Deterministic capability, procedural guidance, and AI reasoning as distinct but movable responsibilities
- Execution evidence that determines where persistent learning should live

The total score therefore answers:

> **How much of the AI Flywheel appears individually represented in this framework?**

It does **not** by itself answer:

> **Does this framework implement the same overall methodology as the AI Flywheel?**

## Current Interpretation

After the primary-source framework review, **GenericAgent and Metis are tied for the highest overall apparent overlap at 79.2%**, followed by MOSS at 75.0% and MASFly at 70.8%.

The similar totals represent different kinds of overlap:

- **GenericAgent** is especially close on AI operation, SOP and skill persistence, executable capability creation, and compounding reuse.
- **Metis** is especially close on choosing between flexible text and executable code and moving recurring procedures into validated tools.
- **MOSS** is especially close on evidence-driven self-modification, validation, rollback, and human approval before a major promotion.
- **MASFly** is especially close on SOP-driven system generation, runtime supervision, persistent collaboration experience, and adaptive execution.
- **Ralph** overlaps most strongly with autonomous repeated execution, persistent project artifacts, and deterministic backpressure.
- **Reflexion** overlaps most strongly with feedback-driven learning and persistent reasoning memory.

The most important unresolved comparison is no longer whether the individual mechanisms exist. Most clearly do.

The stronger question is whether another framework combines all of the following into one operating model:

- Human-authorized autonomy with clear authority and uncertainty boundaries
- Deterministic capability, procedural guidance, and AI reasoning as distinct but movable responsibilities
- Evidence-driven classification of where a persistent improvement should live
- Movement in either direction across the determinism boundary
- Compounding reuse of the improved operating state

These questions are examined most directly in the [Principle 1: Autonomy Is Bounded by Human Authority research dossier](../principles/01-human-authority.md), [Principle 3: Work Is Distributed Across a Moving Determinism Boundary research dossier](../principles/03-moving-determinism-boundary.md), and [Principle 6: Failure Determines Where the System Evolves research dossier](../principles/06-evolution-routing.md).

## Framework Dossiers

- [GenericAgent](genericagent.md)
- [Metis](metis.md)
- [MOSS](moss.md)
- [MASFly](masfly.md)
- [Ralph](ralph.md)
- [Reflexion](reflexion.md)