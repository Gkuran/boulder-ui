import type { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from "react";

export interface DropdownMenuRootProps {
  /**
   * Controls the open state externally.
   */
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  /**
   * @default false
   */
  defaultOpen?: boolean;
  children: ReactNode;
}

export interface DropdownMenuTriggerProps {
  children: ReactNode;
  /** @internal */
  _open?: boolean;
  /** @internal */
  _onToggle?: () => void;
  /** @internal */
  _triggerId?: string;
  /** @internal */
  _contentId?: string;
}

export interface DropdownMenuContentProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  /** @internal */
  _open?: boolean;
  /** @internal */
  _triggerId?: string;
  /** @internal */
  _contentId?: string;
}

export interface DropdownMenuItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * When true, renders the item in a destructive (danger) style.
   * @default false
   */
  destructive?: boolean;
  children: ReactNode;
}

export interface DropdownMenuSeparatorProps extends HTMLAttributes<HTMLHRElement> {}
