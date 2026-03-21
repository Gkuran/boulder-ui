import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "./Textarea";
import { FormField } from "../FormField";

const meta: Meta<typeof Textarea> = {
  title: "Components/Textarea",
  component: Textarea,
  tags: ["autodocs"],
  args: {
    placeholder: "Type your message...",
    variant: "outline",
    size: "md",
    rows: 4,
  },
  argTypes: {
    variant: {
      control: "radio",
      options: ["outline", "filled"],
    },
    size: {
      control: "radio",
      options: ["sm", "md", "lg"],
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
The **Textarea** component is a multi-line text input field designed for collecting longer user inputs, such as comments or descriptions.

## Overview
This component provides a flexible textarea element with support for different visual styles, sizes, and automatic resizing to accommodate user content.

## Installation
\`\`\`bash
npm install virtu-ui
\`\`\`

## Import
\`\`\`tsx
import { Textarea } from 'virtu-ui';
\`\`\`

## Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| \`variant\` | \`'outline' \\| 'filled'\` | \`'outline'\` | Defines the visual style of the textarea |
| \`size\` | \`'sm' \\| 'md' \\| 'lg'\` | \`'md'\` | Controls the textarea's size |
| \`rows\` | \`number\` | - | Number of visible text lines |
| \`placeholder\` | \`string\` | - | Placeholder text displayed when textarea is empty |

## Variants
- **Outline**: Default style with a border around the textarea
- **Filled**: Textarea with a background color for emphasis

## Sizes
- **Small (sm)**: Compact textarea for limited space
- **Medium (md)**: Standard textarea size (default)
- **Large (lg)**: Larger textarea for better accessibility

## Usage Examples
### Basic Textarea
\`\`\`tsx
<Textarea placeholder="Enter your message" />
\`\`\`

### Variants
\`\`\`tsx
<Textarea variant="outline" placeholder="Outline style" />
<Textarea variant="filled" placeholder="Filled style" />
\`\`\`

### Different Sizes
\`\`\`tsx
<Textarea size="sm" placeholder="Small textarea" />
<Textarea size="md" placeholder="Medium textarea" />
<Textarea size="lg" placeholder="Large textarea" />
\`\`\`

### With FormField
\`\`\`tsx
<FormField label="Description" htmlFor="description">
  <Textarea id="description" rows={6} placeholder="Describe your project" />
</FormField>
\`\`\`
`,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Textarea>;

export const Default: Story = {};

export const Filled: Story = {
  args: {
    variant: "filled",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
  },
};

export const WithFormField: Story = {
  render: () => (
    <FormField label="Message" description="Tell us what you think">
      <Textarea rows={4} />
    </FormField>
  ),
};
