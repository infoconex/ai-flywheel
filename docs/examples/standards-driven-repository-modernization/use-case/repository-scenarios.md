# Repository Scenarios

## Purpose

These simulated scenarios represent different starting conditions within the standards-driven repository modernization use case.

They help define migration profiles and expected outcomes. They are not separate AI Flywheel lifecycle examples.

## Scenario 1: Simple SDK-Style Library

### Starting state

```text
Example.Library/
├── Example.Library/
│   ├── Example.Library.csproj
│   └── source files
├── Example.Library.Tests/
│   ├── Example.Library.Tests.csproj
│   └── test files
├── Example.Library.sln
└── existing CI configuration
```

The projects already use SDK-style project files. The primary changes are structural and operational.

### Expected result

```text
Example.Library/
├── src/
│   └── Example.Library/
├── test/
│   └── Example.Library.Tests/
├── pipeline/
│   ├── build/
│   │   └── CICDPipeline.yaml
│   └── vars/
│       └── PipelineVars.yaml
├── mappings/
│   └── Example.Library/
│       └── dev/
│           └── mappings-config.yaml
├── Example.Library.sln
├── Example.Library.slnx
├── Directory.Build.props
├── Directory.Packages.props
├── nuget.config
├── README.md
├── .gitignore
└── .snyk
```

This is a good early migration candidate because it can validate the common repository structure, solution generation, pipeline contract, package reporting, and CI comparison without first converting project format.

## Scenario 2: Legacy .NET Framework Library

### Starting state

```text
Legacy.Library/
├── Legacy.Library/
│   ├── Legacy.Library.csproj
│   ├── packages.config
│   └── source files
├── Legacy.Library.Tests/
│   ├── Legacy.Library.Tests.csproj
│   ├── packages.config
│   └── test files
├── lib/
│   └── LocalDependency.dll
├── packages/
├── Legacy.Library.sln
├── legacy-build.ps1
└── existing CI configuration
```

The projects use the legacy MSBuild format and the existing CI invokes MSBuild and VSTest directly.

### Initial SDK checkpoint

The project is converted to SDK style while preserving its existing framework:

```xml
<Project Sdk="Microsoft.NET.Sdk">
  <PropertyGroup>
    <TargetFramework>net48</TargetFramework>
  </PropertyGroup>
</Project>
```

Restore, build, and test validation proves this mechanical conversion before multi-targeting begins.

### Profile-required modernization

A profile may then introduce:

```xml
<Project Sdk="Microsoft.NET.Sdk">
  <PropertyGroup>
    <TargetFrameworks>net48;net8.0-windows</TargetFrameworks>
  </PropertyGroup>
</Project>
```

If dependencies prevent multi-targeting, the evidence is classified before the profile, repository, dependency strategy, or approved exception changes.

## Scenario 3: Package Producer

A library currently publishes its production package to an existing local artifact repository.

Migration must:

- Modernize and validate the library
- Create the approved production package version
- Publish the package to the target central feed
- Restore the published package from that feed
- Identify known consumers
- Record the package source transition

The repository is not treated only as an isolated build. Its downstream dependency relationships are part of the migration evidence.

## Scenario 4: Package Consumer

### Starting state

```text
Example.Service/
├── Example.Service/
│   └── Example.Service.csproj
├── lib/
│   └── Legacy.Library.dll
├── Example.Service.sln
└── existing CI configuration
```

The service uses a local DLL or restores a package from the existing artifact repository.

### Expected dependency state

```xml
<ItemGroup>
  <PackageReference Include="Legacy.Library" />
</ItemGroup>
```

The approved version is managed through `Directory.Packages.props`.

The consumer must restore from the target feed, build successfully, and pass required tests.

## Scenario 5: Multi-Project Repository

### Starting state

```text
Example.Components/
├── Component.Core/
├── Component.Client/
├── Component.Utility/
├── Component.Tests/
├── scripts/
├── Example.Components.sln
└── existing CI configuration
```

### Expected result

```text
Example.Components/
├── src/
│   ├── Component.Core/
│   ├── Component.Client/
│   └── Component.Utility/
├── test/
│   └── Component.Tests/
├── pipeline/
│   ├── build/
│   │   └── CICDPipeline.yaml
│   └── vars/
│       └── PipelineVars.yaml
├── mappings/
│   └── Example.Components/
│       └── dev/
│           └── mappings-config.yaml
├── Example.Components.sln
├── Example.Components.slnx
├── Directory.Build.props
├── Directory.Packages.props
├── nuget.config
├── README.md
├── .gitignore
└── .snyk
```

The canonical solution uses virtual folders for `src` and `test`. The generated `.slnx` must represent the same projects and folders.

## Scenario 6: Existing CI Outlier

A repository does not use the normal existing CI pattern for its project type.

The migration must not remove specialized behavior merely because it does not appear in the common profile.

The system records:

- Specialized steps
- Evidence of their current purpose
- Whether the target template supports them
- Whether a profile change can support them
- Whether a separate approved exception is required
- Whether human judgment is needed

## Future Scenarios

Additional scenarios may be added for:

- Websites
- APIs
- Services
- Multiple solutions
- Generated source
- Specialized test configuration
- Unsupported dependencies
- Repository-specific packaging
- Profile-specific `global.json`

A scenario should be added when it represents a reusable starting pattern rather than a one-time repository detail.
