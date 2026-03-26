import type { Meta, StoryObj } from "@storybook/react";
import { Spinner } from "./";

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta: Meta<typeof Spinner> = {
  title: "Feedback/Spinner",
  component: Spinner,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
The **Spinner** component provides visual feedback during loading states. It is a pure CSS animation — no JavaScript timers or intervals — making it extremely lightweight and performant.

## Design

The spinner uses a circular border technique: the full ring is rendered in a semi-transparent track color, and a single arc segment is highlighted in the active color via \`border-top-color\`. A CSS \`@keyframes\` animation rotates it continuously.

## Accessibility

The component renders a \`<span role="status">\` with an \`aria-label\` attribute. A visually hidden \`<span>\` inside it contains the same label text, ensuring screen readers announce the loading state correctly.

\`\`\`tsx
<Spinner label="Loading occurrence records..." />
\`\`\`

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| \`size\` | \`"xs" \\| "sm" \\| "md" \\| "lg" \\| "xl"\` | \`"md"\` | Visual size |
| \`variant\` | \`"primary" \\| "muted" \\| "success" \\| "danger" \\| "warning" \\| "info" \\| "inverse"\` | \`"primary"\` | Color variant |
| \`label\` | \`string\` | \`"Loading..."\` | Accessible label for screen readers |
        `,
      },
    },
  },
  argTypes: {
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    variant: {
      control: "select",
      options: ["primary", "muted", "success", "danger", "warning", "info", "inverse"],
    },
    label: {
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Spinner>;

// ─── Shared styles ────────────────────────────────────────────────────────────

const row: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "var(--boulder-spacing-lg)",
  flexWrap: "wrap",
};

const col: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "var(--boulder-spacing-sm)",
  fontFamily: "var(--boulder-font-family)",
  fontSize: "var(--boulder-font-size-sm)",
  color: "var(--boulder-color-text-secondary)",
};

// ─── Stories ─────────────────────────────────────────────────────────────────

export const Default: Story = {
  name: "Default",
  args: {
    size: "md",
    variant: "primary",
    label: "Loading...",
  },
  parameters: {
    docs: {
      description: {
        story: "Default spinner at `md` size with the `primary` color variant.",
      },
    },
  },
};

export const Sizes: Story = {
  name: "Sizes — xs / sm / md / lg / xl",
  render: () => (
    <div style={row}>
      {(["xs", "sm", "md", "lg", "xl"] as const).map((size) => (
        <div key={size} style={col}>
          <Spinner size={size} label={`Loading (${size})...`} />
          <span>{size}</span>
        </div>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "All five available sizes. Use `xs` and `sm` inline within buttons or table rows, `md` for general page sections, and `lg`/`xl` for full-panel loading states.",
      },
    },
  },
};

export const Variants: Story = {
  name: "Variants — All Colors",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--boulder-spacing-lg)" }}>
      <div style={row}>
        {(["primary", "muted", "success", "danger", "warning", "info"] as const).map((variant) => (
          <div key={variant} style={col}>
            <Spinner variant={variant} label={`Loading (${variant})...`} />
            <span>{variant}</span>
          </div>
        ))}
      </div>
      {/* Inverse variant on a dark background */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "var(--boulder-spacing-sm)",
          background: "var(--boulder-color-text)",
          borderRadius: "var(--boulder-radius-md)",
          padding: "var(--boulder-spacing-md) var(--boulder-spacing-lg)",
        }}
      >
        <Spinner variant="inverse" label="Loading..." />
        <span
          style={{
            fontFamily: "var(--boulder-font-family)",
            fontSize: "var(--boulder-font-size-sm)",
            color: "var(--boulder-color-text-inverse)",
          }}
        >
          inverse — for dark backgrounds
        </span>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "All color variants. Use `primary` for general loading, `success`/`danger`/`warning`/`info` for state-specific feedback, `muted` for subtle contexts, and `inverse` on dark backgrounds.",
      },
    },
  },
};

export const InlineWithText: Story = {
  name: "Inline — With Loading Text",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--boulder-spacing-md)", width: 320 }}>
      {[
        { label: "Loading occurrence records...", variant: "primary" as const },
        { label: "Processing shapefile...", variant: "info" as const },
        { label: "Saving soil sample SS-049...", variant: "success" as const },
        { label: "Validating coordinates...", variant: "warning" as const },
      ].map(({ label, variant }) => (
        <div
          key={label}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "var(--boulder-spacing-sm)",
            fontFamily: "var(--boulder-font-family)",
            fontSize: "var(--boulder-font-size-md)",
            color: "var(--boulder-color-text-secondary)",
          }}
        >
          <Spinner size="sm" variant={variant} label={label} />
          <span>{label}</span>
        </div>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Spinners used inline alongside descriptive loading text. The `sm` size pairs well with `font-size-md` text in list or panel contexts.",
      },
    },
  },
};

export const FullPanelLoading: Story = {
  name: "Full Panel — Loading State",
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "var(--boulder-spacing-md)",
        width: 360,
        height: 200,
        border: "1px solid var(--boulder-color-border)",
        borderRadius: "var(--boulder-radius-md)",
        background: "var(--boulder-color-background)",
      }}
    >
      <Spinner size="lg" variant="primary" label="Loading fauna records..." />
      <span
        style={{
          fontFamily: "var(--boulder-font-family)",
          fontSize: "var(--boulder-font-size-md)",
          color: "var(--boulder-color-text-secondary)",
        }}
      >
        Loading fauna records...
      </span>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "A `lg` spinner centered inside a card panel, simulating a full data-loading state for a fauna occurrence list.",
      },
    },
  },
};

export const OnDarkBackground: Story = {
  name: "Inverse — On Dark Background",
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "var(--boulder-spacing-md)",
        width: 360,
        height: 160,
        borderRadius: "var(--boulder-radius-md)",
        background: "var(--boulder-color-text)",
      }}
    >
      <Spinner size="lg" variant="inverse" label="Rendering map layers..." />
      <span
        style={{
          fontFamily: "var(--boulder-font-family)",
          fontSize: "var(--boulder-font-size-md)",
          color: "var(--boulder-color-text-inverse)",
        }}
      >
        Rendering map layers...
      </span>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "The `inverse` variant is designed for dark backgrounds, such as a loading overlay on top of a map canvas while GeoJSON or shapefile layers are being rendered.",
      },
    },
  },
};
