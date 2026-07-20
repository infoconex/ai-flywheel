# Worked Example: Standards-Driven Repository Modernization

This worked example applies the Infoconex AI Flywheel to the [Standards-Driven Repository Modernization Use Case](use-case/README.md).

The use case defines the simulated environment, target repository standard, migration process, and representative repository scenarios. This page focuses on how repeated migrations produce evidence, improve persistent operational assets, and change later migrations.

The example presents one possible implementation. It illustrates the Infoconex AI Flywheel Specification but does not add requirements or prescribe a universal repository standard.

## Intended Outcome

The intended outcome is a migrated repository that:

- Conforms to the approved repository standard
- Conforms to the selected build-template standard
- Preserves required existing build and test outcomes
- Passes target CI validation
- Records package-health findings
- Publishes and consumes approved packages when applicable
- Includes the evidence required for review
- Does not weaken a required control
- Does not exceed AI authority
- Produces learning that can improve later migrations

Completing every scripted phase or receiving a successful pipeline status does not by itself prove success.

## Human Authorization and Governance

Before autonomous migration begins, humans define a persistent Governance Policy.

### Authorized

The AI may:

- Inspect repositories on the reviewed candidate list
- Score complexity and recommend migration order
- Select approved migration profiles
- Create working branches
- Apply approved repository transformations
- Run approved restore, build, test, package, and security commands
- Compare existing and target CI outcomes
- Create draft pull requests after required local phases succeed
- Propose changes to profiles, tooling, validation, and procedural guidance
- Validate proposed improvements
- Record evidence and reusable learning

### Approval Required

Human approval is required before the AI may:

- Merge a migration pull request
- Activate a shared executable template or migration-tool change
- Approve a new migration profile for automatic reuse
- Publish an unapproved production package version
- Change a required security control
- Retire an existing CI job
- Establish a reusable decision rule
- Expand the set of repositories or actions within its authority

### Judgment Required

Human judgment is required when:

- Existing behavior has an unclear purpose
- Evidence is incomplete or contradictory
- A migration outlier does not fit an approved profile
- A dependency or package change has uncertain downstream effects
- Automated validation passes but behavioral equivalence remains uncertain
- A proposed exception cannot be decided responsibly from existing rules

### Prohibited

The AI may not:

- Disable required tests or security checks
- Conceal failed validation
- Remove unexplained existing behavior
- Publish packages to an unapproved destination
- Retire an existing CI job
- Persist an unvalidated improvement
- Treat a one-time approval as future authority
- Grant itself increased authority

Governance applies throughout execution and improvement. It is not a lifecycle stage.

This establishes the behavior required by [Principle 1: Autonomy Is Bounded by Human Authority](../../specification/principles/01-human-authority.md).

## Initial Operating Model

### Deterministic Capability

Approved migration tooling can:

- Inspect repositories
- Collect structured repository attributes
- Score known complexity indicators
- Move projects
- Convert known project formats
- Update project and solution references
- Generate `.slnx` from `.sln`
- Validate repository structure
- Run approved build and test commands
- Generate target pipeline files
- Collect structured evidence
- Create branches, commits, and draft pull requests

### Procedural Guidance

The migration Standard Operating Procedure defines:

- Candidate selection
- Profile selection
- Transformation order
- Commit boundaries
- Required validation
- Failure handling
- Package producer and consumer handling
- Approval conditions
- Pull-request requirements
- Existing CI retirement
- Evidence requirements

### AI Reasoning

The AI:

- Interprets repository-specific context
- Distinguishes known patterns from outliers
- Chooses approved profiles
- Investigates unexpected failures
- Evaluates behavioral equivalence
- Classifies weaknesses
- Proposes improvements
- Determines when an approved reusable decision applies
- Escalates when authority or uncertainty requires a human

This distribution reflects [Principle 3: Work Is Distributed Across a Moving Determinism Boundary](../../specification/principles/03-moving-determinism-boundary.md).

## Cycle 1: A Simple Migration Reveals Missing Validation

The first repository is an SDK-style library selected because its attributes indicate low migration complexity.

### Execute

The AI selects the approved simple-library profile and applies the common migration baseline.

It:

1. Moves the main project under `src`
2. Moves the test project under `test`
3. Updates the canonical solution
4. Adds virtual solution folders
5. Generates the `.slnx`
6. Adds required root files
7. Adds target pipeline configuration
8. Runs restore, build, test, package-health, and security checks

Local validation and the target CI pipeline succeed.

### Observe

The Flywheel captures:

- Original repository structure
- Selected profile and confidence
- Applied transformations
- Commit-level validation
- Canonical solution content
- Generated `.slnx`
- Build and test results
- Package-health findings
- Target CI results
- Existing and target CI comparison

During review, a human notices that the `.slnx` contains the expected projects but not the same virtual solution folders as the canonical `.sln`.

### Evaluate

The AI determines that:

- Required projects built and tested successfully
- The pipeline behaved correctly
- Project membership was equivalent
- Virtual solution-folder organization was not equivalent
- Existing validation checked project membership but not solution-folder placement
- The repository did not fully satisfy the target standard

The successful pipeline was therefore not sufficient evidence of complete conformance.

### Classify

The AI asks:

> **Where should this learning live?**

The generator performed its documented behavior, but the machine-readable conformance rules were incomplete.

The weakness is classified as a **validation-rule weakness** with a related generation requirement.

### Adapt

The AI proposes:

- A rule comparing virtual solution-folder paths between `.sln` and `.slnx`
- A generator update that preserves those paths
- Negative tests for missing, extra, and incorrectly nested folders
- A revised success criterion for solution equivalence

### Validate

The proposed changes are validated against:

- The originating library
- A repository without virtual folders
- A multi-project repository
- A solution with incorrectly nested test projects
- A solution containing an extra project in only one format

### Persist

The executable generator change requires human approval. The AI creates a versioned proposal containing the change, validation evidence, applicability, and rollback plan.

After approval, the generator and validation-rule versions are released together.

### Reuse

The next repository uses the improved generator and validation rule. Its solution formats match on the first attempt.

| Measure | Before Improvement | After Reuse |
|---|---:|---:|
| Solution Validation Attempts | 2 | 1 |
| Manual Solution Corrections | 1 | 0 |
| Missing Folder Differences | 1 | 0 |

The persisted improvement changed later execution rather than merely documenting the original problem.

## Cycle 2: A Legacy Project Produces a New Profile

The next migration introduces a legacy .NET Framework library.

### Execute

Read-only inspection detects:

- Legacy project format
- `packages.config`
- A local DLL reference
- MSBuild and VSTest usage
- An existing .NET Framework target
- A package-producing library

The AI selects the closest legacy-library profile.

It converts the project to SDK style while preserving the existing target framework. Restore, build, and test succeed at this checkpoint.

The profile then applies the expected multi-target configuration. The modern target fails because a dependency supports .NET Framework but not the proposed modern target.

### Observe

The Flywheel captures:

- Original project file
- Converted SDK-style project
- Successful preserved-framework validation
- Proposed target frameworks
- Dependency graph
- Restore failure for the modern target
- Package compatibility information
- Existing profile rules
- Diagnostic actions

The initial SDK conversion remains proven even though the later multi-target phase fails.

### Evaluate

The AI determines that:

- Project-format conversion is correct
- The repository works on its preserved framework
- The selected profile assumes dependency compatibility that is not present
- Removing the modern target would violate the current profile
- Replacing the dependency requires a broader decision
- The migration can safely remain at the last validated phase

### Classify

The weakness is classified as a **profile limitation** rather than a generic repository failure.

The evidence suggests a reusable variation for legacy libraries whose dependencies temporarily prevent the expected target combination.

### Adapt

The AI proposes a profile variation that:

- Requires SDK-style conversion
- Preserves the existing framework
- Attempts approved multi-targeting
- Returns a structured compatibility result when blocked
- Records the blocking dependency
- Requires human approval for temporary single-target continuation
- Defines conditions for revisiting the modern target

### Validate

The proposed profile is tested against:

- The originating repository
- A legacy library whose dependencies support multi-targeting
- A repository that should not match the profile
- A repository with multiple blocking dependencies
- Existing common-baseline validation

### Persist

A human approves the new profile and explicitly defines its reuse scope.

The profile is versioned with:

- Matching conditions
- Permitted transformations
- Approval requirements
- Required evidence
- Conditions requiring renewed approval
- Exit conditions for the temporary limitation

### Reuse

A later repository has the same supported pattern. The AI selects the approved profile variation, preserves the existing framework, records the blocking dependency, and follows the approved path without rediscovering the entire procedure.

The profile emerged from execution evidence and changed later migration behavior.

## Cycle 3: Human Approval Becomes a Reusable Decision Rule

The profile variation requires approval before a migrated repository may temporarily remain single-targeted.

### Execute

The AI presents the originating repository evidence to a human reviewer.

The request includes:

- Successful SDK conversion
- Successful preserved-framework build and tests
- Failed modern-target restore
- Blocking dependency
- Security and package-health results
- Proposed temporary state
- Conditions for later remediation

The human approves the temporary state.

### Observe

The Flywheel records:

- What decision was requested
- Why approval was required
- Evidence presented
- Approval result
- Human reasoning
- Repository conditions
- Limitations
- Required follow-up

The human explains that future repositories may use the same choice only when the blocking dependency, target framework, validation results, and remediation conditions match.

### Evaluate

The AI determines that the decision contains reusable governance knowledge. The approval does not automatically grant future authority because its matching conditions and limits must be explicit.

### Classify

The learning is classified as a **governance decision-rule opportunity**.

### Adapt

The AI proposes a reusable rule specifying:

- Required profile
- Allowed existing framework
- Approved blocking dependency
- Required successful validation
- Required package-health evidence
- Maximum permitted scope
- Conditions requiring renewed approval
- Required remediation record

### Validate

The rule is tested against:

- A repository matching every condition
- A repository with a different blocking dependency
- A repository whose tests fail
- A repository with a vulnerable package finding
- A repository outside the approved profile scope

### Persist

The human reviews and approves the reusable rule.

The rule is versioned and linked to the original decision, evidence, reasoning, limitations, and expiration or review conditions.

### Reuse

When a later repository matches every approved condition, the AI applies the same choice without requesting the same decision again.

When another repository differs on the blocking dependency, the rule does not match and the AI requests human judgment.

This reflects bounded reuse of human authority rather than automatic expansion of AI authority.

## Cycle 4: Package Migration Reveals Dependency Ordering

A migrated library produces a package used by several other repositories.

### Execute

The AI modernizes the package-producing library, builds its approved production version, and prepares publication to the target central feed.

The inventory lists two known consumers. During dependency inspection, the AI discovers a third consumer that was not recorded.

One known consumer uses `PackageReference`, another uses the existing package source through older configuration, and the newly discovered consumer uses a local DLL.

### Observe

The Flywheel captures:

- Package identity and production version
- Existing package source
- Target package feed
- Known and discovered consumers
- Reference type used by each consumer
- Consumer target frameworks
- Consumer build and test results
- Inventory discrepancy

### Evaluate

The AI determines that retiring the existing package source before all consumers change would break a required dependency path.

It also determines that repository complexity alone is not sufficient for migration order. Producer and consumer relationships must influence planning.

### Classify

The weakness is classified across two persistent assets:

- **Repository inventory weakness** because a consumer was missing
- **Migration-planning weakness** because dependency order was not included in prioritization

### Adapt

The AI proposes:

- Automated package-consumer discovery
- Producer and consumer relationships in the inventory schema
- A dependency-aware migration-order rule
- A retirement gate that prevents package-source retirement while required consumers remain
- Structured consumer-migration status

### Validate

The changes are tested against:

- A producer with no consumers
- A producer with several package-reference consumers
- A local-DLL consumer
- A consumer missing from the original inventory
- A circular package dependency
- A consumer that cannot yet use the target feed

### Persist

The inventory schema, discovery capability, planning rule, and retirement gate are versioned and approved.

### Reuse

Later planning detects package relationships before migration begins. The recommended order accounts for foundational libraries and their consumers, and the retirement gate prevents premature package-source removal.

The migration capability now plans work using knowledge that did not exist during the earlier cycle.

## Cycle 5: Repeated Profile Steps Become Deterministic Capability

After several migrations, evidence shows that common repository transformations are stable.

### Execute

The AI repeatedly follows the same procedural steps to:

- Detect main and test projects
- Move them under `src` and `test`
- Update project references
- Update solution paths
- Add virtual folders
- Generate `.slnx`
- Validate required files and casing

The procedure works, but repeated reasoning adds time and introduces small variations.

### Observe

Accumulated evidence shows:

- The same patterns can be detected reliably
- Transformations have predictable inputs and outputs
- Known unsafe conditions can be represented as structured failures
- Negative cases are covered
- Repeated AI interpretation does not improve common-case results

### Evaluate

The AI determines that the stable common path no longer requires repeated reasoning.

### Classify

The opportunity is classified as a **responsibility-placement improvement** across the Moving Determinism Boundary.

### Adapt

The AI proposes deterministic tooling that:

- Applies approved common transformations
- Produces structured change records
- Rejects ambiguous project classification
- Stops on unapproved path collisions
- Returns unfamiliar conditions to AI reasoning
- Preserves phase-level validation and rollback

The SOP is revised to define when the capability is used, how failures are handled, and when human judgment is required.

### Validate

The capability is validated through unit tests, integration tests, replay against completed migrations, negative tests, and existing conformance validation.

### Persist

The executable change requires human approval.

After approval, the tool and SOP are versioned and activated together. Previous versions remain available for rollback.

### Reuse

Later migrations invoke the deterministic capability for recognized patterns. Common transformations become faster and more consistent, while unclear repositories still return control to AI reasoning.

This reflects [Principle 7: Learning Must Change a Persistent Operational Asset](../../specification/principles/07-persistent-learning.md) and [Principle 8: Improvement Must Compound Through Reuse](../../specification/principles/08-compounding-reuse.md).

## Human Authority During Execution

### Prohibited Action

If migration can succeed only by disabling a required security or test control, the action is **Prohibited**. The AI records the evidence and stops the affected migration.

### Approval Required

If migration requires activation of a new shared build template or publication of an unapproved production package version, the outcome is **Approval Required**.

### Judgment Required

If specialized existing behavior has an unclear purpose, the outcome is **Judgment Required**. The AI must not remove it based only on an assumption that it is obsolete.

### Human Decisions as Evidence

Human decisions may reveal reusable profile rules, validation requirements, exception conditions, planning knowledge, or governance rules.

Future reuse requires explicit authorization. Human reasoning does not silently expand AI authority.

## Conformance Mapping

| Conformance Area | How the Example Demonstrates It |
|---|---|
| **1. Human Authority** | Governance defines which repository, profile, tool, package, decision-rule, and retirement actions require people |
| **2. AI Operation** | AI inspects repositories, selects profiles, applies transformations, runs validation, evaluates outcomes, and carries migrations forward |
| **3. Runtime Responsibilities** | Deterministic tooling, procedural guidance, and AI reasoning have defined and changing responsibilities |
| **4. Persistent Operational Procedure** | A durable migration SOP defines execution, evidence, exceptions, validation, and escalation |
| **5. Outcome Evidence** | Repository state, commits, builds, tests, packages, security checks, comparisons, and human decisions establish outcomes |
| **6. Evaluation and Classification** | Results are compared with target standards and required behavior before weaknesses are classified |
| **7. Improvement Routing** | Learning is routed to validation, profiles, governance rules, inventory, planning, tooling, or procedure |
| **8. Governance Enforcement** | Shared executable changes and reusable decision rules require approval, while prohibited changes stop execution |
| **9. Persistent Learning** | Approved learning changes versioned operational assets available after the originating migration |
| **10. Compounding Reuse** | Later migrations reuse improved validation, profiles, decisions, dependency planning, and deterministic tooling |

## What Compounded

| Cycle | Evidence Revealed | Persistent Improvement | Effect on Later Migration |
|---|---|---|---|
| **Cycle 1** | Solution formats differed despite a successful build | Generator and validation rules gained folder-equivalence checks | Later repositories generated conforming solutions on the first attempt |
| **Cycle 2** | A legacy dependency prevented the assumed target combination | A validated profile variation captured the reusable pattern | Later matching repositories avoided rediscovery |
| **Cycle 3** | Human reasoning defined when temporary single-targeting was acceptable | An approved reusable decision rule captured the conditions | Matching decisions no longer required repeated approval |
| **Cycle 4** | Package consumers were incomplete and migration order ignored dependencies | Inventory and planning gained dependency relationships and retirement gates | Later migration waves used dependency-aware order |
| **Cycle 5** | Stable repeated procedure no longer benefited from reasoning | Common transformations moved into approved deterministic tooling | Later migrations became faster and more consistent |

The Flywheel effect is not produced merely by migrating repositories, retrying failed commands, saving logs, or changing standards once.

It occurs because migration evidence changes validated and authorized operational assets that later migrations actually reuse.

## Lifecycle Summary

Each complete cycle follows:

**Execute → Observe → Evaluate → Classify → Adapt → Validate → Persist → Reuse**

Human authority and governance apply throughout the lifecycle.

Deterministic capability, procedural guidance, and AI reasoning work together during execution. They are operating mechanisms rather than additional lifecycle stages.

## Related Documents

- [Use Case](use-case/README.md)
- [Target Repository Standard](use-case/target-repository-standard.md)
- [Migration Process](use-case/migration-process.md)
- [Repository Scenarios](use-case/repository-scenarios.md)
- [Formal Definition](../../specification/definition.md)
- [Principles](../../specification/principles/README.md)
- [Lifecycle](../../specification/lifecycle/README.md)
- [AI Flywheel Conformance](../../specification/conformance/README.md)
- [Core Operating Model](../../architecture/operating-model.md)
