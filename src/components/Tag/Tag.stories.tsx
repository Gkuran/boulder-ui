import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Tag } from "./Tag";

const meta: Meta<typeof Tag> = {
  title: "Components/Tag",
  component: Tag,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
The **Tag** component is a compact label used to represent applied filters, categories, or selections. It optionally renders a remove button (x) that allows the user to dismiss the tag.

## Overview

Tags are designed for use in filter bars, search interfaces, and multi-select inputs. They follow the Virtu UI glassmorphism aesthetic: translucent background, subtle border, and light text on dark surfaces.

## Installation

\`\`\`bash
npm install virtu-ui
\`\`\`

## Import

\`\`\`tsx
import { Tag } from 'virtu-ui';
\`\`\`

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| \`label\` | \`string\` | — | Text displayed inside the tag |
| \`onRemove\` | \`() => void\` | — | When provided, renders a remove (x) button |
| \`removeLabel\` | \`string\` | \`"Remove {label}"\` | Accessible label for the remove button |
| \`active\` | \`boolean\` | \`false\` | Highlights the tag as selected |

## Usage

### Display-only tag

\`\`\`tsx
<Tag label="Aprovados (5)" />
\`\`\`

### Removable tag

\`\`\`tsx
<Tag label="Aprovados (5)" onRemove={() => removeFilter('aprovados')} />
\`\`\`

### Active/selected tag

\`\`\`tsx
<Tag label="Todos" active />
\`\`\`
        `,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Tag>;

export const Default: Story = {
  args: {
    label: "Aprovados (5)",
  },
};

export const Active: Story = {
  args: {
    label: "Todos",
    active: true,
  },
};

export const Removable: Story = {
  args: {
    label: "Aprovados (5)",
    onRemove: () => {},
  },
};

export const RemovableActive: Story = {
  name: "Removable + Active",
  args: {
    label: "Pendentes (2)",
    active: true,
    onRemove: () => {},
  },
};

export const FilterBar: Story = {
  name: "Filter Bar (Interactive)",
  render: function FilterBarStory() {
    const initialFilters = [
      { id: "todos", label: "Todos" },
      { id: "aprovados", label: "Aprovados (5)" },
      { id: "pendentes", label: "Pendentes (2)" },
      { id: "estornados", label: "Estornados (2)" },
    ];

    const [filters, setFilters] = useState(initialFilters);
    const [active, setActive] = useState("todos");

    const remove = (id: string) =>
      setFilters((prev) => prev.filter((f) => f.id !== id));

    return (
      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
        {filters.length === 0 && (
          <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "13px" }}>
            All filters removed.
          </span>
        )}
        {filters.map((f) => (
          <Tag
            key={f.id}
            label={f.label}
            active={active === f.id}
            onClick={() => setActive(f.id)}
            onRemove={f.id !== "todos" ? () => remove(f.id) : undefined}
          />
        ))}
      </div>
    );
  },
};
