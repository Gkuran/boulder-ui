import type { Meta, StoryObj } from "@storybook/react";
import { Sidebar, SidebarHeader, SidebarContent, SidebarFooter } from "./";
import { Button } from "../Button";
import { Checkbox } from "../Checkbox";
import { Badge } from "../Badge";

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta: Meta<typeof Sidebar> = {
  title: "Layout & Navigation/Sidebar",
  component: Sidebar,
  tags: ["autodocs"],
  parameters: {
    // fullscreen layout is required to demonstrate sticky/fixed positioning
    layout: "fullscreen",
    docs: {
      description: {
        component: `
The **Sidebar** component is a fixed or sticky lateral panel designed for geospatial and scientific interfaces. It stays anchored to the viewport while the page content scrolls behind it, making it ideal for housing map layer controls, field data filters, or occurrence inspection panels.

## Overview

The Sidebar is built from four composable sub-components:

- **\`Sidebar\`** — The root container. Controls the visual variant, positioning, anchored side, and width.
- **\`SidebarHeader\`** — The top section. Typically contains the panel title and optional secondary actions.
- **\`SidebarContent\`** — The main body. Accepts a \`padding\` prop for internal spacing control.
- **\`SidebarFooter\`** — The bottom section. Typically used for primary action buttons.

## Installation

\`\`\`bash
npm install boulder-ui
\`\`\`

## Import

\`\`\`tsx
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
} from "boulder-ui";
\`\`\`

## Props

### Sidebar

| Prop | Type | Default | Description |
|---|---|---|---|
| \`variant\` | \`"default" \\| "floating"\` | \`"floating"\` | Visual style of the sidebar |
| \`position\` | \`"sticky" \\| "fixed" \\| "absolute"\` | \`"sticky"\` | CSS position behavior |
| \`side\` | \`"left" \\| "right"\` | \`"left"\` | Side of the screen to anchor to |
| \`width\` | \`CSSProperties["width"]\` | \`"280px"\` | Width of the sidebar |

### SidebarContent

| Prop | Type | Default | Description |
|---|---|---|---|
| \`padding\` | \`"none" \\| "sm" \\| "md" \\| "lg"\` | \`"md"\` | Internal padding of the content area |

All sub-components accept their respective native HTML attributes and forward \`ref\`.

## Variants

| Variant | Description | Use case |
|---|---|---|
| \`default\` | Flush to the screen edge, no border-radius | Traditional dashboard layouts |
| \`floating\` | Detached from the edge with margin, rounded corners, and shadow | Overlaying map canvases or rich backgrounds |

## Positioning

| Position | Description |
|---|---|
| \`sticky\` | Sticks to the top of the scroll container while the page scrolls behind it |
| \`fixed\` | Fixed relative to the viewport, always visible |
| \`absolute\` | Positioned relative to the nearest positioned ancestor (e.g., a map container) |

## Accessibility

- The Sidebar root renders a semantic \`<aside>\` element, which is a landmark role recognized by screen readers.
- Use \`aria-label\` on the \`Sidebar\` root to provide a descriptive name for the landmark (e.g., \`aria-label="Map layer controls"\`).
- All sub-components forward \`ref\` and spread native HTML attributes.
`,
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "floating"],
      description: "Visual style of the sidebar.",
      table: { defaultValue: { summary: "floating" } },
    },
    position: {
      control: "select",
      options: ["sticky", "fixed", "absolute"],
      description: "CSS position behavior.",
      table: { defaultValue: { summary: "sticky" } },
    },
    side: {
      control: "radio",
      options: ["left", "right"],
      description: "Side of the screen to anchor to.",
      table: { defaultValue: { summary: "left" } },
    },
    width: {
      control: "text",
      description: "Width of the sidebar. Accepts any valid CSS width value.",
      table: { defaultValue: { summary: "280px" } },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

// ─── Shared helpers ───────────────────────────────────────────────────────────

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <p
    style={{
      margin: "0 0 var(--boulder-spacing-xs) 0",
      fontSize: "var(--boulder-font-size-xs)",
      fontWeight: "var(--boulder-font-weight-semibold)",
      textTransform: "uppercase",
      letterSpacing: "0.08em",
      color: "var(--boulder-color-text-secondary)",
    }}
  >
    {children}
  </p>
);

const Divider = () => (
  <div
    style={{
      height: 1,
      background: "var(--boulder-color-border)",
      margin: "var(--boulder-spacing-sm) 0",
    }}
  />
);

// Simulates a long page content area with a map-like background
const MapPageBackground = ({
  side = "left",
  sidebarWidth = "280px",
  children,
}: {
  side?: "left" | "right";
  sidebarWidth?: string;
  children: React.ReactNode;
}) => (
  <div
    style={{
      display: "flex",
      flexDirection: side === "left" ? "row" : "row-reverse",
      width: "100%",
      height: "100vh",
      overflow: "hidden",
      background: "var(--boulder-gradient-map-light)",
    }}
  >
    {/* Sidebar slot */}
    <div style={{ flexShrink: 0, width: sidebarWidth }}>{children}</div>

    {/* Scrollable page content behind the sidebar */}
    {/* tabIndex={0} + aria-label make this scrollable region keyboard-accessible,
        satisfying the WCAG "scrollable-region-focusable" rule (axe: SC 2.1.1). */}
    <div
      tabIndex={0}
      aria-label="Map content area"
      style={{
        flex: 1,
        overflowY: "auto",
        padding: "var(--boulder-spacing-lg)",
        display: "flex",
        flexDirection: "column",
        gap: "var(--boulder-spacing-md)",
      }}
    >
      <p
        style={{
          margin: 0,
          fontSize: "var(--boulder-font-size-sm)",
          color: "var(--boulder-color-text-inverse)",
          fontWeight: "var(--boulder-font-weight-semibold)",
          opacity: 0.7,
        }}
      >
        ↕ Scroll this area — the sidebar stays fixed
      </p>
      {Array.from({ length: 20 }, (_, i) => (
        <div
          key={i}
          style={{
            background: "rgba(255,255,255,0.15)",
            borderRadius: "var(--boulder-radius-md)",
            padding: "var(--boulder-spacing-md)",
            color: "var(--boulder-color-text-inverse)",
            fontSize: "var(--boulder-font-size-sm)",
          }}
        >
          Map feature #{i + 1} — occurrence point or shapefile polygon
        </div>
      ))}
    </div>
  </div>
);

// ─── Stories ─────────────────────────────────────────────────────────────────

export const FloatingLayerControl: Story = {
  name: "Floating — Layer Control Panel",
  render: (args) => (
    <MapPageBackground side="left" sidebarWidth={String(args.width ?? "280px")}>
      <Sidebar
        {...args}
        aria-label="Map layer controls"
      >
        <SidebarHeader>
          <div>
            <p
              style={{
                margin: 0,
                fontWeight: "var(--boulder-font-weight-semibold)",
                fontSize: "var(--boulder-font-size-lg)",
              }}
            >
              Map Layers
            </p>
            <p
              style={{
                margin: 0,
                fontSize: "var(--boulder-font-size-sm)",
                color: "var(--boulder-color-text-secondary)",
              }}
            >
              Atlantic Forest · 2024
            </p>
          </div>
        </SidebarHeader>

        <SidebarContent padding="md">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "var(--boulder-spacing-md)",
            }}
          >
            <div>
              <SectionLabel>Occurrences</SectionLabel>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "var(--boulder-spacing-sm)",
                }}
              >
                <Checkbox label="Fauna occurrences" defaultChecked />
                <Checkbox label="Flora occurrences" defaultChecked />
                <Checkbox label="Soil sampling points" />
              </div>
            </div>

            <Divider />

            <div>
              <SectionLabel>Protected Areas</SectionLabel>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "var(--boulder-spacing-sm)",
                }}
              >
                <Checkbox label="Conservation Units (SNUC)" defaultChecked />
                <Checkbox label="Indigenous Territories" />
                <Checkbox label="APPs (Riparian Zones)" />
              </div>
            </div>

            <Divider />

            <div>
              <SectionLabel>Base Layers</SectionLabel>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "var(--boulder-spacing-sm)",
                }}
              >
                <Checkbox label="MapBiomas 2023" defaultChecked />
                <Checkbox label="Satellite imagery" />
                <Checkbox label="Elevation (SRTM)" />
              </div>
            </div>
          </div>
        </SidebarContent>

        <SidebarFooter>
          <Button variant="primary">Apply Layers</Button>
          <Button variant="secondary">Reset</Button>
        </SidebarFooter>
      </Sidebar>
    </MapPageBackground>
  ),
  args: {
    variant: "floating",
    position: "sticky",
    side: "left",
    width: "280px",
  },
  parameters: {
    docs: {
      description: {
        story:
          "A floating sidebar anchored to the left side of the screen. Used as a map layer control panel for toggling visibility of fauna/flora occurrences, protected areas, and base cartographic layers. The page scrolls behind it while the sidebar remains fixed.",
      },
    },
  },
};

export const DefaultOccurrenceFilter: Story = {
  name: "Default — Occurrence Filter Panel",
  render: (args) => (
    <MapPageBackground side="left" sidebarWidth={String(args.width ?? "300px")}>
      <Sidebar
        {...args}
        aria-label="Occurrence filters"
      >
        <SidebarHeader>
          <p
            style={{
              margin: 0,
              fontWeight: "var(--boulder-font-weight-semibold)",
              fontSize: "var(--boulder-font-size-lg)",
            }}
          >
            Filter Occurrences
          </p>
        </SidebarHeader>

        <SidebarContent padding="md">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "var(--boulder-spacing-md)",
            }}
          >
            <div>
              <SectionLabel>Record Type</SectionLabel>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "var(--boulder-spacing-sm)",
                }}
              >
                <Checkbox label="Fauna" defaultChecked />
                <Checkbox label="Flora" defaultChecked />
                <Checkbox label="Soil samples" />
              </div>
            </div>

            <Divider />

            <div>
              <SectionLabel>Conservation Status (IUCN)</SectionLabel>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "var(--boulder-spacing-sm)",
                }}
              >
                {[
                  { label: "Critically Endangered (CR)", variant: "danger" as const },
                  { label: "Endangered (EN)", variant: "danger" as const },
                  { label: "Vulnerable (VU)", variant: "warning" as const },
                  { label: "Least Concern (LC)", variant: "success" as const },
                ].map(({ label, variant }) => (
                  <label
                    key={label}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "var(--boulder-spacing-sm)",
                      cursor: "pointer",
                    }}
                  >
                    <input type="checkbox" defaultChecked />
                    <Badge variant={variant}>{label}</Badge>
                  </label>
                ))}
              </div>
            </div>

            <Divider />

            <div>
              <SectionLabel>Biome</SectionLabel>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "var(--boulder-spacing-sm)",
                }}
              >
                <Checkbox label="Atlantic Forest" defaultChecked />
                <Checkbox label="Amazon" />
                <Checkbox label="Cerrado" />
                <Checkbox label="Caatinga" />
                <Checkbox label="Pampa" />
                <Checkbox label="Pantanal" />
              </div>
            </div>
          </div>
        </SidebarContent>

        <SidebarFooter>
          <Button variant="primary">Apply Filters</Button>
          <Button variant="secondary">Clear All</Button>
        </SidebarFooter>
      </Sidebar>
    </MapPageBackground>
  ),
  args: {
    variant: "default",
    position: "sticky",
    side: "left",
    width: "300px",
  },
  parameters: {
    docs: {
      description: {
        story:
          "A default (flush) sidebar used as an occurrence filter panel. Allows filtering by record type (fauna, flora, soil), IUCN conservation status, and Brazilian biome. The default variant has no border-radius and is anchored flush to the screen edge.",
      },
    },
  },
};

export const RightSideInspector: Story = {
  name: "Floating Right — Record Inspector",
  render: (args) => (
    <MapPageBackground
      side="right"
      sidebarWidth={String(args.width ?? "300px")}
    >
      <Sidebar
        {...args}
        aria-label="Selected record details"
      >
        <SidebarHeader>
          <div>
            <p
              style={{
                margin: 0,
                fontWeight: "var(--boulder-font-weight-semibold)",
                fontSize: "var(--boulder-font-size-lg)",
                fontStyle: "italic",
              }}
            >
              Panthera onca
            </p>
            <p
              style={{
                margin: 0,
                fontSize: "var(--boulder-font-size-sm)",
                color: "var(--boulder-color-text-secondary)",
              }}
            >
              Jaguar · Felidae
            </p>
          </div>
          <Badge variant="danger">VU</Badge>
        </SidebarHeader>

        <SidebarContent padding="md">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "var(--boulder-spacing-sm)",
            }}
          >
            {[
              { label: "Coordinates", value: "3°42′11″ S, 60°01′34″ W" },
              { label: "Date", value: "2024-11-03" },
              { label: "Method", value: "Camera trap" },
              { label: "Biome", value: "Amazon" },
              { label: "Observer", value: "Dr. A. Ferreira" },
              { label: "Institution", value: "INPA" },
              { label: "Voucher", value: "INPA-Z 00412" },
              { label: "Data source", value: "GBIF · SpeciesLink" },
            ].map(({ label, value }) => (
              <div
                key={label}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "var(--boulder-spacing-sm)",
                  fontSize: "var(--boulder-font-size-md)",
                }}
              >
                <span style={{ color: "var(--boulder-color-text-secondary)", flexShrink: 0 }}>
                  {label}
                </span>
                <span
                  style={{
                    fontWeight: "var(--boulder-font-weight-medium)",
                    textAlign: "right",
                  }}
                >
                  {value}
                </span>
              </div>
            ))}
          </div>
        </SidebarContent>

        <SidebarFooter>
          <Button variant="primary">Open Full Record</Button>
          <Button variant="secondary">Export CSV</Button>
        </SidebarFooter>
      </Sidebar>
    </MapPageBackground>
  ),
  args: {
    variant: "floating",
    position: "sticky",
    side: "right",
    width: "300px",
  },
  parameters: {
    docs: {
      description: {
        story:
          "A floating sidebar anchored to the right side of the screen. Used as a record inspector panel that appears when the user selects an occurrence point on the map. Displays full metadata for a fauna record including coordinates, collection method, institutional voucher, and public data sources.",
      },
    },
  },
};
