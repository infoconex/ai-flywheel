# Infoconex AI Flywheel Design Guide

The **Infoconex AI Flywheel Design Guide** defines how the methodology is presented visually across repository documentation, GitHub Pages, diagrams, and image assets.

This guide is not part of the normative specification. The specification defines the methodology; this guide defines how that methodology should be presented consistently.

The initial version of the guide starts with the visual system already established by the current site and approved image assets. It can expand over time to cover broader documentation and interaction design patterns.

## Visual Foundation

The current visual direction is clean, modern, technical, and documentation-oriented:

- Use light or white backgrounds for primary documentation imagery.
- Use dark navy typography for primary text.
- Use bright semantic colors for lifecycle stages and major documentation areas.
- Use simple, recognizable line or flat icons rather than decorative or highly detailed illustrations.
- Use rounded shapes and restrained shadows where containers or cards are needed.
- Preserve generous whitespace so diagrams remain readable at repository and documentation-site widths.
- Treat color, icons, terminology, and ordering as part of the meaning of authoritative visuals.

## Typography

### Primary font stack

The GitHub Pages site currently uses this primary font stack:

```css
Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif
```

Use **Inter** as the preferred typeface for new design assets when the production method allows the font to be selected explicitly. System sans-serif fallbacks are acceptable for rendered web content.

Existing raster assets may contain baked text rendered with a visually similar sans-serif font. New or regenerated assets should use Inter where practical so future visuals align with the site.

### Current web type hierarchy

| Element | Current treatment |
|---|---|
| Body text | `16px`, weight `400`, line-height `1.72` |
| Page H1 | `clamp(2.2rem, 5vw, 3.45rem)`, weight `800`, letter-spacing `-0.045em` |
| Page H2 | `clamp(1.55rem, 3vw, 2rem)`, weight `760` |
| Page H3 | `1.3rem`, weight `730` |
| Navigation section label | `13px`, weight `800`, uppercase, letter-spacing `0.055em` |
| Navigation item | `14px` |
| Header brand title | `15px`, bold |
| Header version | `12px` |

When a fallback font does not support variable weights such as `730` or `760`, use the nearest available weight.

### Monospace font stack

Code and other monospaced content currently use:

```css
"SFMono-Regular", Consolas, "Liberation Mono", monospace
```

## Core Site Colors

These are the current implemented site color tokens and should be treated as the baseline palette for web presentation.

| Role | Color | Usage |
|---|---|---|
| Page background | `#F5F7FB` | Site canvas behind content cards |
| Surface | `#FFFFFF` | Primary cards and panels |
| Muted surface | `#F8FAFC` | Secondary panels, table headers, inputs |
| Primary text | `#172033` | General page text |
| Heading text | `#101828` | Documentation headings and strong text |
| Muted text | `#667085` | Secondary navigation and supporting copy |
| Border | `#E4E7EC` | Standard dividers and borders |
| Strong border | `#D0D5DD` | Inputs and stronger boundaries |
| Accent | `#4F46E5` | Links and primary accent treatment |
| Strong accent | `#3730A3` | Hover and active accent treatment |
| Soft accent | `#EEF2FF` | Active navigation background |
| Header background | `#0B1020` | Main site header |
| Header text | `#F8FAFC` | Main site header text |
| Blockquote accent | `#6366F1` | Blockquote border and related emphasis |

Do not replace semantic lifecycle colors with the general site accent color. Lifecycle colors carry stage-specific meaning.

## Image Typography and Base Colors

The approved root README banner establishes the current image-specific visual treatment.

| Element | Representative color | Guidance |
|---|---|---|
| Primary dark headline | `#07163B` | Strong dark navy for major image headlines |
| Flywheel emphasis headline | `#0150ED` | Bright blue for the emphasized flywheel statement |
| Supporting image text | `#232D58` | Dark blue-gray for explanatory copy |
| Primary image background | `#FFFFFF` to `#FDFDFD` | Keep primary banners visually light |
| White icon and stage text | `#FFFFFF` | Use on saturated lifecycle segments |

The root README banner uses a multicolor accent rule that draws from the lifecycle palette rather than introducing a separate decorative palette.

## Canonical Lifecycle Visual Mapping

Lifecycle visuals must preserve the exact stage order:

**Execute → Observe → Evaluate → Classify → Adapt → Validate → Persist → Reuse**

Each stage has a stable color and icon association. These mappings should remain consistent across the root banner, navigation icon, lifecycle diagrams, section graphics, and future authoritative visuals.

The colors below are representative primary values sampled from the approved current banner. The raster artwork contains minor tonal variation and antialiasing, but the semantic identity of each stage should remain anchored to these values.

| Stage | Representative color | Icon | Icon meaning |
|---|---|---|---|
| **Execute** | `#005EBF` | Play triangle | Begin or perform the work |
| **Observe** | `#009AC1` | Eye | Observe what actually happened |
| **Evaluate** | `#30AC4C` | Ascending bar chart | Assess evidence and outcome |
| **Classify** | `#F2AC02` | Tag | Categorize what was learned |
| **Adapt** | `#F97102` | Horizontal sliders | Adjust the operating model |
| **Validate** | `#DD3737` | Shield with check | Verify the proposed improvement |
| **Persist** | `#7C47B3` | Database cylinder | Store validated learning durably |
| **Reuse** | `#4B46C6` | Circular arrows | Reuse the improved operating state |

### Lifecycle visual rules

- Preserve the exact canonical order whenever stages are shown as a sequence or cycle.
- Do not assign a stage color to a different stage.
- Use the established icon for each stage unless a deliberate design change updates the guide and all canonical visuals together.
- Use simple white icons and white stage labels on saturated lifecycle segments.
- Do not add lifecycle stages that are not part of the specification.
- Do not show governance or human authorization as an additional lifecycle stage.
- The compact `64 × 64` navigation icon may omit stage text, but it should preserve the same eight-stage color order and recognizable icon mapping.
- Stage numbers and directional arrows are optional design devices, not part of the stage identity. The approved root banner omits them to reduce visual clutter.

## Canonical Principle Visual Mapping

The approved `principles.png` asset establishes the current visual identity for the eight canonical principles. Principle visuals should preserve the exact principle order and use stable icon associations so readers encounter the same visual language across the Principles section, conformance material, architecture diagrams, and future supporting visuals.

The accent colors below are representative values from the approved Principles banner. They are stable presentation identifiers **within principle-specific visuals**. Unlike lifecycle colors, they do not create a semantic relationship between a principle and a lifecycle stage that happens to use a similar color.

| Principle | Stable short label | Representative accent | Icon | Icon meaning |
|---|---|---|---|---|
| **1. Autonomy Is Bounded by Human Authority** | Human Authority | `#0C64E8` | Person with shield | Human authority constrains autonomous operation |
| **2. AI Is the Operator, Not Merely the Assistant** | AI as Operator | `#0698A5` | Gear with AI | AI performs meaningful operational work |
| **3. Work Is Distributed Across a Moving Determinism Boundary** | Moving Determinism Boundary | `#34A453` | Adjustable boundary or split controls | Responsibility can move among deterministic capability, procedural guidance, and AI reasoning |
| **4. The SOP Is an Operational Control Plane** | SOP Control Plane | `#F3A839` | Procedure document with checklist | Persistent operational procedure directs execution |
| **5. Execution Must Produce Outcome Evidence** | Outcome Evidence | `#F86D09` | Ascending evidence chart | Execution produces observable evidence of outcomes |
| **6. Failure Determines Where the System Evolves** | Evolution Routing | `#E03036` | Branching route arrows | Failure classification routes where improvement belongs |
| **7. Learning Must Change a Persistent Operational Asset** | Persistent Learning | `#752DB4` | Database cylinder | Validated learning changes a durable operational asset |
| **8. Improvement Must Compound Through Reuse** | Compounding Reuse | `#4A46C4` | Circular reuse arrows | Improvements are reused so benefits compound over time |

### Principle visual rules

- Preserve the exact canonical order whenever the principles are shown as a set.
- Use the full canonical principle names in normative specification content. Stable short labels may be used in compact supporting visuals where the full names would not remain readable.
- Keep principle icons semantically stable. Do not substitute lifecycle-stage icons merely because a principle and lifecycle stage are conceptually related.
- Principle accent colors identify principles only within principle-specific contexts. Do not imply that Principle 1 corresponds to Execute, Principle 2 corresponds to Observe, or any other one-to-one principle-to-stage mapping based on shared ordering or similar colors.
- In visuals that show both principles and lifecycle stages, lifecycle stage colors and icons retain their canonical semantic meaning. Principle treatments should be visually secondary or slightly muted when needed to prevent false equivalence.
- When principles appear in mixed diagrams, preserve their recognizable icons and labels even if neutral or softened containers are used to reduce visual competition with lifecycle semantics.
- Update this mapping deliberately and consistently if an approved principle icon or accent changes; do not allow competing principle visual systems to remain in authoritative assets.

## Documentation Area Visual Mapping

The root README banner currently uses these supporting visual associations for the four primary documentation destinations shown in the banner.

| Area | Representative color | Icon |
|---|---|---|
| **Specification** | `#0150ED` | Document or page |
| **Architecture** | `#0099C4` | Stacked layers |
| **Examples** | `#24A844` | Lightbulb |
| **Research** | `#4C46C6` | Magnifying glass |

These associations may be reused in supporting visuals where doing so improves recognition. They must not override lifecycle color semantics when the content is specifically describing lifecycle stages.

## Image Types and Dimensions

### Heading duplication

- When a supporting image appears directly below an H1 or other visible page or section heading, do not repeat that heading or section title inside the image.
- Treat the real Markdown or HTML heading as the primary title and use the image to explain, reinforce, or visualize the subject.
- Include text inside the image only when it adds information, meaning, or context that is not already provided by the surrounding page content.
- A title may appear inside an image when the image is intentionally designed to stand alone outside the page context, but page-specific supporting assets should avoid duplicated headings.

### Root README banner

Current approved asset:

```text
docs/assets/Infoconex-ai-flywheel-banner.png
```

Guidance:

- Target dimensions: approximately `1024 × 341` pixels.
- Target aspect ratio: approximately `3:1`.
- Target file size: approximately `150 KB` or less where practical without visible quality loss.
- Keep the project name as real page text in the README rather than duplicating `Infoconex AI Flywheel` inside the banner.
- Keep the tagline on two intentional lines:
  - `A loop repeats.`
  - `A flywheel compounds.`
- Use the canonical lifecycle stage colors and icons.
- Avoid decorative arrows, chevrons, or controls that imply interactivity when the image is static.

### Section banners

Guidance:

- Target dimensions: approximately `1024 × 341` pixels.
- Target aspect ratio: approximately `3:1`.
- Target file size: approximately `150 KB` or less where practical.
- Do not repeat the page H1 or visible section title when the image is placed directly beneath that heading.
- Include image text only when it adds information not already provided by the surrounding page content.
- Do not repeat `Infoconex AI Flywheel` merely for branding when the page already identifies the project in real heading text.
- Keep composition, whitespace, typography, rounded treatment, and visual density consistent across section banners.

### Navigation icon

Current asset:

```text
docs/assets/hero.png
```

Guidance:

- Required dimensions: `64 × 64` pixels.
- Prefer a file size below `100 KB`; substantially smaller is desirable for this asset type.
- Do not rely on text at this size.
- Preserve the canonical lifecycle color order and icon meanings.
- Keep the center simple enough to remain legible at actual navigation size.

## Iconography

Use icons that are:

- Simple and immediately recognizable.
- Consistent in visual weight and level of detail.
- Flat or line-based rather than photorealistic.
- Legible at the smallest size where the asset is intended to appear.
- Semantically stable when the icon represents a lifecycle stage or canonical principle.

For lifecycle visuals, the stage-to-icon mapping in this guide is authoritative for design consistency unless the guide is deliberately revised. For principle visuals, use the canonical principle mapping above and preserve the distinction between principle identity and lifecycle-stage identity.

## Image Formats

- Use **PNG** for optimized raster banners and other generated imagery with baked text or complex visual effects.
- Prefer **SVG** for diagrams, marks, and icons when exact vector control is available and the asset can remain readable and maintainable.
- Avoid creating oversized source images when the repository only needs a smaller web-optimized presentation asset.
- Keep editable or high-resolution source material separate from the optimized repository asset when source preservation is needed.

## Accessibility and Readability

- Do not rely on color alone to communicate lifecycle stage or principle identity; retain labels or recognizable icons where space allows.
- Maintain sufficient contrast between text or icons and their backgrounds.
- Keep important text large enough to remain readable when images scale down on mobile devices.
- Avoid embedding essential explanatory text in an image when equivalent real page text can communicate it more accessibly.
- Provide meaningful Markdown alt text for informative images.
- Decorative imagery should not introduce terminology that could be mistaken for specification concepts.

## Asset Governance

Authoritative visuals must be reviewed against the current specification before they are treated as canonical.

When an asset changes lifecycle terminology, stage ordering, icon mapping, semantic colors, principle representation, conformance representation, or another methodology-level concept, update the affected visual set consistently rather than allowing competing representations to remain in the repository.

Superseded assets that visually contradict the current methodology should be removed when they are no longer referenced.

## Future Expansion

This guide begins with the established image system and current web visual tokens. Future additions may define broader conventions for:

- Documentation page composition.
- Diagram layout and Mermaid styling.
- GitHub Pages components and responsive behavior.
- Theme-specific presentation.
- Reusable design patterns and component states.
- Asset production and review workflows.
