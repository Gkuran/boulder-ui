import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Tag } from "./Tag";

const meta: Meta<typeof Tag> = {
  title: "Data Display/Tag",
  component: Tag,
  tags: ["autodocs"],
  args: {
    variant: "default",
    children: "Bioma: Cerrado",
  },
  argTypes: {
    variant: {
      control: "radio",
      options: ["default", "primary", "success", "warning", "danger"],
    },
    onRemove: { action: "removed" },
  },
  parameters: {
    docs: {
      description: {
        component: `
## Overview

\`Tag\` é um elemento visual interativo em formato *pill* utilizado para representar **filtros ativos**, seleções múltiplas e categorizações dinâmicas. Diferente do \`Badge\` (estático), a \`Tag\` suporta remoção via botão "X" embutido.

## Import

\`\`\`tsx
import { Tag } from 'boulder-ui';
\`\`\`

## Props

| Prop | Tipo | Default | Descrição |
|------|------|---------|-----------|
| \`variant\` | \`'default' \\| 'primary' \\| 'success' \\| 'warning' \\| 'danger'\` | \`'default'\` | Variante visual |
| \`onRemove\` | \`(e: MouseEvent) => void\` | — | Callback ao clicar no X. Se ausente, a tag é somente-leitura |
| \`removeAriaLabel\` | \`string\` | \`'Remover tag'\` | Rótulo acessível para o botão de remover |

## Acessibilidade

O botão de remover é um \`<button>\` nativo, garantindo navegação por teclado (\`Tab\`, \`Enter\`, \`Space\`). O ícone X possui \`aria-hidden="true"\` e o botão carrega um \`aria-label\` descritivo.
        `,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Tag>;

// ─── Stories base ──────────────────────────────────────────────────────────

export const Default: Story = {
  args: {
    variant: "default",
    children: "Bioma: Cerrado",
  },
};

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Camada: Bacias Hidrográficas",
  },
};

export const Success: Story = {
  args: {
    variant: "success",
    children: "Status: Coletado",
  },
};

export const Warning: Story = {
  args: {
    variant: "warning",
    children: "IUCN: Vulnerável (VU)",
  },
};

export const Danger: Story = {
  args: {
    variant: "danger",
    children: "IUCN: Criticamente em Perigo (CR)",
  },
};

// ─── Com botão de remover ──────────────────────────────────────────────────

export const Removable: Story = {
  args: {
    variant: "primary",
    children: "Tipo: Fauna",
    removeAriaLabel: "Remover filtro Tipo: Fauna",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Quando `onRemove` é fornecido, a tag exibe um botão X acessível. O `removeAriaLabel` deve descrever o que será removido para leitores de tela.",
      },
    },
  },
};

// ─── Somente leitura (sem onRemove) ───────────────────────────────────────

export const ReadOnly: Story = {
  args: {
    variant: "default",
    children: "Amostra de Solo #402",
    onRemove: undefined,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Sem `onRemove`, a tag é renderizada em modo somente-leitura — sem botão de remover. Útil para exibir categorias ou identificadores fixos.",
      },
    },
  },
};

// ─── Grupo de tags: barra de filtros ativos ────────────────────────────────

export const ActiveFiltersBar: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [filters, setFilters] = useState([
      { id: 1, label: "Bioma: Cerrado", variant: "default" as const },
      { id: 2, label: "Tipo: Fauna", variant: "primary" as const },
      { id: 3, label: "Status: Coletado", variant: "success" as const },
      { id: 4, label: "IUCN: Vulnerável (VU)", variant: "warning" as const },
      { id: 5, label: "CRS: SIRGAS 2000", variant: "primary" as const },
    ]);

    const remove = (id: number) =>
      setFilters((prev) => prev.filter((f) => f.id !== id));

    if (filters.length === 0) {
      return (
        <p
          style={{
            fontFamily: "var(--boulder-font-family)",
            fontSize: "var(--boulder-font-size-sm)",
            color: "var(--boulder-color-text-secondary)",
          }}
        >
          Nenhum filtro ativo.
        </p>
      );
    }

    return (
      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
        {filters.map((f) => (
          <Tag
            key={f.id}
            variant={f.variant}
            onRemove={() => remove(f.id)}
            removeAriaLabel={`Remover filtro ${f.label}`}
          >
            {f.label}
          </Tag>
        ))}
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Exemplo interativo de uma barra de filtros ativos acima de uma tabela de ocorrências. Clique no X para remover cada filtro individualmente.",
      },
    },
  },
};

// ─── Grupo de tags: camadas de shapefile ──────────────────────────────────

export const ShapefileLayers: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [layers, setLayers] = useState([
      { id: 1, label: "Unidades de Conservação" },
      { id: 2, label: "Bacias Hidrográficas" },
      { id: 3, label: "Áreas de Preservação Permanente" },
      { id: 4, label: "Zonas de Amortecimento" },
    ]);

    const remove = (id: number) =>
      setLayers((prev) => prev.filter((l) => l.id !== id));

    return (
      <div>
        <p
          style={{
            fontFamily: "var(--boulder-font-family)",
            fontSize: "var(--boulder-font-size-xs)",
            color: "var(--boulder-color-text-secondary)",
            marginBottom: "8px",
            marginTop: 0,
          }}
        >
          Camadas ativas no mapa
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
          {layers.map((l) => (
            <Tag
              key={l.id}
              variant="primary"
              onRemove={() => remove(l.id)}
              removeAriaLabel={`Remover camada ${l.label}`}
            >
              {l.label}
            </Tag>
          ))}
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Tags representando camadas de shapefiles ativas em um visualizador de mapas. Cada tag pode ser removida individualmente para desativar a camada correspondente.",
      },
    },
  },
};

// ─── Todas as variantes ────────────────────────────────────────────────────

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
      <Tag variant="default">Método: Armadilha Fotográfica</Tag>
      <Tag variant="primary">Camada: Hidrografia</Tag>
      <Tag variant="success">Status: Validado</Tag>
      <Tag variant="warning">IUCN: Vulnerável (VU)</Tag>
      <Tag variant="danger">IUCN: Em Perigo (EN)</Tag>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Todas as variantes disponíveis em modo somente-leitura (sem `onRemove`). Útil para exibir metadados de amostras ou ocorrências.",
      },
    },
  },
};
