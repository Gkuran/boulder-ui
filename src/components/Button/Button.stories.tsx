import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
The **Button** component is a flexible and accessible button element that supports various styles, sizes, and states to fit different UI needs.

## Overview
This component provides a consistent button experience with built-in support for loading states, multiple variants, and responsive sizing.

## Installation
\`\`\`bash
npm install boulder-ui
\`\`\`

## Import
\`\`\`tsx
import { Button } from 'boulder-ui';
\`\`\`

## Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| \`variant\` | \`'primary' \\| 'secondary' \\| 'danger'\` | \`'primary'\` | Defines the visual style of the button |
| \`size\` | \`'sm' \\| 'md' \\| 'lg'\` | \`'md'\` | Controls the button's size |
| \`isLoading\` | \`boolean\` | \`false\` | Shows a loading spinner and disables the button |
| \`disabled\` | \`boolean\` | - | Disables the button interaction |
| \`children\` | \`ReactNode\` | - | The button's content (text, icons, etc.) |
| \`className\` | \`string\` | - | Additional CSS classes for customization |

## Variants
- **Primary**: Main call-to-action button (blue background)
- **Secondary**: Subtle button for secondary actions (gray background)
- **Danger**: Button for destructive actions (red background)

## Sizes
- **Small (sm)**: Compact button for tight spaces
- **Medium (md)**: Standard button size (default)
- **Large (lg)**: Prominent button for important actions

## Usage Examples
### Basic Button
\`\`\`tsx
<Button>Click me</Button>
\`\`\`

### Variants
\`\`\`tsx
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="danger">Danger</Button>
\`\`\`

### Loading State
\`\`\`tsx
<Button isLoading>Submitting...</Button>
\`\`\`

### Disabled
\`\`\`tsx
<Button disabled>Disabled</Button>
\`\`\`
`,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Button",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    children: "Button",
    variant: "secondary",
  },
};

export const Danger: Story = {
  args: {
    children: "Delete",
    variant: "danger",
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled Button",
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    children: "Loading",
    variant: "primary",
    isLoading: true,
  },
};
