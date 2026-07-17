# Worked Example: Software Maintenance Flywheel

This example shows how an AI Flywheel could operate a recurring software-maintenance process and improve the system used by later executions.

The example is specific, but it is not a required implementation architecture. It shows how the parts of the specification work together.

## Scenario

A software organization maintains many repositories that periodically require dependency upgrades.

The organization wants AI to operate the maintenance process rather than merely generate instructions for a developer.

The initial process is:

1. identify repositories with an outdated approved dependency,
2. create a working branch,
3. update the dependency,
4. restore and build the project,
5. run the relevant tests,
6. inspect the resulting changes,
7. create a pull request when validation succeeds,
8. and escalate when the change cannot be completed safely within the AI's authority.

The organization implements this as an AI Flywheel so execution can produce evidence that improves future maintenance runs.

## 1. Human Authorization and Governance

Before autonomous operation begins, humans define a Governance Policy.

The policy authorizes the AI to:

- inspect approved repositories,
- create branches,
- update dependencies within an approved version policy,
- modify deterministic maintenance tooling,
- update the maintenance SOP when the change remains within the allowed procedural scope,
- run builds and tests,
- create draft pull requests,
- and persist validated operational learning.

The policy requires human approval before the AI may:

- merge a pull request,
- modify a production deployment pipeline,
- adopt a dependency outside the approved policy,
- disable a required test or security check,
- or expand the set of repositories it is allowed to modify.

The policy also requires human judgment when the available evidence is not enough to determine whether a change is safe.

This establishes the behavior required by [Principle 1: Autonomy Is Bounded by Human Authority](../specification/principles/01-human-authority.md).

## 2. The Initial Operating System

The maintenance Flywheel begins with three operating mechanisms.

### Deterministic Capability

A maintenance tool can:

- list repositories,
- inspect project files,
- detect dependency versions,
- create branches,
- apply standard version updates,
- run restore, build, and test commands,
- collect command output,
- and create pull requests.

### Procedural Guidance

The maintenance SOP defines:

- which repositories are in scope,
- how a target dependency is selected,
- the expected maintenance sequence,
- known exception handling,
- required evidence,
- validation expectations,
- and escalation conditions.

### AI Reasoning

The AI:

- interprets repository-specific context,
- decides which deterministic capability to use,
- investigates unexpected failures,
- determines whether the current SOP already covers the condition,
- classifies learning opportunities,
- proposes or applies authorized changes,
- and decides when escalation is required.

This distribution reflects [Principle 3: Work Is Distributed Across a Moving Determinism Boundary](../specification/principles/03-moving-determinism-boundary.md).

## Cycle 1: A Procedural Weakness Is Discovered

### Execute

The AI begins a dependency upgrade in Repository A.

It follows the maintenance SOP and uses deterministic tooling to:

1. create a branch,
2. update the package version,
3. restore dependencies,
4. build the solution,
5. and run tests.

The build fails because this repository requires a generated configuration file before compilation.

The deterministic tool correctly reports the failure, but the SOP contains no instruction describing the required generation step.

The AI is operating the process directly, satisfying the role described by [Principle 2: AI Is the Operator, Not Merely the Assistant](../specification/principles/02-ai-as-operator.md).

### Observe

The Flywheel captures:

- the repository and branch,
- the dependency version change,
- the restore result,
- the failed build command,
- the compiler output,
- the missing-file error,
- the repository documentation describing the generation command,
- and the later successful build after the AI runs that documented command.

The execution therefore produces evidence rather than relying on the AI's conclusion that the problem was solved.

This reflects [Principle 5: Execution Must Produce Outcome Evidence](../specification/principles/05-outcome-evidence.md).

### Evaluate

The AI evaluates the evidence and determines:

- the dependency update itself is valid,
- the original maintenance procedure was incomplete for this repository type,
- running the generation command resolves the build failure,
- and the remaining tests pass.

The outcome is therefore not simply "the first build failed." The evidence shows a repeatable required step missing from the operating procedure.

### Classify

The AI asks:

> **Where should this learning live?**

It considers several destinations:

- The dependency-update code is not incorrect.
- The build system is not broken.
- The required step is documented and repeatable.
- The step should be followed whenever repositories of this type are maintained.

The weakness is classified as **procedural guidance**.

### Adapt

The AI proposes an SOP change:

> Before building repositories containing the approved generator configuration, run the repository's approved generation command and preserve its output as execution evidence.

This follows the routing behavior required by [Principle 6: Failure Determines Where the System Evolves](../specification/principles/06-evolution-routing.md).

### Validate

The AI validates the proposed procedure by replaying the maintenance sequence against:

- Repository A, where the failure originally occurred,
- another repository that uses the same generation pattern,
- and a repository that does not require generation.

The validation confirms that:

- the new step fixes the affected repository type,
- the condition for running it can be detected reliably,
- and unaffected repositories do not run an unnecessary command.

### Persist

Because the Governance Policy authorizes procedural improvements of this type, the validated SOP change is persisted.

The learning now exists in a durable operational asset rather than only in the original execution log or conversation.

This reflects [Principle 7: Learning Must Change a Persistent Operational Asset](../specification/principles/07-persistent-learning.md).

### Reuse

During a later upgrade of Repository B, the AI detects the same repository type and follows the improved SOP immediately.

The generation step runs before the build, and the previous failure does not recur.

The second execution begins from a better operating state because the first execution changed the procedure used by the next.

This is the behavior required by [Principle 8: Improvement Must Compound Through Reuse](../specification/principles/08-compounding-reuse.md).

## Cycle 2: Repeated Procedure Becomes Deterministic Capability

After many successful executions, evidence shows that the generation step is stable and can be detected reliably.

The AI now repeatedly performs the same reasoning:

1. inspect the repository,
2. determine whether the generator configuration exists,
3. locate the approved generation command,
4. run it,
5. and capture the result.

The behavior is reliable enough that repeated AI reasoning no longer adds meaningful value.

### Observe and Evaluate

The accumulated evidence shows:

- the detection rule is stable,
- the generation command follows a predictable convention,
- the behavior has succeeded across several representative repositories,
- and exceptions are already covered by the SOP.

### Classify

The AI again asks:

> **Where should this learning live now?**

The answer has changed.

The behavior was correctly placed in procedural guidance when it was first discovered, but repeated evidence now supports moving the stable steps into deterministic capability.

This is the **Moving Determinism Boundary** in action.

### Adapt

The AI modifies the maintenance tool so it can:

- detect the generator configuration,
- run the approved generation step,
- capture its output,
- and return a structured failure when generation does not succeed.

The SOP is also updated so it no longer instructs the AI to manage the known steps itself. Instead, it tells the AI when to use the deterministic capability and how to handle unusual results.

The responsibility has moved from:

**AI reasoning + procedural instruction**

into:

**deterministic capability governed by procedure**

The AI still owns the process, but it no longer needs to rediscover or manually execute the stable steps.

### Validate

The modified tool is validated through:

- unit tests for repository detection,
- integration tests for running the generation step,
- replay against repositories previously handled successfully,
- negative tests for unsupported configurations,
- and the existing build-and-test validation sequence.

### Persist and Reuse

The validated tool change and corresponding SOP update are persisted.

Future maintenance runs use the improved deterministic capability directly.

The Flywheel has now compounded twice:

1. execution evidence first improved the procedure,
2. repeated evidence later moved stable behavior into deterministic implementation.

## Cycle 3: A Condition Should Move Back Toward Reasoning

The Moving Determinism Boundary is not one-way.

Suppose a later change introduces several repository-specific generation systems. The deterministic tool's detection logic becomes increasingly complex and begins selecting the wrong generation command in unusual repositories.

### Evaluate and Classify

Evidence shows that:

- the deterministic rule remains reliable for common repositories,
- unusual repositories require judgment based on context,
- and continuing to add special-case code would make the tool brittle.

The Flywheel determines that responsibility is now in the wrong place.

### Adapt

Instead of encoding every exception into deterministic code, the system changes the capability so that:

- known common patterns remain deterministic,
- unclear patterns return structured context,
- the SOP defines how those cases should be investigated,
- and AI reasoning selects or proposes the appropriate action when the deterministic capability cannot responsibly decide.

Responsibility has moved partially back toward procedural guidance and AI reasoning.

This demonstrates that the AI Flywheel does not treat maximum automation or maximum determinism as the goal.

## When Human Authority Intervenes

Assume the AI discovers that one repository can only be upgraded by disabling a mandatory security validation step.

The AI may understand exactly how to make the build pass, but the Governance Policy prohibits disabling the control.

The result is **Prohibited**, not an invitation for the AI to rewrite its own policy.

In a different case, assume a new dependency license has unclear implications. The AI may be authorized to update dependencies generally but lack enough evidence to determine whether this license is acceptable.

The result is **Judgment Required** because the Uncertainty Boundary has been reached.

A later human decision may become evidence for a reusable rule, but any expansion of the AI's authority still requires human authorization.

## How the Full Flywheel Appears in This Example

| AI Flywheel Element | Example Implementation |
|---|---|
| Human authority | Governance Policy defines repository scope, allowed modifications, approval gates, and prohibited actions. |
| AI operation | AI performs the maintenance workflow rather than only advising a developer. |
| Deterministic capability | Repository inspection, dependency changes, branch operations, builds, tests, and later generation handling. |
| Procedural guidance | Maintenance SOP defines the process, known exceptions, evidence, validation, and escalation. |
| AI reasoning | Interprets failures, investigates unfamiliar repository context, classifies learning, and handles ambiguity. |
| Outcome evidence | Command results, build output, tests, repository state, generated artifacts, and human decisions. |
| Evolution Routing | The first failure is sent to the SOP; repeated stable behavior is later moved into deterministic capability. |
| Moving Determinism Boundary | Responsibility moves from reasoning to procedure to code, and can move back when code becomes brittle. |
| Validation | SOP changes are replayed; code changes are tested; governance approval remains separate from technical validation. |
| Persistence | Validated learning changes the SOP, tooling, validation rules, or authorized governance assets. |
| Reuse | Later maintenance runs inherit and apply the improved operating system. |

## Lifecycle Summary

The complete pattern is:

**Execute → Observe → Evaluate → Classify → Adapt → Validate → Persist → Reuse**

The important point is not that the system encountered a failure and retried.

The Flywheel effect occurs because evidence from one execution changed the persistent operating system used by later execution.

## Related Specification Documents

- [Formal Definition](../specification/definition.md)
- [Principles](../specification/principles/README.md)
- [Lifecycle](../specification/lifecycle/README.md)
- [AI Flywheel Conformance](../specification/conformance/README.md)
- [Core Operating Model](../architecture/operating-model.md)
