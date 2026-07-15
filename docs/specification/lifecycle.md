# AI Flywheel Lifecycle

The AI Flywheel operates as a recurring eight-stage cycle.

## 1. Execute

The AI performs the work using the current combination of deterministic capabilities, procedural guidance, and runtime reasoning.

## 2. Observe

The system captures relevant execution evidence, including outputs, errors, tool results, timing, external state, validation signals, and other indicators of actual outcome.

## 3. Evaluate

The AI compares the observed outcome with the intended outcome and applicable success criteria.

The result should distinguish verified success, partial success, known failure, and uncertain outcome.

## 4. Classify

The AI identifies the nature and likely source of any weakness.

Classification should consider whether the issue belongs primarily to:

- deterministic implementation,
- procedural guidance,
- missing validation,
- missing knowledge,
- runtime reasoning,
- environmental change,
- or an incorrect assumption about where responsibility should reside.

## 5. Adapt

The system selects the appropriate improvement target and applies or proposes a change.

Possible adaptations include code changes, new tools, SOP changes, stronger validation, new reusable guidance, or movement of responsibility across the determinism boundary.

## 6. Validate

The proposed improvement is tested against appropriate evidence before it is trusted for future use.

Validation should be proportional to the risk and nature of the change. A code change may require automated tests. An SOP change may require replay against representative scenarios. A reasoning change may require evaluation against known examples.

## 7. Persist

Validated learning is stored in a durable operational asset so it can survive the current context and execution.

## 8. Reuse

Future executions begin with the improved system. The next cycle therefore starts from a more capable operating state rather than repeating the same discovery from scratch.

## Compounding Behavior

The Flywheel effect occurs when reuse causes the benefits of previous cycles to accumulate.

The goal is not continuous change for its own sake. Stable successful behavior should remain stable. The system should evolve when evidence demonstrates that a persistent improvement is justified.

## Related Documents

- [Formal definition](ai-flywheel-definition.md)
- [Principles](principles.md)
- [Conformance criteria](conformance.md)
