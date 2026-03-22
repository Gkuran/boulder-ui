import { forwardRef } from "react";
import type {
  DataTableProps,
  DataTableHeadProps,
  DataTableCellProps,
  DataTableRowProps,
  DataTablePaginatorProps,
} from "./DataTable.types";
import { cx } from "@/utils";
import { SearchField } from "@/components/SearchField";
import { Tag } from "@/components/Tag";
import styles from "./DataTable.module.css";

// ─── Default search icon ────────────────────────────────────────────────────

const DefaultSearchIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

// ─── Paginator chevron icons ────────────────────────────────────────────────

const ChevronLeft = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 3L5 7L9 11" />
  </svg>
);

const ChevronRight = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 3L9 7L5 11" />
  </svg>
);

// ─── DataTableHead ──────────────────────────────────────────────────────────

export const DataTableHead = forwardRef<
  HTMLTableCellElement,
  DataTableHeadProps
>(({ align = "left", className, children, style, ...props }, ref) => {
  const alignClass =
    align === "center"
      ? styles.alignCenter
      : align === "right"
        ? styles.alignRight
        : styles.alignLeft;

  return (
    <th
      ref={ref}
      className={cx(styles.headCell, alignClass, className)}
      style={style}
      {...props}
    >
      {children}
    </th>
  );
});
DataTableHead.displayName = "DataTableHead";

// ─── DataTableCell ──────────────────────────────────────────────────────────

export const DataTableCell = forwardRef<
  HTMLTableCellElement,
  DataTableCellProps
>(({ align = "left", className, children, style, ...props }, ref) => {
  const alignClass =
    align === "center"
      ? styles.alignCenter
      : align === "right"
        ? styles.alignRight
        : styles.alignLeft;

  return (
    <td
      ref={ref}
      className={cx(styles.cell, alignClass, className)}
      style={style}
      {...props}
    >
      {children}
    </td>
  );
});
DataTableCell.displayName = "DataTableCell";

// ─── DataTableRow ───────────────────────────────────────────────────────────

export const DataTableRow = forwardRef<HTMLTableRowElement, DataTableRowProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <tr ref={ref} className={cx(styles.row, className)} {...props}>
        {children}
      </tr>
    );
  },
);
DataTableRow.displayName = "DataTableRow";

// ─── DataTablePaginator ─────────────────────────────────────────────────────

/**
 * Generates a page range array with ellipsis.
 * Example: [1, '...', 4, 5, 6, '...', 10]
 */
function getPageRange(
  current: number,
  total: number,
): (number | "...")[] {
  if (total <= 7) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  const pages: (number | "...")[] = [];

  // Always show first page
  pages.push(1);

  if (current > 3) {
    pages.push("...");
  }

  const start = Math.max(2, current - 1);
  const end = Math.min(total - 1, current + 1);

  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  if (current < total - 2) {
    pages.push("...");
  }

  // Always show last page
  pages.push(total);

  return pages;
}

export const DataTablePaginator = forwardRef<
  HTMLDivElement,
  DataTablePaginatorProps
>(
  (
    {
      currentPage,
      totalPages,
      onPageChange,
      ariaLabel = "Table pagination",
      className,
      ...props
    },
    ref,
  ) => {
    if (totalPages <= 1) return null;

    const pages = getPageRange(currentPage, totalPages);

    return (
      <nav
        ref={ref}
        aria-label={ariaLabel}
        className={cx(styles.paginator, className)}
        {...props}
      >
        <button
          type="button"
          className={styles.pageButton}
          disabled={currentPage <= 1}
          onClick={() => onPageChange(currentPage - 1)}
          aria-label="Previous page"
        >
          <ChevronLeft />
        </button>

        {pages.map((page, i) =>
          page === "..." ? (
            <span key={`ellipsis-${i}`} className={styles.pageEllipsis}>
              ...
            </span>
          ) : (
            <button
              key={page}
              type="button"
              className={cx(
                styles.pageButton,
                page === currentPage && styles.pageButtonActive,
              )}
              onClick={() => onPageChange(page)}
              aria-current={page === currentPage ? "page" : undefined}
              aria-label={`Page ${page}`}
            >
              {page}
            </button>
          ),
        )}

        <button
          type="button"
          className={styles.pageButton}
          disabled={currentPage >= totalPages}
          onClick={() => onPageChange(currentPage + 1)}
          aria-label="Next page"
        >
          <ChevronRight />
        </button>
      </nav>
    );
  },
);
DataTablePaginator.displayName = "DataTablePaginator";

// ─── DataTable (root) ───────────────────────────────────────────────────────

export function DataTable<T = unknown>({
  columns,
  data,
  rowKey,

  showSearch = false,
  searchPlaceholder = "Search...",
  searchValue,
  onSearchChange,
  onSearchClear,
  searchIcon,

  filters,
  onFilterClick,
  onFilterRemove,

  showPagination = false,
  currentPage = 1,
  totalPages = 1,
  onPageChange,

  emptyMessage = "No data available.",

  renderActions,

  className,
  ...rest
}: DataTableProps<T>) {
  const hasActions = renderActions != null;
  const allColumns = hasActions
    ? [...columns, { key: "__actions__", header: "Actions", align: "center" as const }]
    : columns;

  return (
    <div className={cx(styles.root, className)} {...rest}>
      {/* ─── Header: search + filters ─────────────────────────────────────── */}
      {(showSearch || (filters && filters.length > 0)) && (
        <div className={styles.header}>
          {showSearch && (
            <SearchField
              value={searchValue}
              onChange={
                onSearchChange
                  ? (e) => onSearchChange(e.target.value)
                  : undefined
              }
              onClear={onSearchClear}
              placeholder={searchPlaceholder}
              leadingIcon={searchIcon ?? <DefaultSearchIcon />}
            />
          )}

          {filters && filters.length > 0 && (
            <div className={styles.filters}>
              {filters.map((f) => (
                <Tag
                  key={f.id}
                  label={f.label}
                  active={f.active}
                  onClick={onFilterClick ? () => onFilterClick(f.id) : undefined}
                  onRemove={
                    onFilterRemove ? () => onFilterRemove(f.id) : undefined
                  }
                />
              ))}
            </div>
          )}
        </div>
      )}

      {/* ─── Table ────────────────────────────────────────────────────────── */}
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              {allColumns.map((col) => (
                <DataTableHead
                  key={col.key}
                  align={col.align}
                  style={col.width ? { width: col.width } : undefined}
                >
                  {col.header}
                </DataTableHead>
              ))}
            </tr>
          </thead>

          <tbody>
            {data.length === 0 ? (
              <tr className={styles.emptyRow}>
                <td
                  className={styles.emptyCell}
                  colSpan={allColumns.length}
                >
                  {emptyMessage}
                </td>
              </tr>
            ) : (
              data.map((row, rowIndex) => (
                <DataTableRow key={rowKey(row, rowIndex)}>
                  {columns.map((col) => (
                    <DataTableCell
                      key={col.key}
                      align={col.align}
                      style={col.width ? { width: col.width } : undefined}
                    >
                      {col.render
                        ? col.render(row, rowIndex)
                        : String((row as Record<string, unknown>)[col.key] ?? "")}
                    </DataTableCell>
                  ))}
                  {hasActions && (
                    <DataTableCell align="center">
                      {renderActions(row, rowIndex)}
                    </DataTableCell>
                  )}
                </DataTableRow>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* ─── Paginator ────────────────────────────────────────────────────── */}
      {showPagination && onPageChange && (
        <DataTablePaginator
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
        />
      )}
    </div>
  );
}

DataTable.displayName = "DataTable";
