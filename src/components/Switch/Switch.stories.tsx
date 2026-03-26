import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from "./Switch";

const meta: Meta<typeof Switch> = {
  title: "Forms/Switch",
  component: Switch,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
The **Switch** component is a toggle control that allows users to switch between two states, typically **on** and **off**.

## Overview
This component provides:
- **Accessible toggle behavior** based on a native checkbox
- **Keyboard navigation support**
- **Optional label** for improved usability
- **Smooth state transitions**

Switches are commonly used for **settings, preferences, and feature toggles**.

## Installation
\`\`\`bash
npm install boulder-ui
\`\`\`

## Import
\`\`\`tsx
import { Switch } from 'boulder-ui';
\`\`\`

## Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| \`id\` | \`string\` | - | Unique identifier for the switch |
| \`label\` | \`string\` | - | Optional label displayed next to the switch |
| \`checked\` | \`boolean\` | \`false\` | Controls the checked state |
| \`defaultChecked\` | \`boolean\` | - | Initial checked state |
| \`disabled\` | \`boolean\` | \`false\` | Disables the switch |
| \`onChange\` | \`(event) => void\` | - | Callback fired when the state changes |

## Usage Examples

### Basic Usage
\`\`\`tsx
<Switch id="notifications" label="Enable notifications" />
\`\`\`

### Controlled Example
\`\`\`tsx
const [enabled, setEnabled] = useState(false);

<Switch
  id="dark-mode"
  label="Dark mode"
  checked={enabled}
  onChange={(e) => setEnabled(e.target.checked)}
/>
\`\`\`
`,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: {
    id: "switch-default",
    label: "Enable notifications",
  },
};

export const Checked: Story = {
  args: {
    id: "switch-checked",
    label: "Dark mode",
    defaultChecked: true,
  },
};

export const Disabled: Story = {
  args: {
    id: "switch-disabled",
    label: "Disabled switch",
    disabled: true,
  },
};
