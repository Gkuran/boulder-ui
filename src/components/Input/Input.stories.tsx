import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  args: {
    placeholder: "Type something...",
    variant: "outline",
    sizeVariant: "md",
  },
  argTypes: {
    variant: {
      control: "radio",
      options: ["outline", "filled"],
    },
    sizeVariant: {
      control: "radio",
      options: ["sm", "md", "lg"],
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
The **Input** component is a customizable text input field designed for collecting user data with support for different visual styles and sizes.

## Overview
This component provides a flexible input element with built-in error handling and multiple styling options to match your design system.

## Installation
\`\`\`bash
npm install boulder-ui
\`\`\`

## Import
\`\`\`tsx
import { Input } from 'boulder-ui';
\`\`\`

## Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| \`variant\` | \`'outline' \\| 'filled'\` | \`'outline'\` | Defines the visual style of the input |
| \`sizeVariant\` | \`'sm' \\| 'md' \\| 'lg'\` | \`'md'\` | Controls the input's size |
| \`error\` | \`string\` | - | Error message for validation feedback |
| \`placeholder\` | \`string\` | - | Placeholder text displayed when input is empty |

## Variants
- **Outline**: Default style with a border around the input
- **Filled**: Input with a background color for emphasis

## Sizes
- **Small (sm)**: Compact input for limited space
- **Medium (md)**: Standard input size (default)
- **Large (lg)**: Larger input for better accessibility

## Usage Examples
### Basic Input
\`\`\`tsx
<Input placeholder="Enter your name" />
\`\`\`

### Variants
\`\`\`tsx
<Input variant="outline" placeholder="Outline style" />
<Input variant="filled" placeholder="Filled style" />
\`\`\`

### With Error
\`\`\`tsx
<Input error="This field is required" placeholder="Required field" />
\`\`\`

### Different Sizes
\`\`\`tsx
<Input sizeVariant="sm" placeholder="Small" />
<Input sizeVariant="md" placeholder="Medium" />
<Input sizeVariant="lg" placeholder="Large" />
\`\`\`
`,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {};

export const Filled: Story = {
  args: {
    variant: "filled",
  },
};

export const Small: Story = {
  args: {
    sizeVariant: "sm",
  },
};

export const Large: Story = {
  args: {
    sizeVariant: "lg",
  },
};

export const WithError: Story = {
  args: {
    error: "Invalid value",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
