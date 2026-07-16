---
title: "Criterion 1: Human Authority Defines the Scope of Autonomy"
document_type: "conformance-criterion"
section: "specification"
status: "canonical"
canonical: true
order: 1
summary: "The system operates within explicit human-defined authority boundaries."
criterion_number: 1
criterion_id: "human-authority"
required: true
last_reviewed: "2026-07-16"
tags:
  - "conformance"
---

# Criterion 1: Human Authority Defines the Scope of Autonomy

The system operates within explicit human-defined authority boundaries.

## Requirement

A Governance Policy or equivalent persistent control must define:

- what the AI may do autonomously,
- what requires human approval,
- what requires human judgment,
- what is prohibited,
- and when escalation is required.

The AI may recommend increased autonomy but may not grant itself increased authority.

## Evidence of Conformance

A conforming implementation should be able to show:

- where delegated authority is defined,
- how approval-required actions are identified,
- how uncertainty requiring human judgment is identified,
- how prohibited actions are represented,
- and how authority changes are approved.

## Non-Conforming Indicators

This criterion is not satisfied when:

- autonomy is effectively unlimited,
- authority exists only as informal human expectation,
- the AI can silently expand its own authority,
- or human intervention occurs without defined escalation conditions.

## Criterion Navigation

- [Conformance Index](README.md)
- **Next Criterion:** [Criterion 2: AI Executes the Process](02-ai-executes-process.md)

## Related Documents

- [Principle 1: Autonomy Is Bounded by Human Authority](../principles/01-human-authority.md)
- [Governance and Escalation](../../architecture/governance-and-escalation.md)
