# Research: Execution Must Produce Outcome Evidence

> Canonical principle: [Principle 5: Execution Must Produce Outcome Evidence](../../specification/principles/05-outcome-evidence.md)

## Research Objective

Determine what kinds of execution evidence existing adaptive and agent systems capture, how they distinguish verified outcome from model belief, and whether evidence is used only to score performance or also to decide how the operating system itself should change.

## Current Evidence

All six reviewed frameworks use some form of execution feedback, but the type and downstream use differ substantially.

- [MOSS](../frameworks/moss.md) collects production failure batches and replays them against candidate systems in isolated trials.
- [Metis](../frameworks/metis.md) analyzes completed execution trajectories and uses them to update memories and identify recurring plans for codification.
- [Reflexion](../frameworks/reflexion.md) converts evaluator feedback and task trajectories into persistent verbal lessons.
- [MASFly](../frameworks/masfly.md) uses runtime monitoring, task outcomes, and failure attribution to improve collaboration patterns and supervisory experience.
- [Ralph](../frameworks/ralph.md) relies heavily on deterministic backpressure such as tests, builds, static analysis, and observable repository state.
- [GenericAgent](../frameworks/genericagent.md) uses debugging, verification, task experience, and repeated-task evaluation when crystallizing capabilities.

Outcome feedback is therefore established prior art. The open question is whether the AI Flywheel's concept of **outcome evidence** can be defined more precisely as evidence sufficient to support evaluation, classification, adaptation, validation, and future governance decisions.

## Related Ideas and Historical Provenance to Trace

Research should establish authoritative sources and dates for:

- feedback control and closed-loop systems,
- observability in software systems,
- test-driven and evidence-driven software development,
- reinforcement signals and environment feedback in agents,
- execution traces and trajectory learning,
- postmortems and incident evidence,
- verification and validation of autonomous systems,
- confidence calibration and abstention,
- and human judgments or approvals as structured operational evidence.

## Open Research Questions

1. What minimum evidence must an AI Flywheel execution produce to be considered observable enough for learning?
2. How should evidence requirements differ by risk, consequence, and type of work?
3. When is model self-report acceptable evidence, and when must an independent signal be required?
4. How should partial success and uncertain outcomes be represented?
5. Should evidence be defined before execution as part of the SOP rather than discovered afterward?
6. How should human approvals and judgments be retained as evidence without overgeneralizing one decision?
7. Can evidence quality itself be evaluated and improved by the Flywheel?
8. How should conflicting evidence sources be reconciled?
9. Do existing frameworks use evidence specifically to determine **where** learning should persist, rather than only whether performance improved?

## Evidence Still Needed

- Formal definitions of evidence sufficiency in autonomous and adaptive systems.
- Research on independent validation of AI-generated actions.
- Examples where evidence requirements are encoded in machine-consumable procedures.
- Systems that preserve human decisions as reusable structured evidence.
- Models that use evidence to choose among different adaptation destinations.
- Historical establishment dates for observability and feedback concepts most directly applicable to the Flywheel.

## Current Research Position

The principle that systems should learn from observed outcomes rather than confidence alone is strongly established.

The research value of the AI Flywheel concept may lie in making outcome evidence a required bridge between operation and evolution: evidence is not only a reward signal or log record but the basis for deciding whether the outcome was correct, what failed, where responsibility belongs, what should change, and whether the change can be trusted.
