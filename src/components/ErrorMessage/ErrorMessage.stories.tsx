import type { Meta, StoryObj } from "@storybook/react";
import { ErrorMessage } from "./ErrorMessage";

const meta: Meta<typeof ErrorMessage> = {
  title: "Forms/ErrorMessage",
  component: ErrorMessage,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
The **ErrorMessage** component displays validation errors associated with form inputs.

## Overview
This component is designed to provide accessible feedback when a form field fails validation.

It supports:
- **Accessible error announcements** using \`role="alert"\`
- **Association with form controls** via \`aria-describedby\`
- Consistent styling using design system tokens

## Installation
\`\`\`bash
npm install virtu-ui
\`\`\`

## Import
\`\`\`tsx
import { ErrorMessage } from 'virtu-ui';
\`\`\`

## Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| \`children\` | \`ReactNode\` | - | Error message content |
| \`id\` | \`string\` | - | Used to associate with a form control |

## Usage Examples

### Basic Usage
\`\`\`tsx
<ErrorMessage>
  Email is required
</ErrorMessage>
\`\`\`

### With Input Association
\`\`\`tsx
<Input
  id="email"
  aria-describedby="email-error"
/>

<ErrorMessage id="email-error">
  Invalid email address
</ErrorMessage>
\`\`\`
`,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof ErrorMessage>;

export const Default: Story = {
  args: {
    children: "This field is required",
  },
};
