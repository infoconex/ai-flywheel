# Reuse Evidence Requirements

Reuse is demonstrated when relevant persisted learning influences a later execution in a way that can be observed and attributed.

These requirements define the minimum evidence needed to show that reuse occurred in the Infoconex AI Flywheel. They do not require one retrieval system, memory architecture, tracing technology, metric, or implementation mechanism.

## Reuse Requires More Than Persistence

Persistence establishes that validated learning is durably available for future use. Reuse requires evidence that later relevant operation actually benefited from that learning.

A persisted item does not demonstrate reuse merely because it exists, can be retrieved, or was loaded into an execution context.

To demonstrate reuse, the available evidence must establish, as applicable:

- The persisted learning or validated operating pattern that was relevant to the later execution
- The conditions that made the learning applicable
- That the learning was available to the later operating process
- That the learning was selected, invoked, applied, or otherwise incorporated when relevant
- How the later execution was influenced by that learning or validated pattern
- The outcome evidence produced by the later execution

The exact evidence may differ by mechanism, but a later reviewer or lifecycle decision must be able to determine that the earlier learning affected later operation rather than merely existing in storage.

## Availability, Selection, Application, and Influence Are Distinct

### Availability

The persisted learning is accessible to the later operating process in a form that could affect execution.

Availability is necessary but does not by itself prove reuse.

### Selection or Applicability Resolution

The later execution identifies the learning as relevant, or an operating mechanism applies it automatically because its applicability conditions match.

A relevant item that is available but never selected or considered does not demonstrate reuse.

### Application

The selected learning changes, constrains, guides, validates, or otherwise participates in the later execution.

Application may be explicit, such as invoking an improved tool, or implicit in the operating state, such as following an updated SOP or enforcing a persisted constraint.

### Influence

The evidence shows how the later execution differed, was constrained, or continued a validated pattern because of the persisted learning.

Influence does not require proving that the learning was the only cause of the outcome. It requires enough traceability to establish that the learning materially participated in the later behavior being claimed as reuse.

## Minimum Evidence for Demonstrated Reuse

A reuse claim must be supported by evidence sufficient to identify:

1. **The reused learning or pattern** — The persisted item, operational asset, rule, capability, guidance, constraint, or existing validated pattern involved.
2. **The later relevant execution** — The execution in which reuse is being claimed.
3. **Applicability** — Why the learning was relevant to that execution and remained valid and authorized in that context.
4. **Operational use** — How the learning was selected, invoked, applied, enforced, or otherwise incorporated into the execution.
5. **Observable influence** — What behavior, decision, constraint, validation, strategy, or execution path reflects the use of the persisted learning.
6. **Outcome evidence** — What happened after reuse so the reused behavior remains subject to normal observation and evaluation.

The evidence may be distributed across execution records, versioned assets, traces, tool invocation records, policy decisions, retrieval records, state comparisons, test results, or other implementation-specific sources. No single evidence format is required.

## Reuse May Be Demonstrated in Different Ways

Reuse may be demonstrated when a later execution:

- Invokes a deterministic capability created or improved by an earlier cycle
- Follows updated Standard Operating Procedure (SOP) guidance
- Applies durable reasoning guidance, an example, heuristic, or reusable skill
- Uses a stronger validation or detection mechanism
- Applies a persisted configuration, constraint, or applicability rule
- Avoids a known failed approach because failure-derived learning rules it out
- Selects a different strategy because prior evidence changed the available or preferred options
- Escalates, pauses, or constrains action because persisted learning identified a known risk or uncertainty condition
- Uses a human-authorized governance change within its approved scope
- Continues an existing validated operating pattern when later evidence shows that pattern remains effective

These examples are non-exhaustive. The requirement is observable influence, not a particular reuse mechanism.

## Failure-Derived Learning Can Be Reused Without Reusing the Failed Candidate

Validated learning derived from a failed or rejected adaptation may influence later execution without making the failed adaptation approved behavior.

Reuse evidence may show that later operation:

- Avoided the rejected approach
- Detected the failure condition earlier
- Applied an applicability constraint
- Selected a different strategy
- Added a validation step before proceeding
- Escalated when the known condition occurred

The reuse record must preserve the distinction between the failed candidate and the validated lesson derived from it.

## Repeated Success Can Demonstrate Reuse

A later execution does not need to behave differently from the immediately preceding execution to demonstrate reuse.

When an existing validated operating pattern is already part of the operating state, repeated successful use of that pattern may demonstrate continued reuse when evidence shows that:

- The pattern was applicable to the later execution
- The operating process continued to use that pattern
- The resulting outcome remained consistent with the intended behavior

A no-change cycle therefore does not fail Reuse merely because it created no new adaptation. Reuse may consist of continuing to apply an existing validated operating pattern while later evidence reinforces its effectiveness.

## Relevance Limits the Reuse Obligation

The specification does not require every persisted learning item to be applied to every future execution.

A persisted item may be correctly unused when it is not relevant, no longer valid, outside the current governance scope, superseded, or otherwise inapplicable.

A conforming implementation must be able to distinguish:

- Learning that was relevant and reused
- Learning that was relevant but not reused when it should have been
- Learning that was available but not relevant
- Learning that was no longer valid or authorized for the current context

Correct non-use is not a reuse failure. Failing to apply relevant validated learning without a justified reason may be evidence that compounding reuse is not occurring.

## Reuse Does Not End Evaluation

Reused learning remains subject to new outcome evidence.

Later execution may confirm that the reused learning remains effective, reveal that its applicability is narrower than expected, expose a regression, or show that the persisted learning should be challenged or changed.

Reuse therefore does not make earlier learning permanently authoritative. It creates a new evidence-producing execution in which the reused operating state can be evaluated again.

## Relationship to Conformance

A conforming implementation must be able to demonstrate that relevant persisted learning influences later execution rather than merely being stored.

Conformance evidence should make it possible to determine that:

- Persisted learning was available to later relevant execution
- The implementation can identify why the learning was applicable
- The learning was selected, applied, enforced, invoked, or otherwise incorporated when relevant
- The later execution shows observable influence from the persisted learning or existing validated pattern
- Failure-derived learning can affect later behavior without promoting the failed candidate
- Repeated successful use of an existing validated pattern can demonstrate reuse
- Irrelevant learning is not required to be applied merely to satisfy the lifecycle
- Reused behavior remains subject to new outcome evidence and evaluation

## Related Documents

- [Stage 8: Reuse](lifecycle/08-reuse.md)
- [Stage 7: Persist](lifecycle/07-persist.md)
- [Persisted Learning Requirements](persisted-learning.md)
- [Principle 8: Improvement Must Compound Through Reuse](principles/08-compounding-reuse.md)
- [Principle 7: Learning Must Change a Persistent Operational Asset](principles/07-persistent-learning.md)
- [Principle 5: Execution Must Produce Outcome Evidence](principles/05-outcome-evidence.md)
- [Conformance](conformance/README.md)
