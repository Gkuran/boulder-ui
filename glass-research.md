# Glassmorphism Research Findings

## From Hype4 Generator (the original glassmorphism creator):
- `background: rgba(255, 255, 255, 0.15)` — white with 15% opacity, NOT a dark gradient
- `backdrop-filter: blur(20px)`
- `border-radius: 20px`
- `border: 1px solid rgba(255, 255, 255, 0.3)` — border at 30% opacity, much higher than our 10%
- `box-shadow: 0 8px 32px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.5), inset 0 -1px 0 rgba(255,255,255,0.1), inset 0 0 20px 10px rgba(255,255,255,1)`
  - KEY: **inset box-shadows** create the inner glow/refraction
  - `inset 0 1px 0 rgba(255,255,255,0.5)` — top edge highlight
  - `inset 0 0 20px 10px rgba(255,255,255,1)` — inner glow (depth=10)
- `::before` pseudo — top edge gradient highlight (horizontal light streak)
- `::after` pseudo — left edge gradient highlight (vertical light streak)

## From Josh W Comeau:
- The blur algorithm only considers pixels DIRECTLY behind the element
- To get the "glow" from nearby elements, use a child element that's 200% height with mask-image
- Background opacity slider shows ~0.6 as a good value for the overlay

## Key Problems in our current implementation:
1. **Background is a DARK gradient** (`rgba(172,172,172,0.12)` to `rgba(70,70,70,0.12)`) — this darkens the glass instead of making it luminous
2. **No inset shadows** — the glass has no inner glow or refraction
3. **Border too subtle** — 10% opacity vs recommended 30%
4. **No edge highlights** — no ::before/::after pseudo-elements for light streaks
5. **Storybook background** — the mesh gradient is all very dark/desaturated colors, not enough contrast

## What we need to fix:
1. Change glass background from dark gradient to `rgba(255,255,255,0.08-0.12)` — white-based, not gray-based
2. Add inset box-shadows for inner glow
3. Increase border opacity to ~0.18-0.25
4. Add subtle edge highlights via pseudo-elements or inset shadows
5. Make Storybook background more vibrant with warmer colors (matching the Figma reference)
6. The Figma reference has warm orange/brown blobs — our mesh is cold blue/purple
