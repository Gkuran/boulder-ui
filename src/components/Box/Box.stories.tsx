import type { Meta, StoryObj } from "@storybook/react";
import { Box } from "./Box";

const meta: Meta<typeof Box> = {
  title: "Components/Box",
  component: Box,
  tags: ["autodocs"],

  parameters: {
    docs: {
      description: {
        component: `
## Overview

The **Box** component is the primary container in Virtu UI. It implements the glassmorphism design language with a translucent gradient background, backdrop blur, and subtle borders.

## Installation

\`\`\`bash
npm install virtu-ui
\`\`\`

\`\`\`tsx
import { Box } from "virtu-ui";
\`\`\`

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| \`variant\` | \`"glass" \\| "solid" \\| "ghost"\` | \`"glass"\` | Visual style of the box |
| \`padding\` | \`"none" \\| "sm" \\| "md" \\| "lg"\` | \`"md"\` | Padding preset |
| \`asSection\` | \`boolean\` | \`false\` | Render as \`<section>\` instead of \`<div>\` |

## Variants

- **Glass** — The default glassmorphism effect with gradient, blur, and shadow
- **Solid** — A solid dark surface for content that needs more contrast
- **Ghost** — Transparent with only a subtle border for minimal visual weight

## Usage

\`\`\`tsx
<Box variant="glass" padding="lg">
  <h2>Dashboard</h2>
  <p>Your content here</p>
</Box>
\`\`\`
        `,
      },
    },
    backgrounds: {
      default: "dark",
      values: [{ name: "dark", value: "#1a1a1a" }],
    },
  },

  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["glass", "solid", "ghost"],
    },
    padding: {
      control: { type: "select" },
      options: ["none", "sm", "md", "lg"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Box>;

const sampleContent = (
  <div>
    <h3 style={{ margin: "0 0 8px", color: "#f5f5f5", fontSize: "16px" }}>
      Pedidos liberados
    </h3>
    <p style={{ margin: 0, color: "#f5f5f5", fontSize: "28px", fontWeight: 700 }}>
      50
    </p>
  </div>
);

export const Glass: Story = {
  args: {
    variant: "glass",
    padding: "lg",
    children: sampleContent,
  },
};

export const Solid: Story = {
  args: {
    variant: "solid",
    padding: "lg",
    children: sampleContent,
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    padding: "lg",
    children: sampleContent,
  },
};

export const NoPadding: Story = {
  args: {
    variant: "glass",
    padding: "none",
    children: sampleContent,
  },
};

export const AsSection: Story = {
  args: {
    variant: "glass",
    padding: "lg",
    asSection: true,
    children: sampleContent,
  },
};

export const ComposedLayout: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
      <Box variant="glass" padding="lg" style={{ flex: 1, minWidth: "200px" }}>
        <h3 style={{ margin: "0 0 8px", color: "rgba(255,255,255,0.6)", fontSize: "14px" }}>
          Pedidos liberados
        </h3>
        <p style={{ margin: 0, color: "#f5f5f5", fontSize: "28px", fontWeight: 700 }}>
          50
        </p>
      </Box>
      <Box variant="glass" padding="lg" style={{ flex: 1, minWidth: "200px" }}>
        <h3 style={{ margin: "0 0 8px", color: "rgba(255,255,255,0.6)", fontSize: "14px" }}>
          Aprovados
        </h3>
        <p style={{ margin: 0, color: "#f5f5f5", fontSize: "28px", fontWeight: 700 }}>
          R$24.000,00
        </p>
      </Box>
      <Box variant="glass" padding="lg" style={{ flex: 1, minWidth: "200px" }}>
        <h3 style={{ margin: "0 0 8px", color: "rgba(255,255,255,0.6)", fontSize: "14px" }}>
          Pendentes
        </h3>
        <p style={{ margin: 0, color: "#f5f5f5", fontSize: "28px", fontWeight: 700 }}>
          R$4.000,00
        </p>
      </Box>
    </div>
  ),
};
