---
title: "AI Flywheel Architecture"
document_type: "overview"
section: "architecture"
status: "canonical"
canonical: true
order: 1
summary: "This section explains how the AI Flywheel fits together structurally. It separates the runtime model, the post-execution learning model, governance and escalation, and the two boundaries that shape where responsibility."
last_reviewed: "2026-07-16"
tags:
  - "overview"
---

# AI Flywheel Architecture

This section explains how the AI Flywheel fits together structurally. It separates the runtime model, the post-execution learning model, governance and escalation, and the two boundaries that shape where responsibility resides and what the AI is authorized to do.

The diagrams are starting models intended to evolve with the methodology.

## Table of Contents

- [Runtime Architecture](runtime-view.md) — Shows how the SOP, AI reasoning, and deterministic capabilities work together inside the Execute stage under human-authorized governance.
- [Learning Architecture](learning-view.md) — Shows how execution evidence is observed, evaluated, classified, and routed into persistent operational improvements.
- [Governance and Escalation](governance-and-escalation.md) — Defines governance gates, escalation outcomes, authority versus uncertainty, and the role of the Governance Policy.
- [Core Boundaries](boundaries.md) — Distinguishes the Moving Determinism Boundary from the Authority Boundary and explains how they interact.

## Architectural Model

The architecture is easiest to understand through two complementary operational views and two governing concepts:

1. **Runtime:** how authorized work is performed.
2. **Learning:** how evidence from execution changes future operation.
3. **Governance:** how human-defined authority constrains autonomous action and triggers escalation.
4. **Boundaries:** how the system determines where responsibility belongs and what the AI may do autonomously.

The three operating mechanisms—deterministic capability, procedural SOP, and AI reasoning—are not sequential lifecycle stages. They work together during execution and become possible destinations for learning after execution.

For the normative methodology, see the [AI Flywheel Specification](../specification/README.md).
