# Persisted Learning Requirements

Persisted learning is validated learning that survives the current execution in a durable form that can affect later relevant operation.

These requirements define what may count as persisted learning in the Infoconex AI Flywheel and the minimum properties it must have. They do not require a specific storage technology, artifact format, repository, database, memory system, or implementation architecture.

## Persistence Is Defined by Future Operational Use

Information is not persisted learning merely because it was stored.

To count as persisted learning, the learning must:

- Represent a validated lesson, improvement, constraint, decision, or reinforcing result
- Be durably retained beyond the execution that produced it
- Be identifiable enough to distinguish what was learned
- Include enough applicability context to determine when it is relevant
- Be available to later operation in a form that can influence future execution when applicable
- Remain subject to applicable authorization and governance requirements

Raw logs, transcripts, conversations, observations, test output, and historical records may provide supporting evidence, but storage of those records alone does not satisfy persistence unless the resulting learning becomes operationally available for future use.

## Persisted Learning May Take Different Forms

Persisted learning is not limited to conversational memory or a knowledge store.

Depending on the classification and learning destination, persisted learning may be represented through one or more durable operational assets, including:

- Code, scripts, tools, services, rules, or other deterministic capabilities
- Standard Operating Procedure (SOP) guidance, instructions, known-exception handling, or escalation rules
- Prompts, agent instructions, durable reasoning guidance, examples, heuristics, or reusable skills
- Configuration, constraints, applicability rules, or strategy-selection rules
- Evaluation criteria, validation checks, test cases, or detection mechanisms
- Structured knowledge, decisions, known conditions, or domain guidance
- Known-failure rules, rejected approaches, failure signatures, or avoidance guidance
- Human-authorized Governance Policy changes
- Reinforcing evidence associated with an existing validated operating pattern

These categories are non-exhaustive. The representation must match the type of learning identified through classification and evolution routing.

## Three Persistence Outcomes Must Remain Distinct

### Validated Operational Improvement

When a candidate adaptation has been sufficiently validated and is authorized for persistence, Persist may create or change a durable operational asset that alters future operating behavior.

The persisted result must not be broader than the scope supported by its validation evidence.

### Validated Learning Derived from Failure or Rejection

A failed or rejected adaptation must not be persisted as an approved operational improvement merely because the attempt produced useful evidence.

A separate reusable lesson derived from that attempt may be persisted when that lesson has itself been:

- Evaluated as lifecycle evidence
- Classified to determine what it means and where it belongs
- Represented through Adapt when a persistent change is required
- Validated under the applicable validation sufficiency requirements
- Authorized where persistence changes a governed operational asset

Examples include a known-failure rule, an applicability constraint, a rejected-strategy rule, a new validation check, a detection mechanism, or guidance that causes future execution to select a different approach.

The failed candidate and the validated lesson learned from its failure must remain distinguishable.

### Reinforcing Evidence Without a New Adaptation

When a successful or acceptable outcome reinforces an existing validated operating pattern, persistence may durably associate the sufficiently supported evidence with that pattern without creating a new candidate adaptation or misrepresenting the result as a new improvement.

Reinforcing evidence may strengthen confidence in where and when an existing pattern remains effective. It does not by itself mean that the operating behavior changed.

When no new reusable learning or reinforcing evidence justifies persistence, Persist may explicitly resolve that no new persistent learning is required.

## Required Properties of Persisted Learning

When learning is persisted for future use, the durable result must have the following applicable properties.

### Identifiable

The learning item, changed asset, or reinforced pattern must be identifiable enough to distinguish it from unrelated history or evidence.

### Traceable to Supported Learning

The implementation must preserve enough relationship to the validation and supporting evidence for later review where the operating context requires that traceability.

Persisting evidence does not make unsupported conclusions valid. The persisted learning claim must remain consistent with what the evidence actually supports.

### Scoped for Applicability

Persisted learning must include enough context to avoid being applied outside the conditions for which it is valid.

Applicability context may include process, environment, customer, tool, version, failure class, risk condition, governance scope, or another relevant boundary.

### Available for Reuse

The persisted form must be available to the future operating process that needs it. A durable artifact that later execution cannot retrieve, select, invoke, or otherwise use does not satisfy the persistence requirement for reusable learning.

The detailed evidence required to prove that later reuse actually occurred is defined separately from persistence.

### Governed

Persisted changes must remain within the applicable Governance Policy. Validation does not grant authorization, and authorization does not replace validation.

A Governance Policy change that expands or changes authority requires human authorization before it becomes authoritative.

### Revisable

Persistent does not mean permanently correct or permanently authoritative. Persisted learning must remain capable of being challenged, revised, superseded, deprecated, invalidated, rolled back, or retired when later evidence justifies a different state.

The normative behavior for changing which learning is treated as current guidance is defined in [Learning Supersession Requirements](learning-supersession.md).

## Persistence Is More Than Evidence Retention

Evidence retention and operational persistence serve different purposes.

Evidence may be retained to explain what happened, support auditability, enable later evaluation, or justify a learning conclusion. Persisted learning is the validated result that future operation can use.

An implementation may retain both, but it must not treat the following as persisted operational learning by themselves:

- Raw execution history
- Unvalidated observations
- A failed or rejected candidate adaptation
- A proposed change that was never validated
- A validated change that is not authorized for persistence when authorization is required
- Archived information that future operation cannot access or apply

## Relationship to Validation, Persist, Reuse, and Supersession

[Stage 6: Validate](lifecycle/06-validate.md) determines whether a candidate improvement or other learning intended for persistence is sufficiently supported.

[Stage 7: Persist](lifecycle/07-persist.md) resolves that validated learning into an appropriate durable operational result, reinforcing evidence, or an explicit no-new-learning disposition.

[Stage 8: Reuse](lifecycle/08-reuse.md) determines whether relevant persisted learning actually becomes available to and influences later execution.

[Learning Supersession Requirements](learning-supersession.md) define how later evidence can change which persisted learning remains current, valid, and eligible for future reuse.

Persistence therefore establishes durable operational availability. It does not by itself prove later reuse or make the learning permanently authoritative.

## Relationship to Conformance

A conforming implementation must be able to demonstrate that persisted learning satisfies these requirements when reusable learning is retained for future operation.

Conformance evidence should make it possible to determine that:

- Persisted learning is not limited to raw memory, logs, or stored conversation history
- The persistent form matches the classified type of learning
- Failed or rejected adaptations are not promoted as approved improvements
- Validated lessons derived from failed attempts can persist independently of the failed candidate
- Reinforcing evidence can be retained without manufacturing a new adaptation
- Persisted learning is identifiable, appropriately scoped, and available for later relevant reuse
- Persistence remains distinct from validation and authorization
- Persisted learning can later be challenged and changed without being treated as permanently authoritative
- The implementation does not depend on one prescribed storage mechanism

## Related Documents

- [Stage 7: Persist](lifecycle/07-persist.md)
- [Stage 6: Validate](lifecycle/06-validate.md)
- [Stage 8: Reuse](lifecycle/08-reuse.md)
- [Validation Sufficiency Requirements](validation-sufficiency.md)
- [Reuse Evidence Requirements](reuse-evidence.md)
- [Learning Supersession Requirements](learning-supersession.md)
- [Principle 6: Failure Determines Where the System Evolves](principles/06-evolution-routing.md)
- [Principle 7: Learning Must Change a Persistent Operational Asset](principles/07-persistent-learning.md)
- [Principle 8: Improvement Must Compound Through Reuse](principles/08-compounding-reuse.md)
- [Conformance](conformance/README.md)
