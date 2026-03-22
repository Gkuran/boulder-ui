import type {
  HTMLAttributes,
  ReactNode,
  ThHTMLAttributes,
  TdHTMLAttributes,
} from "react";

// ─── Column definition ──────────────────────────────────────────────────────

export interface DataTableColumn<T = unknown> {
  /** Unique key matching a property in the row data, or a custom string. */
  key: string;

  /** Header label displayed in the column head. */
  header: string;

  /**
   * Optional custom cell renderer.
   * When omitted, the cell displays `row[key]` as a string.
   */
  render?: (row: T, rowIndex: number) => ReactNode;

  /**
   * Column text alignment.
   * @default "left"
   */
  align?: "left" | "center" | "right";

  /**
   * Optional fixed or min width for the column (CSS value).
   * Example: "120px", "10%"
   */
  width?: string;
}

// ─── Filter tag ─────────────────────────────────────────────────────────────

export interface DataTableFilter {
  /** Unique identifier for the filter. */
  id: string;

  /** Display label, e.g. "Aprovados (5)". */
  label: string;

  /** Whether this filter is currently active/selected. */
  active?: boolean;
}

// ─── DataTable (root) ───────────────────────────────────────────────────────

export interface DataTableProps<T = unknown>
  extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
  /**
   * Column definitions describing the table structure.
   */
  columns: DataTableColumn<T>[];

  /**
   * Array of row data objects.
   */
  data: T[];

  /**
   * Unique key extractor for each row.
   * Receives the row data and its index; must return a unique string or number.
   */
  rowKey: (row: T, index: number) => string | number;

  // ─── Search / filter header ──────────────────────────────────────────────

  /**
   * Whether to show the search field in the header area.
   * @default false
   */
  showSearch?: boolean;

  /** Placeholder text for the search field. */
  searchPlaceholder?: string;

  /** Controlled search value. */
  searchValue?: string;

  /** Callback fired when the search value changes. */
  onSearchChange?: (value: string) => void;

  /** Callback fired when the search field is cleared. */
  onSearchClear?: () => void;

  /**
   * Leading icon for the search field.
   * Defaults to a magnifying glass when `showSearch` is true.
   */
  searchIcon?: ReactNode;

  // ─── Filter tags ─────────────────────────────────────────────────────────

  /**
   * Filter tag definitions rendered below the search field.
   * Uses the Tag component internally.
   */
  filters?: DataTableFilter[];

  /** Callback fired when a filter tag is clicked. */
  onFilterClick?: (filterId: string) => void;

  /** Callback fired when a filter tag is removed. */
  onFilterRemove?: (filterId: string) => void;

  // ─── Pagination ──────────────────────────────────────────────────────────

  /**
   * Whether to show the paginator.
   * @default false
   */
  showPagination?: boolean;

  /** Current page number (1-indexed). */
  currentPage?: number;

  /** Total number of pages. */
  totalPages?: number;

  /** Callback fired when the page changes. */
  onPageChange?: (page: number) => void;

  // ─── Empty state ─────────────────────────────────────────────────────────

  /**
   * Content displayed when `data` is empty.
   * @default "No data available."
   */
  emptyMessage?: ReactNode;

  // ─── Actions column ──────────────────────────────────────────────────────

  /**
   * Optional slot rendered at the end of each row for action buttons.
   */
  renderActions?: (row: T, rowIndex: number) => ReactNode;
}

// ─── DataTableHead ──────────────────────────────────────────────────────────

export interface DataTableHeadProps
  extends ThHTMLAttributes<HTMLTableCellElement> {
  /** Column text alignment. */
  align?: "left" | "center" | "right";
}

// ─── DataTableCell ──────────────────────────────────────────────────────────

export interface DataTableCellProps
  extends TdHTMLAttributes<HTMLTableCellElement> {
  /** Column text alignment. */
  align?: "left" | "center" | "right";
}

// ─── DataTableRow ───────────────────────────────────────────────────────────

export interface DataTableRowProps
  extends HTMLAttributes<HTMLTableRowElement> {}

// ─── DataTablePaginator ─────────────────────────────────────────────────────

export interface DataTablePaginatorProps extends HTMLAttributes<HTMLDivElement> {
  /** Current page (1-indexed). */
  currentPage: number;

  /** Total number of pages. */
  totalPages: number;

  /** Callback fired when the page changes. */
  onPageChange: (page: number) => void;

  /**
   * Accessible label for the pagination nav.
   * @default "Table pagination"
   */
  ariaLabel?: string;
}
