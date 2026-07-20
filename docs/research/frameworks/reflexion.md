# Reflexion Research Dossier

> **Research status:** Primary-source review completed for the paper and official implementation repository as of July 15, 2026. Comparative conclusions remain working interpretations.

## Established / First Public Date

**March 20, 2023** — used here as the earliest verified public establishment date for Reflexion because the canonical [Reflexion paper](https://arxiv.org/abs/2303.11366) was first submitted to arXiv on that date.

No earlier official public release was established from the primary sources reviewed for this dossier.

## Research Objective

Evaluate Reflexion as prior art for agents that learn from execution feedback without changing model weights, preserve lessons in linguistic memory, and improve subsequent attempts through reusable reflection.

## Main References

- [Reflexion: Language Agents with Verbal Reinforcement Learning](https://arxiv.org/abs/2303.11366) — Canonical research paper.
- [Reflexion official repository](https://github.com/noahshinn/reflexion) — Code, demos, experiment logs, and implementation notes for the paper.

## Recommended Reading

- [Original Reflexion draft implementation](https://github.com/noahshinn/reflexion-draft) — Earlier implementation linked by the official repository.
- [Reflecting on Reflexion](https://nanothoughts.substack.com/p/reflecting-on-reflexion) — Original author-linked explanatory blog post.
- [ReAct paper](https://arxiv.org/abs/2210.03629) — Important background because Reflexion can use ReAct as the underlying actor strategy.
- [ReAct project](https://react-lm.github.io/) — Project material for the reason-and-act agent architecture.
- [Infoconex AI Flywheel framework comparison matrix](framework-comparison-matrix.md) — Current cross-framework scoring and comparison.

## What Reflexion Is

Reflexion is a framework for improving language-agent behavior through **verbal reinforcement** rather than model-weight updates.

The central idea is simple but important:

1. an agent attempts a task,
2. the attempt is evaluated,
3. the agent generates a textual reflection about what went wrong or what should change,
4. the reflection is stored in memory,
5. later attempts receive that reflection as additional context.

The model therefore learns across attempts by changing the **context available to future reasoning**, not by retraining the underlying language model.

This makes Reflexion a foundational comparison for the AI Flywheel's persistent-learning principle because it demonstrates that execution feedback can be transformed into durable guidance that improves later behavior.

At the same time, Reflexion's adaptation destination is comparatively narrow: learning primarily becomes **linguistic reflective memory**.

## Core Architecture

The Reflexion framework is commonly described through three main components.

### Actor

The Actor is the language agent that performs the task.

It may use an underlying prompting or agent strategy such as:

- Chain-of-Thought,
- ReAct,
- or another task-specific policy.

The Actor is conditioned on both the current task context and available reflective memory.

### Evaluator

The Evaluator determines how well the trajectory performed.

Feedback can come from different sources depending on the task, including:

- exact-match evaluation,
- environment success or failure signals,
- heuristic checks,
- compiler or runtime results,
- generated tests,
- or LLM-based evaluation.

The evaluator does not necessarily produce a rich explanation. It may provide only a sparse reward or success/failure signal.

### Self-Reflection

The Self-Reflection component converts the available feedback and trajectory into a natural-language lesson.

Its role is to answer questions such as:

- What caused the failure?
- What strategy should change?
- What should the agent remember on the next attempt?

The resulting reflection is stored and then injected into later attempts.

## Memory Model

Reflexion distinguishes between immediate execution history and longer-lived reflective memory.

### Short-Term Memory

The recent task trajectory provides the concrete sequence of reasoning, actions, observations, and results that led to the current outcome.

### Long-Term Reflective Memory

Generated reflections are retained so that later trials can use the lessons from earlier attempts.

The original framework generally keeps this reflective memory small because the Actor must consume it within its context window. The important property is not unlimited storage but **selective persistence of lessons that can change future decisions**.

The official implementation also supports persistent memory across iterative trials and the ability to resume previous experiment runs.

## Learning Loop

A typical Reflexion cycle is:

1. The Actor attempts the task.
2. The environment or evaluator produces feedback.
3. If the task is not successfully completed, the Self-Reflection component analyzes the trajectory and feedback.
4. A textual lesson is generated.
5. The lesson is added to reflective memory.
6. The Actor retries the task with the reflection included in its context.
7. The cycle continues until success or a trial limit is reached.

This is a genuine learning loop because later behavior changes based on persistent information produced by earlier execution.

However, the persistent change remains primarily in text memory rather than in:

- deterministic code,
- procedural workflows,
- tool implementations,
- or system governance.

## Feedback Signals

One of Reflexion's strengths is that it is not tied to a single feedback type.

The paper demonstrates the framework across different task categories.

### Sequential Decision-Making

Environment-level success and failure signals can indicate whether the agent completed the objective.

### Reasoning Tasks

Exact-match or answer-based evaluation can determine whether the response was correct.

### Programming Tasks

Tests, compiler output, runtime errors, and generated evaluation cases can provide concrete evidence about code behavior.

The Self-Reflection component then converts these varied signals into a verbal lesson suitable for future reasoning.

This provides strong prior art for the general idea that sparse execution evidence can be transformed into reusable AI guidance.

## How Reflections Influence Future Action

Reflections are not merely archived for audit.

They are inserted into the Actor's future context and directly influence the next reasoning process.

The official implementation exposes several experiment strategies, including:

- no information from the prior attempt,
- the previous reasoning trace,
- the previous reflection,
- or both the prior attempt and the reflection.

This makes the role of persistent reflective memory experimentally explicit.

## Persistent Assets

The primary persistent asset in Reflexion is **linguistic episodic memory**.

A reflection can encode:

- a failure explanation,
- a strategy correction,
- a planning insight,
- a warning about a mistake,
- or another lesson intended to improve later reasoning.

The framework does not, in its original form, automatically convert these lessons into:

- deterministic tools,
- source-code changes to the agent system,
- formal SOP updates,
- or governance rules.

This is the central difference between Reflexion and the broader persistence model of the AI Flywheel.

## Failure Handling and Validation

Reflexion begins from task feedback and uses reflection to create a revised strategy for another attempt.

The framework can therefore respond to failure without retraining the model.

However, validation is primarily expressed through whether subsequent attempts perform better according to the task evaluator.

There is no generalized promotion pipeline in which a newly learned artifact must independently pass validation before becoming a persistent operational capability. The reflection itself becomes memory and is tested indirectly through later behavior.

## Human Role and Governance

Reflexion can consume feedback from many sources, and a human could theoretically provide feedback to an implementation.

However, the canonical framework does not define human authority as an architectural control plane.

The primary sources reviewed do not establish formal mechanisms for:

- delegated autonomy,
- approval-required actions,
- uncertainty escalation,
- prohibited actions,
- or human approval before reflections are added to memory.

Human feedback and human authority are therefore separate concepts here.

A human may be a source of feedback, but the framework does not formalize which actions the agent is permitted to take autonomously.

## Evidence Checklist

### Types of feedback signals used

**Finding:** Fulfilled.

Reflexion supports varied feedback forms and sources, including scalar or binary rewards, exact-match evaluation, environmental feedback, heuristics, compiler or runtime results, tests, and LLM-generated evaluation.

### Structure and persistence of reflection memory

**Finding:** Fulfilled.

Reflections are stored as textual episodic memory and supplied to the Actor on later trials. The memory is generally bounded to keep the relevant lessons within the model's usable context.

### How reflections influence future action

**Finding:** Fulfilled.

Stored reflections are injected into future Actor contexts, changing the information available during subsequent reasoning and action selection.

### Whether lessons become executable or procedural assets

**Finding:** Not in the original framework.

The canonical Reflexion mechanism stores verbal lessons. It does not automatically promote them into code, callable tools, or formal SOPs.

### Whether the framework explicitly chooses among multiple adaptation destinations

**Finding:** No.

The dominant adaptation destination is reflective linguistic memory. The framework does not define a generalized classifier that chooses among code, procedure, reasoning knowledge, validation, and governance.

### The role of human feedback, approval, or authority

**Finding:** Human feedback is possible in principle, but formal authority is not part of the framework.

The architecture does not define an explicit Governance Policy or human approval gate.

## Comparison to the Infoconex AI Flywheel

| Dimension | Reflexion | Infoconex AI Flywheel |
|---|---|---|
| Learning trigger | Task feedback from a completed attempt | Outcome evidence from meaningful execution |
| Reflection | Converts trajectory and feedback into a verbal lesson | Evaluation and classification determine what should change |
| Primary persistent asset | Linguistic reflective memory | Code, procedure, reasoning knowledge, validation, or governance |
| Model-weight changes | None required | None required by the methodology |
| Reuse | Reflections condition future attempts | Improved operational assets are reused by future executions |
| Evolution routing | Single dominant destination | Explicit multi-destination routing |
| Determinism boundary | Not an explicit concept | First-class moving boundary |
| Human authority | Not explicitly modeled | First-class governance principle |

## Strongest Overlap

Reflexion provides strong prior art for the ideas that:

- an agent can learn from execution without model retraining,
- outcome feedback should influence future behavior,
- failures can be converted into persistent lessons,
- and later attempts can improve by reusing those lessons.

## Key Differences to Investigate

### Reflection memory versus operational-asset evolution

Reflexion changes what the AI remembers.

The AI Flywheel can change what the entire process **uses to operate**, including deterministic software and procedure.

### Single adaptation destination versus routing

In Reflexion, a lesson normally becomes reflection memory.

In the AI Flywheel, the same lesson might instead become:

- code,
- an SOP change,
- reasoning guidance,
- a validation rule,
- or a governance change.

### Better reasoning versus moving responsibility

Reflexion primarily improves future reasoning.

The AI Flywheel may conclude that future reasoning should no longer be necessary for that responsibility because the behavior has become predictable enough to move into procedure or code.

### Feedback versus authority

Reflexion can incorporate human feedback, but feedback does not define authority.

The AI Flywheel separately models when human permission or judgment is required.

## Current Research Position

Reflexion should be treated as strong prior art for feedback-driven agent learning, persistent verbal memory, self-reflection, and improvement across repeated attempts.

The AI Flywheel should not claim that an AI learning lessons from its own execution is unique.

The more defensible distinction lies in what happens **after a lesson is identified**:

> Does the lesson merely improve future reasoning, or does the system explicitly decide which persistent operational mechanism should own the improved behavior?

That broader routing question, combined with movement across the determinism boundary and human-governed authority, remains the primary AI Flywheel differentiation hypothesis.

## Related Infoconex AI Flywheel Research

- [Autonomy Is Bounded by Human Authority](../principles/01-human-authority.md)
- [AI Is the Operator](../principles/02-ai-as-operator.md)
- [Moving Determinism Boundary](../principles/03-moving-determinism-boundary.md)
- [SOP as Operational Control Plane](../principles/04-sop-control-plane.md)
- [Outcome Evidence](../principles/05-outcome-evidence.md)
- [Evolution Routing](../principles/06-evolution-routing.md)
- [Persistent Operational Learning](../principles/07-persistent-learning.md)
- [Compounding Reuse](../principles/08-compounding-reuse.md)
