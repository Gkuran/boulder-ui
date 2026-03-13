import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./Badge";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  tags: ["autodocs"],
  args: {
    variant: "default",
  },
  argTypes: {
    variant: {
      control: "radio",
      options: ["default", "success", "warning", "danger"],
    },
  },
  parameters: {
    docs: {
      description: {
        component: `

## Overview
...

## Import
\`\`\`tsx
import { Badge } from 'boulder-ui';
\`\`\`

## Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| \`variant\` | \`'default' \ | 'success'\ | 'warning' \ | 'danger' \` | \`'default'\` | Visual style |
`,
      },
    },
  },
};

export default meta;

// ─── Stories ───────────────────────────────────────────────────────────────

type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    variant: "default",
  },
};

export const Success: Story = {
  args: {
    variant: "success",
  },
};

export const Warning: Story = {
  args: {
    variant: "warning",
  },
};

export const Danger: Story = {
  args: {
    variant: "danger",
  },
};
