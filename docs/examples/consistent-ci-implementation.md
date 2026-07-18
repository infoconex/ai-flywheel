# End-to-End Example: Consistent CI Implementation

This example shows how an AI Flywheel can apply repository standards that align with a shared CI build template and improve the operating model used by later repository migrations.

## Use Case

**Consistent CI implementation across software repositories**

A software organization needs repositories to implement continuous integration consistently. Repository standards define the expected structure and configuration, while a shared CI build template implements the approved build process. The AI Flywheel brings repositories into alignment with that contract and uses evidence from each migration to improve later migrations.

The example presents one possible implementation. It illustrates the AI Flywheel specification but does not add requirements or prescribe a required architecture.

## Scenario

A software organization maintains many .NET repositories whose CI pipelines evolved independently. Most pipelines restore, build, test, package, and publish artifacts, but they differ in project layout, SDK selection, target frameworks, test execution, versioning, and artifact handling.

The organization establishes:

- Repository standards that define the expected repository structure and configuration
- Shared CI templates that implement the approved build behavior
- Small repository-level pipeline files that select a template and supply approved parameters
- Validation rules that compare each repository with the standards and template contract

A repository-level pipeline should only set the knobs. The shared template owns the build sequence and required controls.

The initial process requires the AI to:

1. Select an authorized repository that has not adopted the standard
2. Inspect its projects, tests, frameworks, package settings, current pipeline, and documented exceptions
3. Select the appropriate approved shared template
4. Modify the repository to satisfy the corresponding repository standards
5. Replace custom build logic with a small template-based pipeline
6. Run repository validation and the complete CI build
7. Create a draft pull request with the required evidence when validation succeeds
8. Escalate unsupported patterns, policy conflicts, and changes outside its authority

## Intended Outcome

The intended outcome is a draft pull request that adopts the shared CI contract and:

- Uses the appropriate approved template
- Contains only necessary repository-specific parameters
- Satisfies the applicable repository standards
- Restores and builds every required project
- Runs all required tests and security checks
- Produces the expected packages and artifacts
- Preserves approved versioning behavior
- Records validation and build evidence for review
- Documents any approved exception
- Does not weaken a required control or expand the AI's authority

A successful YAML parse or completed pipeline does not prove success. The repository and build results must satisfy the full contract.

## Human Authorization and Governance

Before autonomous operation begins, humans define a persistent Governance Policy.

### Authorized

The Governance Policy authorizes the AI to:

- Inspect repositories within the approved scope
- Create working branches
- Apply approved repository standards
- Replace repository-specific CI logic with approved template usage
- Set documented template parameters
- Run approved validation, restore, build, test, package, and security commands
- Create draft pull requests
- Propose changes to standards, templates, validation rules, and procedural guidance
- Persist low-risk procedural guidance within an approved scope
- Record evidence and reusable learning

### Approval Required

Human approval is required before the AI may:

- Merge a pull request
- Modify or release a shared executable CI template
- Change required security, testing, packaging, or artifact controls
- Change an organization-wide repository standard
- Adopt an unsupported SDK, framework, or versioning strategy
- Expand the repositories or templates within its authority
- Activate a new validation rule that could block repositories organization-wide

### Judgment Required

Human judgment is required when:

- Repository behavior conflicts with the documented standard
- Existing CI behavior has an unclear business or release purpose
- A repository uses an unfamiliar build or packaging process
- A successful build does not provide enough evidence of behavioral equivalence
- An exception may be legitimate but is not documented
- Available evidence is incomplete or contradictory

### Prohibited

The AI is prohibited from:

- Disabling required tests or security checks
- Removing build behavior merely because the shared template does not support it
- Publishing packages or artifacts to an unapproved destination
- Concealing validation differences or failed pipeline attempts
- Modifying repositories outside its authorized scope
- Activating unapproved shared-template changes
- Granting itself increased authority

Governance applies throughout execution and improvement. It is not a lifecycle stage.

This establishes the behavior required by [Principle 1: Autonomy Is Bounded by Human Authority](../specification/principles/01-human-authority.md).

## Initial Operating Model

### Deterministic Capability

Approved tooling can:

- Inspect solutions and project files
- Identify target frameworks and test projects
- Read package and versioning configuration
- Detect existing pipeline files
- Validate repository structure against machine-readable rules
- Generate an approved repository-level pipeline
- Run restore, build, test, package, and security commands
- Collect structured build and validation results
- Inspect changed files
- Create draft pull requests

The shared template provides the deterministic build sequence. Example template families include single-target libraries, multi-target libraries, and repositories containing multiple libraries.

### Procedural Guidance

The CI adoption SOP defines:

- Which repositories are in scope
- How the applicable repository standard is selected
- How a shared template is selected
- Which repository-specific parameters are permitted
- Required validation and outcome evidence
- Known repository patterns and approved exceptions
- Equivalence checks for existing CI behavior
- Pull request requirements
- Escalation and rollback conditions

### AI Reasoning

The AI:

- Interprets repository-specific context
- Determines which standard and template apply
- Distinguishes intentional behavior from historical pipeline drift
- Investigates validation and build failures
- Evaluates whether the migrated pipeline preserves required outcomes
- Classifies weaknesses in repositories, standards, templates, validation, or guidance
- Proposes or applies authorized improvements
- Escalates when authority or uncertainty requires human involvement

## Cycle 1: A Single-Target Library Establishes the Common Path

### Execute

The AI selects Repository A, a package-producing library with one target framework and one test project.

It inspects the repository, maps the existing pipeline behavior to the approved single-target template, updates the repository structure where required, and replaces the custom pipeline with a small file that supplies the project path, test-project path, configuration, SDK version, package setting, and version suffix.

The first validation fails because the repository standard requires test projects in a documented location, but the repository uses an older layout that the standard does not address.

### Observe

The Flywheel captures:

- Original repository structure and pipeline behavior
- Selected standard and template version
- Template parameters
- File changes
- Validation rule and failure
- Restore, build, test, package, and security results
- Artifact names and locations
- Comparison with the prior pipeline
- Diagnostic actions and execution time

### Evaluate

The AI determines that the repository's test layout is valid, the shared template can support it through an existing parameter, and moving the test project would create unnecessary change. The repository standard is too narrow even though the build template already supports the behavior.

### Classify

The AI asks:

> **Where should this learning live?**

The weakness is classified as a **repository-standard and validation-rule weakness**. The repository is not defective, and the shared template does not require modification.

### Adapt

The AI proposes that the standard permit a declared test-project path when the preferred layout is not practical. The validation rule is updated to require that the declared path exists, identifies a test project, and remains within the repository.

### Validate

The proposed change is validated against:

- Repository A with its older layout
- A repository using the preferred layout
- A repository declaring a missing test project
- A repository declaring a path outside its boundary
- A repository declaring a non-test project

### Persist

The organization requires approval for an organization-wide standard and blocking validation-rule change. The AI creates versioned proposals with originating evidence, validation results, applicability, and rollback information. After human approval, the standard and validation rule are released together.

### Reuse

Repository B uses the same older layout. The improved standard recognizes the valid pattern immediately, and the repository adopts the shared template without the original false failure.

| Measure | Before Improvement | After Reuse |
|---|---:|---:|
| Manual Standard Exceptions | 1 | 0 |
| Diagnostic Actions | 5 | 1 |
| Adoption Duration | 42 minutes | 24 minutes |

This reflects [Principle 8: Improvement Must Compound Through Reuse](../specification/principles/08-compounding-reuse.md).

## Cycle 2: Multi-Targeting Reveals a Template Limitation

### Execute

The AI selects Repository C, which targets .NET Framework and modern .NET. The applicable standard requires validation for every supported target, so the AI selects the approved multi-target template.

The pipeline restores and compiles both targets, but the evidence shows that tests ran only for the modern target. The pipeline completed successfully, yet it did not satisfy the intended outcome.

### Observe

The Flywheel preserves:

- Declared target frameworks
- Template expansion and executed jobs
- Build results for each framework
- Test discovery and execution by framework
- Missing test evidence for .NET Framework
- Package contents
- Comparison with the repository standard

### Evaluate

The AI determines that the repository conforms to the documented structure and supplied the correct parameters. The shared multi-target template does not implement the full standard because it fails to produce test evidence for every required target.

### Classify

The weakness is classified as a **deterministic capability weakness** in the shared CI template, with a related validation gap because pipeline completion did not expose the missing coverage as a failure.

### Adapt

The AI proposes:

- A framework matrix that runs the appropriate build and test behavior for each supported target
- Structured evidence identifying which tests ran for each framework
- A validation rule that fails when a required framework lacks test evidence
- Updated procedural guidance for framework-specific test limitations

### Validate

The proposed template and validation changes are tested against:

- Repository C
- A single-target repository
- A multi-target repository with framework-specific tests
- A repository whose tests cannot run for one declared target
- A repository with an approved documented exception
- Existing package and security controls

### Persist

The AI creates and validates a versioned template change but cannot activate shared executable CI behavior on its own. An authorized maintainer reviews and approves the template, validation rule, and guidance changes. The prior template version remains available for rollback.

### Reuse

Repository D adopts the improved multi-target template. Each required target produces explicit build and test evidence during the first run, avoiding the false success found in Repository C.

## Cycle 3: Multiple Libraries Become a Reusable Declarative Pattern

### Execute

The AI selects Repository E, which contains several libraries. Repeating the single-library template invocation for each project would create substantial repository-level YAML and allow the invocations to drift.

The AI initially follows the existing SOP and generates the repeated declarations. The pipeline works, but inspection reveals duplicated configuration and inconsistent package settings between libraries.

### Observe

The Flywheel captures:

- Repeated repository-level YAML
- Parameters that are common across libraries
- Per-library differences
- Build, test, and package results
- Configuration drift introduced by repetition
- Time and reasoning required to assemble the pipeline

### Evaluate

Evidence from Repository E and other repositories shows a stable pattern: each library can be declared as data, while a shared matrix chooses the single-target or multi-target job based on whether frameworks are declared.

The successful pipeline therefore reveals an improvement opportunity even though no build failed.

### Classify

The learning is classified as a **responsibility-placement improvement**. Stable orchestration belongs in deterministic shared capability rather than repeated repository YAML or repeated AI reasoning.

### Adapt

The AI proposes an approved library-matrix template. The repository-level pipeline declares a list of libraries and their permitted settings. For each entry, the matrix selects the appropriate single-target or multi-target job.

Validation ensures that every declared project exists, required tests are identified, frameworks are supported, package settings are consistent, and duplicate library declarations are rejected.

### Validate

The proposal is validated against:

- Repository E
- A repository containing only single-target libraries
- A repository mixing single-target and multi-target libraries
- Invalid and duplicate declarations
- Unsupported frameworks
- Existing single-library repositories to confirm compatibility

### Persist

Following human approval, the matrix template, schema, validation rules, and SOP guidance are versioned and released together. Repository E is updated to use the approved version, and the previous repeated pipeline remains available for rollback.

### Reuse

Repository F contains a similar mix of libraries. The AI declares the libraries and their differences without recreating orchestration logic. The shared matrix performs the consistent build behavior.

| Measure | Before Improvement | After Reuse |
|---|---:|---:|
| Repository Pipeline Lines | 146 | 38 |
| Repeated Job Definitions | 6 | 0 |
| Configuration Differences Requiring Review | 4 | 1 |
| Adoption Duration | 71 minutes | 29 minutes |

The Flywheel has improved the standard, validation, shared deterministic capability, and procedural guidance. Later repositories reuse all four.

## Human Authority During Execution

### Prohibited Action

If a repository passes only after a required security scan is removed, the action is **Prohibited**. The AI records the evidence and stops the affected migration.

### Approval Required

If adoption requires a change to a shared CI template, the AI may create and validate the proposal, but activation is **Approval Required**.

### Judgment Required

If existing pipeline behavior publishes an artifact whose consumers cannot be identified, the outcome is **Judgment Required**. The AI must not remove the behavior based only on an assumption that it is obsolete.

### Human Decisions as Evidence

A human decision may establish an approved exception, clarify a standard, identify required compatibility behavior, or reject a proposed template change. The decision and its reasoning become evidence for future evaluation, but the AI cannot use it to expand its authority beyond the Governance Policy.

## Conformance Mapping

| Conformance Area | How the Example Demonstrates It |
|---|---|
| **1. Human Authority** | Governance defines which repository, standard, template, validation, and activation changes are authorized or require people |
| **2. AI Operation** | AI inspects repositories, applies standards, generates pipeline usage, runs validation, evaluates results, and creates draft pull requests |
| **3. Runtime Responsibilities** | Shared templates and tools provide deterministic capability, the SOP guides operation, and AI reasons about repository context |
| **4. Persistent Operational Procedure** | A durable CI adoption SOP defines selection, evidence, exception, validation, and escalation behavior |
| **5. Outcome Evidence** | Repository state, template versions, expanded jobs, command results, tests, packages, artifacts, security checks, and comparisons establish outcomes |
| **6. Evaluation and Classification** | Pipeline results are compared with the full CI contract before weaknesses are classified |
| **7. Improvement Routing** | Learning is routed to repository standards, templates, validation rules, procedural guidance, or human judgment |
| **8. Governance Enforcement** | Shared executable changes and organization-wide controls require approval, while prohibited changes stop execution |
| **9. Persistent Learning** | Approved learning changes versioned standards, templates, validation rules, and SOP guidance |
| **10. Compounding Reuse** | Later repositories reuse the improved contract and require less diagnosis, duplication, and repeated reasoning |

## What Compounded

| Cycle | Evidence Revealed | Persistent Improvement | Effect on Later Execution |
|---|---|---|---|
| **Cycle 1** | A valid legacy test layout was rejected | The standard and validation rule gained a safe declared-path option | Later repositories avoided false exceptions |
| **Cycle 2** | A successful pipeline lacked required framework test evidence | The multi-target template and validation gained per-framework coverage | Later builds could not silently omit required tests |
| **Cycle 3** | Repeated multi-library YAML created drift | A declarative matrix template and schema captured the stable pattern | Later repositories used less YAML and less repeated reasoning |

The Flywheel effect is not produced merely by replacing pipelines with a shared template.

It occurs because repository migrations produce evidence that changes validated and authorized standards, templates, validation rules, and procedural guidance that later migrations actually reuse.

## Lifecycle Summary

Each complete cycle follows the same pattern:

**Execute → Observe → Evaluate → Classify → Adapt → Validate → Persist → Reuse**

Human authority and governance apply throughout the lifecycle.

Deterministic capability, procedural guidance, and AI reasoning work together during execution. They are operating mechanisms, not additional lifecycle stages.

The repository standards and shared CI templates form a contract. The standards define what a compliant repository must provide, and the templates implement the approved build behavior expected from that repository.

## Related Specification Documents

- [Formal Definition](../specification/definition.md)
- [Principles](../specification/principles/README.md)
- [Lifecycle](../specification/lifecycle/README.md)
- [AI Flywheel Conformance](../specification/conformance/README.md)
- [Core Operating Model](../architecture/operating-model.md)
