import { ButtonHTMLAttributes } from 'react';
import { ForwardRefExoticComponent } from 'react';
import { HTMLAttributes } from 'react';
import { InputHTMLAttributes } from 'react';
import { JSX } from 'react/jsx-runtime';
import { LabelHTMLAttributes } from 'react';
import { ReactElement } from 'react';
import { ReactNode } from 'react';
import { RefAttributes } from 'react';
import { TdHTMLAttributes } from 'react';
import { TextareaHTMLAttributes } from 'react';
import { ThHTMLAttributes } from 'react';

export declare const Accordion: ForwardRefExoticComponent<AccordionProps & RefAttributes<HTMLDivElement>>;

export declare const AccordionContent: ForwardRefExoticComponent<AccordionContentProps & RefAttributes<HTMLDivElement>>;

export declare interface AccordionContentProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
}

export declare const AccordionItem: ForwardRefExoticComponent<AccordionItemProps & RefAttributes<HTMLDivElement>>;

export declare interface AccordionItemProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * Whether this item is expanded by default (uncontrolled).
     * @default false
     */
    defaultOpen?: boolean;
    /**
     * Controlled open state. When provided, the component becomes controlled
     * and `onOpenChange` must also be supplied.
     */
    open?: boolean;
    /**
     * Callback fired when the item's open state changes.
     */
    onOpenChange?: (open: boolean) => void;
    /**
     * When `true`, the item cannot be toggled.
     * @default false
     */
    disabled?: boolean;
}

export declare interface AccordionProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * Visual style of the accordion.
     * - `default`: bordered container with rounded corners.
     * - `flush`: no outer border or radius; items are separated by dividers only.
     * @default "default"
     */
    variant?: AccordionVariant;
    /**
     * Fixed width of the accordion root.
     * Ensures the component maintains the same width whether open or closed.
     * - `sm`   — 280px. Suitable for sidebars or narrow panels.
     * - `md`   — 480px. Suitable for content areas and forms.
     * - `full` — 100% of the parent container.
     * @default "full"
     */
    width?: AccordionWidth;
}

export declare const AccordionTrigger: ForwardRefExoticComponent<AccordionTriggerProps & RefAttributes<HTMLButtonElement>>;

/**
 * `type` is intentionally omitted from ButtonHTMLAttributes — it is always
 * set to `"button"` internally to prevent accidental form submission.
 */
export declare interface AccordionTriggerProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type"> {
    children: ReactNode;
}

export declare type AccordionVariant = "default" | "flush";

/**
 * Controls the fixed width of the Accordion.
 * - `sm`   — 280px. Suitable for sidebars or narrow panels.
 * - `md`   — 480px. Suitable for content areas and forms.
 * - `full` — 100% of the parent container. Default behavior.
 */
declare type AccordionWidth = "sm" | "md" | "full";

export declare const Badge: ForwardRefExoticComponent<BadgeProps & RefAttributes<HTMLSpanElement>>;

export declare interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
    variant?: BadgeVariant;
}

export declare type BadgeVariant = "default" | "success" | "warning" | "danger" | "count";

export declare const Box: ForwardRefExoticComponent<BoxProps & RefAttributes<HTMLDivElement>>;

export declare interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Content to render inside the box */
    children?: ReactNode;
    /**
     * Visual variant of the box.
     *
     * - `glass` — Glassmorphism effect with gradient background, blur, and subtle border (default)
     * - `solid` — Solid dark surface without transparency
     * - `ghost` — Transparent with only a subtle border
     */
    variant?: "glass" | "solid" | "ghost";
    /**
     * Padding preset applied to the box.
     *
     * - `none` — No padding
     * - `sm` — Small padding
     * - `md` — Medium padding (default)
     * - `lg` — Large padding
     */
    padding?: "none" | "sm" | "md" | "lg";
    /**
     * Whether to render the box as a semantic `<section>` element.
     * Defaults to `false` (renders as `<div>`).
     */
    asSection?: boolean;
}

export declare const Button: ForwardRefExoticComponent<ButtonProps & RefAttributes<HTMLButtonElement>>;

export declare interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "danger";
    size?: "sm" | "md" | "lg";
    isLoading?: boolean;
    /**
     * Optional icon rendered to the left of the button label.
     * Accepts any ReactNode (SVG, img, icon component).
     */
    icon?: ReactNode;
}

export declare const Checkbox: ForwardRefExoticComponent<CheckboxProps & RefAttributes<HTMLInputElement>>;

export declare interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}

export declare function DataTable<T = unknown>({ columns, data, rowKey, showSearch, searchPlaceholder, searchValue, onSearchChange, onSearchClear, searchIcon, filters, onFilterClick, onFilterRemove, showPagination, currentPage, totalPages, onPageChange, emptyMessage, renderActions, className, ...rest }: DataTableProps<T>): JSX.Element;

export declare namespace DataTable {
    var displayName: string;
}

export declare const DataTableCell: ForwardRefExoticComponent<DataTableCellProps & RefAttributes<HTMLTableCellElement>>;

export declare interface DataTableCellProps extends TdHTMLAttributes<HTMLTableCellElement> {
    /** Column text alignment. */
    align?: "left" | "center" | "right";
}

export declare interface DataTableColumn<T = unknown> {
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

export declare interface DataTableFilter {
    /** Unique identifier for the filter. */
    id: string;
    /** Display label, e.g. "Aprovados (5)". */
    label: string;
    /** Whether this filter is currently active/selected. */
    active?: boolean;
}

export declare const DataTableHead: ForwardRefExoticComponent<DataTableHeadProps & RefAttributes<HTMLTableCellElement>>;

export declare interface DataTableHeadProps extends ThHTMLAttributes<HTMLTableCellElement> {
    /** Column text alignment. */
    align?: "left" | "center" | "right";
}

export declare const DataTablePaginator: ForwardRefExoticComponent<DataTablePaginatorProps & RefAttributes<HTMLDivElement>>;

export declare interface DataTablePaginatorProps extends HTMLAttributes<HTMLDivElement> {
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

export declare interface DataTableProps<T = unknown> extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
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
    /**
     * Filter tag definitions rendered below the search field.
     * Uses the Tag component internally.
     */
    filters?: DataTableFilter[];
    /** Callback fired when a filter tag is clicked. */
    onFilterClick?: (filterId: string) => void;
    /** Callback fired when a filter tag is removed. */
    onFilterRemove?: (filterId: string) => void;
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
    /**
     * Content displayed when `data` is empty.
     * @default "No data available."
     */
    emptyMessage?: ReactNode;
    /**
     * Optional slot rendered at the end of each row for action buttons.
     */
    renderActions?: (row: T, rowIndex: number) => ReactNode;
}

export declare const DataTableRow: ForwardRefExoticComponent<DataTableRowProps & RefAttributes<HTMLTableRowElement>>;

export declare interface DataTableRowProps extends HTMLAttributes<HTMLTableRowElement> {
}

export declare const ErrorMessage: ForwardRefExoticComponent<ErrorMessageProps & RefAttributes<HTMLParagraphElement>>;

export declare interface ErrorMessageProps extends HTMLAttributes<HTMLParagraphElement> {
    id?: string;
    children: React.ReactNode;
}

export declare function FormField({ label, description, error, id, children, }: FormFieldProps): JSX.Element;

export declare interface FormFieldProps {
    label?: string;
    description?: string;
    error?: string;
    /** ID do campo — gerado automaticamente via useId() se omitido */
    id?: string;
    children: ReactElement;
}

export declare const Input: ForwardRefExoticComponent<InputProps & RefAttributes<HTMLInputElement>>;

export declare interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
    error?: string;
    variant?: InputVariant;
    /** Tamanho visual do input. Substitui o atributo nativo `size` (number). */
    size?: InputSize;
}

export declare type InputSize = "sm" | "md" | "lg";

export declare type InputVariant = "outline" | "filled";

export declare const Label: ForwardRefExoticComponent<LabelProps & RefAttributes<HTMLLabelElement>>;

export declare interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
}

export declare const SearchField: ForwardRefExoticComponent<SearchFieldProps & RefAttributes<HTMLInputElement>>;

export declare interface SearchFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "type"> {
    /**
     * Visual size of the field.
     * @default "md"
     */
    size?: SearchFieldSize;
    /**
     * Icon rendered on the left side of the field.
     * Accepts any ReactNode (SVG, img, icon component).
     * Typically a magnifying glass icon.
     */
    leadingIcon?: ReactNode;
    /**
     * Icon or action rendered on the right side of the field.
     * Useful for a clear button or a keyboard shortcut hint.
     */
    trailingIcon?: ReactNode;
    /**
     * Callback fired when the clear button is clicked.
     * When provided alongside a non-empty value, a clear (×) button is
     * rendered on the right, replacing `trailingIcon`.
     */
    onClear?: () => void;
}

export declare type SearchFieldSize = "sm" | "md" | "lg";

export declare const SideBar: ForwardRefExoticComponent<SideBarProps & RefAttributes<HTMLElement>>;

export declare function SideBarItem({ icon, label, active, badge, badgeMax, asButton, className, ...rest }: SideBarItemProps): JSX.Element;

export declare namespace SideBarItem {
    var displayName: string;
}

export declare interface SideBarItemProps extends HTMLAttributes<HTMLElement> {
    /** The icon to render. Accepts any ReactNode (SVG, img, icon component). */
    icon: ReactNode;
    /** Text label displayed below the icon. */
    label: string;
    /**
     * Whether this item is currently active/selected.
     * @default false
     */
    active?: boolean;
    /**
     * Optional badge count. When provided, a Badge with variant="count" is
     * rendered overlaying the icon.
     */
    badge?: number;
    /**
     * Maximum badge value before showing "max+".
     * @default 99
     */
    badgeMax?: number;
    /**
     * Render as a `<button>` instead of `<a>`.
     * Useful when the item triggers an action rather than navigation.
     * @default false
     */
    asButton?: boolean;
    /** Navigation URL. Only used when rendering as `<a>` (default). */
    href?: string;
}

export declare interface SideBarProps extends HTMLAttributes<HTMLElement> {
    /**
     * Logo or brand element rendered at the top of the sidebar.
     * Accepts any ReactNode (img, SVG, icon component).
     */
    logo?: ReactNode;
    /**
     * Navigation items. Should be SideBarItem components.
     */
    children: ReactNode;
}

export declare const Switch: ForwardRefExoticComponent<SwitchProps & RefAttributes<HTMLInputElement>>;

export declare interface SwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
    id: string;
    label?: string;
    size?: SwitchSize;
}

export declare type SwitchSize = "sm" | "md" | "lg";

export declare const Tag: ForwardRefExoticComponent<TagProps & RefAttributes<HTMLSpanElement>>;

export declare interface TagProps extends HTMLAttributes<HTMLSpanElement> {
    /** The label displayed inside the tag. */
    label: string;
    /**
     * Callback fired when the remove button (×) is clicked.
     * When provided, the remove button is rendered.
     * When omitted, the tag is display-only (no remove button).
     */
    onRemove?: () => void;
    /**
     * Accessible label for the remove button.
     * @default `"Remove ${label}"`
     */
    removeLabel?: string;
    /**
     * Whether the tag is in a selected/active state.
     * @default false
     */
    active?: boolean;
}

export declare const Textarea: ForwardRefExoticComponent<TextareaProps & RefAttributes<HTMLTextAreaElement>>;

export declare interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    variant?: TextareaVariant;
    size?: TextareaSize;
}

export declare type TextareaSize = "sm" | "md" | "lg";

export declare type TextareaVariant = "outline" | "filled";

export { }
