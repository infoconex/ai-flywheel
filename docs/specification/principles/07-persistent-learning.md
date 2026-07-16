# Principle 7: Learning Must Change a Persistent Operational Asset

Useful learning must survive the current execution.

## Purpose

A system does not meaningfully improve if every lesson disappears when the current context ends.

When execution produces a reusable lesson, that learning should change something durable that future executions can inherit.

The persistent asset should match the type of learning identified through [Principle 6: Failure Determines Where the System Evolves](06-evolution-routing.md).

## Forms of Persistent Learning

A lesson may become:

- improved code,
- a new tool or deterministic capability,
- a modification to an existing capability,
- an SOP update,
- a known-failure rule,
- a new validation check,
- durable reasoning guidance,
- a reusable example or heuristic,
- a persistent memory or knowledge artifact,
- or an approved Governance Policy change.

The specific storage technology is implementation-dependent. The requirement is that the learning be durable and available to the future process that needs it.

## Persistence Is More Than Storage

Saving a log, transcript, or conversation does not automatically create operational learning.

For learning to become part of the Flywheel, the persistent asset must be usable by future execution. Archived evidence may support learning, but the lesson itself must be converted into an operational form that can influence later behavior when relevant.

For example:

- a lesson in a log becomes useful when it is converted into a rule the AI can retrieve,
- a repeated workaround becomes useful when it is added to the SOP,
- a stable procedure becomes useful when it is implemented as a reusable capability,
- and a human judgment becomes useful when it is captured as durable guidance or an authorized policy change.

## Learning Should Be Scoped Appropriately

Not every lesson should apply everywhere.

Persistent learning should carry enough context to determine where it is valid, such as:

- a particular process,
- customer,
- environment,
- tool,
- failure class,
- or governance scope.

Overgeneralized learning can make the Flywheel worse rather than better.

## Persistence Requires Validation and Authority

Before an improvement becomes part of future operation, it should be validated appropriately.

The system must also be authorized to persist the change.

A code modification, procedural update, or reasoning-memory change may be autonomous when permitted by governance. A change that expands authority or modifies protected policy requires human approval under [Principle 1: Autonomy Is Bounded by Human Authority](01-human-authority.md).

## Persistent Assets Can Evolve Again

Persistence does not make a learning permanent or unquestionable.

Future evidence may show that an asset should be:

- refined,
- replaced,
- rolled back,
- invalidated,
- or moved to a different operating mechanism.

A procedural rule may later become code. A brittle code path may move back into procedure or reasoning. Persistent learning remains subject to [Principle 3: Work Is Distributed Across a Moving Determinism Boundary](03-moving-determinism-boundary.md).

## Operational Intent

**Experience → validated learning → persistent operational asset → future reuse**

That continuity is what allows the Flywheel to become more capable rather than repeatedly solving the same problems from scratch.

## Principle Navigation

- [Principles Index](README.md)
- **Previous Principle:** [Principle 6: Failure Determines Where the System Evolves](06-evolution-routing.md)
- **Next Principle:** [Principle 8: Improvement Must Compound Through Reuse](08-compounding-reuse.md)

## Related Documents

- [Learning Architecture](../../architecture/learning-view.md)
- [Principle 1: Autonomy Is Bounded by Human Authority](01-human-authority.md)
- [Principle 3: Work Is Distributed Across a Moving Determinism Boundary](03-moving-determinism-boundary.md)
- [Principle 6: Failure Determines Where the System Evolves](06-evolution-routing.md)
- [Principle 8: Improvement Must Compound Through Reuse](08-compounding-reuse.md)