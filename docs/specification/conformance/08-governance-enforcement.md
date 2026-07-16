# Criterion 8: Governance Is Enforced During Action and Adaptation

Human-defined authority boundaries constrain both operational execution and persistent self-improvement.

## Requirement

A proposed action or persistent change must resolve to an appropriate governance outcome such as:

- **Authorized**,
- **Approval Required**,
- **Judgment Required**,
- or **Prohibited**.

The system must escalate when human authority is required rather than manufacturing certainty or silently exceeding delegated authority.

Governance must apply not only to operational actions but also to changes the Flywheel proposes to its own persistent operating assets.

## Evidence of Conformance

A conforming implementation should demonstrate:

- enforcement of authority boundaries during execution,
- escalation for approval-required actions,
- escalation for unresolved uncertainty requiring human judgment,
- enforcement of prohibited actions,
- and governance controls around persistent adaptation.

## Non-Conforming Indicators

This criterion is not satisfied when:

- governance is documented but not enforced,
- the AI can bypass approval requirements during self-improvement,
- the system silently exceeds delegated authority,
- or human escalation is treated as an ad hoc exception rather than a defined operating mechanism.

## Criterion Navigation

- [Conformance Index](README.md)
- **Previous Criterion:** [Criterion 7: Improvements Are Routed to the Appropriate Destination](07-improvement-routing.md)
- **Next Criterion:** [Criterion 9: Useful Learning Persists](09-persistent-learning.md)

## Related Documents

- [Principle 1: Autonomy Is Bounded by Human Authority](../principles/01-human-authority.md)
- [Governance and Escalation](../../architecture/governance-and-escalation.md)
- [Stage 5: Adapt](../lifecycle/05-adapt.md)
