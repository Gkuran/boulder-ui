import type { Meta, StoryObj } from "@storybook/react";
import { Tabs } from "./Tabs";

const meta: Meta = {
  title: "Layout & Navigation/Tabs",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
## Overview
**Tabs** organizes content into multiple panels, showing one at a time. It supports keyboard navigation (arrow keys, Home, End), correct ARIA roles (\`tablist\`, \`tab\`, \`tabpanel\`), and both controlled and uncontrolled usage.

## Import
\`\`\`tsx
import { Tabs } from 'boulder-ui';
\`\`\`

## Usage
\`\`\`tsx
<Tabs.Root defaultValue="overview">
  <Tabs.List>
    <Tabs.Trigger value="overview">Overview</Tabs.Trigger>
    <Tabs.Trigger value="settings">Settings</Tabs.Trigger>
  </Tabs.List>
  <Tabs.Content value="overview">Overview content</Tabs.Content>
  <Tabs.Content value="settings">Settings content</Tabs.Content>
</Tabs.Root>
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
    <Tabs.Root defaultValue="overview" style={{ width: "480px" }}>
      <Tabs.List>
        <Tabs.Trigger value="overview">Overview</Tabs.Trigger>
        <Tabs.Trigger value="activity">Activity</Tabs.Trigger>
        <Tabs.Trigger value="settings">Settings</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="overview">
        <p>This is the overview panel content.</p>
      </Tabs.Content>
      <Tabs.Content value="activity">
        <p>Recent activity will appear here.</p>
      </Tabs.Content>
      <Tabs.Content value="settings">
        <p>Configure your preferences here.</p>
      </Tabs.Content>
    </Tabs.Root>
  ),
};

export const WithDisabledTab: Story = {
  render: () => (
    <Tabs.Root defaultValue="general" style={{ width: "480px" }}>
      <Tabs.List>
        <Tabs.Trigger value="general">General</Tabs.Trigger>
        <Tabs.Trigger value="billing">Billing</Tabs.Trigger>
        <Tabs.Trigger value="advanced" disabled>Advanced</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="general">
        <p>General settings content.</p>
      </Tabs.Content>
      <Tabs.Content value="billing">
        <p>Billing information content.</p>
      </Tabs.Content>
    </Tabs.Root>
  ),
};
