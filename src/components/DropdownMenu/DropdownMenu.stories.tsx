import type { Meta, StoryObj } from "@storybook/react";
import type { ComponentPropsWithoutRef } from "react";
import { DropdownMenu } from "./DropdownMenu";

const meta: Meta = {
  title: "Overlay/DropdownMenu",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
## Overview
**DropdownMenu** is a contextual action menu anchored to a trigger. Unlike \`Select\` (for form values), \`DropdownMenu\` is semantic for triggering actions (edit, delete, share). It supports keyboard navigation, closes on outside click and Escape, and uses correct ARIA roles.

## Import
\`\`\`tsx
import { DropdownMenu } from 'boulder-ui';
\`\`\`

## Usage
\`\`\`tsx
<DropdownMenu.Root>
  <DropdownMenu.Trigger>
    <button>Actions</button>
  </DropdownMenu.Trigger>
  <DropdownMenu.Content>
    <DropdownMenu.Item onClick={handleEdit}>Edit</DropdownMenu.Item>
    <DropdownMenu.Separator />
    <DropdownMenu.Item destructive onClick={handleDelete}>Delete</DropdownMenu.Item>
  </DropdownMenu.Content>
</DropdownMenu.Root>
\`\`\`

\`DropdownMenu.Content\` supports \`variant="glass"\` for warm translucent action panels over imagery and maps.
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj;

const TriggerButton = ({
  label = "Actions",
  style,
  ...props
}: { label?: string } & ComponentPropsWithoutRef<"button">) => (
  <button
    type="button"
    {...props}
    style={{
      padding: "8px 16px",
      borderRadius: "6px",
      border: "1px solid #ccc",
      background: "#fff",
      cursor: "pointer",
      ...style,
    }}
  >
    {label} ?
  </button>
);

export const Default: Story = {
  render: () => (
    <div style={{ padding: "40px" }}>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <TriggerButton />
        </DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <DropdownMenu.Item>Edit</DropdownMenu.Item>
          <DropdownMenu.Item>Duplicate</DropdownMenu.Item>
          <DropdownMenu.Item>Share</DropdownMenu.Item>
          <DropdownMenu.Separator />
          <DropdownMenu.Item destructive>Delete</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </div>
  ),
};

export const WithDisabledItem: Story = {
  render: () => (
    <div style={{ padding: "40px" }}>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <TriggerButton label="Options" />
        </DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <DropdownMenu.Item>View</DropdownMenu.Item>
          <DropdownMenu.Item disabled>Export (unavailable)</DropdownMenu.Item>
          <DropdownMenu.Separator />
          <DropdownMenu.Item destructive>Remove</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </div>
  ),
};

export const GlassOverlay: Story = {
  render: () => (
    <div
      style={{
        padding: "48px",
        borderRadius: "var(--boulder-radius-md)",
        background:
          "linear-gradient(135deg, #5c7b68 0%, #8ea981 38%, #d9cb94 74%, #f3eee0 100%)",
      }}
    >
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <TriggerButton label="Map Actions" />
        </DropdownMenu.Trigger>
        <DropdownMenu.Content variant="glass">
          <DropdownMenu.Item>Center viewport</DropdownMenu.Item>
          <DropdownMenu.Item>Inspect habitat</DropdownMenu.Item>
          <DropdownMenu.Item>Open metadata</DropdownMenu.Item>
          <DropdownMenu.Separator />
          <DropdownMenu.Item destructive>Remove overlay</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </div>
  ),
};
