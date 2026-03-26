# Header Component Architecture Plan

## Overview
The `Header` component is designed for applications involving geolocation and maps. It needs to be flexible, composable, and accessible, following the Boulder UI design system principles.

## Composition Strategy
Instead of a monolithic component with many props, we will use a compound component pattern (similar to `Accordion`). This allows consumers to place branding, navigation, and actions (like map feature icons) exactly where they need them.

### Sub-components
1. **`Header`**: The root container. Defines the overall layout (flexbox), height, and visual variant (e.g., solid background vs. transparent/floating for maps).
2. **`HeaderBrand`**: Container for logos or application titles.
3. **`HeaderNav`**: Container for primary navigation links or tabs.
4. **`HeaderActions`**: Container for secondary actions, user profile, or map-specific feature icons (e.g., layers, GPS locate, search).

## API Design (Props)

### `HeaderProps`
- `variant`: `"default" | "floating" | "transparent"`. 
  - `default`: Solid background with a bottom border.
  - `floating`: Elevated with a shadow, rounded corners, and margins (useful for overlaying on a map).
  - `transparent`: No background or border, useful for custom map overlays.
- `position`: `"static" | "sticky" | "fixed" | "absolute"`. Default: `"static"`.
- `children`: `ReactNode`.

### `HeaderBrandProps`
- `children`: `ReactNode`.

### `HeaderNavProps`
- `children`: `ReactNode`.

### `HeaderActionsProps`
- `children`: `ReactNode`.

## Styling (CSS Modules & Tokens)
- Use existing tokens for spacing (`--boulder-spacing-md`), colors (`--boulder-color-surface`, `--boulder-color-border`), and typography.
- The `floating` variant will use a new or existing shadow token and `--boulder-radius-md`.
- Flexbox will be used to distribute space (e.g., `justify-content: space-between`).

## Accessibility
- The root `Header` will render as a `<header>` element with `role="banner"`.
- `HeaderNav` will render as a `<nav>` element with an appropriate `aria-label`.
- Ensure sufficient color contrast for text and icons.

## Storybook Documentation
- Create `Header.stories.tsx` with examples:
  - Default layout (Brand + Nav + Actions).
  - Map overlay example (Floating variant with feature icons).
  - Transparent variant.
- Write documentation in English, emphasizing composability and the font-agnostic nature of the library.
