# Target Repository Standard

## Purpose

This page defines the simulated target state for repositories in the standards-driven modernization use case.

It is an example repository standard rather than a requirement of the Infoconex AI Flywheel Specification.

## Standard Structure

```text
Repository/
├── src/
│   └── Example.Project/
│       ├── Example.Project.csproj
│       └── source files
├── test/
│   └── Example.Project.Tests/
│       ├── Example.Project.Tests.csproj
│       └── test files
├── pipeline/
│   ├── build/
│   │   └── CICDPipeline.yaml
│   └── vars/
│       └── PipelineVars.yaml
├── mappings/
│   └── <RepositoryName>/
│       └── dev/
│           └── mappings-config.yaml
├── Example.sln
├── Example.slnx
├── Directory.Build.props
├── Directory.Packages.props
├── nuget.config
├── README.md
├── .gitignore
├── .snyk
└── global.json
```

The presence of `global.json` is profile-specific.

## Directory Requirements

### `src`

The `src` directory contains main projects such as libraries, websites, APIs, services, applications, utilities, and shared components.

Each project is stored in its own directory.

### `test`

The `test` directory contains test projects.

When projects move, the migration updates project references, solution paths, build paths, test paths, package paths, mapping references, and other affected configuration.

The existing test framework is preserved unless an approved profile explicitly requires a change.

### `pipeline/build`

`pipeline/build/CICDPipeline.yaml` contains the repository-level configuration used to invoke the approved shared build template.

It supplies repository-specific configuration rather than duplicating the full build implementation.

### `pipeline/vars`

`pipeline/vars/PipelineVars.yaml` contains repository-specific build variables.

The build-template standard defines which variables are required, optional, permitted, or prohibited.

### `mappings`

Testing configuration is stored at:

```text
mappings/<RepositoryName>/dev/mappings-config.yaml
```

Another approved tool uses this configuration to rehydrate settings during testing.

The repository-name directory must use the approved name and casing.

## Root File Requirements

### `README.md`

Every repository contains a root `README.md` with that exact name and casing.

### Solution files

The root contains both `.sln` and `.slnx` files.

The `.sln` is canonical because the target build template expects it. The migration updates and organizes the `.sln`, generates `.slnx` from it, and validates that both contain equivalent projects and virtual solution folders.

### `nuget.config`

The root `nuget.config` defines approved production, development, and public NuGet feeds.

It supports migration from the existing local artifact repository to the target central package feed.

### `Directory.Build.props`

`Directory.Build.props` centralizes approved MSBuild properties shared by projects beneath the repository root.

Because it can affect multiple projects, changes to it must be validated against required build behavior.

### `Directory.Packages.props`

`Directory.Packages.props` contains centrally managed NuGet package versions.

Projects use the approved central package-version strategy.

### `.gitignore`

The root `.gitignore` contains approved exclusions for build output, local configuration, generated files, tooling output, and temporary migration output.

### `.snyk`

The root `.snyk` contains repository-specific Snyk security settings.

Migration may not weaken or remove an approved security control.

### `global.json`

`global.json` is added only when required by the selected profile.

The profile defines the SDK version, roll-forward policy, relationship with `PipelineVars.yaml`, relationship with the shared template, and drift validation.

## Project Modernization

Legacy project files are first converted to SDK style while preserving their existing target framework.

This intermediate state is restored, built, and tested before framework modernization continues.

If the profile requires multi-targeting, it is applied only after the SDK conversion is proven. A representative example is:

```xml
<Project Sdk="Microsoft.NET.Sdk">
  <PropertyGroup>
    <TargetFrameworks>net48;net8.0-windows</TargetFrameworks>
  </PropertyGroup>
</Project>
```

A profile may adjust the target frameworks when dependencies or project behavior prevent the expected combination.

## Build Contract

The target build uses the `dotnet` command-line interface when supported by the selected profile.

Required outcomes include:

- Successful dependency restore
- Successful compilation of required projects
- Successful discovery and execution of required tests
- Reporting of outdated packages
- Reporting of known vulnerable packages
- Execution of required Snyk controls
- Creation and publication of approved packages when applicable
- Collection of outcome evidence

The target implementation may differ from the existing CI commands and step order. It must satisfy the target standards and preserve required build and test outcomes.

## Package Feed Contract

Package-producing libraries publish the approved production version to the target central feed.

Package consumers use the approved feed and `PackageReference`. Approved versions are managed through `Directory.Packages.props`.

A package migration is not considered complete until the published package can be restored and the required consumer impact has been identified.

## Conformance Evidence

Repository conformance includes:

- Required directory and file checks
- Exact filename and casing checks
- Project-location checks
- Project-reference checks
- Solution-content checks
- `.sln` and `.slnx` equivalence
- Package-source checks
- Package-reference checks
- SDK checks when applicable
- Security-setting checks
- Mapping-structure checks
- Build and test outcomes
- Package-health reports
