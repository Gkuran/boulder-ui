import type { HTMLAttributes, ReactNode } from "react";

export interface TabsRootProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The value of the tab selected by default (uncontrolled).
   */
  defaultValue?: string;
  /**
   * The controlled value of the selected tab.
   */
  value?: string;
  /**
   * Called when the selected tab changes.
   */
  onValueChange?: (value: string) => void;
  children: ReactNode;
}

export interface TabsListProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export interface TabsTriggerProps extends HTMLAttributes<HTMLButtonElement> {
  /**
   * The unique value that identifies this tab.
   */
  value: string;
  /**
   * When true, the tab cannot be selected.
   * @default false
   */
  disabled?: boolean;
  children: ReactNode;
  /** @internal */
  _selectedValue?: string;
  /** @internal */
  _onSelect?: (value: string) => void;
}

export interface TabsContentProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The value that must match the selected tab for this panel to be visible.
   */
  value: string;
  children: ReactNode;
  /** @internal */
  _selectedValue?: string;
}
