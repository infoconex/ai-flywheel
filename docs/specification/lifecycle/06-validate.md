---
title: "Stage 6: Validate"
document_type: "lifecycle-stage"
section: "specification"
status: "canonical"
canonical: true
order: 6
summary: "The proposed improvement is tested against appropriate evidence before it is trusted for future use."
stage_number: 6
stage_id: "validate"
last_reviewed: "2026-07-16"
tags:
  - "lifecycle"
---

# Stage 6: Validate

The proposed improvement is tested against appropriate evidence before it is trusted for future use.

## Purpose

Adaptation creates a candidate improvement. Validation determines whether that candidate is actually better and safe enough to reuse.

Validation should be proportional to the type and consequence of the change.

Examples include:

- automated tests for code changes,
- replay against representative scenarios for SOP changes,
- evaluation against known examples for reasoning guidance,
- independent outcome checks for validation rules,
- and human review for changes requiring human authority.

## Human Approval Does Not Replace Validation

A human may authorize a change without proving that the change works.

Likewise, a technically validated change may still require human approval before it can be persisted or deployed.

Validation and authority are separate concerns and both may be required.

## Failed Validation Is New Evidence

When a proposed improvement fails validation, the failure should be preserved as evidence.

The Flywheel may then return to classification or adaptation with better information rather than persisting a weak change.

## Stage Navigation

- [Lifecycle Index](README.md)
- **Previous Stage:** [Stage 5: Adapt](05-adapt.md)
- **Next Stage:** [Stage 7: Persist](07-persist.md)

## Related Documents

- [Principle 5: Execution Must Produce Outcome Evidence](../principles/05-outcome-evidence.md)
- [Principle 7: Learning Must Change a Persistent Operational Asset](../principles/07-persistent-learning.md)
