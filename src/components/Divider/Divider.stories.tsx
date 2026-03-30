import type { Meta, StoryObj } from "@storybook/react";
import { Divider } from "./Divider";

const meta: Meta<typeof Divider> = {
  title: "Layout & Navigation/Divider",
  component: Divider,
  tags: ["autodocs"],
  args: {
    orientation: "horizontal",
    variant: "solid",
  },
  argTypes: {
    orientation: { control: "radio", options: ["horizontal", "vertical"] },
    variant: { control: "radio", options: ["solid", "dashed"] },
  },
  parameters: {
    docs: {
      description: {
        component: `
## Overview
**Divider** is a visual separator between content sections. It uses \`--boulder-color-border\` token to remain consistent with the design system and supports horizontal and vertical orientations.

## Import
\`\`\`tsx
import { Divider } from 'boulder-ui';
\`\`\`
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const Horizontal: Story = {
  render: () => (
    <div style={{ width: "300px" }}>
      <p style={{ margin: "0 0 12px" }}>Section A</p>
      <Divider />
      <p style={{ margin: "12px 0 0" }}>Section B</p>
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: "12px", height: "40px" }}>
      <span>Item A</span>
      <Divider orientation="vertical" />
      <span>Item B</span>
      <Divider orientation="vertical" />
      <span>Item C</span>
    </div>
  ),
};

export const Dashed: Story = {
  render: () => (
    <div style={{ width: "300px" }}>
      <p style={{ margin: "0 0 12px" }}>Before</p>
      <Divider variant="dashed" />
      <p style={{ margin: "12px 0 0" }}>After</p>
    </div>
  ),
};
