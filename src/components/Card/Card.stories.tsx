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
  title: "Data Display/Card",
  component: Card,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
The **Card** component is a flexible, composable container for grouping related information. It is designed to serve as a surface for displaying structured content such as species records, soil sample data, shapefile metadata, or any scientific data panel in geospatial field research interfaces.

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
| \`variant\` | \`"default" \\| "elevated" \\| "glass" \\| "outlined" \\| "transparent"\` | \`"default"\` | Visual style of the card |
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
| \`default\` | Surface background with a subtle border | Standard data panels and record cards |
| \`elevated\` | Adds a drop shadow for depth | Floating info panels over map canvases |
| \`glass\` | Warm translucent surface with blur and a soft highlight | Lightweight overlays on maps, imagery, and textured backgrounds |
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
      options: ["default", "elevated", "glass", "outlined", "transparent"],
      description: "Visual style of the card.",
      table: { defaultValue: { summary: "default" } },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

// ─── Shared icon helpers ──────────────────────────────────────────────────────

const LeafIcon = () => (
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
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
  </svg>
);

const FlaskIcon = () => (
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
    <path d="M9 3h6l1 9H8L9 3z" />
    <path d="M6.5 14c-1.5 2-2.5 3.5-2.5 5a5 5 0 0 0 10 0c0-1.5-1-3-2.5-5" />
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

const CalendarIcon = () => (
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
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const CoordIcon = () => (
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
    <circle cx="12" cy="12" r="4" />
    <line x1="1.05" y1="12" x2="7" y2="12" />
    <line x1="17.01" y1="12" x2="22.96" y2="12" />
    <line x1="12" y1="1.05" x2="12" y2="7" />
    <line x1="12" y1="17.01" x2="12" y2="22.96" />
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

const dataRowStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  fontSize: "var(--boulder-font-size-md)",
};

// ─── Stories ─────────────────────────────────────────────────────────────────

export const Default: Story = {
  name: "Default — Flora Record",
  render: (args) => (
    <div style={{ maxWidth: 360 }}>
      <Card {...args}>
        <CardHeader>
          <div>
            <CardTitle>Araucaria angustifolia</CardTitle>
            <CardDescription>Pinheiro-do-Paraná · Araucariaceae</CardDescription>
          </div>
          <Badge variant="danger">Endangered</Badge>
        </CardHeader>
        <CardContent>
          <p style={{ margin: 0, fontSize: "var(--boulder-font-size-md)", lineHeight: "var(--boulder-line-height-md)" }}>
            Coniferous tree endemic to the Atlantic Forest biome. Recorded at 1,240 m elevation in the Serra Gaúcha region. Specimen confirmed by morphological analysis.
          </p>
        </CardContent>
        <CardFooter>
          <Button variant="secondary" size="sm">View on Map</Button>
          <Button variant="primary" size="sm">Open Record</Button>
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
          "A flora occurrence record card displaying a species name, family classification, conservation status, and a brief field observation note.",
      },
    },
  },
};

export const Elevated: Story = {
  name: "Elevated — Map Info Panel",
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
      <div style={{ width: 280 }}>
        <Card {...args}>
          <CardHeader>
            <div style={{ display: "flex", alignItems: "center", gap: "var(--boulder-spacing-xs)" }}>
              <LayersIcon />
              <CardTitle as="h4">Active Layers</CardTitle>
            </div>
          </CardHeader>
          <CardContent padding="sm">
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--boulder-spacing-sm)" }}>
              {[
                { label: "Flora occurrences", checked: true },
                { label: "Fauna occurrences", checked: true },
                { label: "Soil sampling points", checked: false },
                { label: "Protected areas (SNUC)", checked: true },
              ].map(({ label, checked }) => (
                <label
                  key={label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "var(--boulder-spacing-sm)",
                    fontSize: "var(--boulder-font-size-md)",
                    cursor: "pointer",
                  }}
                >
                  <input type="checkbox" defaultChecked={checked} />
                  {label}
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
          "An elevated card used as a floating layer control panel over a field map. Allows toggling visibility of scientific data layers such as species occurrences, soil sampling points, and protected area boundaries.",
      },
    },
  },
};

export const GlassOverlay: Story = {
  name: "Glass Overlay",
  render: (args) => (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: 320,
        borderRadius: "var(--boulder-radius-md)",
        overflow: "hidden",
        background:
          "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.24), transparent 28%), linear-gradient(135deg, #6f8f7b 0%, #9ab78e 38%, #d8c88f 72%, #ece7d1 100%)",
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "flex-start",
        padding: "var(--boulder-spacing-lg)",
        boxSizing: "border-box",
      }}
    >
      <div style={{ width: 320 }}>
        <Card {...args}>
          <CardHeader>
            <div>
              <CardTitle as="h4">Sampling Window</CardTitle>
              <CardDescription>Wet season mosaic over textured terrain</CardDescription>
            </div>
            <Badge variant="default">Live</Badge>
          </CardHeader>
          <CardContent>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--boulder-spacing-sm)" }}>
              <div style={metaRowStyle}>
                <CoordIcon />
                <span>Tile 18S · Serra do Cipó</span>
              </div>
              <div style={metaRowStyle}>
                <CalendarIcon />
                <span>Cloud cover 12% · Updated 08:42</span>
              </div>
              <div
                style={{
                  padding: "var(--boulder-spacing-sm)",
                  borderRadius: "var(--boulder-radius-sm)",
                  background: "var(--boulder-color-background-glass-subtle)",
                }}
              >
                Warm-tinted translucency keeps the original Boulder surface identity while softening contrast over imagery.
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  ),
  args: {
    variant: "glass",
  },
  parameters: {
    docs: {
      description: {
        story:
          "A subtle glass card overlay rendered over a textured map-like background. The surface keeps Boulder warm tones, adds restrained blur, and uses a light highlight instead of a cold frosted treatment.",
      },
    },
  },
};

export const SoilSampleDetails: Story = {
  name: "Soil Sample Details",
  render: (args) => (
    <div style={{ maxWidth: 380 }}>
      <Card {...args}>
        <CardHeader>
          <div>
            <CardTitle as="h2">Sample SS-047</CardTitle>
            <CardDescription>Collected 2024-09-12 · Cerrado biome</CardDescription>
          </div>
          <Badge variant="default">Analyzed</Badge>
        </CardHeader>
        <CardContent>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--boulder-spacing-sm)" }}>
            <div style={metaRowStyle}>
              <CoordIcon />
              <span>15°32′14″ S, 47°45′08″ W</span>
            </div>
            <div style={metaRowStyle}>
              <CalendarIcon />
              <span>Depth: 0–20 cm · Horizon A</span>
            </div>
            <div style={dividerStyle} />
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--boulder-spacing-xs)" }}>
              {[
                { label: "pH (H₂O)", value: "5.8" },
                { label: "Organic Carbon", value: "2.4 g/kg" },
                { label: "Clay content", value: "38%" },
                { label: "CEC", value: "12.3 cmolc/kg" },
              ].map(({ label, value }) => (
                <div key={label} style={dataRowStyle}>
                  <span style={{ color: "var(--boulder-color-text-secondary)" }}>{label}</span>
                  <span style={{ fontWeight: "var(--boulder-font-weight-medium)" }}>{value}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="secondary" size="sm">Export CSV</Button>
          <Button variant="primary" size="sm">Full Report</Button>
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
          "A soil sample record card displaying collection metadata (coordinates, date, depth, horizon) alongside key physicochemical analysis results such as pH, organic carbon, clay content, and cation exchange capacity (CEC).",
      },
    },
  },
};

export const Outlined: Story = {
  name: "Outlined — Shapefile Metadata",
  render: (args) => (
    <div style={{ maxWidth: 360 }}>
      <Card {...args}>
        <CardHeader>
          <div style={{ display: "flex", alignItems: "center", gap: "var(--boulder-spacing-xs)" }}>
            <LayersIcon />
            <CardTitle as="h4">atlantic_forest_remnants.shp</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--boulder-spacing-xs)" }}>
            {[
              { label: "Geometry", value: "Polygon" },
              { label: "CRS", value: "SIRGAS 2000 / UTM 23S" },
              { label: "Features", value: "14,382" },
              { label: "Source", value: "MapBiomas 2023" },
              { label: "Area", value: "1,290,692 ha" },
            ].map(({ label, value }) => (
              <div key={label} style={dataRowStyle}>
                <span style={{ color: "var(--boulder-color-text-secondary)" }}>{label}</span>
                <span style={{ fontWeight: "var(--boulder-font-weight-medium)" }}>{value}</span>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="secondary" size="sm">Preview</Button>
          <Button variant="primary" size="sm">Load Layer</Button>
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
          "An outlined card displaying shapefile metadata: geometry type, coordinate reference system (CRS), feature count, data source, and total area. Suitable for a file browser or layer import panel.",
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

export const OccurrenceList: Story = {
  name: "Occurrence Record List",
  render: (args) => {
    const records = [
      { name: "Panthera onca", common: "Jaguar", type: "Fauna", date: "2024-11-03", status: "Vulnerable" },
      { name: "Cattleya labiata", common: "Laelia orchid", type: "Flora", date: "2024-10-18", status: "Least Concern" },
      { name: "Tapirus terrestris", common: "Lowland tapir", type: "Fauna", date: "2024-09-27", status: "Vulnerable" },
    ];

    const statusVariant = (status: string): "danger" | "success" | "default" => {
      if (status === "Vulnerable") return "danger";
      if (status === "Least Concern") return "success";
      return "default";
    };

    return (
      <div style={{ maxWidth: 420, display: "flex", flexDirection: "column", gap: "var(--boulder-spacing-sm)" }}>
        {records.map((rec) => (
          <Card key={rec.name} {...args}>
            <CardContent padding="sm">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "var(--boulder-spacing-sm)" }}>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{ margin: 0, fontWeight: "var(--boulder-font-weight-semibold)", fontSize: "var(--boulder-font-size-md)", fontStyle: "italic", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                    {rec.name}
                  </p>
                  <p style={{ margin: "var(--boulder-spacing-xs) 0 0", fontSize: "var(--boulder-font-size-sm)", color: "var(--boulder-color-text-secondary)" }}>
                    {rec.common} · {rec.type}
                  </p>
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "var(--boulder-spacing-xs)", flexShrink: 0 }}>
                  <Badge variant={statusVariant(rec.status)}>{rec.status}</Badge>
                  <span style={{ fontSize: "var(--boulder-font-size-xs)", color: "var(--boulder-color-text-secondary)" }}>
                    {rec.date}
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
          "Cards used as occurrence record items in a list. Each card displays the scientific name (italicized), common name, type (Fauna/Flora), collection date, and IUCN conservation status. Demonstrates composing the `Badge` component inside a `Card` for status indication.",
      },
    },
  },
};

export const FaunaRecord: Story = {
  name: "Fauna Record Detail",
  render: (args) => (
    <div style={{ maxWidth: 380 }}>
      <Card {...args}>
        <CardHeader>
          <div>
            <CardTitle as="h2">Panthera onca</CardTitle>
            <CardDescription>Jaguar · Felidae · Order Carnivora</CardDescription>
          </div>
          <Badge variant="danger">Vulnerable</Badge>
        </CardHeader>
        <CardContent>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--boulder-spacing-sm)" }}>
            <div style={metaRowStyle}>
              <CoordIcon />
              <span>3°42′11″ S, 60°01′34″ W</span>
            </div>
            <div style={metaRowStyle}>
              <CalendarIcon />
              <span>Recorded: 2024-11-03 · Camera trap</span>
            </div>
            <div style={metaRowStyle}>
              <LeafIcon />
              <span>Biome: Amazon · Habitat: Dense forest</span>
            </div>
            <div style={dividerStyle} />
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--boulder-spacing-xs)" }}>
              {[
                { label: "Observer", value: "Dr. A. Ferreira" },
                { label: "Institution", value: "INPA" },
                { label: "Voucher", value: "INPA-Z 00412" },
                { label: "Data source", value: "GBIF · SpeciesLink" },
              ].map(({ label, value }) => (
                <div key={label} style={dataRowStyle}>
                  <span style={{ color: "var(--boulder-color-text-secondary)" }}>{label}</span>
                  <span style={{ fontWeight: "var(--boulder-font-weight-medium)" }}>{value}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="secondary" size="sm">
            <span style={{ display: "flex", alignItems: "center", gap: "var(--boulder-spacing-xs)" }}>
              <FlaskIcon /> Lab Data
            </span>
          </Button>
          <Button variant="primary" size="sm">Open Record</Button>
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
          "A detailed fauna occurrence record card. Displays the scientific name, taxonomy, IUCN status, geolocation, collection method, biome, observer information, institutional voucher, and public data sources (GBIF, SpeciesLink).",
      },
    },
  },
};
