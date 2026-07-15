# Principle 2 Research: Moving Determinism Boundary

## Principle Under Review

Responsibility is deliberately divided among deterministic code, procedural guidance, and AI reasoning, and behavior may move between those layers as evidence accumulates.

See the canonical [principles specification](../../specification/principles.md#principle-2-work-is-distributed-across-a-moving-determinism-boundary).

## Prior-Art Question

Do existing systems explicitly treat deterministic code, procedural knowledge, and AI reasoning as distinct execution layers whose responsibilities can be reassigned over time?

## Working Assessment

This is one of the strongest candidates for a distinctive AI Flywheel contribution, but it requires especially careful research.

Related systems may already move recurring plans into code, crystallize successful behavior into reusable skills, rewrite source, or use textual memory. The key question is whether they formalize the broader responsibility boundary and allow movement in multiple directions.

## Comparison Dimensions

For each framework, determine whether it:

1. distinguishes deterministic execution from AI judgment,
2. distinguishes procedural guidance from both code and reasoning,
3. defines criteria for moving behavior between layers,
4. supports movement in more than one direction,
5. uses observed outcomes to trigger reassignment,
6. treats responsibility allocation itself as an object of optimization.

## Frameworks to Compare

- [GenericAgent](../frameworks/genericagent.md)
- [Metis](../frameworks/metis.md)
- [MOSS](../frameworks/moss.md)
- [MASFly](../frameworks/masfly.md)
- [Ralph](../frameworks/ralph.md)
- [Reflexion](../frameworks/reflexion.md)

## Potential Differentiation

A possible AI Flywheel distinction is the explicit optimization of **where intelligence resides** rather than only improving the intelligence, memory, or software itself.

This remains a research hypothesis until the relevant literature and implementations are examined in depth.
