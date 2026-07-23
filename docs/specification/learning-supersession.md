# Learning Supersession Requirements

Persisted learning is not permanently authoritative. New evidence may show that previously validated learning is no longer correct, effective, safe, authorized, or applicable in the context where it is being considered for reuse.

These requirements define how persisted learning must be challenged, revised, superseded, deprecated, invalidated, rolled back, or retired in the Infoconex AI Flywheel. They do not require a specific versioning system, repository structure, storage technology, status model, or implementation mechanism.

## New Evidence Can Challenge Existing Learning

Persisted learning must remain subject to later outcome evidence and evaluation.

A challenge may arise when later evidence indicates, for example, that:

- The learning no longer produces the intended outcome
- The learning creates a material regression or unacceptable side effect
- The operating context has changed enough that the original applicability assumptions no longer hold
- Broader evidence contradicts or narrows the original validation claim
- A better validated approach is now available
- A deterministic capability, SOP rule, reasoning guidance, validation mechanism, constraint, or other operational asset has become obsolete or brittle
- A governance change makes the learning no longer authorized for the same use

A challenge does not automatically prove that the existing learning is invalid. It creates new lifecycle evidence that must be evaluated and classified.

## Challenges Return Through the Existing Lifecycle

The Infoconex AI Flywheel does not use a separate supersession process outside the lifecycle.

When new evidence challenges persisted learning, the system must:

1. **Observe** the new evidence and preserve enough context to identify the learning or operating pattern being challenged.
2. **Evaluate** whether the evidence indicates continued validity, narrowed applicability, a weakness, unacceptable risk, or unresolved uncertainty.
3. **Classify** what should change and where that change belongs.
4. **Adapt** the affected operating state when change is justified, or explicitly resolve that the existing learning remains valid when no adaptation is required.
5. **Validate** any replacement, revision, restriction, rollback, or other persistent learning intended for future use.
6. **Persist** the validated and authorized resulting state.
7. **Reuse** the current valid state in later relevant execution.

The system must not bypass validation merely because the proposed replacement is intended to correct previously persisted learning.

## Status Changes Must Affect Future Operation

When later evidence establishes that persisted learning should no longer be treated as current validated guidance, the operational state must change so future relevant execution does not continue to rely on it as though nothing changed.

The resulting disposition may include:

### Revised

The existing learning remains useful but must be changed, narrowed, clarified, or otherwise updated.

A revision intended for future use must satisfy applicable validation and authorization requirements before becoming the current operational form.

### Superseded

A newer validated and authorized learning item or operational asset replaces the earlier one for a defined scope.

The implementation must make it possible to determine which learning is current for that scope and prevent the superseded item from continuing to be selected as current guidance where the replacement applies.

### Deprecated

The learning remains identifiable but should no longer be selected for new relevant use, except where an explicitly defined transition, compatibility, rollback, or historical need justifies continued availability.

Deprecation must be represented in a way that future operation can distinguish deprecated learning from current validated guidance.

### Invalidated

Available evidence no longer supports treating the learning as valid for some or all of its prior scope.

Known-invalid learning must not continue to be applied as current validated guidance within the invalidated scope.

### Rolled Back

The operating state returns to an earlier validated state or another validated safe state because the current persisted learning is no longer acceptable.

A rollback does not make the rolled-back learning valid merely because it existed previously. The state being restored or selected must itself remain appropriate and authorized for the current context.

### Retired or Removed from Active Use

The learning is no longer part of the active operating state for future use.

Historical evidence may still be retained for auditability, traceability, analysis, or future learning, but retained history must remain distinguishable from current reusable guidance.

These dispositions are not required as literal implementation status values. An implementation may use different mechanisms so long as the required operational behavior is preserved.

## Current and Historical Learning Must Be Distinguishable

Supersession does not require deleting history.

Implementations may retain prior versions, rejected learning, deprecated guidance, retired assets, and the evidence that justified earlier decisions. However, future operation must be able to distinguish:

- Current validated and authorized learning
- Learning whose applicability has been narrowed
- Learning that has been superseded or deprecated
- Learning known to be invalid for the current context
- Historical information retained only as evidence or reference

A system that retains old learning but cannot determine which guidance is current risks compounding outdated behavior and does not satisfy these requirements.

## Replacement Learning Must Preserve Traceability Where Required

When one persisted learning item replaces, narrows, or invalidates another, the implementation must preserve enough relationship between the affected items and supporting evidence for later review where the operating context requires it.

As applicable, a reviewer should be able to determine:

- What prior learning was challenged
- What evidence triggered reevaluation
- What scope was affected
- What resulting learning or operating state became current
- Whether the prior learning was revised, superseded, deprecated, invalidated, rolled back, or retired
- The validation and authorization basis for the resulting state

The exact representation is implementation-specific.

## Known-Invalid Learning Must Not Continue to Compound

Once the system has sufficient evidence and authority to determine that persisted learning is invalid for a defined scope, it must prevent that learning from continuing to be treated as current validated guidance within that scope.

This does not require immediate deletion of every historical representation. It requires preventing known-invalid learning from being selected, applied, invoked, enforced, or otherwise reused as current guidance where it no longer applies.

If uncertainty remains unresolved rather than sufficient to establish invalidity, the system must represent that uncertainty honestly and apply the applicable governance, escalation, or risk controls instead of silently treating the learning as either fully valid or fully invalid.

## Governance Still Applies

Changing the status or active use of persisted learning is itself an operational or persistent change and remains subject to the Governance Policy.

The AI may challenge, recommend revision, or propose supersession within its delegated authority. It may not use supersession as a mechanism to bypass required approval or to expand its own authority.

Where immediate continued reuse creates unacceptable risk, the Governance Policy may require pausing, restricting, rolling back, or escalating use while reevaluation is completed.

## Relationship to Reuse

[Stage 8: Reuse](lifecycle/08-reuse.md) must apply persisted learning only where it remains relevant, valid, and authorized.

Superseded, deprecated, invalidated, retired, or otherwise inapplicable learning must not be reused as current validated guidance merely because it remains stored or retrievable.

Later execution evidence can itself challenge the learning being reused and return the system through the lifecycle again.

## Relationship to Conformance

A conforming implementation must be able to demonstrate that persisted learning can be challenged and that later evidence can change which learning is treated as current operational guidance.

Conformance evidence should make it possible to determine that:

- Previously validated learning is not treated as permanently authoritative
- New evidence can trigger reevaluation through the existing lifecycle
- Revisions, replacements, restrictions, rollbacks, and retirements are validated and authorized where required before changing future operation
- Current learning can be distinguished from superseded, deprecated, invalidated, or historical learning
- Known-invalid learning is prevented from continuing to be reused as current guidance within the affected scope
- Replacement or retirement decisions preserve enough traceability for later review where required
- The implementation does not depend on one prescribed versioning or storage mechanism

## Related Documents

- [Persisted Learning Requirements](persisted-learning.md)
- [Reuse Evidence Requirements](reuse-evidence.md)
- [Stage 3: Evaluate](lifecycle/03-evaluate.md)
- [Stage 4: Classify](lifecycle/04-classify.md)
- [Stage 5: Adapt](lifecycle/05-adapt.md)
- [Stage 6: Validate](lifecycle/06-validate.md)
- [Stage 7: Persist](lifecycle/07-persist.md)
- [Stage 8: Reuse](lifecycle/08-reuse.md)
- [Principle 7: Learning Must Change a Persistent Operational Asset](principles/07-persistent-learning.md)
- [Principle 8: Improvement Must Compound Through Reuse](principles/08-compounding-reuse.md)
- [Conformance](conformance/README.md)
