import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Tag } from "./Tag";

const meta: Meta<typeof Tag> = {
  title: "Data Display/Tag",
  component: Tag,
  tags: ["autodocs"],
  args: {
    variant: "default",
    children: "Biome: Cerrado",
  },
  argTypes: {
    variant: {
      control: "radio",
      options: ["default", "primary", "success", "warning", "danger"],
    },
    onRemove: { action: "removed" },
  },
  parameters: {
    docs: {
      description: {
        component: `
## Overview

\`Tag\` is an interactive pill-shaped element used to represent **active filters**, multi-select values, and dynamic categorizations. Unlike \`Badge\` (which is static), \`Tag\` supports removal via an embedded X button.

## Import

\`\`\`tsx
import { Tag } from 'boulder-ui';
\`\`\`

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| \`variant\` | \`'default' \\| 'primary' \\| 'success' \\| 'warning' \\| 'danger'\` | \`'default'\` | Visual variant |
| \`onRemove\` | \`(e: MouseEvent) => void\` | — | Fired when the X button is clicked. When absent, the tag renders as read-only |
| \`removeAriaLabel\` | \`string\` | \`'Remove tag'\` | Accessible label for the remove button |

## Accessibility

The remove button is a native \`<button>\`, ensuring full keyboard support (\`Tab\`, \`Enter\`, \`Space\`). The X icon carries \`aria-hidden="true"\` and the button exposes a descriptive \`aria-label\`.
        `,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Tag>;

// ─── Base stories ──────────────────────────────────────────────────────────

export const Default: Story = {
  args: {
    variant: "default",
    children: "Biome: Cerrado",
  },
};

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Layer: Watersheds",
  },
};

export const Success: Story = {
  args: {
    variant: "success",
    children: "Status: Collected",
  },
};

export const Warning: Story = {
  args: {
    variant: "warning",
    children: "IUCN: Vulnerable (VU)",
  },
};

export const Danger: Story = {
  args: {
    variant: "danger",
    children: "IUCN: Critically Endangered (CR)",
  },
};

// ─── With remove button ────────────────────────────────────────────────────

export const Removable: Story = {
  args: {
    variant: "primary",
    children: "Type: Fauna",
    removeAriaLabel: "Remove filter Type: Fauna",
  },
  parameters: {
    docs: {
      description: {
        story:
          "When `onRemove` is provided, the tag renders an accessible X button. Use `removeAriaLabel` to describe what will be removed for screen reader users.",
      },
    },
  },
};

// ─── Read-only (no onRemove) ───────────────────────────────────────────────

export const ReadOnly: Story = {
  args: {
    variant: "default",
    children: "Soil Sample #402",
    onRemove: undefined,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Without `onRemove`, the tag renders in read-only mode — no remove button is shown. Useful for displaying fixed categories or identifiers.",
      },
    },
  },
};

// ─── Active filters bar ────────────────────────────────────────────────────

export const ActiveFiltersBar: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [filters, setFilters] = useState([
      { id: 1, label: "Biome: Cerrado", variant: "default" as const },
      { id: 2, label: "Type: Fauna", variant: "primary" as const },
      { id: 3, label: "Status: Collected", variant: "success" as const },
      { id: 4, label: "IUCN: Vulnerable (VU)", variant: "warning" as const },
      { id: 5, label: "CRS: SIRGAS 2000", variant: "primary" as const },
    ]);

    const remove = (id: number) =>
      setFilters((prev) => prev.filter((f) => f.id !== id));

    if (filters.length === 0) {
      return (
        <p
          style={{
            fontFamily: "var(--boulder-font-family)",
            fontSize: "var(--boulder-font-size-sm)",
            color: "var(--boulder-color-text-secondary)",
          }}
        >
          No active filters.
        </p>
      );
    }

    return (
      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
        {filters.map((f) => (
          <Tag
            key={f.id}
            variant={f.variant}
            onRemove={() => remove(f.id)}
            removeAriaLabel={`Remove filter ${f.label}`}
          >
            {f.label}
          </Tag>
        ))}
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Interactive active-filters bar above an occurrence table. Click the X on each tag to remove that filter individually.",
      },
    },
  },
};

// ─── Shapefile layers ──────────────────────────────────────────────────────

export const ShapefileLayers: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [layers, setLayers] = useState([
      { id: 1, label: "Conservation Units" },
      { id: 2, label: "Watersheds" },
      { id: 3, label: "Permanent Preservation Areas" },
      { id: 4, label: "Buffer Zones" },
    ]);

    const remove = (id: number) =>
      setLayers((prev) => prev.filter((l) => l.id !== id));

    return (
      <div>
        <p
          style={{
            fontFamily: "var(--boulder-font-family)",
            fontSize: "var(--boulder-font-size-xs)",
            color: "var(--boulder-color-text-secondary)",
            marginBottom: "8px",
            marginTop: 0,
          }}
        >
          Active map layers
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
          {layers.map((l) => (
            <Tag
              key={l.id}
              variant="primary"
              onRemove={() => remove(l.id)}
              removeAriaLabel={`Remove layer ${l.label}`}
            >
              {l.label}
            </Tag>
          ))}
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Tags representing active shapefile layers in a map viewer. Each tag can be removed individually to toggle the corresponding layer off.",
      },
    },
  },
};

// ─── All variants ──────────────────────────────────────────────────────────

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
      <Tag variant="default">Method: Camera Trap</Tag>
      <Tag variant="primary">Layer: Hydrography</Tag>
      <Tag variant="success">Status: Validated</Tag>
      <Tag variant="warning">IUCN: Vulnerable (VU)</Tag>
      <Tag variant="danger">IUCN: Endangered (EN)</Tag>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "All available variants in read-only mode (no `onRemove`). Useful for displaying sample or occurrence metadata.",
      },
    },
  },
};
