# AI Flywheel Documentation

This directory separates the **canonical methodology** from the **architecture and examples used to explain it**, the **history used to document its development**, and the **research used to evaluate its origins, relationships, and differentiation**.

## Documentation Sections

- [AI Flywheel Specification](specification/README.md) — Defines the methodology, terminology, principles, lifecycle, governance model, and conformance assessment.
- [AI Flywheel History and Provenance](history.md) — Records the development timeline and distinguishes concept origin, formalization, and first public release.
- [AI Flywheel Architecture](architecture/README.md) — Explains how the complete operating model, runtime model, learning model, governance gates, escalation, and core boundaries fit together.
- [AI Flywheel Examples](examples/README.md) — Applies the specification to concrete operating scenarios without adding normative requirements.
- [AI Flywheel Research](research/README.md) — Examines related frameworks and prior art. It is supporting analysis rather than part of the normative definition.

## Documentation Model

The documentation intentionally separates five questions:

1. **What is the AI Flywheel?** See the [specification](specification/README.md).
2. **How did the methodology develop?** See [history and provenance](history.md).
3. **How does the model fit together?** See the [architecture diagrams](architecture/README.md).
4. **What does it look like in practice?** See the [worked examples](examples/README.md).
5. **How does it relate to existing work?** See the [research section](research/README.md).

## Documentation Rules

The canonical specification should be understandable without reference to any competing or predecessor framework. Comparative claims belong in the research collection and should be backed by primary sources before being treated as conclusions.

Whenever a principle is referenced by number, include its full canonical name. For example, use **Principle 1: Autonomy Is Bounded by Human Authority**, not `Principle 1` or `P1`. This convention applies equally to prose, tables, diagrams, navigation, and related-document lists. A principle name may stand alone when the name itself is the clear reference.

Every documentation folder should contain a `README.md`. When a folder represents a single topic, the topic should be contained directly in that `README.md`. When a folder contains multiple documents, its `README.md` should summarize the section and provide a table of contents using standard Markdown links.
