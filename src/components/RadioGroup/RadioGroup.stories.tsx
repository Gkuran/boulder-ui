import type { Meta, StoryObj } from "@storybook/react";
import { RadioGroup } from "./RadioGroup";

const meta: Meta = {
  title: "Controls/RadioGroup",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
## Overview
**RadioGroup** allows selecting a single option from a list. It is the natural pair to \`Checkbox\` (which allows multiple selections). It uses native \`<input type="radio">\` elements for built-in keyboard support and accessibility.

## Import
\`\`\`tsx
import { RadioGroup } from 'boulder-ui';
\`\`\`

## Usage
\`\`\`tsx
<RadioGroup.Root name="plan" defaultValue="pro">
  <RadioGroup.Item value="free" label="Free" />
  <RadioGroup.Item value="pro" label="Pro" />
  <RadioGroup.Item value="enterprise" label="Enterprise" />
</RadioGroup.Root>
\`\`\`
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <RadioGroup.Root name="plan" defaultValue="pro">
      <RadioGroup.Item value="free" label="Free" />
      <RadioGroup.Item value="pro" label="Pro" />
      <RadioGroup.Item value="enterprise" label="Enterprise" />
    </RadioGroup.Root>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <RadioGroup.Root name="size" defaultValue="md" orientation="horizontal">
      <RadioGroup.Item value="sm" label="Small" />
      <RadioGroup.Item value="md" label="Medium" />
      <RadioGroup.Item value="lg" label="Large" />
    </RadioGroup.Root>
  ),
};

export const WithDisabledItem: Story = {
  render: () => (
    <RadioGroup.Root name="status" defaultValue="active">
      <RadioGroup.Item value="active" label="Active" />
      <RadioGroup.Item value="inactive" label="Inactive" />
      <RadioGroup.Item value="archived" label="Archived (unavailable)" disabled />
    </RadioGroup.Root>
  ),
};

export const GroupDisabled: Story = {
  render: () => (
    <RadioGroup.Root name="role" defaultValue="viewer" disabled>
      <RadioGroup.Item value="admin" label="Admin" />
      <RadioGroup.Item value="editor" label="Editor" />
      <RadioGroup.Item value="viewer" label="Viewer" />
    </RadioGroup.Root>
  ),
};
