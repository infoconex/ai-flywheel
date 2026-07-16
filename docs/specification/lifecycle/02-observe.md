---
title: "Stage 2: Observe"
document_type: "lifecycle-stage"
section: "specification"
status: "canonical"
canonical: true
order: 2
summary: "The system captures evidence about what actually occurred during execution."
stage_number: 2
stage_id: "observe"
last_reviewed: "2026-07-16"
tags:
  - "lifecycle"
---

# Stage 2: Observe

The system captures evidence about what actually occurred during execution.

## Purpose

Observation creates the factual record needed to evaluate the outcome.

The Flywheel should preserve signals that help answer:

- what actions were taken,
- what outputs were produced,
- what errors occurred,
- what external state changed,
- what validations ran,
- and what human decisions affected the process.

## Forms of Observed Evidence

Evidence may include:

- tool outputs,
- logs,
- return codes,
- timing and performance data,
- external observations,
- state changes,
- validation signals,
- user feedback,
- human approvals,
- and human judgments.

The exact evidence depends on the process, but it should be sufficient to support later evaluation rather than relying on the AI's memory or confidence alone.

## Human Decisions Are Part of the Evidence

When a human decision materially affects execution, it becomes part of the observed record.

That decision may later reveal a reusable lesson, a missing procedure, a validation need, or a possible governance change.

## Stage Navigation

- [Lifecycle Index](README.md)
- **Previous Stage:** [Stage 1: Execute](01-execute.md)
- **Next Stage:** [Stage 3: Evaluate](03-evaluate.md)

## Related Documents

- [Principle 5: Execution Must Produce Outcome Evidence](../principles/05-outcome-evidence.md)
- [Learning Architecture](../../architecture/learning-view.md)
