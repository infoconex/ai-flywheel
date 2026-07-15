# Principle 4 Research: SOP as Operational Control Plane

## Principle Under Review

The SOP is a persistent, machine-consumable operational contract that governs objectives, capability use, normal execution, exceptions, evidence, validation, and escalation while remaining subordinate to human-defined governance.

See the canonical [principles specification](../../specification/principles.md#principle-4-the-sop-is-an-operational-control-plane).

## Prior-Art Question

How do existing agent systems use plans, procedures, skills, prompts, workflow definitions, or SOPs as persistent control structures?

## Working Assessment

The use of persistent procedures and reusable skills is expected to have substantial prior art. The differentiation question is whether the SOP acts as an operational control plane connecting execution, observability, evolution, and escalation without replacing the separate role of governance.

## Comparison Dimensions

- Is the procedure persistent?
- Is it machine-consumable?
- Does it define normal execution?
- Does it define known failure handling?
- Does it specify evidence and validation expectations?
- Can execution experience modify it?
- Does it define when AI judgment is required?
- Does it define escalation conditions?
- Is it explicitly subordinate to a separate human-authorized governance policy?

## Frameworks to Compare

- [GenericAgent](../frameworks/genericagent.md)
- [Metis](../frameworks/metis.md)
- [MOSS](../frameworks/moss.md)
- [MASFly](../frameworks/masfly.md)
- [Ralph](../frameworks/ralph.md)
- [Reflexion](../frameworks/reflexion.md)
