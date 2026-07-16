---
title: "Research: The SOP Is an Operational Control Plane"
document_type: "principle-research"
section: "research"
status: "active-research"
canonical: false
order: 4
summary: "Determine how existing systems use persistent procedures, SOPs, plans, runbooks, skills, prompts, or workflow definitions to control AI execution, and whether any existing model gives the SOP the same broad operational."
principle_number: 4
principle_id: "sop-control-plane"
canonical_source: "../../specification/principles/04-sop-control-plane.md"
research_started: "2026-07-15"
last_reviewed: "2026-07-16"
tags:
  - "principles"
  - "research"
---

# Research: The SOP Is an Operational Control Plane

> Canonical principle: [Principle 4: The SOP Is an Operational Control Plane](../../specification/principles/04-sop-control-plane.md)

## Research Objective

Determine how existing systems use persistent procedures, SOPs, plans, runbooks, skills, prompts, or workflow definitions to control AI execution, and whether any existing model gives the SOP the same broad operational role proposed by the AI Flywheel.

## Current Evidence

Persistent procedural artifacts are well represented in the current framework research.

- [GenericAgent](../frameworks/genericagent.md) explicitly stores reusable Task Skills / SOPs in persistent memory and uses them to unlock and repeat capabilities.
- [MASFly](../frameworks/masfly.md) uses structured SOP cases to generate task-specific multi-agent operating procedures.
- [Ralph](../frameworks/ralph.md) relies on specifications, plans, and `AGENT.md` as persistent AI-readable operational guidance.
- [Metis](../frameworks/metis.md) stores execution plans as a distinct form of text memory and can promote recurring plans into code.
- [MOSS](../frameworks/moss.md) has a defined evolution pipeline but does not make an SOP the central adaptation or execution abstraction.
- [Reflexion](../frameworks/reflexion.md) primarily uses reflective memory rather than a persistent operating procedure.

The use of persistent procedure is therefore established. The unresolved question is whether the SOP can be distinguished from general memory or prompting by the breadth of operational responsibility it carries.

## Related Ideas and Historical Provenance to Trace

Research should identify dates and authoritative sources for:

- standard operating procedures in automated systems,
- machine-readable runbooks and operational playbooks,
- workflow engines and business process management,
- policy-as-code and configuration-as-code,
- agent plans and skill libraries,
- executable specifications,
- runbook automation in operations and SRE,
- procedural memory in cognitive architectures,
- and persistent AI instruction artifacts used across context windows.

## Open Research Questions

1. Is **operational control plane** established terminology for a machine-consumable procedure, or is a different term more precise?
2. Which existing systems use one persistent artifact to define objectives, capability use, normal execution, known exceptions, evidence requirements, validation, and escalation?
3. Is the distinction between a **Governance Policy** and an **SOP** already formalized elsewhere as authority versus operational procedure?
4. When does an SOP become too broad and effectively turn into executable workflow code?
5. What parts of an SOP should remain declarative versus interpreted by AI?
6. How should conflicting instructions between procedure, persistent memory, and runtime reasoning be resolved?
7. How should an SOP evolve safely from execution evidence?
8. Can a procedure specify when AI judgment is required without attempting to encode the judgment itself?
9. How should SOP versions be validated and rolled back?

## Evidence Still Needed

- Primary sources on runbook automation and machine-readable operational procedures.
- Examples where procedures explicitly define evidence and validation expectations, not only execution steps.
- Systems that formally separate operational procedure from authority policy.
- Evidence of AI autonomously updating procedures from execution outcomes.
- Historical establishment dates for the closest SOP, runbook, and workflow concepts.

## Current Research Position

Persistent machine-consumable procedures, plans, and skills are clear prior art.

The current differentiation hypothesis is that the AI Flywheel gives the SOP a specific architectural role: it is the persistent operational contract that connects AI reasoning, deterministic capabilities, known failure handling, evidence, validation, and escalation while remaining subordinate to a separate human-authorized Governance Policy.
