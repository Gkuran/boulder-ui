import type { Meta, StoryObj } from "@storybook/react";
import { FormField } from "./FormField";
import { Input } from "../Input";
import { Button } from "../Button";

const meta: Meta<typeof FormField> = {
  title: "Forms/FormField",
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
- **ErrorMessage**: Displays validation errors when needed

The field ID is generated automatically via \`useId()\` and propagated to the child input via \`cloneElement\`. You can override it by passing the \`id\` prop.

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
| \`description\` | \`string\` | - | Optional helper text displayed below the input |
| \`error\` | \`string\` | - | Error message displayed when validation fails |
| \`id\` | \`string\` | auto | Overrides the auto-generated field ID |
| \`children\` | \`ReactElement\` | - | The input component to be wrapped |

## Usage Examples
### Basic Usage
\`\`\`tsx
<FormField label="Email">
  <Input placeholder="Enter your email" />
</FormField>
\`\`\`

### With Description and Error
\`\`\`tsx
<FormField
  label="Username"
  description="This will be visible to other users"
  error="Username is required"
>
  <Input />
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
    <FormField label="Email">
      <Input placeholder="Enter your email" />
    </FormField>
  ),
};

export const WithDescription: Story = {
  render: () => (
    <FormField
      label="Username"
      description="This will be visible to other users"
    >
      <Input />
    </FormField>
  ),
};

export const WithError: Story = {
  render: () => (
    <FormField label="Email" error="Invalid email address">
      <Input />
    </FormField>
  ),
};

export const FullFormExample: Story = {
  render: () => (
    <form style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <FormField label="Email">
        <Input />
      </FormField>

      <FormField label="Password">
        <Input type="password" />
      </FormField>

      <Button type="submit">Submit</Button>
    </form>
  ),
};
