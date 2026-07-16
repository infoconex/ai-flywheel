---
title: "Criterion 9: Useful Learning Persists"
document_type: "conformance-criterion"
section: "specification"
status: "canonical"
canonical: true
order: 9
summary: "Validated and authorized improvements survive the current execution in a durable operational asset."
criterion_number: 9
criterion_id: "persistent-learning"
required: true
last_reviewed: "2026-07-16"
tags:
  - "conformance"
---

# Criterion 9: Useful Learning Persists

Validated and authorized improvements survive the current execution in a durable operational asset.

## Requirement

Reusable learning must change something future execution can actually use.

Persistent assets may include:

- deterministic capabilities,
- code changes,
- SOP updates,
- validation rules,
- durable reasoning guidance,
- reusable knowledge,
- or approved Governance Policy changes.

Saving raw logs or conversation history alone does not satisfy this criterion unless the stored information is made operationally available to future execution.

## Evidence of Conformance

A conforming implementation should show that lessons identified during one execution are converted into durable assets and remain available after the current context ends.

## Non-Conforming Indicators

This criterion is not satisfied when:

- lessons disappear with the current context window,
- observations are archived but never converted into reusable operational guidance,
- or improvements cannot be retrieved or applied by future executions.

## Criterion Navigation

- [Conformance Index](README.md)
- **Previous Criterion:** [Criterion 8: Governance Is Enforced During Action and Adaptation](08-governance-enforcement.md)
- **Next Criterion:** [Criterion 10: Future Executions Reuse the Improved System](10-compounding-reuse.md)

## Related Documents

- [Principle 7: Learning Must Change a Persistent Operational Asset](../principles/07-persistent-learning.md)
- [Stage 7: Persist](../lifecycle/07-persist.md)
