# Principle 5 Research: Evolution Routing

## Principle Under Review

Observed weaknesses are classified so the system can determine whether the appropriate improvement belongs in deterministic code, procedural guidance, validation, persistent knowledge, or continued AI reasoning.

See the canonical [principles specification](../../specification/principles.md#principle-5-failure-determines-where-the-system-evolves).

## Prior-Art Question

Do existing systems explicitly diagnose failures and route the resulting improvement to different persistent execution layers?

## Working Assessment

This is one of the most important differentiation questions for the AI Flywheel.

Many systems improve after failure. The narrower question is whether they formalize **where the system should evolve** rather than assuming a single adaptation mechanism such as reflection, memory, source modification, or retry.

## Comparison Dimensions

For each framework, determine whether failure can result in:

- a code change,
- a procedural change,
- a validation change,
- a reusable memory or lesson,
- retention of AI judgment,
- or reassignment of responsibility among layers.

Also determine whether the destination is selected explicitly or merely emerges from the framework architecture.

## Frameworks to Compare

- [GenericAgent](../frameworks/genericagent.md)
- [Metis](../frameworks/metis.md)
- [MOSS](../frameworks/moss.md)
- [MASFly](../frameworks/masfly.md)
- [Ralph](../frameworks/ralph.md)
- [Reflexion](../frameworks/reflexion.md)

## Potential Differentiation

A candidate AI Flywheel rule is:

> Correct the weakness at the lowest layer capable of handling it reliably without unnecessarily removing adaptability.

Research should determine whether materially equivalent routing rules already exist.
