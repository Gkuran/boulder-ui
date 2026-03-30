import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Slider } from "./Slider";

const meta: Meta<typeof Slider> = {
  title: "Controls/Slider",
  component: Slider,
  tags: ["autodocs"],
  args: {
    min: 0,
    max: 100,
    step: 1,
    defaultValue: 40,
    disabled: false,
  },
  argTypes: {
    value: { control: { type: "range", min: 0, max: 100, step: 1 } },
  },
  parameters: {
    docs: {
      description: {
        component: `
## Overview
**Slider** is a range input for selecting a numeric value within a defined interval. It supports both controlled and uncontrolled usage, renders a filled track using CSS custom properties, and is fully accessible via keyboard.

## Import
\`\`\`tsx
import { Slider } from 'boulder-ui';
\`\`\`

## Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| \`min\` | \`number\` | \`0\` | Minimum value |
| \`max\` | \`number\` | \`100\` | Maximum value |
| \`step\` | \`number\` | \`1\` | Step increment |
| \`value\` | \`number\` | — | Controlled value |
| \`defaultValue\` | \`number\` | \`0\` | Initial value (uncontrolled) |
| \`onChange\` | \`(value: number) => void\` | — | Change handler |
| \`disabled\` | \`boolean\` | \`false\` | Disables interaction |
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  render: (args) => (
    <div style={{ width: "320px" }}>
      <Slider {...args} aria-label="Volume" />
    </div>
  ),
};

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState(30);
    return (
      <div style={{ width: "320px", display: "flex", flexDirection: "column", gap: "12px" }}>
        <label style={{ fontSize: "14px", fontWeight: 500 }}>
          Brightness: {value}%
        </label>
        <Slider
          min={0}
          max={100}
          value={value}
          onChange={setValue}
          aria-label="Brightness"
        />
      </div>
    );
  },
};

export const WithStep: Story = {
  render: () => {
    const [value, setValue] = useState(50);
    return (
      <div style={{ width: "320px", display: "flex", flexDirection: "column", gap: "12px" }}>
        <label style={{ fontSize: "14px", fontWeight: 500 }}>
          Rating: {value}
        </label>
        <Slider
          min={0}
          max={100}
          step={10}
          value={value}
          onChange={setValue}
          aria-label="Rating"
        />
      </div>
    );
  },
};

export const Disabled: Story = {
  render: () => (
    <div style={{ width: "320px" }}>
      <Slider defaultValue={60} disabled aria-label="Disabled slider" />
    </div>
  ),
};
