import type { Meta, StoryObj } from "@storybook/react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./";
import { Button } from "../Button";
import { Badge } from "../Badge";

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
The **Card** component is a flexible, composable container for grouping related information. It is designed to serve as a surface for displaying structured content such as place details, map layer controls, search results, or any data panel in geolocation-based interfaces.

## Overview

The Card is built from six composable sub-components:

- **\`Card\`** — The root container. Controls the visual variant, border, shadow, and layout.
- **\`CardHeader\`** — The top section. Typically contains the title, description, and optional secondary actions (e.g., a close button).
- **\`CardTitle\`** — A semantic heading element. Accepts an \`as\` prop to configure the heading level (\`h1\`–\`h6\`) for correct page hierarchy.
- **\`CardDescription\`** — A secondary text element rendered below the title, styled as muted body text.
- **\`CardContent\`** — The main body of the card. Accepts a \`padding\` prop to control internal spacing.
- **\`CardFooter\`** — The bottom section. Typically used for primary action buttons or metadata.

## Installation

\`\`\`bash
npm install boulder-ui
\`\`\`

## Import

\`\`\`tsx
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "boulder-ui";
\`\`\`

## Props

### Card

| Prop | Type | Default | Description |
|---|---|---|---|
| \`variant\` | \`"default" \\| "elevated" \\| "outlined" \\| "transparent"\` | \`"default"\` | Visual style of the card |
| \`className\` | \`string\` | — | Additional CSS class |

### CardTitle

| Prop | Type | Default | Description |
|---|---|---|---|
| \`as\` | \`"h1" \\| "h2" \\| "h3" \\| "h4" \\| "h5" \\| "h6"\` | \`"h3"\` | HTML heading element to render |

### CardContent

| Prop | Type | Default | Description |
|---|---|---|---|
| \`padding\` | \`"none" \\| "sm" \\| "md" \\| "lg"\` | \`"md"\` | Internal padding of the content area |

All sub-components accept their respective native HTML attributes and forward \`ref\`.

## Variants

| Variant | Description | Use case |
|---|---|---|
| \`default\` | Surface background with a subtle border | Standard data panels and result cards |
| \`elevated\` | Adds a drop shadow for depth | Floating widgets over map canvases |
| \`outlined\` | Transparent background with a border | Subtle containers on light backgrounds |
| \`transparent\` | No background, border, or shadow | Embedding in rich or colored backgrounds |

## Accessibility

- \`CardTitle\` renders a semantic heading element. Use the \`as\` prop to match the heading hierarchy of the page.
- The composable structure allows consumers to add \`role="region"\` and \`aria-labelledby\` to the \`Card\` root when it represents a distinct landmark.
- All sub-components forward \`ref\` and spread native HTML attributes.
`,
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "elevated", "outlined", "transparent"],
      description: "Visual style of the card.",
      table: { defaultValue: { summary: "default" } },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

// ─── Shared icon helpers ──────────────────────────────────────────────────────

const MapPinIcon = () => (
  <svg
    width="16"
    height="16"
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

const ClockIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const LayersIcon = () => (
  <svg
    width="16"
    height="16"
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
    <polyline points="2 12 12 17 22 12" />
  </svg>
);

const NavigationIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <polygon points="3 11 22 2 13 21 11 13 3 11" />
  </svg>
);

// ─── Shared styles ────────────────────────────────────────────────────────────

const metaRowStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "var(--boulder-spacing-xs)",
  fontSize: "var(--boulder-font-size-sm)",
  color: "var(--boulder-color-text-secondary)",
};

const dividerStyle: React.CSSProperties = {
  height: 1,
  background: "var(--boulder-color-border)",
  margin: "0",
};

// ─── Stories ─────────────────────────────────────────────────────────────────

export const Default: Story = {
  name: "Default",
  render: (args) => (
    <div style={{ maxWidth: 360 }}>
      <Card {...args}>
        <CardHeader>
          <div>
            <CardTitle>Central Park</CardTitle>
            <CardDescription>New York, NY — 843 acres</CardDescription>
          </div>
          <Badge variant="success">Open</Badge>
        </CardHeader>
        <CardContent>
          <p style={{ margin: 0, fontSize: "var(--boulder-font-size-md)", lineHeight: "var(--boulder-line-height-md)" }}>
            A large public urban park in the center of Manhattan, offering walking trails, lakes, and recreational areas.
          </p>
        </CardContent>
        <CardFooter>
          <Button variant="secondary" size="sm">Save Place</Button>
          <Button variant="primary" size="sm">Get Directions</Button>
        </CardFooter>
      </Card>
    </div>
  ),
  args: {
    variant: "default",
  },
};

export const Elevated: Story = {
  name: "Elevated — Map Widget",
  render: (args) => (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: 320,
        background: "var(--boulder-gradient-map-light)",
        borderRadius: "var(--boulder-radius-md)",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "flex-end",
        padding: "var(--boulder-spacing-md)",
        boxSizing: "border-box",
      }}
    >
      <div style={{ width: 260 }}>
        <Card {...args}>
          <CardHeader>
            <div style={{ display: "flex", alignItems: "center", gap: "var(--boulder-spacing-xs)" }}>
              <LayersIcon />
              <CardTitle as="h4">Map Layers</CardTitle>
            </div>
          </CardHeader>
          <CardContent padding="sm">
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--boulder-spacing-sm)" }}>
              {["Satellite View", "Traffic", "Transit", "Terrain"].map((layer) => (
                <label
                  key={layer}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "var(--boulder-spacing-sm)",
                    fontSize: "var(--boulder-font-size-md)",
                    cursor: "pointer",
                  }}
                >
                  <input type="checkbox" defaultChecked={layer === "Satellite View"} />
                  {layer}
                </label>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  ),
  args: {
    variant: "elevated",
  },
  parameters: {
    docs: {
      description: {
        story:
          "An elevated card used as a floating map layer control widget. The `elevated` variant adds a drop shadow to create depth over the map canvas.",
      },
    },
  },
};

export const PlaceDetails: Story = {
  name: "Place Details Panel",
  render: (args) => (
    <div style={{ maxWidth: 380 }}>
      <Card {...args}>
        <CardHeader>
          <div>
            <CardTitle as="h2">Eiffel Tower</CardTitle>
            <CardDescription>Champ de Mars, Paris, France</CardDescription>
          </div>
          <Badge variant="default">Landmark</Badge>
        </CardHeader>
        <CardContent>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--boulder-spacing-sm)" }}>
            <div style={metaRowStyle}>
              <MapPinIcon />
              <span>48.8584° N, 2.2945° E</span>
            </div>
            <div style={metaRowStyle}>
              <ClockIcon />
              <span>Open · Closes at 11:45 PM</span>
            </div>
            <div style={dividerStyle} />
            <p style={{ margin: 0, fontSize: "var(--boulder-font-size-md)", lineHeight: "var(--boulder-line-height-md)", color: "var(--boulder-color-text-secondary)" }}>
              Wrought-iron lattice tower on the Champ de Mars, built as the centerpiece of the 1889 World's Fair.
            </p>
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="secondary" size="sm">Share</Button>
          <Button variant="primary" size="sm">
            <span style={{ display: "flex", alignItems: "center", gap: "var(--boulder-spacing-xs)" }}>
              <NavigationIcon /> Navigate
            </span>
          </Button>
        </CardFooter>
      </Card>
    </div>
  ),
  args: {
    variant: "default",
  },
  parameters: {
    docs: {
      description: {
        story:
          "A detailed place information panel with coordinates, status, and description. Demonstrates combining `CardHeader`, `CardContent`, and `CardFooter` to build a rich data surface.",
      },
    },
  },
};

export const Outlined: Story = {
  name: "Outlined",
  render: (args) => (
    <div style={{ maxWidth: 360 }}>
      <Card {...args}>
        <CardHeader>
          <CardTitle as="h4">Route Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--boulder-spacing-sm)" }}>
            {[
              { label: "Distance", value: "12.4 km" },
              { label: "Duration", value: "18 min" },
              { label: "Via", value: "A-1 Highway" },
            ].map(({ label, value }) => (
              <div
                key={label}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "var(--boulder-font-size-md)",
                }}
              >
                <span style={{ color: "var(--boulder-color-text-secondary)" }}>{label}</span>
                <span style={{ fontWeight: "var(--boulder-font-weight-medium)" }}>{value}</span>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="primary" size="sm">Start Navigation</Button>
        </CardFooter>
      </Card>
    </div>
  ),
  args: {
    variant: "outlined",
  },
  parameters: {
    docs: {
      description: {
        story:
          "An outlined card used to display a route summary. The transparent background with a border makes it suitable for use on light or subtle backgrounds.",
      },
    },
  },
};

export const ContentOnly: Story = {
  name: "Content Only",
  render: (args) => (
    <div style={{ maxWidth: 320 }}>
      <Card {...args}>
        <CardContent>
          <p style={{ margin: 0, fontSize: "var(--boulder-font-size-md)", lineHeight: "var(--boulder-line-height-md)" }}>
            All sub-components are optional. A card can be composed with only a
            content area when no header or footer is needed.
          </p>
        </CardContent>
      </Card>
    </div>
  ),
  args: {
    variant: "default",
  },
  parameters: {
    docs: {
      description: {
        story:
          "A minimal card with only the `CardContent` slot. Sub-components are fully optional — compose only what you need.",
      },
    },
  },
};

export const SearchResult: Story = {
  name: "Search Result List",
  render: (args) => {
    const results = [
      { name: "Louvre Museum", address: "Rue de Rivoli, Paris", distance: "0.8 km", open: true },
      { name: "Notre-Dame Cathedral", address: "Île de la Cité, Paris", distance: "1.2 km", open: false },
      { name: "Musée d'Orsay", address: "Rue de la Légion d'Honneur", distance: "1.9 km", open: true },
    ];

    return (
      <div style={{ maxWidth: 400, display: "flex", flexDirection: "column", gap: "var(--boulder-spacing-sm)" }}>
        {results.map((place) => (
          <Card key={place.name} {...args}>
            <CardContent padding="sm">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "var(--boulder-spacing-sm)" }}>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{ margin: 0, fontWeight: "var(--boulder-font-weight-semibold)", fontSize: "var(--boulder-font-size-md)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                    {place.name}
                  </p>
                  <p style={{ margin: "var(--boulder-spacing-xs) 0 0", fontSize: "var(--boulder-font-size-sm)", color: "var(--boulder-color-text-secondary)" }}>
                    {place.address}
                  </p>
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "var(--boulder-spacing-xs)", flexShrink: 0 }}>
                  <Badge variant={place.open ? "success" : "danger"}>
                    {place.open ? "Open" : "Closed"}
                  </Badge>
                  <span style={{ fontSize: "var(--boulder-font-size-xs)", color: "var(--boulder-color-text-secondary)" }}>
                    {place.distance}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  },
  args: {
    variant: "default",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Cards used as search result items in a list. Each card uses only `CardContent` with `padding=\"sm\"` for a compact layout. Demonstrates composing the `Badge` component inside a `Card`.",
      },
    },
  },
};
