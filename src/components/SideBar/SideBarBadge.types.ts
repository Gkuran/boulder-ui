export interface SideBarBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** The numeric value displayed inside the badge. */
  count: number;

  /**
   * Maximum value before showing "max+".
   * @default 99
   */
  max?: number;
}
