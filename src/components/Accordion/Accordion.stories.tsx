import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./";

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta: Meta<typeof Accordion> = {
  title: "Components/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
The **Accordion** component is a composable, accessible disclosure widget that allows users to show and hide sections of related content. It follows the [WAI-ARIA Accordion pattern](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/) and supports both controlled and uncontrolled usage.

## Overview

The Accordion is built from four composable sub-components that work together through a shared React context:

- **\`Accordion\`** — The root container. Defines the visual variant.
- **\`AccordionItem\`** — A single collapsible section. Manages its own open/closed state.
- **\`AccordionTrigger\`** — The button that toggles the item. Renders a chevron icon automatically.
- **\`AccordionContent\`** — The panel that is shown or hidden. Linked to the trigger via ARIA attributes.

## Installation

\`\`\`bash
npm install boulder-ui
\`\`\`

## Import

\`\`\`tsx
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "boulder-ui";
\`\`\`

## Props

### Accordion

| Prop | Type | Default | Description |
|---|---|---|---|
| \`variant\` | \`"default" \\| "flush"\` | \`"default"\` | Visual style of the root container |
| \`className\` | \`string\` | — | Additional CSS class |

### AccordionItem

| Prop | Type | Default | Description |
|---|---|---|---|
| \`defaultOpen\` | \`boolean\` | \`false\` | Initial open state (uncontrolled) |
| \`open\` | \`boolean\` | — | Controlled open state |
| \`onOpenChange\` | \`(open: boolean) => void\` | — | Callback when open state changes |
| \`disabled\` | \`boolean\` | \`false\` | Prevents the item from being toggled |

### AccordionTrigger

Accepts all native \`<button>\` attributes except \`type\` (always \`"button"\`).

### AccordionContent

Accepts all native \`<div>\` attributes.

## Accessibility

- Each trigger has \`aria-expanded\` reflecting the current open state.
- Each trigger has \`aria-controls\` pointing to its content panel.
- Each content panel has \`role="region"\` and \`aria-labelledby\` pointing to its trigger.
- Disabled items use both \`disabled\` and \`aria-disabled\` on the trigger button.
- The chevron icon is marked \`aria-hidden="true"\`.
- Focus is managed via \`:focus-visible\` with a visible outline.

## Variants

- **Default**: Bordered container with rounded corners. Ideal for standalone sections.
- **Flush**: No outer border or radius. Items are separated by dividers only. Ideal for use inside cards or panels.

## Usage Examples

### Default (uncontrolled)

\`\`\`tsx
<Accordion>
  <AccordionItem>
    <AccordionTrigger>What is Boulder UI?</AccordionTrigger>
    <AccordionContent>
      Boulder UI is a lightweight, accessible React component library
      focused on consistency and composability.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem>
    <AccordionTrigger>How do I install it?</AccordionTrigger>
    <AccordionContent>
      Run <code>npm install boulder-ui</code> and import the styles
      via <code>import "boulder-ui/styles"</code>.
    </AccordionContent>
  </AccordionItem>
</Accordion>
\`\`\`

### Flush variant

\`\`\`tsx
<Accordion variant="flush">
  <AccordionItem>
    <AccordionTrigger>Section one</AccordionTrigger>
    <AccordionContent>Content for section one.</AccordionContent>
  </AccordionItem>
  <AccordionItem>
    <AccordionTrigger>Section two</AccordionTrigger>
    <AccordionContent>Content for section two.</AccordionContent>
  </AccordionItem>
</Accordion>
\`\`\`

### Controlled

\`\`\`tsx
const [open, setOpen] = useState(false);

<Accordion>
  <AccordionItem open={open} onOpenChange={setOpen}>
    <AccordionTrigger>Controlled item</AccordionTrigger>
    <AccordionContent>
      This item's state is managed externally.
    </AccordionContent>
  </AccordionItem>
</Accordion>
\`\`\`

### Disabled item

\`\`\`tsx
<Accordion>
  <AccordionItem disabled>
    <AccordionTrigger>Unavailable section</AccordionTrigger>
    <AccordionContent>This content cannot be accessed.</AccordionContent>
  </AccordionItem>
</Accordion>
\`\`\`
`,
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "flush"],
      description: "Visual style of the accordion root container.",
      table: {
        defaultValue: { summary: "default" },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

// ─── Stories ──────────────────────────────────────────────────────────────────

export const Default: Story = {
  name: "Default",
  render: (args) => (
    <Accordion {...args}>
      <AccordionItem>
        <AccordionTrigger>What is Boulder UI?</AccordionTrigger>
        <AccordionContent>
          Boulder UI is a lightweight, accessible React component library
          focused on building consistent, composable interfaces through design
          tokens and strong TypeScript types.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem>
        <AccordionTrigger>How do I install it?</AccordionTrigger>
        <AccordionContent>
          Run <code>npm install boulder-ui</code> in your project, then import
          the design tokens via{" "}
          <code>import &quot;boulder-ui/styles&quot;</code> in your entry file.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem>
        <AccordionTrigger>Can I customize the colors?</AccordionTrigger>
        <AccordionContent>
          Yes. All visual properties are driven by CSS custom properties
          (design tokens). Override any <code>--boulder-*</code> token in your
          application&apos;s <code>:root</code> to retheme the entire library.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
  args: {
    variant: "default",
  },
};

export const Flush: Story = {
  name: "Flush",
  render: (args) => (
    <Accordion {...args}>
      <AccordionItem>
        <AccordionTrigger>Design tokens</AccordionTrigger>
        <AccordionContent>
          All spacing, color, typography, and radius values are defined as CSS
          custom properties, ensuring a single source of truth for visual
          decisions.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem>
        <AccordionTrigger>Tree-shaking</AccordionTrigger>
        <AccordionContent>
          The library is built with <code>preserveModules</code> enabled,
          meaning bundlers can eliminate unused components from the final
          output.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem>
        <AccordionTrigger>Accessibility</AccordionTrigger>
        <AccordionContent>
          Components follow WAI-ARIA patterns and support keyboard navigation,
          proper ARIA attributes, and focus management out of the box.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
  args: {
    variant: "flush",
  },
};

export const DefaultOpen: Story = {
  name: "Default Open",
  render: (args) => (
    <Accordion {...args}>
      <AccordionItem defaultOpen>
        <AccordionTrigger>This item starts open</AccordionTrigger>
        <AccordionContent>
          The <code>defaultOpen</code> prop sets the initial state without
          making the component controlled. The user can still toggle it freely.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem>
        <AccordionTrigger>This item starts closed</AccordionTrigger>
        <AccordionContent>
          Multiple items can be open simultaneously since each{" "}
          <code>AccordionItem</code> manages its own independent state.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
  args: {
    variant: "default",
  },
};

export const WithDisabledItem: Story = {
  name: "With Disabled Item",
  render: (args) => (
    <Accordion {...args}>
      <AccordionItem>
        <AccordionTrigger>Available section</AccordionTrigger>
        <AccordionContent>This section can be toggled normally.</AccordionContent>
      </AccordionItem>
      <AccordionItem disabled>
        <AccordionTrigger>Disabled section</AccordionTrigger>
        <AccordionContent>
          This content is not accessible while the item is disabled.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem>
        <AccordionTrigger>Another available section</AccordionTrigger>
        <AccordionContent>This section can also be toggled normally.</AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
  args: {
    variant: "default",
  },
};

export const Controlled: Story = {
  name: "Controlled",
  render: (args) => {
    const [open, setOpen] = useState(false);
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <div style={{ display: "flex", gap: "8px" }}>
          <button
            type="button"
            onClick={() => setOpen(true)}
            style={{ padding: "6px 12px", cursor: "pointer" }}
          >
            Open
          </button>
          <button
            type="button"
            onClick={() => setOpen(false)}
            style={{ padding: "6px 12px", cursor: "pointer" }}
          >
            Close
          </button>
        </div>
        <Accordion {...args}>
          <AccordionItem open={open} onOpenChange={setOpen}>
            <AccordionTrigger>Controlled item</AccordionTrigger>
            <AccordionContent>
              This item&apos;s open state is managed externally via the{" "}
              <code>open</code> and <code>onOpenChange</code> props. Use the
              buttons above to control it programmatically.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    );
  },
  args: {
    variant: "default",
  },
  parameters: {
    docs: {
      description: {
        story:
          "When `open` and `onOpenChange` are provided, the item becomes fully controlled. Use the external buttons to toggle the panel programmatically.",
      },
    },
  },
};
