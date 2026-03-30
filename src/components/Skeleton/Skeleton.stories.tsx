import type { Meta, StoryObj } from "@storybook/react";
import { Skeleton } from "./Skeleton";

const meta: Meta<typeof Skeleton> = {
  title: "Feedback/Skeleton",
  component: Skeleton,
  tags: ["autodocs"],
  args: {
    variant: "text",
    width: "200px",
    animate: true,
  },
  argTypes: {
    variant: {
      control: "radio",
      options: ["text", "circular", "rectangular"],
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
## Overview
**Skeleton** is a placeholder that mimics the shape of content while it loads. It improves perceived performance and prevents layout shifts. The animation automatically respects the \`prefers-reduced-motion\` user preference.

## Import
\`\`\`tsx
import { Skeleton } from 'boulder-ui';
\`\`\`

## Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| \`variant\` | \`'text' \\| 'circular' \\| 'rectangular'\` | \`'text'\` | Shape of the placeholder |
| \`width\` | \`CSSProperties['width']\` | \`'100%'\` | Width of the skeleton |
| \`height\` | \`CSSProperties['height']\` | auto | Height of the skeleton |
| \`animate\` | \`boolean\` | \`true\` | Enable shimmer animation |
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Text: Story = {
  args: { variant: "text", width: "240px" },
};

export const Circular: Story = {
  args: { variant: "circular", width: "48px", height: "48px" },
};

export const Rectangular: Story = {
  args: { variant: "rectangular", width: "320px", height: "180px" },
};

export const NoAnimation: Story = {
  args: { variant: "rectangular", width: "320px", height: "180px", animate: false },
};

export const CardPlaceholder: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "12px", alignItems: "flex-start", width: "360px" }}>
      <Skeleton variant="circular" width="48px" height="48px" />
      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "8px" }}>
        <Skeleton variant="text" width="60%" height="16px" />
        <Skeleton variant="text" width="90%" height="14px" />
        <Skeleton variant="text" width="75%" height="14px" />
      </div>
    </div>
  ),
};

export const ImagePlaceholder: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px", width: "300px" }}>
      <Skeleton variant="rectangular" width="100%" height="160px" />
      <Skeleton variant="text" width="80%" height="18px" />
      <Skeleton variant="text" width="60%" height="14px" />
    </div>
  ),
};
