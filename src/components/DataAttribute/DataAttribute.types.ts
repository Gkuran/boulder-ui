import type { HTMLAttributes, ReactNode } from "react";

/**
 * Layout orientation of the DataAttribute component.
 * - `horizontal` — Label and value are placed side by side on the same row.
 *                  Ideal for compact panels such as Sidebar or Card.
 * - `vertical`   — Label is placed above the value on separate lines.
 *                  Ideal for longer text values such as field notes or descriptions.
 */
export type DataAttributeOrientation = "horizontal" | "vertical";

/**
 * Horizontal alignment of label and value when `orientation` is `"horizontal"`.
 * - `between` — Label is left-aligned, value is pushed to the right edge. Default.
 * - `left`    — Both label and value are left-aligned with a gap between them.
 */
export type DataAttributeAlign = "between" | "left";

export interface DataAttributeProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The attribute name or label. Accepts any ReactNode (string, icon + string, etc.).
   * @example "Coordinates"
   * @example "pH"
   * @example <><LeafIcon /> "Species"</>
   */
  label: ReactNode;

  /**
   * The attribute value. Accepts any ReactNode to allow rich content such as
   * badges, italic species names, links to public data sources, etc.
   * @example "3°42′11″ S, 60°01′34″ W"
   * @example <i>Panthera onca</i>
   * @example <Badge variant="danger">EN</Badge>
   */
  value: ReactNode;

  /**
   * Layout orientation of the component.
   * @default "horizontal"
   */
  orientation?: DataAttributeOrientation;

  /**
   * Horizontal alignment strategy. Only applies when `orientation` is `"horizontal"`.
   * @default "between"
   */
  align?: DataAttributeAlign;

  /**
   * Fallback text displayed when `value` is `null`, `undefined`, or an empty string.
   * @default "N/A"
   */
  fallback?: string;

  /**
   * When `true`, applies `text-overflow: ellipsis` to the value to prevent
   * long strings from overflowing their container.
   * @default false
   */
  truncate?: boolean;
}
