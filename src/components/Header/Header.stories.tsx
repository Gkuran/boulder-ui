import type { Meta, StoryObj } from "@storybook/react";
import { Header, HeaderBrand, HeaderNav, HeaderActions } from "./";
import { Button } from "../Button";

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta: Meta<typeof Header> = {
  title: "Layout & Navigation/Header",
  component: Header,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
The **Header** component is a composable, accessible application header designed for geolocation and map-based interfaces. It provides flexible slots for branding, navigation, and action items such as map feature icons, search controls, or user menus.

## Overview

The Header is built from four composable sub-components that work together through a shared layout structure:

- **\`Header\`** — The root container. Renders a semantic \`<header>\` element with \`role="banner"\`. Defines the visual variant, position behavior, and compact mode.
- **\`HeaderBrand\`** — A slot for logos, application names, or branding elements. Rendered as a \`<div>\` on the leading side.
- **\`HeaderNav\`** — A semantic \`<nav>\` landmark for primary navigation links, tabs, or map layer selectors. Centered by default.
- **\`HeaderActions\`** — A slot for secondary actions such as feature icons (GPS, layers, search), user avatars, or action buttons. Rendered on the trailing side.

## Installation

\`\`\`bash
npm install boulder-ui
\`\`\`

## Import

\`\`\`tsx
import {
  Header,
  HeaderBrand,
  HeaderNav,
  HeaderActions,
} from "boulder-ui";
\`\`\`

## Props

### Header

| Prop | Type | Default | Description |
|---|---|---|---|
| \`variant\` | \`"default" \\| "floating" \\| "glass" \\| "transparent"\` | \`"default"\` | Visual style of the header |
| \`position\` | \`"static" \\| "sticky" \\| "fixed" \\| "absolute"\` | \`"static"\` | CSS position behavior |
| \`compact\` | \`boolean\` | \`false\` | Reduces height and padding for space-constrained layouts |
| \`className\` | \`string\` | — | Additional CSS class |

### HeaderBrand

Accepts all native \`<div>\` attributes. Requires \`children\`.

### HeaderNav

Accepts all native \`<nav>\` attributes. Provides \`aria-label\` defaulting to \`"Main navigation"\`. Requires \`children\`.

### HeaderActions

Accepts all native \`<div>\` attributes. Requires \`children\`.

## Variants

| Variant | Description | Use case |
|---|---|---|
| \`default\` | Solid background with a bottom border | Standard application headers |
| \`floating\` | Elevated surface with shadow and rounded corners | Overlaying on maps or rich backgrounds |
| \`glass\` | Warm translucent surface with blur and a soft highlight | Lightweight overlays on maps and textured backgrounds |
| \`transparent\` | No background, border, or shadow | Blending into map canvases or hero sections |

## Position

The \`position\` prop controls how the header behaves in the document flow. For map interfaces, \`absolute\` or \`fixed\` are common choices, allowing the map canvas to extend behind the header.

## Compact Mode

When \`compact\` is \`true\`, the header uses a reduced height (\`44px\` instead of \`56px\`) and smaller padding. This is ideal for map interfaces where vertical screen space is valuable.

## Accessibility

- The root element is a semantic \`<header>\` with \`role="banner"\`.
- \`HeaderNav\` renders a \`<nav>\` landmark with a configurable \`aria-label\`.
- All sub-components forward \`ref\` and spread native HTML attributes.
- Focus management and keyboard navigation are inherited from child components.

## Usage Examples

### Standard Application Header

\`\`\`tsx
<Header>
  <HeaderBrand>MapApp</HeaderBrand>
  <HeaderNav>
    <a href="/explore">Explore</a>
    <a href="/saved">Saved Places</a>
  </HeaderNav>
  <HeaderActions>
    <Button variant="secondary" size="sm">Sign In</Button>
  </HeaderActions>
</Header>
\`\`\`

### Floating Map Overlay

\`\`\`tsx
<Header variant="floating" position="absolute" compact>
  <HeaderBrand>
    <img src="/logo.svg" alt="GeoTracker" height={24} />
  </HeaderBrand>
  <HeaderActions>
    <button aria-label="Toggle layers"></button>
    <button aria-label="My location"></button>
    <button aria-label="Search"></button>
  </HeaderActions>
</Header>
\`\`\`

### Transparent Overlay

\`\`\`tsx
<Header variant="transparent" position="absolute">
  <HeaderBrand>Navigator</HeaderBrand>
  <HeaderActions>
    <Button variant="primary" size="sm">Start Route</Button>
  </HeaderActions>
</Header>
\`\`\`
`,
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "floating", "glass", "transparent"],
      description: "Visual style of the header.",
      table: { defaultValue: { summary: "default" } },
    },
    position: {
      control: "select",
      options: ["static", "sticky", "fixed", "absolute"],
      description: "CSS position behavior of the header.",
      table: { defaultValue: { summary: "static" } },
    },
    compact: {
      control: "boolean",
      description:
        "When true, the header uses a compact height with reduced padding.",
      table: { defaultValue: { summary: "false" } },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Header>;

// ─── Inline icon helpers (no external dependency) ────────────────────────────

const LayersIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 17 22 12" />
  </svg>
);

const LocateIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="4" />
    <line x1="1.05" y1="12" x2="7" y2="12" />
    <line x1="17.01" y1="12" x2="22.96" y2="12" />
    <line x1="12" y1="1" x2="12" y2="7" />
    <line x1="12" y1="17.01" x2="12" y2="22.96" />
  </svg>
);

const SearchIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const CompassIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
  </svg>
);

const MapPinIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

// ─── Shared icon button style ────────────────────────────────────────────────

const iconBtnStyle: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: 32,
  height: 32,
  border: "none",
  borderRadius: "var(--boulder-radius-sm)",
  background: "transparent",
  color: "var(--boulder-color-text)",
  cursor: "pointer",
  padding: 0,
};

const navLinkStyle: React.CSSProperties = {
  textDecoration: "none",
  color: "var(--boulder-color-text-secondary)",
  fontSize: "var(--boulder-font-size-md)",
  fontWeight: "var(--boulder-font-weight-medium)",
  padding: "var(--boulder-spacing-xs) var(--boulder-spacing-sm)",
  borderRadius: "var(--boulder-radius-sm)",
};

// ─── Stories ─────────────────────────────────────────────────────────────────

export const Default: Story = {
  name: "Default",
  render: (args) => (
    <Header {...args}>
      <HeaderBrand>
        <MapPinIcon /> Terra
      </HeaderBrand>
      <HeaderNav>
        <a href="#" style={navLinkStyle}>
          Explore
        </a>
        <a href="#" style={navLinkStyle}>
          Saved Places
        </a>
        <a href="#" style={navLinkStyle}>
          Routes
        </a>
      </HeaderNav>
      <HeaderActions>
        <button style={iconBtnStyle} aria-label="Search">
          <SearchIcon />
        </button>
        <Button variant="primary" size="sm">
          Sign In
        </Button>
      </HeaderActions>
    </Header>
  ),
  args: {
    variant: "default",
    position: "static",
    compact: false,
  },
};

export const FloatingMapOverlay: Story = {
  name: "Floating — Map Overlay",
  render: (args) => (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: 300,
        background: "var(--boulder-gradient-map-light)",
        borderRadius: "var(--boulder-radius-md)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header {...args}>
        <HeaderBrand>
          <CompassIcon /> Terra
        </HeaderBrand>
        <HeaderActions>
          <button style={iconBtnStyle} aria-label="Toggle layers">
            <LayersIcon />
          </button>
          <button style={iconBtnStyle} aria-label="My location">
            <LocateIcon />
          </button>
          <button style={iconBtnStyle} aria-label="Search">
            <SearchIcon />
          </button>
        </HeaderActions>
      </Header>
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "var(--boulder-color-text-secondary)",
          opacity: 0.4,
          fontWeight: "var(--boulder-font-weight-bold)",
        }}
      >
        MAP CANVAS SIMULATION
      </div>
    </div>
  ),
  args: {
    variant: "floating",
    position: "static",
    compact: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          'A floating header overlaying a map canvas. Uses `variant="floating"` and `compact` mode to minimize vertical space usage. In a real map application, you might use `position="absolute"` to overlay it on the canvas.',
      },
    },
  },
};

export const GlassMapOverlay: Story = {
  name: "Glass Overlay",
  render: (args) => (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: 300,
        borderRadius: "var(--boulder-radius-md)",
        overflow: "hidden",
        background:
          "linear-gradient(135deg, #5f7f6b 0%, #89a882 35%, #d6c58a 68%, #f4efe0 100%)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header {...args}>
        <HeaderBrand>
          <CompassIcon /> Terra
        </HeaderBrand>
        <HeaderNav aria-label="Map modes">
          <a href="#" style={navLinkStyle}>
            Terrain
          </a>
          <a href="#" style={navLinkStyle}>
            Mosaic
          </a>
          <a href="#" style={navLinkStyle}>
            Boundaries
          </a>
        </HeaderNav>
        <HeaderActions>
          <button style={iconBtnStyle} aria-label="Toggle layers">
            <LayersIcon />
          </button>
          <button style={iconBtnStyle} aria-label="Search">
            <SearchIcon />
          </button>
        </HeaderActions>
      </Header>
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "rgba(26, 26, 26, 0.46)",
          fontWeight: "var(--boulder-font-weight-bold)",
          letterSpacing: "0.08em",
        }}
      >
        TEXTURED MAP BACKGROUND
      </div>
    </div>
  ),
  args: {
    variant: "glass",
    position: "static",
    compact: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "A glass header variant using Boulder-derived translucent tokens, subtle blur, and a restrained highlight. Intended for map and media overlays where the header should stay legible without feeling heavy.",
      },
    },
  },
};

export const TransparentOverlay: Story = {
  name: "Transparent — Map Overlay",
  render: (args) => (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: 300,
        background: "var(--boulder-gradient-map-dark)",
        borderRadius: "var(--boulder-radius-md)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header {...args} style={{ color: "var(--boulder-color-text-inverse)" }}>
        <HeaderBrand>
          <MapPinIcon /> Terra
        </HeaderBrand>
        <HeaderNav aria-label="Map navigation">
          <a
            href="#"
            style={{
              ...navLinkStyle,
              color: "var(--boulder-color-text-inverse)",
              opacity: 0.8,
            }}
          >
            Fauna
          </a>
          <a
            href="#"
            style={{
              ...navLinkStyle,
              color: "var(--boulder-color-text-inverse)",
              opacity: 0.8,
            }}
          >
            Flora
          </a>
          <a
            href="#"
            style={{
              ...navLinkStyle,
              color: "var(--boulder-color-text-inverse)",
              opacity: 0.8,
            }}
          >
            Solo
          </a>
        </HeaderNav>
        <HeaderActions>
          <Button variant="primary" size="sm">
            Export
          </Button>
        </HeaderActions>
      </Header>
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "var(--boulder-color-text-inverse)",
          opacity: 0.2,
          fontWeight: "var(--boulder-font-weight-bold)",
        }}
      >
        SATELLITE MAP SIMULATION
      </div>
    </div>
  ),
  args: {
    variant: "transparent",
    position: "static",
    compact: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          'A transparent header that blends into a dark map background. Navigation items act as map view mode selectors (Satellite, Terrain, Traffic). In a real map application, you might use `position="absolute"` to overlay it on the canvas.',
      },
    },
  },
};

export const Compact: Story = {
  name: "Compact Mode",
  render: (args) => (
    <Header {...args}>
      <HeaderBrand>
        <CompassIcon /> Terra
      </HeaderBrand>
      <HeaderActions>
        <button style={iconBtnStyle} aria-label="Toggle layers">
          <LayersIcon />
        </button>
        <button style={iconBtnStyle} aria-label="My location">
          <LocateIcon />
        </button>
        <button style={iconBtnStyle} aria-label="Search">
          <SearchIcon />
        </button>
      </HeaderActions>
    </Header>
  ),
  args: {
    variant: "default",
    position: "static",
    compact: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Compact mode reduces the header height to 44px and uses smaller padding. Ideal for map interfaces where vertical space is at a premium.",
      },
    },
  },
};

export const BrandOnly: Story = {
  name: "Brand Only",
  render: (args) => (
    <Header {...args}>
      <HeaderBrand>
        <MapPinIcon /> Terra
      </HeaderBrand>
    </Header>
  ),
  args: {
    variant: "default",
    position: "static",
    compact: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          "A minimal header with only the brand slot populated. Sub-components are optional — use only what you need.",
      },
    },
  },
};

export const WithFeatureIcons: Story = {
  name: "Feature Icons — Geolocation",
  render: (args) => (
    <Header {...args}>
      <HeaderBrand>
        <CompassIcon /> Terra
      </HeaderBrand>
      <HeaderNav aria-label="Map features">
        <button style={iconBtnStyle} aria-label="Layers">
          <LayersIcon />
        </button>
        <button style={iconBtnStyle} aria-label="Compass">
          <CompassIcon />
        </button>
        <button style={iconBtnStyle} aria-label="Locate me">
          <LocateIcon />
        </button>
        <button style={iconBtnStyle} aria-label="Search area">
          <SearchIcon />
        </button>
      </HeaderNav>
      <HeaderActions>
        <Button variant="secondary" size="sm">
          Export
        </Button>
        <Button variant="primary" size="sm">
          New Pin
        </Button>
      </HeaderActions>
    </Header>
  ),
  args: {
    variant: "default",
    position: "static",
    compact: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Demonstrates using the `HeaderNav` slot for map feature icons instead of traditional text links. Each icon button includes an `aria-label` for accessibility. The actions slot holds primary CTA buttons.",
      },
    },
  },
};
