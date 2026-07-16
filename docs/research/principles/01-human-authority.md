---
title: "Research: Autonomy Is Bounded by Human Authority"
document_type: "principle-research"
section: "research"
status: "active-research"
canonical: false
order: 1
summary: "Determine which parts of the AI Flywheel's human-authority model are established ideas, which are already implemented in related agent systems, and whether the specific combination of delegated autonomy, separate."
principle_number: 1
principle_id: "human-authority"
canonical_source: "../../specification/principles/01-human-authority.md"
research_started: "2026-07-15"
last_reviewed: "2026-07-16"
tags:
  - "principles"
  - "research"
---

# Research: Autonomy Is Bounded by Human Authority

> Canonical principle: [Principle 1: Autonomy Is Bounded by Human Authority](../../specification/principles/01-human-authority.md)

## Research Objective

Determine which parts of the AI Flywheel's human-authority model are established ideas, which are already implemented in related agent systems, and whether the specific combination of delegated autonomy, separate authority and uncertainty boundaries, persistent governance, and evidence-driven reduction of unnecessary escalation is materially distinct.

## Current Evidence

The current framework review shows that human involvement exists in several forms, but a complete authority model is uncommon.

- [MOSS](../frameworks/moss.md) has the strongest direct overlap found so far. It can autonomously collect failure evidence, generate and validate a candidate system, but requires explicit user authorization before the candidate replaces production.
- [GenericAgent](../frameworks/genericagent.md) includes an `ask_user` capability for confirmation and interaction, but the reviewed sources do not define a persistent authority policy or separate authority and uncertainty boundaries.
- [Ralph](../frameworks/ralph.md) relies heavily on human initiation, supervision, tuning, and rescue, but those controls are largely informal rather than expressed as a machine-readable governance model.
- [Metis](../frameworks/metis.md), [MASFly](../frameworks/masfly.md), and [Reflexion](../frameworks/reflexion.md) do not currently establish human authority as a first-class part of their core self-evolution architecture.

The current evidence therefore supports the conclusion that **human involvement is established**, while the broader AI Flywheel governance model still requires comparison with adjacent fields beyond agent frameworks.

## Related Ideas and Historical Provenance to Trace

The following areas should be researched for their earliest authoritative formulations, establishment dates, and direct relevance:

- supervisory control of automated systems,
- levels of automation and human-machine function allocation,
- adjustable autonomy,
- mixed-initiative systems,
- human-in-the-loop and human-on-the-loop control,
- delegated authority and policy-based access control,
- confidence-based abstention and selective prediction,
- escalation policies in high-consequence automation,
- governance of self-modifying or adaptive systems,
- and mechanisms that prevent an autonomous system from expanding its own authority.

## Open Research Questions

1. Has another autonomous-agent methodology explicitly separated **human judgment** from **human approval** as two different escalation causes?
2. Is there established terminology equivalent to the AI Flywheel's **Authority Boundary** and **Uncertainty Boundary**?
3. Do existing systems define a persistent governance artifact that sits above procedures and cannot be overridden by them?
4. Is localized escalation, where unaffected authorized work continues while one decision waits for a human, already formalized elsewhere?
5. Do existing systems treat human decisions as evidence that can reduce repeated future escalation without automatically expanding authority?
6. Is the rule that an AI may recommend increased autonomy but may not grant itself increased autonomy already established in a comparable self-evolving-agent model?
7. How should authority changes be versioned, audited, and rolled back?
8. What evidence threshold should be required before a system recommends broader delegated authority?

## Evidence Still Needed

- Primary sources from adjustable-autonomy and supervisory-control research.
- Formal models for delegated human authority in autonomous systems.
- Examples of systems with explicit approval, judgment, and prohibition states.
- Evidence of machine-readable governance policies controlling both execution and self-modification.
- Research on whether repeated human decisions can safely become future policy or delegated authority.
- Historical dates for the major adjacent concepts listed above.

## Current Research Position

The individual ideas of human oversight, approval gates, and bounded autonomy are clearly not unique to the AI Flywheel.

The strongest candidate for meaningful differentiation is the integrated model in which:

- a human authorizes the operating scope,
- the AI runs autonomously inside that scope,
- uncertainty and lack of authority trigger different forms of escalation,
- human resolutions can become reusable learning,
- and the AI may improve its capabilities without being allowed to grant itself additional authority.

That combination should be treated as a research hypothesis until adjacent autonomy and governance literature has been reviewed as deeply as the current framework research.
