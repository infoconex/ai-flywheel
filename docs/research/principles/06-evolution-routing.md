---
title: "Research: Failure Determines Where the System Evolves"
document_type: "principle-research"
section: "research"
status: "active-research"
canonical: false
order: 6
summary: "Determine whether existing systems explicitly diagnose execution weaknesses and select among multiple persistent adaptation destinations, rather than assuming that every failure should be handled through one dominant mechanism such as retry"
principle_number: 6
principle_id: "evolution-routing"
canonical_source: "../../specification/principles/06-evolution-routing.md"
research_started: "2026-07-15"
last_reviewed: "2026-07-16"
tags:
  - "principles"
  - "research"
---

# Research: Failure Determines Where the System Evolves

> Canonical principle: [Principle 6: Failure Determines Where the System Evolves](../../specification/principles/06-evolution-routing.md)

## Research Objective

Determine whether existing systems explicitly diagnose execution weaknesses and select among multiple persistent adaptation destinations, rather than assuming that every failure should be handled through one dominant mechanism such as retry, reflection, memory, procedure, or source modification.

## Current Evidence

The framework review shows many adaptation mechanisms, but the routing decision is often implicit in the framework architecture.

- [Metis](../frameworks/metis.md) has the strongest representation-selection mechanism found so far. It distinguishes plans, facts, pitfalls, and code tools, and uses recurrence to decide when procedural plans should be codified.
- [GenericAgent](../frameworks/genericagent.md) can persist learning as SOPs, skills, scripts, tools, facts, and memory, but a general classification rule for choosing among those destinations is not clearly established.
- [MOSS](../frameworks/moss.md) has a sophisticated evidence-driven evolution pipeline, but the dominant adaptation destination is source-level code modification.
- [MASFly](../frameworks/masfly.md) routes successful and failed experience into collaboration procedures and supervisory knowledge.
- [Ralph](../frameworks/ralph.md) may change code, tests, specifications, plans, or instructions depending on observed failure, but the routing process is informal.
- [Reflexion](../frameworks/reflexion.md) primarily routes learning into reflective linguistic memory.

The current evidence suggests that **multi-destination adaptation exists**, but an explicit generalized routing rule remains a significant research question.

## Related Ideas and Historical Provenance to Trace

Research should identify authoritative sources and establishment dates for:

- fault diagnosis and root-cause analysis,
- self-adaptive software,
- autonomic computing and MAPE-K-style adaptation loops,
- adaptive control architectures,
- automated program repair,
- policy repair and workflow repair,
- knowledge-base revision,
- meta-learning systems that choose how to learn,
- and systems that classify failures before selecting an adaptation mechanism.

## Open Research Questions

1. Has another methodology explicitly asked **Where should this learning live?** as a first-class adaptation decision?
2. Are there systems that route one failure to code, another to procedure, another to reasoning memory, and another to governance?
3. Is there established terminology for **evolution routing** or an equivalent multi-destination adaptation mechanism?
4. Has a rule equivalent to **correct the weakness at the lowest layer capable of handling it reliably without unnecessarily removing adaptability** appeared in prior work?
5. How should reliability, adaptability, cost, consequence, and recurrence be weighted when choosing an adaptation destination?
6. Should validation be considered an adaptation destination in its own right?
7. Should governance changes be part of the same routing model or handled separately?
8. How can the system detect that its previous routing decision was wrong?
9. Can routing decisions themselves become persistent learning?

## Evidence Still Needed

- Primary literature on self-adaptive software and autonomic computing.
- Examples of explicit adaptation-destination classifiers.
- Systems that choose between procedural, executable, and reasoning-based corrections.
- Evidence of reversible routing when a previous mechanization decision proves brittle.
- Research on routing improvements into validation or governance.
- Historical establishment dates for the closest multi-destination adaptation models.

## Current Research Position

Learning from failure is clearly established, and several frameworks already persist different kinds of improvements.

The stronger AI Flywheel differentiation hypothesis is that the **destination decision itself is a formal part of the operating model**. Execution evidence is classified before adaptation so the system can determine which persistent mechanism is actually responsible for the weakness and should therefore own the correction.
