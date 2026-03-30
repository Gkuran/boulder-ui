import type { Meta, StoryObj } from "@storybook/react";
import { ProgressBar } from "./ProgressBar";

const meta: Meta<typeof ProgressBar> = {
  title: "Feedback/ProgressBar",
  component: ProgressBar,
  tags: ["autodocs"],
  args: {
    value: 60,
    max: 100,
    variant: "primary",
    size: "md",
    showValue: true,
  },
  argTypes: {
    variant: {
      control: "radio",
      options: ["primary", "success", "warning", "danger"],
    },
    size: {
      control: "radio",
      options: ["sm", "md", "lg"],
    },
    value: { control: { type: "range", min: 0, max: 100, step: 1 } },
  },
  parameters: {
    docs: {
      description: {
        component: `
## Overview
**ProgressBar** displays the progress of a determinate operation. Unlike \`Spinner\` (which is used for indeterminate loading states), \`ProgressBar\` communicates how much of a task has been completed.

## Import
\`\`\`tsx
import { ProgressBar } from 'boulder-ui';
\`\`\`

## Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| \`value\` | \`number\` | — | Current value (required) |
| \`max\` | \`number\` | \`100\` | Maximum value |
| \`variant\` | \`'primary' \\| 'success' \\| 'warning' \\| 'danger'\` | \`'primary'\` | Color variant |
| \`size\` | \`'sm' \\| 'md' \\| 'lg'\` | \`'md'\` | Bar height |
| \`label\` | \`string\` | — | Visible label above the bar |
| \`showValue\` | \`boolean\` | \`false\` | Show percentage next to label |
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ProgressBar>;

export const Default: Story = {};

export const WithLabel: Story = {
  args: {
    label: "Uploading file...",
    value: 45,
    showValue: true,
  },
};

export const Success: Story = {
  args: { variant: "success", value: 100, label: "Upload complete", showValue: true },
};

export const Warning: Story = {
  args: { variant: "warning", value: 75, label: "Disk usage", showValue: true },
};

export const Danger: Story = {
  args: { variant: "danger", value: 90, label: "Memory usage", showValue: true },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px", width: "400px" }}>
      <ProgressBar value={60} size="sm" label="Small" showValue />
      <ProgressBar value={60} size="md" label="Medium" showValue />
      <ProgressBar value={60} size="lg" label="Large" showValue />
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px", width: "400px" }}>
      <ProgressBar value={60} variant="primary" label="Primary" showValue />
      <ProgressBar value={75} variant="success" label="Success" showValue />
      <ProgressBar value={80} variant="warning" label="Warning" showValue />
      <ProgressBar value={90} variant="danger" label="Danger" showValue />
    </div>
  ),
};
