import type { AnchorHTMLAttributes, HTMLAttributes, ReactNode } from "react";

export interface BreadcrumbsRootProps extends HTMLAttributes<HTMLElement> {
  /**
   * Accessible label for the navigation landmark.
   * @default "Breadcrumb"
   */
  "aria-label"?: string;
  children: ReactNode;
}

export interface BreadcrumbsItemProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /**
   * When true, renders the item as plain text (current page) instead of a link.
   * @default false
   */
  isCurrent?: boolean;
  children: ReactNode;
}

export interface BreadcrumbsSeparatorProps extends HTMLAttributes<HTMLSpanElement> {
  children?: ReactNode;
}
