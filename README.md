# AI Flywheel

The **AI Flywheel** is an evidence-driven operating model in which AI does not merely assist a human in performing work, but progressively builds, operates, observes, and improves the system by which the work is performed.

> **A loop repeats. A flywheel compounds.**

![AI Flywheel lifecycle](docs/assets/ai-flywheel-2.png)

## Origin and Formalization

The ideas that became the AI Flywheel began developing through practical experimentation in **January 2026** and were refined over the following months. In **July 2026**, those ideas were organized into the named AI Flywheel methodology, including its principles, lifecycle, governance model, conformance approach, and supporting documentation.

These dates mark different points in its development: January 2026 marks the beginning of concept development, July 2026 marks the point when the methodology was formally organized, and the `v0.1.0` release marks its first formal public specification release.

See [AI Flywheel History and Development](docs/history.md) for the full timeline.

## Why AI Flywheel?

AI-assisted work often begins with a human asking AI to create something the human will use: code, a script, a procedure, or an analysis. A more autonomous pattern emerges when the AI begins operating those capabilities itself.

That creates a new question: what should happen when execution succeeds imperfectly, fails unexpectedly, or reveals a better way to perform the work?

An AI Flywheel treats execution as a source of evidence for improving the system that performs the work. The AI performs the work, observes what actually happened, evaluates the outcome, classifies what was learned, adapts the right part of the system, validates the improvement, persists it, and reuses it in future execution.

A lesson may become a better deterministic capability, improved procedural guidance, durable reasoning knowledge, stronger validation, or a proposed governance change. The next execution then begins from the improved operating state rather than starting from the same place again.

That is the flywheel effect: **the output of one cycle improves the system used by the next.**

## How the Flywheel Works

The lifecycle is:

**Execute → Observe → Evaluate → Classify → Adapt → Validate → Persist → Reuse**

- **Execute** the work using procedural guidance, AI reasoning, and deterministic capabilities.
- **Observe** evidence about what actually happened.
- **Evaluate** the outcome against the intended result and success criteria.
- **Classify** the weakness, uncertainty, or learning opportunity and determine where the learning should live.
- **Adapt** the procedure, reasoning, deterministic capability, validation, or governance needed to address what was learned.
- **Validate** the proposed improvement before trusting it for future use.
- **Persist** validated and authorized learning in a durable operational asset.
- **Reuse** the improved system in future execution.

Governance applies throughout the cycle. Human-defined authority determines whether actions and changes are authorized, require approval, require human judgment, or are prohibited.

## What Makes an AI Flywheel Different?

An AI Flywheel is not defined by any single capability such as autonomous execution, memory, reflection, tool creation, code generation, self-modification, or feedback. These mechanisms all have substantial prior art.

The comparison below follows the AI Flywheel lifecycle so each stage can be evaluated consistently across different approaches:

| Lifecycle Stage | Traditional Automation | Typical Agent Loop | AI Flywheel |
|---|---|---|---|
| **Execute** — Performs the work using procedures, reasoning, and deterministic capabilities | Yes | Yes | Required |
| **Observe** — Captures evidence about what actually happened | Limited | Often | Required |
| **Evaluate** — Compares outcomes against intended results and success criteria | Limited | Often | Required |
| **Classify** — Determines what was learned and where that learning should live | No | Framework-dependent | Required |
| **Adapt** — Changes the procedure, reasoning, deterministic capability, validation, or governance as needed | Release-dependent | Framework-dependent | Required |
| **Validate** — Confirms that the proposed improvement works as intended | Release-dependent | Framework-dependent | Required |
| **Persist** — Stores validated and authorized learning in a durable form | Limited | Sometimes | Required |
| **Reuse** — Uses the improved state in future execution | Limited | Sometimes | Required |
| **Governance** — Controls what may be executed, changed, or persisted | External | Framework-dependent | Required throughout |

Agent systems vary widely, so this table is a general comparison rather than a claim that all agent frameworks behave the same way. See the [prior-art and comparative research](docs/research/frameworks/prior-art-overview.md) and [framework comparison matrix](docs/research/frameworks/framework-comparison-matrix.md) for the detailed analysis.

> See [Conformance](docs/specification/conformance/README.md) for the requirements used to determine whether an implementation qualifies as an AI Flywheel.

## What an AI Flywheel Is Not

A system does not become an AI Flywheel merely because it contains one part of the pattern.

- A **retry-only loop** repeats work but does not necessarily learn from it.
- A **memory-only agent** may retain information without changing the operational system used by future execution.
- A **self-modifying system** may change code without deciding whether code is the right place for the learning.
- **Reflection alone** does not create compounding improvement unless the lesson changes a persistent operational asset that future execution can reuse.
- **Fixed automation** can be highly reliable without having an evidence-driven mechanism for evolving itself.

> See [Non-Conforming Patterns](docs/specification/conformance/non-conforming-patterns.md) for examples of systems that do not satisfy the requirements of an AI Flywheel.

## Core Concepts

### Human Authority Bounds Autonomy

A human authorizes the Flywheel and defines its authority boundaries. The AI then operates autonomously within those boundaries and escalates only when uncertainty or authority requires human involvement.

### AI Is the Operator

The AI executes the process and can create, invoke, interpret, and improve the capabilities it uses to perform the work.

### Three Mechanisms Work Together During Execution

The Flywheel combines:

1. **Deterministic capability** for reliable, repeatable operations.
2. **Procedural guidance, expressed as a Standard Operating Procedure (SOP)**, for defining how work should be performed and when escalation is required.
3. **AI reasoning** for orchestration, interpretation, judgment, adaptation, and ambiguity.

These are not sequential lifecycle stages. They work together during execution and become possible destinations for learning after execution produces evidence.

### The Moving Determinism Boundary

The **Moving Determinism Boundary** determines where work and learning should live among deterministic capability, procedural knowledge, and AI reasoning. Responsibility can move as evidence accumulates.

### The Authority Boundary

The **Authority Boundary** determines what the AI is permitted to decide, execute, change, or persist autonomously. The determinism boundary can move as the system learns; the authority boundary is governed by humans.

## Explore the Documentation

New to the AI Flywheel? Start with the core specification:

1. **[Definition](docs/specification/definition.md)** — Understand what an AI Flywheel is and what distinguishes it from related approaches.
2. **[Principles](docs/specification/principles/README.md)** — Explore the eight principles that define how an AI Flywheel operates.
3. **[Lifecycle](docs/specification/lifecycle/README.md)** — Follow the eight-stage cycle from execution through persistent reuse.
4. **[Conformance](docs/specification/conformance/README.md)** — Evaluate whether a system meets the requirements of an AI Flywheel.

Then explore the supporting material:

- **[Complete Specification](docs/specification/README.md)** — Browse the full methodology, including terminology, governance, boundaries, principles, lifecycle, and conformance.
- **[Core Operating Model](docs/architecture/operating-model.md)** — See how human authority, runtime mechanisms, governance, learning, persistence, and reuse fit together.
- **[Architecture](docs/architecture/README.md)** — Explore detailed views of runtime, learning, governance, escalation, and system boundaries.
- **[Worked Example](docs/examples/software-maintenance-flywheel.md)** — Follow a complete execution-to-reuse example in practice.
- **[Research](docs/research/README.md)** — Review prior-art analysis, framework comparisons, and supporting research.
- **[History and Development](docs/history.md)** — Follow the development of the methodology from its early ideas through formalization.
- **[Documentation Index](docs/README.md)** — Browse the complete documentation structure.

The specification defines the methodology. The research collection examines related ideas and how the AI Flywheel compares with them without making that research part of the specification.

## Project Status and Roadmap

> **Current status:** AI Flywheel Specification 0.1 — Draft. The initial `v0.1.0` repository release has been published, and the methodology will continue to evolve through implementation, testing, and research.

The current methodology includes a formal definition, eight principles, an eight-stage lifecycle, governance and boundary models, conformance guidance, architecture documentation, and a complete end-to-end example.

Future work may include:

- Additional end-to-end examples
- Implementation guidance
- A reference implementation
- Conformance evaluation tooling
- Continued prior-art research

Terminology, conformance details, and supporting guidance may continue to evolve before a stable specification is declared.