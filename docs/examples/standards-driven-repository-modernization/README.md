# Standards-Driven Repository Modernization

This example package describes a simulated use case in which a portfolio of .NET repositories is migrated to new repository, build, testing, security, dependency, package-management, and continuous-integration standards.

The simulated environment uses Jenkins as the existing CI platform and Azure DevOps as the target platform. These technologies make the use case concrete, but the migration approach can apply to other platforms and repository standards.

## Documents

- [Use Case](use-case/README.md) — Defines the migration need, scope, expected outcomes, standards, process, and repository scenarios
- [Target Repository Standard](use-case/target-repository-standard.md) — Defines the expected repository structure and build contract after migration
- [Migration Process](use-case/migration-process.md) — Defines inventory, profile selection, phased execution, validation, approval, and retirement behavior
- [Repository Scenarios](use-case/repository-scenarios.md) — Shows representative starting conditions and expected results
- [Worked Example](worked-example.md) — Demonstrates how repeated migrations operate as an Infoconex AI Flywheel and improve later migrations

## Relationship Between the Documents

The use-case documents describe the simulated problem and how the migration is expected to work.

The worked example applies the AI Flywheel lifecycle to that use case. It shows how execution evidence changes persistent migration assets that later migrations reuse.

The package illustrates one possible implementation. It does not add requirements to the Infoconex AI Flywheel Specification or prescribe a universal repository standard.
