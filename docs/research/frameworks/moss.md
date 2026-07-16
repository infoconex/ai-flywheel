# MOSS Research Dossier

> **Research status:** Primary-source review completed for the currently available public paper and official repository as of July 15, 2026. Comparative conclusions remain working interpretations.

## Established / First Public Date

**May 21, 2026** — used here as the earliest verified public establishment date for MOSS because the canonical [MOSS paper](https://arxiv.org/abs/2605.22794) was first submitted to arXiv on that date.

No earlier official public release was established from the primary sources reviewed for this dossier.

## Research Objective

Evaluate MOSS as prior art for evidence-driven self-modification, persistent improvement of deployed agent software, validation and rollback of autonomous changes, and human approval of consequential self-evolution.

## Main References

- [MOSS paper](https://arxiv.org/abs/2605.22794) — Canonical research paper describing source-level self-evolution.
- [MOSS official repository](https://github.com/hkgai-official/Moss) — Canonical implementation and operational documentation.
- [MOSS evolution CLI reference](https://github.com/hkgai-official/Moss/blob/main/host-daemon/src/cli/moss_capability/evolution.md) — Detailed agent-facing documentation for the evolution workflow.

## Recommended Reading

- [OpenClaw repository](https://github.com/openclaw/openclaw) — Production agent substrate on which the documented MOSS implementation performs source-level evolution.
- [MOSS official repository architecture](https://github.com/hkgai-official/Moss#architecture) — Implementation-level view of the host daemon, trial workers, and promotion process.
- [AI Flywheel framework comparison matrix](../framework-comparison-matrix.md) — Current cross-framework scoring and comparison.

## What MOSS Is

MOSS is a self-evolving agent system designed around a specific argument: many meaningful failures in deployed agents cannot be corrected by changing prompts, memory, skills, workflows, or other text-mutable artifacts because the defect may exist in the software substrate itself.

Examples include problems in:

- routing logic,
- hook ordering,
- state invariants,
- dispatch behavior,
- orchestration code,
- and other harness-level implementation details.

MOSS therefore makes the agent's source code itself an adaptation target.

The system collects failure evidence from production interactions, uses an iterative multi-stage process to diagnose and modify the implementation, validates candidate versions by replaying the failure evidence in isolated trial workers, and requires explicit user authorization before a converged candidate replaces the running production image.

This makes MOSS a particularly important comparison for the AI Flywheel because it provides strong prior art for:

- AI-directed modification of the system that the AI itself runs on,
- execution evidence driving persistent change,
- validation before reuse,
- rollback after failed deployment,
- and human approval before consequential promotion.

## Architecture and Operating Model

The public implementation is built around an OpenClaw agent substrate and a separate host-side evolution system.

Major components include:

- **production agent sessions**, which generate the interaction evidence from which weak behavior can be identified,
- **automatic scanning and conversational flagging**, which curate failure evidence into batches,
- **a host daemon**, which coordinates evolution,
- **pluggable coding-agent providers**, which perform source modification,
- **ephemeral trial workers**, which replay failure batches against candidate images,
- **container image construction**, which packages candidate changes,
- and **a promotion supervisor**, which performs controlled replacement and rollback.

MOSS deliberately separates the system responsible for deciding and coordinating evolution from the external coding agent used to implement code changes. The coding provider may vary, while MOSS retains stage ordering, evidence handling, evaluation, and final verdict control.

## Failure Evidence Collection

MOSS collects failure evidence through two primary channels.

### Passive Auto-Scan

A periodic process scans new session content and identifies underperforming interaction segments. Weak segments are grouped into per-conversation failure batches.

This is significant because evolution can begin from observed production behavior rather than only from a developer-authored bug report.

### Conversational Flagging

A user can explicitly identify a problematic conversation and instruct the agent to add it to an evolution batch.

This provides a direct human path for supplying additional evidence when automated detection is insufficient.

## The Adaptation Pipeline

Each MOSS evolution iteration follows a deterministic seven-stage pipeline:

1. **Locate** — identify the relevant implementation area and likely source of the problem.
2. **Plan** — propose a modification strategy.
3. **Plan-Review** — critique and refine the proposed plan.
4. **Implement** — modify the source code through the configured coding-agent provider.
5. **Code-Review** — review the candidate implementation.
6. **Task-Evaluate** — test the candidate against the curated failure evidence.
7. **Verdict** — decide whether the candidate has converged, needs more work, or has reached a fundamental limitation.

Plan and Plan-Review can iterate within an inner loop. Implement and Code-Review can do the same.

Build and Trial are supporting runtime mechanisms around evaluation rather than separate reasoning stages.

The overall process continues until the verdict reaches a terminal state such as convergence or a fundamental model or architecture limitation.

## Candidate Generation

MOSS delegates code modification to a pluggable external coding-agent CLI.

The official implementation supports multiple coding-agent providers, allowing the source-modification mechanism to be swapped without changing the higher-level evolution pipeline.

This means MOSS is not primarily a new coding model. Its architectural contribution is the controlled system around code evolution:

- what evidence is used,
- how the process is staged,
- how candidate changes are reviewed,
- how candidates are tested,
- and how promotion is governed.

## Validation and Trial Execution

Candidate changes are not trusted merely because the coding agent reports success.

MOSS builds candidate images and evaluates them using isolated ephemeral trial workers. The workers replay the failure batch against the candidate system so that the proposed change can be tested against the evidence that motivated the evolution.

Isolation is important because a defective candidate should not modify the state of the live production system while being evaluated.

The use of repeated trials also helps expose nondeterministic or flaky behavior rather than relying on a single successful run.

## Promotion, Health Checks, and Rollback

A converged candidate is not automatically promoted to production.

The documented process requires explicit human authorization before the replacement occurs. The user can inspect intermediate artifacts such as:

- diagnoses,
- plans,
- diffs,
- and scoring results,

before approving the application of the candidate.

After authorization, MOSS performs an in-place container replacement while preserving user state.

The new system must then pass a health-probe period. If the candidate does not remain healthy, MOSS rolls back to the last known good image.

This is one of the strongest human-authority and validation mechanisms among the frameworks currently compared with the AI Flywheel.

## Persistent Assets

The primary persistent adaptation destination in MOSS is the **agent software substrate itself**.

MOSS also persists operational evolution state, including:

- sessions,
- failure batches,
- evolution-loop history,
- candidate artifacts,
- and promoted container images.

However, the core research mechanism is source-level rewriting. The reviewed architecture does not present deterministic code, procedural knowledge, and runtime reasoning as parallel destinations selected through a generalized routing rule.

## Failure Handling and Learning

MOSS treats recurring production failure as evidence that the deployed system may need to change.

This is a stronger model than simple retry because failure can trigger a persistent rewrite of the agent implementation.

At the same time, its adaptation path is comparatively focused:

> Failure evidence primarily enters a pipeline whose objective is to locate and correct a software-level defect.

The AI Flywheel asks a broader question before choosing the destination:

> Is this a deterministic implementation problem, a procedural problem, a reasoning problem, a validation problem, or a governance problem?

MOSS therefore provides strong prior art for one particularly consequential destination—source code—but not necessarily for generalized multi-destination evolution routing.

## Human Role and Governance

MOSS includes a clear human approval boundary at the production-promotion step.

The system may:

- collect failure evidence,
- run the evolution pipeline,
- generate code changes,
- build candidate images,
- execute isolated trials,
- and reach a converged verdict,

without requiring the user to approve every internal step.

However, a converged candidate waits for explicit user authorization before it replaces the production system.

This is strongly aligned with the AI Flywheel idea that:

> The AI may determine and recommend a change but still lack authority to apply it.

MOSS therefore demonstrates an **authority gate** for a high-consequence action.

The reviewed system does not appear to define the broader AI Flywheel governance model across every class of operational action, nor does it define a separate generalized uncertainty gate requiring human judgment. Its human authority mechanism is more specifically centered on promotion of a self-modified production substrate.

## Evidence Checklist

### The adaptation pipeline

**Finding:** Fulfilled.

MOSS defines a deterministic seven-stage evolution pipeline:

**Locate → Plan → Plan-Review → Implement → Code-Review → Task-Evaluate → Verdict**

The process can iterate until convergence or a fundamental limitation is identified.

### The role of production failures or execution traces

**Finding:** Fulfilled.

Production interactions are a primary source of adaptation evidence. Weak interaction segments are collected through automatic scanning and explicit conversational flagging and grouped into failure batches that anchor the evolution process.

### Candidate generation and validation mechanisms

**Finding:** Fulfilled.

Code changes are generated through a pluggable coding-agent provider. Candidate systems are built and replayed against the motivating failure batch in isolated trial workers before a verdict is reached.

### Rollback and safety mechanisms

**Finding:** Strongly fulfilled.

The documented system includes:

- isolated trial execution,
- candidate review stages,
- explicit user authorization before production promotion,
- health-probe-gated deployment,
- and rollback to a last-known-good image.

### Whether procedures and runtime judgment are independent adaptation targets

**Finding:** Not established as parallel destinations in the core MOSS mechanism.

MOSS is intentionally focused on source-level rewriting. The reviewed architecture does not define a generalized choice among source code, SOP, reasoning knowledge, and governance as independent learning destinations.

### Human approval or governance requirements for persistent changes

**Finding:** Strongly fulfilled for production promotion.

A converged candidate cannot replace the production agent until the user explicitly authorizes application of the new image.

### Whether the system can expand its own authority or only modify capabilities within a fixed authority boundary

**Finding:** No autonomous authority-expansion mechanism was identified.

MOSS can substantially change its own capabilities by rewriting source code, but promotion still passes through a human-consent gate. The reviewed sources do not describe the system as being able to remove that gate or grant itself additional deployment authority.

This is an important distinction between **capability self-modification** and **authority self-expansion**.

## Comparison to the AI Flywheel

| Dimension | MOSS | AI Flywheel |
|---|---|---|
| Primary adaptation target | Production source code and agent substrate | Destination chosen after evidence-based classification |
| Failure evidence | Curated batches from production interactions | Required evidence from meaningful execution |
| AI-directed modification | Strong | Strong |
| Validation | Replay in isolated candidate workers | Validation proportional to the type and risk of change |
| Promotion governance | Explicit human approval | Governance Policy determines whether approval is required |
| Rollback | Explicit last-known-good rollback | Expected where appropriate to the adapted asset |
| Multi-destination routing | Not central to the architecture | First-class Evolution Routing Rule |
| Moving determinism boundary | Source can change, but responsibility movement among layers is not the organizing concept | Explicit movement among deterministic capability, procedure, and reasoning |

## Strongest Overlap

MOSS provides very strong prior art for the claims that:

- execution failure can drive persistent autonomous improvement,
- AI can modify the software substrate it uses,
- candidate improvements should be tested against real failure evidence,
- self-modification requires strong validation,
- consequential changes can require explicit human approval,
- and failed deployment should support rollback.

## Key Differences to Investigate

### One dominant adaptation destination versus evolution routing

MOSS deliberately extends evolution into source code, but source-level modification remains the dominant destination.

The AI Flywheel instead treats source code as one possible destination among several and makes the destination decision itself part of the methodology.

### Authority gate versus complete governance model

MOSS has a concrete human approval gate before production promotion.

The AI Flywheel generalizes this idea into a Governance Policy that can govern actions throughout runtime and learning, including:

- autonomous actions,
- approval-required actions,
- judgment-required uncertainty,
- and prohibited actions.

### Capability modification versus responsibility allocation

MOSS asks whether the implementation needs to change.

The AI Flywheel additionally asks whether the underlying responsibility belongs in code at all, or whether it should instead reside in procedure or AI reasoning.

## Current Research Position

MOSS should be treated as strong prior art for production-failure-driven source-level self-modification, candidate replay, validation, controlled promotion, and rollback.

The AI Flywheel should not claim these individual mechanisms as unique.

The strongest remaining differentiation question is whether the AI Flywheel's contribution lies in the broader **routing and allocation problem**:

> Given evidence from execution, what persistent mechanism should own the improved behavior?

MOSS also strengthens the case for keeping human authority explicit. Its production promotion gate demonstrates that high autonomy and meaningful human control are compatible rather than contradictory.

## Related AI Flywheel Research

- [Autonomy Is Bounded by Human Authority](../principles/01-human-authority.md)
- [AI Is the Operator](../principles/02-ai-as-operator.md)
- [Moving Determinism Boundary](../principles/03-moving-determinism-boundary.md)
- [SOP as Operational Control Plane](../principles/04-sop-control-plane.md)
- [Outcome Evidence](../principles/05-outcome-evidence.md)
- [Evolution Routing](../principles/06-evolution-routing.md)
- [Persistent Operational Learning](../principles/07-persistent-learning.md)
- [Compounding Reuse](../principles/08-compounding-reuse.md)