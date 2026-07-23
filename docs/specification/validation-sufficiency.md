# Validation Sufficiency Requirements

Validation determines whether a candidate improvement or other learning intended for persistent future use is supported strongly enough to be trusted for the use being proposed.

These requirements define the minimum conditions for sufficient validation in the Infoconex AI Flywheel. They do not require one universal test method. The validation method, evidence, and depth may vary by domain, candidate type, risk, impact, uncertainty, and intended scope of reuse.

## Sufficiency Is Relative to the Validation Claim

Validation is sufficient only in relation to a defined claim about what is being trusted.

For a candidate improvement, the validation claim must identify:

- The candidate being evaluated
- The intended outcome or weakness the candidate is meant to improve
- The conditions or scope in which the candidate is expected to apply
- The success, safety, and other acceptance criteria relevant to that intended use

A validation activity that proves only that a change can execute, compile, deploy, or complete is not sufficient when the intended claim is that the change produces a particular operational outcome.

Validation must test the outcome that justifies trusting the candidate, not merely the mechanism used to implement it.

## Minimum Conditions for Sufficient Candidate Validation

A candidate improvement may be classified as **validated** only when all applicable conditions below are satisfied.

### 1. The Intended Outcome Is Directly Evaluated

The validation evidence must address the outcome the candidate is intended to improve.

When technical correctness and outcome correctness are different, validation must distinguish them. A technically successful change does not by itself demonstrate that the intended operational result occurred.

For example, a code change may compile and pass unit tests while still failing to produce the required end-to-end outcome. An SOP change may be followed correctly while still producing an unacceptable result. Reasoning guidance may generate a plausible answer while still failing an independently evaluated objective.

### 2. The Evidence Is Appropriate to the Claim and Risk

The validation method and evidence must be strong enough for the scope and consequence of the proposed future use.

Validation must account for applicable factors such as:

- Risk and impact of an incorrect result
- Novelty or uncertainty in the candidate
- Breadth of the conditions in which the candidate will be reused
- Reversibility of the resulting change
- Known failure modes and important edge conditions
- Availability of independent or externally grounded outcome signals

Higher-risk, broader, less reversible, or less understood changes generally require stronger evidence than narrow, low-impact, easily reversible changes.

The specification does not prescribe a universal scoring model, test count, sample size, review process, or validation technology. An implementation must be able to explain why the evidence used is sufficient for the claim being made.

### 3. Representative Conditions Are Covered When Relevant

Validation must exercise representative conditions when a candidate is expected to operate across materially different scenarios.

A validation result must not be generalized beyond the conditions actually supported by the evidence. When the evidence covers only a limited context, the validated scope must remain limited to that context.

### 4. Material Regressions and Side Effects Are Considered

When a candidate can reasonably affect existing behavior beyond the intended improvement, validation must check for material regressions or unacceptable side effects.

The required checks depend on the candidate and domain. They may include comparison with prior behavior, regression tests, safety checks, policy checks, performance measurements, compatibility checks, review of downstream effects, or other domain-appropriate evidence.

Validation does not require proving the absence of every imaginable side effect. It requires addressing material risks that are reasonably relevant to the proposed use.

### 5. Contradictory or Insufficient Evidence Is Not Treated as Success

A candidate must not be classified as validated when material evidence remains contradictory, required checks are incomplete, or uncertainty is too high to support the validation claim.

Such a result must remain failed, uncertain, unresolved, paused for governance, or otherwise explicitly unvalidated until the evidence supports a different conclusion.

Human confidence, AI confidence, task completion, lack of an exception, or approval to continue testing does not substitute for sufficient validation evidence.

### 6. The Validation Evidence Is Preserved and Attributable

The preserved validation record must contain enough information to support persistence, later review, and future reuse decisions.

As applicable, the evidence should identify:

- The candidate or learning item evaluated
- The intended validation claim and acceptance criteria
- The validation method and relevant conditions
- The evidence and observed results
- Material failures, contradictions, limitations, or unresolved uncertainty
- The resulting validation disposition and the basis for it
- The scope in which the result is considered valid

The exact record format is implementation-specific. The requirement is that a later reviewer or lifecycle decision can determine what was validated, against what claim, with what evidence, and within what scope.

## Validation Methods Remain Domain-Specific

Different learning destinations may require different validation methods.

Examples include:

- Automated, integration, system, or end-to-end tests for deterministic capability
- Replay or scenario evaluation for procedural guidance
- Evaluation against representative examples or independent criteria for reasoning guidance
- Independent outcome checks for new validation mechanisms
- Controlled comparison with prior behavior
- Simulation, staging, sandbox, canary, or limited-scope operation where appropriate
- Human expert judgment when the outcome cannot be responsibly determined without it

These are examples, not required methods. A method is sufficient only when the evidence it produces satisfies the applicable requirements above.

## Validation and Authorization Are Independent Decisions

Validation answers whether the available evidence supports trusting the candidate for a stated use.

Authorization answers whether the AI or another actor is permitted to test, apply, persist, deploy, or otherwise use that candidate.

Therefore:

- Authorization to test a candidate does not mean the candidate is validated.
- Successful validation does not grant permission to persist or deploy a candidate.
- Human approval does not replace evidence that the candidate works as intended.
- Passing technical checks does not establish outcome validation when the validation claim is broader than technical correctness.
- A prohibited change remains prohibited even when evidence suggests that it would work.

The applicable Governance Policy determines the authorization required at each point.

## Sufficiency on a No-Change Path

When [Stage 5: Adapt](lifecycle/05-adapt.md) explicitly resolves that no adaptation is required, there is no candidate change to validate. Validation must not manufacture a candidate merely to satisfy the lifecycle.

If reinforcing or reusable learning is intended for persistence, sufficient support must establish, as applicable:

- That the observed outcome is supported by the available outcome evidence
- That the outcome is consistent with the existing validated operating pattern being reinforced
- The conditions in which the reinforcing evidence applies
- That no material contradictory evidence prevents the reinforcing conclusion

A successful execution does not require the entire existing operating pattern to be revalidated on every cycle. The validation responsibility is to determine whether the new reinforcing or reusable learning is supported strongly enough for the persistence decision being considered.

When no new persistent learning is proposed, Validate may explicitly resolve that no candidate validation is required and that no new persistence claim needs validation.

## Validation Failure Is Evidence

A failed or unresolved validation result prevents the candidate from becoming an approved operational improvement, but the evidence produced by that validation remains part of the Flywheel.

That evidence may reveal a defect in the candidate, an incorrect classification, an inadequate validation method, a previously unknown constraint, or another learning opportunity. Any resulting reusable lesson must follow the lifecycle in its own right before it is persisted and reused.

## Relationship to Conformance

A conforming implementation must be able to demonstrate that validation conclusions follow these sufficiency requirements when learning is being considered for persistent future use.

Conformance evidence should make it possible to determine that:

- Validation addressed the intended outcome rather than only execution or technical success.
- The evidence was appropriate to the claim, risk, and intended scope of reuse.
- Material regressions or side effects were evaluated when relevant.
- Failed, contradictory, incomplete, or uncertain evidence was not represented as successful validation.
- Validation evidence was preserved well enough to support later persistence, review, and reuse decisions.
- Authorization decisions remained distinct from validation conclusions.
- No-change outcomes were resolved without manufacturing unnecessary adaptations.

## Related Documents

- [Stage 6: Validate](lifecycle/06-validate.md)
- [Stage 5: Adapt](lifecycle/05-adapt.md)
- [Stage 7: Persist](lifecycle/07-persist.md)
- [Principle 1: Autonomy Is Bounded by Human Authority](principles/01-human-authority.md)
- [Principle 5: Execution Must Produce Outcome Evidence](principles/05-outcome-evidence.md)
- [Principle 6: Failure Determines Where the System Evolves](principles/06-evolution-routing.md)
- [Principle 7: Learning Must Change a Persistent Operational Asset](principles/07-persistent-learning.md)
- [Conformance](conformance/README.md)
