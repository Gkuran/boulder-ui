import type { Meta, StoryObj } from "@storybook/react";
import { Popover } from "./Popover";

const meta: Meta = {
  title: "Overlay/Popover",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
## Overview
**Popover** is a floating container anchored to a trigger element. Unlike \`Tooltip\` (text-only), \`Popover\` can contain rich content such as forms, lists, or actions. It supports both controlled and uncontrolled usage, closes on outside click and Escape key, and traps focus correctly.

## Import
\`\`\`tsx
import { Popover } from 'boulder-ui';
\`\`\`

## Usage
\`\`\`tsx
<Popover.Root>
  <Popover.Trigger>
    <button>Open</button>
  </Popover.Trigger>
  <Popover.Content>
    <p>Popover content here</p>
  </Popover.Content>
</Popover.Root>
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
    <div style={{ padding: "80px" }}>
      <Popover.Root>
        <Popover.Trigger>
          <button style={{ padding: "8px 16px", borderRadius: "6px", border: "1px solid #ccc", cursor: "pointer" }}>
            Open popover
          </button>
        </Popover.Trigger>
        <Popover.Content>
          <p style={{ margin: 0, fontSize: "14px" }}>This is a popover with rich content.</p>
        </Popover.Content>
      </Popover.Root>
    </div>
  ),
};

export const WithForm: Story = {
  render: () => (
    <div style={{ padding: "80px" }}>
      <Popover.Root>
        <Popover.Trigger>
          <button style={{ padding: "8px 16px", borderRadius: "6px", border: "1px solid #ccc", cursor: "pointer" }}>
            Filter options
          </button>
        </Popover.Trigger>
        <Popover.Content style={{ minWidth: "260px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <label htmlFor="popover-status-select" style={{ fontSize: "13px", fontWeight: 600 }}>Status</label>
            <select id="popover-status-select" style={{ padding: "6px", borderRadius: "4px", border: "1px solid #ccc" }}>
              <option>All</option>
              <option>Active</option>
              <option>Inactive</option>
            </select>
            <button style={{ padding: "6px 12px", borderRadius: "4px", background: "#333", color: "#fff", border: "none", cursor: "pointer" }}>
              Apply
            </button>
          </div>
        </Popover.Content>
      </Popover.Root>
    </div>
  ),
};

export const Positions: Story = {
  render: () => (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", padding: "120px" }}>
      {(["bottom", "top", "right", "left"] as const).map((pos) => (
        <Popover.Root key={pos}>
          <Popover.Trigger>
            <button style={{ padding: "8px 16px", borderRadius: "6px", border: "1px solid #ccc", cursor: "pointer" }}>
              {pos}
            </button>
          </Popover.Trigger>
          <Popover.Content position={pos}>
            <p style={{ margin: 0, fontSize: "13px" }}>Popover on {pos}</p>
          </Popover.Content>
        </Popover.Root>
      ))}
    </div>
  ),
};
