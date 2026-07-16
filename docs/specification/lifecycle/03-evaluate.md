---
title: "Stage 3: Evaluate"
document_type: "lifecycle-stage"
section: "specification"
status: "canonical"
canonical: true
order: 3
summary: "The AI compares the observed outcome with the intended outcome and applicable success criteria."
stage_number: 3
stage_id: "evaluate"
last_reviewed: "2026-07-16"
tags:
  - "lifecycle"
---

# Stage 3: Evaluate

The AI compares the observed outcome with the intended outcome and applicable success criteria.

## Purpose

Evaluation determines what the evidence means.

The Flywheel should distinguish among outcomes such as:

- verified success,
- partial success,
- known failure,
- and uncertain outcome.

The system should not treat task completion, lack of an exception, or model confidence as proof that the intended result occurred.

## Evaluation Criteria

Evaluation should use the best available evidence, including independent validation signals where possible.

The Flywheel should ask:

- Did the intended outcome actually occur?
- Were all required conditions satisfied?
- Did the process produce unexpected side effects?
- Were assumptions violated?
- Is the available evidence sufficient to make a responsible determination?

## Uncertain Outcomes

When the system cannot responsibly determine what occurred, uncertainty itself becomes an outcome.

If additional evidence cannot resolve that uncertainty within the system's delegated authority, the decision should be escalated for human judgment.

## Stage Navigation

- [Lifecycle Index](README.md)
- **Previous Stage:** [Stage 2: Observe](02-observe.md)
- **Next Stage:** [Stage 4: Classify](04-classify.md)

## Related Documents

- [Principle 5: Execution Must Produce Outcome Evidence](../principles/05-outcome-evidence.md)
- [Principle 1: Autonomy Is Bounded by Human Authority](../principles/01-human-authority.md)
