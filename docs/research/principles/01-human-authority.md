# Principle 1 Research: Autonomy Is Bounded by Human Authority

## Principle Under Review

A human authorizes the AI Flywheel to operate and defines the boundaries of that authority. Once authorized, the Flywheel operates autonomously until it reaches a condition requiring human judgment or human approval.

See the canonical [principles specification](../../specification/principles.md#principle-1-autonomy-is-bounded-by-human-authority).

## Prior-Art Question

How do existing agent systems define delegated autonomy, governance policies, approval gates, uncertainty escalation, and human authority over self-modification?

## Working Assessment

Human-in-the-loop control, approval workflows, risk-based escalation, and bounded autonomy are established ideas across autonomous systems and AI governance.

The research question is therefore not whether humans can supervise autonomous systems. The narrower question is whether related frameworks combine human authorization with a Flywheel that is autonomous by default inside explicit boundaries, distinguishes uncertainty from authority, and treats human decisions as evidence that can improve future operation.

## Comparison Dimensions

For each framework, determine whether it:

1. requires human authorization before autonomous operation,
2. defines persistent authority boundaries,
3. distinguishes human judgment from human approval,
4. defines prohibited actions separately from approval-required actions,
5. can continue unrelated authorized work while one item is escalated,
6. treats human decisions as reusable evidence,
7. prevents the AI from autonomously expanding its own authority,
8. allows governance to constrain both execution and self-improvement.

## Frameworks to Compare

- [GenericAgent](../frameworks/genericagent.md)
- [Metis](../frameworks/metis.md)
- [MOSS](../frameworks/moss.md)
- [MASFly](../frameworks/masfly.md)
- [Ralph](../frameworks/ralph.md)
- [Reflexion](../frameworks/reflexion.md)

## Potential Differentiation

A possible AI Flywheel distinction is the combination of **autonomy by default within delegated authority**, explicit **uncertainty and authority boundaries**, and a learning mechanism in which human decisions can improve future operation without allowing the AI to grant itself additional authority.

This remains a research hypothesis until compared rigorously with primary sources and adjacent work in AI governance, autonomous systems, human-machine teaming, and adaptive automation.
