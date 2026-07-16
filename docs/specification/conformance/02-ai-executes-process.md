---
title: "Criterion 2: AI Executes the Process"
document_type: "conformance-criterion"
section: "specification"
status: "canonical"
canonical: true
order: 2
summary: "The AI performs meaningful operational work rather than only producing instructions for a human operator."
criterion_number: 2
criterion_id: "ai-executes-process"
required: true
last_reviewed: "2026-07-16"
tags:
  - "conformance"
---

# Criterion 2: AI Executes the Process

The AI performs meaningful operational work rather than only producing instructions for a human operator.

## Requirement

Once authorized, the system is designed to continue operating without routine human participation until an escalation condition is reached.

The AI should directly participate in execution by activities such as:

- interpreting the SOP,
- invoking tools and deterministic capabilities,
- reasoning between actions,
- interpreting results,
- handling exceptions,
- and continuing the process within its delegated authority.

## Evidence of Conformance

A conforming implementation should demonstrate that the AI can execute meaningful portions of the operational process without requiring a human to manually perform each generated instruction.

## Non-Conforming Indicators

This criterion is not satisfied when the AI primarily:

- writes instructions that a human must routinely carry out,
- generates code that only a human operates as part of the normal process,
- or stops after every action for unnecessary human continuation.

## Criterion Navigation

- [Conformance Index](README.md)
- **Previous Criterion:** [Criterion 1: Human Authority Defines the Scope of Autonomy](01-human-authority.md)
- **Next Criterion:** [Criterion 3: Runtime Responsibilities Are Distinguishable](03-runtime-responsibilities.md)

## Related Documents

- [Principle 2: AI Is the Operator, Not Merely the Assistant](../principles/02-ai-as-operator.md)
- [Stage 1: Execute](../lifecycle/01-execute.md)
