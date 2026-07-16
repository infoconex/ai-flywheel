---
title: "Criterion 5: Execution Produces Outcome Evidence"
document_type: "conformance-criterion"
section: "specification"
status: "canonical"
canonical: true
order: 5
summary: "The process captures enough evidence to evaluate actual outcomes rather than relying solely on model confidence or completion status."
criterion_number: 5
criterion_id: "outcome-evidence"
required: true
last_reviewed: "2026-07-16"
tags:
  - "conformance"
---

# Criterion 5: Execution Produces Outcome Evidence

The process captures enough evidence to evaluate actual outcomes rather than relying solely on model confidence or completion status.

## Requirement

Meaningful execution should leave evidence sufficient to determine:

- what actions occurred,
- what results were produced,
- whether the intended outcome occurred,
- what failed or behaved unexpectedly,
- and whether important assumptions were violated.

Human judgments or approvals should be included when they materially affect execution or learning.

## Evidence of Conformance

A conforming implementation should be able to present outcome evidence such as:

- logs,
- tool outputs,
- return codes,
- tests,
- validation results,
- external state checks,
- metrics,
- or human decisions.

## Non-Conforming Indicators

This criterion is not satisfied when success is inferred only because:

- the AI says the task succeeded,
- no exception occurred,
- the process reached its final step,
- or no persistent evidence exists to evaluate the result.

## Criterion Navigation

- [Conformance Index](README.md)
- **Previous Criterion:** [Criterion 4: A Persistent Operational Procedure Exists](04-persistent-operational-procedure.md)
- **Next Criterion:** [Criterion 6: Outcomes Are Evaluated and Classified](06-evaluation-and-classification.md)

## Related Documents

- [Principle 5: Execution Must Produce Outcome Evidence](../principles/05-outcome-evidence.md)
- [Stage 2: Observe](../lifecycle/02-observe.md)
- [Stage 3: Evaluate](../lifecycle/03-evaluate.md)
