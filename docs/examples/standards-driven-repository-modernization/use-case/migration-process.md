# Migration Process

## Purpose

This page defines the simulated process used to apply the target repository standard across a portfolio of existing repositories.

The process begins with simple repositories and gradually introduces more complex scenarios. Each completed migration produces evidence that can improve later migrations.

## Central Migration Assets

A central migration repository owns:

- Repository inventory
- Migration profiles and schemas
- Repository standards
- Build-template standards
- Migration Standard Operating Procedure
- Machine-readable validation rules
- Migration tooling
- Reusable human decision rules
- Migration status and summarized evidence

Target repositories contain the resulting standardized files, project and solution changes, pipeline configuration, and approved repository-specific exceptions.

## Repository Inventory

Migration begins with a human-provided list of candidate repositories.

The system performs read-only inspection and records:

- Repository identifier
- Project type
- Existing CI profile
- Existing CI outlier status
- Solution files
- Project files and formats
- Main projects
- Test projects
- Project locations
- Target frameworks
- Local DLL references
- NuGet dependencies
- Package producers and consumers
- Existing package source
- Build scripts
- Security configuration
- Mapping configuration
- Closest migration profile
- Profile-match confidence
- Unmatched characteristics
- Estimated complexity
- Migration status
- Last validated phase

The inventory is version-controlled and machine-readable.

## Complexity Scoring and Order

The system scores repositories using detected attributes and recommends an order that begins with simpler migrations.

Dependency relationships also affect order. A foundational package producer may need to migrate before its consumers even when a consumer would otherwise receive a lower complexity score.

A human may:

- Correct detected attributes
- Override a selected profile
- Change repository priority
- Delay a repository
- Record technical or scheduling dependencies

The reason for a human correction or override is retained so later inspection and scoring can improve.

## Profile Selection

The AI selects the closest approved migration profile using reviewed attributes, profile rules, and prior migration evidence.

It records:

- Selected profile and version
- Matching attributes
- Confidence
- Unmatched characteristics
- Reason for selection
- Human override and reason when applicable

Routine high-confidence selections do not require separate human approval.

## Profile Discovery

The full set of profiles is not expected to be known initially.

When a repository does not fit its selected profile, the migration determines whether:

- Existing profile configuration can address the difference
- The profile should be revised
- A new profile should be created
- A repository-specific exception is justified
- Human judgment is required

The AI may propose and validate a new or revised profile.

Before automatic reuse, the profile must be validated against:

- The repository that revealed the need
- Representative repositories already covered by the profile
- Negative cases that should not match
- Existing common-baseline behavior

A human approves the new profile and explicitly defines its future scope.

After approval, the current migration resumes from its last validated phase. Any earlier phase affected by the profile change is revalidated.

## Phased Execution

Each migration uses independently validated phases and commits.

A representative sequence is:

1. Inspect and classify the repository
2. Identify package producer and consumer relationships
3. Select the closest approved profile
4. Create a working branch
5. Add or update common baseline files
6. Move main projects under `src`
7. Move test projects under `test`
8. Convert legacy projects to SDK style while preserving existing target frameworks
9. Restore, build, and test the SDK conversion
10. Replace local DLL references with approved package references
11. Update required NuGet dependencies
12. Standardize shared build and package properties
13. Update the canonical `.sln`
14. Add or reorganize virtual solution folders
15. Generate `.slnx` from the `.sln`
16. Validate `.sln` and `.slnx` equivalence
17. Apply profile-required multi-targeting
18. Restore, build, and test every required target
19. Add required mapping configuration
20. Add target pipeline configuration and variables
21. Run outdated-package checks
22. Run vulnerable-package checks
23. Run repository and build-template conformance validation
24. Run the complete target CI build
25. Compare target build and test results with existing CI results
26. Create the draft pull request
27. Publish the approved production package when applicable
28. Verify package restoration from the target feed
29. Update and validate required package consumers

The selected profile may omit inapplicable phases or add approved profile-specific phases.

## Commit Strategy

Each meaningful phase produces an independently validated commit.

This provides:

- Clear proof that each transformation worked
- Easier failure isolation
- Reviewable changes with one purpose
- Rollback to the last validated phase
- Evidence identifying where conformance failed
- Reusable learning tied to the phase that revealed it

A draft pull request is created only after all required local phases succeed.

## Failure Handling

When a phase fails, the system:

1. Preserves the original failure and supporting evidence
2. Diagnoses within approved boundaries
3. Applies known profile guidance or an approved reusable decision rule
4. Attempts a bounded recovery
5. Revalidates the affected phase
6. Classifies unresolved weaknesses
7. Stops at the last validated commit when safe recovery is unavailable
8. Escalates with evidence and a recommended decision

Failed attempts remain part of the evidence even when a later retry succeeds.

## Existing and Target CI Comparison

The initial comparison includes:

- Build success
- Required projects built
- Test success
- Required tests discovered
- Required tests executed
- Required tests passed

The target CI does not need to reproduce the exact existing commands, steps, or sequence.

The target implementation may use different tooling as long as it satisfies the new standards and preserves required outcomes.

Profiles may add package or artifact comparison when those outcomes are material.

## Human Approval and Reusable Decisions

When human approval is required, the migration records:

- Requested decision
- Reason approval was required
- Evidence presented
- Approval or rejection
- Human reasoning
- Applicable repository conditions
- Whether the decision applies once or may be reused
- Conditions requiring renewed approval

The AI may propose a reusable decision rule.

A human must explicitly approve or modify its matching conditions, permitted action, limitations, applicable scope, and renewal conditions.

A one-time approval does not automatically expand AI authority.

## Pull Request

The draft pull request includes:

- Repository profile and version
- Build-template version
- Migration-tool version
- Applied configuration
- Phase and commit summary
- Validation results
- Existing and target CI comparison
- Package-health findings
- Package publication results when applicable
- Consumer impact
- Intentional differences
- Exceptions and approvals
- Rollback information

## Package Publication and Consumer Updates

When the repository produces a .NET library package:

1. Build the approved production package version
2. Publish it to the target central feed
3. Restore it from the target feed
4. Identify known consumer repositories
5. Update required consumers to use the feed and `PackageReference`
6. Restore, build, and test each updated consumer
7. Record producer and consumer status in the inventory

The detailed coordination model for consumer migrations may evolve as evidence is collected.

## Existing CI Retirement

The existing CI remains active until:

1. A human approves the migration
2. The pull request is merged into `main`
3. The target CI succeeds from `main`
4. A human disables the existing CI job
5. Retirement is recorded in the inventory

## Execution Environment

Initial migrations run on a dedicated migration machine.

The design requires:

- Non-interactive execution
- External configuration
- Structured state and output
- Repeatable phases where practical
- Replaceable evidence storage
- No dependency on one operator's interactive session

This allows later movement to a pipeline or hosted service.

## Evidence Storage

Detailed evidence is initially stored on the migration machine.

The evidence format must remain portable so storage can later move to pipeline artifacts, durable service storage, or another approved destination without redesigning the migration workflow.
