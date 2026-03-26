import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./Checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "Forms/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  args: {
    label: "Accept terms",
  },
  parameters: {
    docs: {
      description: {
        component: `
The **Checkbox** component is an accessible input control that allows users to select or deselect a single option from a set of choices.

## Overview
This component wraps the native HTML checkbox input with custom styling and provides built-in label support for improved usability and accessibility.

## Installation
\`\`\`bash
npm install boulder-ui
\`\`\`

## Import
\`\`\`tsx
import { Checkbox } from 'boulder-ui';
\`\`\`

## Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| \`label\` | \`string\` | - | Optional label text displayed next to the checkbox |
| \`checked\` | \`boolean\` | - | Whether the checkbox is checked |
| \`defaultChecked\` | \`boolean\` | - | Initial checked state |
| \`disabled\` | \`boolean\` | - | Disables the checkbox |
| \`onChange\` | \`(e: ChangeEvent) => void\` | - | Callback fired when the checkbox state changes |

## Usage Examples
### Basic Checkbox
\`\`\`tsx
<Checkbox label="Remember me" />
\`\`\`

### Checked State
\`\`\`tsx
<Checkbox label="I agree to the terms" defaultChecked />
\`\`\`

### Disabled
\`\`\`tsx
<Checkbox label="This option is unavailable" disabled />
\`\`\`

### Controlled Component
\`\`\`tsx
const [isChecked, setIsChecked] = useState(false);

<Checkbox 
  label="Subscribe to updates"
  checked={isChecked}
  onChange={(e) => setIsChecked(e.target.checked)}
/>
\`\`\`
`,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {};

export const Checked: Story = {
  args: {
    defaultChecked: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
