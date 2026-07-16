---
title: "Criterion 6: Outcomes Are Evaluated and Classified"
document_type: "conformance-criterion"
section: "specification"
status: "canonical"
canonical: true
order: 6
summary: "The system determines whether the intended result occurred and identifies weaknesses, uncertainty, or learning opportunities revealed by the outcome."
criterion_number: 6
criterion_id: "evaluation-and-classification"
required: true
last_reviewed: "2026-07-16"
tags:
  - "conformance"
---

# Criterion 6: Outcomes Are Evaluated and Classified

The system determines whether the intended result occurred and identifies weaknesses, uncertainty, or learning opportunities revealed by the outcome.

## Requirement

After execution, the system must evaluate observed evidence and classify the nature of any relevant issue or lesson.

Classification should be able to distinguish among concerns such as:

- deterministic implementation defects,
- procedural weaknesses,
- missing validation,
- reasoning gaps,
- environmental change,
- governance or authority issues,
- and incorrect responsibility allocation.

The system should be able to ask:

> **Where should this learning live?**

## Evidence of Conformance

A conforming implementation should demonstrate a post-execution process that does more than label a task successful or failed.

It should identify the type of weakness or learning opportunity well enough to support an intentional adaptation decision.

## Non-Conforming Indicators

This criterion is not satisfied when:

- every failure produces the same response,
- the system only retries without diagnosis,
- or learning is persisted without determining what mechanism should own it.

## Criterion Navigation

- [Conformance Index](README.md)
- **Previous Criterion:** [Criterion 5: Execution Produces Outcome Evidence](05-outcome-evidence.md)
- **Next Criterion:** [Criterion 7: Improvements Are Routed to the Appropriate Destination](07-improvement-routing.md)

## Related Documents

- [Stage 3: Evaluate](../lifecycle/03-evaluate.md)
- [Stage 4: Classify](../lifecycle/04-classify.md)
- [Principle 6: Failure Determines Where the System Evolves](../principles/06-evolution-routing.md)
