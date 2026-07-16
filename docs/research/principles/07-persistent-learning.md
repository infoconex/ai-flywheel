---
title: "Research: Learning Must Change a Persistent Operational Asset"
document_type: "principle-research"
section: "research"
status: "active-research"
canonical: false
order: 7
summary: "Determine how existing systems transform execution experience into durable assets that future operation can actually use, and identify what distinguishes operational learning from simple storage of conversations, logs, or historical records"
principle_number: 7
principle_id: "persistent-learning"
canonical_source: "../../specification/principles/07-persistent-learning.md"
research_started: "2026-07-15"
last_reviewed: "2026-07-16"
tags:
  - "principles"
  - "research"
---

# Research: Learning Must Change a Persistent Operational Asset

> Canonical principle: [Principle 7: Learning Must Change a Persistent Operational Asset](../../specification/principles/07-persistent-learning.md)

## Research Objective

Determine how existing systems transform execution experience into durable assets that future operation can actually use, and identify what distinguishes operational learning from simple storage of conversations, logs, or historical records.

## Current Evidence

Persistent learning is strongly represented across the reviewed frameworks, but the persistent artifact differs.

- [GenericAgent](../frameworks/genericagent.md) persists SOPs, skills, tools, facts, indexes, and session-derived memory.
- [Metis](../frameworks/metis.md) persists plans, facts, pitfalls, and validated code tools.
- [MOSS](../frameworks/moss.md) persists source-level improvements to the agent substrate and retains evolution history and candidate artifacts.
- [MASFly](../frameworks/masfly.md) persists successful collaboration patterns and failure-oriented supervisory experience.
- [Ralph](../frameworks/ralph.md) persists learning mainly in repository-local artifacts such as code, tests, specifications, plans, and `AGENT.md`.
- [Reflexion](../frameworks/reflexion.md) persists verbal reflections that condition later attempts.

The broad requirement that learning survive a single context or task is therefore established. The unresolved questions concern what qualifies as an **operational asset**, how it is validated, how it is scoped, and whether different asset types can evolve into one another.

## Related Ideas and Historical Provenance to Trace

Research should establish dates and primary sources for:

- continual and lifelong learning,
- episodic and semantic agent memory,
- procedural memory and skill acquisition,
- knowledge-base revision,
- persistent agent skill libraries,
- experience replay and case-based reasoning,
- self-modifying software,
- organizational learning and lessons-learned systems,
- and durable operational knowledge in runbooks and automation platforms.

## Open Research Questions

1. What minimum property makes a stored artifact **operational learning** rather than archived history?
2. Must the asset be automatically retrievable by future execution, or is human-mediated reuse sufficient?
3. How should persistent learning be scoped so a correct lesson is not applied outside the context in which it is valid?
4. What validation should be required before a learned asset becomes active?
5. When does persistence require human approval?
6. Can a persistent asset be automatically invalidated or rolled back when later evidence contradicts it?
7. How should provenance be retained so the system knows why a persistent rule or capability exists?
8. Can one persistent asset type be converted into another, such as memory becoming SOP guidance or procedure becoming code?
9. How should contradictory persistent lessons be reconciled?
10. Can human decisions become durable operational assets without being overgeneralized?

## Evidence Still Needed

- Formal distinctions between stored memory and actionable operational knowledge.
- Systems that validate learned artifacts before activating them.
- Research on scoping, provenance, invalidation, and rollback of persistent AI learning.
- Examples of automated conversion between different persistent asset types.
- Models in which human judgments become reusable operational guidance.
- Historical establishment dates for persistent agent learning mechanisms most relevant to the Flywheel.

## Current Research Position

Persistent memory, skills, source changes, and reusable procedures are all established mechanisms.

The AI Flywheel should therefore not claim persistence itself as novel. The stronger research question is whether the methodology's persistent-learning requirement is distinctive because the asset is selected through Evolution Routing, validated before reuse, governed by authority, and remains eligible to evolve again when later evidence shows that a different mechanism should own the behavior.
