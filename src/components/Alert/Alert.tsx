import { forwardRef } from "react";
import type { AlertProps, AlertVariant } from "./Alert.types";
import styles from "./Alert.module.css";
import { cx } from "@/utils";

// ─── Default icons per variant ────────────────────────────────────────────────
const DefaultIcon = ({ variant }: { variant: AlertVariant }) => {
  const icons: Record<AlertVariant, JSX.Element> = {
    info: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" focusable="false">
        <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 7v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="8" cy="5" r="0.75" fill="currentColor" />
      </svg>
    ),
    success: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" focusable="false">
        <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
        <path d="M5 8l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    warning: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" focusable="false">
        <path d="M8 2L14.5 13H1.5L8 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M8 6v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="8" cy="11" r="0.75" fill="currentColor" />
      </svg>
    ),
    danger: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" focusable="false">
        <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 6L6 10M6 6l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  };
  return icons[variant];
};

const CloseIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" focusable="false">
    <path d="M11 3L3 11M3 3l8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

// ─── Alert ────────────────────────────────────────────────────────────────────
export const Alert = forwardRef<HTMLDivElement, AlertProps>(
  (
    {
      variant = "info",
      title,
      icon,
      onClose,
      closeAriaLabel = "Dismiss alert",
      children,
      className,
      ...props
    },
    ref,
  ) => {
    const renderedIcon = icon !== undefined ? icon : <DefaultIcon variant={variant} />;

    return (
      <div
        ref={ref}
        role="alert"
        className={cx(styles.alert, styles[variant], className)}
        {...props}
      >
        {renderedIcon && (
          <span className={styles.icon}>{renderedIcon}</span>
        )}

        <div className={styles.body}>
          {title && <div className={styles.title}>{title}</div>}
          {children && <div className={styles.description}>{children}</div>}
        </div>

        {onClose && (
          <button
            type="button"
            className={styles.closeButton}
            onClick={onClose}
            aria-label={closeAriaLabel}
          >
            <CloseIcon />
          </button>
        )}
      </div>
    );
  },
);

Alert.displayName = "Alert";
