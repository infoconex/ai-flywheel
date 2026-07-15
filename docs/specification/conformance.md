# AI Flywheel Conformance Criteria

This document defines a working conformance test for systems described as implementations of the AI Flywheel.

## Required Characteristics

A conforming system should satisfy all of the following conditions.

### 1. AI Executes the Process

The AI performs meaningful operational work rather than only producing instructions for a human operator.

### 2. Persistent Capabilities and Procedures Exist

The process uses durable operational assets such as deterministic tools, executable capabilities, procedural guidance, or SOPs.

### 3. Responsibility Is Explicitly Allocated

The system distinguishes work suitable for deterministic execution, procedural control, and AI judgment.

### 4. Execution Produces Outcome Evidence

The process captures enough evidence to evaluate actual outcomes rather than relying solely on model confidence or completion status.

### 5. Outcomes Are Evaluated

The system determines whether the intended result occurred and identifies weaknesses when it did not.

### 6. Improvements Are Routed to the Appropriate Layer

The system can determine whether a lesson should change code, procedure, validation, persistent knowledge, or runtime reasoning.

### 7. Useful Learning Persists

Improvements survive the current execution in a durable operational asset.

### 8. Future Executions Reuse the Improved System

Subsequent executions inherit validated improvements so capability can compound over time.

## Non-Conforming Patterns

The following patterns may contain useful elements of the AI Flywheel but are not sufficient by themselves:

- a loop that only retries until a task succeeds,
- an agent that only stores conversational memory,
- a system that only rewrites source code,
- an agent that only reflects on failure without changing persistent operational assets,
- an automation system with fixed code and no evidence-driven evolution,
- or a workflow that records lessons but does not reuse them operationally.

## Conformance Levels

Future versions of this specification may define conformance levels such as assisted, supervised, autonomous, and self-modifying implementations. These levels are not yet normative.

## Related Documents

- [Formal definition](ai-flywheel-definition.md)
- [Principles](principles.md)
- [Lifecycle](lifecycle.md)
