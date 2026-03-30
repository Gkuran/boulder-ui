import type { HTMLAttributes } from "react";

export type DividerOrientation = "horizontal" | "vertical";
export type DividerVariant = "solid" | "dashed";

export interface DividerProps extends HTMLAttributes<HTMLHRElement> {
  /**
   * Orientation of the divider line.
   * @default "horizontal"
   */
  orientation?: DividerOrientation;
  /**
   * Line style of the divider.
   * @default "solid"
   */
  variant?: DividerVariant;
}
