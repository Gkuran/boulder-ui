import { Children, forwardRef, isValidElement } from "react";
import type {
  BreadcrumbsItemProps,
  BreadcrumbsRootProps,
  BreadcrumbsSeparatorProps,
} from "./Breadcrumbs.types";
import styles from "./Breadcrumbs.module.css";
import { cx } from "@/utils";

// ─── BreadcrumbsRoot ──────────────────────────────────────────────────────────
export const BreadcrumbsRoot = forwardRef<HTMLElement, BreadcrumbsRootProps>(
  (
    { "aria-label": ariaLabel = "Breadcrumb", children, className, ...props },
    ref,
  ) => {
    const items = Children.toArray(children).filter(isValidElement);

    return (
      <nav
        ref={ref}
        aria-label={ariaLabel}
        className={cx(styles.nav, className)}
        {...props}
      >
        <ol className={styles.list}>
          {items.map((item, index) => (
            <li key={index} className={styles.listItem}>
              {item}
            </li>
          ))}
        </ol>
      </nav>
    );
  },
);
BreadcrumbsRoot.displayName = "BreadcrumbsRoot";

// ─── BreadcrumbsItem ──────────────────────────────────────────────────────────
export const BreadcrumbsItem = forwardRef<HTMLAnchorElement, BreadcrumbsItemProps>(
  ({ isCurrent = false, children, className, ...props }, ref) => {
    if (isCurrent) {
      return (
        <span
          className={cx(styles.current, className)}
          aria-current="page"
        >
          {children}
        </span>
      );
    }

    return (
      <a
        ref={ref}
        className={cx(styles.link, className)}
        {...props}
      >
        {children}
      </a>
    );
  },
);
BreadcrumbsItem.displayName = "BreadcrumbsItem";

// ─── BreadcrumbsSeparator ─────────────────────────────────────────────────────
export const BreadcrumbsSeparator = forwardRef<HTMLSpanElement, BreadcrumbsSeparatorProps>(
  ({ children = "/", className, ...props }, ref) => (
    <span
      ref={ref}
      className={cx(styles.separator, className)}
      aria-hidden="true"
      {...props}
    >
      {children}
    </span>
  ),
);
BreadcrumbsSeparator.displayName = "BreadcrumbsSeparator";

// ─── Namespace export ─────────────────────────────────────────────────────────
export const Breadcrumbs = {
  Root: BreadcrumbsRoot,
  Item: BreadcrumbsItem,
  Separator: BreadcrumbsSeparator,
};
