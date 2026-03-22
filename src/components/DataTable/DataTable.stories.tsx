import { useState, useMemo } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { DataTable } from "./DataTable";
import { Badge } from "@/components/Badge";
import type { DataTableColumn, DataTableFilter } from "./DataTable.types";

/* ─── Sample data ─────────────────────────────────────────────────────────── */

interface Order {
  id: string;
  client: string;
  email: string;
  product: string;
  date: string;
  gross: string;
  subtotal: string;
  net: string;
  status: "approved" | "pending" | "refunded";
  method: string;
}

const ORDERS: Order[] = [
  {
    id: "#30218",
    client: "Instituto Aurora",
    email: "financeiro@institutoaurora.com.br",
    product: "Mentoria Scale Pro",
    date: "09/03/2026",
    gross: "R$ 3.490,00",
    subtotal: "R$ 3.490,00",
    net: "R$ 3.490,00",
    status: "approved",
    method: "PIX",
  },
  {
    id: "#30219",
    client: "Grupo Nexus",
    email: "contato@gruponexus.com.br",
    product: "Mentoria Scale Pro",
    date: "10/03/2026",
    gross: "R$ 3.490,00",
    subtotal: "R$ 3.490,00",
    net: "R$ 3.490,00",
    status: "approved",
    method: "PIX",
  },
  {
    id: "#30220",
    client: "Clínica Viva",
    email: "admin@clinicaviva.com.br",
    product: "Mentoria Scale Pro",
    date: "11/03/2026",
    gross: "R$ 3.490,00",
    subtotal: "R$ 3.490,00",
    net: "R$ 3.490,00",
    status: "pending",
    method: "Credit Card",
  },
  {
    id: "#30221",
    client: "Tech Solutions",
    email: "hello@techsolutions.io",
    product: "Mentoria Scale Pro",
    date: "12/03/2026",
    gross: "R$ 3.490,00",
    subtotal: "R$ 3.490,00",
    net: "R$ 3.490,00",
    status: "pending",
    method: "Boleto",
  },
  {
    id: "#30222",
    client: "Aurora Digital",
    email: "digital@aurora.com.br",
    product: "Mentoria Scale Pro",
    date: "13/03/2026",
    gross: "R$ 3.490,00",
    subtotal: "R$ 3.490,00",
    net: "R$ 3.490,00",
    status: "refunded",
    method: "PIX",
  },
  {
    id: "#30223",
    client: "Studio Criativo",
    email: "ola@studiocriativo.com.br",
    product: "Mentoria Scale Pro",
    date: "14/03/2026",
    gross: "R$ 3.490,00",
    subtotal: "R$ 3.490,00",
    net: "R$ 3.490,00",
    status: "refunded",
    method: "Credit Card",
  },
];

const STATUS_VARIANT: Record<Order["status"], "success" | "warning" | "danger"> = {
  approved: "success",
  pending: "warning",
  refunded: "danger",
};

const STATUS_LABEL: Record<Order["status"], string> = {
  approved: "APROVADO",
  pending: "PENDENTE",
  refunded: "ESTORNADO",
};

const columns: DataTableColumn<Order>[] = [
  { key: "id", header: "ID", width: "80px" },
  {
    key: "client",
    header: "Cliente",
    width: "200px",
    render: (row) => (
      <div>
        <div style={{ fontWeight: 500, color: "var(--virtu-color-text)" }}>
          {row.client}
        </div>
        <div
          style={{
            fontSize: "11px",
            color: "rgba(255,255,255,0.35)",
            marginTop: "2px",
          }}
        >
          {row.email}
        </div>
      </div>
    ),
  },
  { key: "product", header: "Produto" },
  { key: "date", header: "Data", align: "center" },
  { key: "gross", header: "Bruto", align: "right" },
  { key: "subtotal", header: "Subtotal", align: "right" },
  { key: "net", header: "Líquido", align: "right" },
  {
    key: "status",
    header: "Status",
    align: "center",
    render: (row) => (
      <Badge variant={STATUS_VARIANT[row.status]}>
        {STATUS_LABEL[row.status]}
      </Badge>
    ),
  },
  { key: "method", header: "Método", align: "center" },
];

/* ─── Meta ────────────────────────────────────────────────────────────────── */

const meta: Meta<typeof DataTable> = {
  title: "Components/DataTable",
  component: DataTable,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
The **DataTable** is a composable, glassmorphism-styled data table for displaying tabular data with optional search, filter tags, and pagination.

## Overview

The component is built from internal subcomponents that are all exported for advanced composition:

- **DataTable** — Root component that orchestrates search, filters, table, and pagination
- **DataTableHead** — Header cell (\`<th>\`)
- **DataTableCell** — Body cell (\`<td>\`)
- **DataTableRow** — Body row (\`<tr>\`) with glass gradient background
- **DataTablePaginator** — Page navigation with chevrons and ellipsis

It reuses existing Virtu UI components:
- **SearchField** for the search input
- **Tag** for filter tags
- **Badge** for status cells (via custom column renderers)

## Installation

\`\`\`bash
npm install virtu-ui
\`\`\`

## Import

\`\`\`tsx
import { DataTable } from 'virtu-ui';
import type { DataTableColumn } from 'virtu-ui';
\`\`\`

## Key Props

| Prop | Type | Default | Description |
|---|---|---|---|
| \`columns\` | \`DataTableColumn<T>[]\` | — | Column definitions |
| \`data\` | \`T[]\` | — | Row data array |
| \`rowKey\` | \`(row, index) => string \\| number\` | — | Unique key extractor |
| \`showSearch\` | \`boolean\` | \`false\` | Show the SearchField header |
| \`searchValue\` | \`string\` | — | Controlled search value |
| \`onSearchChange\` | \`(value: string) => void\` | — | Search change handler |
| \`filters\` | \`DataTableFilter[]\` | — | Filter tag definitions |
| \`onFilterClick\` | \`(id: string) => void\` | — | Filter click handler |
| \`showPagination\` | \`boolean\` | \`false\` | Show the paginator |
| \`currentPage\` | \`number\` | \`1\` | Current page (1-indexed) |
| \`totalPages\` | \`number\` | \`1\` | Total pages |
| \`onPageChange\` | \`(page: number) => void\` | — | Page change handler |
| \`renderActions\` | \`(row, index) => ReactNode\` | — | Actions column renderer |
| \`emptyMessage\` | \`ReactNode\` | \`"No data available."\` | Empty state content |
        `,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof DataTable>;

/* ─── Stories ─────────────────────────────────────────────────────────────── */

export const Default: Story = {
  name: "Default (Minimal)",
  render: () => (
    <DataTable
      columns={columns}
      data={ORDERS.slice(0, 3)}
      rowKey={(row) => row.id}
    />
  ),
};

export const WithSearchAndFilters: Story = {
  name: "Search + Filters (Figma Reference)",
  render: function FigmaReferenceStory() {
    const [search, setSearch] = useState("");
    const [activeFilter, setActiveFilter] = useState("all");

    const filters: DataTableFilter[] = [
      { id: "all", label: "Todos", active: activeFilter === "all" },
      { id: "approved", label: "Aprovados (5)", active: activeFilter === "approved" },
      { id: "pending", label: "Pendentes (2)", active: activeFilter === "pending" },
      { id: "refunded", label: "Estornados (2)", active: activeFilter === "refunded" },
    ];

    const filtered = useMemo(() => {
      let rows = ORDERS;

      if (activeFilter !== "all") {
        rows = rows.filter((r) => r.status === activeFilter);
      }

      if (search.trim()) {
        const q = search.toLowerCase();
        rows = rows.filter(
          (r) =>
            r.id.toLowerCase().includes(q) ||
            r.client.toLowerCase().includes(q) ||
            r.email.toLowerCase().includes(q) ||
            r.product.toLowerCase().includes(q),
        );
      }

      return rows;
    }, [search, activeFilter]);

    return (
      <DataTable
        columns={columns}
        data={filtered}
        rowKey={(row) => row.id}
        showSearch
        searchPlaceholder="Buscar por ID, cliente, e-mail ou oferta..."
        searchValue={search}
        onSearchChange={setSearch}
        onSearchClear={() => setSearch("")}
        filters={filters}
        onFilterClick={setActiveFilter}
        emptyMessage="Nenhum pedido encontrado."
      />
    );
  },
};

export const WithPagination: Story = {
  name: "With Pagination",
  render: function PaginationStory() {
    const pageSize = 2;
    const [page, setPage] = useState(1);
    const totalPages = Math.ceil(ORDERS.length / pageSize);

    const pageData = ORDERS.slice((page - 1) * pageSize, page * pageSize);

    return (
      <DataTable
        columns={columns}
        data={pageData}
        rowKey={(row) => row.id}
        showPagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={setPage}
      />
    );
  },
};

export const FullFeatured: Story = {
  name: "Full Featured (Search + Filters + Pagination)",
  render: function FullFeaturedStory() {
    const pageSize = 3;
    const [search, setSearch] = useState("");
    const [activeFilter, setActiveFilter] = useState("all");
    const [page, setPage] = useState(1);

    const filters: DataTableFilter[] = [
      { id: "all", label: "Todos", active: activeFilter === "all" },
      { id: "approved", label: "Aprovados (5)", active: activeFilter === "approved" },
      { id: "pending", label: "Pendentes (2)", active: activeFilter === "pending" },
      { id: "refunded", label: "Estornados (2)", active: activeFilter === "refunded" },
    ];

    const filtered = useMemo(() => {
      let rows = ORDERS;

      if (activeFilter !== "all") {
        rows = rows.filter((r) => r.status === activeFilter);
      }

      if (search.trim()) {
        const q = search.toLowerCase();
        rows = rows.filter(
          (r) =>
            r.id.toLowerCase().includes(q) ||
            r.client.toLowerCase().includes(q) ||
            r.email.toLowerCase().includes(q),
        );
      }

      return rows;
    }, [search, activeFilter]);

    const totalPages = Math.ceil(filtered.length / pageSize);
    const safePage = Math.min(page, totalPages || 1);
    const pageData = filtered.slice(
      (safePage - 1) * pageSize,
      safePage * pageSize,
    );

    return (
      <DataTable
        columns={columns}
        data={pageData}
        rowKey={(row) => row.id}
        showSearch
        searchPlaceholder="Buscar por ID, cliente, e-mail ou oferta..."
        searchValue={search}
        onSearchChange={(v) => {
          setSearch(v);
          setPage(1);
        }}
        onSearchClear={() => {
          setSearch("");
          setPage(1);
        }}
        filters={filters}
        onFilterClick={(id) => {
          setActiveFilter(id);
          setPage(1);
        }}
        showPagination
        currentPage={safePage}
        totalPages={totalPages}
        onPageChange={setPage}
        emptyMessage="Nenhum pedido encontrado."
      />
    );
  },
};

export const EmptyState: Story = {
  name: "Empty State",
  render: () => (
    <DataTable
      columns={columns}
      data={[]}
      rowKey={(_, i) => i}
      showSearch
      searchPlaceholder="Buscar..."
      emptyMessage="Nenhum pedido encontrado."
    />
  ),
};

export const WithActions: Story = {
  name: "With Actions Column",
  render: () => (
    <DataTable
      columns={columns.slice(0, 5)}
      data={ORDERS.slice(0, 3)}
      rowKey={(row) => row.id}
      renderActions={(row) => (
        <button
          type="button"
          onClick={() => alert(`Action for ${row.id}`)}
          style={{
            background: "transparent",
            border: "1px solid rgba(255,255,255,0.15)",
            borderRadius: "6px",
            color: "rgba(255,255,255,0.6)",
            padding: "4px 10px",
            fontSize: "12px",
            cursor: "pointer",
          }}
        >
          View
        </button>
      )}
    />
  ),
};
