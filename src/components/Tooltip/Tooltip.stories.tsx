import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip } from "./Tooltip";

const meta: Meta<typeof Tooltip> = {
  title: "Overlay/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  args: {
    content: "Helpful information",
    position: "top",
    delay: 300,
    disabled: false,
  },
  argTypes: {
    position: {
      control: "radio",
      options: ["top", "right", "bottom", "left"],
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
## Overview
**Tooltip** displays contextual text on hover or focus of a trigger element. It is accessible via keyboard and screen readers using \`role="tooltip"\` and \`aria-describedby\`.

## Import
\`\`\`tsx
import { Tooltip } from 'boulder-ui';
\`\`\`

## Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| \`content\` | \`ReactNode\` | — | Content inside the tooltip (required) |
| \`children\` | \`ReactNode\` | — | Trigger element (required) |
| \`position\` | \`'top' \\| 'right' \\| 'bottom' \\| 'left'\` | \`'top'\` | Preferred placement |
| \`delay\` | \`number\` | \`300\` | Show delay in milliseconds |
| \`disabled\` | \`boolean\` | \`false\` | Prevents tooltip from showing |
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

const TriggerButton = ({ label = "Hover me" }: { label?: string }) => (
  <button
    style={{
      padding: "8px 16px",
      borderRadius: "6px",
      border: "1px solid #ccc",
      background: "#fff",
      cursor: "pointer",
    }}
  >
    {label}
  </button>
);

export const Default: Story = {
  render: (args) => (
    <div style={{ padding: "60px", display: "inline-flex" }}>
      <Tooltip {...args}>
        <TriggerButton />
      </Tooltip>
    </div>
  ),
};

export const Positions: Story = {
  render: () => (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", padding: "80px" }}>
      <Tooltip content="Top tooltip" position="top">
        <TriggerButton label="Top" />
      </Tooltip>
      <Tooltip content="Right tooltip" position="right">
        <TriggerButton label="Right" />
      </Tooltip>
      <Tooltip content="Bottom tooltip" position="bottom">
        <TriggerButton label="Bottom" />
      </Tooltip>
      <Tooltip content="Left tooltip" position="left">
        <TriggerButton label="Left" />
      </Tooltip>
    </div>
  ),
};

export const NoDelay: Story = {
  args: { delay: 0, content: "Instant tooltip" },
  render: (args) => (
    <div style={{ padding: "60px", display: "inline-flex" }}>
      <Tooltip {...args}>
        <TriggerButton label="No delay" />
      </Tooltip>
    </div>
  ),
};

export const Disabled: Story = {
  args: { disabled: true },
  render: (args) => (
    <div style={{ padding: "60px", display: "inline-flex" }}>
      <Tooltip {...args}>
        <TriggerButton label="Disabled tooltip" />
      </Tooltip>
    </div>
  ),
};
