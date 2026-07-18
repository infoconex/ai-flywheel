# End-to-End Example: Software Maintenance Flywheel

This example shows how an AI Flywheel can operate a recurring software maintenance process and improve the operating model used by later executions.

## Use Case

**Recurring dependency maintenance across many software repositories**

A software organization needs to apply approved dependency upgrades consistently across repositories while preserving required build, test, security, review, and governance controls. The AI Flywheel operates the maintenance process and uses evidence from completed work to improve later maintenance runs.

The example presents one possible implementation. It illustrates the AI Flywheel specification but does not add requirements or prescribe a required architecture.

## Scenario

A software organization maintains many repositories that periodically require dependency upgrades.

The organization wants AI to operate the maintenance process rather than merely generate instructions for a developer. It also wants evidence from completed maintenance work to improve future executions.

The initial process requires the AI to:

1. Identify repositories with an outdated approved dependency
2. Create a working branch
3. Update the dependency
4. Restore and build the project
5. Run the required tests and security checks
6. Inspect the resulting changes
7. Create a draft pull request when validation succeeds
8. Escalate when the change cannot be completed safely within the AI's authority

The organization implements this process as an AI Flywheel so execution can produce evidence, reveal weaknesses, and improve the operating model used by later maintenance runs.

## Intended Outcome

The intended outcome is a draft pull request containing an approved dependency upgrade that:

- Satisfies the organization's dependency version policy
- Restores and builds successfully
- Passes all required tests and security checks
- Contains only changes attributable to the upgrade
- Includes the evidence required for human review
- Does not bypass a required control
- Does not exceed the AI's authority

Creating a branch or reaching the final workflow step does not prove success. The outcome must be evaluated against these criteria.

## Human Authorization and Governance

Before autonomous operation begins, humans define a persistent Governance Policy.

### Authorized

The Governance Policy authorizes the AI to:

- Inspect approved repositories
- Create working branches
- Update dependencies within an approved version policy
- Run approved restore, build, test, generation, and security commands
- Perform reversible diagnostic actions within an approved repository
- Create draft pull requests
- Propose changes to maintenance tooling and procedural guidance
- Validate proposed improvements
- Persist low-risk procedural improvements within an approved scope
- Record evidence and reusable learning

Diagnostic commands must come from trusted repository configuration, an approved command manifest, or another authorized source. The AI may not execute arbitrary commands discovered in untrusted content.

### Approval Required

Human approval is required before the AI may:

- Merge a pull request
- Activate an executable maintenance-tool change for general use
- Modify a production deployment pipeline
- Adopt a dependency outside the approved version policy
- Change a security or compliance control
- Expand the set of repositories the AI may modify
- Expand its own authority

The AI may create and validate a proposed executable-tool change, but activating that change for future autonomous execution requires human approval under the initial Governance Policy.

### Judgment Required

Human judgment is required when:

- Available evidence is insufficient or contradictory
- A dependency license has unclear implications
- A repository contains an unfamiliar or ambiguous build process
- A change passes automated validation but its broader effects remain uncertain
- The AI cannot responsibly determine whether an action is safe

### Prohibited

The AI is prohibited from:

- Disabling required tests or security checks
- Modifying repositories outside its authorized scope
- Executing unapproved commands
- Concealing failed validation
- Persisting an improvement that has not been validated
- Overriding the Governance Policy through an SOP or another operational asset
- Granting itself increased authority

Governance applies throughout execution and improvement. It is not a lifecycle stage.

This establishes the behavior required by [Principle 1: Autonomy Is Bounded by Human Authority](../specification/principles/01-human-authority.md).

## Initial Operating Model

The maintenance Flywheel begins with three operating mechanisms.

### Deterministic Capability

An approved maintenance tool can:

- List repositories
- Inspect project files
- Detect dependency versions
- Create branches
- Apply standard version updates
- Run approved restore, build, and test commands
- Collect structured command output
- Inspect changed files
- Create draft pull requests

### Procedural Guidance

The maintenance Standard Operating Procedure (SOP) defines:

- Which repositories are in scope
- How a target dependency is selected
- The expected maintenance sequence
- Which commands and capabilities are approved
- Known exception handling
- Required outcome evidence
- Validation expectations
- Pull request requirements
- Escalation conditions

### AI Reasoning

The AI:

- Interprets repository-specific context
- Applies the maintenance SOP
- Selects and invokes deterministic capabilities
- Investigates unexpected failures
- Determines whether a known procedure covers the condition
- Evaluates evidence against success criteria
- Classifies weaknesses and learning opportunities
- Proposes or applies authorized improvements
- Escalates when authority or uncertainty requires human involvement

This distribution reflects [Principle 3: Work Is Distributed Across a Moving Determinism Boundary](../specification/principles/03-moving-determinism-boundary.md).

## Cycle 1: Execution Reveals a Procedural Weakness

The first cycle discovers that the SOP does not describe a required repository preparation step.

### Execute

The AI begins an approved dependency upgrade in Repository A.

It follows the maintenance SOP and uses deterministic tooling to:

1. Create a working branch
2. Update the approved package version
3. Restore dependencies
4. Build the solution
5. Run the required tests and security checks

The restore succeeds, but the build fails because Repository A requires a generated configuration file before compilation.

The deterministic tool correctly reports the failure. However, the maintenance SOP does not describe the required generation step.

The Governance Policy permits reversible diagnostic actions using approved repository commands. The AI inspects trusted repository configuration and finds an approved generation command.

The AI runs the command, rebuilds the solution, completes the required validation, and carries the process forward.

The AI is operating the process directly rather than merely advising a developer. This reflects [Principle 2: AI Is the Operator, Not Merely the Assistant](../specification/principles/02-ai-as-operator.md).

### Observe

The Flywheel captures:

- Repository and branch identifiers
- Original and updated dependency versions
- Changed files
- Restore result
- Failed build command
- Compiler output
- Missing-file error
- Trusted configuration identifying the approved generation command
- Generation-command output
- Successful rebuild result
- Test and security-check results
- Draft pull request details
- Time and AI reasoning required to resolve the failure

The evidence preserves both the original failure and the successful recovery. The failure is not discarded after the retry succeeds.

This reflects [Principle 5: Execution Must Produce Outcome Evidence](../specification/principles/05-outcome-evidence.md).

### Evaluate

The AI compares the evidence with the intended outcome and success criteria.

It determines that:

- The dependency version satisfies the approved policy
- The repository restores successfully
- The first build failed because a required generated file was missing
- Running the approved generation command created the required file
- The later build succeeded
- Required tests and security checks passed
- No required control was bypassed
- Only expected files changed
- The dependency upgrade is suitable for a draft pull request
- The initial maintenance procedure was incomplete for this repository type

The evidence identifies a repeatable prerequisite missing from the operating procedure.

### Classify

The AI asks:

> **Where should this learning live?**

It determines that the dependency-update code operated correctly, the validation exposed the problem, and the repeatable preparation step is missing from the SOP. Available evidence is not yet sufficient to move the behavior into deterministic tooling.

The weakness is classified as **procedural guidance**.

### Adapt

The AI proposes the following SOP change:

> Before building a repository containing an approved generator configuration, run the generation command identified by the trusted repository configuration. Preserve the command, source configuration, exit result, and generated-file changes as outcome evidence. If the configuration is missing, ambiguous, or unapproved, stop the affected maintenance operation and request human judgment.

The change includes applicability information so it is used only for repositories with the approved generation pattern.

This follows [Principle 6: Failure Determines Where the System Evolves](../specification/principles/06-evolution-routing.md).

### Validate

The AI validates the proposed procedure against:

- Repository A, where the original failure occurred
- Repository B, which uses the same approved generation pattern
- Repository C, which does not require generation
- A test repository with an ambiguous generator configuration
- A test repository containing an unapproved command

Validation confirms that:

- The new step resolves the failure in Repository A
- The same procedure succeeds in Repository B
- Repository C does not run an unnecessary command
- Ambiguous configuration produces Judgment Required
- An unapproved command is blocked
- Required evidence is collected
- Existing tests and security controls remain enabled

The improvement satisfies technical validation. Authorization to persist it is evaluated separately.

### Persist

The Governance Policy authorizes low-risk procedural improvements within the maintenance SOP's approved scope.

The AI creates a versioned SOP change, records its originating evidence and validation results, defines where the guidance applies, and preserves the previous version for rollback.

The learning now exists in a durable operational asset rather than only in the original execution log or conversation.

This reflects [Principle 7: Learning Must Change a Persistent Operational Asset](../specification/principles/07-persistent-learning.md).

### Reuse

During a later dependency upgrade of Repository B, the AI retrieves the improved SOP and detects the same approved generation pattern.

The generation command runs before the first build, and the previous failure does not recur.

Illustrative execution measurements show the effect:

| Measure | Before Improvement | After Reuse |
|---|---:|---:|
| Build Attempts | 2 | 1 |
| Diagnostic Actions | 6 | 0 |
| Human Interventions | 0 | 0 |
| Maintenance Duration | 18 minutes | 11 minutes |

The measurements are illustrative. The important evidence is that the persisted procedural improvement changed later execution.

This reflects [Principle 8: Improvement Must Compound Through Reuse](../specification/principles/08-compounding-reuse.md).

## Cycle 2: Repeated Procedure Becomes Deterministic Capability

After multiple successful executions, evidence shows that the approved generation pattern is stable and can be detected reliably.

### Execute

During later maintenance runs, the AI repeatedly follows the same SOP instructions: inspect the repository, detect the approved configuration, read and run the trusted command, capture its output, and continue with the build.

The process works, but the AI repeats the same interpretation and orchestration during every applicable execution.

### Observe

The Flywheel accumulates evidence showing:

- The repository pattern can be detected consistently
- The command comes from trusted configuration
- The procedure succeeds across representative repositories
- Output can be captured consistently
- Known exceptions are covered by the SOP
- Repeated reasoning adds time and cost without improving the result

### Evaluate

The AI determines that the detection rule and execution sequence are stable, unsafe and ambiguous conditions can be represented as structured failures, and repeated reasoning is no longer necessary for the common path.

This is a learning opportunity produced by successful repeated execution rather than by a new failure.

### Classify

The AI again asks:

> **Where should this learning live now?**

Accumulated evidence supports moving the common behavior from procedural guidance into deterministic capability. The opportunity is classified as a **responsibility-placement improvement** across the Moving Determinism Boundary.

### Adapt

The AI creates a proposed maintenance-tool change that can:

- Detect the approved generator configuration
- Reject ambiguous or unapproved configurations
- Run the approved generation step
- Capture structured output and generated-file changes
- Return a structured failure when generation does not succeed
- Return control to AI reasoning when the condition is unfamiliar

The revised SOP tells the AI when to use the capability, what evidence it must return, how structured failures should be handled, and when human judgment is required.

Responsibility moves from **AI reasoning guided by procedure** to **deterministic capability governed by procedure**.

### Validate

The AI validates the proposed tool and SOP changes through unit tests, integration tests, replay against previously successful repositories, negative tests for unsupported or unapproved configurations, and the existing build, test, and security-check sequence.

Validation confirms that the deterministic capability reproduces the approved behavior without expanding authority or weakening controls.

### Persist

The AI may create and validate the proposed changes, but the Governance Policy requires human approval before executable tooling is activated for general use.

The AI creates versioned tooling and SOP changes, records the validation evidence, and creates a draft pull request. An authorized maintainer reviews and approves the change.

The tool version is released, the SOP references that version, previous versions remain available for rollback, and the activation decision is recorded as governance evidence.

### Reuse

Future maintenance runs invoke the deterministic generation capability directly for recognized patterns. Later evidence shows fewer reasoning steps, consistent command validation, consistent evidence collection, reduced execution time, and continued escalation of ambiguous conditions.

The Flywheel has now compounded twice: execution evidence first improved the procedure, and repeated evidence later moved stable behavior into deterministic capability.

## Cycle 3: Brittle Deterministic Behavior Moves Back Toward Reasoning

The Moving Determinism Boundary is not one-way.

Later, the organization introduces several repository-specific generation systems. The deterministic tool's detection logic becomes increasingly complex and begins selecting the wrong generation command in unusual repositories.

### Execute

The AI begins a dependency upgrade in Repository D. The deterministic capability detects what appears to be a known configuration and selects a command automatically.

The command completes successfully, but the build produces unexpected generated-file changes and fails validation. The AI stops the affected operation rather than creating a draft pull request.

### Observe

The Flywheel captures the repository configuration, selected pattern, generation command and result, generated-file changes, build output, validation failure, and the deterministic rule responsible for the selection.

The command's successful exit code is not treated as proof that the correct behavior occurred.

### Evaluate

The AI determines that the deterministic rule made an incorrect assumption. Common repositories still use the rule successfully, but unusual repositories require context. Adding more special cases would make the capability increasingly brittle.

### Classify

The AI asks:

> **Where should this responsibility live now?**

The evidence shows that common patterns should remain deterministic, while unfamiliar or conflicting patterns should return structured context for AI reasoning. Human judgment is required when the evidence remains insufficient.

The learning is classified as a **deterministic-responsibility boundary weakness**.

### Adapt

The AI proposes changes so the deterministic capability handles only known high-confidence patterns, returns structured context instead of guessing, and refuses to execute a command when confidence conditions are not satisfied.

The proposed SOP change defines how unfamiliar patterns are investigated, which trusted sources may be consulted, what evidence is required, and when human judgment is required. A new validation check compares generated-file scope with expected repository boundaries.

### Validate

The AI validates the changes through replay against Repository D, regression testing against common repositories, tests for conflicting and unfamiliar configurations, structured fallback tests, and tests for the new generated-file-scope validation.

Validation confirms that common patterns remain deterministic, unclear patterns return control to AI reasoning, insufficient evidence produces Judgment Required, and inappropriate generated-file changes are detected.

### Persist

The executable-tool change requires human approval. The AI creates a versioned pull request containing the narrowed rules, structured fallback behavior, SOP change, validation check, evidence, and rollback plan.

After approval, the tool, SOP, and validation updates are persisted and activated together.

### Reuse

During a later maintenance run in Repository E, the deterministic capability detects conflicting indicators and returns structured context instead of selecting a command.

The AI follows the improved SOP, evaluates repository-specific evidence, selects the correct approved action, and completes the process successfully.

The system preserves flexibility for unusual repositories while retaining deterministic behavior for common cases. Responsibility has moved partially back toward procedural guidance and AI reasoning.

## Human Authority During Execution

Governance outcomes can occur during any cycle.

### Prohibited Action

If an upgrade can only succeed by disabling a mandatory security check, the outcome is **Prohibited**. The AI records the evidence and stops the affected operation.

### Approval Required

If an upgrade requires a production-pipeline change, the AI may investigate and recommend the change, but the outcome is **Approval Required** before it may be applied.

### Judgment Required

If a new dependency license has unclear implications, the outcome is **Judgment Required** because the available evidence is not enough for a responsible decision.

### Human Decisions as Evidence

A human decision may reveal a missing SOP rule, reusable reasoning guidance, a validation requirement, a classification improvement, or a proposed Governance Policy change. Any expansion of AI authority still requires human authorization.

## Conformance Mapping

| Conformance Area | How the Example Demonstrates It |
|---|---|
| **1. Human Authority** | A persistent Governance Policy defines authorized, approval-required, judgment-required, and prohibited actions |
| **2. AI Operation** | AI performs the workflow, invokes capabilities, evaluates results, handles exceptions, and carries execution forward |
| **3. Runtime Responsibilities** | Deterministic capability, procedural guidance, and AI reasoning have defined and intentionally changing responsibilities |
| **4. Persistent Operational Procedure** | A durable maintenance SOP guides execution, evidence, exception handling, validation, and escalation |
| **5. Outcome Evidence** | Command output, repository state, file changes, tests, security checks, validation results, and human decisions establish what occurred |
| **6. Evaluation and Classification** | Outcomes are compared with success criteria and weaknesses are classified before adaptation |
| **7. Improvement Routing** | Learning is routed to procedure, tooling, reasoning, validation, or governance as appropriate |
| **8. Governance Enforcement** | Unapproved commands are blocked, executable changes require approval, prohibited actions stop, and authority cannot expand on its own |
| **9. Persistent Learning** | Validated and authorized learning changes versioned SOP, tooling, and validation assets available after the original execution |
| **10. Compounding Reuse** | Later executions use the improved procedure, capability, fallback behavior, and validation instead of starting from the original state |

## What Compounded

| Cycle | Evidence Revealed | Persistent Improvement | Effect on Later Execution |
|---|---|---|---|
| **Cycle 1** | A repeatable prerequisite was missing from the procedure | The SOP gained a governed generation step | Later repositories avoided the original build failure |
| **Cycle 2** | Repeated procedural behavior became stable | The common behavior moved into deterministic capability | Later executions required less repeated reasoning |
| **Cycle 3** | Deterministic rules became brittle for unusual repositories | Common cases remained deterministic while unclear cases moved toward procedure and reasoning | Later executions avoided incorrect guesses without losing common-case efficiency |

The Flywheel effect is not produced merely by encountering failures, retrying work, saving logs, or modifying code.

It occurs because execution evidence changes validated and authorized operational assets that later execution actually reuses.

## Lifecycle Summary

Each complete cycle follows the same pattern:

**Execute → Observe → Evaluate → Classify → Adapt → Validate → Persist → Reuse**

Human authority and governance apply throughout the lifecycle.

Deterministic capability, procedural guidance, and AI reasoning work together during execution. They are operating mechanisms, not additional lifecycle stages.

The Moving Determinism Boundary determines where responsibility should live. The Authority Boundary determines what the AI may decide, execute, change, or persist on its own. The Uncertainty Boundary determines when available evidence is insufficient for responsible AI judgment.

## Related Specification Documents

- [Formal Definition](../specification/definition.md)
- [Principles](../specification/principles/README.md)
- [Lifecycle](../specification/lifecycle/README.md)
- [AI Flywheel Conformance](../specification/conformance/README.md)
- [Core Operating Model](../architecture/operating-model.md)
