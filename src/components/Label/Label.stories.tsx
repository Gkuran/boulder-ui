import type { Meta, StoryObj } from "@storybook/react";
import { Label } from "./Label";
import { Input } from "../Input";

const meta: Meta<typeof Label> = {
  title: "Components/Label",
  component: Label,
  tags: ["autodocs"],
  args: {
    children: "Email",
  },
  parameters: {
    docs: {
      description: {
        component: `
The **Label** component is an accessible label element that provides descriptive text for form controls and improves usability.

## Overview
This component extends the native HTML \`label\` element with additional styling and ensures proper association with form inputs for better accessibility.

## Installation
\`\`\`bash
npm install virtu-ui
\`\`\`

## Import
\`\`\`tsx
import { Label } from 'virtu-ui';
\`\`\`

## Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| \`htmlFor\` | \`string\` | - | Associates the label with a form control by ID |
| \`children\` | \`ReactNode\` | - | The label text content |

## Usage Examples
### Basic Label
\`\`\`tsx
<Label>Email</Label>
\`\`\`

### Associated with Input
\`\`\`tsx
<Label htmlFor="email">Email Address</Label>
<Input id="email" placeholder="Enter your email" />
\`\`\`

### In FormField
\`\`\`tsx
<FormField label="Username" htmlFor="username">
  <Input id="username" />
</FormField>
\`\`\`
`,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Label>;

export const Default: Story = {};

export const WithInput: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <Label htmlFor="email">Email</Label>
      <Input placeholder="Your email" />
    </div>
  ),
};
