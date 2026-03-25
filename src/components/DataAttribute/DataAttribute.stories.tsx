import type { Meta, StoryObj } from "@storybook/react";
import { DataAttribute } from "./";
import { Badge } from "../Badge";
import { Card, CardHeader, CardTitle, CardContent } from "../Card";

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta: Meta<typeof DataAttribute> = {
  title: "Components/DataAttribute",
  component: DataAttribute,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: `
The **DataAttribute** component displays a single key-value pair in a consistent, readable format. It is the building block for presenting scientific metadata such as species records, soil sample results, and shapefile properties.

## Overview

Rather than recreating \`display: flex; justify-content: space-between\` manually every time a label-value pair is needed, \`DataAttribute\` encapsulates that pattern with built-in support for:

- **Orientation**: horizontal (side-by-side) or vertical (stacked).
- **Fallback**: graceful handling of absent or null values.
- **Rich values**: the \`value\` prop accepts any \`ReactNode\`, enabling badges, italic scientific names, or links.
- **Truncation**: optional ellipsis for long values in constrained containers.

## Installation

\`\`\`bash
npm install boulder-ui
\`\`\`

## Import

\`\`\`tsx
import { DataAttribute } from "boulder-ui";
\`\`\`

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| \`label\` | \`ReactNode\` | **Required** | The attribute name or label |
| \`value\` | \`ReactNode\` | **Required** | The attribute value. Accepts rich content |
| \`orientation\` | \`"horizontal" \\| "vertical"\` | \`"horizontal"\` | Layout direction |
| \`align\` | \`"between" \\| "left"\` | \`"between"\` | Horizontal alignment (horizontal only) |
| \`fallback\` | \`string\` | \`"N/A"\` | Text shown when value is null, undefined, or empty |
| \`truncate\` | \`boolean\` | \`false\` | Applies ellipsis to long values |

## Accessibility

The component renders a \`<div>\` with two \`<span>\` children. For lists of attributes, consider wrapping multiple \`DataAttribute\` instances in a \`<dl>\` (description list) element and passing \`as="dt"\` and \`as="dd"\` semantics through the label and value slots. The current implementation uses neutral \`div/span\` to remain layout-agnostic.
`,
      },
    },
  },
  argTypes: {
    label: { control: "text" },
    value: { control: "text" },
    orientation: {
      control: "radio",
      options: ["horizontal", "vertical"],
      table: { defaultValue: { summary: "horizontal" } },
    },
    align: {
      control: "radio",
      options: ["between", "left"],
      table: { defaultValue: { summary: "between" } },
    },
    fallback: {
      control: "text",
      table: { defaultValue: { summary: "N/A" } },
    },
    truncate: {
      control: "boolean",
      table: { defaultValue: { summary: "false" } },
    },
  },
};

export default meta;
type Story = StoryObj<typeof DataAttribute>;

// ─── Shared helpers ───────────────────────────────────────────────────────────

const AttributeGroup = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--boulder-spacing-sm)",
      width: "100%",
    }}
  >
    {children}
  </div>
);

const Divider = () => (
  <div
    style={{
      height: 1,
      background: "var(--boulder-color-border)",
      margin: "var(--boulder-spacing-xs) 0",
    }}
  />
);

// ─── Stories ─────────────────────────────────────────────────────────────────

export const Default: Story = {
  name: "Default — Horizontal",
  args: {
    label: "Coordinates",
    value: "3°42′11″ S, 60°01′34″ W",
    orientation: "horizontal",
    align: "between",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Default horizontal layout with `align='between'`. The label is left-aligned and the value is pushed to the right edge. Ideal for compact panels.",
      },
    },
  },
};

export const Vertical: Story = {
  name: "Vertical — Field Notes",
  args: {
    label: "Field Notes",
    value:
      "Individual observed near the riverbank exhibiting foraging behavior. Estimated age: adult. No signs of injury. Habitat: dense riparian forest with bamboo understory.",
    orientation: "vertical",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Vertical layout for longer text values such as field notes, habitat descriptions, or collection remarks. The value wraps naturally below the label.",
      },
    },
  },
};

export const WithFallback: Story = {
  name: "Fallback — Absent Value",
  args: {
    label: "Institutional Voucher",
    value: null,
    fallback: "Not collected",
  },
  parameters: {
    docs: {
      description: {
        story:
          "When `value` is `null`, `undefined`, or an empty string, the `fallback` text is displayed in a muted italic style. Useful for records with incomplete data.",
      },
    },
  },
};

export const WithTruncation: Story = {
  name: "Truncate — Long Value",
  render: () => (
    <div style={{ width: 280 }}>
      <DataAttribute
        label="File path"
        value="/data/shapefiles/atlantic_forest/remnants_2024_final_v3_corrected.shp"
        truncate
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "When `truncate` is `true`, long values are clipped with an ellipsis instead of wrapping. Useful inside constrained containers like a Sidebar or Card.",
      },
    },
  },
};

export const WithRichValue: Story = {
  name: "Rich Value — Species Name and Status",
  render: () => (
    <AttributeGroup>
      <DataAttribute label="Species" value={<i>Panthera onca</i>} />
      <DataAttribute
        label="IUCN Status"
        value={<Badge variant="warning">VU</Badge>}
      />
      <DataAttribute
        label="Data Source"
        value={
          <a
            href="https://www.gbif.org"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--boulder-color-primary)" }}
          >
            GBIF
          </a>
        }
      />
    </AttributeGroup>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "The `value` prop accepts any `ReactNode`. This example shows italic species names, a `Badge` for IUCN conservation status, and an anchor link to the public data source.",
      },
    },
  },
};

export const FaunaRecord: Story = {
  name: "Fauna Record — Full Metadata",
  render: () => (
    <Card variant="default" style={{ width: 360 }}>
      <CardHeader>
        <CardTitle as="h3">
          <i>Tapirus terrestris</i>
        </CardTitle>
      </CardHeader>
      <CardContent padding="md">
        <AttributeGroup>
          <DataAttribute label="Common name" value="South American tapir" />
          <DataAttribute label="Family" value="Tapiridae" />
          <Divider />
          <DataAttribute
            label="IUCN Status"
            value={<Badge variant="warning">VU</Badge>}
          />
          <DataAttribute label="Biome" value="Atlantic Forest" />
          <DataAttribute label="Collection method" value="Camera trap" />
          <Divider />
          <DataAttribute
            label="Coordinates"
            value="22°54′32″ S, 43°10′15″ W"
          />
          <DataAttribute label="Date" value="2024-08-14" />
          <DataAttribute label="Observer" value="Dr. R. Almeida" />
          <DataAttribute label="Institution" value="UFRJ / MNRJ" />
          <DataAttribute label="Voucher" value="MNRJ-M 08821" />
          <Divider />
          <DataAttribute label="Data source" value="GBIF · SpeciesLink" />
          <DataAttribute label="Habitat notes" value={null} fallback="Not recorded" />
        </AttributeGroup>
      </CardContent>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A complete fauna occurrence record for *Tapirus terrestris* rendered inside a `Card`. Demonstrates how multiple `DataAttribute` instances combine to form a structured metadata panel, including a `Badge` for IUCN status and a fallback for absent data.",
      },
    },
  },
};

export const SoilSampleRecord: Story = {
  name: "Soil Sample — Lab Results",
  render: () => (
    <Card variant="elevated" style={{ width: 360 }}>
      <CardHeader>
        <CardTitle as="h3">Sample SS-047</CardTitle>
      </CardHeader>
      <CardContent padding="md">
        <AttributeGroup>
          <DataAttribute
            label="Coordinates"
            value="15°35′44″ S, 47°43′22″ W"
          />
          <DataAttribute label="Collection date" value="2024-05-22" />
          <DataAttribute label="Depth" value="0–20 cm" />
          <DataAttribute label="Horizon" value="A" />
          <DataAttribute label="Biome" value="Cerrado" />
          <Divider />
          <DataAttribute label="pH (H₂O)" value="5.8" />
          <DataAttribute label="Organic carbon" value="28.4 g/kg" />
          <DataAttribute label="Clay" value="42%" />
          <DataAttribute label="Silt" value="31%" />
          <DataAttribute label="Sand" value="27%" />
          <DataAttribute label="CEC" value="12.3 cmolc/kg" />
          <Divider />
          <DataAttribute label="Analyst" value="Lab. Solo · UnB" />
          <DataAttribute label="Method" value="Embrapa 1997" />
          <DataAttribute label="Bulk density" value={null} fallback="Pending analysis" />
        </AttributeGroup>
      </CardContent>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A soil sample record with physical and chemical analysis results rendered inside an elevated `Card`. Shows how `DataAttribute` handles scientific units, chemical notation, and a fallback for a pending analysis result.",
      },
    },
  },
};

export const FloraRecord: Story = {
  name: "Flora Record — Shapefile Metadata",
  render: () => (
    <Card variant="outlined" style={{ width: 360 }}>
      <CardHeader>
        <CardTitle as="h3">atlantic_forest_remnants.shp</CardTitle>
      </CardHeader>
      <CardContent padding="md">
        <AttributeGroup>
          <DataAttribute label="Geometry type" value="MultiPolygon" />
          <DataAttribute label="CRS" value="SIRGAS 2000 (EPSG:4674)" />
          <DataAttribute label="Feature count" value="14,832" />
          <DataAttribute label="Total area" value="1,296,482 ha" />
          <Divider />
          <DataAttribute label="Source" value="MapBiomas Collection 8" />
          <DataAttribute label="Reference year" value="2023" />
          <DataAttribute
            label="File path"
            value="/data/shapefiles/atlantic_forest/remnants_2023_mapbiomas_col8.shp"
            truncate
          />
          <Divider />
          <DataAttribute label="Encoding" value="UTF-8" />
          <DataAttribute label="Last updated" value="2024-03-10" />
          <DataAttribute label="License" value={null} fallback="Not specified" />
        </AttributeGroup>
      </CardContent>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Shapefile metadata for Atlantic Forest remnants rendered inside an outlined `Card`. Demonstrates `truncate` for the long file path and a fallback for an unspecified license field.",
      },
    },
  },
};
