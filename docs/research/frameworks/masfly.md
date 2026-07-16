---
title: "MASFly Research Dossier"
document_type: "framework-research"
section: "research"
status: "active-research"
canonical: false
order: 6
summary: "Evaluate MASFly as prior art for SOP-driven multi-agent system construction, monitored execution, experience-informed adaptation, runtime intervention, and persistent reuse of successful and failed collaboration."
framework_name: "MASFly"
last_reviewed: "2026-07-16"
tags:
  - "research"
---

# MASFly Research Dossier

> **Research status:** Primary-source review completed for the public paper as of July 15, 2026. No official implementation repository was identified in the paper or public project search, so the paper is treated as the canonical source.

## Research Objective

Evaluate MASFly as prior art for SOP-driven multi-agent system construction, monitored execution, experience-informed adaptation, runtime intervention, and persistent reuse of successful and failed collaboration experience.

## Main References

- [MAS-on-the-Fly: Dynamic Adaptation of LLM-based Multi-Agent Systems at Test Time](https://arxiv.org/abs/2602.13671) — Canonical paper and primary definition of MASFly.
- [MASFly full HTML paper](https://arxiv.org/html/2602.13671) — Complete paper in navigable HTML form.

No official MASFly source-code repository or standalone project website was identified in the primary paper or public repository search as of July 15, 2026.

## Recommended Reading

- [MetaGPT paper](https://arxiv.org/abs/2308.00352) — Important prior work on encoding standardized operating procedures into multi-agent collaboration.
- [MetaGPT repository](https://github.com/geekan/MetaGPT) — Implementation of SOP-oriented multi-agent software collaboration.
- [AgentSquare paper](https://arxiv.org/abs/2410.06153) — Relevant work on automatically searching and improving agent-system architectures.
- [AgentSquare repository](https://github.com/tsinghua-fib-lab/AgentSquare) — Implementation and evaluation materials for automated agent-system design.
- [AI Flywheel framework comparison matrix](../framework-comparison-matrix.md) — Current cross-framework scoring and comparison.

## What MASFly Is

MASFly, short for **MAS-on-the-Fly**, is a framework for dynamically constructing and adapting LLM-based multi-agent systems at test time.

Its core motivation is that a fixed multi-agent architecture is unlikely to be optimal for every task. Different tasks may require different:

- specialist roles,
- tool access,
- communication patterns,
- supervision strategies,
- and recovery behavior.

Rather than deploy one manually designed multi-agent system for every query, MASFly uses stored collaboration experience to assemble a task-specific system and then monitors that system while it executes.

The framework combines three broad ideas:

1. **SOP-guided system generation** — retrieve prior successful collaboration patterns and instantiate a customized multi-agent operating procedure for the current task.
2. **Process-supervised execution** — use a dedicated Watcher agent to monitor the running multi-agent system and intervene when problems are detected.
3. **Reflective experience distillation** — preserve successful collaboration patterns and failure-specific lessons so future systems can benefit from prior executions.

MASFly is therefore highly relevant to the AI Flywheel's SOP, evidence, persistence, and reuse principles, but its primary object of adaptation is the **multi-agent collaboration architecture** rather than the allocation of responsibility among deterministic code, procedural knowledge, and AI reasoning.

## SOP-Guided System Generation

MASFly maintains a repository of prior successful collaboration patterns expressed as structured SOP cases.

The paper describes each stored case as containing information such as:

- the original user query,
- a need analysis describing the task objective and required capabilities,
- agent specifications,
- agent responsibilities and instructions,
- tool assignments,
- and a communication structure describing how agents interact.

When a new query arrives, MASFly retrieves relevant prior cases using both query similarity and need similarity.

An SOP-generation component then uses the retrieved patterns to create a query-specific **operation procedure** for the current task.

The generated procedure can define:

- which agents should exist,
- what each agent should do,
- what tools each agent should use,
- and how information should flow among the agents.

This is stronger than merely retrieving a static prompt. The SOP is used as a template for constructing a temporary task-specific multi-agent system.

## Agent Selection and Organization

Agent organization is generated from the task requirements and retrieved collaboration experience.

The framework can dynamically determine:

- specialized roles,
- role-specific prompts,
- responsibility assignments,
- tool access,
- and a directed communication graph.

The resulting system is therefore assembled for the current task rather than chosen from one fixed topology.

From an AI Flywheel perspective, this is an example of **procedural knowledge shaping runtime organization**.

However, the procedure primarily governs how AI agents collaborate. It does not appear to define a broader control plane spanning deterministic software, AI judgment, evidence requirements, authority boundaries, and the placement of learned behavior across different execution mechanisms.

## Process-Supervised Execution

MASFly introduces a dedicated **Watcher** agent that observes the behavior of the running multi-agent system.

The Watcher uses two sources of guidance:

1. the current operation procedure, which defines how the system is expected to work,
2. a personalized experience pool containing lessons from previous failures.

The Watcher can intervene during execution rather than waiting until the task has completely failed.

The paper describes interventions including:

- **experience-augmented guidance**, in which a struggling agent receives relevant corrective experience,
- and **dynamic agent replacement**, in which a problematic agent can be replaced during execution.

This is an important contrast with frameworks that only learn after a completed trajectory. MASFly combines post-execution learning with **runtime supervision and adaptation**.

## Persistent Experience Model

MASFly persists experience in two major forms.

### SOP Repository

Successful executions can contribute reusable collaboration patterns to the SOP repository.

These patterns capture generalized ways of organizing agents to solve classes of tasks.

### Personalized Experience Pool

Failures contribute more targeted diagnostic experience.

The paper describes failure experience in terms of:

- the user query,
- the cause of failure,
- agent-specific error attribution,
- and improvement strategies for the agents involved.

This creates a persistent knowledge base that the Watcher can consult during future executions.

The two stores therefore play different roles:

- successful patterns help construct future systems,
- failure experience helps supervise and correct future execution.

## Failure Handling and Adaptation

MASFly handles failure at more than one point in the process.

### During Execution

The Watcher can detect problematic behavior and intervene by supplying experience-informed guidance or replacing an agent.

### After Execution

A failed execution can be analyzed to identify:

- which agent or interaction failed,
- why the failure occurred,
- what strategy could improve the behavior,
- and how the operation procedure should be refined.

This information can then enrich the personalized experience pool and improve future system generation or supervision.

Successful executions can also be distilled into more general reusable SOP patterns.

The adaptation destinations are therefore primarily:

- collaboration procedures,
- agent role definitions,
- communication structures,
- and experience used for runtime supervision.

The framework does not appear to treat deterministic source code or executable capability as an independently evolving responsibility destination.

## Human Role and Governance

The reviewed MASFly paper does not define a human-authority architecture comparable to the AI Flywheel's Governance Policy.

The framework dynamically constructs and supervises multi-agent systems without describing formal mechanisms for:

- delegated authority boundaries,
- approval-required actions,
- uncertainty escalation to a human,
- prohibited actions,
- or human approval before persistent experience is incorporated.

The Watcher is an AI supervisory mechanism, not a human governance mechanism.

This is an important distinction because **supervision** and **authority** solve different problems.

MASFly supervises whether agents are executing effectively. The AI Flywheel's governance model additionally determines what the autonomous system is permitted to decide or change at all.

## Evidence Checklist

### How SOPs are represented and generated

**Finding:** Fulfilled.

MASFly stores structured collaboration cases containing user queries, need analyses, agent specifications, and communication structures. Relevant cases are retrieved and used to generate a task-specific operation procedure for a new query.

### How agents are selected and organized

**Finding:** Fulfilled.

The generated operation procedure defines task-specific agents, responsibilities, prompts, tools, and communication relationships. The multi-agent architecture is therefore dynamically instantiated rather than fixed globally.

### How execution is monitored

**Finding:** Fulfilled.

A dedicated Watcher agent monitors inter-agent collaboration and agent-environment behavior with reference to the current procedure and prior failure experience.

### What experience is persisted

**Finding:** Fulfilled.

MASFly persists at least two distinct experience types:

- successful collaboration patterns in the SOP repository,
- and failure-oriented agent-specific lessons in the personalized experience pool.

### What kinds of changes can result from failure

**Finding:** Fulfilled.

Failure can result in:

- runtime corrective guidance,
- dynamic replacement of an agent,
- refined operation procedures,
- error-attribution knowledge,
- and new improvement strategies stored for future supervision.

### Whether deterministic software is itself an evolving responsibility mechanism

**Finding:** Not established.

The framework adapts agent roles, prompts, collaboration procedures, and supervisory experience. The reviewed paper does not define persistent source-code or tool generation as a primary adaptation destination.

### Human approval, escalation, and governance mechanisms

**Finding:** Not established in the framework.

No formal human authority or approval architecture was identified in the primary paper.

## Comparison to the AI Flywheel

| Dimension | MASFly | AI Flywheel |
|---|---|---|
| Primary object of adaptation | Multi-agent organization and collaboration | Persistent operating system across code, procedure, reasoning, validation, and governance |
| SOP role | Generates task-specific multi-agent operation procedures | Persistent operational control plane guiding AI execution |
| Runtime monitoring | Dedicated Watcher agent | Execution evidence plus governance and validation mechanisms |
| Runtime intervention | Guidance and agent replacement | Any authorized operational response supported by the SOP and capabilities |
| Failure learning | Personalized experience and procedural refinement | Classified and routed to the appropriate persistent destination |
| Successful learning | Reusable collaboration patterns | Any validated persistent operational asset |
| Deterministic capability evolution | Not a central mechanism | Explicit possible destination |
| Human authority | Not explicitly modeled | First-class Governance Policy and authority boundary |

## Strongest Overlap

MASFly provides strong prior art for the ideas that:

- SOP-like procedural knowledge can shape an AI system at runtime,
- successful executions can produce reusable procedures,
- failures can produce persistent corrective experience,
- execution can be monitored against an expected procedure,
- AI can intervene during execution rather than only after failure,
- and future task execution can improve through reuse of prior experience.

## Key Differences to Investigate

### SOP as collaboration architecture versus operational control plane

MASFly's SOP primarily defines the structure and communication of a multi-agent system.

The AI Flywheel's SOP concept is broader. It governs how operational work should be performed across:

- AI reasoning,
- deterministic capability use,
- known failures,
- validation expectations,
- evidence requirements,
- and escalation conditions.

### Agent adaptation versus responsibility movement

MASFly can change which AI agents participate and how they collaborate.

The AI Flywheel asks whether a recurring responsibility should remain AI reasoning at all or move into procedure or deterministic implementation.

### Watcher supervision versus human governance

The Watcher evaluates operational behavior.

Human governance defines authority.

The two concepts can complement one another, but they are not interchangeable.

## Current Research Position

MASFly should be treated as strong prior art for dynamically instantiated SOP-driven agent systems, execution supervision, reusable collaboration patterns, failure experience, and runtime adaptation.

The AI Flywheel should not claim SOP-driven adaptation or experience-informed runtime intervention as unique.

The more defensible differentiation questions concern:

1. whether the SOP governs a broader operating model than multi-agent collaboration,
2. whether deterministic capability is an explicit evolving responsibility destination,
3. whether failure is routed among fundamentally different operational layers rather than only used to improve agent organization and guidance,
4. and whether human authority is separately modeled above autonomous supervision.

## Related AI Flywheel Research

- [Autonomy Is Bounded by Human Authority](../principles/01-human-authority.md)
- [AI Is the Operator](../principles/02-ai-as-operator.md)
- [Moving Determinism Boundary](../principles/03-moving-determinism-boundary.md)
- [SOP as Operational Control Plane](../principles/04-sop-control-plane.md)
- [Outcome Evidence](../principles/05-outcome-evidence.md)
- [Evolution Routing](../principles/06-evolution-routing.md)
- [Persistent Operational Learning](../principles/07-persistent-learning.md)
- [Compounding Reuse](../principles/08-compounding-reuse.md)
