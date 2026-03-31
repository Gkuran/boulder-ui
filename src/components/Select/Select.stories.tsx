import type { Meta, StoryObj } from "@storybook/react";
import { Select } from "./";
import { FormField } from "../FormField";
import { Label } from "../Label";

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta: Meta<typeof Select> = {
  title: "Forms/Select",
  component: Select,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
The **Select** component is a styled wrapper around the native HTML \`<select>\` element. It maintains full native accessibility and browser behavior while providing a consistent visual appearance aligned with the Boulder UI design system.

## Design Decisions

The native \`<select>\` approach was chosen intentionally over a custom dropdown built with \`div\` elements. This ensures:

- **Accessibility**: Full keyboard navigation, screen reader support, and mobile-native behavior out of the box.
- **Performance**: Zero JavaScript for the dropdown logic — the browser handles it.
- **Bundle size**: No extra dependencies or runtime overhead.

The native arrow is hidden via \`appearance: none\` and replaced with a custom SVG chevron.

## Integration with FormField

The \`Select\` component is designed to be used as the direct child of the existing \`FormField\` component, which automatically injects \`id\`, \`aria-invalid\`, and \`aria-describedby\` for full accessibility.

\`\`\`tsx
import { Select, FormField } from "boulder-ui";

<FormField label="Biome" description="Select the biome of the collection site.">
  <Select>
    <option value="">Select...</option>
    <option value="amazon">Amazon</option>
    <option value="cerrado">Cerrado</option>
  </Select>
</FormField>
\`\`\`

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| \`variant\` | \`"outline" \\| "filled"\` | \`"outline"\` | Visual variant |
| \`size\` | \`"sm" \\| "md" \\| "lg"\` | \`"md"\` | Visual size |
| \`error\` | \`string\` | — | Error message; applies red border and \`aria-invalid\` |
| \`icon\` | \`ReactNode\` | Chevron SVG | Custom icon to replace the default chevron |
| \`disabled\` | \`boolean\` | \`false\` | Disables the select |
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["outline", "filled"],
      description: "Visual variant of the select",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Visual size of the select",
    },
    error: {
      control: "text",
      description: "Error message to display",
    },
    disabled: {
      control: "boolean",
      description: "Disables the select",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

// ─── Shared wrapper style ─────────────────────────────────────────────────────

const wrapperStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "var(--boulder-spacing-md)",
  width: 320,
};

// ─── Stories ─────────────────────────────────────────────────────────────────

export const Default: Story = {
  name: "Default — Biome Selection",
  render: () => (
    <div style={wrapperStyle}>
      <Label htmlFor="biome-select">Biome</Label>
      <Select id="biome-select">
        <option value="">Select a biome...</option>
        <option value="amazon">Amazon</option>
        <option value="cerrado">Cerrado</option>
        <option value="atlantic_forest">Atlantic Forest</option>
        <option value="caatinga">Caatinga</option>
        <option value="pantanal">Pantanal</option>
        <option value="pampa">Pampa</option>
      </Select>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Default `outline` variant at `md` size. Used to select the biome of a field collection site.",
      },
    },
  },
};

export const Filled: Story = {
  name: "Filled — Soil Horizon",
  render: () => (
    <div style={wrapperStyle}>
      <Label htmlFor="horizon-select">Soil Horizon</Label>
      <Select id="horizon-select" variant="filled">
        <option value="">Select a horizon...</option>
        <option value="O">O — Organic matter (litter)</option>
        <option value="A">A — Topsoil (mineral + organic)</option>
        <option value="E">E — Eluviated layer</option>
        <option value="B">B — Subsoil (illuviation)</option>
        <option value="C">C — Parent material</option>
        <option value="R">R — Bedrock</option>
      </Select>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "`filled` variant with no visible border. Used to select the soil horizon for a sample.",
      },
    },
  },
};

export const Sizes: Story = {
  name: "Sizes — sm / md / lg",
  render: () => (
    <div style={wrapperStyle}>
      <Select size="sm" aria-label="Collection Method (small)">
        <option>sm — Collection Method</option>
        <option value="trap">Camera Trap</option>
        <option value="transect">Line Transect</option>
      </Select>
      <Select size="md" aria-label="Collection Method (medium)">
        <option>md — Collection Method</option>
        <option value="trap">Camera Trap</option>
        <option value="transect">Line Transect</option>
      </Select>
      <Select size="lg" aria-label="Collection Method (large)">
        <option>lg — Collection Method</option>
        <option value="trap">Camera Trap</option>
        <option value="transect">Line Transect</option>
      </Select>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "All three available sizes: `sm`, `md`, and `lg`. Padding and font-size scale proportionally using design tokens.",
      },
    },
  },
};

export const WithFormField: Story = {
  name: "With FormField — CRS Selection",
  render: () => (
    <div style={wrapperStyle}>
      <FormField
        label="Coordinate Reference System (CRS)"
        description="Select the CRS of the imported shapefile."
      >
        <Select>
          <option value="">Select a CRS...</option>
          <option value="EPSG:4674">SIRGAS 2000 (EPSG:4674) — Brazil official</option>
          <option value="EPSG:4326">WGS 84 (EPSG:4326) — GPS standard</option>
          <option value="EPSG:31982">SIRGAS 2000 / UTM zone 22S (EPSG:31982)</option>
          <option value="EPSG:31983">SIRGAS 2000 / UTM zone 23S (EPSG:31983)</option>
          <option value="EPSG:31984">SIRGAS 2000 / UTM zone 24S (EPSG:31984)</option>
        </Select>
      </FormField>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Full integration with the `FormField` component. The `FormField` automatically handles `id` injection, `aria-describedby`, and the description text below the field.",
      },
    },
  },
};

export const ErrorState: Story = {
  name: "Error State — Required Field",
  render: () => (
    <div style={wrapperStyle}>
      <FormField
        label="Collection Method"
        error="Collection method is required to save the occurrence record."
      >
        <Select error="Collection method is required to save the occurrence record.">
          <option value="">Select a method...</option>
          <option value="camera_trap">Camera Trap</option>
          <option value="line_transect">Line Transect</option>
          <option value="point_count">Point Count</option>
          <option value="mist_net">Mist Net</option>
          <option value="pitfall">Pitfall Trap</option>
          <option value="visual_encounter">Visual Encounter Survey</option>
        </Select>
      </FormField>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Error state triggered by form validation. The red border and `aria-invalid` attribute are applied automatically when the `error` prop is provided.",
      },
    },
  },
};

export const Disabled: Story = {
  name: "Disabled — Awaiting Data",
  render: () => (
    <div style={wrapperStyle}>
      <FormField
        label="Taxonomic Family"
        description="Awaiting species identification from the laboratory."
      >
        <Select disabled>
          <option value="">Loading families...</option>
        </Select>
      </FormField>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Disabled state used when the field is awaiting asynchronous data, such as a taxonomic family list being fetched from an external database.",
      },
    },
  },
};

export const CustomIcon: Story = {
  name: "Custom Icon",
  render: () => (
    <div style={wrapperStyle}>
      <Label htmlFor="iucn-select">IUCN Status</Label>
      <Select
        id="iucn-select"
        icon={
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
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
        }
      >
        <option value="">Select IUCN status...</option>
        <option value="EX">EX — Extinct</option>
        <option value="EW">EW — Extinct in the Wild</option>
        <option value="CR">CR — Critically Endangered</option>
        <option value="EN">EN — Endangered</option>
        <option value="VU">VU — Vulnerable</option>
        <option value="NT">NT — Near Threatened</option>
        <option value="LC">LC — Least Concern</option>
        <option value="DD">DD — Data Deficient</option>
      </Select>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "The default chevron can be replaced with any `ReactNode` via the `icon` prop. Here, an info circle icon is used for a field that selects the IUCN conservation status.",
      },
    },
  },
};
