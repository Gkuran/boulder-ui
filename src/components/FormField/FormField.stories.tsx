import type { Meta, StoryObj } from "@storybook/react";
import { FormField } from "./FormField";
import { Input } from "../Input";
import { Button } from "../Button";

const meta: Meta<typeof FormField> = {
  title: "Components/FormField",
  component: FormField,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
The **FormField** component is a versatile wrapper designed to structure and enhance form inputs by combining multiple elements into a cohesive unit.

## Overview
This component integrates:
- **Label**: Provides accessible labeling for the input field
- **Input**: The actual form control (passed as children)
- **Description**: Optional helper text to guide users
- **Error Message**: Displays validation errors when needed

## Installation
\`\`\`bash
npm install boulder-ui
\`\`\`

## Import
\`\`\`tsx
import { FormField } from 'boulder-ui';
\`\`\`

## Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| \`label\` | \`string\` | - | The label text for the form field |
| \`description\` | \`string\` | - | Optional helper text displayed below the label |
| \`error\` | \`string\` | - | Error message displayed when validation fails |
| \`htmlFor\` | \`string\` | - | Associates the label with an input element |
| \`id\` | \`string\` | - | Unique identifier for the form field |
| \`children\` | \`ReactElement\` | - | The input component(s) to be wrapped |

## Usage Examples
### Basic Usage
\`\`\`tsx
<FormField label="Email" htmlFor="email">
  <Input id="email" placeholder="Enter your email" />
</FormField>
\`\`\`

### With Description and Error
\`\`\`tsx
<FormField
  label="Username"
  description="This will be visible to other users"
  error="Username is required"
  htmlFor="username"
>
  <Input id="username" />
</FormField>
\`\`\`
`,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof FormField>;

export const Default: Story = {
  render: () => (
    <FormField label="Email" htmlFor="email">
      <Input id="email" placeholder="Enter your email" />
    </FormField>
  ),
};

export const WithDescription: Story = {
  render: () => (
    <FormField
      label="Username"
      description="This will be visible to other users"
      htmlFor="username"
    >
      <Input id="username" />
    </FormField>
  ),
};

export const WithError: Story = {
  render: () => (
    <FormField label="Email" error="Invalid email address" htmlFor="email">
      <Input />
    </FormField>
  ),
};

export const FullFormExample: Story = {
  render: () => (
    <form style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <FormField label="Email" htmlFor="email">
        <Input id="email" />
      </FormField>

      <FormField label="Password" htmlFor="password">
        <Input id="password" type="password" />
      </FormField>

      <Button type="submit">Submit</Button>
    </form>
  ),
};
